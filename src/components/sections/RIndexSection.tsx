"use client";

import React from 'react';
import { motion } from 'framer-motion';

const RIndexSection = () => {
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  return (
    <section id="r-index" className="w-full bg-zinc-900/50 border-y border-zinc-800 py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div {...motionProps} className="md:w-1/2 text-center md:text-left">
          <h2 className="font-montserrat text-4xl font-black text-white uppercase">Resilience Index</h2>
          <p className="font-space-grotesk text-zinc-400 mt-4 max-w-lg">
            The R-Index measures the system's ability to withstand and recover from anomalous events. A higher index indicates greater stability and fault tolerance.
          </p>
          <button className="mt-6 font-space-grotesk uppercase text-sm font-bold border border-zinc-800 text-zinc-300 px-6 py-3 rounded-md hover:border-zinc-600 hover:text-white transition-all">
            Run Simulation
          </button>
        </motion.div>
        <motion.div {...motionProps} transition={{ delay: 0.2 }} className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-700 animate-spin-slow"></div>
          <div className="absolute inset-4 rounded-full bg-cyan-500/10"></div>
          <div className="relative z-10 text-center">
            <span className="font-mono text-7xl md:text-8xl font-bold text-cyan-400">98.6</span>
            <p className="font-space-grotesk text-zinc-400 uppercase tracking-widest">Optimal</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RIndexSection;
