"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SocialIcons from '@/components/sections/SocialIcons';
import { Rubik_Glitch, Rajdhani } from 'next/font/google';
import AnomalyPurge from '@/components/AnomalyPurge';
import ScrollIndicator from '@/components/ScrollIndicator';
import ScrambleText from '@/components/ScrambleText';

const corruptedFont = Rubik_Glitch({
  weight: '400',
  subsets: ['latin'],
});

const rajdhani = Rajdhani({
  weight: ['600', '700'],
  subsets: ['latin'],
});

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// HELPER FUNCTIONS (Outside main component)
// ==========================================
// Utility to render terminal text word by word
const renderTerminalText = (text: string, baseClass: string) => {
  return text.split(' ').map((word, i) => (
    <span key={i} className={`${baseClass} inline-block opacity-0 blur-[8px] transform translate-y-4`} style={{ marginRight: '0.25em' }}>
      {word}
    </span>
  ));
};

// ==========================================
// 3D CSS DIAMOND HELPERS (Octagonal Antiprism)
// ==========================================
const DownTriangleTop = () => (
  <svg viewBox="0 0 15.3 26.6" className="w-full h-full overflow-visible drop-shadow-[0_0_5px_#d946ef]">
    <polygon points="0,0 15.3,0 7.65,26.6" fill="rgba(217,70,239,0.15)" stroke="#d946ef" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
const UpTriangleTop = () => (
  <svg viewBox="0 0 27.6 24.0" className="w-full h-full overflow-visible drop-shadow-[0_0_5px_#d946ef]">
    <polygon points="13.8,0 27.6,24.0 0,24.0" fill="rgba(217,70,239,0.15)" stroke="#d946ef" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
const DownTriangleBot = () => (
  <svg viewBox="0 0 27.6 56.0" className="w-full h-full overflow-visible drop-shadow-[0_0_5px_#d946ef]">
    <polygon points="0,0 27.6,0 13.8,56.0" fill="rgba(217,70,239,0.15)" stroke="#d946ef" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
const TopTable = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full overflow-visible drop-shadow-[0_0_5px_#d946ef]">
    <polygon points="40,20 34.14,34.14 20,40 5.86,34.14 0,20 5.86,5.86 20,0 34.14,5.86" fill="rgba(217,70,239,0.15)" stroke="#d946ef" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const angles8 = [0, 45, 90, 135, 180, 225, 270, 315];
const angles8Offset = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [ctaStatus, setCtaStatus] = useState<'idle' | 'denied'>('idle');

  // Derived state to determine if loading is fully complete
  const isFullyLoaded = loadingProgress >= 100;

  useEffect(() => {
    // Force scroll to top instantly on mount
    window.scrollTo(0, 0);
    
    // Disable automatic browser scroll restoration (fixes the issue where refreshing the page keeps you at the bottom)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // STRICT SCROLL RESET: Force scroll reset immediately before unload
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Phase 1 Entry Animation Trigger (Fires after Loading Screen)
  useEffect(() => {
    if (!isReady || !badgeRef.current) return;
    
    // Wait for loading screen fade (1.5s) + Scramble delay (0.6s) = 2.1s delay
    const badgeTl = gsap.timeline({ delay: 2.1 }); 
    badgeTl.fromTo(badgeRef.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.04 })
      .to(badgeRef.current, { opacity: 0, duration: 0.03 })
      .to(badgeRef.current, { opacity: 1, duration: 0.05 })
      .to(badgeRef.current, { opacity: 0.3, duration: 0.03 })
      .to(badgeRef.current, { opacity: 1, duration: 0.1 });

    return () => { badgeTl.kill(); };
  }, [isReady]);

  // Media & Container References
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Main Phase References
  const phase1Ref = useRef<HTMLDivElement>(null);
  const phase2Ref = useRef<HTMLDivElement>(null);
  const phase2TitleRef = useRef<HTMLHeadingElement>(null);
  const phase4Ref = useRef<HTMLDivElement>(null);
  const phase5Ref = useRef<HTMLDivElement>(null);

  // Phase 1 Element References
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  // Phase 3 Element References (HUD)
  const hudGroup1Ref = useRef<HTMLDivElement>(null);
  const hud1_1Ref = useRef<HTMLDivElement>(null);
  const hud1_2Ref = useRef<HTMLDivElement>(null);
  const hud1_3Ref = useRef<HTMLDivElement>(null);
  const hud1_4Ref = useRef<HTMLDivElement>(null);

  const hudGroup2Ref = useRef<HTMLDivElement>(null);
  const hud2_1Ref = useRef<HTMLSpanElement>(null);
  const hud2_2Ref = useRef<HTMLSpanElement>(null);
  const hud2_3Ref = useRef<HTMLSpanElement>(null);
  const hud2_4Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', updateCanvasSize);

    const frameCount = 1200;
    // Extension Calibration: Targeting the prepared WebP format
    const currentFrame = (index: number) => `/assets/sequence/Frame (${index}).webp`;

    // Allocate empty memory without blocking the thread
    const images: HTMLImageElement[] = new Array(frameCount);
    const sequence = { frame: 0 };

    // ==========================================
    // PERFORMANCE OPTIMIZATION: CONCURRENCY QUEUE
    // ==========================================
    const firstImg = new Image();
    firstImg.src = currentFrame(1);
    firstImg.onload = () => {
      images[0] = firstImg;
      render(); // Force render frame 1 immediately

      // Start the concurrency pool
      startConcurrencyPool();
    };

    const startConcurrencyPool = () => {
      const CONCURRENCY_LIMIT = 8;
      let currentIndex = 1; // Tracks which frame to queue next
      let loadedCount = 1;  // Tracks how many frames have finished

      const loadNext = () => {
        if (currentIndex >= frameCount) {
          // If all frames are queued and we've reached the end
          if (loadedCount >= frameCount) {
             if (videoRef.current) {
               videoRef.current.src = "/assets/CTA Final_processed.webm";
             }
          }
          return;
        }

        const indexToLoad = currentIndex;
        currentIndex++;

        const img = new Image();
        img.src = currentFrame(indexToLoad + 1);

        const onComplete = () => {
          loadedCount++;

          // Update loading progress based on loadedCount up to 200 to speed up loading phase
          if (loadedCount <= 200) {
            setLoadingProgress(Math.round((loadedCount / 200) * 100));
          }

          if (loadedCount >= 200) {
             // We can't use the state 'isReady' directly inside this closure reliably if it's changing,
             // but since setIsReady is safe to call multiple times, we'll just ensure ScrollTrigger refreshes once.
             // Actually, we'll just check if it hits exactly 200 to trigger the initial reveal.
             if (loadedCount === 200) {
               setIsReady(true);
               requestAnimationFrame(() => {
                 if (typeof ScrollTrigger !== 'undefined') {
                   ScrollTrigger.refresh();
                 }
               });
             }
          }

          // As soon as this worker finishes, assign it the next frame
          setTimeout(loadNext, 0); // use setTimeout to yield to main thread
        };

        img.onload = () => {
          images[indexToLoad] = img;
          onComplete();
        };

        img.onerror = () => {
          // Skip on error to avoid hanging
          onComplete();
        };
      };

      // Kick off N concurrent workers
      for (let i = 0; i < CONCURRENCY_LIMIT; i++) {
        loadNext();
      }
    };

    const getLifecycleStyle = (frame: number, entryStart: number, exitStart: number) => {
      const entryDuration = 8;
      const exitDuration = 7;
      if (frame < entryStart) return { opacity: "0", filter: "blur(8px)" };
      if (frame >= entryStart && frame < entryStart + entryDuration) {
        const progress = (frame - entryStart) / entryDuration;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        return { opacity: easeOut.toString(), filter: `blur(${(1 - easeOut) * 8}px)` };
      }
      if (frame >= entryStart + entryDuration && frame < exitStart) {
        return { opacity: "1", filter: "blur(0px)" };
      }
      if (frame >= exitStart && frame <= exitStart + exitDuration) {
        const progress = (frame - exitStart) / exitDuration;
        const easeIn = Math.pow(progress, 3);
        return { opacity: (1 - easeIn).toString(), filter: `blur(${easeIn * 20}px)` };
      }
      return { opacity: "0", filter: "blur(20px)" };
    };

    const getEntryStyle = (frame: number, startFrame: number, duration = 15) => {
      if (frame < startFrame) return { opacity: "0", transform: "translateY(20px)", filter: "blur(12px)" };
      if (frame > startFrame + duration) return { opacity: "1", transform: "", filter: "" };
      const progress = (frame - startFrame) / duration;
      return {
        opacity: progress.toString(),
        transform: `translateY(${(1 - progress) * 20}px)`,
        filter: `blur(${(1 - progress) * 12}px)`
      };
    };

    const render = () => {
      const frameIndex = Math.round(sequence.frame);
      const img = images[frameIndex];

      // Dynamic Protection: If user scrolls fast and image isn't loaded, hold at last available frame
      if (!img || !img.complete) return;

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);

      // Render Phase 3 HUD Groups
      if (frameIndex >= 341 && frameIndex <= 375) {
        if (hudGroup1Ref.current) hudGroup1Ref.current.style.opacity = "1";
        const applyWordByWord = (ref: React.RefObject<any>, startEntry: number, startExit: number) => {
          if (!ref.current) return;
          ref.current.style.opacity = "1";
          const children = ref.current.children;
          for (let i = 0; i < children.length; i++) {
            const childStartEntry = startEntry + (i * 2);
            const style = getLifecycleStyle(frameIndex, childStartEntry, startExit);
            const child = children[i] as any;
            child.style.opacity = style.opacity;
            child.style.filter = style.filter;
          }
        };
        applyWordByWord(hud1_1Ref, 341, 368);
        applyWordByWord(hud1_2Ref, 341, 368);
        applyWordByWord(hud1_3Ref, 344, 368);
        applyWordByWord(hud1_4Ref, 347, 368);
      } else {
        if (hudGroup1Ref.current) hudGroup1Ref.current.style.opacity = "0";
      }

      if (frameIndex >= 410 && frameIndex <= 520) {
        if (hudGroup2Ref.current) hudGroup2Ref.current.style.opacity = "1";
        const applyEntry = (ref: React.RefObject<any>, start: number) => {
          if (!ref.current) return;
          const style = getEntryStyle(frameIndex, start, 15);
          ref.current.style.opacity = style.opacity;
          ref.current.style.transform = style.transform;
          ref.current.style.filter = style.filter;
        };
        applyEntry(hud2_1Ref, 410);
        applyEntry(hud2_2Ref, 425);
        applyEntry(hud2_3Ref, 440);
        applyEntry(hud2_4Ref, 455);
      } else {
        if (hudGroup2Ref.current) hudGroup2Ref.current.style.opacity = "0";
      }
    };

    // Phase 1 Entry Timeline
    // Cinematic Decode handles the Title entrance now
    // Badge entrance is handled by a separate useEffect triggered by isReady


    const flickerTargets = [titleRef.current, badgeRef.current];
    const flickerTl = gsap.timeline({ repeat: -1, delay: 3 });
    flickerTl.to(flickerTargets, { opacity: 0.3, duration: 0.04, ease: "power1.inOut" })
      .to(flickerTargets, { opacity: 1, duration: 0.08, ease: "power1.inOut" })
      .to(flickerTargets, { opacity: 0.5, duration: 0.04, ease: "power1.inOut" })
      .to(flickerTargets, { opacity: 1, duration: 0.1, ease: "power1.inOut" })
      .to(flickerTargets, { opacity: 1, duration: 4 });

    // Scroll Timeline (GSAP)
    const st = gsap.to(sequence, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth inertia sync
      },
      onUpdate: render, // Removed redundant requestAnimationFrame to fix lag
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Sync with sequence scrub to prevent disjointed scrolling
      }
    });

    // CRITICAL FIX: Removed heavy filter: blur() from the scatter animation
    // Animating 3D transforms + opacity is fast, animating blur on dozens of DOM elements crushes the GPU
    tl.to(".ui-particle", {
      x: "random(-1500, 1500)", y: "random(-1000, 1000)", z: "random(-1000, 1000)",
      rotationX: "random(-720, 720)", rotationY: "random(-720, 720)", rotationZ: "random(-720, 720)",
      scale: "random(0.1, 4)", opacity: 0, duration: "random(4, 8)", ease: "power4.out",
    }, 8)
      .to(phase1Ref.current, { opacity: 0, duration: 1 }, 12);

    tl.fromTo(phase2Ref.current, { opacity: 0 }, { opacity: 1, duration: 2, ease: "power1.inOut" }, 14)
      .to(phase2TitleRef.current, {
        keyframes: [
          { opacity: 0, duration: 0.1 }, { opacity: 1, duration: 0.1 }, { opacity: 0.3, duration: 0.1 },
          { opacity: 1, duration: 0.2 }, { opacity: 0.5, duration: 0.1 }, { opacity: 1, duration: 0.4 }
        ], ease: "none",
      }, 14.2)
      .to([".term-word-cyan", ".term-word-magenta"], { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" }, 14.5)
      .to([".term-word-cyan", ".term-word-magenta"], { opacity: 0, filter: "blur(8px)", x: 15, duration: 0.2, stagger: 0.015, ease: "power2.in" }, 25.0)
      .to(phase2TitleRef.current, {
        keyframes: [
          { opacity: 0, x: -10, skewX: 10, duration: 0.05 }, { opacity: 1, x: 10, skewX: -10, duration: 0.05 },
          { opacity: 0, scaleY: 0.01, scaleX: 1.2, skewX: 0, filter: "brightness(3)", duration: 0.15 }
        ], ease: "power4.in"
      }, 25.5)
      .to(phase2Ref.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 25.8);

    tl.fromTo(phase4Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 5 }, 60)
      .to(phase4Ref.current, { opacity: 0, y: -50, duration: 5 }, 75);

    tl.fromTo(phase5Ref.current, { opacity: 0 }, { opacity: 1, duration: 3 }, 97)
      .to(canvasRef.current, { opacity: 0, duration: 3 }, 97)
      .to(videoRef.current, { opacity: 1, duration: 3 }, 97);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      st.kill();
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      {/* Full Screen WebGL Canvas */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none bg-black">
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
        <video
          ref={videoRef}
          className="w-full h-full object-cover hidden"
          muted
          playsInline
          onEnded={() => {
            if (videoRef.current) {
              videoRef.current.style.display = 'none';
            }
          }}
        />
      </div>

      {/* NEW COMPONENTS */}
      <AnomalyPurge isReady={isReady} />
      <ScrollIndicator isReady={isReady} />

      {/* ========================================== */}
      {/* LOADING SCREEN OVERLAY                       */}
      {/* ========================================== */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-all duration-[1500ms] ease-in-out ${isReady ? 'opacity-0 pointer-events-none scale-110 blur-xl' : 'opacity-100 pointer-events-auto scale-100 blur-0'}`}
      >
        
        {/* DYNAMIC SCALING WRAPPER FOR LOADING SCREEN */}
        <div 
          className="flex flex-col items-center justify-center w-full"
          style={{ transform: 'scale(clamp(0.4, 100dvh / 800, 1.2))' }}
        >

          {/* Real 3D CSS Diamond Spinner (Octagonal Brilliant Cut) */}
          <div 
            className="relative mb-24 flex items-center justify-center preserve-3d transition-transform" 
            style={{ perspective: '800px' }}
          >


          {/* 3D MRI Ring Scanner (Option 1) */}
          <div 
             className="absolute w-[120px] h-[120px] rounded-full border-4 border-cyan-400 opacity-80 mix-blend-screen preserve-3d"
             style={{ 
                boxShadow: '0 0 30px #22d3ee, inset 0 0 30px #22d3ee',
                animation: 'mri-ring 2s ease-in-out infinite alternate'
             }}
          />

          <div className="diamond-container">
            {/* Top Table */}
            <div className="absolute left-[-20px] top-[-40px] w-[40px] h-[40px] preserve-3d" style={{ transform: `rotateX(90deg)` }}>
              <TopTable />
            </div>
            
            {/* Zigzag Top Facets */}
            {angles8Offset.map((a, i) => (
              <div key={`dt-${i}`} className="absolute left-[-7.65px] top-[-20px] w-[15.3px] h-[26.6px] origin-top preserve-3d" style={{ transform: `rotateY(${a}deg) translateZ(18.5px) rotateX(41.18deg)` }}>
                <DownTriangleTop />
              </div>
            ))}
            {angles8.map((a, i) => (
              <div key={`ut-${i}`} className="absolute left-[-13.8px] top-[-24.0px] w-[27.6px] h-[24.0px] origin-bottom preserve-3d" style={{ transform: `rotateY(${a}deg) translateZ(33.3px) rotateX(33.62deg)` }}>
                <UpTriangleTop />
              </div>
            ))}
            
            {/* Bottom Facets */}
            {angles8.map((a, i) => (
              <div key={`b-${i}`} className="absolute left-[-13.8px] top-[0px] w-[27.6px] h-[56.0px] origin-top preserve-3d" style={{ transform: `rotateY(${a}deg) translateZ(33.3px) rotateX(-36.5deg)` }}>
                <DownTriangleBot />
              </div>
            ))}
          </div>
        </div>

        {/* Text UI Section - Elevated Z-Index to prevent occlusion by the 3D mask */}
        <div className="relative z-[200] flex flex-col items-center w-full px-4">
          {/* 3D Tube Loading Bar */}
          <div 
             className="relative w-[450px] max-w-[80vw] h-5 mb-8 overflow-hidden rounded-full border border-cyan-400/20"
             style={{
                backgroundColor: '#05151a', // very dark cyan/black
                boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.9), inset 0 -1px 3px rgba(255,255,255,0.15), 0 0 15px rgba(34,211,238,0.1)'
             }}
          >
            <div 
              className="absolute top-0 left-0 h-full transition-all duration-200 ease-out rounded-full"
              style={{ 
                 width: `${loadingProgress}%`,
                 backgroundImage: `
                   linear-gradient(
                     to bottom,
                     rgba(255, 255, 255, 0.9) 0%,
                     rgba(255, 255, 255, 0.3) 15%,
                     #22d3ee 35%,
                     #06b6d4 65%,
                     #164e63 90%,
                     rgba(34, 211, 238, 0.5) 100%
                   )
                 `,
                 boxShadow: '0 0 20px rgba(34,211,238,0.8), inset 0 0 4px rgba(255,255,255,0.6)'
              }}
            >
              {/* Optional: Keep the diagonal stripes, but blend them subtly into the liquid tube */}
              <div 
                 className="absolute inset-0 opacity-20 mix-blend-multiply rounded-full"
                 style={{
                    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(0,0,0,1) 5px, rgba(0,0,0,1) 10px)',
                    backgroundSize: '14.14px 14.14px',
                    animation: 'stripes-move 0.5s linear infinite'
                 }}
              />
            </div>
          </div>
          <h2 className={`text-xl font-bold text-cyan-400 tracking-[0.2em] mb-3 uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] text-center ${rajdhani.className}`} style={{ animation: 'glitch-text 3s infinite' }}>
            {[
              "PRO-TIP: ALWAYS CHECK YOUR BLIND SPOTS",
              "LORE: THE GRID WAS ESTABLISHED IN 2084",
              "PRO-TIP: HIGH APM INCREASES SURVIVAL RATE",
              "LORE: NEON IS THE LIFEBLOOD OF THE CITY",
              "PRO-TIP: KEEP YOUR HARDWARE UPDATED",
              "LORE: CTRLR.CLUB WAS BORN FROM THE UNDERGROUND",
              "SYSTEM READY, INITIATING LOGIN"
            ][Math.min(Math.floor(loadingProgress / 15), 6)]}
          </h2>
          <p className="text-zinc-400 text-sm tracking-[0.3em] uppercase animate-pulse">
            [ SYSTEM SYNC: {loadingProgress}% ]
          </p>
        </div>
        
        </div> {/* End of Dynamic Scaling Wrapper */}

      </div>

      {/* ========================================== */}
      {/* DEVICE ORIENTATION LOCKDOWN (Mobile Portrait Only) */}
      {/* ========================================== */}
      <div className={`fixed inset-0 z-[9999] hidden max-md:portrait:flex flex-col items-center justify-center bg-black px-6 text-center ${rajdhani.className}`}>
        <div className="relative w-16 h-28 border-2 border-cyan-400 rounded-xl mb-8 flex items-center justify-center animate-mechanical-rotate shadow-[0_0_20px_rgba(34,211,238,0.2)] bg-black">
          <div className="w-5 h-1 bg-cyan-400/50 rounded-full absolute top-2"></div>
          <div className="w-4 h-4 border border-fuchsia-500 rounded-full absolute bottom-2 shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
        </div>
        <h2 className="text-2xl font-bold text-red-500 tracking-[0.2em] mb-4 uppercase" style={{ textShadow: '0 0 10px rgba(239,68,68,0.6)' }}>
          [ SYS.ERR: ORIENTATION ]
        </h2>
        <p className="text-zinc-300 text-lg tracking-[0.1em] max-w-[280px] leading-relaxed">
          ROTATE DEVICE TO LANDSCAPE TO INITIALIZE THE GRID.
        </p>
        <div className="mt-10 flex gap-3">
          <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse shadow-[0_0_5px_#22d3ee]"></div>
          <div className="w-1.5 h-1.5 bg-fuchsia-500 animate-pulse shadow-[0_0_5px_#d946ef]" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse shadow-[0_0_5px_#22d3ee]" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      <main className={`relative min-h-screen bg-black text-white overflow-x-hidden font-mono selection:bg-green-500/30 transition-opacity duration-1000 ease-in-out ${isReady ? 'opacity-100' : 'opacity-0'}`}>

      {/* ========================================== */}
      {/* CENTRALIZED CSS CONTROL (Keyframes)          */}
      {/* ========================================== */}
      <style>{`
        /* Square Antiprism 3D CSS Diamond Geometry */
        .preserve-3d { transform-style: preserve-3d; }
        
        .diamond-container {
          width: 0;
          height: 0;
          position: relative;
          transform-style: preserve-3d;
          animation: diamond-spin 6s linear infinite;
        }
        
        @keyframes diamond-spin {
          0% { transform: rotateX(-15deg) rotateY(0deg); }
          100% { transform: rotateX(-15deg) rotateY(360deg); }
        }

        @keyframes glitch-box {
          0%, 94%, 100% { transform: scale(1) translate(0); filter: hue-rotate(0deg); opacity: 0.9; }
          95% { transform: scale(1.1) translate(-1px, 1px); filter: hue-rotate(90deg); opacity: 1; }
          96% { transform: scale(0.9) translate(1px, -1px); filter: hue-rotate(-90deg); opacity: 0.6; }
          97% { transform: scale(1.1) translate(0px, 2px); filter: hue-rotate(45deg); opacity: 1; }
          98% { transform: scale(0.9) translate(-2px, 0px); filter: hue-rotate(-45deg); opacity: 0.8; }
        }

        @keyframes mri-ring {
          0% { transform: rotateX(90deg) translateZ(-80px) scale(0.8); opacity: 0; }
          20% { opacity: 1; transform: rotateX(90deg) translateZ(-50px) scale(1); }
          80% { opacity: 1; transform: rotateX(90deg) translateZ(50px) scale(1); }
          100% { transform: rotateX(90deg) translateZ(80px) scale(0.8); opacity: 0; }
        }

        @keyframes stripes-move {
          0% { background-position: 0 0; }
          100% { background-position: 14.14px 0; }
        }

        @keyframes hud-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes glitch-text {
          0%, 95%, 100% { transform: translate(0); opacity: 1; }
          96% { transform: translate(-2px, 1px); opacity: 0.8; }
          97% { transform: translate(2px, -1px); opacity: 0.9; filter: hue-rotate(90deg); }
          98% { transform: translate(-1px, 2px); opacity: 1; }
          99% { transform: translate(1px, -2px); opacity: 0.8; filter: hue-rotate(-90deg); }
        }

        /* Phase 4: Lockdown Mobile */
        @keyframes mechanical-rotate {
          0%, 15% { transform: rotate(0deg); }
          35%, 75% { transform: rotate(-90deg); }
          90%, 100% { transform: rotate(0deg); }
        }
        .animate-mechanical-rotate { animation: mechanical-rotate 3.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite; }
        
        /* Phase 3: HUD Animation */
        @keyframes hud-pulse {
          0%, 100% { opacity: 1; filter: brightness(1) drop-shadow(0 0 10px rgba(34,211,238,0.5)); }
          50% { opacity: 0.8; filter: brightness(1.3) drop-shadow(0 0 20px rgba(34,211,238,0.8)); }
        }
        .animate-hud-pulse { animation: hud-pulse 3s ease-in-out infinite; }
        
        @keyframes ghost-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .animate-ghost-float { animation: ghost-float 4s ease-in-out infinite; }
        
        /* Phase 2: Animations */
        @keyframes core-breathe {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 0px rgba(34,211,238,0)); }
          50% { filter: brightness(1.25) drop-shadow(0 0 15px rgba(34,211,238,0.6)); }
        }
        .animate-core-breathe { animation: core-breathe 3s ease-in-out infinite; }
        
        @keyframes circuit-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; filter: brightness(1.5); }
        }
        .animate-circuit { animation: circuit-pulse 2s ease-in-out infinite; }
        
        /* Phase 5: CTA Animations */
        @keyframes dual-core-breathe {
          0% { text-shadow: 0 0 10px rgba(255,255,255,0.8), 0 0 30px rgba(34,211,238,0.9), 0 0 60px rgba(34,211,238,0.5), 0 5px 20px rgba(0,0,0,1); filter: brightness(1.2); }
          50% { text-shadow: 0 0 10px rgba(255,255,255,0.8), 0 0 30px rgba(217,70,239,0.9), 0 0 60px rgba(217,70,239,0.5), 0 5px 20px rgba(0,0,0,1); filter: brightness(1); }
          100% { text-shadow: 0 0 10px rgba(255,255,255,0.8), 0 0 30px rgba(34,211,238,0.9), 0 0 60px rgba(34,211,238,0.5), 0 5px 20px rgba(0,0,0,1); filter: brightness(1.2); }
        }
        .animate-dual-core { animation: dual-core-breathe 4s infinite ease-in-out; }
        
        @keyframes shimmer-sweep {
          0% { transform: translateX(-150%) skewX(-25deg); opacity: 0; }
          10% { opacity: 1; }
          40% { transform: translateX(250%) skewX(-25deg); opacity: 0; }
          100% { transform: translateX(250%) skewX(-25deg); opacity: 0; } 
        }
        .btn-shimmer { position: relative; overflow: hidden; }
        .btn-shimmer::after {
          content: ''; position: absolute; top: 0; left: 0; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.7), transparent);
          animation: shimmer-sweep 3.5s infinite ease-in-out; z-index: 10; pointer-events: none;
        }
      `}</style>

      {/* ========================================== */}
      {/* BACKGROUND MEDIA                           */}
      {/* ========================================== */}
      <video
        ref={videoRef}
        autoPlay loop muted playsInline
        className="fixed inset-0 w-screen h-[100dvh] z-0 object-cover pointer-events-none opacity-0"
      />
      <canvas ref={canvasRef} className="fixed inset-0 w-screen h-[100dvh] z-0 object-cover pointer-events-none" />

      {/* ========================================== */}
      {/* PHASE 3: FRAME-PERFECT HUD OVERLAY         */}
      {/* ========================================== */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-50 overflow-hidden">

        {/* GROUP 1: The Core Reboot */}
        <div ref={hudGroup1Ref} className="absolute inset-0 w-full h-full opacity-0">

          <div ref={hud1_1Ref} className="absolute top-[10%] md:top-[12%] lg:top-[8%] left-1/2 -translate-x-1/2 font-mono text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-[0.2em] lg:tracking-[0.3em] text-white whitespace-nowrap opacity-0 animate-hud-pulse" style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(34,211,238,0.8)' }}>
            <span>[ SYSTEM OVERRIDE ]</span>
          </div>

          <div ref={hud1_2Ref} className="absolute top-[30%] md:top-[33%] lg:top-[30%] left-[62%] md:left-[62%] lg:left-[60%] font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-lg font-medium text-fuchsia-400 whitespace-nowrap opacity-0 animate-hud-pulse" style={{ textShadow: '0 0 8px rgba(217,70,239,0.8)' }}>
            <span>&gt;</span> <span className="ml-1">SYNC</span> <span className="ml-1">CASCADE:</span> <span className="ml-1">INITIATED</span>
          </div>

          <div ref={hud1_3Ref} className="absolute top-[43%] md:top-[46%] lg:top-[45%] right-[65%] md:right-[65%] lg:right-[63%] font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-lg font-medium text-cyan-400 whitespace-nowrap opacity-0 animate-hud-pulse" style={{ textShadow: '0 0 8px rgba(34,211,238,0.8)' }}>
            <span>&gt;</span> <span className="ml-1">CORRUPTION:</span> <span className="ml-1">PURGED</span>
          </div>

          <div ref={hud1_4Ref} className="absolute top-[60%] md:top-[62%] lg:top-[60%] left-[62%] md:left-[62%] lg:left-[60%] font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-lg font-bold text-white whitespace-nowrap opacity-0 animate-hud-pulse" style={{ textShadow: '0 0 8px rgba(255,255,255,0.8), 0 0 15px rgba(34,211,238,0.8)' }}>
            <span>&gt;</span> <span className="ml-1">DIAMOND</span> <span className="ml-1">CORE:</span> <span className="ml-1">RESTORED</span>
          </div>

        </div>

        {/* GROUP 2: Tunnel Transition */}
        <div ref={hudGroup2Ref} className="absolute top-[8%] md:top-[12%] lg:top-[15%] left-1/2 -translate-x-1/2 flex flex-row justify-center items-center gap-x-2 md:gap-x-3 lg:gap-x-5 w-full px-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl tracking-wide opacity-0 animate-ghost-float whitespace-nowrap">
          <span ref={hud2_1Ref} className={`text-white opacity-0 font-bold ${rajdhani.className}`} style={{ textShadow: '0 4px 15px rgba(15,23,42,0.8), 0 10px 30px rgba(88,28,135,0.5), 0 0 15px rgba(255,255,255,0.9)' }}>
            SYSTEM
          </span>
          <span ref={hud2_2Ref} className={`text-white opacity-0 mr-1.5 md:mr-4 lg:mr-6 font-bold ${rajdhani.className}`} style={{ textShadow: '0 4px 15px rgba(15,23,42,0.8), 0 10px 30px rgba(88,28,135,0.5), 0 0 15px rgba(255,255,255,0.9)' }}>
            STABLE.
          </span>
          <span ref={hud2_3Ref} className={`text-cyan-400 opacity-0 font-bold ${rajdhani.className}`} style={{ textShadow: '0 4px 15px rgba(8,51,68,0.8), 0 10px 30px rgba(6,182,212,0.3), 0 0 15px rgba(34,211,238,0.9)' }}>
            WELCOME,
          </span>
          <span ref={hud2_4Ref} className={`text-fuchsia-400 opacity-0 font-bold ${rajdhani.className}`} style={{ textShadow: '0 4px 15px rgba(74,4,78,0.8), 0 10px 30px rgba(192,38,211,0.3), 0 0 15px rgba(217,70,239,0.9)' }}>
            OPERATOR.
          </span>
        </div>
      </div>

      {/* ========================================== */}
      {/* MAIN SCROLL CONTAINER                      */}
      {/* ========================================== */}
      <div ref={containerRef} className="relative z-10 h-[1500vh] w-full">

        {/* PHASE 1: THE INITIATION (Updated for Mobile) */}
        <div ref={phase1Ref} className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none px-4" style={{ perspective: '1200px' }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7)_0%,transparent_70%)] -z-10"></div>
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center w-full px-2">
            <h1 ref={titleRef}
              className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center uppercase mb-4 md:mb-6 lg:mb-10 relative z-10 leading-tight lg:leading-relaxed tracking-[0.1em] lg:tracking-[0.15em] ${corruptedFont.className}`}
              style={{ textShadow: `0 0 5px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.3), 0 5px 20px rgba(0,0,0,0.9)` }}>
              
              {/* Cinematic Decode animation */}
              <ScrambleText text="The controller arcade game" isReady={isReady} delay={1500} className="inline-block" />
              <br />
              <ScrambleText text="that hits different." isReady={isReady} delay={1800} className="inline-block" />
            </h1>
          </div>

          <div ref={badgeRef} className="relative mt-0 lg:mt-2 opacity-0">
            <div className="ui-particle absolute -top-[2px] -left-[2px] w-4 h-[2px] bg-cyan-400 z-20"></div>
            <div className="ui-particle absolute -top-[2px] -left-[2px] w-[2px] h-4 bg-cyan-400 z-20"></div>
            <div className="ui-particle absolute -bottom-[2px] -right-[2px] w-4 h-[2px] bg-fuchsia-500 z-20"></div>
            <div className="ui-particle absolute -bottom-[2px] -right-[2px] w-[2px] h-4 bg-fuchsia-500 z-20"></div>
            <div className="ui-particle absolute top-1/2 -left-[6px] w-[6px] h-[1px] bg-cyan-400/50 z-20"></div>
            <div className="ui-particle absolute top-1/3 -right-[6px] w-[6px] h-[1px] bg-fuchsia-500/50 z-20"></div>
            <div className="ui-particle flex items-center gap-2 lg:gap-4 bg-black/40 px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 relative z-10 border border-zinc-800/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
              <p className={`text-cyan-400 text-[10px] md:text-xs lg:text-base tracking-[0.1em] lg:tracking-[0.2em] uppercase ${corruptedFont.className}`} style={{ textShadow: 'none' }}>
                SYS.INFECTED // You are the Operator
              </p>
            </div>
          </div>
        </div>

        {/* PHASE 2: THE TEARDOWN */}
        <div ref={phase2Ref} className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none px-2 md:px-12 lg:px-24 opacity-0">
          <div className="absolute top-[6%] md:top-[14%] flex flex-col items-center w-full px-4">
            <h2 ref={phase2TitleRef}
              className="animate-core-breathe text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[3.5rem] text-white font-extrabold italic uppercase tracking-tight flex flex-wrap justify-center gap-x-2 md:gap-x-5 gap-y-1 leading-none text-center"
              style={{ textShadow: `0 0 5px rgba(255, 255, 255, 0.9), 0 0 15px rgba(34, 211, 238, 0.8), 0 0 30px rgba(34, 211, 238, 0.4), 1px 1px 0 #06b6d4, 2px 2px 0 #0891b2, 3px 3px 0 #164e63, 4px 4px 0 #083344, 5px 5px 0 #042f2e, 8px 8px 15px rgba(0, 0, 0, 1), 0 15px 40px rgba(0, 0, 0, 0.9), 0 0 60px rgba(0, 0, 0, 0.7)` }}>
              <span>Two hemispheres.</span>
              <span>One Core.</span>
              <span className="whitespace-nowrap">Zero chill.</span>
            </h2>
          </div>

          <style>{`
            @keyframes circuit-pulse {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 1; filter: brightness(1.5); }
            }
            .animate-circuit { animation: circuit-pulse 2s ease-in-out infinite; }
          `}</style>

          <div className="absolute left-[2%] md:left-[5%] lg:left-[14%] xl:left-[16%] top-[47%] lg:top-[50%] -translate-y-1/2 w-[42%] sm:w-[35%] lg:max-w-[300px] flex flex-col justify-center border-l-[2px] lg:border-l-[3px] border-cyan-400/50 pl-2 md:pl-3 lg:pl-5 text-left">
            <div className="absolute top-0 -left-[1px] lg:-left-[2px] w-2 lg:w-4 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-circuit"></div>
            <div className="absolute bottom-0 -left-[1px] lg:-left-[2px] w-2 lg:w-4 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-circuit" style={{ animationDelay: '1s' }}></div>
            <p className="text-zinc-100 text-[9px] sm:text-[10px] md:text-xs lg:text-base xl:text-lg leading-[1.4] lg:leading-snug font-sans font-medium tracking-tight lg:tracking-normal"
              style={{ textShadow: '0 2px 5px rgba(0,0,0,1), 0 0 15px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.9)' }}>
              {renderTerminalText("Your controller is the command device. Every run is an Operation inside a corrupted neon hex grid.", "term-word-cyan")}
            </p>
          </div>

          <div className="absolute right-[2%] md:right-[5%] lg:right-[14%] xl:right-[16%] top-[47%] lg:top-[50%] -translate-y-1/2 w-[42%] sm:w-[35%] lg:max-w-[300px] flex flex-col justify-center border-r-[2px] lg:border-r-[3px] border-fuchsia-500/50 pr-2 md:pr-3 lg:pr-5 text-right">
            <div className="absolute top-0 -right-[1px] lg:-right-[2px] w-2 lg:w-4 h-[2px] bg-fuchsia-500 shadow-[0_0_8px_#d946ef] animate-circuit"></div>
            <div className="absolute bottom-0 -right-[1px] lg:-right-[2px] w-2 lg:w-4 h-[2px] bg-fuchsia-500 shadow-[0_0_8px_#d946ef] animate-circuit" style={{ animationDelay: '1s' }}></div>
            <p className="text-zinc-100 text-[9px] sm:text-[10px] md:text-xs lg:text-base xl:text-lg leading-[1.4] lg:leading-snug font-sans font-medium tracking-tight lg:tracking-normal"
              style={{ textShadow: '0 2px 5px rgba(0,0,0,1), 0 0 15px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1)' }}>
              {renderTerminalText("Your job is simple: command the board, route clean energy, purge virus tiles, and restore the Diamond Core before instability takes over.", "term-word-magenta")}
            </p>
          </div>
        </div>

        {/* PHASE 4 (Empty) */}
        <div ref={phase4Ref} className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none px-4 opacity-0"></div>

        {/* PHASE 5: THE FINAL HOOK & CTA */}
        <div ref={phase5Ref} className="fixed inset-0 w-full h-[100dvh] pointer-events-none z-20 opacity-0 flex flex-col items-center justify-between py-2 sm:py-3 lg:py-16">
          <div className="w-full text-center px-4 mt-6 sm:mt-8 lg:mt-0">
            <h2 className={`text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-zinc-100 tracking-[0.15em] uppercase animate-dual-core ${rajdhani.className}`}>
              THE GRID IS OPEN
            </h2>
          </div>
          <div className="w-full flex flex-col items-center pb-1 lg:pb-0">
            <button 
              onClick={() => {
                setCtaStatus('denied');
                setTimeout(() => setCtaStatus('idle'), 2500);
              }}
              className={`btn-shimmer pointer-events-auto mb-1.5 sm:mb-2 lg:mb-6 px-4 py-1.5 sm:px-5 sm:py-2 lg:px-8 lg:py-3.5 border bg-black/40 backdrop-blur-md font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-base tracking-[0.2em] uppercase transition-all duration-300 ${
                ctaStatus === 'denied' 
                  ? 'border-red-500/80 text-red-500 shadow-[0_0_25px_rgba(239,68,68,0.8)]'
                  : 'border-cyan-400/80 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]'
              } ${rajdhani.className}`}
              style={{ textShadow: ctaStatus === 'denied' ? '0 0 10px rgba(239,68,68,0.8)' : '' }}
            >
              {ctaStatus === 'denied' ? '[ COMING SOON ]' : 'Secure Early Access'}
            </button>
            <div className="pointer-events-auto scale-[0.55] sm:scale-75 lg:scale-100 origin-bottom">
              <SocialIcons />
            </div>
          </div>
        </div>

      </div>
    </main>
    </>
  );
}