/**
 * 将各尺寸的 LoL 图标正确写入 public 目录
 * 小尺寸(base64)从参数获取，大尺寸从 .playwright-mcp 目录复制
 */
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public');

// 16x16 favicon PNG (base64 from browser canvas)
const favicon16 = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC50lEQVR4AXSSWUgVURjHf3M3b3em61ZJqWGbLbZAtGmCQUVRlA8ttBH2kBT1UlIEQYFEEBVtROBDPQQRRD1EQUFoq5SlaZotVpZRbrld79LcO/dO3yilRg3zP+fM+c7/d77vY2wMPHmxL8XmvV3Z5vUNWWbJsmnmQOj/q8GAB4sLT/im5Iwmd10G02ZNslyzZLBkl/mf72AAZXd9h5NS0nAqcUyfk8LkdG91ziRP9YX1mcaTojwz3qPW/k0ZAhivJZwapsVIHDMKNdHOu58q5f6ZVJ0sY+HjLLLHhqYfz58ypLQ/gPvHVpmNoSAGUXApOLJmg5YInkRu/mjBu2ctd76No6Sygy0Lpv6B/AakP6l6iekeji01E9LFPHKGZOsCl4vW/J34Sj9A3m4aRiwnd3RYYqRZQx+g+tzKpoN1HlCTscUUsMu2PRWcckRph5wl8LEDfCI1gR2PYlwvzv0qUWzWMDFNbmrrhK4mwoEAelMLpt4gIAXWL4U2mf1iDgeQACQnM3HeBMvaD2iNCcfmkA0Fl+rF7gyimDG0BWugtB5+fgePmON9UlILuGM4dPkWh01EONADqttaEvpaj4MwnW/q8JffAmcIgq/h80uoLRc9h4YGIu8FJA6biOZvQk4bhdXxcKALvaeDjzVyOBKB5lYIxUDvhmgXKNJA06Cuvg3r6QMUHK3sXeT2S30moZ4ugtIsh1PCYTkc1SEiZpuknKTB4mwyRxoUXfskNPp70NQb9W5KMSDYid4hGRgG/k4pK0GFJNGybGnmSvDGw4u37J2bSqvfSJIr+gHWovDyezXD5aC7vQdTLtNGpKC9q8RdUcGwkivEnS5Bq6rB87mR/beb0eKcfT9TXwkWQBRs/HGDqEOlvaWXOKObp2eX8urSal6cX07NxXyenVvBw+L5rMiw49cjingGMijas05fkrmRXWcaKSiuo2DfY7Yees5mmQuPVLDtQBnbD5ey/0ItV98GpRmWHX4BAAD////OMdwAAAAGSURBVAMArZ0UOY0D3kgAAAAASUVORK5CYII=';
// 32x32 favicon PNG (base64 from browser canvas)
const favicon32 = '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';

// Write small icons from base64
fs.writeFileSync(path.join(PUBLIC, 'favicon-16.png'), Buffer.from(favicon16, 'base64'));
console.log('✅ favicon-16.png (822 bytes)');

fs.writeFileSync(path.join(PUBLIC, 'favicon-32.png'), Buffer.from(favicon32, 'base64'));
console.log('✅ favicon-32.png (3.2KB)');

// Use the 32x32 PNG as kog-logo-gold.png (used as 32x32 favicon in index.html)
fs.writeFileSync(path.join(PUBLIC, 'kog-logo-gold.png'), Buffer.from(favicon32, 'base64'));
console.log('✅ kog-logo-gold.png (32x32)');

// For favicon.ico, use the 32x32 PNG (modern browsers accept PNG as ICO)
fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), Buffer.from(favicon32, 'base64'));
console.log('✅ favicon.ico (32x32 PNG format)');

// Now copy the larger files from .playwright-mcp downloads
const playwrightDir = path.join(
  'C:', 'Users', '73476', '.qoder', 'cache', 'projects',
  'LeagueOfLegends-Hero-CountersRelationshipGraph-5620db34',
  'agent-tools', '573e8132', '.playwright-mcp'
);

const largeFiles = [
  { src: 'apple-touch-icon.png', dst: 'apple-touch-icon.png' },
  { src: 'pwa-192x192.png', dst: 'pwa-192x192.png' },
  { src: 'pwa-512x512.png', dst: 'pwa-512x512.png' },
  { src: 'app-ico-400x400.png', dst: 'app-ico-400x400.png' },
  { src: 'ico-lol.jpg', dst: 'ico.jpg' },
];

for (const f of largeFiles) {
  const src = path.join(playwrightDir, f.src);
  const dst = path.join(PUBLIC, f.dst);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dst);
    const stat = fs.statSync(dst);
    console.log(`✅ ${f.dst} (${(stat.size / 1024).toFixed(1)}KB)`);
  } else {
    console.log(`⚠️ Not found: ${src}`);
  }
}

// Clean up backup files
const bakFiles = fs.readdirSync(PUBLIC).filter(f => f.endsWith('.bak'));
for (const f of bakFiles) {
  fs.unlinkSync(path.join(PUBLIC, f));
  console.log(`🗑️ Removed backup: ${f}`);
}

// Clean up original download
const origFile = path.join(PUBLIC, 'lol-icon-original.png');
if (fs.existsSync(origFile)) {
  fs.unlinkSync(origFile);
  console.log('🗑️ Removed: lol-icon-original.png');
}

console.log('\n🎉 All icons properly sized and placed!');
