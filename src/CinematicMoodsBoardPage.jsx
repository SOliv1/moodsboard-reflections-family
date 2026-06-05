// CinematicMoodsBoardPage.jsx
import React, { useState } from "react";
import FamilyFooter from "./components/FamilyFooter.jsx";
import MiniMenu from "./components/MiniMenu.jsx";
import ScrollButtons from "./components/ScrollButtons.jsx";
import {
  CINEMATIC_FAMILIES,
  CINEMATIC_PALETTES,
  WEATHER_ATMOSPHERES,
} from "./data/moodboard.js";

const ATMOSPHERE_LAYERS = [
  ["grain", "Grain"],
  ["bloom", "Bloom"],
  ["vignette", "Vignette"],
  ["weatherTint", "Weather tint"],
  ["timeTint", "Time-of-day tint"],
];

function PaletteCard({ palette, compact = false }) {
  return (
    <article className={`palette-card${compact ? " palette-card--compact" : ""}`}>
      <div className="palette-card__swatches">
        {palette.swatches.map((swatch) => (
          <span
            key={`${palette.id}-${swatch.name}`}
            className="palette-card__swatch"
            style={{ backgroundColor: swatch.hex }}
            title={`${swatch.name} ${swatch.hex}`}
          >
            <span>{swatch.name}</span>
          </span>
        ))}
      </div>
      <h3 className="palette-card__title">{palette.name}</h3>
      <p className="palette-card__meta">{palette.tags.join(" · ")}</p>
    </article>
  );
}

const CinematicMoodsBoardPage = () => {
  const [activeLayers, setActiveLayers] = useState({
    grain: false,
    bloom: false,
    vignette: false,
    weatherTint: false,
    timeTint: false,
  });

  const layerClasses = ATMOSPHERE_LAYERS
    .filter(([id]) => activeLayers[id])
    .map(([id]) => `page--atmosphere-${id}`)
    .join(" ");

  function toggleLayer(layer) {
    setActiveLayers((currentLayers) => ({
      ...currentLayers,
      [layer]: !currentLayers[layer],
    }));
  }

  return (
    <div className={`page page--cinematic ${layerClasses}`}>
      <ScrollButtons />
      {/* 1. Page Header */}
      <header className="page-header page-header--cinematic">
        <div className="page-header__inner">
          <h1 className="page-title">Cinematic Moods Board</h1>
          <p className="page-subtitle">
            A deeper palette for film-inspired colour.
          </p>
        </div>
      </header>

      {/* 2. Mode Navigation Bar */}
      <MiniMenu />

      {/* 3. Cinematic Intro Block */}
      <section className="intro intro--cinematic">
        <div className="intro__inner">
          <p>
            This board explores richer, jewel-tone palettes inspired by
            cinematic colour.
          </p>
          <p>
            Use it to guide atmosphere across your cinematic apps and
            reflections atmospheres.
          </p>
        </div>
      </section>

      {/* 4. Cinematic Palette Grid */}
      <section className="palette-grid palette-grid--cinematic">
        <h2 className="section-title">Cinematic Palettes</h2>
        <div className="palette-grid__inner">
          {CINEMATIC_PALETTES.map((palette) => (
            <PaletteCard key={palette.id} palette={palette} />
          ))}
        </div>
      </section>

      {/* 5. Cinematic Mood Families */}
      <section className="families families--cinematic">
        <h2 className="section-title">Mood Families</h2>

        {CINEMATIC_FAMILIES.map((family) => {
          const palette = CINEMATIC_PALETTES.find((item) => item.id === family.id);

          return (
            <div key={family.id} className="family">
              <h3 className="family__title">{family.title}</h3>
              <p className="family__description">{family.description}</p>
              <div className="family__grid">
                {palette ? <PaletteCard palette={palette} compact /> : null}
              </div>
            </div>
          );
        })}
      </section>

      <section className="weather-atmospheres">
        <h2 className="section-title">Weather Driven Atmospheres</h2>
        <div className="weather-atmospheres__grid">
          {WEATHER_ATMOSPHERES.map((atmosphere) => (
            <article
              key={atmosphere.id}
              className="weather-atmosphere-card"
              style={{ "--weather-atmosphere-tint": atmosphere.tint }}
            >
              <span className="weather-atmosphere-card__glow" />
              <h3>{atmosphere.name}</h3>
              <p>{atmosphere.description}</p>
              <p className="weather-atmosphere-card__meta">
                {atmosphere.sourceWeather.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Atmosphere Layer */}
      <section className="atmosphere-controls">
        <h2 className="section-title">Atmosphere Layers</h2>
        <div className="atmosphere-controls__inner">
          {ATMOSPHERE_LAYERS.map(([id, label]) => (
            <label key={id} className="toggle">
              <input
                type="checkbox"
                checked={activeLayers[id]}
                onChange={() => toggleLayer(id)}
              />
              <span className="toggle__label">{label}</span>
            </label>
          ))}
        </div>
      </section>

      <FamilyFooter />
    </div>
  );
};

export default CinematicMoodsBoardPage;
