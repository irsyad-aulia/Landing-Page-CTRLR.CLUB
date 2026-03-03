"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lock } from 'lucide-react';

const RoadmapSection = () => {
  const motionProps: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const phases = [
    { title: 'SOCIAL COMPARISON', description: 'Deployment of Crew mechanics and competitive leaderboards.', status: 'ENCRYPTED // PENDING' },
    { title: 'ADVANCED MODULES', description: 'Integration of hyper-specific reflex conditioning protocols.', status: 'ENCRYPTED // PENDING' },
    { title: 'EXTENDED ANALYTICS', description: 'Deep-dive behavioral mapping and longitudinal performance tracking.', status: 'ENCRYPTED // PENDING' },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="roadmap" className="w-full max-w-6xl mx-auto py-24 md:py-32 px-4 relative z-10 bg-black overflow-hidden">
      
      {/* Background Telemetry Scanline */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent"></div>

      <motion.div {...motionProps} className="flex flex-col items-start w-full mb-20 border-l-2 border-cyan-500 pl-6 relative">
        <div className="absolute top-0 -left-[2px] w-[2px] h-4 bg-cyan-400"></div>
        <div className="absolute bottom-0 -left-[2px] w-[2px] h-4 bg-fuchsia-500"></div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></div>
          <p className="font-mono text-cyan-500 text-[10px] md:text-xs tracking-[0.3em] uppercase">Roadmap</p>
        </div>
        <h2 className="font-montserrat text-3xl md:text-5xl font-black text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.1)] mb-4">
          DEPLOYMENT PIPELINE
        </h2>
        <p className="font-mono text-xs md:text-sm text-zinc-400 tracking-[0.1em] uppercase">
          Future system expansions. Classified until authorized.
        </p>
      </motion.div>
      
      <div ref={containerRef} className="relative md:px-0 px-2">
        {/* Jalur Statis Background */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-900/80 -translate-x-1/2 border-l border-r border-black"></div>
        
        {/* Jalur Data Stream Mengalir (Cyan to Magenta) */}
        {isClient && (
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 flex justify-start flex-col overflow-hidden z-0">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.8)] relative"
            >
              {/* Kilauan energi di ujung bawah garis yang mengalir */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-white rounded-full blur-[2px] shadow-[0_0_10px_#fff]"></div>
            </motion.div>
          </div>
        )}
        
        <div className="space-y-12 md:space-y-20 relative z-10">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              {...motionProps}
              transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
              className="relative flex items-center gap-8 md:gap-12 group"
            >
              {/* Node Center Matrix */}
              <div className="absolute left-6 md:left-1/2 top-1/2 w-5 h-5 md:-translate-x-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20 bg-black border border-zinc-800 group-hover:border-cyan-400 transition-colors duration-500 shadow-[0_0_10px_rgba(0,0,0,1)]">
                <div className="w-1.5 h-1.5 bg-zinc-800 transition-all duration-500 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,1)]" />
              </div>
              
              <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16 md:mr-auto' : 'md:pl-16 md:ml-auto md:order-2'}`}>
                
                {/* Kartu Modul */}
                <motion.div 
                  className={`relative bg-black border border-zinc-900/60 p-6 md:p-8 transition-all duration-500 overflow-hidden hover:bg-zinc-950 hover:shadow-[0_0_30px_rgba(217,70,239,0.05)] ${index % 2 === 0 ? 'md:items-end flex flex-col' : 'items-start flex flex-col'}`}
                >
                  {/* Neon Accents */}
                  <div className="absolute top-0 left-0 w-3 h-[1px] bg-zinc-800 group-hover:bg-cyan-400 transition-colors duration-500"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-3 bg-zinc-800 group-hover:bg-cyan-400 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-zinc-800 group-hover:bg-fuchsia-500 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-zinc-800 group-hover:bg-fuchsia-500 transition-colors duration-500"></div>

                  <div className={`font-mono text-[10px] tracking-[0.2em] uppercase mb-5 flex items-center gap-3 border border-zinc-800/50 bg-black px-4 py-2 group-hover:border-fuchsia-500/30 transition-colors duration-500 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <Lock className="w-3 h-3 text-zinc-600 group-hover:text-fuchsia-500 transition-colors duration-500" />
                    <span className="text-zinc-600 font-bold group-hover:text-fuchsia-400 transition-colors duration-500">{phase.status}</span>
                  </div>
                  
                  <h3 className="font-mono text-base md:text-xl font-bold text-zinc-500 group-hover:text-cyan-100 transition-colors duration-500 tracking-widest uppercase mb-3 break-words w-full group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                    {phase.title}
                  </h3>
                  
                  <p className={`font-space-grotesk text-sm text-zinc-600 group-hover:text-zinc-300 transition-colors duration-500 leading-relaxed uppercase tracking-wider font-medium break-words w-full ${index % 2 === 0 ? 'md:text-right text-left' : 'text-left'}`}>
                    {phase.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;