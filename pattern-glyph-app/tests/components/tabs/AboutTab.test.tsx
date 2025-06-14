import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutTab from '../../../src/components/tabs/AboutTab';

describe('AboutTab Component', () => {
  it('renders the main heading', () => {
    render(<AboutTab />);
    expect(screen.getByText(/About The Pattern Glyph Generator/i)).toBeInTheDocument();
  });

  it('renders information about multi-layer encoding', () => {
    render(<AboutTab />);
    expect(screen.getByText(/Multi-Layer Encoding/i)).toBeInTheDocument();
    expect(screen.getByText(/Linguistic Layer/i)).toBeInTheDocument(); // Check for one of the layers
  });

  it('renders the section on the 8 fundamental constants', () => {
    render(<AboutTab />);
    // Corrected test: Query by role and name for the heading
    expect(screen.getByRole('heading', { name: /The 8 Fundamental Constants/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/α \(Alpha\)/i)).toBeInTheDocument(); // Check for one of the constants
  });
});
