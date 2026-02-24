"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Layers, Code } from 'lucide-react';

const SystemFunctionsSection = () => {
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  return (
    <section id="functions" className="w-full max-w-6xl mx-auto py-24 px-4">
       <motion.div {...motionProps}>
        <h2 className="font-montserrat text-4xl font-black text-white text-center uppercase">System Functions</h2>
        <p className="font-space-grotesk text-zinc-400 text-center mt-2">Primary operational controls and modules.</p>
      </motion.div>
      <div className="mt-12 flex flex-col md:flex-row gap-8 items-center">
        <motion.div {...motionProps} className="w-full md:w-1/2">
          <div className="relative aspect-video bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <div className="absolute top-2 left-2 flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mt-8 font-mono text-sm text-green-400">
              <p>&gt; CTRLR.init(module: 'all')</p>
              <p className="text-zinc-500">// Initializing all system modules...</p>
              <p className="mt-2 text-cyan-400">[OK] Module 'Auth' initialized.</p>
              <p className="text-cyan-400">[OK] Module 'API' initialized.</p>
              <p className="text-cyan-400">[OK] Module 'Storage' initialized.</p>
              <p className="mt-2 text-green-400"> &gt; System ready.</p>
            </div>
          </div>
        </motion.div>
        <motion.div {...motionProps} transition={{ delay: 0.2 }} className="w-full md:w-1/2">
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <SlidersHorizontal className="w-6 h-6 text-cyan-400 mt-1" />
              <div>
                <h3 className="font-space-grotesk text-xl font-bold text-white">Parameter Control</h3>
                <p className="font-space-grotesk text-zinc-400 mt-1">Fine-tune operational parameters in real-time with a granular control interface.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Layers className="w-6 h-6 text-cyan-400 mt-1" />
              <div>
                <h3 className="font-space-grotesk text-xl font-bold text-white">Modular Architecture</h3>
                <p className="font-space-grotesk text-zinc-400 mt-1">Easily enable, disable, or configure system modules to adapt to mission requirements.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Code className="w-6 h-6 text-cyan-400 mt-1" />
              <div>
                <h3 className="font-space-grotesk text-xl font-bold text-white">API Integration</h3>
                <p className="font-space-grotesk text-zinc-400 mt-1">Connect external services and data sources through a secure and well-documented API.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemFunctionsSection;
