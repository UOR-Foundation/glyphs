import React from 'react';

interface GlyphDisplayProps {
  // Props for canvas data, loading state etc. will be added later
  showPlaceholder: boolean;
}

const GlyphDisplay: React.FC<GlyphDisplayProps> = ({ showPlaceholder }) => {
  return (
    <div className="flex justify-center items-center min-h-[300px] sm:min-h-[400px] bg-gray-700 border border-gray-600 rounded-lg relative overflow-hidden mt-2">
      {showPlaceholder && (
        <div className="text-center text-gray-400" id="placeholder">
          Your Pattern glyph will appear here
        </div>
      )}
      <canvas
        id="glyphCanvas" // Keep original ID
        className={`max-w-full h-auto rounded-md shadow-lg transition-opacity duration-300 ${showPlaceholder ? 'opacity-0' : 'opacity-100'}`}
        style={{ display: showPlaceholder ? 'none' : 'block' }}
        // Width and height will be set dynamically later
      />
    </div>
  );
};

export default GlyphDisplay;
