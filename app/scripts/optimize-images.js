import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = path.join(__dirname, '@/assets/images');
const outputDir = path.join(__dirname, '@/assets/images/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir)
  .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
  .forEach((file) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, path.basename(file, path.extname(file)) + '.webp');

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`Optimized ${file} to ${outputPath}`))
      .catch((err) => console.error(`Error optimizing ${file}: ${err}`));
  });