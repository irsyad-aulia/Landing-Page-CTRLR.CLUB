"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Layers, Code } from 'lucide-react';

const SystemFunctionsSection = () => {
  const motionProps: any = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  return (
    <section id="functions" className="w-full max-w-6xl mx-auto py-16 md:py-24 px-4 overflow-hidden">
       <motion.div {...motionProps} className="flex flex-col items-center w-full">
        <h2 className="font-montserrat text-2xl md:text-4xl font-black text-white text-center uppercase break-words w-full">System Functions</h2>
        <p className="font-space-grotesk text-zinc-400 text-center mt-2 text-sm md:text-base break-words max-w-full">Primary operational controls and modules.</p>
      </motion.div>
      
      <div className="mt-10 md:mt-12 flex flex-col md:flex-row gap-8 items-center">
        <motion.div {...motionProps} className="w-full md:w-1/2">
          <div className="relative aspect-video bg-zinc-900 border border-zinc-800 rounded-lg p-4 sm:p-6 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div className="absolute top-3 left-3 flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
            </div>
            
            <div className="mt-6 md:mt-8 font-mono text-[11px] sm:text-xs md:text-sm text-green-400 break-words whitespace-pre-wrap">
              <p>&gt; CTRLR.init(module: &apos;all&apos;)</p>
              <p className="text-zinc-500">// Initializing all system modules...</p>
              <p className="mt-2 text-cyan-400">[OK] Module &apos;Auth&apos; initialized.</p>
              <p className="text-cyan-400">[OK] Module &apos;API&apos; initialized.</p>
              <p className="text-cyan-400">[OK] Module &apos;Storage&apos; initialized.</p>
              <p className="mt-2 text-green-400 drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]"> &gt; System ready.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div {...motionProps} transition={{ delay: 0.2 }} className="w-full md:w-1/2">
          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-3 md:gap-4 items-start">
              <SlidersHorizontal className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 mt-1 shrink-0" />
              <div className="min-w-0 flex-1">
                <h3 className="font-space-grotesk text-lg md:text-xl font-bold text-white break-words">Parameter Control</h3>
                <p className="font-space-grotesk text-sm md:text-base text-zinc-400 mt-1 break-words leading-relaxed">Fine-tune operational parameters in real-time with a granular control interface.</p>
              </div>
            </div>
            <div className="flex gap-3 md:gap-4 items-start">
              <Layers className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 mt-1 shrink-0" />
              <div className="min-w-0 flex-1">
                <h3 className="font-space-grotesk text-lg md:text-xl font-bold text-white break-words">Modular Architecture</h3>
                <p className="font-space-grotesk text-sm md:text-base text-zinc-400 mt-1 break-words leading-relaxed">Easily enable, disable, or configure system modules to adapt to mission requirements.</p>
              </div>
            </div>
            <div className="flex gap-3 md:gap-4 items-start">
              <Code className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 mt-1 shrink-0" />
              <div className="min-w-0 flex-1">
                <h3 className="font-space-grotesk text-lg md:text-xl font-bold text-white break-words">API Integration</h3>
                <p className="font-space-grotesk text-sm md:text-base text-zinc-400 mt-1 break-words leading-relaxed">Connect external services and data sources through a secure and well-documented API.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemFunctionsSection;