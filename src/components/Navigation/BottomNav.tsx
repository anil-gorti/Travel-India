import React from 'react';
import { NavLink } from 'react-router-dom';
import { Compass, MessageCircle, Map as MapIcon, User, Bot } from 'lucide-react';
import { cn } from '../../lib/utils';

export const BottomNav: React.FC = () => {
  const navItems = [
    { to: '/', icon: Compass, label: 'Feed' },
    { to: '/explorer', icon: MapIcon, label: 'Map' },
    { to: '/concierge', icon: Bot, label: 'Concierge' },
    { to: '/updates', icon: MessageCircle, label: 'Updates' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-t border-outline-variant/20 rounded-t-[2rem] shadow-[0_-8px_24px_rgba(11,26,125,0.04)]">
      <div className="flex justify-around items-center px-4 pb-6 pt-3">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center p-3 transition-all duration-300 ease-out",
                isActive 
                  ? "text-primary scale-110" 
                  : "text-outline hover:text-primary"
              )
            }
          >
            <Icon className={cn("w-6 h-6 mb-1")} />
            <span className="font-body text-[10px] font-bold uppercase tracking-widest">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
