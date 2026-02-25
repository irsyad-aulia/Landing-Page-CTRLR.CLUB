"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ActiveModulesSection = () => {
  const motionProps: any = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  const modules = [
    { name: 'Quantum Core', status: 'Online', load: '42%' },
    { name: 'Neural Net', status: 'Online', load: '68%' },
    { name: 'Firewall', status: 'Online', load: '15%' },
    { name: 'Data Sync', status: 'Standby', load: '0%' },
    { name: 'Predictive AI', status: 'Online', load: '89%' },
    { name: 'Stealth Ops', status: 'Offline', load: 'N/A' },
  ];

  return (
    <section id="modules" className="w-full max-w-6xl mx-auto py-16 md:py-24 px-4 relative z-10">
      <motion.div {...motionProps} className="flex flex-col items-center w-full">
        <h2 className="font-montserrat text-2xl md:text-4xl font-black text-white text-center uppercase tracking-widest drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">Active Modules</h2>
        <p className="font-space-grotesk text-cyan-500/70 text-center mt-2 text-xs md:text-sm tracking-widest uppercase">Live status of all integrated system modules</p>
      </motion.div>
      
      <motion.div 
        {...motionProps}
        transition={{ delay: 0.2 }}
        className="mt-8 md:mt-12 relative w-full"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500/20 to-transparent opacity-50 blur-sm pointer-events-none rounded-sm"></div>
        
        <div className="relative bg-black/80 border border-cyan-500/30 backdrop-blur-md w-full overflow-hidden rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none"></div>
          
          <div className="w-full bg-cyan-950/40 border-b border-cyan-500/30 px-4 md:px-6 py-2.5 flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
               <span className="font-mono text-[10px] md:text-xs text-cyan-400 tracking-widest uppercase">SYS.MOD.MONITOR // V.2.1</span>
             </div>
             <div className="hidden md:flex gap-1 opacity-50">
                <div className="w-4 h-1 bg-cyan-400"></div>
                <div className="w-2 h-1 bg-cyan-400"></div>
                <div className="w-1 h-1 bg-cyan-400"></div>
             </div>
          </div>

          <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-cyan-900/50 scrollbar-track-transparent">
            <table className="w-full text-left font-space-grotesk whitespace-nowrap">
              <thead className="bg-black/60 border-b border-zinc-800/80">
                <tr>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-[10px] md:text-xs uppercase text-zinc-600 font-bold tracking-widest">Module Name</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-[10px] md:text-xs uppercase text-zinc-600 font-bold tracking-widest">Status</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-[10px] md:text-xs uppercase text-zinc-600 font-bold tracking-widest text-right">CPU Load</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/30">
                {modules.map((mod, index) => (
                  <tr key={index} className="hover:bg-cyan-950/20 transition-colors group">
                    <td className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-zinc-300 font-medium group-hover:text-cyan-300 transition-colors flex items-center gap-3">
                      <span className="text-zinc-700 font-mono text-[10px] hidden md:inline-block">[{index.toString().padStart(2, '0')}]</span>
                      {mod.name}
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <span className={`px-2 md:px-3 py-1 text-[9px] md:text-[10px] border uppercase tracking-widest font-bold ${
                        mod.status === 'Online' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.1)]' : 
                        mod.status === 'Standby' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' : 
                        'bg-zinc-900/80 text-zinc-600 border-zinc-800'
                      }`}>
                        {mod.status}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-zinc-500 font-mono text-right group-hover:text-cyan-400 transition-colors">
                      {mod.load}
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