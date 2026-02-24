"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, ShieldCheck } from 'lucide-react';

const DiagnosticSection = () => {
  const motionProps: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
  };

  const cards = [
    {
      icon: <Activity className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] group-hover:scale-110 transition-transform duration-300" />,
      title: 'Real-Time Monitoring',
      description: 'Continuous data stream analysis for immediate operational feedback and anomaly detection.'
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] group-hover:scale-110 transition-transform duration-300" />,
      title: 'Energy Fluctuation',
      description: 'Tracking power consumption and output to ensure peak efficiency and system stability.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] group-hover:scale-110 transition-transform duration-300" />,
      title: 'Security Integrity',
      description: '24/7 threat detection and system hardening protocols to protect against unauthorized access.'
    }
  ];

  return (
    <section id="diagnostics" className="w-full max-w-6xl mx-auto py-16 md:py-24 px-4 relative z-10 overflow-hidden">
      
      <motion.div {...motionProps} transition={{ duration: 0.7, ease: "easeOut" }} className="flex flex-col items-center w-full">
        <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-black text-white text-center uppercase tracking-wider break-words w-full px-2">System Diagnostics</h2>
        <p className="font-space-grotesk text-cyan-400/80 text-center mt-4 text-[10px] md:text-sm tracking-widest uppercase border border-cyan-500/20 bg-cyan-500/10 px-3 md:px-4 py-1.5 rounded-full break-words max-w-[95%] md:max-w-full">
          Core metrics and operational status
        </p>
      </motion.div>
      
      <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.15 * (index + 1), ease: "easeOut" }}
            
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            
            className="group relative w-full bg-zinc-950/60 border border-zinc-800 rounded-xl p-4 sm:p-5 md:p-8 backdrop-blur-md hover:border-cyan-500/50 hover:bg-cyan-950/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-colors duration-300 cursor-pointer overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex items-center gap-3 md:gap-4 w-full">
              <div className="p-2 md:p-3 bg-zinc-900/80 rounded-lg border border-zinc-800 group-hover:border-cyan-500/30 transition-colors duration-300 shrink-0">
                {card.icon}
              </div>
              <h3 className="font-space-grotesk text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 break-words flex-1 min-w-0">
                {card.title}
              </h3>
            </div>
            
            <p className="font-space-grotesk text-xs sm:text-sm md:text-base text-zinc-400 mt-3 md:mt-5 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 break-words flex-grow">
              {card.description}
            </p>
            
            <div className="mt-4 md:mt-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400 group-hover:animate-pulse transition-colors duration-300 shrink-0"></div>
              <span className="font-space-grotesk text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-600 group-hover:text-cyan-500/80 transition-colors duration-300 truncate">
                Module Active
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DiagnosticSection;