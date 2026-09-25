'use client';

import { useEffect, useState } from 'react';

interface Props {
  isReady: boolean;
}

export default function ScrollIndicator({ isReady }: Props) {
  // Only show if the page is ready (loading screen finished)
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (!isReady) return;
    setIsTouch(('ontouchstart' in window) || (navigator.maxTouchPoints > 0));

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
        {isTouch ? "Swipe to Explore" : "Scroll to Explore"}
      </div>
      
      {isTouch ? (
        <div className="flex flex-col items-center animate-bounce mt-1" aria-label="Swipe Down Icon">
          <div className="w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400 rotate-45 mb-1" />
          <div className="w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400 rotate-45 mb-1 opacity-75" />
          <div className="w-1.5 h-1.5 border-b-2 border-r-2 border-cyan-400 rotate-45 opacity-50" />
        </div>
      ) : (
        <div className="w-[26px] h-[42px] rounded-full border-2 border-cyan-500/50 flex justify-center pt-2 relative drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] bg-black/20 backdrop-blur-sm" aria-label="Mouse Icon">
          <div className="w-[2px] h-[6px] rounded-full bg-cyan-400 animate-bounce" />
        </div>
      )}
    </div>
  );
}
