import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/layout/Header';

describe('Header Component', () => {
  it('renders the main title', () => {
    render(<Header />);
    expect(screen.getByText(/The Pattern Glyph Generator/i)).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Header />);
    expect(screen.getByText(/Transform text into visual patterns/i)).toBeInTheDocument();
  });
});
