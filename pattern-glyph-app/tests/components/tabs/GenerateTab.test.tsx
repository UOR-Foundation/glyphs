import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenerateTab from '../../../src/components/tabs/GenerateTab';

describe('GenerateTab Component', () => {
  it('renders input and output sections', () => {
    render(<GenerateTab />);
    expect(screen.getByText('Input Text')).toBeInTheDocument();
    expect(screen.getByText('Generated Glyph')).toBeInTheDocument();
  });

  it('shows placeholder initially in GlyphDisplay', () => {
    render(<GenerateTab />);
    expect(screen.getByText('Your Pattern glyph will appear here')).toBeInTheDocument();
  });

  it('updates UI on generate click (simulated)', () => {
    render(<GenerateTab />);
    fireEvent.click(screen.getByText('Generate Glyph'));
    expect(screen.queryByText('Your Pattern glyph will appear here')).not.toBeInTheDocument();
    expect(screen.getByText('Pattern Complexity')).toBeInTheDocument(); // Part of PatternInfoDisplay
    expect(screen.getByText('75%')).toBeInTheDocument(); // Simulated complexity
  });
});
