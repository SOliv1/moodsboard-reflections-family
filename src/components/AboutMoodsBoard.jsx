import { useEffect, useRef } from 'react';
import cinematicCollection from '../images/cinematic-collection-optimized.jpg';
import impressionistCollection from '../images/impressionist-collection-optimized.jpg';
import seasonSwatchCollection from '../images/season-swatch-collection-optimized.jpg';
import './MoodsboardAbout.css';

const collages = [
  {
    src: seasonSwatchCollection,
    alt: 'Seasonal swatch collection arranged as a collage of soft seasonal colour studies',
    label: 'Seasonal collage',
  },
  {
    src: cinematicCollection,
    alt: 'Cinematic collection collage with deeper atmospheric tones',
    label: 'Cinematic collage',
  },
  {
    src: impressionistCollection,
    alt: 'Impressionist collection collage with diffused light and painterly colour',
    label: 'Impressionist collage',
  },
];

const sections = [
  {
    heading: 'Origins',
    body:
      'This mood board began as a set of focused colour experiments. Each one was created separately, with its own purpose and identity. My earliest work centred on calm, seasonal, and weather-responsive engines. Every shade was blended by hand.',
  },
  {
    heading: 'Cinematic Direction',
    body:
      'A separate body of work followed: the cinematic palettes. Richer tones. Deeper contrasts. More atmosphere. These colours shaped my cinematic apps and the wider Reflections family.',
  },
  {
    heading: 'Seasonal Palettes',
    body:
      'Each season has its own character. Each palette stands alone. These remain central to my design practice and continue to guide the quieter side of the studio.',
  },
  {
    heading: 'Impressionist Collection',
    body:
      'Soft light. Diffused colour. Gentle atmospheric shifts. A curated direction with its own identity and purpose, bringing a looser, more expressive treatment into the family.',
  },
  {
    heading: 'Seasonal.Studio',
    body:
      'A growing collection of small, thoughtful, atmospheric creations. Each one keeps its own identity while contributing to the wider seasonal world.',
  },
  {
    heading: 'Ongoing Work',
    body:
      'The journey continues with new additions built with the same care and colour discipline.',
  },
];

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

export default function MoodsboardAbout() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const contentElement = contentRef.current;

    if (!sectionElement || !contentElement) {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let frame = 0;

    const updateParallax = () => {
      frame = 0;

      if (mediaQuery.matches || reducedMotion.matches) {
        contentElement.style.setProperty('--about-parallax', '0px');
        return;
      }

      const rect = sectionElement.getBoundingClientRect();
      const movement = clamp((-rect.top - rect.height * 0.08) * 0.045, -4, 22);
      contentElement.style.setProperty('--about-parallax', `${movement}px`);
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    mediaQuery.addEventListener('change', updateParallax);
    reducedMotion.addEventListener('change', updateParallax);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      mediaQuery.removeEventListener('change', updateParallax);
      reducedMotion.removeEventListener('change', updateParallax);
    };
  }, []);

  return (
    <section ref={sectionRef} className="moodsboard-about" aria-labelledby="moodsboard-about-title">
      <div className="moodsboard-about__intro">
        <p className="moodsboard-about__eyebrow">Seasonal.Studio</p>
        <h2 id="moodsboard-about-title">About</h2>
        <p className="moodsboard-about__tagline">
          Three studies in atmosphere, gathered into one quiet studio.
        </p>
      </div>

      <div className="moodsboard-about__family-row" aria-label="Reflections family collections">
        <span className="moodsboard-about__family-label">Reflections Family</span>
        <span className="moodsboard-about__family-item">Seasonal</span>
        <span className="moodsboard-about__family-item">Cinematic</span>
        <span className="moodsboard-about__family-item">Impressionist</span>
      </div>

      <div className="moodsboard-about__grid">
        <div className="moodsboard-about__images" aria-label="About page collages">
          {collages.map((collage) => (
            <figure key={collage.label} className="moodsboard-about__image-block">
              <img src={collage.src} alt={collage.alt} loading="lazy" decoding="async" />
              <figcaption>{collage.label}</figcaption>
            </figure>
          ))}
        </div>

        <div ref={contentRef} className="moodsboard-about__content">
          {sections.map((section) => (
            <section key={section.heading} className="moodsboard-about__section">
              <h3>{section.heading}</h3>
              <p>{section.body}</p>
            </section>
          ))}

          <section className="moodsboard-about__section">
            <h3>Design Ethos</h3>
            <ul>
              <li>Calming: colours that reduce noise</li>
              <li>Living: palettes that respond to season and weather</li>
              <li>Vibrant: deeper tones used with intention</li>
              <li>Considered: clarity, accessibility, atmosphere</li>
              <li>Impressionistic: expressive, light-responsive blends</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
