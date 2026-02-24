"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const RoadmapSection = () => {
  const motionProps: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const phases = [
    { status: 'Complete', title: 'Phase 0: Core System Initialized', description: 'Foundation architecture and primary modules established.' },
    { status: 'In Progress', title: 'Phase 1: AI Integration', description: 'Deployment of predictive analytics and machine learning models.' },
    { status: 'Planned', title: 'Phase 2: Decentralization', description: 'Transition to a decentralized network for enhanced security.' },
    { status: 'Planned', title: 'Phase 3: Global Scaling', description: 'Expansion of system infrastructure to global nodes.' },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="roadmap" className="w-full max-w-6xl mx-auto pt-24 pb-[40vh] px-4 relative z-10 overflow-hidden">
      <motion.div {...motionProps} className="flex flex-col items-center w-full">
        <h2 className="font-montserrat text-2xl md:text-4xl font-black text-white text-center uppercase tracking-wider break-words w-full">
          Development Roadmap
        </h2>
        <p className="font-space-grotesk text-cyan-400/80 text-center mt-4 text-[10px] md:text-sm tracking-widest uppercase border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 rounded-full break-words max-w-full">
          Current and future development milestones
        </p>
      </motion.div>
      
      <div 
        ref={containerRef} 
        className="mt-16 relative md:px-0 px-2"
        style={{ position: 'relative' }}
      >
        
        {/* Garis Vertikal */}
        <div className="absolute left-6 md:left-1/2 top-16 bottom-16 w-0.5 bg-zinc-800 -translate-x-1/2"></div>
        <div className="absolute left-6 md:left-1/2 top-16 bottom-16 w-0.5 -translate-x-1/2 flex justify-start flex-col overflow-hidden">
          <motion.div 
            style={{ height: lineHeight }}
            className="w-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
          />
        </div>
        
        <div className="space-y-12 md:space-y-16">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              {...motionProps}
              transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
              className="relative flex items-center gap-4 md:gap-8"
            >
              <div className="absolute left-6 md:left-1/2 top-1/2 w-6 h-6 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 bg-zinc-950">
                <motion.div 
                  initial={{ backgroundColor: "#18181b", borderColor: "#3f3f46", boxShadow: "none" }}
                  whileInView={{ 
                    backgroundColor: "#22d3ee", 
                    borderColor: "#22d3ee", 
                    boxShadow: "0 0 15px rgba(6,182,212,0.8)" 
                  }}
                  viewport={{ once: false, margin: "0px 0px -50% 0px" }}
                  transition={{ duration: 0.2 }}
                  className="w-3.5 h-3.5 rounded-full border-2"
                />
              </div>
              
              <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto md:order-2'}`}>
                <motion.div 
                  initial={{ borderColor: "rgba(63, 63, 70, 0.5)", backgroundColor: "rgba(24, 24, 27, 0.6)" }}
                  whileInView={{ 
                    borderColor: "rgba(34, 211, 238, 0.4)",
                    backgroundColor: "rgba(34, 211, 238, 0.05)",
                    boxShadow: "0 0 20px rgba(6,182,212,0.1)" 
                  }}
                  viewport={{ once: false, margin: "0px 0px -50% 0px" }}
                  transition={{ duration: 0.3 }}
                  className={`group border-2 rounded-xl p-4 md:p-6 backdrop-blur-md transition-all duration-300 overflow-hidden ${index % 2 === 0 ? 'md:items-end flex flex-col' : 'items-start flex flex-col'}`}
                >
                  <span className={`font-space-grotesk text-[10px] md:text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-2 md:mb-3 inline-block break-words text-center ${phase.status === 'Complete' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : phase.status === 'In Progress' ? 'bg-zinc-800/80 text-cyan-300 border border-zinc-700' : 'bg-zinc-900 text-zinc-500 border border-zinc-800'}`}>
                    {phase.status}
                  </span>
                  <h3 className="font-space-grotesk text-base md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 break-words w-full">
                    {phase.title}
                  </h3>
                  <p className={`font-space-grotesk text-sm md:text-base text-zinc-400 mt-2 md:mt-3 leading-relaxed break-words w-full ${index % 2 === 0 ? 'md:text-right text-left' : 'text-left'}`}>
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