import React from 'react';

interface DecodeGlyphDisplayProps {
  uploadedImageSrc: string | null; // Data URL of the uploaded image
}

const DecodeGlyphDisplay: React.FC<DecodeGlyphDisplayProps> = ({ uploadedImageSrc }) => {
  return (
    <div className="flex justify-center items-center min-h-[300px] sm:min-h-[400px] bg-gray-700 border border-gray-600 rounded-lg relative overflow-hidden mt-4">
      {uploadedImageSrc ? (
        <img
          src={uploadedImageSrc}
          alt="Uploaded Glyph"
          className="max-w-full max-h-[380px] object-contain rounded-md shadow-lg"
          id="decodeCanvas" // Keep original ID, though it's an img now for simplicity. Canvas can be used for processing later.
        />
      ) : (
        <div className="text-center text-gray-400" id="decodePlaceholder">
          Upload a Pattern glyph to decode
        </div>
      )}
    </div>
  );
};

export default DecodeGlyphDisplay;
