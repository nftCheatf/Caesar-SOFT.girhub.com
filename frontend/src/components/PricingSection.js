import React, { useState } from 'react';
import { pricingPlans } from '../mock';

const PricingSection = () => {
  const [currency, setCurrency] = useState('uah');

  const getCurrencySymbol = (curr) => {
    switch(curr) {
      case 'uah': return 'UAH';
      case 'usd': return 'USD';
      case 'rub': return 'RUB';
      default: return 'UAH';
    }
  };

  const handlePurchase = (plan) => {
    window.open(plan.telegramLink, '_blank');
  };

  return (
    <section id="pricing" className="relative py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">
            💰 ТАРИФЫ 
            <span className="text-red-500 animate-pulse">2025</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Выберите подходящий план и получите мгновенный доступ ко всем функциям
          </p>

          {/* Currency Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-black/50 rounded-xl p-2 border border-red-900/30">
              <div className="flex space-x-1">
                {[
                  { key: 'uah', label: '🇺🇦 UAH' },
                  { key: 'usd', label: '🇺🇸 USD' },
                  { key: 'rub', label: '🇷🇺 RUB' }
                ].map((curr) => (
                  <button
                    key={curr.key}
                    onClick={() => setCurrency(curr.key)}
                    className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                      currency === curr.key
                        ? 'bg-red-600 text-white shadow-lg shadow-red-500/25'
                        : 'text-gray-400 hover:text-white hover:bg-red-600/20'
                    }`}
                  >
                    {curr.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Grid - All Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`relative bg-black/40 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:bg-black/60 hover:shadow-2xl hover:shadow-red-500/10 transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-red-500 shadow-lg shadow-red-500/20' 
                  : 'border-red-900/30'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                    🔥 ПОПУЛЯРНЫЙ
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-black text-white mb-2">
                  {plan.name === 'LIFETIME' ? '🏆' : '🔹'} {plan.name}
                </h3>
                <div className="text-sm text-gray-400 mb-4">{plan.duration}</div>

                <div className="mb-4">
                  <div className="text-2xl font-black text-red-500 mb-2">
                    {plan.prices[currency]}
                  </div>
                  {plan.discount && (
                    <div className="inline-block bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      Скидка {plan.discount}
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="text-gray-300 text-sm text-left">
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handlePurchase(plan)}
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ${
                    plan.popular || plan.name === 'LIFETIME'
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/50'
                      : 'bg-red-600/80 text-white hover:bg-red-600 shadow-lg shadow-red-500/20'
                  }`}
                >
                  КУПИТЬ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;