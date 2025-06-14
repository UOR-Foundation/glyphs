import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-800 shadow-lg w-full">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400">
          The Pattern Glyph Generator
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-gray-300">
          Transform text into visual patterns using the 8 fundamental constants
        </p>
      </div>
    </header>
  );
};

export default Header;
