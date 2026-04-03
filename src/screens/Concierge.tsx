import React from 'react';
import { TopBar } from '../components/Navigation/TopBar';
import { Bot, Sparkles, MapPin, Shield, Coffee, ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export const Concierge: React.FC = () => {
  return (
    <div className="pb-32">
      <TopBar title="Yaartri Concierge" showBack />
      
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-10">
        <header className="flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="w-24 h-24 bg-primary text-on-primary rounded-[2.5rem] flex items-center justify-center shadow-2xl border-4 border-surface relative z-10">
              <Bot className="w-12 h-12" />
            </div>
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -top-2 -right-2 bg-secondary text-on-secondary p-2 rounded-xl shadow-lg border-2 border-surface z-20">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">Proactive Proposal</h2>
            <p className="text-on-surface-variant font-body text-sm mt-2 max-w-[280px] mx-auto">
              I've analyzed your travel pattern and nearby verified Yaars.
            </p>
          </div>
        </header>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container-low rounded-[2.5rem] p-8 border border-outline-variant/10 shadow-xl space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Recommended Meetup</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary leading-tight">Heritage Walk & Sunset Chai at Hampi Bazaar</h3>
            <div className="flex items-center gap-4 text-outline">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-bold">400m away</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-bold">Lighthouse Verified</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            <p className="text-[11px] font-bold text-outline uppercase tracking-widest">Who's joining?</p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    className="w-10 h-10 rounded-full border-2 border-surface shadow-sm"
                    alt="User"
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-primary">+ Amara & 2 others</span>
            </div>
          </div>

          <div className="pt-4 space-y-3 relative z-10">
            <button className="w-full bg-primary text-on-primary p-5 rounded-2xl font-headline font-bold text-sm tracking-tight shadow-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Join this Yaar-Circle
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full bg-surface-container-high text-primary p-5 rounded-2xl font-headline font-bold text-sm tracking-tight flex items-center justify-center gap-3 hover:bg-surface-container-highest transition-colors">
              <MessageSquare className="w-5 h-5" />
              Ask Concierge for more details
            </button>
          </div>
        </motion.section>

        <section className="grid grid-cols-2 gap-4">
          <div className="bg-secondary-container/10 p-6 rounded-3xl border border-secondary/10 space-y-3">
            <Coffee className="w-8 h-8 text-secondary" />
            <h4 className="font-headline font-bold text-primary text-sm">Local Insights</h4>
            <p className="text-[10px] text-on-surface-variant leading-relaxed">The Virupaksha Temple is less crowded between 4-5 PM today.</p>
          </div>
          <div className="bg-tertiary-container/10 p-6 rounded-3xl border border-tertiary/10 space-y-3">
            <Shield className="w-8 h-8 text-tertiary" />
            <h4 className="font-headline font-bold text-primary text-sm">Safety Alert</h4>
            <p className="text-[10px] text-on-surface-variant leading-relaxed">New Safe-Hub established at the Riverside Guesthouse.</p>
          </div>
        </section>
      </main>
    </div>
  );
};
