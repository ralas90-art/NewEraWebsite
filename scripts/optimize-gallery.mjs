/**
 * Gallery Image Optimizer
 * - Strips EXIF/GPS metadata (sharp strips all metadata by default)
 * - Re-encodes images >250KB with progressively lower quality until target is met
 * - Max width: 1200px
 * - Output format: WebP (in-place overwrite via separate output dir)
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GALLERY_DIR = path.join(__dirname, '..', 'public', 'images', 'gallery');
const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'gallery-optimized');
const MAX_SIZE_KB = 250;
const MAX_WIDTH = 1200;
const SIZE_BYTES = MAX_SIZE_KB * 1024;

async function optimizeImage(srcPath, dstPath) {
  const before = fs.statSync(srcPath).size;
  const beforeKB = (before / 1024).toFixed(1);

  // Always run through sharp to strip EXIF; try quality levels until under limit
  let quality = 82;
  let outputBuffer;

  while (quality >= 55) {
    outputBuffer = await sharp(srcPath)
      .rotate() // auto-orient from EXIF before stripping
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality, effort: 4 })
      // No .withMetadata() = strip all metadata (sharp default)
      .toBuffer();

    if (outputBuffer.length <= SIZE_BYTES || quality <= 55) break;
    quality -= 5;
  }

  const afterKB = (outputBuffer.length / 1024).toFixed(1);
  const saved = ((1 - outputBuffer.length / before) * 100).toFixed(0);

  // Write to output path (different dir = no file lock)
  fs.mkdirSync(path.dirname(dstPath), { recursive: true });
  fs.writeFileSync(dstPath, outputBuffer);
  console.log(`  ${path.basename(srcPath)}: ${beforeKB}KB → ${afterKB}KB (q${quality}, -${saved}%)`);

  return { before, after: outputBuffer.length };
}

async function processFolder(folderName) {
  const srcFolder = path.join(GALLERY_DIR, folderName);
  const dstFolder = path.join(OUT_DIR, folderName);
  const files = fs.readdirSync(srcFolder).filter(f => f.endsWith('.webp'));
  if (files.length === 0) return { count: 0, before: 0, after: 0 };

  console.log(`\n📁 ${folderName} (${files.length} images)`);
  let totalBefore = 0, totalAfter = 0;

  for (const file of files.sort()) {
    const srcPath = path.join(srcFolder, file);
    const dstPath = path.join(dstFolder, file);
    const result = await optimizeImage(srcPath, dstPath);
    totalBefore += result.before;
    totalAfter += result.after;
  }

  return { count: files.length, before: totalBefore, after: totalAfter };
}

async function main() {
  console.log('🔧 Gallery Image Optimizer — EXIF Strip + WebP Re-encode\n');
  console.log(`Target: ≤${MAX_SIZE_KB}KB, Max width: ${MAX_WIDTH}px\n`);
  console.log(`Output dir: ${OUT_DIR}\n`);

  // Clean and create output dir
  if (fs.existsSync(OUT_DIR)) {
    fs.rmSync(OUT_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const folders = fs.readdirSync(GALLERY_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();

  let grandBefore = 0, grandAfter = 0, grandCount = 0;

  for (const folder of folders) {
    const result = await processFolder(folder);
    grandBefore += result.before;
    grandAfter += result.after;
    grandCount += result.count;
  }

  const totalSavedMB = ((grandBefore - grandAfter) / (1024 * 1024)).toFixed(2);
  const avgAfterKB = (grandAfter / grandCount / 1024).toFixed(1);

  console.log(`\n✅ Done! Output written to: ${OUT_DIR}`);
  console.log(`   Total images processed: ${grandCount}`);
  console.log(`   Total before: ${(grandBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Total after:  ${(grandAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Saved: ${totalSavedMB} MB`);
  console.log(`   Average optimized size: ${avgAfterKB} KB`);
  console.log(`\n→ Run: Copy-Item -Recurse -Force gallery-optimized/* gallery/ to apply`);
}

main().catch(err => {
  console.error('ERROR:', err);
  process.exit(1);
});
