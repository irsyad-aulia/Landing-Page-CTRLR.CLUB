"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Crosshair, Activity, Lock } from 'lucide-react';

const RIndexSection = () => {
  const motionProps: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="r-index" className="w-full max-w-6xl mx-auto py-16 md:py-24 px-4 relative z-10 overflow-hidden">
      
      <motion.div {...motionProps} className="flex flex-col items-center w-full mb-10 md:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Scan className="w-6 h-6 text-fuchsia-500 animate-pulse" />
          <span className="font-space-grotesk text-xs md:text-sm tracking-[0.3em] text-fuchsia-400 uppercase font-bold">
            Measurement System
          </span>
        </div>
        <h2 className="font-montserrat text-3xl md:text-5xl font-black text-white text-center uppercase tracking-widest break-words w-full drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          Resilience Index
        </h2>
        <p className="font-space-grotesk text-zinc-400 mt-4 text-sm md:text-base text-center max-w-2xl leading-relaxed uppercase tracking-wider">
          Your execution produces a reflex signature.
        </p>
      </motion.div>

      <motion.div 
        {...motionProps} 
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative w-full max-w-5xl mx-auto"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-transparent to-fuchsia-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
        
        <div className="relative bg-zinc-950/80 border border-zinc-800 p-2 md:p-4 rounded-xl backdrop-blur-xl shadow-2xl overflow-hidden group">
          
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-xl pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-fuchsia-500/70 rounded-tr-xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/70 rounded-bl-xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-fuchsia-500/70 rounded-br-xl pointer-events-none"></div>
          
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(34,211,238,0.05)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none opacity-50 mix-blend-overlay z-20"></div>

          <div className="relative rounded-lg overflow-hidden border border-zinc-800/50 bg-black">
            
            <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
                <Lock className="w-12 h-12 text-zinc-500 mb-4" />
                <span className="font-mono text-sm tracking-widest text-zinc-300 uppercase border border-zinc-700 bg-black/60 px-6 py-2">
                    Historical Data Locked
                </span>
            </div>

            <img 
              src="/assets/r-index.jpg" 
              alt="CTRLR.CLUB Resilience Index Dashboard" 
              className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700 ease-out filter brightness-75 contrast-125"
            />
            
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-zinc-700 z-20">
              <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-300">Partial Visualization</span>
            </div>
          </div>
          
        </div>
      </motion.div>

      <motion.div 
        {...motionProps} 
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-6 mt-12"
      >
        <div className="flex items-center gap-2 opacity-50">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="font-space-grotesk text-xs uppercase tracking-widest text-zinc-500">Calm</span>
        </div>
        <div className="flex items-center gap-2 opacity-50">
          <Crosshair className="w-4 h-4 text-fuchsia-400" />
          <span className="font-space-grotesk text-xs uppercase tracking-widest text-zinc-500">Focus</span>
        </div>
        <div className="flex items-center gap-2 opacity-50">
          <Scan className="w-4 h-4 text-purple-400" />
          <span className="font-space-grotesk text-xs uppercase tracking-widest text-zinc-500">Overclock</span>
        </div>
      </motion.div>

    </section>
  );
};

export default RIndexSection;