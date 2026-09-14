'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  isReady: boolean;
}

export default function CalibrationScanner({ isReady }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [calibrations, setCalibrations] = useState(0);

  useEffect(() => {
    if (isReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // Approximate size of the center diamond 
    // It is roughly 15% of the screen height based on previous CSS
    const TARGET_RADIUS = Math.min(width, height) * 0.15; 
    let localCals = 0;

    class Ring {
      radius: number = Math.max(width, height) * 0.8;
      speed: number = 3 + Math.random() * 2;
      active: boolean = true;
      status: 'incoming' | 'perfect' | 'miss' = 'incoming';
      alpha: number = 1;
      
      update() {
        if (this.status === 'incoming') {
          this.radius -= this.speed;
          // If it shrinks too far past the target
          if (this.radius < TARGET_RADIUS - 20) {
            this.status = 'miss';
          }
        } else {
          this.alpha -= 0.05; // Fade out rapidly on hit/miss
          this.radius += 2; // Expand slightly for visual pop
          if (this.alpha <= 0) {
            this.active = false;
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.alpha <= 0) return;
        
        ctx.beginPath();
        ctx.arc(width/2, height/2, Math.max(0, this.radius), 0, Math.PI * 2);
        
        if (this.status === 'incoming') {
          ctx.strokeStyle = `rgba(34, 211, 238, ${this.alpha})`;
          ctx.lineWidth = 2;
          ctx.shadowColor = '#22d3ee';
          ctx.shadowBlur = 10;
        } else if (this.status === 'perfect') {
          ctx.strokeStyle = `rgba(34, 211, 238, ${this.alpha})`;
          ctx.lineWidth = 6;
          ctx.shadowColor = '#22d3ee';
          ctx.shadowBlur = 30;
          ctx.fillStyle = `rgba(34, 211, 238, ${this.alpha * 0.2})`;
          ctx.fill();
        } else if (this.status === 'miss') {
          ctx.strokeStyle = `rgba(255, 0, 50, ${this.alpha})`;
          ctx.lineWidth = 2;
          ctx.shadowColor = '#ff0033';
          ctx.shadowBlur = 10;
        }
        
        ctx.stroke();
      }
    }

    let rings: Ring[] = [];
    let spawnTimer = 0;
    
    // Feedback text
    let feedback = "";
    let feedbackAlpha = 0;

    const handleAction = (e?: Event) => {
      // Prevent default to stop scrolling if user uses spacebar
      if (e && e.type !== 'pointerdown') {
         e.preventDefault(); 
      }
      
      // Find the smallest active incoming ring
      let targetRing = null;
      let minR = Infinity;
      for (let r of rings) {
        if (r.status === 'incoming' && r.radius < minR) {
           minR = r.radius;
           targetRing = r;
        }
      }
      
      if (targetRing) {
         // Check accuracy (within 25px radius margin)
         const diff = Math.abs(targetRing.radius - TARGET_RADIUS);
         if (diff < 25) {
            targetRing.status = 'perfect';
            localCals++;
            setCalibrations(localCals);
            feedback = "CALIBRATION ALIGNED";
            feedbackAlpha = 1;
         } else {
            targetRing.status = 'miss';
            feedback = "CALIBRATION FAILED";
            feedbackAlpha = 1;
         }
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        handleAction(e);
      }
    };
    
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', handleAction);

    let animationId: number;

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Target Zone (Dotted line around the diamond)
      ctx.beginPath();
      ctx.arc(width/2, height/2, TARGET_RADIUS, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.setLineDash([4, 12]); // Dotted
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]); // Reset dash

      // Spawn rings
      spawnTimer++;
      if (spawnTimer > 80) { 
         rings.push(new Ring());
         spawnTimer = Math.random() * 40; 
      }

      for (let i = rings.length - 1; i >= 0; i--) {
        rings[i].update();
        rings[i].draw(ctx);
        if (!rings[i].active) {
          rings.splice(i, 1);
        }
      }

      // Draw Feedback
      if (feedbackAlpha > 0) {
         ctx.fillStyle = feedback === "CALIBRATION ALIGNED" 
            ? `rgba(34, 211, 238, ${feedbackAlpha})` 
            : `rgba(255, 0, 50, ${feedbackAlpha})`;
         ctx.font = 'bold 16px monospace';
         ctx.textAlign = 'center';
         ctx.shadowBlur = 10;
         ctx.shadowColor = ctx.fillStyle;
         
         // Glitch offset for feedback
         const gx = (Math.random() - 0.5) * 4;
         ctx.fillText(feedback, width/2 + gx, height/2 - TARGET_RADIUS - 60);
         
         ctx.shadowBlur = 0;
         feedbackAlpha -= 0.02;
      }

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', handleAction);
      cancelAnimationFrame(animationId);
    };
  }, [isReady]);

  if (isReady) return null;

  return (
    <div className="fixed inset-0 z-[250] pointer-events-auto touch-none overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      
      {/* UI Elements */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none w-full">
        <div className="text-cyan-400/80 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 opacity-70">
          Scanning Core Frequencies
        </div>
        <div className="text-white font-mono text-xl md:text-2xl font-bold tracking-[0.2em] drop-shadow-[0_0_10px_white]">
          MATCHES: {calibrations}
        </div>
        <div className="mt-4 text-cyan-400/60 font-mono text-[10px] md:text-xs tracking-widest uppercase animate-pulse text-center px-4 max-w-sm">
          &lt; TAP THE SCREEN WHEN THE RING ALIGNS WITH THE DIAMOND BORDER &gt;
        </div>
      </div>
    </div>
  );
}
