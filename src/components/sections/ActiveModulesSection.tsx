"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ActiveModulesSection = () => {
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  const modules = [
    { name: 'PULSE RUN', target: 'REACTION', frequency: 'DAILY', status: 'ACTIVE' },
    { name: 'GHOST TAP', target: 'TIMING', frequency: 'DAILY', status: 'ACTIVE' },
    { name: 'RHYTHM LOCK', target: 'CONSISTENCY', frequency: 'DAILY', status: 'ACTIVE' },
  ];

  return (
    <section id="modules" className="w-full max-w-6xl mx-auto py-24 md:py-32 px-4 relative z-10 bg-black">
      
      {/* Background Telemetry Scanline */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent"></div>

      <motion.div {...motionProps} className="flex flex-col items-start w-full mb-12 border-l-2 border-fuchsia-500 pl-6 relative">
        <div className="absolute top-0 -left-[2px] w-[2px] h-4 bg-cyan-400"></div>
        <div className="absolute bottom-0 -left-[2px] w-[2px] h-4 bg-fuchsia-500"></div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 bg-fuchsia-500 animate-pulse shadow-[0_0_8px_rgba(217,70,239,0.8)]"></div>
          <p className="font-mono text-fuchsia-400 text-[10px] md:text-xs tracking-[0.3em] uppercase">Deployment</p>
        </div>
        
        <h2 className="font-montserrat text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300 uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(217,70,239,0.1)] mb-4">
          ACTIVE DRILLS
        </h2>
        <p className="font-mono text-xs md:text-sm text-zinc-400 tracking-[0.1em] uppercase">
          Live execution modules. Updated daily.
        </p>
      </motion.div>
      
      <motion.div 
        {...motionProps}
        transition={{ delay: 0.2 }}
        className="relative w-full p-[1px] group z-10"
      >
        {/* Animated Gradient Border Wrapper */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-900 group-hover:from-cyan-500/40 group-hover:via-zinc-800 group-hover:to-fuchsia-500/40 transition-all duration-700 opacity-80 group-hover:opacity-100 shadow-none group-hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"></div>

        <div className="relative bg-black w-full overflow-hidden transition-colors duration-500 flex flex-col h-full">
          
          {/* Inner Hover Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.05),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          {/* Neon Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-[2px] bg-zinc-800 group-hover:bg-cyan-400 transition-colors duration-500 z-20 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-[2px] h-4 bg-zinc-800 group-hover:bg-cyan-400 transition-colors duration-500 z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-4 h-[2px] bg-zinc-800 group-hover:bg-cyan-400 transition-colors duration-500 z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[2px] h-4 bg-zinc-800 group-hover:bg-cyan-400 transition-colors duration-500 z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-4 h-[2px] bg-zinc-800 group-hover:bg-fuchsia-500 transition-colors duration-500 z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[2px] h-4 bg-zinc-800 group-hover:bg-fuchsia-500 transition-colors duration-500 z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-4 h-[2px] bg-zinc-800 group-hover:bg-fuchsia-500 transition-colors duration-500 z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[2px] h-4 bg-zinc-800 group-hover:bg-fuchsia-500 transition-colors duration-500 z-20 pointer-events-none"></div>
          
          <div className="w-full bg-zinc-950/80 border-b border-zinc-800/80 group-hover:border-cyan-500/30 transition-colors duration-500 px-6 py-4 flex items-center justify-between relative z-10">
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-zinc-600 group-hover:bg-cyan-400 transition-colors duration-500 animate-pulse group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
               <span className="font-mono text-[10px] md:text-xs text-zinc-500 group-hover:text-cyan-400 transition-colors duration-500 tracking-[0.2em] uppercase font-bold">
                 CTRLRCLUB // MODULE STATUS v2.5
               </span>
             </div>
             <div className="hidden md:flex gap-1 opacity-50">
                <div className="w-4 h-1 bg-zinc-600 group-hover:bg-cyan-500 transition-colors duration-500"></div>
                <div className="w-2 h-1 bg-zinc-600 group-hover:bg-fuchsia-500 transition-colors duration-500"></div>
                <div className="w-1 h-1 bg-zinc-600 group-hover:bg-cyan-500 transition-colors duration-500"></div>
             </div>
          </div>

          <div className="overflow-x-auto w-full relative z-10">
            <table className="w-full text-left font-space-grotesk whitespace-nowrap">
              <thead className="bg-zinc-950/40 border-b border-zinc-800/50">
                <tr>
                  <th className="px-6 py-4 text-[10px] md:text-xs uppercase text-zinc-600 font-bold tracking-[0.2em]">Module Name</th>
                  <th className="px-6 py-4 text-[10px] md:text-xs uppercase text-zinc-600 font-bold tracking-[0.2em]">Target Parameter</th>
                  <th className="px-6 py-4 text-[10px] md:text-xs uppercase text-zinc-600 font-bold tracking-[0.2em]">Frequency</th>
                  <th className="px-6 py-4 text-[10px] md:text-xs uppercase text-zinc-600 font-bold tracking-[0.2em]">Status</th>
                  <th className="px-6 py-4 text-[10px] md:text-xs uppercase text-zinc-600 font-bold tracking-[0.2em] text-right">System Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/50">
                {modules.map((mod, index) => (
                  <tr key={index} className="hover:bg-zinc-900/80 transition-all duration-300 group/row relative">
                    <td className="px-6 py-5 text-sm md:text-base text-zinc-300 font-medium group-hover/row:text-cyan-400 transition-colors flex items-center gap-4 group-hover/row:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
                      {/* Left highlight indicator on hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover/row:bg-cyan-400 transition-colors"></div>
                      <span className="text-zinc-600 font-mono text-[10px] hidden md:inline-block group-hover/row:text-cyan-600 transition-colors">[{index.toString().padStart(2, '0')}]</span>
                      {mod.name}
                    </td>
                    <td className="px-6 py-5 text-xs md:text-sm text-zinc-500 group-hover/row:text-zinc-300 transition-colors font-mono tracking-wider">
                      {mod.target}
                    </td>
                    <td className="px-6 py-5 text-xs md:text-sm text-zinc-600 font-mono group-hover/row:text-zinc-400 transition-colors tracking-wider">
                      {mod.frequency}
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1.5 text-[9px] md:text-[10px] border uppercase tracking-[0.2em] font-bold bg-zinc-900 text-zinc-500 border-zinc-800 group-hover/row:bg-cyan-500/10 group-hover/row:text-cyan-400 group-hover/row:border-cyan-500/30 transition-all duration-300 group-hover/row:shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                        {mod.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-zinc-500 border border-zinc-800 bg-black px-4 py-2 hover:bg-fuchsia-500 hover:text-white hover:border-fuchsia-400 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] transition-all duration-300 uppercase font-bold relative overflow-hidden group/btn">
                        <span className="absolute inset-0 bg-fuchsia-500/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></span>
                        <span className="relative z-10">EXECUTE</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ActiveModulesSection;