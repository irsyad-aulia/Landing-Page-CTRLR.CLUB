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
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header Area with Neon Depth */}
        <motion.div {...motionProps} className="flex flex-col items-start w-full mb-10 md:mb-12 border-l-2 border-fuchsia-500 pl-4 md:pl-6 relative">
          <div className="absolute top-0 -left-[2px] w-[2px] h-4 bg-cyan-400"></div>
          <div className="absolute bottom-0 -left-[2px] w-[2px] h-4 bg-cyan-400"></div>

          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <div className="w-2 h-2 bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.8)] animate-pulse"></div>
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-fuchsia-400 uppercase font-bold">
              Identity Protocol
            </span>
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter break-words mb-2 md:mb-4"
              style={{ textShadow: '0px 0px 20px rgba(34,211,238,0.4), 0px 4px 15px rgba(217,70,239,0.3)' }}
          >
            R-INDEX
          </h2>
          <p className="font-mono text-[10px] sm:text-xs md:text-sm text-zinc-300 tracking-[0.1em] uppercase">
            Your execution produces a measurable signature.
          </p>
        </motion.div>

        {/* Video Player Container with Animated Spinning Laser Border */}
        <motion.div 
          {...motionProps} 
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative w-full"
        >
          {/* Animated Gradient Border Wrapper */}
          <div className="relative p-[2px] shadow-[0_0_40px_rgba(34,211,238,0.15)] group overflow-hidden">
            
            {/* 1. Mesin Pemutar Gradien */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] aspect-square opacity-100 z-0 pointer-events-none"
              style={{
                background: "conic-gradient(from 0deg, #22d3ee, #d946ef, #ffffff, #22d3ee, #d946ef, #ffffff, #22d3ee)"
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
            
            {/* 2. Inner HUD Container */}
            <div className="relative bg-black overflow-hidden h-full w-full border border-zinc-900/80 z-10">
              
              {/* Corner HUD Accents (Disesuaikan untuk Mobile) */}
              <div className="absolute top-0 left-0 w-4 md:w-8 h-[2px] bg-cyan-400 z-20"></div>
              <div className="absolute top-0 left-0 w-[2px] h-4 md:h-8 bg-cyan-400 z-20"></div>
              <div className="absolute bottom-0 right-0 w-4 md:w-8 h-[2px] bg-fuchsia-500 z-20"></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-4 md:h-8 bg-fuchsia-500 z-20"></div>

              {/* Autoplay Video Element */}
              <div className="relative w-full aspect-video bg-zinc-950 overflow-hidden">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02] transform ease-out"
                >
                  <source src="/assets/r-index.webm" type="video/webm" />
                  <img src="/assets/tactical-hands.png" alt="Fallback" className="w-full h-full object-cover" />
                </video>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* PERBAIKAN TOTAL: Posisi mepet sudut (bottom-1.5 left-1.5), padding super tipis (px-1 py-0.5), gap minimum (gap-1) */}
                <div className="absolute bottom-1.5 left-1.5 md:bottom-6 md:left-6 flex items-center gap-1 bg-black/40 md:bg-black/70 backdrop-blur-sm border border-fuchsia-500/20 px-1 py-0.5 z-20 max-w-[calc(100%-1rem)] md:max-w-none">
                  
                  {/* Grafik Bar Audio/Sync: Tinggi h-2 yang sangat kecil di mobile */}
                  <div className="flex gap-0.5 items-end h-2 md:h-3 shrink-0">
                    <div className="w-0.5 h-1 bg-cyan-400 animate-pulse"></div>
                    <div className="w-0.5 h-1.5 bg-cyan-400 animate-pulse" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-0.5 h-2 bg-fuchsia-500 animate-pulse" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  
                  {/* PERBAIKAN TEKS: Ukuran taktistext-[7px] di mobile, leading-none agar rapat vertikal jika melipat */}
                  <span className="font-mono text-[7px] md:text-xs uppercase tracking-tight md:tracking-[0.2em] text-white/90 font-bold whitespace-normal md:whitespace-nowrap leading-none">
                    <span className="text-cyan-400">SYNC:</span> ACTIVE <span className="text-fuchsia-500/50 mx-1">|</span> ADAPTIVE RESPONSE
                  </span>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default RIndexSection;