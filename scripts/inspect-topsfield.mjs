import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOPSFIELD_DIR = path.join(__dirname, '..', 'public', 'images', 'gallery', 'ma-topsfield-01');

async function check() {
  const files = ['1.webp', '2.webp', '3.webp', '4.webp'];
  for (const f of files) {
    const fp = path.join(TOPSFIELD_DIR, f);
    if (!fs.existsSync(fp)) {
      console.log(`${f} does not exist`);
      continue;
    }
    const meta = await sharp(fp).metadata();
    console.log(`${f}: width=${meta.width}, height=${meta.height}, format=${meta.format}, size=${fs.statSync(fp).size} bytes`);
  }
}

check().catch(console.error);
