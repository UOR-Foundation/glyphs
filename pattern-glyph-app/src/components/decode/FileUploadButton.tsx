import React, { useRef } from 'react';

interface FileUploadButtonProps {
  onFileSelect: (file: File) => void;
  buttonText?: string;
  acceptedFileTypes?: string;
}

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  const baseStyle = "py-2 px-5 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-150 ease-in-out";
  const primaryStyle = "bg-yellow-500 hover:bg-yellow-600 text-gray-900 focus:ring-yellow-400";

  return (
    <button
      className={`${baseStyle} ${primaryStyle} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

const FileUploadButton: React.FC<FileUploadButtonProps> = ({
  onFileSelect,
  buttonText = "Choose Glyph File",
  acceptedFileTypes = "image/*",
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
    // Reset file input to allow selecting the same file again
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  return (
    <div className="inline-block">
      <Button onClick={handleButtonClick}>
        {buttonText}
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        accept={acceptedFileTypes}
        onChange={handleFileChange}
        className="hidden"
        id="fileInput" // Keep original ID
        data-testid="file-input-element" // Added data-testid here
      />
    </div>
  );
};

export default FileUploadButton;
