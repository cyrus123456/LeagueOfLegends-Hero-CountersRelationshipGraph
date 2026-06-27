/**
 * OP.GG 英雄"对线劣势"数据爬取脚本（已合并到 scrape-opgg-counters.mjs）
 * 此文件保留向后兼容，实际调用合并脚本
 *
 * 使用方法: node scripts/scrape-opgg-hard-counters.mjs
 * 参数同 scrape-opgg-counters.mjs
 */
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const script = path.join(__dirname, 'scrape-opgg-counters.mjs');
const args = process.argv.slice(2);

try {
  execFileSync('node', [script, ...args], { stdio: 'inherit' });
} catch (err) {
  process.exit(err.status || 1);
}