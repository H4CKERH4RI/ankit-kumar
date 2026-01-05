
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm Ankit's AI agent. Ask me about his work at softserv.in or his projects in Jaipur!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-80 sm:w-[400px] h-[600px] mb-6 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-slate-200 animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="p-8 bg-slate-900 text-white flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center mr-4 shadow-lg shadow-emerald-500/30">
                <i className="fa-solid fa-bolt text-xl"></i>
              </div>
              <div>
                <h4 className="font-black leading-none text-lg">Ankit AI</h4>
                <span className="text-[10px] text-emerald-400 uppercase tracking-[0.2em] font-black mt-1 inline-block">Professional Suite</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-6 py-4 rounded-3xl text-sm font-medium leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-slate-900 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 shadow-xl border border-slate-100 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-6 py-4 rounded-3xl text-sm border border-slate-100 flex space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex space-x-3 bg-slate-100 p-2 rounded-2xl">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How can Ankit help you today?"
                className="flex-1 bg-transparent border-none px-4 py-2 text-sm focus:outline-none font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors disabled:opacity-50 shadow-lg shadow-emerald-500/20"
              >
                <i className="fa-solid fa-arrow-up text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-20 h-20 rounded-[2rem] shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 ${isOpen ? 'bg-slate-900 text-white' : 'btn-primary text-white'}`}
      >
        {isOpen ? (
            <i className="fa-solid fa-minus text-2xl"></i>
        ) : (
            <div className="relative">
                <i className="fa-solid fa-headset text-3xl"></i>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-emerald-500"></span>
            </div>
        )}
      </button>
    </div>
  );
};

export default AIAssistant;
