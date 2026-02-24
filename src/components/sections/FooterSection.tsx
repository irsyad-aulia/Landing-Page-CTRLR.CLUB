"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="w-full border-t border-zinc-800 py-8 px-4">
      <motion.div 
        {...motionProps}
        className="max-w-6xl mx-auto text-center font-space-grotesk text-zinc-500"
      >
        <p>&copy; {new Date().getFullYear()} CTRLR.CLUB. All Rights Reserved.</p>
        <p className="text-xs mt-2">System Version 2.5.1 - Status: NOMINAL</p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
