import React from 'react';
import { bannerMessages } from '../mock';

const Header = () => {
  return (
    <header className="relative w-full bg-black/90 backdrop-blur-sm border-b border-red-900/30">
      {/* Running Banner */}
      <div className="bg-gradient-to-r from-red-900/20 to-red-600/20 py-2 overflow-hidden">
        <div className="running-banner whitespace-nowrap text-red-400 font-bold text-sm">
          <div className="animate-marquee inline-block">
            <span className="inline-block px-8 animate-pulse">
              {bannerMessages[0]}
            </span>
            <span className="inline-block px-8 animate-pulse animation-delay-200">
              {bannerMessages[1]}
            </span>
            <span className="inline-block px-8 animate-pulse animation-delay-400">
              {bannerMessages[2]}
            </span>
            <span className="inline-block px-8 animate-pulse animation-delay-600">
              {bannerMessages[3]}
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/25">
              <span className="text-white font-bold text-xl">CS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">CAESAR SOFT</h1>
              <p className="text-red-400 text-sm font-medium animate-pulse">
                v3.9 • 2025 Edition
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
              Функции
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
              Тарифы
            </a>
            <a href="#reviews" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
              Отзывы
            </a>
            <a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
              Контакты
            </a>
            <a 
              href="https://t.me/OwnerCaesar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-bold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transform hover:-translate-y-0.5"
            >
              💬 Купить в Telegram
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <a 
              href="https://t.me/OwnerCaesar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg font-bold hover:from-red-500 hover:to-red-600 transition-all duration-300 text-sm"
            >
              Купить
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;