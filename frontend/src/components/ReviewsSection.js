import React from 'react';
import { reviews } from '../mock';

const ReviewsSection = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`text-2xl ${
          i < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section id="reviews" className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,0,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,0,0.05),transparent_50%)]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">
            📢 ОТЗЫВЫ 
            <span className="text-red-500 animate-pulse">КЛИЕНТОВ</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Что говорят наши пользователи о CAESAR SOFT 2025
          </p>
          
          {/* Overall Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-black/30 rounded-xl p-6 border border-red-900/20">
              <div className="text-3xl font-black text-red-500 mb-2">4.9/5</div>
              <div className="text-gray-300 font-medium">Средний рейтинг</div>
            </div>
            <div className="bg-black/30 rounded-xl p-6 border border-red-900/20">
              <div className="text-3xl font-black text-red-500 mb-2 animate-pulse">0</div>
              <div className="text-gray-300 font-medium">Банов за 2025</div>
            </div>
            <div className="bg-black/30 rounded-xl p-6 border border-red-900/20">
              <div className="text-3xl font-black text-red-500 mb-2">1.2K+</div>
              <div className="text-gray-300 font-medium">Отзывов</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="group bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:bg-black/60 hover:shadow-xl hover:shadow-red-500/10 transform hover:-translate-y-2"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg text-gray-300 text-center mb-6 leading-relaxed italic">
                "{review.text}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <div className="font-bold text-white text-lg mb-1">
                  {review.name}
                </div>
                <div className="text-red-400 text-sm">
                  {review.date}
                </div>
                <div className="mt-3 inline-flex items-center text-green-400 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Проверенная покупка
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-black/30 rounded-xl p-6 border border-green-900/30">
            <div className="text-3xl mb-3">✅</div>
            <div className="text-green-400 font-bold text-lg mb-2">100% Работает</div>
            <div className="text-gray-400 text-sm">Все функции активны</div>
          </div>
          
          <div className="text-center bg-black/30 rounded-xl p-6 border border-blue-900/30">
            <div className="text-3xl mb-3">🛡️</div>
            <div className="text-blue-400 font-bold text-lg mb-2">Безопасно</div>
            <div className="text-gray-400 text-sm">Невидим для детекта</div>
          </div>
          
          <div className="text-center bg-black/30 rounded-xl p-6 border border-purple-900/30">
            <div className="text-3xl mb-3">⚡</div>
            <div className="text-purple-400 font-bold text-lg mb-2">Быстро</div>
            <div className="text-gray-400 text-sm">Мгновенная активация</div>
          </div>
          
          <div className="text-center bg-black/30 rounded-xl p-6 border border-yellow-900/30">
            <div className="text-3xl mb-3">🏆</div>
            <div className="text-yellow-400 font-bold text-lg mb-2">Лучший</div>
            <div className="text-gray-400 text-sm">#1 в 2025 году</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-900/20 via-black/60 to-red-900/20 rounded-3xl p-12 border border-red-500/30">
            <h3 className="text-3xl font-black text-white mb-4">
              Присоединяйтесь к 50,000+ игрокам!
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Получите преимущество уже сегодня
            </p>
            <a 
              href="https://t.me/OwnerCaesar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white text-xl font-bold px-12 py-4 rounded-xl hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-2xl shadow-red-500/25 hover:shadow-red-500/50 transform hover:-translate-y-1 hover:scale-105"
            >
              🚀 НАЧАТЬ ИСПОЛЬЗОВАТЬ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;