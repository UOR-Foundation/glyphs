import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInputArea from '../../../src/components/generate/TextInputArea';

describe('TextInputArea', () => {
  it('renders and allows typing', () => {
    const handleChange = jest.fn();
    render(<TextInputArea value="" onChange={handleChange} placeholder="Test" />);
    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toBeInTheDocument();
    fireEvent.change(textarea, { target: { value: 'Hello' } });
    expect(handleChange).toHaveBeenCalledWith('Hello');
  });
});
