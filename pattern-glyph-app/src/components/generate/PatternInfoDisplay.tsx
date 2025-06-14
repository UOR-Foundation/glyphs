import React from 'react';

interface InfoItem {
  label: string;
  value: string | number;
  id: string;
}

interface PatternInfoDisplayProps {
  // Props for actual data will be added later
  visible: boolean;
  complexity?: string;
  activeConstants?: string;
  resonance?: string;
  semanticLayers?: string | number;
  intentType?: string;
  encodingDepth?: string;
}

const InfoCard: React.FC<{ label: string; value: string | number; id: string }> = ({ label, value, id }) => (
  <div className="bg-gray-700 p-3 rounded-lg shadow">
    <div className="text-xs text-gray-400 mb-1">{label}</div>
    <div className="text-base font-semibold text-yellow-400" id={id}>{value}</div>
  </div>
);

const PatternInfoDisplay: React.FC<PatternInfoDisplayProps> = ({
  visible,
  complexity = '-',
  activeConstants = '-',
  resonance = '-',
  semanticLayers = '6', // Default from original
  intentType = '-',
  encodingDepth = 'Multi-dimensional', // Default from original
}) => {
  if (!visible) return null;

  const infoItems: InfoItem[] = [
    { label: 'Pattern Complexity', value: complexity, id: 'complexity' },
    { label: 'Active Constants', value: activeConstants, id: 'activeConstants' },
    { label: 'Resonance Level', value: resonance, id: 'resonance' },
    { label: 'Semantic Layers', value: semanticLayers, id: 'semanticLayers' },
    { label: 'Intent Type', value: intentType, id: 'intentType' },
    { label: 'Encoding Depth', value: encodingDepth, id: 'encodingDepth' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
      {infoItems.map(item => <InfoCard key={item.id} {...item} />)}
    </div>
  );
};

export default PatternInfoDisplay;
