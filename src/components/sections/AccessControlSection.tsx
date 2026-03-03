"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const AccessControlSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      }
    }
  };

  return (
    <section id="access" className="w-full max-w-6xl mx-auto py-24 md:py-32 px-4 relative z-10 bg-black">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left w-full mb-16 md:mb-20 border-l-0 md:border-l-2 border-zinc-700 pl-0 md:pl-6 flex flex-col items-center md:items-start"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 bg-zinc-600"></div>
          <p className="font-mono text-zinc-500 text-[10px] md:text-xs tracking-[0.3em] uppercase">Security Protocol</p>
        </div>
        <h2 className="font-montserrat text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
          ACCESS LEVELS
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto relative"
      >
        
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-full bg-zinc-900 z-20"></div>

        <motion.div 
          variants={itemVariants}
          className="relative bg-zinc-950/50 border border-zinc-900 p-8 md:p-12 flex flex-col group overflow-hidden opacity-50 hover:opacity-100 transition-opacity duration-500"
        >
          <div className="absolute top-0 left-0 w-3 h-[1px] bg-zinc-700 transition-colors duration-300"></div>
          <div className="absolute top-0 left-0 w-[1px] h-3 bg-zinc-700 transition-colors duration-300"></div>

          <h3 className="text-xl md:text-2xl font-black text-zinc-500 mb-8 uppercase tracking-widest font-montserrat">
            LIMITED MODE
          </h3>
          
          <ul className="text-zinc-600 space-y-4 font-mono text-sm flex-grow relative z-10 uppercase tracking-wider">
            <li className="flex items-start">
              <span className="text-zinc-700 mr-4 font-bold">/</span>
              <span>Evaluation only.</span>
            </li>
            <li className="flex items-start">
              <span className="text-zinc-700 mr-4 font-bold">/</span>
              <span>No retention.</span>
            </li>
            <li className="flex items-start">
              <span className="text-zinc-700 mr-4 font-bold">/</span>
              <span>No persistent data.</span>
            </li>
          </ul>

          <div className="mt-12 pt-6 border-t border-zinc-900 relative z-10">
            <span className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-2 h-2 bg-zinc-700"></span>
              STATUS: RESTRICTED
            </span>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="relative bg-black border border-cyan-500/30 p-8 md:p-12 flex flex-col group overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.05)] hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500 z-10"
        >
          <div className="absolute top-0 right-0 w-4 h-[2px] bg-cyan-500 group-hover:bg-cyan-400 transition-colors"></div>
          <div className="absolute top-0 right-0 w-[2px] h-4 bg-cyan-500 group-hover:bg-cyan-400 transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-4 h-[2px] bg-cyan-500 group-hover:bg-cyan-400 transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-[2px] h-4 bg-cyan-500 group-hover:bg-cyan-400 transition-colors"></div>
          <div className="absolute bottom-0 left-0 w-4 h-[2px] bg-cyan-500 group-hover:bg-cyan-400 transition-colors"></div>
          <div className="absolute bottom-0 left-0 w-[2px] h-4 bg-cyan-500 group-hover:bg-cyan-400 transition-colors"></div>

          <h3 className="text-xl md:text-2xl font-black text-white mb-8 uppercase tracking-widest font-montserrat drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            TRAINING MODE
          </h3>
          
          <ul className="text-zinc-300 space-y-4 font-mono text-sm flex-grow relative z-10 uppercase tracking-wider">
            <li className="flex items-start group-hover:text-white transition-colors">
              <span className="text-cyan-500 mr-4 font-bold">/</span>
              <span>Full execution.</span>
            </li>
            <li className="flex items-start group-hover:text-white transition-colors">
              <span className="text-cyan-500 mr-4 font-bold">/</span>
              <span>Persistent R-Index.</span>
            </li>
            <li className="flex items-start group-hover:text-white transition-colors">
              <span className="text-cyan-500 mr-4 font-bold">/</span>
              <span>Milestone progression.</span>
            </li>
          </ul>

          <div className="mt-12 pt-6 border-t border-cyan-900/50 relative z-10">
            <span className="text-[10px] md:text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] flex items-center gap-3 font-bold">
              <span className="w-2 h-2 bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              STATUS: READY
            </span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default AccessControlSection;