import React, { useState } from 'react';
import TextInputArea from '../generate/TextInputArea';
import GenerateControls from '../generate/GenerateControls';
import GlyphDisplay from '../generate/GlyphDisplay';
import DownloadControls from '../generate/DownloadControls';
import PatternInfoDisplay from '../generate/PatternInfoDisplay';
// ColorLegend can be added later if needed

const GenerateTab: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [showGlyph, setShowGlyph] = useState(false); // Controls placeholder vs canvas
  // Placeholder states for info - will be updated by actual generation later
  const [patternInfo, setPatternInfo] = useState({
    complexity: '-',
    activeConstants: '-',
    resonance: '-',
    intentType: '-',
  });

  const handleGenerate = () => {
    console.log('Generate clicked with text:', inputText);
    // Actual generation logic will be wired here
    setShowGlyph(true); // Simulate glyph generation for now
    setPatternInfo({ // Simulate info update
      complexity: '75%',
      activeConstants: '6/8',
      resonance: '0.123',
      intentType: 'Statement 📄',
    });
  };

  const handleClear = () => {
    setInputText('');
    setShowGlyph(false);
    setPatternInfo({ complexity: '-', activeConstants: '-', resonance: '-', intentType: '-' });
  };

  const handleSample = () => {
    const sampleText = "This is a sample text to generate a beautiful glyph.";
    setInputText(sampleText);
  };

  const handleDownload = () => console.log('Download clicked');
  const handleCopyToClipboard = () => console.log('Copy to clipboard clicked');

  return (
    <div className="p-0 sm:p-2 space-y-6">
      {/* Input Section */}
      <section className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-yellow-300 mb-3 flex items-center">
          <span className="w-1 h-5 bg-yellow-400 mr-2 rounded-full"></span>
          Input Text
        </h2>
        <TextInputArea value={inputText} onChange={setInputText} />
        <GenerateControls onGenerate={handleGenerate} onClear={handleClear} onSample={handleSample} />
      </section>

      {/* Output Section */}
      <section className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-yellow-300 mb-3 flex items-center">
          <span className="w-1 h-5 bg-yellow-400 mr-2 rounded-full"></span>
          Generated Glyph
        </h2>
        <GlyphDisplay showPlaceholder={!showGlyph} />
        <DownloadControls
          onDownload={handleDownload}
          onCopyToClipboard={handleCopyToClipboard}
          disabled={!showGlyph}
        />
        {/* ColorLegend can be added here */}
        <PatternInfoDisplay
          visible={showGlyph}
          complexity={patternInfo.complexity}
          activeConstants={patternInfo.activeConstants}
          resonance={patternInfo.resonance}
          intentType={patternInfo.intentType}
        />
      </section>
    </div>
  );
};

export default GenerateTab;
