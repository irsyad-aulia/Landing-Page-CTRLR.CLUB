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
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-left w-full mb-16 md:mb-20 border-l-2 border-cyan-500 pl-4 md:pl-6 relative"
      >
        <div className="absolute top-0 -left-[2px] w-[2px] h-4 bg-cyan-400"></div>
        <div className="absolute bottom-0 -left-[2px] w-[2px] h-4 bg-fuchsia-500"></div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></div>
          {/* PERBAIKAN: Lencana kategori diperbesar */}
          <p className="font-mono text-cyan-400 text-xs md:text-sm tracking-[0.3em] uppercase font-bold">Architecture</p>
        </div>
        {/* PERBAIKAN: Judul utama diperbesar */}
        <h2 className="font-montserrat text-3xl sm:text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300 uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.1)] mb-2 md:mb-4 hyphens-none leading-tight">
          CORE PERFORMANCE LAYERS
        </h2>
        {/* PERBAIKAN: Deskripsi diperbesar */}
        <p className="font-mono text-sm md:text-base text-zinc-400 tracking-[0.1em] uppercase">
          Every drill targets a specific execution variable.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      >
        {layers.map((layer, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative p-[1px] group z-10 cursor-pointer active:scale-[0.98] transition-transform duration-300"
          >
            {/* Border neon group-active */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-900 group-hover:from-cyan-500/40 group-active:from-cyan-500/50 group-hover:via-zinc-800 group-active:via-zinc-800 group-hover:to-fuchsia-500/40 group-active:to-fuchsia-500/50 transition-all duration-700 opacity-80 group-hover:opacity-100 group-active:opacity-100"></div>

            <div className="relative bg-black h-full p-6 md:p-8 flex flex-col md:flex-row items-start gap-4 md:gap-6 overflow-hidden shadow-none group-hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] group-active:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500">
              
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.05),transparent_50%)] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="absolute top-0 left-0 w-4 h-[2px] bg-zinc-800 group-hover:bg-cyan-400 group-active:bg-cyan-400 transition-colors duration-500 z-20"></div>
              <div className="absolute top-0 left-0 w-[2px] h-4 bg-zinc-800 group-hover:bg-cyan-400 group-active:bg-cyan-400 transition-colors duration-500 z-20"></div>
              <div className="absolute bottom-0 right-0 w-4 h-[2px] bg-zinc-800 group-hover:bg-fuchsia-500 group-active:bg-fuchsia-500 transition-colors duration-500 z-20"></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-4 bg-zinc-800 group-hover:bg-fuchsia-500 group-active:bg-fuchsia-500 transition-colors duration-500 z-20"></div>

              {/* Kotak Ikon group-active */}
              <div className="relative z-10 bg-zinc-950/80 border border-zinc-800/80 p-3 md:p-4 group-hover:border-cyan-500/50 group-active:border-cyan-500/60 group-hover:bg-black group-active:bg-black group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] group-active:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-500 shrink-0">
                <layer.icon className="w-6 h-6 md:w-8 md:h-8 text-zinc-500 group-hover:text-cyan-400 group-active:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] group-active:drop-shadow-[0_0_12px_rgba(34,211,238,1)] transition-all duration-500" />
              </div>
              
              <div className="relative z-10 w-full flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 gap-2 border-b border-zinc-800/50 group-hover:border-fuchsia-500/30 group-active:border-fuchsia-500/50 transition-colors duration-500 pb-3">
                    {/* PERBAIKAN: ID Modul diperbesar */}
                    <span className="font-mono text-[10px] md:text-xs text-zinc-600 group-hover:text-cyan-400 group-active:text-cyan-400 transition-colors uppercase tracking-[0.2em] flex items-center gap-2 font-bold">
                      <div className="w-1.5 h-1.5 bg-zinc-700 group-hover:bg-cyan-400 group-active:bg-cyan-400 transition-colors"></div>
                      {layer.id}
                    </span>
                    {/* PERBAIKAN: Angka metrik diperbesar */}
                    <span className="font-mono text-[10px] md:text-xs text-zinc-600 group-hover:text-fuchsia-400 group-active:text-fuchsia-400 font-bold uppercase tracking-wider transition-colors drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.5)] group-active:drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]">
                      {layer.metric}
                    </span>
                  </div>
                  {/* PERBAIKAN: Judul kartu diperbesar */}
                  <h3 className="font-mono text-base md:text-xl font-bold text-zinc-300 group-hover:text-white group-active:text-white transition-colors tracking-widest uppercase mb-3 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] group-active:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                    {layer.title}
                  </h3>
                  {/* PERBAIKAN: Deskripsi di dalam kartu diperbesar */}
                  <p className="font-space-grotesk text-sm md:text-base text-zinc-500 group-hover:text-zinc-300 group-active:text-zinc-200 transition-colors leading-relaxed uppercase tracking-wider font-medium">
                    {layer.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CoreFunctionsSection;