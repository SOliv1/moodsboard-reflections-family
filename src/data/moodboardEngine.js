export const MOODBOARD_META = {
  name: 'moodsboard',
  version: '1.0.0',
  description: 'Portable seasonal palettes, curated mood swatches, cinematic and blended swatches, and weather-to-mood mapping.',
};

export const JEWEL_TONE_SWATCHES = {
  cobalt: { name: 'Cobalt Current', hex: '#1746A2' },
  sapphire: { name: 'Sapphire Depth', hex: '#0F2F74' },
  brightSapphire: { name: 'Bright Sapphire', hex: '#1F5EFF' },
  deepBlue: { name: 'Blue Velvet', hex: '#102A56' },
  indigo: { name: 'Indigo Veil', hex: '#31266F' },
  violet: { name: 'Violet Hour', hex: '#5B2E91' },
  fuchsia: { name: 'Deep Fuchsia', hex: '#B31973' },
  magenta: { name: 'Orchid Flame', hex: '#D13F8C' },
  aquamarine: { name: 'Aquamarine Glass', hex: '#2EC4B6' },
  teal: { name: 'Peacock Teal', hex: '#006D77' },
  emerald: { name: 'Emerald Cut', hex: '#047857' },
  ruby: { name: 'Ruby Lacquer', hex: '#A4163A' },
  garnet: { name: 'Garnet Shadow', hex: '#641220' },
  jet: { name: 'Jet Black', hex: '#08090D' },
  jetShimmer: { name: 'Jet Shimmer', hex: '#1B1D2A' },
  firelight: { name: 'FireLight', hex: '#FF7A1A' },
  ember: { name: 'Ember Ruby', hex: '#C9361A' },
  flameGold: { name: 'Flame Gold', hex: '#FFB000' },
  gold: { name: 'Gilded Glint', hex: '#D4A72C' },
  pearl: { name: 'Pearl Lift', hex: '#F3E8D2' },
  whiteOpal: { name: 'White Opal', hex: '#D8DAD2' },
  moonOpal: { name: 'Moon Opal', hex: '#CFCBE3' },
  seaOpal: { name: 'Sea Opal', hex: '#C7E4DF' },
  emberPearl: { name: 'Ember Pearl', hex: '#F7D4B5' },
};

export const BLENDED_TONE_SWATCHES = {
  waterBlue: { name: 'Water Blue', hex: '#8DB9D4' },
  lilyGreen: { name: 'Lily Green', hex: '#A9CFA5' },
  irisLilac: { name: 'Iris Lilac', hex: '#B8A7D8' },
  roseMist: { name: 'Rose Mist', hex: '#E9A9B5' },
  peachLight: { name: 'Peach Light', hex: '#F2B88F' },
  butterGlow: { name: 'Butter Glow', hex: '#F5D77A' },
  mauveShadow: { name: 'Mauve Shadow', hex: '#8D7298' },
  softCerulean: { name: 'Soft Cerulean', hex: '#70A9C7' },
  gardenTeal: { name: 'Garden Teal', hex: '#5FA6A1' },
  blushRose: { name: 'Blush Rose', hex: '#D98292' },
  creamCanvas: { name: 'Cream Canvas', hex: '#F5E8CF' },
  linenWhisper: { name: 'Linen Whisper', hex: '#F1EAD8' },
  zincDawn: { name: 'Zinc Dawn', hex: '#EEF4F6' },
  claretDaydream: { name: 'Claret Daydream', hex: '#71324B' },
  burgundyMurmur: { name: 'Burgundy Murmur', hex: '#6E3348' },
  blueVioletWash: { name: 'Blue-Violet Wash', hex: '#7F8BCB' },
};

