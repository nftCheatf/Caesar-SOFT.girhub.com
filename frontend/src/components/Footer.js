import React from 'react';
import { contacts, warnings } from '../mock';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-black py-20 px-4">
      {/* Warning Section */}
      <div className="container mx-auto max-w-6xl relative z-10 mb-16">
        <div className="bg-gradient-to-r from-red-900/30 via-red-800/20 to-red-900/30 border-2 border-red-500 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <div className="text-4xl mb-6 animate-pulse">⚠️</div>
            <h3 className="text-2xl font-black text-red-500 mb-6 animate-pulse">
              ВАЖНОЕ ПРЕДУПРЕЖДЕНИЕ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {warnings.slice(0, 3).map((warning, index) => (
                <div
                  key={index}
                  className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-red-300 font-bold text-center animate-pulse"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {warning}
                </div>
              ))}
            </div>
            <div className="mt-6 text-red-400 font-medium">
              {warnings[3]}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-black text-white mb-8">
              📞 КОНТАКТЫ 
              <span className="text-red-500 animate-pulse">2025</span>
            </h3>
            
            <div className="space-y-6">
              <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">💬</span>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Telegram</div>
                    <a 
                      href={contacts.telegramLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {contacts.telegram}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">📧</span>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <a 
                      href={`mailto:${contacts.email}`}
                      className="text-xl font-bold text-red-400 hover:text-red-300 transition-colors break-all"
                    >
                      {contacts.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-green-400 font-bold">Поддержка онлайн 24/7</span>
                </div>
                <div className="text-gray-300 text-sm mt-2">
                  Отвечаем в течение 5 минут
                </div>
              </div>
            </div>
          </div>

          {/* Quick Purchase */}
          <div>
            <h3 className="text-3xl font-black text-white mb-8">
              🚀 БЫСТРАЯ 
              <span className="text-red-500 animate-pulse">ПОКУПКА</span>
            </h3>
            
            <div className="bg-gradient-to-br from-red-900/20 via-black/60 to-red-900/20 border border-red-500/30 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🔥</div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Получите доступ за 30 секунд!
                </h4>
                <p className="text-gray-300">
                  Напишите в Telegram для мгновенной активации
                </p>
              </div>

              <a 
                href={contacts.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xl font-bold py-4 rounded-xl hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-2xl shadow-red-500/25 hover:shadow-red-500/50 transform hover:-translate-y-1 text-center"
              >
                💬 НАПИСАТЬ В TELEGRAM
              </a>

              <div className="mt-6 space-y-3 text-sm text-gray-400">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Мгновенная активация после оплаты
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Инструкция по установке включена
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Техническая поддержка 24/7
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Official Channels Warning */}
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 mb-12">
          <div className="text-center">
            <div className="text-3xl mb-3">🚨</div>
            <h4 className="text-xl font-bold text-yellow-400 mb-3">
              ТОЛЬКО ОФИЦИАЛЬНЫЕ КАНАЛЫ!
            </h4>
            <p className="text-yellow-300 mb-4">
              Остерегайтесь мошенников! Покупайте только по указанным контактам.
            </p>
            <div className="text-sm text-yellow-400 font-medium">
              ⚠️ Любые другие продавцы - МОШЕННИКИ!
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-red-900/30 pt-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CS</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">CAESAR SOFT</div>
                <div className="text-red-400 text-sm animate-pulse">v3.9 • 2025 Edition</div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="text-gray-400 text-sm mb-2">
                © 2025 Caesar Soft. Все права защищены.
              </div>
              <div className="text-red-400 text-xs">
                Используйте на свой страх и риск
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,0,0,0.03),transparent_70%)]"></div>
    </footer>
  );
};

export default Footer;