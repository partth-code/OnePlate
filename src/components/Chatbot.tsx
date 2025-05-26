
import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there, how can I assist you?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isBot: false }]);
      setInputValue('');
      
      // Simple bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thanks for your message! Our team will get back to you soon. You can also browse our FAQ or contact us directly.", 
          isBot: true 
        }]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 z-50 bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-emerald-700"
      >
        <div className="relative">
          {isOpen ? (
            <X size={24} className="text-white drop-shadow-lg" />
          ) : (
            <MessageCircle size={24} className="text-white drop-shadow-lg" />
          )}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
          )}
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 rounded-2xl shadow-2xl border border-gray-200/50 z-50 animate-fade-in backdrop-blur-sm bg-gradient-to-b from-white/95 via-gray-50/90 to-white/95">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white p-4 rounded-t-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Food Donate Support</h3>
                  <p className="text-sm opacity-90">We're here to help!</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-64 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50/50 to-white/80">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-end space-x-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Bot size={16} className="text-white" />
                  </div>
                )}
                <div
                  className={`max-w-xs p-3 rounded-2xl shadow-lg backdrop-blur-sm ${
                    message.isBot
                      ? 'bg-gradient-to-br from-white to-gray-50 text-gray-800 border border-gray-200/50'
                      : 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-200'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                {!message.isBot && (
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <User size={16} className="text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200/50 p-4 bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-sm rounded-b-2xl">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300/50 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 bg-white/80 backdrop-blur-sm transition-all duration-300 text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-emerald-700 text-white p-2 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-200/50"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
