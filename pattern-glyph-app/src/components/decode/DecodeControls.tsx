import React from 'react';

interface DecodeControlsProps {
  onCopyText: () => void;
  isTextAvailable: boolean;
}

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  const baseStyle = "py-2 px-5 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed";
  const secondaryStyle = "bg-gray-600 hover:bg-gray-500 text-gray-100 focus:ring-gray-500";


  return (
    <button
      className={`${baseStyle} ${secondaryStyle} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

const DecodeControls: React.FC<DecodeControlsProps> = ({ onCopyText, isTextAvailable }) => {
  return (
    <div className="flex gap-3 mt-4">
      <Button onClick={onCopyText} disabled={!isTextAvailable}>
        Copy Text
      </Button>
    </div>
  );
};

export default DecodeControls;
