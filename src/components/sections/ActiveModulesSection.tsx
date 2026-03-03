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
      <motion.div {...motionProps} className="flex flex-col items-start w-full mb-12 border-l-2 border-cyan-500 pl-6 relative">
        <div className="absolute top-0 -left-[2px] w-[2px] h-4 bg-white"></div>
        <div className="absolute bottom-0 -left-[2px] w-[2px] h-4 bg-white"></div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse"></div>
          <p className="font-mono text-cyan-500 text-[10px] md:text-xs tracking-[0.3em] uppercase">Deployment</p>
        </div>
        
        <h2 className="font-montserrat text-3xl md:text-5xl font-black text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-4">
          ACTIVE DRILLS
        </h2>
        <p className="font-mono text-xs md:text-sm text-zinc-400 tracking-[0.1em] uppercase">
          Live execution modules. Updated daily.
        </p>
      </motion.div>
      
      <motion.div 
        {...motionProps}
        transition={{ delay: 0.2 }}
        className="relative w-full"
      >
        <div className="relative bg-zinc-950 border border-zinc-800 w-full overflow-hidden hover:border-cyan-500/50 transition-colors duration-500">
          
          <div className="absolute top-0 left-0 w-3 h-3 border-t-[1px] border-l-[1px] border-cyan-500 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-[1px] border-r-[1px] border-cyan-500 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1px] border-l-[1px] border-cyan-500 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1px] border-r-[1px] border-cyan-500 pointer-events-none"></div>
          
          <div className="w-full bg-black border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
               <span className="font-mono text-[10px] md:text-xs text-cyan-500 tracking-[0.2em] uppercase font-bold">
                 CTRLRCLUB // MODULE STATUS v2.5
               </span>
             </div>
             <div className="hidden md:flex gap-1 opacity-50">
                <div className="w-4 h-1 bg-zinc-600"></div>
                <div className="w-2 h-1 bg-zinc-600"></div>
                <div className="w-1 h-1 bg-zinc-600"></div>
             </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left font-space-grotesk whitespace-nowrap">
              <thead className="bg-zinc-900/50 border-b border-zinc-800">
                <tr>
                  <th className="px-6 py-4 text-[10px] md:text-xs uppercase text-zinc-500 font-bold tracking-[0.2em]">Module Name</th>
                  <th className="px-6 py-4 text-[10px] md:text-xs uppercase text-zinc-500 font-bold tracking-[0.2em]">Target Parameter</th>
                  <th className="px-6 py-4 text-[10px] md:text-xs uppercase text-zinc-500 font-bold tracking-[0.2em]">Frequency</th>
                  <th className="px-6 py-4 text-[10px] md:text-xs uppercase text-zinc-500 font-bold tracking-[0.2em]">Status</th>
                  <th className="px-6 py-4 text-[10px] md:text-xs uppercase text-zinc-500 font-bold tracking-[0.2em] text-right">System Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {modules.map((mod, index) => (
                  <tr key={index} className="hover:bg-zinc-900 transition-colors group">
                    <td className="px-6 py-5 text-sm md:text-base text-zinc-300 font-medium group-hover:text-cyan-400 transition-colors flex items-center gap-4">
                      <span className="text-zinc-600 font-mono text-[10px] hidden md:inline-block">[{index.toString().padStart(2, '0')}]</span>
                      {mod.name}
                    </td>
                    <td className="px-6 py-5 text-xs md:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors font-mono tracking-wider">
                      {mod.target}
                    </td>
                    <td className="px-6 py-5 text-xs md:text-sm text-zinc-500 font-mono group-hover:text-zinc-400 transition-colors tracking-wider">
                      {mod.frequency}
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1.5 text-[9px] md:text-[10px] border uppercase tracking-[0.2em] font-bold bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                        {mod.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-zinc-400 border border-zinc-700 bg-black px-4 py-2 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300 uppercase font-bold">
                        EXECUTE
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