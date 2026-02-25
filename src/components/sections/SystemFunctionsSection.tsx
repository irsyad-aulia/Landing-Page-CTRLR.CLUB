"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, Layers } from 'lucide-react';

const SystemFunctionsSection = () => {
  const motionProps: any = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  const functions = [
    { icon: Terminal, title: 'Command Terminal', description: 'Execute direct system commands and override protocols.', id: 'SYS.CMD.01', power: '100%' },
    { icon: Shield, title: 'Security Protocols', description: 'Manage firewall rules and intrusion detection systems.', id: 'SEC.PRO.02', power: '85%' },
    { icon: Zap, title: 'Power Distribution', description: 'Allocate energy resources across core modules.', id: 'PWR.DST.03', power: '92%' },
    { icon: Layers, title: 'Data Layering', description: 'Organize and encrypted hierarchical data structures.', id: 'DAT.LYR.04', power: '78%' },
  ];

  return (
    <section id="functions" className="w-full max-w-6xl mx-auto py-16 md:py-24 px-4 relative z-10">
      <motion.div {...motionProps} className="text-center w-full flex flex-col items-center">
        <h2 className="font-montserrat text-2xl md:text-4xl font-black text-white uppercase tracking-widest break-words text-center drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          System Functions
        </h2>
        <div className="flex items-center gap-2 mt-3 mb-16">
          <p className="font-mono text-zinc-500 text-[10px] md:text-xs tracking-[0.3em] uppercase">Core operational capabilities</p>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {functions.map((func, index) => (
          <motion.div
            key={index}
            {...motionProps}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            className="group relative bg-black/60 border border-zinc-800/80 p-6 md:p-8 hover:border-cyan-400 hover:bg-cyan-950/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-500 flex flex-col sm:flex-row items-start gap-5 md:gap-6 overflow-hidden backdrop-blur-md"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

            <div className="relative z-10 bg-black border border-zinc-700 p-4 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all shrink-0">
              <func.icon className="w-6 h-6 md:w-8 md:h-8 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
            </div>
            
            <div className="relative z-10 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                <h3 className="font-space-grotesk text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-wide">
                  {func.title}
                </h3>
                <span className="font-mono text-[10px] text-cyan-600/50 group-hover:text-cyan-400/80 transition-colors">
                  ID: {func.id}
                </span>
              </div>
              <p className="font-space-grotesk text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors mb-4">
                {func.description}
              </p>
              
              <div className="flex items-center gap-3">
                <span className="font-mono text-[8px] text-zinc-600 tracking-widest uppercase">PWR</span>
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
      </div>
    </section>
  );
};

export default SystemFunctionsSection;