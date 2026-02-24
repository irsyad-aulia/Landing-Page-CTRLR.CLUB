"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint } from 'lucide-react';

const AccessControlSection = () => {
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  return (
    <section id="access" className="w-full max-w-4xl mx-auto py-24 px-4 text-center">
      <motion.div {...motionProps}>
        <Fingerprint className="w-12 h-12 text-cyan-400 mx-auto" />
        <h2 className="font-montserrat text-4xl font-black text-white uppercase mt-6">Access Control</h2>
        <p className="font-space-grotesk text-zinc-400 mt-4 max-w-2xl mx-auto">
          Biometric and multi-factor authentication protocols are required for all system interactions. Unauthorized access attempts are logged and trigger immediate alerts.
        </p>
      </motion.div>
      <motion.div {...motionProps} transition={{ delay: 0.2 }}>
        <button className="mt-8 font-space-grotesk uppercase text-sm font-bold bg-cyan-500 text-zinc-950 px-6 py-3 rounded-md hover:bg-cyan-400 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          Request Access Key
        </button>
      </motion.div>
    </section>
  );
};

export default AccessControlSection;
