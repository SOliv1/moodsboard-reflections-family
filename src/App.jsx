import { useEffect, useMemo, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { moods } from './data/data.jsx';
import {
  IMPRESSIONIST_SEASONAL_PALETTES,
  TIME_OF_DAY_PALETTES,
  WEATHER_DRIVEN_PALETTES,
} from './data/moodboard.js';
import CinematicMoodsBoardPage from './CinematicMoodsBoardPage.jsx';
import MoodsboardAbout from './components/AboutMoodsBoard.jsx';
import FamilyFooter from './components/FamilyFooter.jsx';
import MiniMenu from './components/MiniMenu.jsx';
import ScrollButtons from './components/ScrollButtons.jsx';

const EFFECTS = [
  'radial-glow',
  'shimmer',
  'fade-text',
  'tilt',
  'drift',
  'orb-pulse',
];

const SEASON_EFFECT_WEIGHTS = {
  spring: ['radial-glow', 'drift', 'fade-text'],
  summer: ['shimmer', 'tilt', 'radial-glow'],
  autumn: ['tilt', 'orb-pulse', 'drift'],
  winter: ['fade-text', 'drift', 'radial-glow'],
  calm: ['shimmer', 'fade-text'],
  reflections: ['orb-pulse', 'radial-glow'],
  impressionist: ['drift', 'shimmer', 'radial-glow'],
  morning: ['radial-glow', 'shimmer', 'drift'],
  afternoon: ['shimmer', 'radial-glow', 'tilt'],
  midnight: ['fade-text', 'drift', 'radial-glow'],
  weather: ['drift', 'radial-glow', 'shimmer'],
};

const FILTER_OPTIONS = ['All', 'Day', 'Evening', 'Impressionist', 'Weather', 'Morning', 'Afternoon', 'Midnight'];

const SEASONAL_ATMOSPHERE_OPTIONS = [
  ['studio', 'Studio true'],
  ['fresh', 'Fresh light'],
  ['golden', 'Golden hour'],
  ['rainwashed', 'Rainwashed'],
];

const impressionistMoods = IMPRESSIONIST_SEASONAL_PALETTES.map((palette) => ({
  id: palette.id,
  name: palette.name,
  season: 'Impressionist',
  time: palette.time,
  range: palette.range,
  palette: palette.swatches,
}));

const timeOfDayMoods = TIME_OF_DAY_PALETTES.map((palette) => ({
  id: palette.id,
  name: palette.name,
  season: palette.season,
  time: palette.time,
  range: palette.range,
  palette: palette.swatches,
}));

const weatherMoods = WEATHER_DRIVEN_PALETTES.map((palette) => ({
  id: palette.id,
  name: palette.name,
  season: palette.season,
  time: palette.time,
  range: palette.range,
  palette: palette.swatches,
}));

function getSeasonClass(season) {
  return season.toLowerCase();
}

function getSeasonalEffect(season, index) {
  const list = SEASON_EFFECT_WEIGHTS[season] || EFFECTS;
  return list[index % list.length];
}

function getHexLuminance(hex) {
  const value = hex.replace('#', '');
  const red = parseInt(value.slice(0, 2), 16);
  const green = parseInt(value.slice(2, 4), 16);
  const blue = parseInt(value.slice(4, 6), 16);

  return (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
}

function getSwatchToneClass(hex) {
  const luminance = getHexLuminance(hex);

  if (luminance < 0.42) {
    return 'swatch--dark';
  }

  if (luminance < 0.68) {
    return 'swatch--medium';
  }

  return 'swatch--light';
}

function getFilterClass(option, activeTime) {
  const classes = ['chip'];

  if (option === 'Day') {
    classes.push('chip-day');
  }

  if (option === 'Evening') {
    classes.push('chip-evening');
  }

  if (option === 'Impressionist') {
    classes.push('chip-impressionist');
  }

  if (option === 'Weather') {
    classes.push('chip-weather');
  }

  if (['Morning', 'Afternoon', 'Midnight'].includes(option)) {
    classes.push(`chip-${option.toLowerCase()}`);
  }

  if (activeTime === option) {
    classes.push('chip-active');
  }

  return classes.join(' ');
}

function MoodsBoardPage() {
  const [activeTime, setActiveTime] = useState('All');
  const [seasonalAtmosphere, setSeasonalAtmosphere] = useState('studio');
  const moodBoardItems = useMemo(() => [
    ...moods,
    ...impressionistMoods,
    ...weatherMoods,
    ...timeOfDayMoods,
  ], []);

  const visibleMoods = useMemo(() => {
    if (activeTime === 'All') {
      return moodBoardItems;
    }

    if (activeTime === 'Impressionist') {
      return moodBoardItems.filter((mood) => mood.range === 'Impressionist');
    }

    if (activeTime === 'Weather') {
      return moodBoardItems.filter((mood) => mood.range === 'Weather Driven');
    }

    return moodBoardItems.filter((mood) => mood.time === activeTime);
  }, [activeTime, moodBoardItems]);

  return (
    <main className={`app-shell app-shell--seasonal-${seasonalAtmosphere}`}>
      <ScrollButtons />
      <header className="hero">
        <p className="kicker">Reflections Family</p>
        <h1>Moods Board</h1>
        <p className="subtitle">
          Seasonal, cinematic palettes for day and evening atmosphere.
        </p>
        <div className="filters" role="group" aria-label="Mood board controls">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              className={getFilterClass(option, activeTime)}
              onClick={() => setActiveTime(option)}
            >
              {option}
            </button>
          ))}
          <Link className="chip chip-cinematic" to="/moodsboard-cinematic">
            Cinematic
          </Link>
        </div>
        <div
          className="seasonal-atmosphere"
          role="group"
          aria-label="Seasonal atmosphere"
        >
          {SEASONAL_ATMOSPHERE_OPTIONS.map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={`atmosphere-chip${seasonalAtmosphere === id ? ' atmosphere-chip--active' : ''}`}
              onClick={() => setSeasonalAtmosphere(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <MiniMenu />

      <section className="grid" aria-live="polite">
        {visibleMoods.map((mood) => {
          const seasonClass = getSeasonClass(mood.season);

          return (
          <section key={mood.id} className={`mood-card swatch-row ${seasonClass}`}>
            <div className="swatches">
              {mood.palette.map((color, index) => {
                const effect = getSeasonalEffect(seasonClass, index);
                const toneClass = getSwatchToneClass(color.hex);

                return (
                <div key={color.hex} className="swatch-wrapper">
                  <div
                    className={`swatch ${effect} ${toneClass}`}
                    data-effect={effect}
                    style={{ backgroundColor: color.hex }}
                  >
                    <span className="label">{color.name}</span>
                  </div>
                </div>
                );
              })}
            </div>
            <h2>{mood.name}</h2>
            <p>{mood.season} · {mood.time}</p>
          </section>
          );
        })}

      </section>
      <FamilyFooter />
    </main>
  );
}

function AboutPage() {
  return (
    <main className="app-shell">
      <ScrollButtons />
      <header className="hero">
        <p className="kicker">Reflections Family</p>
        <h1>About</h1>
        <p className="subtitle">
          Seasonal colour studies, cinematic atmosphere, and impressionist light.
        </p>
      </header>

      <MiniMenu />

      <MoodsboardAbout />
      <FamilyFooter />
    </main>
  );
}

function StartupSplash() {
  return (
    <div className="startup-splash" aria-hidden="true">
      <div className="startup-splash__veil" />
      <div className="startup-splash__content">
        <img
          className="startup-splash__orb"
          src={`${import.meta.env.BASE_URL}pwa/icon-512.png`}
          alt=""
        />
        <p className="startup-splash__eyebrow">Reflections Family</p>
        <h2 className="startup-splash__title">Moods Board</h2>
        <p className="startup-splash__text">Seasonal palettes tuned for a mobile-first experience.</p>
      </div>
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showSplash ? <StartupSplash /> : null}
      <Routes>
        <Route path="/" element={<MoodsBoardPage />} />
        <Route path="/home" element={<MoodsBoardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/moodsboard-cinematic" element={<CinematicMoodsBoardPage />} />
      </Routes>
    </>
  );
}

export default App;
