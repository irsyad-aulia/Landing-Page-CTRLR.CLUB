'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const trailContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Immediately hide the native cursor
    document.body.style.cursor = 'none';
    document.documentElement.classList.add('hide-native-cursor');

    // Start cursor in the exact center of the screen so it's instantly visible
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${window.innerWidth / 2}px, ${window.innerHeight / 2}px, 0)`;
      cursorRef.current.style.opacity = '1';
    }

    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Ensure it's visible when moving
      if (cursorRef.current && cursorRef.current.style.opacity === '0') {
        cursorRef.current.style.opacity = '1';
      }
      const { clientX: x, clientY: y } = e;
      
      // Move main cursor wrapper instantly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // Throttle trail creation for performance (max ~1 trail every 40ms)
      const now = Date.now();
      if (now - lastTime > 40) {
        lastTime = now;
        
        // Create a trail element
        const trail = document.createElement('div');
        trail.className = 'absolute pointer-events-none text-cyan-400 font-mono text-[10px] md:text-xs opacity-90 drop-shadow-[0_0_5px_cyan] z-50';
        
        // Random Matrix characters
        const chars = '01#$X/[]{}';
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        trail.innerText = randomChar;
        
        // Position it exactly at the cursor
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        
        // Random slight offset around the cursor
        trail.style.transform = `translate(-50%, -50%) translate(${Math.random() * 16 - 8}px, ${Math.random() * 16 - 8}px)`;
        
        // Animation CSS (falling down slightly and fading out)
        trail.style.transition = 'all 0.8s cubic-bezier(0.1, 0.8, 0.1, 1)';
        
        if (trailContainerRef.current) {
          trailContainerRef.current.appendChild(trail);
        }
        
        // Trigger reflow to apply the initial styles, then apply transition state on next frame
        requestAnimationFrame(() => {
          trail.style.transform += ` translateY(25px) scale(0.6)`;
          trail.style.opacity = '0';
          trail.style.color = Math.random() > 0.7 ? '#fff' : '#22d3ee'; // Occasionally flash white
        });

        // Cleanup DOM node after transition finishes
        setTimeout(() => {
          if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
          }
        }, 800);
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto'; // Restore cursor on unmount
      document.documentElement.classList.remove('hide-native-cursor');
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* Trail Container */}
      <div ref={trailContainerRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Main Cursor Wrapper (Moved by JS) */}
      <div 
        ref={cursorRef} 
        className="absolute top-0 left-0 pointer-events-none drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-opacity duration-300"
        style={{
           transform: 'translate3d(-100px, -100px, 0)',
           marginLeft: '-1px', // Align tip exactly to pointer
           marginTop: '-1px',
           opacity: 1, // Instantly visible
        }}
      >
         {/* The Stealth Arrowhead Element */}
         <div 
            className="w-5 h-5 bg-cyan-400 mix-blend-screen"
            style={{
               clipPath: 'polygon(0 0, 100% 30%, 50% 50%, 30% 100%)',
               animation: 'cursor-glitch 2s infinite',
            }}
         />
      </div>
      
      {/* Global CSS for Cursor Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        /* The Glitch Keyframe for the Square */
        @keyframes cursor-glitch {
          0%, 94%, 100% { transform: scale(1); filter: hue-rotate(0deg); opacity: 1; }
          95% { transform: scale(1.8) skewX(30deg); filter: hue-rotate(90deg); opacity: 0.8; }
          96% { transform: scale(0.5) skewX(-30deg); filter: hue-rotate(-90deg); opacity: 0.9; }
          97% { transform: scale(1.4); filter: hue-rotate(180deg); opacity: 1; }
          98% { transform: scale(0.8); filter: hue-rotate(0deg); opacity: 0.8; }
        }
        
        /* Force hide native cursor globally */
        .hide-native-cursor * {
          cursor: none !important;
        }
      `}} />
    </div>
  );
}
