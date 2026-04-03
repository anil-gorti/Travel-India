import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BottomNav } from './components/Navigation/BottomNav';
import { Feed } from './screens/Feed';
import { Explorer } from './screens/Explorer';
import { Chat } from './screens/Chat';
import { Profile } from './screens/Profile';
import { Updates } from './screens/Updates';
import { Onboarding } from './screens/Onboarding';
import { HostActivity } from './screens/HostActivity';
import { Concierge } from './screens/Concierge';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/host" element={<HostActivity />} />
          <Route path="/concierge" element={<Concierge />} />
        </Routes>
        <BottomNav />
        
        {/* Background Decoration */}
        <div className="fixed inset-0 -z-10 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed-dim rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-fixed rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </Router>
  );
}
