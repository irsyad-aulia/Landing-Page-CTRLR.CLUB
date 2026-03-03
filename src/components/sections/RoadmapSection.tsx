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
      
      <motion.div {...motionProps} className="flex flex-col items-start w-full mb-20 border-l-2 border-zinc-700 pl-6 relative">
        <div className="absolute top-0 -left-[2px] w-[2px] h-4 bg-zinc-500"></div>
        <div className="absolute bottom-0 -left-[2px] w-[2px] h-4 bg-zinc-500"></div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 bg-zinc-600"></div>
          <p className="font-mono text-zinc-500 text-[10px] md:text-xs tracking-[0.3em] uppercase">Roadmap</p>
        </div>
        <h2 className="font-montserrat text-3xl md:text-5xl font-black text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] mb-4">
          DEPLOYMENT PIPELINE
        </h2>
        <p className="font-mono text-xs md:text-sm text-zinc-500 tracking-[0.1em] uppercase">
          Future system expansions. Classified until authorized.
        </p>
      </motion.div>
      
      <div ref={containerRef} className="relative md:px-0 px-2">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-900 -translate-x-1/2"></div>
        
        {isClient && (
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 flex justify-start flex-col overflow-hidden z-0">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            />
          </div>
        )}
        
        <div className="space-y-12 md:space-y-20 relative z-10">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              {...motionProps}
              transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
              className="relative flex items-center gap-8 md:gap-12"
            >
              <div className="absolute left-6 md:left-1/2 top-1/2 w-4 h-4 md:-translate-x-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20 bg-black border border-zinc-700">
                <div className="w-1.5 h-1.5 bg-zinc-800 transition-colors duration-300 group-hover:bg-cyan-500" />
              </div>
              
              <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16 md:mr-auto' : 'md:pl-16 md:ml-auto md:order-2'}`}>
                
                <motion.div 
                  className={`group relative bg-zinc-950/50 border border-zinc-900 p-6 md:p-8 transition-all duration-300 overflow-hidden hover:border-zinc-700 ${index % 2 === 0 ? 'md:items-end flex flex-col' : 'items-start flex flex-col'}`}
                >
                  <div className="absolute top-0 left-0 w-2 h-[1px] bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-2 bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-zinc-700 group-hover:bg-cyan-500 transition-colors"></div>

                  <div className={`font-mono text-[10px] tracking-[0.2em] uppercase mb-5 flex items-center gap-3 border border-zinc-800 bg-black px-4 py-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <Lock className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                    <span className="text-zinc-600 font-bold group-hover:text-zinc-400 transition-colors">{phase.status}</span>
                  </div>
                  
                  <h3 className="font-mono text-base md:text-xl font-bold text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-widest uppercase mb-3 break-words w-full">
                    {phase.title}
                  </h3>
                  
                  <p className={`font-space-grotesk text-sm text-zinc-600 group-hover:text-zinc-400 transition-colors leading-relaxed uppercase tracking-wider font-medium break-words w-full ${index % 2 === 0 ? 'md:text-right text-left' : 'text-left'}`}>
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