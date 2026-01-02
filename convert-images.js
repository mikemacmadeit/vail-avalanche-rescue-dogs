import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const photosDir = join(__dirname, 'public', 'photos');
const outputDir = join(__dirname, 'public', 'photos', 'webp');

async function convertImages() {
  try {
    // Create webp directory if it doesn't exist
    const { mkdir } = await import('fs/promises');
    try {
      await mkdir(outputDir, { recursive: true });
    } catch (err) {
      // Directory might already exist
    }

    const files = await readdir(photosDir);
    const imageFiles = files.filter(file => {
      const ext = extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.avif'].includes(ext);
    });

    console.log(`Found ${imageFiles.length} images to convert...`);

    for (const file of imageFiles) {
      const inputPath = join(photosDir, file);
      const name = basename(file, extname(file));
      const outputPath = join(outputDir, `${name}.webp`);

      try {
        await sharp(inputPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath);
        console.log(`✓ Converted: ${file} → ${name}.webp`);
      } catch (error) {
        console.error(`✗ Failed to convert ${file}:`, error.message);
      }
    }

    console.log('\nConversion complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

convertImages();








