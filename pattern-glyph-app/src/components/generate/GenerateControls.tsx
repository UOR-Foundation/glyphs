import React from 'react';

interface GenerateControlsProps {
  onGenerate: () => void;
  onClear: () => void;
  onSample: () => void;
}

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }> = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyle = "py-2 px-5 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-150 ease-in-out";
  const primaryStyle = "bg-yellow-500 hover:bg-yellow-600 text-gray-900 focus:ring-yellow-400";
  const secondaryStyle = "bg-gray-600 hover:bg-gray-500 text-gray-100 focus:ring-gray-500";

  return (
    <button
      className={`${baseStyle} ${variant === 'primary' ? primaryStyle : secondaryStyle} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};


const GenerateControls: React.FC<GenerateControlsProps> = ({ onGenerate, onClear, onSample }) => {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      <Button onClick={onGenerate} variant="primary">Generate Glyph</Button>
      <Button onClick={onClear} variant="secondary">Clear</Button>
      <Button onClick={onSample} variant="secondary">Try Sample</Button>
    </div>
  );
};

export default GenerateControls;