export const TIME_OF_DAY_PALETTES = [
  {
    id: 'morning-first-light',
    name: 'Morning — First Light',
    season: 'Morning',
    time: 'Morning',
    range: 'Time of Day',
    tags: ['Mist', 'Peach', 'Awakening'],
    swatches: [
      { name: 'Dawn Mist', hex: '#EAF3EF' },
      { name: 'First Peach', hex: '#F6C9A8' },
      { name: 'Pale Apricot', hex: '#F8DFAF' },
      { name: 'New Leaf', hex: '#B9D8AE' },
      { name: 'Soft Sky', hex: '#A7CDE0' },
    ],
  },
  {
    id: 'afternoon-clear-radiance',
    name: 'Afternoon — Clear Radiance',
    season: 'Afternoon',
    time: 'Afternoon',
    range: 'Time of Day',
    tags: ['Clear', 'Bright', 'Open'],
    swatches: [
      { name: 'High Sun', hex: '#F8D66D' },
      { name: 'Clear Blue', hex: '#69A9D8' },
      { name: 'Garden Bright', hex: '#78BE7C' },
      { name: 'Warm Stucco', hex: '#E7B780' },
      { name: 'Light Shadow', hex: '#8AA0B2' },
    ],
  },
  {
    id: 'midnight-deep-quiet',
    name: 'Midnight — Deep Quiet',
    season: 'Midnight',
    time: 'Midnight',
    range: 'Time of Day',
    tags: ['Nocturne', 'Moon', 'Still'],
    swatches: [
      { name: 'Midnight Ink', hex: '#080B18' },
      { name: 'Blue Black', hex: '#101B33' },
      { name: 'Moon Violet', hex: '#3D315F' },
      { name: 'Night Teal', hex: '#0D4C5A' },
      { name: 'Star Silver', hex: '#C9D3DF' },
    ],
  },
];

export const WEATHER_DRIVEN_PALETTES = [
  {
    id: 'sunlit-clear',
    name: 'Sunlit Clear',
    season: 'Weather',
    time: 'Weather',
    range: 'Weather Driven',
    sourceWeather: ['sunny', 'clear'],
    sourceMood: 'joyful',
    tags: ['Sunny', 'Clear', 'Lifted'],
    swatches: [
      { name: 'Clear Light', hex: '#FFE8A3' },
      { name: 'Sun Warmth', hex: '#FFD27F' },
      { name: 'Open Glow', hex: '#FFBC5A' },
      { name: 'Bright Edge', hex: '#FFA533' },
      { name: 'Solar Pulse', hex: '#FF8C00' },
    ],
  },
  {
    id: 'cloud-reflection',
    name: 'Cloud Reflection',
    season: 'Weather',
    time: 'Weather',
    range: 'Weather Driven',
    sourceWeather: ['cloudy', 'fog'],
    sourceMood: 'reflective',
    tags: ['Cloud', 'Fog', 'Soft'],
    swatches: [
      { name: 'Cloud Paper', hex: '#F2EFEA' },
      { name: 'Mist Stone', hex: '#D9D4CC' },
      { name: 'Quiet Taupe', hex: '#C1BBB2' },
      { name: 'Fog Shadow', hex: '#A8A197' },
      { name: 'Deep Haze', hex: '#8F887E' },
    ],
  },
  {
    id: 'rainstorm-depth',
    name: 'Rainstorm Depth',
    season: 'Weather',
    time: 'Weather',
    range: 'Weather Driven',
    sourceWeather: ['rain', 'heavy_rain', 'storm'],
    sourceMood: 'stormy',
    tags: ['Rain', 'Storm', 'Depth'],
    swatches: [
      { name: 'Rain Glass', hex: '#DDE1E6' },
      { name: 'Storm Blue', hex: '#B8C0CC' },
      { name: 'Cloud Metal', hex: '#8F9AA8' },
      { name: 'Wet Slate', hex: '#6A7480' },
      { name: 'Storm Core', hex: '#4A525C' },
    ],
  },
  {
    id: 'wind-natural',
    name: 'Wind Natural',
    season: 'Weather',
    time: 'Weather',
    range: 'Weather Driven',
    sourceWeather: ['partly_cloudy', 'wind'],
    sourceMood: 'natural',
    tags: ['Wind', 'Leaf', 'Moving'],
    swatches: [
      { name: 'Air Leaf', hex: '#E8F0E5' },
      { name: 'Moving Green', hex: '#CDE0C9' },
      { name: 'Field Light', hex: '#B2D0AD' },
      { name: 'Wind Grove', hex: '#8FB88A' },
      { name: 'Deep Leaf', hex: '#6A9F66' },
    ],
  },
  {
    id: 'snow-quiet',
    name: 'Snow Quiet',
    season: 'Weather',
    time: 'Weather',
    range: 'Weather Driven',
    sourceWeather: ['snow'],
    sourceMood: 'winter',
    tags: ['Snow', 'Ice', 'Still'],
    swatches: [
      { name: 'Snow Light', hex: '#DCEAF7' },
      { name: 'Blue Steel', hex: '#9FBAD4' },
      { name: 'Frost Blue', hex: '#517BA6' },
      { name: 'Moonlit Depth', hex: '#223E5C' },
      { name: 'Winter Ink', hex: '#111C2E' },
    ],
  },
];

