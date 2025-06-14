import React from 'react';

interface DecodedTextOutputProps {
  value: string;
  placeholder?: string;
}

const DecodedTextOutput: React.FC<DecodedTextOutputProps> = ({ value, placeholder }) => {
  return (
    <textarea
      id="decodedText" // Keep original ID
      value={value}
      readOnly
      placeholder={placeholder || "Decoded text will appear here..."}
      className="w-full min-h-[150px] bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-150 mt-1"
    />
  );
};

export default DecodedTextOutput;
