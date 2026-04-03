import React, { useState } from 'react';
import { Shield, CheckCircle2, ArrowRight, Camera, Fingerprint, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const steps = [
    { title: 'Identity Verification', icon: Shield, desc: 'Secure your profile with government-grade verification.' },
    { title: 'Biometric Link', icon: Fingerprint, desc: 'Connect your biometrics for seamless Safe-Hub access.' },
    { title: 'Privacy Protocol', icon: Lock, desc: 'Choose how you share your travel history and location.' }
  ];

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-8 text-on-primary overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <main className="w-full max-w-md space-y-12 relative z-10">
        <div className="space-y-4 text-center">
          <div className="bg-white/10 w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl border border-white/20">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-headline font-black tracking-tighter">Yaartri Protocol</h1>
          <p className="text-white/70 font-body text-sm max-w-[280px] mx-auto">Build trust. Explore safely. Connect authentically.</p>
        </div>

        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/20 shadow-2xl space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-2xl">
                  {React.createElement(steps[step-1].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold">{steps[step-1].title}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Step {step} of 3</span>
                </div>
              </div>
              <p className="text-sm text-white/80 leading-relaxed font-body">{steps[step-1].desc}</p>
              
              <div className="pt-4">
                <button className="w-full bg-white text-primary p-4 rounded-2xl font-headline font-bold text-sm tracking-tight flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <Camera className="w-5 h-5" />
                  Start Verification
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`h-1.5 rounded-full transition-all duration-500 ${s === step ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}></div>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col items-center gap-6">
          <button 
            onClick={() => step < 3 ? setStep(step + 1) : navigate('/')}
            className="flex items-center gap-3 text-white font-headline font-bold text-sm uppercase tracking-widest hover:gap-5 transition-all"
          >
            {step < 3 ? 'Next Step' : 'Enter Yaartri'} <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">End-to-End Encrypted • GDPR Compliant</p>
        </div>
      </main>
    </div>
  );
};
