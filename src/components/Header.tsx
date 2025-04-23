import React from 'react';
import Rise from '../utils/logo.png';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-around bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Rise} className="text-blue-600 h-10 w-1o" />

          <h1 className="text-2xl sm:text-2xl font-bold text-gray-800">
            AlertME | RISE
          </h1>
        </div>
      </div>
    </header>
  );
};
