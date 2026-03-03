"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const motionProps: any = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  const socialLinks = [
    { name: 'TikTok', id: 'tiktok' },
    { name: 'Instagram', id: 'instagram' },
    { name: 'Facebook', id: 'facebook' },
    { name: 'Threads', id: 'threads' },
    { name: 'Pinterest', id: 'pinterest' },
    { name: 'X', id: 'x' },
    { name: 'Twitch', id: 'twitch' },
    { name: 'Kick', id: 'kick' },
  ];

  return (
    <footer className="w-full border-t border-zinc-900 pt-24 pb-12 px-4 relative z-10 bg-black">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>

      <motion.div
        {...motionProps}
        className="max-w-4xl mx-auto text-center flex flex-col items-center mb-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
          <span className="font-mono text-[10px] md:text-xs text-cyan-500 tracking-[0.3em] uppercase font-bold">
            Execution Standby
          </span>
        </div>

        <h2 className="font-montserrat text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          SYSTEM INITIALIZATION COMPLETE
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-lg mb-20">
          <button className="group relative w-full sm:w-auto font-mono uppercase text-xs sm:text-sm font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-400 px-10 py-4 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] active:scale-95 flex items-center justify-center text-center leading-tight tracking-[0.2em]">
            <span className="absolute w-2 h-2 bg-cyan-400 top-0 left-0 group-hover:bg-black transition-colors"></span>
            <span className="absolute w-2 h-2 bg-cyan-400 bottom-0 right-0 group-hover:bg-black transition-colors"></span>
            ENGAGE TRAINING
          </button>
          
          <button className="group relative w-full sm:w-auto font-mono uppercase text-xs sm:text-sm font-bold border border-zinc-700 text-zinc-500 px-10 py-4 hover:border-zinc-400 hover:text-white bg-black transition-all duration-300 active:scale-95 flex items-center justify-center text-center leading-tight tracking-[0.2em]">
            <span className="absolute w-1.5 h-1.5 bg-zinc-700 top-0 left-0 group-hover:bg-zinc-400 transition-colors"></span>
            <span className="absolute w-1.5 h-1.5 bg-zinc-700 bottom-0 right-0 group-hover:bg-zinc-400 transition-colors"></span>
            EXIT PROTOCOL
          </button>
        </div>
        
        <div className="w-full max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-4 justify-center mb-8 opacity-60">
            <div className="w-12 h-[1px] bg-zinc-800"></div>
            <span className="font-mono text-[10px] text-zinc-500 tracking-[0.4em] uppercase font-bold">Comms Network</span>
            <div className="w-12 h-[1px] bg-zinc-800"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href="#"
                title={social.name}
                className="w-14 h-14 bg-zinc-950 border border-zinc-900 flex items-center justify-center hover:border-cyan-500 hover:bg-black transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-[1px] bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></div>
                <div className="absolute top-0 left-0 w-[1px] h-2 bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></div>

                <span className="font-mono text-[10px] text-zinc-600 font-bold group-hover:text-cyan-400 transition-colors uppercase tracking-wider relative z-10">
                  {social.name.substring(0, 3)}
                </span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border border-zinc-900 bg-zinc-950/50 px-6 py-3 inline-block">
          <p className="font-mono text-zinc-500 text-[10px] tracking-[0.3em] uppercase">
            Calm. Controlled. Dominant.
          </p>
        </div>
      </motion.div>

      <motion.div
        {...motionProps}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center font-mono text-zinc-700 border-t border-zinc-900 pt-8"
      >
        <p className="text-[10px] uppercase tracking-widest mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} CTRLRCLUB. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          <p className="text-[10px] tracking-[0.2em] uppercase">SYS.V: 2.5.1</p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-cyan-800">NET: SECURE</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;