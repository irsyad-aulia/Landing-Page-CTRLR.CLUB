import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black -z-[100] pointer-events-none overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 mix-blend-screen"
      >
        <source src="/assets/CTRLR_Holo_System_Active_Loop.webm" type="video/webm" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black z-10 pointer-events-none"></div>
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-screen mask-image-[radial-gradient(ellipse_at_center,black_20%,transparent_80%)] z-20 pointer-events-none"></div>
    </div>
  );
};

export default BackgroundVideo;