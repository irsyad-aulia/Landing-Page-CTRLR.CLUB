"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToAccess = () => {
    setIsModalOpen(false);
    const element = document.getElementById('access');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80; 
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const bootSequence: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)", scale: 0.98 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.2 }
    }
  };

  const childReveal: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center pb-20 text-center text-white overflow-hidden px-4 bg-transparent">
      
      {/* Global Scanline Pass */}
      <motion.div
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/20 to-cyan-500/10 blur-[2px] pointer-events-none z-50"
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 3 }}
      />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute top-6 left-6 z-20 hidden md:block font-mono text-[10px] text-cyan-500/60 tracking-[0.3em] uppercase">
        [SYS.INIT] // v2.5.1
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="absolute top-6 right-6 z-20 hidden md:block font-mono text-[10px] text-fuchsia-500/60 tracking-[0.3em] uppercase">
        ID: 0x88F9A
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }} className="absolute bottom-6 left-6 z-20 hidden md:block font-mono text-[10px] text-zinc-500 tracking-[0.2em] uppercase flex items-center">
        <span className="inline-block w-1.5 h-1.5 bg-fuchsia-500 animate-pulse mr-2 shadow-[0_0_8px_rgba(217,70,239,0.8)]"></span>
        System Active
      </motion.div>

      <motion.div 
        variants={bootSequence}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        className="relative z-10 flex flex-col items-center w-full max-w-6xl mt-16"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-[800px] opacity-[0.05] pointer-events-none mix-blend-screen flex justify-center items-center z-0">
          <img src="/assets/logo.png" alt="" className="w-full h-auto object-contain blur-[1px]" />
        </div>

        <motion.div
          variants={childReveal}
          className="mb-8 flex items-center gap-3 px-5 py-2 border border-cyan-500/30 bg-black/60 backdrop-blur-md relative z-10"
        >
          <div className="absolute -top-[1px] -left-[1px] w-2 h-[1px] bg-cyan-400"></div>
          <div className="absolute -top-[1px] -left-[1px] w-[1px] h-2 bg-cyan-400"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-2 h-[1px] bg-fuchsia-500"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-[1px] h-2 bg-fuchsia-500"></div>
          
          <div className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)] animate-pulse" />
          <motion.span 
            animate={{ opacity: [1, 0.7, 1, 0.4, 1, 1, 1] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.05, 0.1, 0.15, 0.2, 0.5, 1] }}
            className="font-mono text-[10px] md:text-xs text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 font-bold tracking-[0.2em] uppercase"
          >
            ONLINE • LOW LATENCY • LIVE BUILD
          </motion.span>
        </motion.div>

        <motion.h1
          variants={childReveal}
          className="relative z-10 font-montserrat text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-extrabold uppercase tracking-tight leading-[0.85] sm:leading-none px-2 text-white"
          style={{
            textShadow: `
              0px -3px 20px rgba(34,211,238,0.5), 
              0px 4px 20px rgba(217,70,239,0.5), 
              0px 10px 40px rgba(0,0,0,0.9)
            `
          }}
        >
          <span className="block sm:inline">
            <span className="pr-1 sm:pr-0">C</span>TRLR
          </span>
          <span className="block sm:inline sm:mt-0">CLUB</span>
        </motion.h1>

        <motion.div
          variants={childReveal}
          className="mt-8 border-l-2 border-fuchsia-500 pl-5 text-left w-full md:w-max max-w-none relative z-10"
        >
          <p className="font-mono text-sm sm:text-base md:text-lg text-zinc-300 uppercase tracking-[0.1em] drop-shadow-lg md:whitespace-nowrap">
            Performance architecture for elite controller execution.
          </p>
        </motion.div>
        
        <motion.div
          variants={childReveal}
          className="mt-14 flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-6 sm:px-0 relative z-10"
        >
          {/* Primary CTA (Cyan) */}
          <button 
            onClick={scrollToAccess}
            className="group relative w-full sm:w-auto font-mono uppercase text-xs sm:text-sm font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-400 px-10 py-4 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] active:scale-95 flex items-center justify-center text-center overflow-hidden tracking-[0.2em]"
          >
            <motion.div 
              className="absolute top-0 bottom-0 w-12 bg-white/30 skew-x-12 blur-[4px]"
              animate={{ left: ['-50%', '150%'] }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
            />
            <span className="absolute w-2 h-2 bg-cyan-400 top-0 left-0 group-hover:bg-black transition-colors z-10"></span>
            <span className="absolute w-2 h-2 bg-cyan-400 bottom-0 right-0 group-hover:bg-black transition-colors z-10"></span>
            <span className="relative z-10">ENGAGE TRAINING</span>
          </button>
          
          {/* Secondary CTA (Fuchsia Hover) */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative w-full sm:w-auto font-mono uppercase text-xs sm:text-sm font-bold border border-zinc-600 text-zinc-300 px-10 py-4 hover:border-fuchsia-500 hover:text-fuchsia-400 bg-black/50 backdrop-blur-sm transition-all duration-300 active:scale-95 flex items-center justify-center text-center tracking-[0.2em] shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]"
          >
            <span className="absolute w-1.5 h-1.5 bg-zinc-600 top-0 left-0 group-hover:bg-fuchsia-500 transition-colors"></span>
            <span className="absolute w-1.5 h-1.5 bg-zinc-600 bottom-0 right-0 group-hover:bg-fuchsia-500 transition-colors"></span>
            <span className="absolute inset-0 border border-fuchsia-500/0 group-hover:border-fuchsia-500/50 group-hover:animate-pulse pointer-events-none transition-all duration-300"></span>
            ACCESS PROTOCOL
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-8 z-10"
      >
        <ChevronDown className="w-8 h-8 text-fuchsia-500/50 drop-shadow-[0_0_8px_rgba(217,70,239,0.5)] cursor-pointer hover:text-cyan-400 transition-colors" onClick={scrollToAccess} />
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer" 
              onClick={() => setIsModalOpen(false)}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(217,70,239,0.03)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none" />

            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative w-full max-w-2xl bg-zinc-950 border-t border-t-cyan-500 border-b border-b-fuchsia-500 border-l border-r border-l-zinc-800 border-r-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col z-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-fuchsia-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-fuchsia-500"></div>

              <div className="flex justify-between items-center border-b border-zinc-800/80 bg-black px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-fuchsia-500 animate-pulse" />
                  <h3 className="font-mono text-xs md:text-sm text-cyan-400 tracking-[0.2em] font-bold uppercase">
                    CTRLRCLUB // ACCESS PROTOCOL v2.5
                  </h3>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-zinc-500 hover:text-fuchsia-400 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-8 bg-gradient-to-br from-zinc-950 to-black relative">
                <div className="relative z-10 space-y-6">
                  <div>
                    <h4 className="font-mono text-[10px] text-fuchsia-400 tracking-widest uppercase mb-2">WHAT THIS IS</h4>
                    <p className="font-space-grotesk text-sm md:text-base text-zinc-300">CTRLRCLUB is performance architecture for elite controller execution.</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-fuchsia-400 tracking-widest uppercase mb-2">WHO IT'S FOR</h4>
                    <p className="font-space-grotesk text-sm md:text-base text-zinc-300">Competitive players seeking measurable improvement.</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-fuchsia-400 tracking-widest uppercase mb-2">WHAT IT MEASURES</h4>
                    <p className="font-space-grotesk text-sm md:text-base text-zinc-300 font-mono tracking-tight text-cyan-100">Reaction stability, timing precision, consistency, R-Index.</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-fuchsia-400 tracking-widest uppercase mb-2">HOW IT WORKS</h4>
                    <p className="font-space-grotesk text-sm md:text-base text-zinc-400 flex flex-wrap items-center gap-2 font-medium">
                      <span className="text-cyan-500">Deploy drill</span> 
                      <span className="text-zinc-600">→</span> 
                      <span className="text-cyan-500">Generate data</span> 
                      <span className="text-zinc-600">→</span> 
                      <span className="text-fuchsia-500">Update R-Index</span> 
                      <span className="text-zinc-600">→</span> 
                      <span className="text-white">Refine execution</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-800/80 bg-black px-6 py-5 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-fuchsia-400 transition-colors"
                >
                  CLOSE PROTOCOL
                </button>
                <button 
                  onClick={scrollToAccess}
                  className="w-full sm:w-auto font-mono uppercase text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 px-8 py-3 hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] tracking-[0.2em]"
                >
                  ENTER TRAINING MODE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;