
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

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
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50 animate-fade-in">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Food Donate Support</h3>
            <p className="text-sm opacity-90">We're here to help!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-green-500 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleSend}
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
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
