"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const DiagnosticsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 14,
      }
    }
  };

  const statements = [
    { label: 'OBSERVATION_01', text: 'Unstructured reflex collapses under pressure.' },
    { label: 'OBSERVATION_02', text: 'Guessing creates motion. Measurement creates control.' },
    { label: 'OBSERVATION_03', text: 'Discipline is built through closed feedback loops.' },
  ];

  return (
    <section id="diagnostics" className="w-full max-w-6xl mx-auto py-24 md:py-32 px-4 relative z-10 bg-black">
      
      {/* Background Telemetry Scanline */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-left w-full mb-20 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end border-l-2 border-cyan-500 pl-6 relative"
      >
        <div className="absolute top-0 -left-[2px] w-[2px] h-4 bg-cyan-400"></div>
        <div className="absolute bottom-0 -left-[2px] w-[2px] h-4 bg-fuchsia-500"></div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
            <p className="font-mono text-cyan-500 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">System Context</p>
          </div>
          <h2 className="font-montserrat text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 uppercase tracking-tighter break-words drop-shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            PERFORMANCE REALITY
          </h2>
        </div>
        
        <div className="mt-6 md:mt-0 max-w-sm">
          <p className="font-mono text-xs md:text-sm text-zinc-400 tracking-[0.1em] uppercase">
            Execution leaves a signature. Most players never measure it.
          </p>
        </div>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
      >
        {statements.map((stmt, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative p-[1px] group z-10"
          >
            {/* Animated Gradient Border Wrapper */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-900 group-hover:from-cyan-500/40 group-hover:via-zinc-800 group-hover:to-fuchsia-500/40 transition-all duration-700 opacity-80 group-hover:opacity-100 shadow-none group-hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"></div>

            <div className="relative bg-black h-full border border-zinc-900/50 p-8 md:p-10 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[220px]">
              
              {/* Inner Hover Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.05),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Neon Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-[2px] bg-zinc-800 group-hover:bg-cyan-400 transition-colors duration-500 z-20 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-[2px] h-4 bg-zinc-800 group-hover:bg-cyan-400 transition-colors duration-500 z-20 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-4 h-[2px] bg-zinc-800 group-hover:bg-fuchsia-500 transition-colors duration-500 z-20 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-4 bg-zinc-800 group-hover:bg-fuchsia-500 transition-colors duration-500 z-20 pointer-events-none"></div>

              <div className="flex items-start justify-between mb-8 relative z-10 border-b border-zinc-900 group-hover:border-cyan-900/50 transition-colors duration-500 pb-4">
                <h3 className="font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors duration-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                  {stmt.label}
                </h3>
                <span className="font-mono text-[10px] text-zinc-700 tracking-wider group-hover:text-fuchsia-400 transition-colors duration-500 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-transparent group-hover:bg-fuchsia-500 rounded-full transition-colors duration-500 shadow-none group-hover:shadow-[0_0_5px_rgba(217,70,239,0.8)]"></div>
                  [SYS.LOG]
                </span>
              </div>

              <div className="relative z-10 flex-grow flex flex-col justify-end">
                <p className="font-space-grotesk text-sm md:text-base text-zinc-400 group-hover:text-white transition-colors duration-500 leading-relaxed uppercase tracking-wider font-medium group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  {stmt.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DiagnosticsSection;