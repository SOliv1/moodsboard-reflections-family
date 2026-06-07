import { useMemo, useState } from 'react';

function WireframeTemplateSchema({ schema }) {
  const [activeTag, setActiveTag] = useState(schema.tags[0]);
  const [orbMode, setOrbMode] = useState(0);
  const [activeOrbOption, setActiveOrbOption] = useState(0);
  const [activeOrbBlend, setActiveOrbBlend] = useState(0);
  const useOrbOptions = Array.isArray(schema.orbOptions) && schema.orbOptions.length > 0;

  const orbOptionSets = useMemo(() => {
    if (!useOrbOptions) {
      return [];
    }

    return schema.orbOptions.map((option) => {
      if (Array.isArray(option.blends) && option.blends.length > 0) {
        return option;
      }

      return {
        ...option,
        blends: [{ label: option.label, colors: option.colors }],
      };
    });
  }, [schema.orbOptions, useOrbOptions]);

  const orbFeatureSets = useMemo(() => {
    if (useOrbOptions) {
      return [];
    }

    const core = schema.coreSwatches?.map(([hex]) => hex) || [];
    const accents = schema.accentSwatches?.map(([hex]) => hex) || [];

    const c0 = core[0] || '#f4e8d5';
    const c1 = core[1] || c0;
    const c2 = core[2] || c1;
    const c3 = core[3] || c2;
    const c4 = core[4] || c3;
    const c5 = core[5] || c4;
    const cLast = core[core.length - 1] || c3;
    const a0 = accents[0] || c2;
    const a1 = accents[1] || cLast;

    return [
      { label: 'Primary Feature Blend', colors: [c0, c1, c2, a0] },
      { label: 'Secondary Feature Blend', colors: [c1, c3, a1, cLast] },
      { label: 'Contrast Feature Blend', colors: [a0, c2, a1, cLast] },
      { label: 'Atmospheric Feature Blend', colors: [c3, c2, c4, a0] },
      { label: 'Story Feature Blend', colors: [c1, c4, c5, a1] },
      { label: 'Deep Feature Blend', colors: [a1, c5, c2, c0] },
    ];
  }, [schema.coreSwatches, schema.accentSwatches, useOrbOptions]);

  const activeOrb = useOrbOptions
    ? orbOptionSets[activeOrbOption % orbOptionSets.length]?.blends[
        activeOrbBlend % orbOptionSets[activeOrbOption % orbOptionSets.length]?.blends.length
      ]
    : orbFeatureSets[orbMode % orbFeatureSets.length];
  const [c1, c2, c3, c4] = activeOrb.colors;

  const orbStyle = {
    background: `radial-gradient(circle at 28% 28%, ${c1}, ${c2} 40%, ${c3} 66%, ${c4})`,
  };

  const activeTagDescription = useMemo(() => {
    if (schema.tagIntents && schema.tagIntents[activeTag]) {
      return schema.tagIntents[activeTag];
    }

    return `${activeTag} guides the tone and spacing decisions in this layout.`;
  }, [activeTag, schema.tagIntents]);

  const cycleOrbOptionBlend = (optionIndex) => {
    if (optionIndex === activeOrbOption) {
      const blendCount = orbOptionSets[optionIndex]?.blends?.length || 1;
      setActiveOrbBlend((current) => (current + 1) % blendCount);
      return;
    }

    setActiveOrbOption(optionIndex);
    setActiveOrbBlend(0);
  };

  return (
    <section className={`wireframe-template ${schema.wrapperClassName}`} aria-label={`${schema.title} visual mock layout`}>
      <header className="wireframe-template__header">
        <div>
          <p className="wireframe-template__kicker">{schema.kicker}</p>
          <h2 className="wireframe-template__title">{schema.title}</h2>
          <p className="wireframe-template__subtitle">{schema.subtitle}</p>
          <div className="wireframe-template__tags" role="list" aria-label="Emotional tags">
            {schema.tags.map((tag) => (
              <button
                key={tag}
                type="button"
                role="listitem"
                className={`wireframe-template__tag${activeTag === tag ? ' wireframe-template__tag--active' : ''}`}
                aria-pressed={activeTag === tag}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        {useOrbOptions ? (
          <div className="wireframe-template__orb-options" role="group" aria-label="Cinematic orb options">
            {orbOptionSets.map((option, index) => {
              const blendIndex = index === activeOrbOption ? activeOrbBlend % option.blends.length : 0;
              const previewBlend = option.blends[blendIndex];
              const [o1, o2, o3, o4] = previewBlend.colors;
              return (
                <button
                  key={option.label}
                  type="button"
                  className={`wireframe-template__orb-option${index === activeOrbOption ? ' wireframe-template__orb-option--active' : ''}`}
                  onClick={() => cycleOrbOptionBlend(index)}
                  aria-pressed={index === activeOrbOption}
                  aria-label={
                    index === activeOrbOption
                      ? `Cycle ${option.label} orb colours. Current blend: ${previewBlend.label}`
                      : `Use ${option.label} orb mode`
                  }
                >
                  <div
                    className={`wireframe-template__orb ${schema.orbClassName}`}
                    style={{ background: `radial-gradient(circle at 28% 28%, ${o1}, ${o2} 40%, ${o3} 66%, ${o4})` }}
                    aria-hidden="true"
                  />
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        ) : (
          <button
            type="button"
            className="wireframe-template__orb-button"
            onClick={() => setOrbMode((current) => (current + 1) % orbFeatureSets.length)}
            aria-label={`Change orb colours by cycling through blends. Current mode: ${activeOrb.label}`}
          >
            <div className={`wireframe-template__orb ${schema.orbClassName}`} style={orbStyle} aria-hidden="true" />
          </button>
        )}
      </header>

      {useOrbOptions ? (
        <p className="wireframe-template__hint wireframe-template__hint--interactive">
          Two cinematic orb options are available side-by-side. Click an orb once to select it, then click again to cycle blends. Active blend: {activeOrb.label}.
        </p>
      ) : (
        <p className="wireframe-template__hint wireframe-template__hint--interactive">
          Change orb colours by cycling through blends. Current blend: {activeOrb.label}.
        </p>
      )}

      <section className="wireframe-template__tag-feedback" aria-live="polite" aria-label="Tag intent feedback">
        <h3>{activeTag}</h3>
        <p>{activeTagDescription}</p>
      </section>

      <div className="wireframe-template__columns" role="list" aria-label={`${schema.title} template structure`}>
        <article className="wireframe-template__column" role="listitem">
          <h3>Identity</h3>
          <ul>
            {schema.identityPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <article className="wireframe-template__column" role="listitem">
          <h3>Colour and Light</h3>
          <div className="wireframe-template__swatches" aria-label="Core swatches">
            {schema.coreSwatches.map(([hex, label]) => (
              <div key={hex} className="wireframe-template__swatch-item">
                <span className="wireframe-template__swatch" style={{ backgroundColor: hex }} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <p className="wireframe-template__hint">Accent swatches</p>
          <div className="wireframe-template__swatches" aria-label="Accent swatches">
            {schema.accentSwatches.map(([hex, label]) => (
              <div key={hex} className="wireframe-template__swatch-item">
                <span className="wireframe-template__swatch" style={{ backgroundColor: hex }} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className={`wireframe-template__gradient ${schema.gradientClassName}`} aria-hidden="true" />
          <div className={`wireframe-template__light-map ${schema.lightMapClassName}`} aria-hidden="true" />
          <p className="wireframe-template__hint">{schema.lightMapLabel}</p>
        </article>

        <article className="wireframe-template__column" role="listitem">
          <h3>Atmosphere and Texture</h3>
          <div className={`wireframe-template__scene ${schema.atmosphereClassName}`} aria-hidden="true">
            <div className={`wireframe-template__texture ${schema.textureClassName}`} />
            <div className={`wireframe-template__mini-scene ${schema.miniSceneClassName}`} />
          </div>
          {schema.atmospherePoints?.length ? (
            <>
              <p className="wireframe-template__hint">Atmosphere image</p>
              <ul>
                {schema.atmospherePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </>
          ) : null}

          {schema.texturePoints?.length ? (
            <>
              <p className="wireframe-template__hint">Texture and material swatch</p>
              <ul>
                {schema.texturePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </>
          ) : null}

          {schema.miniScenePoints?.length ? (
            <>
              <p className="wireframe-template__hint">Mini scene block</p>
              <ul>
                {schema.miniScenePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </>
          ) : null}
        </article>
      </div>

      <section className="wireframe-template__notes" aria-label="Notes and use cases">
        <h3>Tier 4 - Notes and Use Cases</h3>
        <p>Emotional notes: {schema.emotionalNotes.join(', ')}.</p>
        <p>Seasonal notes: {schema.seasonalNotes.join(' ')}</p>
        <ul>
          {schema.useCases.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="wireframe-template__notes wireframe-template__notes--why" aria-label="Why this layout works">
        <h3>Why this layout works for {schema.title}</h3>
        <ul>
          {schema.whyLayoutWorks.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default WireframeTemplateSchema;
