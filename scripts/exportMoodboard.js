import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createMoodboardExportFromEngine } from '../src/data/moodboardEngine.js';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..');
const weatherEnginePath = path.join(projectRoot, 'src', 'data', 'weather-engine.json');
const packagePath = path.join(projectRoot, 'package.json');
const outputPath = path.join(projectRoot, 'moodboard.export.json');

const [weatherEngineRaw, packageRaw] = await Promise.all([
  readFile(weatherEnginePath, 'utf8'),
  readFile(packagePath, 'utf8'),
]);

const weatherEngine = JSON.parse(weatherEngineRaw);
const packageJson = JSON.parse(packageRaw);

const exportData = createMoodboardExportFromEngine(weatherEngine, {
  sourcePackage: packageJson.name,
  version: packageJson.version,
  exportedAt: new Date().toISOString(),
});

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(exportData, null, 2)}\n`, 'utf8');

console.log(`moodboard.export.json created at ${outputPath}`);
