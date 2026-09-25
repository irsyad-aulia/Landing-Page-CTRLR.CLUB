"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Loader2 } from 'lucide-react';
import { Rajdhani } from 'next/font/google';

const rajdhani = Rajdhani({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
});

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [email, setEmail] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  // Mailchimp action URL (Replace this with your actual Mailchimp URL)
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL || "#";

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Handle click outside
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setEmail('');
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');

    // Simulate network sync/Mailchimp AJAX request
    // In production, use fetch() to send the email to your API or Mailchimp
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus('success');

    // Redirect to Steam after 2 seconds
    setTimeout(() => {
      window.location.href = "https://store.steampowered.com/app/4537750/CTRLRCLUB";
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={handleOutsideClick}
    >
      <div 
        ref={modalRef}
        className={`relative w-full max-w-lg bg-zinc-950 border border-cyan-500/50 p-6 md:p-8 shadow-[0_0_30px_rgba(34,211,238,0.2)] animate-in zoom-in-95 duration-300 ${rajdhani.className}`}
        style={{
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.15), inset 0 0 20px rgba(217, 70, 239, 0.1)',
        }}
      >
        {/* Animated Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-fuchsia-500"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-fuchsia-500"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

        {/* Close Button */}
        {status !== 'success' && (
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 text-zinc-500 hover:text-cyan-400 hover:rotate-90 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        {status === 'success' ? (
          /* SUCCESS STATE */
          <div className="flex flex-col items-center justify-center text-center py-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 tracking-[0.2em] uppercase" style={{ textShadow: '0 0 15px rgba(34,211,238,0.8)' }}>
              [ ACCESS GRANTED ]
            </h2>
            <div className="flex flex-col items-center space-y-3">
              <Loader2 className="w-8 h-8 text-fuchsia-500 animate-spin" />
              <p className="text-zinc-300 text-sm md:text-base tracking-[0.15em] font-mono">
                Operator email verified.<br />Redirecting to Steam...
              </p>
            </div>
            {/* Progress Bar Illusion */}
            <div className="w-full max-w-xs h-1.5 bg-zinc-900 rounded-full overflow-hidden mt-4 border border-cyan-500/20">
              <div className="h-full bg-cyan-400 animate-pulse" style={{ width: '100%', boxShadow: '0 0 10px #22d3ee' }}></div>
            </div>
          </div>
        ) : (
          /* IDLE / SUBMITTING STATE */
          <div className="flex flex-col space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[0.15em] uppercase border-b border-zinc-800 pb-2 inline-block">
                CTRLR.CLUB // <span className="text-cyan-400" style={{ textShadow: '0 0 10px rgba(34,211,238,0.5)' }}>ACCESS PROTOCOL</span>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base tracking-[0.05em] font-mono pt-2">
                Enter your email address to sync with the network and unlock early access.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-5" action={MAILCHIMP_URL} method="POST">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-cyan-500/50 group-focus-within:text-cyan-400 font-mono text-sm">&gt;</span>
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'submitting'}
                  placeholder="OPERATOR_EMAIL@DOMAIN.COM"
                  className="w-full bg-[#050505] border border-zinc-800 text-cyan-50 text-sm md:text-base font-mono pl-8 pr-4 py-3 md:py-4 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 disabled:opacity-50 placeholder:text-zinc-700"
                  style={{ boxShadow: 'inset 0 2px 10px rgba(0,0,0,1)' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="relative w-full group overflow-hidden border border-cyan-500/50 bg-black/40 py-3 md:py-4 transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-400 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-fuchsia-500/0"></div>
                
                <span className="relative z-10 font-bold text-sm md:text-base tracking-[0.2em] uppercase text-cyan-400 group-hover:text-cyan-300" style={{ textShadow: '0 0 10px rgba(34,211,238,0.5)' }}>
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>SYNCING...</span>
                    </span>
                  ) : (
                    'INITIALIZE SYNC'
                  )}
                </span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EarlyAccessModal;
