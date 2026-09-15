'use client';

import { useEffect, useState } from 'react';

interface Props {
  isReady: boolean;
}

export default function ScrollIndicator({ isReady }: Props) {
  // Only show if the page is ready (loading screen finished)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isReady) return;

    setIsVisible(window.scrollY === 0);
    
    let idleTimer: NodeJS.Timeout;

    const handleScroll = () => {
      // Hide immediately on scroll
      setIsVisible(false);
      clearTimeout(idleTimer);

      const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        return; // Don't show indicator if at the bottom
      }

      // Reset timer if we are at the top, or after 3 seconds of idle anywhere
      if (window.scrollY === 0) {
        setIsVisible(true);
      } else {
        idleTimer = setTimeout(() => {
          setIsVisible(true);
        }, 3000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(idleTimer);
    };
  }, [isReady]);

  return (
    <div 
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[400] flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-none ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-cyan-400/80 font-mono text-[10px] tracking-[0.3em] uppercase mb-3 animate-pulse">
        Scroll to Explore
      </div>
      
      {/* Mouse Icon */}
      <div className="w-[26px] h-[42px] rounded-full border-2 border-cyan-500/50 flex justify-center pt-2 relative drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] bg-black/20 backdrop-blur-sm">
        {/* Scrolling Wheel */}
        <div className="w-[2px] h-[6px] rounded-full bg-cyan-400 animate-bounce" />
      </div>
    </div>
  );
}
