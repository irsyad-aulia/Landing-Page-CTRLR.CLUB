'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  isReady: boolean;
}

export default function NeonRunner({ isReady }: Props) {
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
    let localScore = 0;
    let isGameOver = false;
    let gameOverTimer = 0;
    
    // Position ground line near the bottom
    const groundY = height - Math.max(100, height * 0.15);

    class Player {
      x: number = width > 768 ? 150 : 80;
      y: number = groundY;
      width: number = 35;
      height: number = 35;
      vy: number = 0;
      gravity: number = 0.8;
      jumpPower: number = -15; // Slightly floaty cyberpunk jump
      isJumping: boolean = false;

      jump() {
        if (!this.isJumping) {
          this.vy = this.jumpPower;
          this.isJumping = true;
        }
      }

      update() {
        this.y += this.vy;
        if (this.y < groundY) {
          this.vy += this.gravity;
        } else {
          this.y = groundY;
          this.vy = 0;
          this.isJumping = false;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'rgba(34, 211, 238, 0.9)'; // Cyan neon color
        ctx.shadowColor = '#22d3ee';
        ctx.shadowBlur = 20;
        
        // Draw trailing ghost/speed effect when jumping
        if (this.isJumping) {
            ctx.fillStyle = 'rgba(34, 211, 238, 0.2)';
            ctx.shadowBlur = 0;
            ctx.fillRect(this.x - 12, this.y - this.height + 5, this.width, this.height);
        }
        
        // Main block
        ctx.fillStyle = 'rgba(34, 211, 238, 1)';
        ctx.shadowBlur = 20;
        ctx.fillRect(this.x, this.y - this.height, this.width, this.height);
        
        // Eye / Visor
        ctx.fillStyle = 'white';
        ctx.shadowBlur = 5;
        ctx.fillRect(this.x + 20, this.y - this.height + 8, 10, 6);
      }
    }

    class Obstacle {
      x: number = width;
      y: number = groundY;
      width: number = 25;
      height: number = 40 + Math.random() * 45;
      speed: number = 9; // Base speed of the runner

      update() {
        this.x -= this.speed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'rgba(255, 0, 50, 0.8)'; // Red glitch color
        ctx.shadowColor = '#ff0033';
        ctx.shadowBlur = 15;
        ctx.fillRect(this.x, this.y - this.height, this.width, this.height);

        // Glitch artifacts
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillRect(this.x - 2, this.y - this.height + 15, this.width + 4, 3);
        
        if (Math.random() > 0.9) {
           ctx.fillStyle = 'cyan';
           ctx.fillRect(this.x - 5, this.y - this.height + 5, 5, 2);
        }
      }
    }

    let player = new Player();
    let obstacles: Obstacle[] = [];
    let spawnTimer = 0;
    
    // INPUT HANDLING
    const handleAction = (e?: Event) => {
      // Prevent default to stop scrolling if user uses spacebar
      if (e && e.type !== 'pointerdown') {
         e.preventDefault(); 
      }
      if (isGameOver) return; // ignore input during death screen
      player.jump();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        handleAction(e);
      }
    };
    
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', handleAction);

    let animationId: number;

    const resetGame = () => {
       obstacles = [];
       localScore = 0;
       setScore(0);
       isGameOver = false;
       spawnTimer = 0;
       player.y = groundY;
       player.vy = 0;
    };

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Ground/Grid Line
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.5)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#22d3ee';
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.stroke();

      if (isGameOver) {
         // Death animation glitch loop
         gameOverTimer++;
         
         ctx.fillStyle = 'rgba(255, 0, 50, 0.15)';
         ctx.fillRect(0, 0, width, height);
         
         ctx.fillStyle = 'white';
         ctx.font = 'bold 32px monospace';
         ctx.textAlign = 'center';
         // Shake effect
         ctx.fillText("SYSTEM FAILURE", width/2 + (Math.random()-0.5)*10, height/2 + (Math.random()-0.5)*10);
         
         ctx.fillStyle = 'cyan';
         ctx.font = '14px monospace';
         ctx.fillText("REBOOTING...", width/2, height/2 + 30);

         // Short death penalty (30 frames ~ 0.5 sec)
         if (gameOverTimer > 30) {
            resetGame();
         }
      } else {
          // Increase score
          localScore++;
          if (localScore % 5 === 0) { // Update state less frequently to avoid re-renders
              setScore(Math.floor(localScore / 10));
          }

          // Spawn obstacles
          spawnTimer++;
          // Spawn rate gets faster as score increases
          const spawnRate = Math.max(45, 90 - Math.floor(localScore / 300)); 
          
          if (spawnTimer > spawnRate + Math.random() * 50) {
              const obs = new Obstacle();
              // Speed increases as score increases
              obs.speed = 9 + (localScore / 1000); 
              obstacles.push(obs);
              spawnTimer = 0;
          }

          player.update();
          player.draw(ctx);

          // Update and Draw Obstacles
          for (let i = obstacles.length - 1; i >= 0; i--) {
            obstacles[i].update();
            obstacles[i].draw(ctx);
            
            // Hit detection (AABB Collision)
            // Slightly forgiving hitbox
            const hitboxMargin = 5; 
            if (
                player.x + hitboxMargin < obstacles[i].x + obstacles[i].width &&
                player.x + player.width - hitboxMargin > obstacles[i].x &&
                player.y - player.height + hitboxMargin < obstacles[i].y &&
                player.y - hitboxMargin > obstacles[i].y - obstacles[i].height
            ) {
                // Hit!
                isGameOver = true;
                gameOverTimer = 0;
            }

            // Remove if fallen off screen to the left
            if (obstacles[i].x < -100) {
              obstacles.splice(i, 1);
            }
          }
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
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        <div className="text-cyan-400 font-mono text-2xl md:text-3xl font-bold tracking-[0.2em] drop-shadow-[0_0_10px_cyan]">
          SCORE: {score}
        </div>
        <div className="mt-2 text-cyan-400/60 font-mono text-[10px] md:text-xs tracking-widest uppercase animate-pulse">
          &lt; TAP OR SPACE TO JUMP &gt;
        </div>
      </div>
    </div>
  );
}
