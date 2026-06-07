import { useMemo, useState } from 'react';

const SWATCHES = [
	['#f4e8d5', 'Sand'],
	['#e9cdb8', 'Rose Smoke'],
	['#b6b4d9', 'Cloud Violet'],
	['#8ea5b8', 'Rain Blue'],
	['#2f2d3a', 'Nocturne'],
];

function WireframeTemplate() {
	const [orbMode, setOrbMode] = useState(0);
	const [activeTag, setActiveTag] = useState('Seasonal');

	const tagIntents = {
		Seasonal: 'Keeps palette direction grounded in season-led shifts of light, tone, and atmosphere.',
		Cinematic: 'Emphasizes contrast, mood depth, and narrative framing for dramatic visual storytelling.',
		Impressionist: 'Leans into painterly blending and soft edges to create expressive emotional flow.',
	};

	const orbFeatureSets = useMemo(() => {
		const a = SWATCHES[0]?.[0] || '#f4e8d5';
		const b = SWATCHES[1]?.[0] || '#e9cdb8';
		const c = SWATCHES[2]?.[0] || '#b6b4d9';
		const d = SWATCHES[3]?.[0] || '#8ea5b8';
		const e = SWATCHES[4]?.[0] || '#2f2d3a';

		return [
			{ label: 'Warm Canvas Blend', colors: [a, b, c, d] },
			{ label: 'Cool Weather Blend', colors: [d, c, e, b] },
			{ label: 'Nocturne Accent Blend', colors: [b, a, d, e] },
			{ label: 'Violet Drift Blend', colors: [c, b, a, d] },
			{ label: 'Muted Dusk Blend', colors: [e, d, c, a] },
			{ label: 'Rose Haze Blend', colors: [b, c, d, e] },
		];
	}, []);

	const activeOrb = orbFeatureSets[orbMode % orbFeatureSets.length];
	const [c1, c2, c3, c4] = activeOrb.colors;

	const orbStyle = {
		background: `radial-gradient(circle at 30% 28%, ${c1}, ${c2} 42%, ${c3} 68%, ${c4})`,
	};

	const handleOrbCycle = () => {
		setOrbMode((current) => (current + 1) % orbFeatureSets.length);
	};

	return (
		<section className="wireframe-template" aria-label="Template wireframe example">
			<header className="wireframe-template__header">
				<div>
					<p className="wireframe-template__kicker">Template Example</p>
					<h2 className="wireframe-template__title">Header Block</h2>
					<p className="wireframe-template__subtitle">
						Title, subtitle, orb, and tags arranged with clear hierarchy.
					</p>
					<div className="wireframe-template__tags" role="list" aria-label="Identity tags">
						{Object.keys(tagIntents).map((tag) => (
							<button
								key={tag}
								type="button"
								className={`wireframe-template__tag${activeTag === tag ? ' wireframe-template__tag--active' : ''}`}
								aria-pressed={activeTag === tag}
								onClick={() => setActiveTag(tag)}
							>
								{tag}
							</button>
						))}
					</div>
				</div>
				<button
					type="button"
					className="wireframe-template__orb-button"
					onClick={handleOrbCycle}
					aria-label={`Change orb colours by cycling through blends. Current mode: ${activeOrb.label}`}
				>
					<div className="wireframe-template__orb" style={orbStyle} aria-hidden="true" />
				</button>
			</header>

			<section className="wireframe-template__tag-feedback" aria-live="polite" aria-label="Tag intent feedback">
				<h3>{activeTag}</h3>
				<p>{tagIntents[activeTag]}</p>
			</section>

			<p className="wireframe-template__hint wireframe-template__hint--interactive">
				Change orb colours by cycling through blends. Current blend: {activeOrb.label}.
			</p>

			<div className="wireframe-template__columns" role="list" aria-label="Three template columns">
				<article className="wireframe-template__column" role="listitem">
					<h3>Identity</h3>
					<ul>
						<li>Tag stack</li>
						<li>Orb accent</li>
						<li>Voice and keywords</li>
					</ul>
				</article>

				<article className="wireframe-template__column" role="listitem">
					<h3>Colour and Light</h3>
					<div className="wireframe-template__swatches" aria-label="Colour swatches">
						{SWATCHES.map(([hex, label]) => (
							<div key={hex} className="wireframe-template__swatch-item">
								<span
									className="wireframe-template__swatch"
									style={{ backgroundColor: hex }}
									aria-hidden="true"
								/>
								<span>{label}</span>
							</div>
						))}
					</div>
					<div className="wireframe-template__gradient" aria-hidden="true" />
					<div className="wireframe-template__light-map" aria-hidden="true" />
				</article>

				<article className="wireframe-template__column" role="listitem">
					<h3>Atmosphere</h3>
					<div className="wireframe-template__scene" aria-hidden="true">
						<div className="wireframe-template__texture" />
						<div className="wireframe-template__mini-scene" />
					</div>
					<p className="wireframe-template__hint">Image, texture, and mini scene for visual context.</p>
				</article>
			</div>

			<section className="wireframe-template__notes" aria-label="Notes and use cases">
				<h3>Notes and Use Cases</h3>
				<p>
					Spacing: 32px between columns, 48px between major blocks, 24px internal padding.
				</p>
				<p>
					Typography: title 24 to 28px, subtitle 16 to 18px, labels 12 to 14px, body 14 to 16px.
				</p>
				<ul>
					<li>Clear hierarchy</li>
					<li>Reusable components</li>
					<li>Consistent spacing</li>
					<li>Emotional clarity</li>
					<li>Zero clutter</li>
					<li>Easy to implement in React</li>
				</ul>
			</section>
		</section>
	);
}

export default WireframeTemplate;