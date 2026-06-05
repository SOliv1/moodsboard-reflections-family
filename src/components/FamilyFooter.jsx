import { Link } from 'react-router-dom';

function FamilyFooter() {
  return (
    <footer className="family-footer">
      <p className="family-footer__credit">
        Daily Orb Reflections - © 2026 Reflections in Light: Part of the Reflections in Light Family
      </p>
      <nav className="family-footer__links" aria-label="Reflections family links">
        <Link to="/" className="family-footer__link">
          Open Moodsboard
        </Link>
        <a
          href="https://seasonal.studio/"
          className="family-footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Return to Seasonal Studio
        </a>
        <a
          href="https://centre-notes.netlify.app/?from=seasonal-mind-space&returnTo=https%3A%2F%2Fsoliv1.github.io%2FSeasonal-mind-space%2F"
          className="family-footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Open Centre Notes
        </a>
        <a
          href="https://soliv1.github.io/Seasonal-mind-space"
          className="family-footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Open Seasonal Mind Space
        </a>
        <a
          href="https://soliv1.github.io/Daily-Reflections-App/"
          className="family-footer__link"
          target="_blank"
          rel="noreferrer"
        >
          Open Daily Reflections App
        </a>
      </nav>
    </footer>
  );
}

export default FamilyFooter;
