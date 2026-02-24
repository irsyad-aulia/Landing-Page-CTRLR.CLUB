"use client";

import React from 'react';

const BackgroundVideo = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 object-cover -z-50 pointer-events-none"
        style={{ width: '100vw', height: '100vh' }}
      >
        <source src="/assets/bg-loop.mp4" type="video/mp4" />
      </video>
      
      <div 
        className="fixed top-0 left-0 bg-zinc-950/85 -z-40 pointer-events-none"
        style={{ width: '100vw', height: '100vh' }}
      ></div>
    </>
  );
};

export default BackgroundVideo;