import React from 'react';
import { TopBar } from '../components/Navigation/TopBar';
import { MessageCircle, UserPlus, Star, Shield, ArrowRight, Bell } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const Updates: React.FC = () => {
  const notifications = [
    { id: 1, type: 'message', title: 'New Message', body: 'Amara: "Hey everyone! Just reached the Rooftop Lounge..."', time: '2m ago', icon: MessageCircle, color: 'text-primary', bg: 'bg-primary/10' },
    { id: 2, type: 'vouch', title: 'New Vouch', body: 'Priya S. vouched for your travel expertise in Hampi.', time: '1h ago', icon: Shield, color: 'text-tertiary', bg: 'bg-tertiary/10' },
    { id: 3, type: 'meetup', title: 'Meetup Confirmed', body: 'Your "Evening Chai" meetup is now active. Head to Irani Café.', time: '3h ago', icon: Star, color: 'text-secondary', bg: 'bg-secondary/10' },
    { id: 4, type: 'friend', title: 'New Connection', body: 'Rahul K. followed your travel updates.', time: '5h ago', icon: UserPlus, color: 'text-outline', bg: 'bg-outline/10' },
  ];

  return (
    <div className="pb-32">
      <TopBar title="Updates" showBack />
      
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-headline font-extrabold text-primary tracking-tight">Recent Activity</h2>
          <button className="text-primary text-xs font-bold uppercase tracking-widest">Mark all as read</button>
        </header>

        <div className="space-y-4">
          {notifications.map((notif, i) => (
            <motion.div 
              key={notif.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-low p-5 rounded-3xl border border-outline-variant/10 shadow-sm flex gap-4 group cursor-pointer hover:bg-surface-container-high transition-colors"
            >
              <div className={cn("p-3 rounded-2xl h-fit", notif.bg)}>
                <notif.icon className={cn("w-6 h-6", notif.color)} />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-headline font-bold text-primary text-sm uppercase tracking-tight">{notif.title}</h4>
                  <span className="text-[10px] text-outline font-medium">{notif.time}</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{notif.body}</p>
                <div className="flex items-center gap-1 pt-2 text-primary text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State Suggestion */}
        <div className="bg-primary-container/10 rounded-[2.5rem] p-8 text-center space-y-4 border border-primary/10">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <Bell className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="font-headline font-bold text-primary text-lg">Stay in the loop</h3>
            <p className="text-xs text-on-surface-variant mt-1">Enable push notifications to never miss a Chai-Stop or a Vouch.</p>
          </div>
          <button className="bg-primary text-on-primary px-8 py-3 rounded-2xl font-headline font-bold text-sm tracking-tight shadow-lg">
            Enable Notifications
          </button>
        </div>
      </main>
    </div>
  );
};
