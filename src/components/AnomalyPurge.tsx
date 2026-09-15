'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  isReady: boolean;
}

export default function AnomalyPurge({ isReady }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [purgedCount, setPurgedCount] = useState(0);

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

    // The diamond is at the center. Radius is roughly 15% of min(width, height)
    const CORE_RADIUS = Math.min(width, height) * 0.15;
    let localPurged = 0;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number = 1;
      color: string;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.color = color;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 0.05;
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.life <= 0) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.life;
        ctx.fillRect(this.x, this.y, 4, 4);
        ctx.globalAlpha = 1;
      }
    }

    class Anomaly {
      x: number;
      y: number;
      radius: number = 15;
      life: number = 100; // frames until it infects
      maxLife: number = 100;
      active: boolean = true;
      glitchOffset: number = 0;
      type: number;

      constructor() {
        this.type = Math.floor(Math.random() * 4);
        // Spawn on the border of the core
        const angle = Math.random() * Math.PI * 2;
        // Jitter the radius slightly to look like it's on the surface
        const spawnRadius = CORE_RADIUS + (Math.random() * 30 - 15);
        this.x = width / 2 + Math.cos(angle) * spawnRadius;
        this.y = height / 2 + Math.sin(angle) * spawnRadius;
        
        // Speed up life decay based on purged count to increase difficulty
        const speedMultiplier = 1 + (localPurged * 0.05);
        this.life = 100 / speedMultiplier;
        this.maxLife = this.life;
      }

      update() {
        this.life -= 1;
        if (this.life <= 0) {
          this.active = false; // System infected (missed)
        }
        if (Math.random() > 0.8) {
          this.glitchOffset = (Math.random() - 0.5) * 6;
        } else {
          this.glitchOffset = 0;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (!this.active) return;
        
        const urgency = 1 - (this.life / this.maxLife); // 0 to 1
        
        ctx.save();
        ctx.translate(this.x + this.glitchOffset, this.y);
        
        // Pulsing scale
        const scale = 1 + Math.sin(Date.now() / 100) * 0.2;
        ctx.scale(scale, scale);

        ctx.fillStyle = `rgba(255, 0, 50, ${0.6 + urgency * 0.4})`;
        ctx.shadowColor = '#ff0033';
        ctx.shadowBlur = 15 + urgency * 20;
        
        if (this.type === 0) {
          // Spiky Virus
          ctx.beginPath();
          for (let i = 0; i < 12; i++) {
            const a = (i / 12) * Math.PI * 2 + Date.now()/500;
            const r = (i % 2 === 0) ? this.radius * 0.8 : this.radius * 1.6;
            ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
          }
          ctx.closePath();
          ctx.fill();
          
          ctx.fillStyle = 'white';
          ctx.shadowBlur = 0;
          ctx.beginPath();
          ctx.arc(0, 0, this.radius/2, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 1) {
          // Digital Bug/Hexagon
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2 + Date.now()/1000;
            ctx.lineTo(Math.cos(a) * this.radius * 1.5, Math.sin(a) * this.radius * 1.5);
          }
          ctx.closePath();
          ctx.fill();
          
          ctx.fillStyle = 'black';
          ctx.shadowBlur = 0;
          ctx.fillRect(-this.radius/2, -this.radius/3, this.radius/2.5, this.radius/2.5);
          ctx.fillRect(this.radius/2 - this.radius/2.5, -this.radius/3, this.radius/2.5, this.radius/2.5);
        } else if (this.type === 2) {
          // Hazard Triangle
          ctx.beginPath();
          ctx.moveTo(0, -this.radius * 1.6);
          ctx.lineTo(this.radius * 1.4, this.radius);
          ctx.lineTo(-this.radius * 1.4, this.radius);
          ctx.closePath();
          ctx.fill();
          
          ctx.fillStyle = 'black';
          ctx.shadowBlur = 0;
          ctx.fillRect(-2.5, -this.radius/2, 5, this.radius);
          ctx.fillRect(-2.5, this.radius/2 + 4, 5, 5);
        } else {
          // Corrupted File
          ctx.fillRect(-this.radius*1.2, -this.radius, this.radius*2.4, this.radius*2);
          ctx.fillStyle = 'black';
          ctx.shadowBlur = 0;
          for(let i=0; i<3; i++) {
             ctx.fillRect(-this.radius*1.5, -this.radius/2 + i*8 + (Math.random()*4-2), this.radius*3, 2);
          }
          ctx.font = 'bold 10px monospace';
          ctx.fillStyle = 'white';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('ERR', 0, 0);
        }

        // Warning bracket []
        ctx.strokeStyle = 'cyan';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        const br = this.radius + 8;
        ctx.moveTo(-br - 6, -br);
        ctx.lineTo(-br - 6, br);
        ctx.moveTo(br + 6, -br);
        ctx.lineTo(br + 6, br);
        ctx.stroke();

        ctx.restore();

        // Draw timer line connecting to core
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(width/2, height/2);
        ctx.strokeStyle = `rgba(255, 0, 50, ${urgency})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    let anomalies: Anomaly[] = [];
    let particles: Particle[] = [];
    let spawnTimer = 0;
    
    // Crosshair position
    let pointerX = width / 2;
    let pointerY = height / 2;

    const handlePointerMove = (e: PointerEvent) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
    };

    const handleAction = (e?: Event) => {
      if (e && e.type !== 'pointerdown') {
         e.preventDefault(); 
      }
      
      let hit = false;

      // Check collision with anomalies
      for (let i = anomalies.length - 1; i >= 0; i--) {
        const a = anomalies[i];
        const dist = Math.hypot(pointerX - a.x, pointerY - a.y);
        
        // Hit radius is generous (40px)
        if (dist < 40) {
          anomalies.splice(i, 1);
          hit = true;
          localPurged++;
          setPurgedCount(localPurged);
          
          // Spawn cleanse particles (Cyan)
          for(let p=0; p<15; p++) {
            particles.push(new Particle(a.x, a.y, '#22d3ee'));
            particles.push(new Particle(a.x, a.y, '#ffffff'));
          }
        }
      }

      if (!hit && e?.type === 'pointerdown') {
        // Missed tap particle (Red)
        for(let p=0; p<5; p++) {
          particles.push(new Particle(pointerX, pointerY, '#ff0033'));
        }
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handleAction);

    let animationId: number;

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw scanner grid zone (passive)
      ctx.beginPath();
      ctx.arc(width/2, height/2, CORE_RADIUS + 30, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.1)';
      ctx.setLineDash([2, 10]);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);

      // Spawn anomalies
      spawnTimer++;
      // Spawn faster as level increases
      const spawnRate = Math.max(30, 100 - localPurged * 2);
      if (spawnTimer > spawnRate) { 
         anomalies.push(new Anomaly());
         spawnTimer = Math.random() * -20; // random delay
      }

      for (let i = anomalies.length - 1; i >= 0; i--) {
        anomalies[i].update();
        anomalies[i].draw(ctx);
        if (!anomalies[i].active) {
          // It infected the core! 
          // Explode into red particles
          for(let p=0; p<10; p++) {
            particles.push(new Particle(anomalies[i].x, anomalies[i].y, '#ff0033'));
          }
          anomalies.splice(i, 1);
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      // Draw custom targeting crosshair
      ctx.beginPath();
      ctx.arc(pointerX, pointerY, 15, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(pointerX - 20, pointerY);
      ctx.lineTo(pointerX + 20, pointerY);
      ctx.moveTo(pointerX, pointerY - 20);
      ctx.lineTo(pointerX, pointerY + 20);
      ctx.strokeStyle = 'cyan';
      ctx.stroke();

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handleAction);
      cancelAnimationFrame(animationId);
    };
  }, [isReady]);

  if (isReady) return null;

  return (
    <div className="fixed inset-0 z-[250] pointer-events-auto touch-none overflow-hidden cursor-none">
      <canvas ref={canvasRef} className="w-full h-full" />
      
      {/* UI Elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none w-full">
        <div className="text-cyan-400/80 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-2 opacity-70 animate-pulse">
          WARNING: ANOMALIES DETECTED ON CORE SURFACE
        </div>
        <div className="text-white font-mono text-xl md:text-2xl font-bold tracking-[0.2em] drop-shadow-[0_0_10px_white]">
          PURGED: {purgedCount}
        </div>
        <div className="mt-4 text-cyan-400/60 font-mono text-[10px] md:text-xs tracking-widest uppercase text-center px-4 max-w-sm">
          &lt; TAP THE RED INFECTIONS BEFORE THEY BREACH &gt;
        </div>
      </div>
    </div>
  );
}
