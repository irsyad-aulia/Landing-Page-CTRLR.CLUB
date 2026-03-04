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
    { name: 'Discord', id: 'discord' },
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
    <footer className="w-full border-t border-zinc-900 pt-20 md:pt-24 pb-8 md:pb-12 px-4 relative z-10 bg-black overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 md:w-64 h-[2px] bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 shadow-[0_0_15px_rgba(217,70,239,0.8)]"></div>

      <motion.div
        {...motionProps}
        className="max-w-4xl mx-auto text-center flex flex-col items-center mb-16 md:mb-20"
      >
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.8)] animate-pulse"></div>
          <span className="font-mono text-[9px] md:text-xs text-fuchsia-400 tracking-[0.3em] uppercase font-bold">
            Execution Standby
          </span>
        </div>

        <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-400 uppercase tracking-tighter mb-8 md:mb-12 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)] hyphens-none px-2">
          SYSTEM INITIALIZATION COMPLETE
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-lg mb-16 md:mb-20 relative z-10 px-4 sm:px-0">
          {/* Efek taktil pada tombol Engage Training */}
          <button className="group relative w-full sm:w-auto font-mono uppercase text-xs sm:text-sm font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-400 px-8 py-4 md:px-10 hover:bg-cyan-400 active:bg-cyan-400 hover:text-black active:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] active:shadow-[0_0_40px_rgba(34,211,238,0.8)] active:scale-95 flex items-center justify-center text-center leading-tight tracking-[0.2em] overflow-hidden">
            <span className="absolute w-2 h-2 bg-cyan-400 top-0 left-0 group-hover:bg-black group-active:bg-black transition-colors z-10"></span>
            <span className="absolute w-2 h-2 bg-cyan-400 bottom-0 right-0 group-hover:bg-black group-active:bg-black transition-colors z-10"></span>
            <span className="relative z-10">ENGAGE TRAINING</span>
          </button>
          
          {/* Efek taktil pada tombol Exit Protocol */}
          <button className="group relative w-full sm:w-auto font-mono uppercase text-xs sm:text-sm font-bold border border-zinc-700 text-zinc-400 px-8 py-4 md:px-10 hover:border-fuchsia-500 active:border-fuchsia-500 hover:text-fuchsia-400 active:text-fuchsia-400 bg-black/50 active:bg-zinc-900 backdrop-blur-sm transition-all duration-300 active:scale-95 flex items-center justify-center text-center leading-tight tracking-[0.2em] shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] active:shadow-[0_0_30px_rgba(217,70,239,0.4)]">
            <span className="absolute w-1.5 h-1.5 bg-zinc-700 top-0 left-0 group-hover:bg-fuchsia-500 group-active:bg-fuchsia-500 transition-colors"></span>
            <span className="absolute w-1.5 h-1.5 bg-zinc-700 bottom-0 right-0 group-hover:bg-fuchsia-500 group-active:bg-fuchsia-500 transition-colors"></span>
            EXIT PROTOCOL
          </button>
        </div>
        
        <div className="w-full max-w-3xl mx-auto mb-10 md:mb-12 px-2">
          <div className="flex items-center gap-3 md:gap-4 justify-center mb-6 md:mb-8 opacity-80">
            <div className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-cyan-500/50"></div>
            <span className="font-mono text-[9px] md:text-[10px] text-cyan-500 tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">Comms Network</span>
            <div className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-fuchsia-500/50"></div>
          </div>
          
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-3 md:gap-4 max-w-[240px] sm:max-w-none mx-auto">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href="#"
                title={social.name}
                className="w-full aspect-square sm:w-12 sm:h-12 md:w-14 md:h-14 relative group z-10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:-translate-y-0 active:scale-90 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-zinc-900 to-fuchsia-500/20 group-hover:from-cyan-400 group-active:from-cyan-400 group-hover:via-fuchsia-500/30 group-active:via-fuchsia-500/40 group-hover:to-fuchsia-400 group-active:to-fuchsia-400 transition-all duration-500 opacity-80 group-hover:opacity-100 group-active:opacity-100 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] group-active:shadow-[0_0_25px_rgba(217,70,239,0.6)] rounded-sm"></div>
                
                <div className="absolute inset-[1px] bg-zinc-950 group-hover:bg-black group-active:bg-black transition-colors duration-500 rounded-sm"></div>

                <div className="absolute top-[1px] left-[1px] w-2 h-[2px] bg-zinc-800 group-hover:bg-cyan-400 group-active:bg-cyan-400 transition-colors duration-500 z-20"></div>
                <div className="absolute top-[1px] left-[1px] w-[2px] h-2 bg-zinc-800 group-hover:bg-cyan-400 group-active:bg-cyan-400 transition-colors duration-500 z-20"></div>
                <div className="absolute bottom-[1px] right-[1px] w-2 h-[2px] bg-zinc-800 group-hover:bg-fuchsia-400 group-active:bg-fuchsia-400 transition-colors duration-500 z-20"></div>
                <div className="absolute bottom-[1px] right-[1px] w-[2px] h-2 bg-zinc-800 group-hover:bg-fuchsia-400 group-active:bg-fuchsia-400 transition-colors duration-500 z-20"></div>

                <span className="font-mono text-[9px] md:text-[10px] text-zinc-500 font-bold group-hover:text-white group-active:text-white transition-colors duration-300 uppercase tracking-wider relative z-30 drop-shadow-none group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] group-active:drop-shadow-[0_0_8px_rgba(34,211,238,1)]">
                  {social.name.substring(0, 3)}
                </span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border border-zinc-900 bg-black/50 px-4 md:px-6 py-2.5 md:py-3 inline-block relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="font-mono text-zinc-500 text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-500">
            Calm. Controlled. Dominant.
          </p>
        </div>
      </motion.div>

      <motion.div
        {...motionProps}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center font-mono text-zinc-600 border-t border-zinc-900/80 pt-6 md:pt-8 gap-4 md:gap-0"
      >
        <p className="text-[9px] md:text-[10px] uppercase tracking-widest hover:text-cyan-500 transition-colors text-center md:text-left">
          &copy; {new Date().getFullYear()} CTRLRCLUB. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4 md:gap-6">
          <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase hover:text-white transition-colors">SYS.V: 2.5.1</p>
          <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-cyan-600 font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse rounded-full shadow-[0_0_5px_rgba(34,211,238,0.8)]"></span>
            NET: SECURE
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;