import weatherEngine from './weather-engine.json';
import {
  CINEMATIC_FAMILIES,
  IMPRESSIONIST_SEASONAL_FAMILIES,
  MOODBOARD_META,
  TIME_OF_DAY_PALETTES,
  WEATHER_ATMOSPHERES,
  WEATHER_DRIVEN_PALETTES,
  buildCinematicPalettes,
  buildImpressionistSeasonalPalettes,
  createMoodboardExportFromEngine,
} from './moodboardEngine.js';

export const SEASONAL_PALETTES = weatherEngine.seasons;
export const CURATED_MOOD_SWATCHES = weatherEngine.moods;
export const WEATHER_TO_MOOD_MAP = weatherEngine.weatherToMood;
export const MOODBOARD_GROUPS = weatherEngine.moodBoardMap.groups;
export const CINEMATIC_PALETTES = buildCinematicPalettes(weatherEngine);
export const IMPRESSIONIST_SEASONAL_PALETTES = buildImpressionistSeasonalPalettes();
export {
  CINEMATIC_FAMILIES,
  IMPRESSIONIST_SEASONAL_FAMILIES,
  MOODBOARD_META,
  TIME_OF_DAY_PALETTES,
  WEATHER_ATMOSPHERES,
  WEATHER_DRIVEN_PALETTES,
};

export function createMoodboardExport({ exportedAt } = {}) {
  return createMoodboardExportFromEngine(weatherEngine, { exportedAt });
}
