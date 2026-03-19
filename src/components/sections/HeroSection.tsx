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
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
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
    <section id="hero" className="relative min-h-[80dvh] md:min-h-[100dvh] w-full flex flex-col justify-start md:justify-center items-center text-center text-white overflow-x-hidden bg-transparent pt-12 pb-24 md:py-0 px-2 sm:px-4">
      
      {/* BUNGKUSAN PENGAMAN LASER */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-50">
        <motion.div
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/20 to-cyan-500/10 blur-[2px]"
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 3 }}
        />
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute top-6 left-4 md:left-6 z-20 hidden md:block font-mono text-xs text-cyan-500/60 tracking-[0.3em] uppercase">
        [SYS.INIT] // v2.5.1
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="absolute top-6 right-4 md:right-6 z-20 hidden md:block font-mono text-xs text-fuchsia-500/60 tracking-[0.3em] uppercase">
        ID: 0x88F9A
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }} className="absolute bottom-6 left-4 md:left-6 z-20 hidden md:block font-mono text-xs text-zinc-500 tracking-[0.2em] uppercase flex items-center">
        <span className="inline-block w-2 h-2 bg-fuchsia-500 animate-pulse mr-2 shadow-[0_0_8px_rgba(217,70,239,0.8)]"></span>
        System Active
      </motion.div>

      <motion.div 
        variants={bootSequence}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        className="relative z-10 flex flex-col items-center w-full max-w-6xl"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-[800px] opacity-[0.05] pointer-events-none mix-blend-screen flex justify-center items-center z-0">
          <img src="/assets/logo.png" alt="" className="w-full h-auto object-contain blur-[1px]" />
        </div>

        <motion.div
          variants={childReveal}
          className="mb-4 sm:mb-8 flex items-center justify-center gap-1.5 sm:gap-3 px-3 sm:px-6 py-2 border border-cyan-500/30 bg-black/60 backdrop-blur-md relative z-10 w-auto max-w-[90vw] mx-auto text-center"
        >
          <div className="absolute -top-[1px] -left-[1px] w-2 h-[1px] bg-cyan-400"></div>
          <div className="absolute -top-[1px] -left-[1px] w-[1px] h-2 bg-cyan-400"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-2 h-[1px] bg-fuchsia-500"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-[1px] h-2 bg-fuchsia-500"></div>
          
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 shrink-0 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)] animate-pulse hidden min-[375px]:block" />
          <motion.span 
            animate={{ opacity: [1, 0.7, 1, 0.4, 1, 1, 1] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.05, 0.1, 0.15, 0.2, 0.5, 1] }}
            className="font-mono text-[9px] sm:text-xs md:text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 font-bold tracking-widest sm:tracking-[0.2em] uppercase leading-tight whitespace-normal"
          >
            ONLINE • LOW LATENCY • LIVE BUILD
          </motion.span>
        </motion.div>

        {/* JUDUL UTAMA */}
        <motion.h1
          variants={childReveal}
          className="relative z-10 font-montserrat text-[18vw] min-[400px]:text-[20vw] sm:text-[8vw] md:text-[9vw] lg:text-[11rem] font-black uppercase tracking-tighter leading-[0.85] text-white w-full text-center px-0 transform sm:transform-none sm:whitespace-nowrap"
          style={{
            textShadow: `
              0px -3px 20px rgba(34,211,238,0.5), 
              0px 4px 20px rgba(217,70,239,0.5), 
              0px 10px 40px rgba(0,0,0,0.9)
            `
          }}
        >
          <span className="block sm:inline">CTRLR</span>
          <span className="hidden sm:inline"> </span>
          <span className="block sm:inline">CLUB</span>
        </motion.h1>

