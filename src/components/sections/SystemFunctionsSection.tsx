"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Activity, Clock, Target, RefreshCw } from 'lucide-react';

const SystemFunctionsSection = () => {
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

  const functions = [
    { icon: Activity, title: 'Signal Processing', description: 'Raw input detection and latency optimization protocols.', id: 'MOD.INP.01', power: '100%' },
    { icon: Clock, title: 'Rhythm Calibration', description: 'Micro-timing synchronization and temporal variance mapping.', id: 'MOD.TIM.02', power: '100%' },
    { icon: Target, title: 'Consistency Measurement', description: 'Statistical evaluation of execution stability over sustained cycles.', id: 'MOD.CON.03', power: '100%' },
    { icon: RefreshCw, title: 'Feedback Loop', description: 'Real-time physiological adjustment suggestions based on output.', id: 'MOD.FDB.04', power: '100%' },
  ];

  return (
    <section id="functions" className="w-full max-w-6xl mx-auto py-16 md:py-24 px-4 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center w-full flex flex-col items-center mb-16"
      >
        <h2 className="font-montserrat text-2xl md:text-4xl font-black text-white uppercase tracking-widest break-words text-center drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          System Functions
        </h2>
        <div className="flex items-center gap-2 mt-3">
          <p className="font-mono text-cyan-500/80 text-[10px] md:text-xs tracking-[0.3em] uppercase">Core operational capabilities</p>
        </div>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {functions.map((func, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-black/60 border border-zinc-800/80 p-6 md:p-8 hover:border-cyan-400 hover:bg-cyan-950/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-500 flex flex-col sm:flex-row items-start gap-5 md:gap-6 overflow-hidden backdrop-blur-md cursor-default"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

            <div className="relative z-10 bg-black border border-zinc-700 p-4 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all shrink-0">
              <func.icon className="w-6 h-6 md:w-8 md:h-8 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
            </div>
            
            <div className="relative z-10 w-full flex flex-col h-full justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                  <h3 className="font-space-grotesk text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-wide uppercase">
                    {func.title}
                  </h3>
                  <span className="font-mono text-[10px] text-cyan-600/50 group-hover:text-cyan-400/80 transition-colors">
                    ID: {func.id}
                  </span>
                </div>
                <p className="font-space-grotesk text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors mb-4">
                  {func.description}
                </p>
              </div>
              
              <div className="flex items-center gap-3 mt-auto">
                <span className="font-mono text-[8px] text-zinc-600 tracking-widest uppercase">INT</span>
                <div className="h-[2px] w-full bg-zinc-900 overflow-hidden">
                  <div 
                    className="h-full bg-zinc-600 group-hover:bg-cyan-400 transition-colors duration-500 relative"
                    style={{ width: func.power }}
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/50 blur-[2px] animate-pulse"></div>
                  </div>
                </div>
                <span className="font-mono text-[9px] text-zinc-500 group-hover:text-cyan-400 transition-colors">{func.power}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SystemFunctionsSection;