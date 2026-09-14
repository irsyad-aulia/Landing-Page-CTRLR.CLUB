'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  isReady: boolean;
}

export default function CyberKatana({ isReady }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);

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

    // GAME STATE
    let targets: Target[] = [];
    let trail: {x: number, y: number, life: number}[] = [];
    let isDragging = false;
    let scoreLocal = 0;

    class Target {
      x: number;
      y: number;
      vx: number;
      vy: number;
      width: number = 120;
      height: number = 30;
      text: string;
      isSliced: boolean = false;
      sliceVelocityX: number = 0;
      sliceVelocityY: number = 0;
      rotation: number = 0;
      rotSpeed: number;

      constructor() {
        this.x = Math.random() * (width - 200) + 100;
        this.y = height + 50; // spawn below screen
        this.vx = (Math.random() - 0.5) * 5; // move left/right
        
        // Randomize throw power based on screen height
        const throwPower = height > 800 ? 18 : 14; 
        this.vy = -(Math.random() * 5 + throwPower); 
        
        this.rotSpeed = (Math.random() - 0.5) * 0.1;
        
        const texts = ['[ERROR_0x9]', '[THREAT]', 'MALWARE.exe', 'SYSTEM_FAIL', '[BUG]'];
        this.text = texts[Math.floor(Math.random() * texts.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.35; // Gravity
        this.rotation += this.rotSpeed;

        if (this.isSliced) {
          this.x += this.sliceVelocityX;
          this.y += this.sliceVelocityY;
          this.vy += 0.5; // Sliced parts fall faster
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Random glitch offset for hologram effect
        const isGlitch = Math.random() > 0.92;
        const glitchX = isGlitch ? (Math.random() - 0.5) * 8 : 0;
        ctx.translate(glitchX, 0);

        if (this.isSliced) {
          // Draw two broken halves with glitch border
          ctx.fillStyle = 'rgba(255, 0, 50, 0.2)';
          ctx.strokeStyle = 'rgba(255, 0, 50, 0.6)';
          ctx.lineWidth = 1;

          ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height/2 - 2);
          ctx.strokeRect(-this.width/2, -this.height/2, this.width, this.height/2 - 2);

          ctx.fillRect(-this.width/2, 2, this.width, this.height/2 - 2);
          ctx.strokeRect(-this.width/2, 2, this.width, this.height/2 - 2);
        } else {
          // Holographic Glitch Block
          
          // 1. Cyan ghost offset (RGB Split)
          if (isGlitch) {
             ctx.fillStyle = 'rgba(34, 211, 238, 0.4)'; // Cyan
             ctx.fillRect(-this.width/2 - 3, -this.height/2, this.width, this.height);
          }
          
          // 2. Main Red holographic box with border
          ctx.fillStyle = 'rgba(255, 0, 50, 0.25)';
          ctx.strokeStyle = 'rgba(255, 0, 50, 0.9)';
          ctx.lineWidth = 1.5;
          ctx.shadowColor = '#ff0033';
          ctx.shadowBlur = 10;
          ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
          ctx.strokeRect(-this.width/2, -this.height/2, this.width, this.height);

          // 3. Scanlines (Horizontal stripes) for holo effect
          ctx.shadowBlur = 0;
          ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
          for(let i = -this.height/2 + 2; i < this.height/2; i += 4) {
            ctx.fillRect(-this.width/2, i, this.width, 2);
          }
          
          // 4. Hacker text inside
          ctx.fillStyle = 'white';
          ctx.font = 'bold 15px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(this.text, 0, 0);
          
          // 5. Glitch text overlay (RGB Split for text)
          if (isGlitch) {
             ctx.fillStyle = 'cyan';
             ctx.fillText(this.text, -2, 1);
             ctx.fillStyle = 'fuchsia';
             ctx.fillText(this.text, 2, -1);
          }
        }
        ctx.restore();
      }
    }

    let spawnTimer = 0;
    
    // INPUT HANDLING
    const addTrailPoint = (x: number, y: number) => {
      trail.push({ x, y, life: 1.0 });
      checkSlice(x, y);
    };

    const checkSlice = (px: number, py: number) => {
      for (let t of targets) {
        if (!t.isSliced) {
          const dx = px - t.x;
          const dy = py - t.y;
          // Radius based collision (60px radius)
          if (Math.sqrt(dx*dx + dy*dy) < 60) {
             t.isSliced = true;
             // Explosion physics
             t.sliceVelocityX = t.vx + (Math.random() - 0.5) * 15;
             t.sliceVelocityY = t.vy - 5;
             
             scoreLocal += 100;
             setScore(scoreLocal);
          }
        }
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      addTrailPoint(e.clientX, e.clientY);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        addTrailPoint(e.clientX, e.clientY);
      }
    };
    const onPointerUp = () => {
      isDragging = false;
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    let animationId: number;

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      // Spawn logic (starts slow, gets slightly faster)
      spawnTimer++;
      if (spawnTimer > 50) { 
         targets.push(new Target());
         spawnTimer = Math.random() * 20; // Add randomness to spawn rate
      }

      // Update and Draw Targets
      for (let i = targets.length - 1; i >= 0; i--) {
        targets[i].update();
        targets[i].draw(ctx);
        // Clean up memory if fallen off screen
        if (targets[i].y > height + 100) {
          targets.splice(i, 1);
        }
      }

      // Draw Sword Trail
      if (trail.length > 0) {
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let i = 1; i < trail.length; i++) {
          ctx.lineTo(trail[i].x, trail[i].y);
        }
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = '#22d3ee'; // Cyan neon blade
        ctx.lineWidth = 6;
        ctx.shadowColor = '#22d3ee';
        ctx.shadowBlur = 20;
        ctx.stroke();

        // Decay trail thickness/life
        for (let i = trail.length - 1; i >= 0; i--) {
          trail[i].life -= 0.15; // Fast decay for sharp sword effect
          if (trail[i].life <= 0) {
            trail.splice(i, 1);
          }
        }
      }

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      cancelAnimationFrame(animationId);
    };
  }, [isReady]);

  if (isReady) return null;

  return (
    <div className="fixed inset-0 z-[250] pointer-events-auto touch-none">
      <canvas ref={canvasRef} className="w-full h-full" />
      
      {/* UI Elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        <div className="text-cyan-400 font-mono text-2xl md:text-3xl font-bold tracking-[0.2em] drop-shadow-[0_0_10px_cyan]">
          SCORE: {score}
        </div>
        <div className="mt-2 text-cyan-400/60 font-mono text-[10px] md:text-xs tracking-widest uppercase animate-pulse">
          &lt; DRAG TO SLICE THREATS &gt;
        </div>
      </div>
    </div>
  );
}
