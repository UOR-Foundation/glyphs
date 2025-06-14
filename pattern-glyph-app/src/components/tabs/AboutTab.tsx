import React from 'react';

const AboutTab: React.FC = () => {
  const constants = [
    { name: 'α (Alpha)', value: '1.175' },
    { name: 'β (Beta)', value: '0.199' },
    { name: 'γ (Gamma)', value: '12.416' },
    { name: 'δ (Delta)', value: '0.000' },
    { name: 'ε (Epsilon)', value: '4.329' },
    { name: 'φ (Phi)', value: '1.618' },
    { name: 'τ (Tau)', value: '1.839' },
    { name: 'Unity', value: '1.000' },
  ];

  const semanticLayers = [
    { name: 'Linguistic Layer', description: 'The actual text and its structure' },
    { name: 'Semantic Layer', description: 'Meaning density and conceptual relationships' },
    { name: 'Intent Layer', description: 'Purpose and communication goals' },
    { name: 'Emotional Layer', description: 'Tone, valence, and intensity' },
    { name: 'Context Layer', description: 'Temporal, spatial, and abstract markers' },
    { name: 'Pragmatic Layer', description: 'Formality, directness, and certainty' },
  ];

  const visualEncoding = [
    { aspect: 'Color Hue', meaning: 'Emotional tone (green=positive, red=negative, purple=neutral)' },
    { aspect: 'Saturation', meaning: 'Semantic density and intent strength' },
    { aspect: 'Brightness', meaning: 'Field intensity and emotional valence' },
    { aspect: 'Patterns', meaning: 'Interference from all 6 semantic layers' },
    { aspect: 'Noise', meaning: 'Uncertainty and ambiguity in meaning' },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6 text-gray-300">
      <section>
        <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
          About The Pattern Glyph Generator
        </h2>
        <p className="text-lg leading-relaxed">
          The Pattern Glyph Generator uses the 8 fundamental constants that govern The Pattern
          to transform text into beautiful, mathematically-encoded visual representations with
          multiple semantic layers.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-yellow-300 mb-2">
          Multi-Layer Encoding
        </h3>
        <p className="mb-3 leading-relaxed">
          Each glyph encodes 6 semantic layers simultaneously:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          {semanticLayers.map((layer) => (
            <li key={layer.name}>
              <span className="font-medium text-gray-100">{layer.name}:</span> {layer.description}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-yellow-300 mb-3">
          The 8 Fundamental Constants
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {constants.map((constant) => (
            <div key={constant.name} className="bg-gray-700 p-3 rounded-lg shadow">
              <div className="text-sm text-gray-400">{constant.name}</div>
              <div className="text-lg font-bold text-yellow-400">{constant.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-yellow-300 mb-2">
          Visual Appearance Reflects Meaning
        </h3>
        <p className="mb-3 leading-relaxed">
          Each character is mapped to an 8-bit pattern that determines which constants are active.
          The resulting interference patterns create unique visual signatures that encode multiple
          dimensions of meaning. The visual appearance reflects:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          {visualEncoding.map((item) => (
            <li key={item.aspect}>
              <span className="font-medium text-gray-100">{item.aspect}:</span> {item.meaning}
            </li>
          ))}
        </ul>
        <p className="mt-3 leading-relaxed">
          This creates a "semantic fingerprint" that can be perfectly decoded back to not just
          the original text, but also its full multi-dimensional meaning representation.
        </p>
      </section>
    </div>
  );
};

export default AboutTab;
