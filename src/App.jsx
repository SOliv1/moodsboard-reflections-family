import { useMemo, useState } from 'react';
import { moods } from './data/data.jsx';

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
};

function getSeasonClass(season) {
  return season.toLowerCase();
}

function getSeasonalEffect(season, index) {
  const list = SEASON_EFFECT_WEIGHTS[season] || EFFECTS;
  return list[index % list.length];
}

function App() {
  const [activeTime, setActiveTime] = useState('All');

  const visibleMoods = useMemo(() => {
    if (activeTime === 'All') {
      return moods;
    }

    return moods.filter((mood) => mood.time === activeTime);
  }, [activeTime]);

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="kicker">Reflections Family</p>
        <h1>Moods Board</h1>
        <p className="subtitle">
          Seasonal, cinematic palettes for day and evening atmosphere.
        </p>
        <div className="filters" role="tablist" aria-label="Time filter">
          {['All', 'Day', 'Evening'].map((option) => (
            <button
              key={option}
              type="button"
              className={activeTime === option ? 'chip chip-active' : 'chip'}
              onClick={() => setActiveTime(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </header>

      <section className="grid" aria-live="polite">
        {visibleMoods.map((mood) => {
          const seasonClass = getSeasonClass(mood.season);

          return (
          <section key={mood.id} className={`mood-card swatch-row ${seasonClass}`}>
            <div className="swatches">
              {mood.palette.map((color, index) => {
                const effect = getSeasonalEffect(seasonClass, index);

                return (
                <div key={color.hex} className="swatch-wrapper">
                  <div
                    className={`swatch ${effect}`}
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
    </main>
  );
}

export default App;
