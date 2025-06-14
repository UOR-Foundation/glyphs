import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FileUploadButton from '../../../src/components/decode/FileUploadButton';

describe('FileUploadButton', () => {
  it('renders button and triggers file input click', () => {
    const handleFileSelect = jest.fn();
    render(<FileUploadButton onFileSelect={handleFileSelect} />);

    const button = screen.getByText('Choose Glyph File');
    expect(button).toBeInTheDocument();

    const fileInput = screen.getByTestId('file-input-element');
    expect(fileInput).toBeInTheDocument();

    const clickSpy = jest.spyOn(fileInput, 'click');
    fireEvent.click(button);
    expect(clickSpy).toHaveBeenCalledTimes(1);
    clickSpy.mockRestore();
  });
});
