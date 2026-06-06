// MoodsboardIntro.jsx
import { useEffect, useRef } from 'react';
import MiniMenu from './MiniMenu';
import FamilyFooter from './FamilyFooter';
import './MoodsboardIntro.css';
import MoodsboardHero from './Moodsboard.Hero';
//import CinematicDivider from './CinematicDivider';
import './seasonawareQuotes.css';



function CinematicDivider() {
  return <div className="cinematic-divider" aria-hidden="true" />;
}

const MoodsboardIntro = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      section.style.setProperty('--orb-progress', progress.toFixed(3));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <main className="app-shell mode-cinematic">
      <MiniMenu />

      <MoodsboardHero />

      <section
        ref={sectionRef}
        className="moodsboard-intro"
        aria-labelledby="moodsboard-intro-title"
      >
        <h2 id="moodsboard-intro-title" className="moodsboard-intro__title">
          Moodsboard
        </h2>

        <h3
          className="moodsboard-intro__heading"
          data-tooltip="A quick guide to colour, light, and atmosphere."
          tabIndex={0}
        >
          Definition
        </h3>
        <p className="moodsboard-intro__text">
          A moodsboard is a simple visual guide that brings together colour, light,
          texture, and atmosphere to show how a project should feel. It sets the
          emotional tone at a glance and gives a clear starting point for any creative
          direction.
        </p>

        <h3
          className="moodsboard-intro__heading"
          data-tooltip="Keeps the Reflections Family aligned with one unified aesthetic."
          tabIndex={0}
        >
          Purpose
        </h3>
        <p className="moodsboard-intro__text">
          My moodsboard supports the entire Reflections Family by keeping every app
          aligned with a unified aesthetic.
        </p>

        <CinematicDivider />

        <h3
          className="moodsboard-intro__heading"
          data-tooltip="Useful for design, photography, writing, UI/UX, and cinematic styling."
          tabIndex={0}
        >
          Creative Fields
        </h3>
        <p className="moodsboard-intro__text">
          It guides design, photography, writing, UI/UX, and cinematic styling across
          different creative fields.
        </p>

        <h3
          className="moodsboard-intro__heading"
          data-tooltip="Highlights the advantages of using a moodsboard."
          tabIndex={0}
        >
          Benefits
        </h3>
        <p className="moodsboard-intro__text">
          It offers clarity, consistency, and inspiration in one place, making it
          easier to build work that feels calm, intentional, and emotionally coherent.
        </p>

        <CinematicDivider />

        <h3
          className="moodsboard-intro__heading"
          data-tooltip="Helps every project feel connected and intentional."
          tabIndex={0}
        >
          Clarity &amp; Consistency
        </h3>
        <p className="moodsboard-intro__text">
          It helps maintain a unified emotional tone across the Reflections Family,
          ensuring every project feels connected and aligned.
        </p>

        <div className="moodsboard-intro__footer">
          <p className="moodsboard-intro__footer-text">
            Reflections Family · Seasonal.Studio
          </p>
        </div>
      </section>

      <FamilyFooter />
    </main>
  );
};

export default MoodsboardIntro;
