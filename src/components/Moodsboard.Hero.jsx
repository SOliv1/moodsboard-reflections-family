// Moodsboard.Hero.jsx
import springHero from '../images/season-spring-haze.jpg';
import summerHero from '../images/season-summer-dawn.jpg';
import autumnHero from '../images/autumn-haze.jpg';
import winterHero from '../images/season-winter-snowgrain.jpg';

const SEASON_CONFIG = {
  spring: {
    img: springHero,
    alt: 'Spring hero image',
    label: 'Spring Collection',
    subtitle: 'Fresh light and seasonal colour',
    season: 'spring',
  },
  summer: {
    img: summerHero,
    alt: 'Summer hero image',
    label: 'Impressionist Summer',
    subtitle: 'Diffused warmth and expressive colour',
    season: 'summer',
  },
  autumn: {
    img: autumnHero,
    alt: 'Autumn hero image',
    label: 'Cinematic Autumn',
    subtitle: 'Rich tones and atmospheric depth',
    season: 'autumn',
  },
  winter: {
    img: winterHero,
    alt: 'Winter hero image',
    label: 'Winter Cinematic',
    subtitle: 'Deep contrast and cinematic stillness',
    season: 'winter',
  },
};

function getCurrentSeason() {
  const month = new Date().getMonth(); // 0–11
  if (month <= 1 || month === 11) return 'winter';
  if (month <= 4) return 'spring';
  if (month <= 7) return 'summer';
  return 'autumn';
}

function MoodsboardHero() {
  const config = SEASON_CONFIG[getCurrentSeason()];

  return (
    <div className={`moodsboard-hero moodsboard-hero--${config.season}`} role="banner">
      <img
        className="moodsboard-hero__image"
        src={config.img}
        alt={config.alt}
        loading="eager"
        decoding="async"
      />

      <div className="moodsboard-hero__overlay" aria-hidden="true" />
      <div className="moodsboard-hero__shimmer" aria-hidden="true" />
      <div className="moodsboard-hero__orb" aria-hidden="true" />
      <div className="moodsboard-hero__quote" aria-hidden="true" />
      <div className="moodsboard-hero__content">
        <h1 className="moodsboard-hero__title">Moodsboard</h1>
      </div>
    </div>
  );
}

export default MoodsboardHero;
