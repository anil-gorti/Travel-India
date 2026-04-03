import React from 'react';
import { TopBar } from '../components/Navigation/TopBar';
import { MOCK_MEETUPS } from '../constants';
import { MapPin, Users, ArrowRight, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export const Feed: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-32">
      <TopBar />
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-8">
        <header className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-headline font-extrabold text-primary tracking-tight">Discover</h2>
            <p className="text-on-surface-variant font-body">Find your next Chai-Stop</p>
          </div>
          <button 
            onClick={() => navigate('/host')}
            className="bg-primary text-white p-3 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <Plus className="w-6 h-6" />
          </button>
        </header>

        <div className="space-y-6">
          {MOCK_MEETUPS.map((meetup, index) => (
            <motion.div 
              key={meetup.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate('/chat')}
              className="group bg-surface-container-low rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={meetup.imageUrl} 
                  alt={meetup.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/30">
                  {meetup.category}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-headline font-bold text-primary leading-tight">{meetup.title}</h3>
                    <div className="flex items-center gap-1.5 mt-1 text-on-surface-variant">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">{meetup.location}</span>
                    </div>
                  </div>
                  <div className="bg-secondary-container/20 text-on-secondary-container px-3 py-1 rounded-lg text-xs font-bold">
                    {meetup.participants}/{meetup.maxParticipants}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20">
                  <div className="flex items-center gap-3">
                    <img src={meetup.host.avatar} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt={meetup.host.name} />
                    <span className="text-xs font-bold text-outline uppercase tracking-wider">Hosted by {meetup.host.name}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};
