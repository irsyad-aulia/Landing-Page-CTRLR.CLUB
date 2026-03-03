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
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-left w-full mb-20 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end border-l-2 border-cyan-500 pl-6"
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]"></div>
            <p className="font-mono text-cyan-500 text-[10px] md:text-xs tracking-[0.3em] uppercase">System Context</p>
          </div>
          <h2 className="font-montserrat text-3xl md:text-5xl font-black text-white uppercase tracking-tighter break-words drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
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
            className="group relative bg-zinc-950 border border-zinc-800 p-8 md:p-10 hover:border-cyan-400 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[220px]"
          >
            
            <div className="absolute top-0 left-0 w-3 h-[1px] bg-cyan-500/0 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            <div className="absolute top-0 left-0 w-[1px] h-3 bg-cyan-500/0 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            
            <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-cyan-500/0 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-cyan-500/0 group-hover:bg-cyan-400 transition-colors duration-300"></div>

            <div className="flex items-start justify-between mb-8 relative z-10">
              <h3 className="font-mono text-cyan-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                {stmt.label}
              </h3>
              <span className="font-mono text-[10px] text-zinc-600 tracking-wider group-hover:text-cyan-500/50 transition-colors">
                [SYS.LOG]
              </span>
            </div>

            <div className="relative z-10 flex-grow flex flex-col justify-end">
              <p className="font-space-grotesk text-sm md:text-base text-zinc-300 group-hover:text-white transition-colors duration-300 leading-relaxed uppercase tracking-wider font-medium">
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