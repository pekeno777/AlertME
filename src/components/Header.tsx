import React from 'react';
import Rise from '../utils/logo.png';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-around bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Rise} className="text-blue-600 h-10 w-1o" />

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            <a href="https://semillero-website.vercel.app/">RISE</a>
          </h1>
        </div>
      </div>
    </header>
  );
};
