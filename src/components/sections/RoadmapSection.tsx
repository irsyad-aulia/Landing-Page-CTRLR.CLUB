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
    <section id="roadmap" className="w-full max-w-6xl mx-auto pt-16 md:pt-24 pb-[30vh] px-4 relative z-10 overflow-hidden">
      
      <motion.div {...motionProps} className="flex flex-col items-center w-full mb-16">
        <h2 className="font-montserrat text-2xl md:text-4xl font-black text-white text-center uppercase tracking-widest break-words w-full drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
          Development Roadmap
        </h2>
        <div className="flex items-center gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
          <p className="font-mono text-cyan-500/80 text-center text-[10px] md:text-xs tracking-[0.2em] uppercase">
            SYS.LOG // DEPLOYMENT_PHASES
          </p>
        </div>
      </motion.div>
      
      <div 
        ref={containerRef} 
        className="relative md:px-0 px-2"
        style={{ position: 'relative' }}
      >
        
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800 -translate-x-1/2"></div>
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 flex justify-start flex-col overflow-hidden">
          <motion.div 
            style={{ height: lineHeight }}
            className="w-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,1)]"
          />
        </div>
        
        <div className="space-y-8 md:space-y-12">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              {...motionProps}
              transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
              className="relative flex items-center gap-4 md:gap-8"
            >
              <div className="absolute left-6 md:left-1/2 top-1/2 w-8 h-8 rounded-none md:-translate-x-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 bg-black rotate-45 border border-zinc-800">
                <motion.div 
                  initial={{ backgroundColor: "#000", borderColor: "#3f3f46", boxShadow: "none" }}
                  whileInView={{ 
                    backgroundColor: phase.status === 'Complete' ? "#22d3ee" : phase.status === 'In Progress' ? "#d946ef" : "#18181b", 
                    borderColor: phase.status === 'Complete' ? "#22d3ee" : phase.status === 'In Progress' ? "#d946ef" : "#3f3f46", 
                    boxShadow: phase.status === 'Complete' ? "0 0 20px rgba(6,182,212,0.8)" : phase.status === 'In Progress' ? "0 0 20px rgba(217,70,239,0.8)" : "none" 
                  }}
                  viewport={{ once: false, margin: "0px 0px -50% 0px" }}
                  transition={{ duration: 0.2 }}
                  className="w-3 h-3 border border-zinc-700"
                />
              </div>
              
              <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16 md:mr-auto' : 'md:pl-16 md:ml-auto md:order-2'}`}>
                
                <motion.div 
                  initial={{ borderColor: "rgba(63, 63, 70, 0.3)", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  whileInView={{ 
                    borderColor: phase.status === 'Complete' ? "rgba(34, 211, 238, 0.3)" : phase.status === 'In Progress' ? "rgba(217, 70, 239, 0.3)" : "rgba(63, 63, 70, 0.3)",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  }}
                  viewport={{ once: false, margin: "0px 0px -50% 0px" }}
                  transition={{ duration: 0.3 }}
                  className={`group relative border rounded-sm p-5 md:p-6 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.8)] ${index % 2 === 0 ? 'md:items-end flex flex-col' : 'items-start flex flex-col'}`}
                >
                  <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l pointer-events-none transition-colors duration-300 ${phase.status === 'Complete' ? 'border-cyan-500' : phase.status === 'In Progress' ? 'border-fuchsia-500' : 'border-zinc-700'}`}></div>
                  <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r pointer-events-none transition-colors duration-300 ${phase.status === 'Complete' ? 'border-cyan-500' : phase.status === 'In Progress' ? 'border-fuchsia-500' : 'border-zinc-700'}`}></div>

                  <div className={`font-mono text-[10px] md:text-xs tracking-widest uppercase mb-3 flex items-center gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {phase.status === 'Complete' && <><span className="text-cyan-400 font-bold">[ OK ]</span><span className="text-zinc-500">EXEC_COMPLETE</span></>}
                    {phase.status === 'In Progress' && <><span className="text-fuchsia-400 font-bold animate-pulse">[ &gt; ]</span><span className="text-zinc-500">PROCESSING...</span></>}
                    {phase.status === 'Planned' && <><span className="text-zinc-600 font-bold">[ - ]</span><span className="text-zinc-700">AWAITING_INPUT</span></>}
                  </div>
                  
                  <h3 className="font-space-grotesk text-base md:text-xl font-bold text-white break-words w-full">
                    {phase.title}
                  </h3>
                  
                  <p className={`font-space-grotesk text-sm md:text-base text-zinc-400 mt-2 md:mt-3 leading-relaxed break-words w-full ${index % 2 === 0 ? 'md:text-right text-left' : 'text-left'}`}>
                    {phase.description}
                  </p>

                  {phase.status === 'In Progress' && (
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(217,70,239,0.03)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay"></div>
                  )}

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