"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="w-full border-t border-zinc-800/50 pt-20 pb-8 px-4 relative z-10 bg-black/80">
      <motion.div
        {...motionProps}
        className="max-w-4xl mx-auto text-center flex flex-col items-center mb-16"
      >
        <h2 className="font-montserrat text-2xl md:text-3xl font-black text-white uppercase tracking-widest mb-10">
          System Initialization Complete
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-md">
          <button className="w-full sm:w-auto px-8 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-mono text-sm uppercase tracking-widest hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]">
            Begin Training
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-transparent border border-zinc-700 text-zinc-400 font-mono text-sm uppercase tracking-widest hover:border-zinc-500 hover:text-zinc-300 transition-all duration-300">
            Exit System
          </button>
        </div>
        
        <p className="font-space-grotesk text-zinc-600 text-xs md:text-sm tracking-widest uppercase mt-10">
          Calm. Controlled. No pressure.
        </p>
      </motion.div>

      <motion.div
        {...motionProps}
        className="max-w-6xl mx-auto text-center font-mono text-zinc-600 border-t border-zinc-900/80 pt-8"
      >
        <p className="text-[10px] uppercase tracking-widest">&copy; {new Date().getFullYear()} CTRLR.CLUB. All Rights Reserved.</p>
        <p className="text-[10px] mt-2 tracking-widest uppercase">System Version 2.5.1 // Status: NOMINAL</p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;