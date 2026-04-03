import React, { useState } from 'react';
import { TopBar } from '../components/Navigation/TopBar';
import { MOCK_MESSAGES, MOCK_USER } from '../constants';
import { Send, PlusCircle, AlertTriangle, X, CheckCircle2, MapPin, Castle } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [showAlert, setShowAlert] = useState(true);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMessage = {
      id: Date.now().toString(),
      senderId: MOCK_USER.id,
      senderName: MOCK_USER.name,
      senderAvatar: MOCK_USER.avatar,
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <div className="min-h-screen bg-surface">
      <TopBar title="Sunset Social" showBack subtitle="Closes in 4h 12m" />
      
      <main className="pt-24 pb-40 px-4 max-w-2xl mx-auto space-y-8">
        <AnimatePresence>
          {showAlert && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-inverse-surface rounded-xl p-4 flex items-start gap-4 shadow-lg"
            >
              <div className="bg-error/20 p-2 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-error" />
              </div>
              <div className="flex-1">
                <h4 className="text-on-inverse-surface font-bold text-sm">Ghosting Penalty Warning</h4>
                <p className="text-on-inverse-surface/70 text-xs mt-1 leading-relaxed">
                  You are currently away from the venue. Arrive within 15 minutes to avoid a trust score deduction.
                </p>
              </div>
              <button onClick={() => setShowAlert(false)} className="text-on-inverse-surface/50 hover:text-on-inverse-surface">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-8">
          <div className="flex justify-center">
            <span className="bg-surface-container-high px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-outline">
              Yaar-Circle Formed • 5:00 PM
            </span>
          </div>

          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={cn(
                "flex flex-col gap-2 max-w-[85%]",
                msg.isUser ? "items-end ml-auto" : "items-start"
              )}
            >
              {!msg.isUser && (
                <div className="flex items-center gap-2 mb-1">
                  <img src={msg.senderAvatar} className="w-6 h-6 rounded-full object-cover" alt={msg.senderName} />
                  <span className="text-[11px] font-bold text-outline uppercase">{msg.senderName}</span>
                  {msg.isVerified && (
                    <span className="bg-tertiary-container/10 text-on-tertiary-fixed-variant px-2 py-0.5 rounded-full text-[9px] font-bold uppercase">Verified</span>
                  )}
                </div>
              )}
              <div className={cn(
                "p-4 rounded-2xl shadow-sm",
                msg.isUser 
                  ? "message-gradient text-on-primary rounded-tr-none shadow-md" 
                  : "bg-surface-container-low rounded-tl-none"
              )}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
              <div className="flex items-center gap-1.5 px-1">
                <span className="text-[9px] text-outline">{msg.timestamp}</span>
                {msg.isUser && <CheckCircle2 className="w-3 h-3 text-primary" />}
              </div>
            </div>
          ))}

          {/* Venue Card */}
          <div className="relative ml-4 mr-8 group">
            <div className="bg-surface-container-highest rounded-2xl overflow-hidden shadow-sm transition-transform duration-300 hover:scale-[1.01]">
              <div 
                className="h-32 bg-cover bg-center" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCystPeHXhmsMIPD-HmlS0sSBmhn8EemCaSF7DqUbqW3QlN5OnsZOyTgOUPwrQ9JtIL6WeB29yGu8TfbKltvrj3g3PuNx6SFJBrDhoYt0kJp4p5fOmG72PtGeuHsEtevzCkxH20lEVbIZvAufPZ5D_5uGzH_O-nqnP1BafPc653CD0DnyPino8VFxmHPTRH7Jp0BNUUkWG4bYZZnDpU2TS6GWzY1JhG8VQLk1yxuw8PonuTODvmZ1F-5Ncj-AOmZevPBDtNLgaLlYlE')` }}
              />
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-headline font-bold text-primary text-sm uppercase tracking-tight">The Sky Deck Lounge</h3>
                  <p className="text-[11px] text-outline">MG Road, Central Sector</p>
                </div>
                <div className="bg-secondary-container/20 text-on-secondary-container px-3 py-1 rounded-full flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase">120m away</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Actions & Input */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <div className="px-6 pb-4 flex justify-center">
          <button className="bg-secondary-container hover:scale-105 active:scale-95 transition-all duration-200 text-on-secondary-container px-8 py-3 rounded-2xl flex items-center gap-3 shadow-[0_12px_32px_rgba(143,78,0,0.2)]">
            <Castle className="w-5 h-5 fill-current" />
            <span className="font-headline font-bold text-sm tracking-tight">Lighthouse Check-in</span>
          </button>
        </div>
        <div className="glass-nav px-6 pt-4 pb-8 flex items-center gap-4 rounded-t-[1.5rem] shadow-[0_-12px_32px_rgba(11,26,125,0.06)]">
          <button className="text-outline hover:text-primary transition-colors">
            <PlusCircle className="w-6 h-6" />
          </button>
          <div className="flex-1 bg-surface-container-low rounded-xl px-4 py-2.5">
            <input 
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Message Yaar-Circle..."
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-outline/60 outline-none"
            />
          </div>
          <button 
            onClick={handleSend}
            className="w-10 h-10 flex items-center justify-center bg-primary text-on-primary rounded-xl hover:scale-105 transition-transform"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
