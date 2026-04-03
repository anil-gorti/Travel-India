import React from 'react';
import { TopBar } from '../components/Navigation/TopBar';
import { MapPin, Shield, Coffee, Search, Filter, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export const Explorer: React.FC = () => {
  const hubs = [
    { id: 1, type: 'lighthouse', name: 'The Sky Deck', x: '45%', y: '40%', status: 'Active' },
    { id: 2, type: 'chaistop', name: 'Irani Café', x: '60%', y: '55%', status: 'Open' },
    { id: 3, type: 'lighthouse', name: 'Heritage Hub', x: '30%', y: '65%', status: 'Active' },
  ];

  return (
    <div className="h-screen overflow-hidden bg-surface">
      <TopBar title="Safe-Hub Map" showBack />
      
      <main className="relative h-full pt-20">
        {/* Mock Map Background */}
        <div className="absolute inset-0 bg-[#E8EAF6] overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3F51B5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          {/* Map Markers */}
          {hubs.map((hub) => (
            <motion.div 
              key={hub.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              style={{ left: hub.x, top: hub.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            >
              <div className="relative">
                <div className={`p-3 rounded-2xl shadow-lg transition-transform group-hover:scale-110 ${hub.type === 'lighthouse' ? 'bg-secondary text-on-secondary' : 'bg-primary text-on-primary'}`}>
                  {hub.type === 'lighthouse' ? <Shield className="w-6 h-6" /> : <Coffee className="w-6 h-6" />}
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-outline-variant/20">
                  <p className="text-xs font-bold text-primary">{hub.name}</p>
                  <p className="text-[9px] text-outline font-bold uppercase tracking-widest">{hub.status}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* User Location */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-8 h-8 bg-primary/20 rounded-full animate-ping absolute inset-0"></div>
              <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filters Overlay */}
        <div className="absolute top-24 left-6 right-6 space-y-4">
          <div className="bg-surface/80 backdrop-blur-xl rounded-2xl p-2 flex items-center gap-3 shadow-lg border border-outline-variant/10">
            <div className="bg-surface-container-low p-2 rounded-xl">
              <Search className="w-5 h-5 text-outline" />
            </div>
            <input 
              type="text" 
              placeholder="Search Safe-Hubs..." 
              className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-outline/60"
            />
            <button className="bg-primary/10 p-2 rounded-xl text-primary">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Hub Info Overlay */}
        <div className="absolute bottom-32 left-6 right-6">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-surface/90 backdrop-blur-2xl rounded-[2.5rem] p-6 shadow-2xl border border-outline-variant/10"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-secondary text-on-secondary p-4 rounded-2xl shadow-lg">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-headline font-bold text-primary">The Sky Deck</h3>
                    <span className="bg-secondary-container/20 text-on-secondary-container px-2 py-0.5 rounded-full text-[9px] font-bold uppercase">Lighthouse</span>
                  </div>
                  <p className="text-xs text-outline mt-0.5">MG Road, Central Sector • 120m away</p>
                </div>
              </div>
              <button className="bg-primary text-on-primary p-3 rounded-2xl shadow-lg">
                <Navigation className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-4 rounded-2xl space-y-1">
                <span className="text-[9px] font-bold text-outline uppercase tracking-widest">Active Yaars</span>
                <p className="text-lg font-headline font-bold text-primary">12 People</p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-2xl space-y-1">
                <span className="text-[9px] font-bold text-outline uppercase tracking-widest">Safety Rating</span>
                <p className="text-lg font-headline font-bold text-primary">4.9/5.0</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};
