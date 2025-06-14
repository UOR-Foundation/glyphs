import React from 'react';

interface TextInputAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextInputArea: React.FC<TextInputAreaProps> = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      id="inputText" // Keep original ID for potential future use or consistency
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || "Enter your text here to transform into a Pattern glyph..."}
      className="w-full min-h-[150px] bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-150"
    />
  );
};

export default TextInputArea;
