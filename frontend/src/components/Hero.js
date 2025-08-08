import React from 'react';
import { features } from '../mock';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,0,0,0.05),transparent_50%)]"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full animate-pulse">
          {Array.from({length: 144}).map((_, i) => (
            <div key={i} className="border border-red-500/20 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-red-900/30 text-red-400 px-6 py-2 rounded-full text-sm font-bold border border-red-500/30 animate-pulse">
              💀 ВЕРСИЯ 2025 💀
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            CAESAR SOFT
            <span className="block text-red-500 animate-pulse text-6xl md:text-8xl">
              3.9v
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-red-400 font-bold mb-4 animate-pulse">
            НЕВИДИМЫЙ ЧИТ 2025
          </p>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Абсолютное преимущество в игре с технологиями искусственного интеллекта 
            и полной невидимостью для всех античит-систем
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="https://t.me/OwnerCaesar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xl font-bold px-12 py-4 rounded-xl hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-2xl shadow-red-500/25 hover:shadow-red-500/50 transform hover:-translate-y-1 hover:scale-105 min-w-[280px]"
            >
              🔥 КУПИТЬ СЕЙЧАС
            </a>
            <a 
              href="#features" 
              className="border-2 border-red-500 text-red-400 text-xl font-bold px-12 py-4 rounded-xl hover:bg-red-500/10 transition-all duration-300 transform hover:-translate-y-1 min-w-[280px]"
            >
              📋 ПОСМОТРЕТЬ ФУНКЦИИ
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="group bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:bg-black/60 hover:shadow-xl hover:shadow-red-500/10 transform hover:-translate-y-2"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 flex items-center text-green-400 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Активно
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-black/30 rounded-xl p-6 border border-red-900/20">
            <div className="text-3xl font-black text-red-500 mb-2 animate-pulse">100%</div>
            <div className="text-gray-300 font-medium">Невидимость</div>
          </div>
          <div className="bg-black/30 rounded-xl p-6 border border-red-900/20">
            <div className="text-3xl font-black text-red-500 mb-2 animate-pulse">24/7</div>
            <div className="text-gray-300 font-medium">Поддержка</div>
          </div>
          <div className="bg-black/30 rounded-xl p-6 border border-red-900/20">
            <div className="text-3xl font-black text-red-500 mb-2 animate-pulse">50K+</div>
            <div className="text-gray-300 font-medium">Пользователей</div>
          </div>
          <div className="bg-black/30 rounded-xl p-6 border border-red-900/20">
            <div className="text-3xl font-black text-red-500 mb-2 animate-pulse">2025</div>
            <div className="text-gray-300 font-medium">Версия</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;