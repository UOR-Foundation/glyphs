import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import DecodeTab from '../../../src/components/tabs/DecodeTab';

// Mock FileReader
const mockFileReaderSingleton = {
  onload: jest.fn() as ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null,
  readAsDataURL: jest.fn(),
  result: 'data:image/png;base64,mockimagecontent',
};
jest.spyOn(window, 'FileReader').mockImplementation(() => mockFileReaderSingleton as any);

// Mock navigator.clipboard
const mockClipboardWriteText = jest.fn().mockResolvedValue(undefined);
Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: mockClipboardWriteText,
  },
  configurable: true,
});


describe('DecodeTab Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockFileReaderSingleton.onload = jest.fn(); // Ensure onload is a fresh jest.fn for each test run if needed
    mockFileReaderSingleton.readAsDataURL.mockClear();
    mockClipboardWriteText.mockClear();
  });

  it('renders upload and output sections', () => {
    render(<DecodeTab />);
    expect(screen.getByText('Upload Glyph')).toBeInTheDocument();
    expect(screen.getByText('Decoded Text')).toBeInTheDocument();
  });

  it('shows placeholder initially in DecodeGlyphDisplay', () => {
    render(<DecodeTab />);
    expect(screen.getByText('Upload a Pattern glyph to decode')).toBeInTheDocument();
  });

  it('simulates file upload and updates UI', async () => {
    render(<DecodeTab />);
    const fileInput = screen.getByTestId('file-input-element') as HTMLInputElement;
    const mockFile = new File(['dummy'], 'glyph.png', { type: 'image/png' });

    fireEvent.change(fileInput, { target: { files: [mockFile] } });

    // Manually trigger the FileReader's onload within act
    await act(async () => {
      if (typeof mockFileReaderSingleton.onload === 'function') {
        mockFileReaderSingleton.onload({ target: { result: mockFileReaderSingleton.result } } as ProgressEvent<FileReader>);
      }
    });

    await waitFor(() => {
      expect(screen.getByAltText('Uploaded Glyph')).toBeInTheDocument();
      expect(screen.getByText('Selected: glyph.png')).toBeInTheDocument();
      expect(screen.getByDisplayValue(/Simulated decoded text from glyph.png/)).toBeInTheDocument();
    });
  });

  it('calls clipboard writeText on copy click when text is available', async () => {
    render(<DecodeTab />);
    const fileInput = screen.getByTestId('file-input-element') as HTMLInputElement;
    const mockFile = new File(['dummy'], 'glyph.png', { type: 'image/png' });

    fireEvent.change(fileInput, { target: { files: [mockFile] } });

    await act(async () => {
      if (typeof mockFileReaderSingleton.onload === 'function') {
        mockFileReaderSingleton.onload({ target: { result: mockFileReaderSingleton.result } } as ProgressEvent<FileReader>);
      }
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue(/Simulated decoded text from glyph.png/)).toBeInTheDocument();
    });

    const copyButton = screen.getByText('Copy Text');
    fireEvent.click(copyButton);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expect.stringContaining('Simulated decoded text from glyph.png'));
  });
});
