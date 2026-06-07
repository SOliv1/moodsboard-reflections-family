import { useEffect, useMemo, useState } from 'react';
import { Link, Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import { moods } from './data/data.jsx';
import {
  IMPRESSIONIST_SEASONAL_PALETTES,
  TIME_OF_DAY_PALETTES,
  WEATHER_DRIVEN_PALETTES,
} from './data/moodboard.js';
import CinematicMoodsBoardPage from './CinematicMoodsBoardPage.jsx';
import MoodsboardAbout from './components/AboutMoodsBoard.jsx';
import MoodsboardIntro from './components/MoodsboardIntro.jsx';
import FamilyFooter from './components/FamilyFooter.jsx';
import MiniMenu from './components/MiniMenu.jsx';
import ScrollButtons from './components/ScrollButtons.jsx';
import WireframeTemplate from './mockup/wireframeTemplate.jsx';
import WireframeTemplateSchema from './mockup/WireframeTemplateSchema.jsx';
import {
  CINEMATIC_FRAME_JEWEL_SCHEMA,
  IMPRESSIONIST_STORY_SCHEMA,
  RAINWASHED_WEATHER_SCHEMA,
} from './mockup/templateSchemas.js';

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

const TEMPLATE_CARDS = [
  {
    id: 'wireframe-template',
    title: 'Wireframe Blueprint',
    idea: 'Template hierarchy',
    description: 'Structured wireframe example to test hierarchy and reusable layout blocks.',
    to: '/templates/wireframe-template',
  },
  {
    id: 'wireframe-template-2',
    title: 'Rainwashed Mock Layout',
    idea: 'Rainwashed weather hierarchy',
    description: 'Second wireframe example for rainy-day structure, mood, and use-case guidance.',
    to: '/templates/wireframe-template-2',
  },
  {
    id: 'wireframe-template-3',
    title: 'Impressionist Story Mock Layout',
    idea: 'Painterly hierarchy',
    description: 'Schema-driven mock layout for expressive, painterly mood direction.',
    to: '/templates/wireframe-template-3',
  },
  {
    id: 'studio-core',
    title: 'Studio Core',
    idea: 'Studio true',
    description: 'Neutral seasonal base to compare all palettes in one place.',
    to: '/templates/studio-core',
  },
  {
    id: 'fresh-morning',
    title: 'Fresh Morning',
    idea: 'Fresh light + Morning',
    description: 'Clean, bright combinations tuned for calm starts.',
    to: '/templates/fresh-morning',
  },
  {
    id: 'golden-evening',
    title: 'Golden Evening',
    idea: 'Golden hour + Evening',
    description: 'Warmer transitions and cinematic amber accents.',
    to: '/templates/golden-evening',
  },
  {
    id: 'rainwashed-weather',
    title: 'Rainwashed Weather',
    idea: 'Rainwashed + Weather',
    description: 'Weather-driven palettes with softened contrast.',
    to: '/templates/rainwashed-weather',
  },
  {
    id: 'daylight-balance',
    title: 'Daylight Balance',
    idea: 'Day',
    description: 'Balanced daytime swatches for UI and editorial layouts.',
    to: '/templates/daylight-balance',
  },
  {
    id: 'afternoon-glow',
    title: 'Afternoon Glow',
    idea: 'Afternoon',
    description: 'Midday-to-late light progression for warm depth.',
    to: '/templates/afternoon-glow',
  },
  {
    id: 'midnight-still',
    title: 'Midnight Still',
    idea: 'Midnight',
    description: 'Low-luminance palette studies for nocturnal calm.',
    to: '/templates/midnight-still',
  },
  {
    id: 'impressionist-story',
    title: 'Impressionist Story',
    idea: 'Impressionist',
    description: 'Painterly colour families for expressive mood direction.',
    to: '/templates/impressionist-story',
  },
  {
    id: 'cinematic-frame',
    title: 'Cinematic Frame',
    idea: 'Cinematic',
    description: 'Full cinematic board for storytelling and sequence mood.',
    to: '/templates/cinematic-frame',
  },
];

const TEMPLATE_PRESETS = {
  'studio-core': {
    atmosphere: 'studio',
    time: 'All',
    range: null,
    limit: 12,
    tone: 'Broad baseline set for comparing seasonality and contrast.',
  },
  'fresh-morning': {
    atmosphere: 'fresh',
    time: 'Morning',
    range: null,
    limit: 10,
    tone: 'Crisp morning studies for calm beginnings and optimistic UI tones.',
  },
  'golden-evening': {
    atmosphere: 'golden',
    time: 'Evening',
    range: null,
    limit: 10,
    tone: 'Warm evening transitions with richer, cinematic mid-tones.',
  },
  'rainwashed-weather': {
    atmosphere: 'rainwashed',
    time: 'Weather',
    range: 'Weather Driven',
    limit: 10,
    tone: 'Weather-led palettes tuned to soft depth and atmospheric texture.',
  },
  'daylight-balance': {
    atmosphere: 'studio',
    time: 'Day',
    range: null,
    limit: 10,
    tone: 'Balanced daylight references for clean, practical compositions.',
  },
  'afternoon-glow': {
    atmosphere: 'golden',
    time: 'Afternoon',
    range: null,
    limit: 10,
    tone: 'Late-light palettes where warmth starts to deepen and settle.',
  },
  'midnight-still': {
    atmosphere: 'rainwashed',
    time: 'Midnight',
    range: null,
    limit: 10,
    tone: 'Nocturnal references with restrained highlights and deeper values.',
  },
  'impressionist-story': {
    atmosphere: 'fresh',
    time: 'Impressionist',
    range: 'Impressionist',
    limit: 10,
    tone: 'Expressive painterly studies for narrative mood and color emotion.',
  },
  'cinematic-frame': {
    atmosphere: 'golden',
    time: 'Evening',
    range: null,
    limit: 8,
    tone: 'Storyboard-oriented set designed to hand off into the cinematic page.',
  },
};

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

function buildMoodBoardItems() {
  return [
    ...moods,
    ...impressionistMoods,
    ...weatherMoods,
    ...timeOfDayMoods,
  ];
}

function filterMoodsByTimeAndRange(moodBoardItems, time, range) {
  let result = moodBoardItems;

  if (time !== 'All') {
    if (time === 'Impressionist') {
      result = result.filter((mood) => mood.range === 'Impressionist');
    } else if (time === 'Weather') {
      result = result.filter((mood) => mood.range === 'Weather Driven');
    } else {
      result = result.filter((mood) => mood.time === time);
    }
  }

  if (range) {
    result = result.filter((mood) => mood.range === range);
  }

  return result;
}

function MoodsBoardPage() {
  const { atmosphereId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const timeFromQuery = searchParams.get('time');
  const resolvedTime = FILTER_OPTIONS.includes(timeFromQuery) ? timeFromQuery : 'All';
  const [activeTime, setActiveTime] = useState(resolvedTime);
  const validAtmosphereIds = SEASONAL_ATMOSPHERE_OPTIONS.map(([id]) => id);
  const seasonalAtmosphere = validAtmosphereIds.includes(atmosphereId)
    ? atmosphereId
    : 'studio';
  const moodBoardItems = useMemo(() => buildMoodBoardItems(), []);

  const visibleMoods = useMemo(() => {
    return filterMoodsByTimeAndRange(moodBoardItems, activeTime, null);
  }, [activeTime, moodBoardItems]);

  useEffect(() => {
    setActiveTime(resolvedTime);
  }, [resolvedTime]);

  const setTimeFilter = (option) => {
    setActiveTime(option);

    const nextParams = new URLSearchParams(searchParams);
    if (option === 'All') {
      nextParams.delete('time');
    } else {
      nextParams.set('time', option);
    }

    setSearchParams(nextParams, { replace: true });
  };

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
              onClick={() => setTimeFilter(option)}
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
            <Link
              key={id}
              to={`/atmosphere/${id}`}
              className={`atmosphere-chip${seasonalAtmosphere === id ? ' atmosphere-chip--active' : ''}`}
            >
              {label}
            </Link>
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

function TemplateWorkspacePage() {
  const { templateId } = useParams();
  const templateCard = TEMPLATE_CARDS.find((card) => card.id === templateId) || TEMPLATE_CARDS[0];
  const preset = TEMPLATE_PRESETS[templateCard.id] || TEMPLATE_PRESETS['studio-core'];
  const moodBoardItems = useMemo(() => buildMoodBoardItems(), []);
  const visibleMoods = useMemo(() => {
    const filtered = filterMoodsByTimeAndRange(moodBoardItems, preset.time, preset.range);
    return filtered.slice(0, preset.limit);
  }, [moodBoardItems, preset.time, preset.range, preset.limit]);

  const boardLink = `/atmosphere/${preset.atmosphere}${preset.time !== 'All' ? `?time=${encodeURIComponent(preset.time)}` : ''}`;

  if (templateCard.id === 'wireframe-template') {
    return (
      <main className="app-shell templates-shell app-shell--seasonal-studio">
        <ScrollButtons />
        <header className="hero template-workspace__hero">
          <p className="kicker">Template Workspace</p>
          <h1>{templateCard.title}</h1>
          <p className="subtitle">Visual hierarchy testbed for template structure.</p>
        </header>

        <MiniMenu />

        <section className="template-workspace__actions" aria-label="Template actions">
          <Link className="template-card__link" to="/templates">
            Back to templates
          </Link>
          <Link className="template-card__link" to="/atmosphere/studio">
            Open studio board
          </Link>
        </section>

        <WireframeTemplate />

        <FamilyFooter />
      </main>
    );
  }

  if (templateCard.id === 'wireframe-template-2') {
    return (
      <main className="app-shell templates-shell app-shell--seasonal-rainwashed">
        <ScrollButtons />
        <header className="hero template-workspace__hero">
          <p className="kicker">Template Workspace</p>
          <h1>{templateCard.title}</h1>
          <p className="subtitle">Schema-driven rainwashed mock with soft weather hierarchy.</p>
        </header>

        <MiniMenu />

        <section className="template-workspace__actions" aria-label="Template actions">
          <Link className="template-card__link" to="/templates">
            Back to templates
          </Link>
          <Link className="template-card__link" to="/atmosphere/rainwashed?time=Weather">
            Open rainwashed board
          </Link>
        </section>

        <WireframeTemplateSchema schema={RAINWASHED_WEATHER_SCHEMA} />

        <FamilyFooter />
      </main>
    );
  }

  if (templateCard.id === 'wireframe-template-3') {
    return (
      <main className="app-shell templates-shell app-shell--seasonal-fresh">
        <ScrollButtons />
        <header className="hero template-workspace__hero">
          <p className="kicker">Template Workspace</p>
          <h1>{templateCard.title}</h1>
          <p className="subtitle">Schema-driven impressionist mock with expressive, calm hierarchy.</p>
        </header>

        <MiniMenu />

        <section className="template-workspace__actions" aria-label="Template actions">
          <Link className="template-card__link" to="/templates">
            Back to templates
          </Link>
          <Link className="template-card__link" to="/atmosphere/fresh?time=Impressionist">
            Open impressionist board
          </Link>
        </section>

        <WireframeTemplateSchema schema={IMPRESSIONIST_STORY_SCHEMA} />

        <FamilyFooter />
      </main>
    );
  }

  if (templateCard.id === 'cinematic-frame') {
    return (
      <main className="app-shell templates-shell app-shell--seasonal-golden">
        <ScrollButtons />
        <header className="hero template-workspace__hero">
          <p className="kicker">Template Workspace</p>
          <h1>{templateCard.title}</h1>
          <p className="subtitle">{preset.tone}</p>
        </header>

        <MiniMenu />

        <section className="template-workspace__actions" aria-label="Template actions">
          <Link className="template-card__link" to="/moodsboard-cinematic">
            Open cinematic board
          </Link>
          <Link className="template-card__link" to="/templates">
            Back to templates
          </Link>
        </section>

        <WireframeTemplateSchema schema={CINEMATIC_FRAME_JEWEL_SCHEMA} />

        <FamilyFooter />
      </main>
    );
  }

  return (
    <main className={`app-shell templates-shell app-shell--seasonal-${preset.atmosphere}`}>
      <ScrollButtons />
      <header className="hero template-workspace__hero">
        <p className="kicker">Template Workspace</p>
        <h1>{templateCard.title}</h1>
        <p className="subtitle">{templateCard.idea} · {preset.time}</p>
      </header>

      <MiniMenu />

      <section className="template-workspace__meta" aria-label="Template summary">
        <p>{preset.tone}</p>
      </section>

      <section className="template-workspace__actions" aria-label="Template actions">
        <Link className="template-card__link" to={boardLink}>
          Open full board with this preset
        </Link>
        <Link className="template-card__link" to="/templates">
          Back to templates
        </Link>
      </section>

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

function TemplatesPage() {
  return (
    <main className="app-shell templates-shell">
      <ScrollButtons />
      <header className="hero">
        <p className="kicker">Reflections Family</p>
        <h1>Templates</h1>
        <p className="subtitle">
          One starter template for each featured moodsboard idea.
        </p>
      </header>

      <MiniMenu />

      <section className="templates-grid" aria-label="Moodsboard templates">
        {TEMPLATE_CARDS.map((template) => (
          <article key={template.id} className="template-card">
            <p className="template-card__idea">{template.idea}</p>
            <h2 className="template-card__title">{template.title}</h2>
            <p className="template-card__description">{template.description}</p>
            <Link className="template-card__link" to={template.to}>
              Open template
            </Link>
          </article>
        ))}
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
        <Route path="/atmosphere/:atmosphereId" element={<MoodsBoardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/templates/:templateId" element={<TemplateWorkspacePage />} />
        <Route path="/moodsboard-intro" element={<MoodsboardIntro />} />
        <Route path="/moodsboard-cinematic" element={<CinematicMoodsBoardPage />} />
      </Routes>
    </>
  );
}

export default App;