export const WEATHER_ATMOSPHERES = [
  {
    id: 'clear-bloom',
    name: 'Clear Bloom',
    description: 'A bright atmospheric lift for clear or sunny conditions.',
    sourceWeather: ['sunny', 'clear'],
    filter: 'saturate(1.08) brightness(1.05)',
    tint: '#FFE8A3',
  },
  {
    id: 'rainwashed-depth',
    name: 'Rainwashed Depth',
    description: 'A cooler softened tint for rain, storm, and wet light.',
    sourceWeather: ['rain', 'heavy_rain', 'storm'],
    filter: 'saturate(0.94) hue-rotate(8deg) brightness(0.97)',
    tint: '#B8C0CC',
  },
  {
    id: 'fog-veil',
    name: 'Fog Veil',
    description: 'A low-contrast veil for cloudy, foggy, and reflective scenes.',
    sourceWeather: ['cloudy', 'fog'],
    filter: 'saturate(0.9) brightness(1.03)',
    tint: '#D9D4CC',
  },
  {
    id: 'snow-glow',
    name: 'Snow Glow',
    description: 'A cool luminous lift for snow and winter stillness.',
    sourceWeather: ['snow'],
    filter: 'saturate(0.96) brightness(1.06)',
    tint: '#DCEAF7',
  },
];

export const IMPRESSIONIST_SEASONAL_FAMILIES = [
  {
    id: 'water-garden-haze',
    title: 'Water Garden',
    description: 'Soft water, lily green, and lilac shadow in a luminous blend.',
    season: 'Spring',
    time: 'Day',
    name: 'Water Garden Haze',
    tags: ['Water', 'Lilac', 'Lily'],
    blendStops: ['waterBlue', 'lilyGreen', 'irisLilac', 'roseMist', 'linenWhisper'],
  },
  {
    id: 'rose-lantern',
    title: 'Rose Lantern',
    description: 'Rose, peach, and warm cream for a brushed evening glow.',
    season: 'Summer',
    time: 'Evening',
    name: 'Rose Lantern',
    tags: ['Rose', 'Peach', 'Glow'],
    blendStops: ['blushRose', 'peachLight', 'butterGlow', 'claretDaydream', 'burgundyMurmur'],
  },
  {
    id: 'lilac-riverlight',
    title: 'Lilac Riverlight',
    description: 'Blue-violet wash, cerulean, and green for airy colour movement.',
    season: 'Winter',
    time: 'Day',
    name: 'Lilac Riverlight',
    tags: ['Lilac', 'Cerulean', 'Air'],
    blendStops: ['blueVioletWash', 'softCerulean', 'gardenTeal', 'irisLilac', 'zincDawn'],
  },
];

