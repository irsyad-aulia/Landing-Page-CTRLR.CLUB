"use client";

import React from 'react';
import { motion } from 'framer-motion';

const RIndexSection = () => {
  const motionProps: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="r-index" className="w-full mx-auto py-24 md:py-32 px-4 relative z-10 overflow-hidden bg-black">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[url('/assets/tactical-hands.png')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-screen" />
         <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div {...motionProps} className="flex flex-col items-start w-full mb-16 border-l-2 border-cyan-500 pl-6 relative">
          <div className="absolute top-0 -left-[2px] w-[2px] h-4 bg-white"></div>
          <div className="absolute bottom-0 -left-[2px] w-[2px] h-4 bg-white"></div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]"></div>
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-cyan-500 uppercase font-bold">
              Identity Protocol
            </span>
          </div>
          <h2 className="font-montserrat text-3xl md:text-5xl font-black text-white uppercase tracking-tighter break-words drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4">
            R-INDEX
          </h2>
          <p className="font-mono text-xs md:text-sm text-zinc-400 tracking-[0.1em] uppercase">
            Your execution produces a measurable signature.
          </p>
        </motion.div>

        <motion.div 
          {...motionProps} 
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative w-full"
        >
          <div className="relative bg-zinc-950 border border-zinc-800 p-2 backdrop-blur-md overflow-hidden group">
            
            <div className="absolute top-0 left-0 w-4 h-[1px] bg-cyan-500"></div>
            <div className="absolute top-0 left-0 w-[1px] h-4 bg-cyan-500"></div>
            <div className="absolute top-0 right-0 w-4 h-[1px] bg-cyan-500"></div>
            <div className="absolute top-0 right-0 w-[1px] h-4 bg-cyan-500"></div>
            <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-cyan-500"></div>
            <div className="absolute bottom-0 left-0 w-[1px] h-4 bg-cyan-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-cyan-500"></div>
            <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-cyan-500"></div>

            <div className="relative overflow-hidden border border-zinc-900 bg-black">
              <img 
                src="/assets/tactical-hands.png" 
                alt="CTRLRCLUB R-Index Dashboard" 
                className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700 ease-out filter brightness-90 contrast-125"
              />
              
              <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/90 border border-zinc-800 px-4 py-2">
                <div className="flex gap-1 items-end h-3">
                  <div className="w-1 h-1 bg-cyan-500"></div>
                  <div className="w-1 h-2 bg-cyan-500"></div>
                  <div className="w-1 h-3 bg-cyan-500"></div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-bold">Rising Signal = Adaptive Response</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RIndexSection;