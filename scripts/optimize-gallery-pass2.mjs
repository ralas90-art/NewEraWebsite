/**
 * Second pass: aggressively re-compress images still over 250KB
 * Uses quality down to q30 and width down to 900px
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.join(__dirname, '..', 'public', 'images', 'gallery-optimized');
const MAX_SIZE_KB = 250;
const SIZE_BYTES = MAX_SIZE_KB * 1024;

async function recompressImage(filePath) {
  const before = fs.statSync(filePath).size;
  if (before <= SIZE_BYTES) return null; // already under limit

  const beforeKB = (before / 1024).toFixed(1);
  
  // Read source into memory first to release the file handle
  const srcBuffer = fs.readFileSync(filePath);
  
  let outputBuffer;
  let quality = 50;
  let width = 1000;

  while (quality >= 28) {
    outputBuffer = await sharp(srcBuffer)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toBuffer();

    if (outputBuffer.length <= SIZE_BYTES || quality <= 28) break;
    quality -= 5;
    if (quality <= 35) width = 900; // also shrink width for very stubborn images
  }

  const afterKB = (outputBuffer.length / 1024).toFixed(1);
  const saved = ((1 - outputBuffer.length / before) * 100).toFixed(0);

  // Write to separate output file first, then copy
  const tmpPath = path.join(path.dirname(filePath), '_recomp_' + path.basename(filePath));
  fs.writeFileSync(tmpPath, outputBuffer);

  // Read back from temp, then delete original, then write final
  const finalBuffer = fs.readFileSync(tmpPath);
  try { fs.unlinkSync(tmpPath); } catch(_) {}
  try { fs.unlinkSync(filePath); } catch(_) {}
  await new Promise(r => setTimeout(r, 150));
  fs.writeFileSync(filePath, finalBuffer);

  const status = outputBuffer.length <= SIZE_BYTES ? '✅' : '⚠️ STILL OVER';
  console.log(`  ${path.relative(SRC_DIR, filePath)}: ${beforeKB}KB → ${afterKB}KB (q${quality}, w${width}, -${saved}%) ${status}`);
  return { before, after: outputBuffer.length, path: filePath };
}

async function main() {
  console.log('🔁 Second Pass — Aggressive Re-compression of Oversize Images\n');

  const oversize = [];
  const folders = fs.readdirSync(SRC_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory()).map(d => d.name).sort();

  for (const folder of folders) {
    const folderPath = path.join(SRC_DIR, folder);
    const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.webp'));
    for (const file of files) {
      const fp = path.join(folderPath, file);
      const size = fs.statSync(fp).size;
      if (size > SIZE_BYTES) oversize.push(fp);
    }
  }

  if (oversize.length === 0) {
    console.log('✅ All images are already under 250KB!');
    return;
  }

  console.log(`Found ${oversize.length} images over 250KB:\n`);
  for (const fp of oversize) {
    await recompressImage(fp);
  }

  // Final size check
  console.log('\n📊 Final size check on all images:');
  let total = 0, count = 0, overCount = 0;
  for (const folder of folders) {
    const folderPath = path.join(SRC_DIR, folder);
    const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.webp'));
    for (const file of files) {
      const size = fs.statSync(path.join(folderPath, file)).size;
      total += size;
      count++;
      if (size > SIZE_BYTES) overCount++;
    }
  }
  console.log(`   Total: ${count} images, avg ${(total/count/1024).toFixed(1)}KB`);
  console.log(`   Still over 250KB: ${overCount}`);
}

main().catch(e => { console.error(e); process.exit(1); });
