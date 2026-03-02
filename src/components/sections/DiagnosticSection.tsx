"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { AlertCircle, Crosshair, RefreshCcw } from 'lucide-react';

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
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 14,
      }
    }
  };

  const statements = [
    { icon: AlertCircle, label: 'OBSERVATION 01', text: 'Reflex performance degrades without structure.', hex: '0x00A1' },
    { icon: Crosshair, label: 'OBSERVATION 02', text: 'Guessing produces motion, not measurement.', hex: '0x00B2' },
    { icon: RefreshCcw, label: 'OBSERVATION 03', text: 'Discipline requires closed feedback loops.', hex: '0x00C3' },
  ];

  return (
    <section id="diagnostics" className="w-full max-w-5xl mx-auto py-16 md:py-24 px-4 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center w-full flex flex-col items-center mb-16"
      >
        <h2 className="font-montserrat text-2xl md:text-4xl font-black text-white uppercase tracking-widest break-words drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          Diagnostic Context
        </h2>
        <div className="flex items-center gap-2 mt-3">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          <p className="font-mono text-cyan-400/80 text-[10px] md:text-xs tracking-[0.3em] uppercase">System Initialization Analysis</p>
        </div>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative"
      >
        <div className="absolute inset-0 bg-cyan-900/10 blur-[100px] pointer-events-none rounded-full"></div>

        {statements.map((stmt, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-black/40 border border-cyan-900/40 p-6 md:p-8 backdrop-blur-xl hover:border-cyan-400 hover:bg-cyan-950/30 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.8)] flex flex-col justify-between min-h-[200px]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(34,211,238,0.05)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50 group-hover:border-cyan-300 transition-all pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50 group-hover:border-cyan-300 transition-all pointer-events-none"></div>

            <div className="flex items-start justify-between mb-6 relative z-10">
              <div className="p-3 bg-black border border-zinc-800 group-hover:border-cyan-400 transition-all duration-300">
                <stmt.icon className="w-5 h-5 md:w-6 md:h-6 text-cyan-500 group-hover:text-cyan-300 transition-colors" />
              </div>
              <div className="flex flex-col items-end">
                <span className="font-mono text-[8px] text-zinc-500 tracking-wider">LOG:{stmt.hex}</span>
              </div>
            </div>

            <div className="relative z-10 flex-grow flex flex-col justify-end">
              <h3 className="font-mono text-cyan-500/60 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3">{stmt.label}</h3>
              <p className="font-space-grotesk text-sm md:text-base text-zinc-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                {stmt.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DiagnosticsSection;