"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Twitter, Twitch } from 'lucide-react';
import { SiTiktok, SiDiscord, SiPinterest, SiKick } from 'react-icons/si';

const FooterSection = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const motionProps: any = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  const socialLinks = [
    { name: 'Discord', id: 'discord', url: 'https://discord.com/channels/1420669550609043581/1430214185580630027', icon: <SiDiscord className="w-5 h-5" /> },
    { name: 'TikTok', id: 'tiktok', url: 'https://www.tiktok.com/@ctrlrclub', icon: <SiTiktok className="w-4 h-4" /> },
    { name: 'Instagram', id: 'instagram', url: 'https://www.instagram.com/ctrlr_club/', icon: <Instagram className="w-5 h-5" /> },
    { name: 'Facebook', id: 'facebook', url: 'https://www.facebook.com/profile.php?id=61580303012615', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Pinterest', id: 'pinterest', url: 'https://www.pinterest.com/ctrlrclub/', icon: <SiPinterest className="w-5 h-5" /> },
    { name: 'X', id: 'x', url: 'https://x.com/CtrlrClub', icon: <Twitter className="w-5 h-5" /> },
    { name: 'Twitch', id: 'twitch', url: 'https://www.twitch.tv/ctrlrclub', icon: <Twitch className="w-5 h-5" /> },
    { name: 'Kick', id: 'kick', url: 'https://kick.com/ctrlrclub', icon: <SiKick className="w-6 h-6" /> },
  ];

  return (
    <footer className="w-full border-t border-zinc-900 pt-20 md:pt-24 pb-8 md:pb-12 px-4 relative z-10 bg-black overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 md:w-64 h-[2px] bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 shadow-[0_0_15px_rgba(217,70,239,0.8)]"></div>

      <motion.div
        {...motionProps}
        className="max-w-4xl mx-auto text-center flex flex-col items-center mb-16 md:mb-20"
      >
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-2 h-2 bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.8)] animate-pulse"></div>
          {/* PERBAIKAN: Font diperbesar */}
          <span className="font-mono text-xs md:text-sm text-fuchsia-400 tracking-[0.3em] uppercase font-bold">
            Execution Standby
          </span>
        </div>

        {/* PERBAIKAN: Judul Footer diperbesar secara masif */}
        <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-400 uppercase tracking-tighter mb-8 md:mb-12 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)] hyphens-none px-2 leading-tight">
          SYSTEM INITIALIZATION COMPLETE
        </h2>
        
        <div className="flex flex-col items-center justify-start w-full max-w-2xl mb-16 md:mb-20 min-h-[120px] relative z-10 px-4 sm:px-0">
          <AnimatePresence mode="wait">
            {!showEmailForm ? (
              <motion.div
                key="buttons"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full"
              >
                {/* PERBAIKAN: Font tombol diperbesar (text-sm sm:text-base) */}
                <button 
                  onClick={() => setShowEmailForm(true)} 
                  className="group relative w-full sm:w-auto font-mono uppercase text-sm sm:text-base font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-400 px-10 py-5 hover:bg-cyan-400 active:bg-cyan-400 hover:text-black active:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] active:shadow-[0_0_40px_rgba(34,211,238,0.8)] active:scale-95 flex items-center justify-center text-center leading-tight tracking-[0.2em] overflow-hidden"
                >
                  <span className="absolute w-2 h-2 bg-cyan-400 top-0 left-0 group-hover:bg-black group-active:bg-black transition-colors z-10"></span>
                  <span className="absolute w-2 h-2 bg-cyan-400 bottom-0 right-0 group-hover:bg-black group-active:bg-black transition-colors z-10"></span>
                  <span className="relative z-10">REQUEST ACCESS</span>
                </button>
                
                <button 
                  onClick={scrollToTop} 
                  className="group relative w-full sm:w-auto font-mono uppercase text-sm sm:text-base font-bold border border-zinc-700 text-zinc-400 px-10 py-5 hover:border-fuchsia-500 active:border-fuchsia-500 hover:text-fuchsia-400 active:text-fuchsia-400 bg-black/50 active:bg-zinc-900 backdrop-blur-sm transition-all duration-300 active:scale-95 flex items-center justify-center text-center leading-tight tracking-[0.2em] shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] active:shadow-[0_0_30px_rgba(217,70,239,0.4)]"
                >
                  <span className="absolute w-1.5 h-1.5 bg-zinc-700 top-0 left-0 group-hover:bg-fuchsia-500 group-active:bg-fuchsia-500 transition-colors"></span>
                  <span className="absolute w-1.5 h-1.5 bg-zinc-700 bottom-0 right-0 group-hover:bg-fuchsia-500 group-active:bg-fuchsia-500 transition-colors"></span>
                  EXIT PROTOCOL
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-6 w-full max-w-2xl"
              >
                <form 
                  action="https://club.us5.list-manage.com/subscribe/post?u=b0027597e58976d72ab32ed15&amp;id=ac9be7be9e&amp;f_id=00bfc2e1f0" 
                  method="POST" 
                  target="_blank"
                  className="flex flex-col sm:flex-row w-full relative group"
                >
                  <div className="absolute -top-[1px] -left-[1px] w-2 h-[1px] bg-cyan-400 z-20 pointer-events-none"></div>
                  <div className="absolute -top-[1px] -left-[1px] w-[1px] h-2 bg-cyan-400 z-20 pointer-events-none"></div>
                  <div className="absolute -bottom-[1px] -right-[1px] w-2 h-[1px] bg-fuchsia-500 z-20 pointer-events-none"></div>
                  <div className="absolute -bottom-[1px] -right-[1px] w-[1px] h-2 bg-fuchsia-500 z-20 pointer-events-none"></div>

                  {/* PERBAIKAN: Input field font diperbesar */}
                  <input 
                    type="email" 
                    name="EMAIL" 
                    placeholder="ENTER COMM LINK (EMAIL)" 
                    required
                    className="w-full bg-black/50 border border-zinc-600 sm:border-r-0 focus:border-cyan-400 text-white font-mono text-sm md:text-base px-6 py-5 outline-none transition-colors backdrop-blur-sm placeholder:text-zinc-500 tracking-widest"
                  />
                  {/* PERBAIKAN: Tombol submit font diperbesar */}
                  <button 
                    type="submit"
                    className="relative shrink-0 font-mono uppercase text-sm md:text-base font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-400 mt-2 sm:mt-0 px-10 py-5 hover:bg-cyan-400 active:bg-cyan-400 hover:text-black active:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] tracking-[0.2em] overflow-hidden group-hover:border-cyan-400"
                  >
                    <span className="relative z-10">STAND BY</span>
                  </button>
                </form>

                <div className="flex items-center gap-6 mt-2">
                  <button 
                    onClick={() => setShowEmailForm(false)}
                    className="group relative font-mono uppercase text-xs sm:text-sm font-bold text-zinc-500 hover:text-fuchsia-400 transition-colors tracking-[0.2em] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-700 group-hover:bg-fuchsia-500 transition-colors"></span>
                    ABORT / BACK
                    <span className="w-1.5 h-1.5 bg-zinc-700 group-hover:bg-fuchsia-500 transition-colors"></span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="w-full max-w-3xl mx-auto mb-10 md:mb-12 px-2">
          <div className="flex items-center gap-3 md:gap-4 justify-center mb-6 md:mb-8 opacity-80">
            <div className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-cyan-500/50"></div>
            {/* PERBAIKAN: Font "Comms Network" diperbesar */}
            <span className="font-mono text-xs md:text-sm text-cyan-500 tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">Comms Network</span>
            <div className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-fuchsia-500/50"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mx-auto">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="w-12 h-12 md:w-16 md:h-16 relative group z-10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:-translate-y-0 active:scale-90 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-zinc-900 to-fuchsia-500/20 group-hover:from-cyan-400 group-active:from-cyan-400 group-hover:via-fuchsia-500/30 group-active:via-fuchsia-500/40 group-hover:to-fuchsia-400 group-active:to-fuchsia-400 transition-all duration-500 opacity-80 group-hover:opacity-100 group-active:opacity-100 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] group-active:shadow-[0_0_25px_rgba(217,70,239,0.6)] rounded-sm"></div>
                
                <div className="absolute inset-[1px] bg-zinc-950 group-hover:bg-black group-active:bg-black transition-colors duration-500 rounded-sm"></div>

                <div className="absolute top-[1px] left-[1px] w-2 h-[2px] bg-zinc-800 group-hover:bg-cyan-400 group-active:bg-cyan-400 transition-colors duration-500 z-20"></div>
                <div className="absolute top-[1px] left-[1px] w-[2px] h-2 bg-zinc-800 group-hover:bg-cyan-400 group-active:bg-cyan-400 transition-colors duration-500 z-20"></div>
                <div className="absolute bottom-[1px] right-[1px] w-2 h-[2px] bg-zinc-800 group-hover:bg-fuchsia-400 group-active:bg-fuchsia-400 transition-colors duration-500 z-20"></div>
                <div className="absolute bottom-[1px] right-[1px] w-[2px] h-2 bg-zinc-800 group-hover:bg-fuchsia-400 group-active:bg-fuchsia-400 transition-colors duration-500 z-20"></div>

                <span className="text-zinc-500 group-hover:text-white group-active:text-white transition-colors duration-300 relative z-30 drop-shadow-none group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border border-zinc-900 bg-black/50 px-5 md:px-8 py-3 md:py-4 inline-block relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* PERBAIKAN: Font motto diperbesar */}
          <p className="font-mono text-zinc-500 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-500">
            Calm. Controlled. Dominant.
          </p>
        </div>
      </motion.div>

      <motion.div
        {...motionProps}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center font-mono text-zinc-600 border-t border-zinc-900/80 pt-6 md:pt-8 gap-4 md:gap-0"
      >
        {/* PERBAIKAN: Font copyright diperbesar */}
        <p className="text-[10px] md:text-xs uppercase tracking-widest hover:text-cyan-500 transition-colors text-center md:text-left">
          &copy; {new Date().getFullYear()} CTRLRCLUB. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4 md:gap-6">
          <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase hover:text-white transition-colors">SYS.V: 2.5.1</p>
          <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-cyan-600 font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse rounded-full shadow-[0_0_5px_rgba(34,211,238,0.8)]"></span>
            NET: SECURE
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;