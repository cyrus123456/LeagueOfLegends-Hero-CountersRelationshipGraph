/**
 * 从浏览器下载的 base64 数据生成各尺寸 LoL 图标
 * 使用 sharp (全局安装) 进行图片处理
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

async function main() {
  // 1. 读取 base64 数据
  const b64Path = 'C:\\Users\\73476\\.qoder\\cache\\projects\\LeagueOfLegends-Hero-CountersRelationshipGraph-5620db34\\agent-tools\\573e8132\\6ae4e6a7.txt';
  console.log('读取 base64 数据...');
  const rawContent = fs.readFileSync(b64Path, 'utf-8');

  // 提取纯 base64 数据 - Playwright 输出格式包含前缀和后缀
  const base64Match = rawContent.match(/"([A-Za-z0-9+/=]+)/);
  if (!base64Match) {
    console.error('无法从文件中提取 base64 数据');
    process.exit(1);
  }
  const base64Data = base64Match[1];

  const originalBuf = Buffer.from(base64Data, 'base64');
  console.log(`原始数据大小: ${originalBuf.length} bytes`);

  // 验证 PNG header
  const header = originalBuf.slice(0, 4).toString('hex');
  if (header !== '89504e47') {
    console.error('错误: 不是 PNG 格式, header:', header);
    process.exit(1);
  }
  console.log('PNG 格式验证通过');

  // 2. 获取原图尺寸
  const metadata = await sharp(originalBuf).metadata();
  console.log(`原图尺寸: ${metadata.width}x${metadata.height}`);

  // 3. 生成各尺寸图标
  const sizes = [
    { name: 'favicon-16.png', size: 16, format: 'png' },
    { name: 'favicon-32.png', size: 32, format: 'png' },
    { name: 'apple-touch-icon.png', size: 180, format: 'png' },
    { name: 'pwa-192x192.png', size: 192, format: 'png' },
    { name: 'pwa-512x512.png', size: 512, format: 'png' },
    { name: 'app-ico-400x400.png', size: 400, format: 'png' },
    { name: 'ico.jpg', size: 400, format: 'jpeg' },
    { name: 'lol-logo-gold.png', size: 32, format: 'png' },
    { name: 'og-image.png', size: 512, format: 'png' },
  ];

  for (const item of sizes) {
    const outputPath = path.join(PUBLIC_DIR, item.name);
    let pipeline = sharp(originalBuf).resize(item.size, item.size, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    });

    if (item.format === 'jpeg') {
      pipeline = pipeline.flatten({ background: { r: 15, g: 23, b: 42 } }) // #0f172a 匹配主题色
        .jpeg({ quality: 90 });
    } else {
      pipeline = pipeline.png();
    }

    await pipeline.toFile(outputPath);
    const stat = fs.statSync(outputPath);
    console.log(`  ✓ ${item.name} (${item.size}x${item.size}) - ${stat.size} bytes`);
  }

  // 4. 生成 favicon.ico (32x32 PNG 作为 ICO - 浏览器兼容)
  const ico32 = await sharp(originalBuf).resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), ico32);
  console.log(`  ✓ favicon.ico (32x32) - ${ico32.length} bytes`);

  // 5. 生成 webp 格式的 app icon
  const webpPath = path.join(PUBLIC_DIR, 'app ico 400x400bb-75.webp');
  await sharp(originalBuf)
    .resize(400, 400, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 75 })
    .toFile(webpPath);
  console.log(`  ✓ app ico 400x400bb-75.webp - ${fs.statSync(webpPath).size} bytes`);

  console.log('\n所有图标已生成！');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