export const CINEMATIC_FAMILIES = [
  {
    id: 'noir',
    title: 'Noir',
    description: 'Deep, cool, high-contrast tones.',
    mood: 'reflective',
    season: 'winter',
    name: 'Noir Indigo',
    tags: ['Dusk', 'Cool', 'High contrast'],
    seasonStops: ['text', 'shadow'],
    moodStops: [4, 3, 1],
    swatchNames: ['Midnight Ink', 'Moonsteel', 'Smoked Violet', 'Blue Shadow', 'Frost Trace'],
  },
  {
    id: 'dusk',
    title: 'Dusk',
    description: 'Soft, evening light with gentle contrast.',
    mood: 'calm',
    season: 'autumn',
    name: 'Velvet Dusk',
    tags: ['Evening', 'Soft', 'Grounded'],
    seasonStops: ['shadow', 'accent', 'primary'],
    moodStops: [4, 2],
    swatchNames: ['Velvet Umber', 'Quiet Taupe', 'Cloud Veil', 'Soft Clay', 'Dusk Paper'],
  },
  {
    id: 'jewel',
    title: 'Jewel',
    description: 'Rich gemstone colour with a luminous feel.',
    mood: 'natural',
    season: 'spring',
    name: 'Cobalt Jewel',
    tags: ['Cobalt', 'Emerald', 'Aquamarine'],
    jewelStops: ['sapphire', 'cobalt', 'aquamarine', 'emerald', 'gold'],
  },
  {
    id: 'indigo-violet',
    title: 'Indigo Violet',
    description: 'Blue-violet depth with a bright fuchsia pulse.',
    mood: 'reflective',
    season: 'winter',
    name: 'Indigo Violet Bloom',
    tags: ['Indigo', 'Violet', 'Fuchsia'],
    jewelStops: ['deepBlue', 'indigo', 'violet', 'fuchsia', 'moonOpal'],
  },
  {
    id: 'aquamarine-emerald',
    title: 'Aquamarine Emerald',
    description: 'Clear water-light, peacock teal, and deep green shine.',
    mood: 'natural',
    season: 'spring',
    name: 'Aquamarine Emerald',
    tags: ['Aquamarine', 'Teal', 'Emerald'],
    jewelStops: ['aquamarine', 'teal', 'emerald', 'sapphire', 'seaOpal'],
  },
  {
    id: 'sapphire-jet-shimmer',
    title: 'Sapphire Jet',
    description: 'Sapphire blues against polished black shimmer.',
    mood: 'stormy',
    season: 'winter',
    name: 'Sapphire Jet Shimmer',
    tags: ['Sapphire', 'Jet', 'Shimmer'],
    jewelStops: ['jet', 'jetShimmer', 'sapphire', 'brightSapphire', 'whiteOpal'],
  },
  {
    id: 'ruby-fuchsia',
    title: 'Ruby Fuchsia',
    description: 'Deep pink-red intensity with cinematic shadow.',
    mood: 'joyful',
    season: 'autumn',
    name: 'Ruby Fuchsia Velvet',
    tags: ['Ruby', 'Fuchsia', 'Garnet'],
    jewelStops: ['garnet', 'ruby', 'fuchsia', 'magenta', 'gold'],
  },
  {
    id: 'firelight',
    title: 'FireLight',
    description: 'Ember, flame, and gold for warm cinematic glow.',
    mood: 'orbGlow',
    season: 'summer',
    name: 'FireLight',
    tags: ['FireLight', 'Ember', 'Gold'],
    jewelStops: ['garnet', 'ember', 'firelight', 'flameGold', 'emberPearl'],
  },
  {
    id: 'storm',
    title: 'Storm',
    description: 'Weathered, moody palettes with depth.',
    mood: 'stormy',
    season: 'winter',
    name: 'Storm Jewel',
    tags: ['Storm', 'Jewel', 'Atmospheric'],
    seasonStops: ['text'],
    moodStops: [4, 3, 2, 1],
    swatchNames: ['Storm Core', 'Slate Surge', 'Rain Blue', 'Cloud Metal', 'Ice Break'],
  },
  {
    id: 'glow',
    title: 'Glow',
    description: 'Warm highlights and soft radiance.',
    mood: 'orbGlow',
    season: 'summer',
    name: 'Orb Afterglow',
    tags: ['Warm', 'Radiant', 'Soft focus'],
    seasonStops: ['shadow'],
    moodStops: [4, 3, 2, 1],
    swatchNames: ['Amber Halo', 'Honey Flare', 'Soft Gold', 'Sun Veil', 'Warm Cream'],
  },
];

