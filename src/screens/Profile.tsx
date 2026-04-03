import React from 'react';
import { TopBar } from '../components/Navigation/TopBar';
import { MOCK_USER, MOCK_VOUCHES } from '../constants';
import { ShieldCheck, Star, Clock, MapPin, Award, ArrowRight, MessageSquare, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const Profile: React.FC = () => {
  return (
    <div className="pb-32">
      <TopBar title="Trust Dashboard" showBack />
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-10">
        <section className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-primary/10 p-1 shadow-xl">
              <img src={MOCK_USER.avatar} className="w-full h-full rounded-full object-cover" alt={MOCK_USER.name} />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-tertiary-fixed text-on-tertiary-fixed-variant p-2 rounded-2xl shadow-lg border-4 border-surface">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">{MOCK_USER.name}</h2>
            <div className="flex items-center justify-center gap-2 mt-1 text-outline font-bold text-[11px] uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" />
              <span>Hampi, India</span>
              <span className="mx-1">•</span>
              <span>Joined {MOCK_USER.joinDate}</span>
            </div>
          </div>
        </section>

        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-primary-container/10 border border-primary/10 rounded-[2.5rem] p-8 relative overflow-hidden shadow-sm"
        >
          <div className="flex justify-between items-center relative z-10">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">Yaar Score</span>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-headline font-black text-primary">{MOCK_USER.yaarScore}</span>
                <span className="text-primary/60 font-bold">/100</span>
              </div>
              <div className="bg-primary/10 px-3 py-1 rounded-full inline-flex items-center gap-2 mt-2">
                <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                <span className="text-[10px] font-bold text-primary uppercase">Top 2% Globally</span>
              </div>
            </div>
            <div className="w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-primary/10" />
                <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 * (1 - MOCK_USER.yaarScore / 100)} className="text-primary" />
              </svg>
            </div>
          </div>
        </motion.section>

        <section className="grid grid-cols-3 gap-4">
          {[
            { icon: Clock, label: 'Punctual', value: '98%', color: 'text-secondary' },
            { icon: MessageSquare, label: 'Responsive', value: '100%', color: 'text-tertiary' },
            { icon: Heart, label: 'Helpful', value: '42', color: 'text-error' }
          ].map((stat, i) => (
            <div key={i} className="bg-surface-container-low p-4 rounded-3xl flex flex-col items-center text-center space-y-2 border border-outline-variant/10">
              <stat.icon className={cn("w-5 h-5", stat.color)} />
              <span className="text-xl font-headline font-bold text-primary">{stat.value}</span>
              <span className="text-[9px] font-bold text-outline uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="text-xl font-headline font-bold text-primary tracking-tight">Vouches</h3>
            <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
              See All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {MOCK_VOUCHES.map((vouch, i) => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <img src={vouch.authorAvatar} className="w-10 h-10 rounded-full object-cover" alt={vouch.authorName} />
                  <div>
                    <h4 className="text-sm font-bold text-primary">{vouch.authorName}</h4>
                    <span className="text-[10px] text-outline font-medium">{vouch.timestamp}</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant font-body leading-relaxed italic">"{vouch.text}"</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