{/* NEW & IMPROVED V5.0: MICRO-POSITIONING (GAME. LEVEL. BOSS.) */}
        <motion.div
          variants={childReveal}
          // Perhatikan penambahan mt-8 dan translate-x-3 di bawah ini
          className="relative z-10 font-mono text-base min-[400px]:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white opacity-100 tracking-wider uppercase w-full text-center mt-8 mb-12 translate-x-3"
          style={{
            textShadow: '0px 2px 10px rgba(255,255,255,0.3)'
          }}
        >
          Game. Level. Boss.
        </motion.div>

        <motion.div
          variants={childReveal}
          className="mt-6 sm:mt-10 border-l-[3px] border-fuchsia-500 pl-4 sm:pl-6 text-left w-[calc(100%-2rem)] mx-4 md:w-max max-w-none sm:mx-0 relative z-10 bg-transparent"
        >
          <p className="font-mono text-xs sm:text-base md:text-xl text-zinc-400 sm:text-zinc-300 uppercase tracking-[0.15em] drop-shadow-none sm:drop-shadow-lg pr-1 sm:pr-0 leading-relaxed">
            Performance architecture for elite controller execution.
          </p>
        </motion.div>
        
        {/* AREA KONTROL: DUA TOMBOL STATIS */}
        <motion.div
          variants={childReveal}
          className="mt-12 sm:mt-16 min-h-[120px] flex flex-col items-center justify-start w-full px-4 sm:px-0 relative z-10"
        >
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 w-full justify-center">
            <button
              onClick={scrollToAccess}
              className="relative group font-mono uppercase text-sm sm:text-base font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-400 px-10 py-5 hover:bg-cyan-400 active:bg-cyan-400 hover:text-black active:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] tracking-[0.2em] overflow-hidden w-full sm:w-auto"
            >
              <motion.div
                className="absolute top-0 bottom-0 w-12 bg-white/30 skew-x-12 blur-[4px]"
                animate={{ left: ['-50%', '150%'] }}
                transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 }}
              />
              <span className="relative z-10">ENGAGE TRAINING</span>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="relative font-mono uppercase text-sm sm:text-base font-bold bg-zinc-950/50 text-zinc-400 border border-zinc-700 px-10 py-5 hover:bg-zinc-800 hover:text-white active:text-white transition-all duration-300 tracking-[0.2em] w-full sm:w-auto"
            >
              INITIALIZE TRAINING
            </button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-6 sm:bottom-8 z-30"
      >
        <ChevronDown className="w-10 h-10 text-fuchsia-500/50 drop-shadow-[0_0_8px_rgba(217,70,239,0.5)] cursor-pointer hover:text-cyan-400 transition-colors" onClick={scrollToAccess} />
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

              <div className="flex justify-between items-center border-b border-zinc-800/80 bg-black px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-fuchsia-500 animate-pulse" />
                  <h3 className="font-mono text-sm md:text-base text-cyan-400 tracking-[0.2em] font-bold uppercase">
                    CTRLRCLUB // TRAINING INITIALIZATION v2.5
                  </h3>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-zinc-500 hover:text-fuchsia-400 active:text-fuchsia-400 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-8 bg-gradient-to-br from-zinc-950 to-black relative">
                <div className="relative z-10 space-y-6">
                  <div>
                    <h4 className="font-mono text-xs text-fuchsia-400 tracking-widest uppercase mb-2">WHAT THIS IS</h4>
                    <p className="font-space-grotesk text-base md:text-lg text-zinc-300">CTRLRCLUB is performance architecture for elite controller execution.</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-fuchsia-400 tracking-widest uppercase mb-2">WHO IT'S FOR</h4>
                    <p className="font-space-grotesk text-base md:text-lg text-zinc-300">Competitive players seeking measurable improvement.</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-fuchsia-400 tracking-widest uppercase mb-2">WHAT IT MEASURES</h4>
                    <p className="font-space-grotesk text-base md:text-lg text-zinc-300 font-mono tracking-tight text-cyan-100">Reaction stability, timing precision, consistency, R-Index.</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-fuchsia-400 tracking-widest uppercase mb-2">HOW IT WORKS</h4>
                    <p className="font-space-grotesk text-base md:text-lg text-zinc-400 flex flex-wrap items-center gap-2 font-medium">
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
                  className="w-full sm:w-auto font-mono text-sm uppercase tracking-[0.2em] text-zinc-500 hover:text-fuchsia-400 active:text-fuchsia-400 transition-colors"
                >
                  CLOSE INITIALIZATION
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