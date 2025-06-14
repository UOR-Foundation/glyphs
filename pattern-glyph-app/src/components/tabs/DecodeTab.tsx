import React, { useState } from 'react';
import FileUploadButton from '../decode/FileUploadButton';
import DecodeGlyphDisplay from '../decode/DecodeGlyphDisplay';
import DecodedTextOutput from '../decode/DecodedTextOutput';
import DecodeControls from '../decode/DecodeControls';

const DecodeTab: React.FC = () => {
  const [uploadedImageSrc, setUploadedImageSrc] = useState<string | null>(null);
  const [decodedText, setDecodedText] = useState('');
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);


  const handleFileSelected = (file: File) => {
    console.log('File selected:', file.name);
    setSelectedFileName(file.name);
    // Simulate processing and displaying image
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImageSrc(e.target?.result as string);
      // Simulate decoding
      setDecodedText(`Simulated decoded text from ${file.name}\n\nMore details would appear here.`);
    };
    reader.readAsDataURL(file);
  };

  const handleCopyText = () => {
    if (decodedText) {
      navigator.clipboard.writeText(decodedText)
        .then(() => console.log('Decoded text copied to clipboard!'))
        .catch(err => console.error('Failed to copy text: ', err));
    }
  };

  return (
    <div className="p-0 sm:p-2 space-y-6">
      {/* Input Section */}
      <section className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-yellow-300 mb-3 flex items-center">
          <span className="w-1 h-5 bg-yellow-400 mr-2 rounded-full"></span>
          Upload Glyph
        </h2>
        <FileUploadButton onFileSelect={handleFileSelected} />
        {selectedFileName && (
           <p id="selectedFile" className="mt-3 text-sm text-gray-400">
             Selected: {selectedFileName}
           </p>
        )}
        <DecodeGlyphDisplay uploadedImageSrc={uploadedImageSrc} />
      </section>

      {/* Output Section */}
      <section className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-yellow-300 mb-3 flex items-center">
          <span className="w-1 h-5 bg-yellow-400 mr-2 rounded-full"></span>
          Decoded Text
        </h2>
        <DecodedTextOutput value={decodedText} />
        <DecodeControls onCopyText={handleCopyText} isTextAvailable={!!decodedText} />
      </section>
    </div>
  );
};

export default DecodeTab;
