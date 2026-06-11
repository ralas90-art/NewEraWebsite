import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOPSFIELD_DIR = path.join(__dirname, '..', 'public', 'images', 'gallery', 'ma-topsfield-01');
const MAX_SIZE_KB = 250;
const SIZE_BYTES = MAX_SIZE_KB * 1024;

async function rotateAndOptimize(filename) {
  const srcPath = path.join(TOPSFIELD_DIR, filename);
  if (!fs.existsSync(srcPath)) {
    console.log(`⚠️ File ${filename} does not exist at ${srcPath}`);
    return;
  }

  const beforeSize = fs.statSync(srcPath).size;
  const beforeKB = (beforeSize / 1024).toFixed(1);

  // Read the original file into memory buffer to avoid file lock
  const srcBuffer = fs.readFileSync(srcPath);

  let quality = 82;
  let outputBuffer;

  // We rotate 90 degrees clockwise to correct the sideways orientation
  while (quality >= 35) {
    outputBuffer = await sharp(srcBuffer)
      .rotate(90) // Rotate 90 degrees clockwise
      .resize({ width: 1200, withoutEnlargement: true }) // Maintains max width limit
      .webp({ quality, effort: 5 }) // Re-encode to WebP and strip EXIF (default)
      .toBuffer();

    if (outputBuffer.length <= SIZE_BYTES || quality <= 35) break;
    quality -= 5;
  }

  const afterKB = (outputBuffer.length / 1024).toFixed(1);
  const status = outputBuffer.length <= SIZE_BYTES ? '✅' : '⚠️ STILL OVER 250KB';

  // Write to temporary file in same folder
  const tempPath = path.join(TOPSFIELD_DIR, `_temp_${filename}`);
  fs.writeFileSync(tempPath, outputBuffer);

  // Remove original, wait 150ms for handle release, rename temp to original
  try {
    fs.unlinkSync(srcPath);
  } catch (err) {
    console.error(`Error deleting original file ${filename}:`, err);
  }

  await new Promise(resolve => setTimeout(resolve, 150));

  try {
    fs.renameSync(tempPath, srcPath);
    console.log(`🔄 Rotated and optimized ${filename}: ${beforeKB}KB → ${afterKB}KB (q${quality}) ${status}`);
  } catch (err) {
    console.error(`Error renaming temp file for ${filename}:`, err);
  }
}

async function main() {
  console.log('🚀 Rotating Topsfield, MA gallery images 90 degrees clockwise...\n');
  const files = ['1.webp', '2.webp', '3.webp', '4.webp'];
  for (const f of files) {
    await rotateAndOptimize(f);
  }
  console.log('\n✨ Done rotating and re-optimizing all files!');
}

main().catch(console.error);
