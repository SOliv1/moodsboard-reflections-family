const CORE_SWATCHES = [
	['#c4c8cd', 'Mist Grey'],
	['#8f9398', 'Wet Stone'],
	['#9fb4c7', 'Soft Blue'],
	['#edf1f3', 'Cloud White'],
	['#727880', 'Storm Neutral'],
	['#3f4650', 'Deep Rain Shadow'],
];

const ACCENT_SWATCHES = [
	['#bed1df', 'Rain Glow'],
	['#4f5d6b', 'Puddle Depth'],
];

function RainwashedOrb() {
	return <div className="wireframe-template__orb wireframe-template__orb--rainwashed" aria-hidden="true" />;
}

function WireframeTemplate2() {
	return (
		<section className="wireframe-template wireframe-template--rainwashed" aria-label="Rainwashed Weather visual mock layout">
			<header className="wireframe-template__header">
				<div>
					<p className="wireframe-template__kicker">Tier 1 · Identity</p>
					<h2 className="wireframe-template__title">Rainwashed Weather</h2>
					<p className="wireframe-template__subtitle">
						Softened tones shaped by rainfall, mist, and reflective surfaces.
					</p>
					<div className="wireframe-template__tags" role="list" aria-label="Emotional tags">
						<span role="listitem">Calm</span>
						<span role="listitem">Washed</span>
						<span role="listitem">Reflective</span>
						<span role="listitem">Softened edges</span>
					</div>
				</div>
				<RainwashedOrb />
			</header>

			<div className="wireframe-template__columns" role="list" aria-label="Rainwashed template structure">
				<article className="wireframe-template__column" role="listitem">
					<h3>Identity</h3>
					<ul>
						<li>Soft weather tone language</li>
						<li>Mist-to-blue orb accent</li>
						<li>24px internal spacing rhythm</li>
					</ul>
				</article>

				<article className="wireframe-template__column" role="listitem">
					<h3>Colour and Light</h3>
					<div className="wireframe-template__swatches" aria-label="Core swatches">
						{CORE_SWATCHES.map(([hex, label]) => (
							<div key={hex} className="wireframe-template__swatch-item">
								<span className="wireframe-template__swatch" style={{ backgroundColor: hex }} aria-hidden="true" />
								<span>{label}</span>
							</div>
						))}
					</div>

					<p className="wireframe-template__hint">Accent swatches</p>
					<div className="wireframe-template__swatches" aria-label="Accent swatches">
						{ACCENT_SWATCHES.map(([hex, label]) => (
							<div key={hex} className="wireframe-template__swatch-item">
								<span className="wireframe-template__swatch" style={{ backgroundColor: hex }} aria-hidden="true" />
								<span>{label}</span>
							</div>
						))}
					</div>

					<div className="wireframe-template__gradient wireframe-template__gradient--rainwashed" aria-hidden="true" />
					<div className="wireframe-template__light-map wireframe-template__light-map--rainwashed" aria-hidden="true" />
					<p className="wireframe-template__hint">Light map: Overcast Diffuse (120x120 reference).</p>
				</article>

				<article className="wireframe-template__column" role="listitem">
					<h3>Atmosphere and Texture</h3>
					<div className="wireframe-template__scene wireframe-template__scene--rainwashed" aria-hidden="true">
						<div className="wireframe-template__texture wireframe-template__texture--rainwashed" />
						<div className="wireframe-template__mini-scene wireframe-template__mini-scene--rainwashed" />
					</div>
					<ul>
						<li>Wet pavement or blurred reflections</li>
						<li>Misty horizon and cool even light</li>
						<li>Smooth stone, cotton grey, matte grain</li>
					</ul>
				</article>
			</div>

			<section className="wireframe-template__notes" aria-label="Notes and use cases">
				<h3>Tier 4 · Notes and Use Cases</h3>
				<p>Emotional notes: calm, reflective, soft, quiet.</p>
				<p>Seasonal notes: ideal for rainy-day UI, wellness, and editorial experiences.</p>
				<ul>
					<li>Journaling interfaces</li>
					<li>Weather-aware UI</li>
					<li>Soft onboarding flows</li>
					<li>Reflective storytelling</li>
				</ul>
			</section>
		</section>
	);
}

export default WireframeTemplate2;