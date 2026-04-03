import React from 'react';
import { Bell, ArrowLeft, Shield } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { MOCK_USER } from '../../constants';

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  subtitle?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ title = "Yaartri", showBack, subtitle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full z-50 glass-nav shadow-[0_12px_32px_rgba(11,26,125,0.06)] flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="hover:scale-105 transition-transform duration-200 text-primary"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        )}
        <div className="flex flex-col">
          <h1 className="font-headline font-extrabold text-xl text-primary tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold tracking-wider text-secondary uppercase">
                {subtitle}
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-primary hover:scale-105 transition-transform">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-secondary rounded-full border-2 border-surface"></span>
        </button>
        <div className="relative cursor-pointer" onClick={() => navigate('/profile')}>
          <img 
            src={MOCK_USER.avatar} 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover border-2 border-primary/10 shadow-sm"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-tertiary-fixed rounded-full border-2 border-surface"></div>
        </div>
      </div>
    </header>
  );
};
