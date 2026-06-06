import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const sourceAsset = path.join(publicDir, 'impressionist-orb-identity-upscaled.png');
const pwaDir = path.join(publicDir, 'pwa');
const splashDir = path.join(pwaDir, 'apple-splash');

const iconSpecs = [
  { filename: 'favicon-16x16.png', width: 16, height: 16, orbScale: 0.68 },
  { filename: 'favicon-32x32.png', width: 32, height: 32, orbScale: 0.68 },
  { filename: 'icon-192.png', width: 192, height: 192, orbScale: 0.7 },
  { filename: 'icon-256.png', width: 256, height: 256, orbScale: 0.7 },
  { filename: 'icon-384.png', width: 384, height: 384, orbScale: 0.7 },
  { filename: 'icon-512.png', width: 512, height: 512, orbScale: 0.7 },
  { filename: 'icon-maskable-512.png', width: 512, height: 512, orbScale: 0.58 },
  { filename: 'icon-maskable-1024.png', width: 1024, height: 1024, orbScale: 0.58 },
  { filename: 'apple-touch-icon-152.png', width: 152, height: 152, orbScale: 0.66 },
  { filename: 'apple-touch-icon-167.png', width: 167, height: 167, orbScale: 0.66 },
  { filename: 'apple-touch-icon-180.png', width: 180, height: 180, orbScale: 0.66 }
];

const splashSpecs = [
  { filename: 'apple-splash-640x1136.png', width: 640, height: 1136, orbScale: 0.52 },
  { filename: 'apple-splash-750x1334.png', width: 750, height: 1334, orbScale: 0.52 },
  { filename: 'apple-splash-828x1792.png', width: 828, height: 1792, orbScale: 0.48 },
  { filename: 'apple-splash-1125x2436.png', width: 1125, height: 2436, orbScale: 0.46 },
  { filename: 'apple-splash-1170x2532.png', width: 1170, height: 2532, orbScale: 0.46 },
  { filename: 'apple-splash-1242x2208.png', width: 1242, height: 2208, orbScale: 0.48 },
  { filename: 'apple-splash-1242x2688.png', width: 1242, height: 2688, orbScale: 0.44 },
  { filename: 'apple-splash-1284x2778.png', width: 1284, height: 2778, orbScale: 0.44 },
  { filename: 'apple-splash-1536x2048.png', width: 1536, height: 2048, orbScale: 0.44 },
  { filename: 'apple-splash-1668x2224.png', width: 1668, height: 2224, orbScale: 0.44 },
  { filename: 'apple-splash-1668x2388.png', width: 1668, height: 2388, orbScale: 0.44 },
  { filename: 'apple-splash-2048x2732.png', width: 2048, height: 2732, orbScale: 0.42 }
];

function makeBackdropSvg(width, height, mode) {
  const orbGlowY = Math.round(height * 0.4);
  const orbGlowRadius = Math.round(Math.min(width, height) * (mode === 'icon' ? 0.27 : 0.2));
  const cornerRadius = mode === 'icon' ? Math.round(width * 0.22) : 0;

  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="base" x1="0" y1="0" x2="${width}" y2="${height}" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FCF2E2" />
          <stop offset="48%" stop-color="#F3E3D9" />
          <stop offset="100%" stop-color="#DDE7F4" />
        </linearGradient>
        <radialGradient id="sun" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(${Math.round(width * 0.42)} ${Math.round(height * 0.18)}) rotate(90) scale(${Math.round(height * 0.34)} ${Math.round(width * 0.42)})">
          <stop offset="0%" stop-color="#FFF7E6" stop-opacity="0.96" />
          <stop offset="100%" stop-color="#FFF7E6" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="sky" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(${Math.round(width * 0.78)} ${Math.round(height * 0.76)}) rotate(90) scale(${Math.round(height * 0.4)} ${Math.round(width * 0.42)})">
          <stop offset="0%" stop-color="#95CDEE" stop-opacity="0.46" />
          <stop offset="100%" stop-color="#95CDEE" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="rose" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(${Math.round(width * 0.18)} ${Math.round(height * 0.72)}) rotate(90) scale(${Math.round(height * 0.28)} ${Math.round(width * 0.34)})">
          <stop offset="0%" stop-color="#F4C8D1" stop-opacity="0.34" />
          <stop offset="100%" stop-color="#F4C8D1" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(${Math.round(width * 0.5)} ${orbGlowY}) rotate(90) scale(${orbGlowRadius} ${orbGlowRadius})">
          <stop offset="0%" stop-color="#FFF9EE" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#FFF9EE" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" rx="${cornerRadius}" fill="url(#base)" />
      <rect width="${width}" height="${height}" rx="${cornerRadius}" fill="url(#sun)" />
      <rect width="${width}" height="${height}" rx="${cornerRadius}" fill="url(#sky)" />
      <rect width="${width}" height="${height}" rx="${cornerRadius}" fill="url(#rose)" />
      <circle cx="${Math.round(width * 0.5)}" cy="${orbGlowY}" r="${orbGlowRadius}" fill="url(#halo)" />
    </svg>
  `);
}

async function renderComposite({ filename, width, height, orbScale, directory, mode }) {
  const orbSize = Math.round(Math.min(width, height) * orbScale);
  const orbBuffer = await sharp(sourceAsset)
    .resize({ width: orbSize, height: orbSize, fit: 'contain' })
    .png()
    .toBuffer();

  const top = Math.round((height - orbSize) * (mode === 'splash' ? 0.42 : 0.5));
  const left = Math.round((width - orbSize) / 2);

  await sharp(makeBackdropSvg(width, height, mode))
    .composite([{ input: orbBuffer, top, left }])
    .png()
    .toFile(path.join(directory, filename));
}

async function main() {
  await mkdir(pwaDir, { recursive: true });
  await mkdir(splashDir, { recursive: true });

  await Promise.all(iconSpecs.map((spec) => renderComposite({ ...spec, directory: pwaDir, mode: 'icon' })));
  await Promise.all(splashSpecs.map((spec) => renderComposite({ ...spec, directory: splashDir, mode: 'splash' })));

  console.log(`Generated ${iconSpecs.length} icons and ${splashSpecs.length} Apple splash images.`);
}

main().catch((error) => {
  console.error('Failed to generate PWA assets.');
  console.error(error);
  process.exitCode = 1;
});