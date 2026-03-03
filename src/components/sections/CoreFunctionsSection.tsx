"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Activity, Clock, Target, RefreshCw } from 'lucide-react';

const CoreFunctionsSection = () => {
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

  const layers = [
    { 
      icon: Activity, 
      title: 'SIGNAL PROCESSING', 
      description: 'Raw input detection. Latency awareness. Precision conditioning.', 
      id: 'MOD_SIG_01',
      metric: '88.4%'
    },
    { 
      icon: Clock, 
      title: 'RHYTHM CALIBRATION', 
      description: 'Micro-timing synchronization and tempo stability training.', 
      id: 'MOD_RHY_02',
      metric: '92.1%'
    },
    { 
      icon: Target, 
      title: 'CONSISTENCY MEASUREMENT', 
      description: 'Statistical stability across repeated execution cycles.', 
      id: 'MOD_CON_03',
      metric: '96.7%'
    },
    { 
      icon: RefreshCw, 
      title: 'FEEDBACK LOOP', 
      description: 'Real-time adjustment protocols based on performance output.', 
      id: 'MOD_FDB_04',
      metric: 'ACTIVE'
    },
  ];

  return (
    <section id="functions" className="w-full max-w-6xl mx-auto py-24 md:py-32 px-4 relative z-10 bg-black">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-left w-full mb-16 md:mb-20 border-l-2 border-cyan-500 pl-6 relative"
      >
        <div className="absolute top-0 -left-[2px] w-[2px] h-4 bg-white"></div>
        <div className="absolute bottom-0 -left-[2px] w-[2px] h-4 bg-white"></div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse"></div>
          <p className="font-mono text-cyan-500 text-[10px] md:text-xs tracking-[0.3em] uppercase">Architecture</p>
        </div>
        <h2 className="font-montserrat text-3xl md:text-5xl font-black text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4">
          CORE PERFORMANCE LAYERS
        </h2>
        <p className="font-mono text-xs md:text-sm text-zinc-400 tracking-[0.1em] uppercase">
          Every drill targets a specific execution variable.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {layers.map((layer, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-black border border-zinc-800 p-8 hover:border-cyan-500 transition-colors duration-300 flex flex-col md:flex-row items-start gap-6 overflow-hidden"
          >
            
            <div className="absolute top-0 right-0 w-4 h-[1px] bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></div>
            <div className="absolute top-0 right-0 w-[1px] h-4 bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-[1px] h-4 bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></div>

            <div className="relative z-10 bg-zinc-950 border border-zinc-800 p-4 group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all shrink-0">
              <layer.icon className="w-6 h-6 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
            </div>
            
            <div className="relative z-10 w-full flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 gap-2 border-b border-zinc-800/50 pb-2">
                  <span className="font-mono text-[10px] text-zinc-500 group-hover:text-cyan-500/80 transition-colors uppercase tracking-[0.2em]">
                    {layer.id}
                  </span>
                  <span className="font-mono text-[10px] text-cyan-600 font-bold uppercase tracking-wider">
                    {layer.metric}
                  </span>
                </div>
                <h3 className="font-mono text-sm md:text-base font-bold text-zinc-100 group-hover:text-white transition-colors tracking-widest uppercase mb-3">
                  {layer.title}
                </h3>
                <p className="font-space-grotesk text-sm text-zinc-400 leading-relaxed uppercase tracking-wider font-medium">
                  {layer.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CoreFunctionsSection;