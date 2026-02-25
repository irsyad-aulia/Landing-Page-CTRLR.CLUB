"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Wifi, Database } from 'lucide-react';

const DiagnosticsSection = () => {
  const motionProps: any = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  const diagnostics = [
    { icon: Activity, label: 'System Integrity', value: '98.9%', status: 'Stable', hex: '0x7F8A' },
    { icon: Cpu, label: 'CPU Load', value: '42%', status: 'Optimal', hex: '0x3B2C' },
    { icon: Wifi, label: 'Network Latency', value: '12ms', status: 'Low', hex: '0x9E41' },
    { icon: Database, label: 'Data Throughput', value: '1.2 GB/s', status: 'High', hex: '0x1A99' },
  ];

  return (
    <section id="diagnostics" className="w-full max-w-6xl mx-auto py-16 md:py-24 px-4 relative z-10">
      <motion.div {...motionProps} className="text-center w-full flex flex-col items-center">
        <h2 className="font-montserrat text-2xl md:text-4xl font-black text-white uppercase tracking-widest break-words drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          System Diagnostics
        </h2>
        <div className="flex items-center gap-2 mt-3">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          <p className="font-mono text-cyan-400/80 text-[10px] md:text-xs tracking-[0.3em] uppercase">Real-time telemetry active</p>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 relative">
        <div className="absolute inset-0 bg-cyan-900/10 blur-[100px] pointer-events-none rounded-full"></div>

        {diagnostics.map((diag, index) => (
          <motion.div
            key={index}
            {...motionProps}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            className="group relative bg-black/40 border border-cyan-900/40 p-5 md:p-6 backdrop-blur-xl hover:border-cyan-400 hover:bg-cyan-950/30 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(34,211,238,0.05)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50 group-hover:border-cyan-300 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50 group-hover:border-cyan-300 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all pointer-events-none"></div>

            <div className="flex items-start justify-between mb-8 relative z-10">
              <div className="p-2.5 bg-black border border-zinc-800 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300">
                <diag.icon className="w-5 h-5 md:w-6 md:h-6 text-cyan-500 group-hover:text-cyan-300 transition-colors" />
              </div>
              <div className="flex flex-col items-end">
                <span className={`text-[9px] md:text-[10px] uppercase tracking-widest font-bold px-2 py-1 mb-1 border ${diag.status === 'Stable' || diag.status === 'Optimal' || diag.status === 'Low' || diag.status === 'High' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'}`}>
                  {diag.status}
                </span>
                <span className="font-mono text-[8px] text-zinc-600 tracking-wider">MEM:{diag.hex}</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="font-mono text-cyan-500/60 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-1">{diag.label}</h3>
              <p className="font-montserrat text-3xl md:text-4xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-400 transition-all duration-300 drop-shadow-lg">{diag.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DiagnosticsSection;