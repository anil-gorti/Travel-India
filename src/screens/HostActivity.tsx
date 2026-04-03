import React from 'react';
import { TopBar } from '../components/Navigation/TopBar';
import { Coffee, Users, Clock, MapPin, Shield, Sparkles, ArrowRight, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export const HostActivity: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-32">
      <TopBar title="Host Activity" showBack />
      
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-10">
        <header className="space-y-2">
          <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">Create a Chai-Stop</h2>
          <p className="text-on-surface-variant font-body">Connect with verified travelers nearby.</p>
        </header>

        <section className="space-y-6">
          <div className="space-y-4">
            <label className="text-[11px] font-bold text-outline uppercase tracking-widest px-1">What's the plan?</label>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Coffee, label: 'Chai & Stories', color: 'bg-primary/10 text-primary' },
                { icon: Users, label: 'Group Walk', color: 'bg-secondary/10 text-secondary' },
                { icon: Sparkles, label: 'Local Secret', color: 'bg-tertiary/10 text-tertiary' },
                { icon: Shield, label: 'Safe-Hub Meet', color: 'bg-error/10 text-error' }
              ].map((cat, i) => (
                <button key={i} className={`p-6 rounded-3xl flex flex-col items-center gap-3 border border-outline-variant/10 hover:border-primary/30 transition-all group ${cat.color}`}>
                  <cat.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-tight">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-primary">Location</h4>
                  <p className="text-xs text-outline">Current: MG Road, Central Sector</p>
                </div>
                <button className="text-primary text-xs font-bold uppercase tracking-widest">Change</button>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-primary">Time</h4>
                  <p className="text-xs text-outline">Starts in 30 minutes</p>
                </div>
                <button className="text-primary text-xs font-bold uppercase tracking-widest">Edit</button>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-tertiary/10 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-tertiary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-primary">Capacity</h4>
                  <p className="text-xs text-outline">Max 4 participants</p>
                </div>
                <button className="text-primary text-xs font-bold uppercase tracking-widest">Adjust</button>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-4">
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-primary text-on-primary p-5 rounded-[2rem] font-headline font-bold text-lg tracking-tight shadow-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Broadcast to Nearby Yaars
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-center text-[10px] text-outline uppercase tracking-widest font-bold mt-6">
            Verified Hosts get 2x Yaar Score for successful meetups
          </p>
        </section>
      </main>
    </div>
  );
};
