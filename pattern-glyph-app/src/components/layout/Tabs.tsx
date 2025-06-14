import React, { useState, ReactNode } from 'react';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`py-3 px-6 font-medium text-sm sm:text-base focus:outline-none transition-colors duration-150 ease-in-out relative
        ${isActive
          ? 'text-white border-b-2 border-yellow-400'
          : 'text-gray-400 hover:text-gray-200'
        }
      `}
      onClick={onClick}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400 transform translate-y-px"></span>
      )}
    </button>
  );
};

interface TabsContainerProps {
  children: ReactNode; // Should be a series of Tab components
  className?: string;
}

export const TabsContainer: React.FC<TabsContainerProps> = ({ children, className }) => {
  return (
    <div className={`flex space-x-2 sm:space-x-4 border-b border-gray-700 ${className || ''}`}>
      {children}
    </div>
  );
};
