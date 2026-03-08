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
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left w-full mb-16 md:mb-20 border-l-0 md:border-l-2 border-cyan-500 pl-0 md:pl-6 flex flex-col items-center md:items-start"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.8)] animate-pulse"></div>
          {/* PERBAIKAN: Font diperbesar */}
          <p className="font-mono text-cyan-400 text-xs md:text-sm tracking-[0.3em] uppercase">Security Protocol</p>
        </div>
        {/* PERBAIKAN: Judul diperbesar */}
        <h2 className="font-montserrat text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4"
            style={{ textShadow: '0px 0px 15px rgba(34,211,238,0.2)' }}
        >
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
        
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-zinc-800 to-transparent z-20"></div>

        {/* KARTU 1: LIMITED MODE */}
        <motion.div 
          variants={itemVariants}
          className="relative bg-black border border-zinc-900/50 p-8 md:p-12 flex flex-col group overflow-hidden opacity-60 hover:opacity-100 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-[url('/assets/tactical-hands.png')] bg-cover opacity-[0.02] mix-blend-screen pointer-events-none"></div>

          <div className="absolute top-0 left-0 w-4 h-[1px] bg-zinc-700 transition-colors duration-300"></div>
          <div className="absolute top-0 left-0 w-[1px] h-4 bg-zinc-700 transition-colors duration-300"></div>

          {/* PERBAIKAN: Font judul kartu diperbesar */}
          <h3 className="text-2xl md:text-3xl font-black text-zinc-500 mb-8 uppercase tracking-widest font-montserrat group-hover:text-zinc-400 transition-colors">
            LIMITED MODE
          </h3>
          
          {/* PERBAIKAN: Font list diperbesar */}
          <ul className="text-zinc-600 space-y-5 font-mono text-base md:text-lg flex-grow relative z-10 uppercase tracking-wider">
            <li className="flex items-start">
              <span className="text-zinc-800 mr-4 font-bold">/</span>
              <span>Evaluation only.</span>
            </li>
            <li className="flex items-start">
              <span className="text-zinc-800 mr-4 font-bold">/</span>
              <span>No retention.</span>
            </li>
            <li className="flex items-start">
              <span className="text-zinc-800 mr-4 font-bold">/</span>
              <span>No persistent data.</span>
            </li>
          </ul>

          <div className="mt-12 pt-6 border-t border-zinc-900 relative z-10">
            {/* PERBAIKAN: Font status diperbesar */}
            <span className="text-xs md:text-sm font-mono text-zinc-600 uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-zinc-800"></span>
              STATUS: RESTRICTED
            </span>
          </div>
        </motion.div>

        {/* KARTU 2: TRAINING MODE */}
        <motion.div 
          variants={itemVariants}
          className="relative p-[1px] group z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-zinc-900 to-fuchsia-500/30 group-hover:from-cyan-400 group-hover:via-fuchsia-500/20 group-hover:to-fuchsia-400 transition-all duration-700 opacity-80 group-hover:opacity-100"></div>
          
          <div className="relative bg-black h-full p-8 md:p-12 flex flex-col overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.05)] group-hover:shadow-[0_0_50px_rgba(217,70,239,0.15)] transition-all duration-500">
            
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.07),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.07),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500 group-hover:bg-cyan-300 transition-colors duration-500 z-20"></div>
            <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500 group-hover:bg-cyan-300 transition-colors duration-500 z-20"></div>
            <div className="absolute bottom-0 right-0 w-6 h-[2px] bg-fuchsia-500 group-hover:bg-fuchsia-400 transition-colors duration-500 z-20"></div>
            <div className="absolute bottom-0 right-0 w-[2px] h-6 bg-fuchsia-500 group-hover:bg-fuchsia-400 transition-colors duration-500 z-20"></div>
            <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-fuchsia-500 group-hover:bg-fuchsia-400 transition-colors duration-500 z-20"></div>
            <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-fuchsia-500 group-hover:bg-fuchsia-400 transition-colors duration-500 z-20"></div>

            {/* PERBAIKAN: Font judul kartu diperbesar */}
            <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 group-hover:from-white group-hover:to-cyan-100 mb-8 uppercase tracking-widest font-montserrat drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-500">
              TRAINING MODE
            </h3>
            
            {/* PERBAIKAN: Font list diperbesar */}
            <ul className="text-zinc-400 space-y-5 font-mono text-base md:text-lg flex-grow relative z-10 uppercase tracking-wider">
              <li className="flex items-start group-hover:text-white transition-colors duration-300">
                <span className="text-cyan-400 mr-4 font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">/</span>
                <span>Full execution.</span>
              </li>
              <li className="flex items-start group-hover:text-white transition-colors duration-300 delay-75">
                <span className="text-cyan-400 mr-4 font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">/</span>
                <span>Persistent R-Index.</span>
              </li>
              <li className="flex items-start group-hover:text-white transition-colors duration-300 delay-150">
                <span className="text-fuchsia-400 mr-4 font-bold drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]">/</span>
                <span>Milestone progression.</span>
              </li>
            </ul>

            <div className="mt-12 pt-6 border-t border-cyan-900/30 group-hover:border-fuchsia-900/50 transition-colors duration-500 relative z-10">
              {/* PERBAIKAN: Font status diperbesar, tetap menjaga "STANDBY" dari fase sebelumnya */}
              <span className="text-xs md:text-sm font-mono text-cyan-400 group-hover:text-fuchsia-400 uppercase tracking-[0.2em] flex items-center gap-3 font-bold transition-colors duration-500">
                <span className="w-2.5 h-2.5 bg-cyan-400 group-hover:bg-fuchsia-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:shadow-[0_0_8px_rgba(217,70,239,0.8)] transition-colors duration-500"></span>
                STATUS: STANDBY
              </span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default AccessControlSection;