function getMoodSwatch(moods, mood, index) {
  return moods[mood]?.swatches[index];
}

function getSeasonSwatch(seasons, season, stop) {
  return seasons[season]?.palette[stop];
}

function getJewelSwatch(stop) {
  return JEWEL_TONE_SWATCHES[stop];
}

function getBlendSwatch(stop) {
  return BLENDED_TONE_SWATCHES[stop];
}

export function buildCinematicPalettes(weatherEngine) {
  return CINEMATIC_FAMILIES.map((family) => {
    const jewelSwatches = family.jewelStops?.map(getJewelSwatch) ?? [];
    const blendSwatches = family.blendStops?.map(getBlendSwatch) ?? [];
    const seasonColors = family.seasonStops?.map((stop) =>
      getSeasonSwatch(weatherEngine.seasons, family.season, stop)
    ) ?? [];
    const moodColors = family.moodStops?.map((index) =>
      getMoodSwatch(weatherEngine.moods, family.mood, index)
    ) ?? [];
    const moodSwatches = moodColors.map((hex, index) => ({
      name: family.swatchNames?.[index] ?? `Mood ${index + 1}`,
      hex,
    }));
    const seasonSwatches = seasonColors.map((hex, index) => ({
      name: family.swatchNames?.[moodSwatches.length + index] ?? `Season ${index + 1}`,
      hex,
    }));
    const swatches = [...jewelSwatches, ...blendSwatches, ...seasonSwatches, ...moodSwatches]
      .filter((swatch) => swatch?.hex)
      .filter((swatch, index, list) =>
        list.findIndex((item) => item.hex === swatch.hex) === index
      )
      .slice(0, 5);

    return {
      id: family.id,
      name: family.name,
      family: family.title,
      sourceMood: family.mood,
      sourceSeason: family.season,
      tags: family.tags,
      swatches,
    };
  });
}

export function buildImpressionistSeasonalPalettes() {
  return IMPRESSIONIST_SEASONAL_FAMILIES.map((family) => ({
    id: family.id,
    name: family.name,
    family: family.title,
    season: family.season,
    time: family.time,
    range: 'Impressionist',
    tags: family.tags,
    swatches: family.blendStops.map((stop) => BLENDED_TONE_SWATCHES[stop]),
  }));
}

export function createMoodboardExportFromEngine(weatherEngine, { exportedAt, sourcePackage, version } = {}) {
  return {
    meta: {
      ...MOODBOARD_META,
      ...(sourcePackage ? { sourcePackage } : {}),
      ...(version ? { version } : {}),
      ...(exportedAt ? { exportedAt } : {}),
    },
    seasonalPalettes: weatherEngine.seasons,
    moodSwatches: weatherEngine.moods,
    cinematicPalettes: buildCinematicPalettes(weatherEngine),
    impressionistPalettes: buildImpressionistSeasonalPalettes(),
    timeOfDayPalettes: TIME_OF_DAY_PALETTES,
    weatherDrivenPalettes: WEATHER_DRIVEN_PALETTES,
    weatherAtmospheres: WEATHER_ATMOSPHERES,
    jewelToneSwatches: JEWEL_TONE_SWATCHES,
    blendedToneSwatches: BLENDED_TONE_SWATCHES,
    impressionistFamilies: IMPRESSIONIST_SEASONAL_FAMILIES.map(({ blendStops, ...family }) => family),
    cinematicFamilies: CINEMATIC_FAMILIES.map(({ swatchNames, seasonStops, moodStops, jewelStops, blendStops, ...family }) => family),
    weatherToMood: weatherEngine.weatherToMood,
    groups: weatherEngine.moodBoardMap.groups,
  };
}
