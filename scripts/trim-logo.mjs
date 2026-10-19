import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const input = fileURLToPath(new URL('../public/images/logo/viccccccooohhhhh.jpg__1_-removebg-preview (1).png', import.meta.url));
const output = fileURLToPath(new URL('../public/images/logo/logo.png', import.meta.url));
const original = await sharp(input).metadata();

let trimmed = await sharp(input).trim().png().toBuffer({ resolveWithObject: true });
const originalArea = original.width * original.height;
let trimMethod = 'trim()';

if (trimmed.info.width * trimmed.info.height >= originalArea * 0.95) {
  trimmed = await sharp(input)
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 10 })
    .png()
    .toBuffer({ resolveWithObject: true });
  trimMethod = 'trim({ background: transparent, threshold: 10 })';
}

if (trimmed.info.width * trimmed.info.height >= originalArea * 0.95) {
  throw new Error('Transparent padding was not materially trimmed, including with threshold 10. No output was written.');
}

await sharp(trimmed.data)
  .extend({ top: 4, bottom: 4, left: 4, right: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(output);

const result = await sharp(output).metadata();
console.log(`Original: ${original.width} x ${original.height}px`);
console.log(`Trimmed base: ${trimmed.info.width} x ${trimmed.info.height}px`);
console.log(`Trimmed with 4px padding: ${result.width} x ${result.height}px`);
console.log(`Method: ${trimMethod}`);
