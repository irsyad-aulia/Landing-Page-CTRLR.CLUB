"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Fingerprint, Lock, Unlock } from 'lucide-react';

const AccessControlSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  return (
    <section id="access" className="w-full max-w-4xl mx-auto py-24 px-4 text-center overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        
        <motion.div variants={itemVariants} className="relative inline-block mb-6">
          <Fingerprint className="w-12 h-12 text-cyan-400 mx-auto relative z-10" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-cyan-400 blur-xl rounded-full"
          />
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="font-mono text-4xl font-black text-white uppercase tracking-widest">
          Access Control
        </motion.h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="relative border border-zinc-700 bg-zinc-900/50 backdrop-blur-md p-8 rounded-xl flex flex-col hover:border-zinc-500 hover:bg-zinc-800/60 transition-all duration-300 group overflow-hidden cursor-default min-h-[320px]"
          >
            <motion.div 
              className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-500/30 to-transparent"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            <h3 className="text-xl font-bold text-zinc-300 mb-8 uppercase tracking-wider flex items-center gap-3">
              <Lock className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300" />
              Limited Access
            </h3>
            
            <ul className="text-zinc-400 space-y-4 font-mono text-sm flex-grow relative z-10">
              <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                <span className="text-zinc-600 mr-3 text-lg group-hover:text-zinc-400">›</span>Evaluation mode
              </li>
              <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300 delay-75">
                <span className="text-zinc-600 mr-3 text-lg group-hover:text-zinc-400">›</span>No retention
              </li>
              <li className="flex items-center group-hover:translate-x-1 transition-transform duration-300 delay-150">
                <span className="text-zinc-600 mr-3 text-lg group-hover:text-zinc-400">›</span>No persistent data
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-zinc-800 relative z-10">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2 group-hover:text-zinc-300 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-zinc-400"></span>
                    STATUS: RESTRICTED
                </span>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="relative border border-cyan-500/50 bg-cyan-950/20 backdrop-blur-md p-8 rounded-xl flex flex-col hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:bg-cyan-900/30 transition-all duration-300 cursor-pointer group overflow-hidden min-h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-magenta-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-magenta-500 to-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
            
            <motion.div 
              className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />

            <h3 className="text-xl font-bold text-cyan-300 mb-8 uppercase tracking-wider flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <Unlock className="w-5 h-5 text-cyan-500 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                Training Access
              </div>
              <span className="text-[10px] bg-cyan-950/80 text-cyan-400 px-3 py-1 rounded border border-cyan-800 group-hover:bg-cyan-900 group-hover:border-cyan-500 transition-all duration-300">
                DEFAULT STATE
              </span>
            </h3>
            
            <ul className="text-zinc-200 space-y-4 font-mono text-sm flex-grow relative z-10">
              <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-cyan-500 mr-3 text-lg group-hover:text-magenta-400 transition-colors">›</span>Full execution
              </li>
              <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                <span className="text-cyan-500 mr-3 text-lg group-hover:text-magenta-400 transition-colors">›</span>Persistent R-Index
              </li>
              <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                <span className="text-cyan-500 mr-3 text-lg group-hover:text-magenta-400 transition-colors">›</span>Milestone tracking
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-cyan-900/50 relative z-10">
                <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)] animate-pulse"></span>
                    STATUS: READY
                </span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default AccessControlSection;