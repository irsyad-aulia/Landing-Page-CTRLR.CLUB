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
    <section id="modules" className="w-full max-w-6xl mx-auto py-16 md:py-24 px-4 overflow-hidden">
      <motion.div {...motionProps}>
        <h2 className="font-montserrat text-3xl md:text-4xl font-black text-white text-center uppercase">Active Modules</h2>
        <p className="font-space-grotesk text-zinc-400 text-center mt-2 text-sm md:text-base">Live status of all integrated system modules.</p>
      </motion.div>
      
      <motion.div 
        {...motionProps}
        transition={{ delay: 0.2 }}
        className="mt-8 md:mt-12 bg-zinc-900/50 border border-zinc-800 rounded-lg w-full"
      >
        <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
          <table className="w-full text-left font-space-grotesk whitespace-nowrap">
            <thead className="bg-zinc-900/80 border-b border-zinc-800">
              <tr>
                <th className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm uppercase text-zinc-400 font-normal tracking-wider">Module Name</th>
                <th className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm uppercase text-zinc-400 font-normal tracking-wider">Status</th>
                <th className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm uppercase text-zinc-400 font-normal tracking-wider">CPU Load</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((mod, index) => (
                <tr key={index} className="border-b border-zinc-800/50 last:border-b-0 hover:bg-zinc-800/30 transition-colors">
                  <td className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-white font-bold">{mod.name}</td>
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <span className={`px-2 md:px-3 py-1 text-[10px] md:text-xs rounded-full uppercase tracking-widest font-bold border ${mod.status === 'Online' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' : mod.status === 'Standby' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' : 'bg-zinc-800/50 text-zinc-500 border-zinc-700'}`}>
                      {mod.status}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-zinc-300 font-mono">{mod.load}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
};

export default ActiveModulesSection;