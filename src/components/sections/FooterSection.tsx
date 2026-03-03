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
    <footer className="w-full border-t border-zinc-900 pt-24 pb-12 px-4 relative z-10 bg-black overflow-hidden">
      
      {/* Garis Aksen Gradien Atas (Cyan ke Magenta) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 shadow-[0_0_15px_rgba(217,70,239,0.8)]"></div>

      <motion.div
        {...motionProps}
        className="max-w-4xl mx-auto text-center flex flex-col items-center mb-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.8)] animate-pulse"></div>
          <span className="font-mono text-[10px] md:text-xs text-fuchsia-400 tracking-[0.3em] uppercase font-bold">
            Execution Standby
          </span>
        </div>

        <h2 className="font-montserrat text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-400 uppercase tracking-tighter mb-12 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          SYSTEM INITIALIZATION COMPLETE
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-lg mb-20 relative z-10">
          <button className="group relative w-full sm:w-auto font-mono uppercase text-xs sm:text-sm font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-400 px-10 py-4 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] active:scale-95 flex items-center justify-center text-center leading-tight tracking-[0.2em] overflow-hidden">
            <span className="absolute w-2 h-2 bg-cyan-400 top-0 left-0 group-hover:bg-black transition-colors z-10"></span>
            <span className="absolute w-2 h-2 bg-cyan-400 bottom-0 right-0 group-hover:bg-black transition-colors z-10"></span>
            <span className="relative z-10">ENGAGE TRAINING</span>
          </button>
          
          <button className="group relative w-full sm:w-auto font-mono uppercase text-xs sm:text-sm font-bold border border-zinc-700 text-zinc-400 px-10 py-4 hover:border-fuchsia-500 hover:text-fuchsia-400 bg-black/50 backdrop-blur-sm transition-all duration-300 active:scale-95 flex items-center justify-center text-center leading-tight tracking-[0.2em] shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]">
            <span className="absolute w-1.5 h-1.5 bg-zinc-700 top-0 left-0 group-hover:bg-fuchsia-500 transition-colors"></span>
            <span className="absolute w-1.5 h-1.5 bg-zinc-700 bottom-0 right-0 group-hover:bg-fuchsia-500 transition-colors"></span>
            EXIT PROTOCOL
          </button>
        </div>
        
        <div className="w-full max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-4 justify-center mb-8 opacity-80">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-cyan-500/50"></div>
            <span className="font-mono text-[10px] text-cyan-500 tracking-[0.4em] uppercase font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">Comms Network</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-fuchsia-500/50"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href="#"
                title={social.name}
                className="w-14 h-14 relative group z-10 flex items-center justify-center transition-all duration-500 hover:-translate-y-1"
              >
                {/* Border Gradien Wrapper (Cyan & Magenta) */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-zinc-900 to-fuchsia-500/20 group-hover:from-cyan-400 group-hover:via-fuchsia-500/30 group-hover:to-fuchsia-400 transition-all duration-500 opacity-80 group-hover:opacity-100 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] rounded-sm"></div>
                
                {/* Latar Belakang Hitam Dalam */}
                <div className="absolute inset-[1px] bg-zinc-950 group-hover:bg-black transition-colors duration-500 rounded-sm"></div>

                {/* Aksen Sudut (Kiri Atas Cyan, Kanan Bawah Magenta) */}
                <div className="absolute top-[1px] left-[1px] w-2 h-[2px] bg-zinc-800 group-hover:bg-cyan-400 transition-colors duration-500 z-20"></div>
                <div className="absolute top-[1px] left-[1px] w-[2px] h-2 bg-zinc-800 group-hover:bg-cyan-400 transition-colors duration-500 z-20"></div>
                <div className="absolute bottom-[1px] right-[1px] w-2 h-[2px] bg-zinc-800 group-hover:bg-fuchsia-400 transition-colors duration-500 z-20"></div>
                <div className="absolute bottom-[1px] right-[1px] w-[2px] h-2 bg-zinc-800 group-hover:bg-fuchsia-400 transition-colors duration-500 z-20"></div>

                <span className="font-mono text-[10px] text-zinc-500 font-bold group-hover:text-white transition-colors duration-300 uppercase tracking-wider relative z-30 drop-shadow-none group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
                  {social.name.substring(0, 3)}
                </span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border border-zinc-900 bg-black/50 px-6 py-3 inline-block relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="font-mono text-zinc-500 text-[10px] tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-500">
            Calm. Controlled. Dominant.
          </p>
        </div>
      </motion.div>

      <motion.div
        {...motionProps}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center font-mono text-zinc-600 border-t border-zinc-900/80 pt-8"
      >
        <p className="text-[10px] uppercase tracking-widest mb-4 md:mb-0 hover:text-cyan-500 transition-colors">
          &copy; {new Date().getFullYear()} CTRLRCLUB. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          <p className="text-[10px] tracking-[0.2em] uppercase hover:text-white transition-colors">SYS.V: 2.5.1</p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-cyan-600 font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse rounded-full shadow-[0_0_5px_rgba(34,211,238,0.8)]"></span>
            NET: SECURE
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;