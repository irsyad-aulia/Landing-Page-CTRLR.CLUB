"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SocialIcons from '@/components/sections/SocialIcons';
import { Rubik_Glitch, Rajdhani } from 'next/font/google';

const corruptedFont = Rubik_Glitch({
  weight: '400',
  subsets: ['latin'],
});

const rajdhani = Rajdhani({
  weight: ['600', '700'],
  subsets: ['latin'],
});

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// FUNGSI PEMBANTU (Di luar komponen utama)
// ==========================================
const explodeText = (text: string) => {
  const words = text.split(' ');
  return words.map((word, wordIndex) => (
    <React.Fragment key={`word-${wordIndex}`}>
      <span className="inline-block whitespace-nowrap">
        {word.split('').map((char, charIndex) => (
          <span key={`char-${wordIndex}-${charIndex}`} className="ui-particle inline-block">
            {char}
          </span>
        ))}
      </span>
      {wordIndex < words.length - 1 && (
        <span className="inline-block w-[0.25em]">&nbsp;</span>
      )}
    </React.Fragment>
  ));
};

const renderTerminalText = (text: string, colorClass: string) => {
  return text.split(' ').map((word, index) => (
    <span key={index} className={`inline-block mr-[0.3em] opacity-0 blur-[8px] translate-y-2 ${colorClass}`}>
      {word}
    </span>
  ));
};

// ==========================================
// KOMPONEN UTAMA
// ==========================================
export default function Home() {
  const [isReady, setIsReady] = useState(false);

  // Referensi Media & Kontainer
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Referensi Fase Utama
  const phase1Ref = useRef<HTMLDivElement>(null);
  const phase2Ref = useRef<HTMLDivElement>(null);
  const phase2TitleRef = useRef<HTMLHeadingElement>(null);
  const phase4Ref = useRef<HTMLDivElement>(null);
  const phase5Ref = useRef<HTMLDivElement>(null);

  // Referensi Elemen Fase 1
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  // Referensi Elemen Fase 3 (HUD)
  const hudGroup1Ref = useRef<HTMLDivElement>(null);
  const hud1_1Ref = useRef<HTMLDivElement>(null);
  const hud1_2Ref = useRef<HTMLDivElement>(null);
  const hud1_3Ref = useRef<HTMLDivElement>(null);
  const hud1_4Ref = useRef<HTMLDivElement>(null);

  const hudGroup2Ref = useRef<HTMLDivElement>(null);
  const hud2_1Ref = useRef<HTMLSpanElement>(null);
  const hud2_2Ref = useRef<HTMLSpanElement>(null);
  const hud2_3Ref = useRef<HTMLSpanElement>(null);
  const hud2_4Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
      requestAnimationFrame(() => {
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      });
    }, 300);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', updateCanvasSize);

    const frameCount = 1200;
    const currentFrame = (index: number) => `/assets/sequence/Frame (${index}).jpg`;
    const images: HTMLImageElement[] = [];
    const sequence = { frame: 0 };

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const getLifecycleStyle = (frame: number, entryStart: number, exitStart: number) => {
      const entryDuration = 8;
      const exitDuration = 7;
      if (frame < entryStart) return { opacity: "0", filter: "blur(8px)" };
      if (frame >= entryStart && frame < entryStart + entryDuration) {
        const progress = (frame - entryStart) / entryDuration;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        return { opacity: easeOut.toString(), filter: `blur(${(1 - easeOut) * 8}px)` };
      }
      if (frame >= entryStart + entryDuration && frame < exitStart) {
        return { opacity: "1", filter: "blur(0px)" };
      }
      if (frame >= exitStart && frame <= exitStart + exitDuration) {
        const progress = (frame - exitStart) / exitDuration;
        const easeIn = Math.pow(progress, 3);
        return { opacity: (1 - easeIn).toString(), filter: `blur(${easeIn * 20}px)` };
      }
      return { opacity: "0", filter: "blur(20px)" };
    };

    const getEntryStyle = (frame: number, startFrame: number, duration = 15) => {
      if (frame < startFrame) return { opacity: "0", transform: "translateY(20px)", filter: "blur(12px)" };
      if (frame > startFrame + duration) return { opacity: "1", transform: "", filter: "" };
      const progress = (frame - startFrame) / duration;
      return {
        opacity: progress.toString(),
        transform: `translateY(${(1 - progress) * 20}px)`,
        filter: `blur(${(1 - progress) * 12}px)`
      };
    };

    const render = () => {
      const frameIndex = Math.round(sequence.frame);
      if (!images[frameIndex]) return;
      const img = images[frameIndex];

      if (img.complete) {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      } else {
        img.onload = render;
      }

      // Render Phase 3 HUD Groups
      if (frameIndex >= 341 && frameIndex <= 375) {
        if (hudGroup1Ref.current) hudGroup1Ref.current.style.opacity = "1";
        const applyWordByWord = (ref: React.RefObject<any>, startEntry: number, startExit: number) => {
          if (!ref.current) return;
          ref.current.style.opacity = "1";
          const children = ref.current.children;
          for (let i = 0; i < children.length; i++) {
            const childStartEntry = startEntry + (i * 2);
            const style = getLifecycleStyle(frameIndex, childStartEntry, startExit);
            const child = children[i] as any;
            child.style.opacity = style.opacity;
            child.style.filter = style.filter;
          }
        };
        applyWordByWord(hud1_1Ref, 341, 368);
        applyWordByWord(hud1_2Ref, 341, 368);
        applyWordByWord(hud1_3Ref, 344, 368);
        applyWordByWord(hud1_4Ref, 347, 368);
      } else {
        if (hudGroup1Ref.current) hudGroup1Ref.current.style.opacity = "0";
      }

      if (frameIndex >= 410 && frameIndex <= 520) {
        if (hudGroup2Ref.current) hudGroup2Ref.current.style.opacity = "1";
        const applyEntry = (ref: React.RefObject<any>, start: number) => {
          if (!ref.current) return;
          const style = getEntryStyle(frameIndex, start, 15);
          ref.current.style.opacity = style.opacity;
          ref.current.style.transform = style.transform;
          ref.current.style.filter = style.filter;
        };
        applyEntry(hud2_1Ref, 410);
        applyEntry(hud2_2Ref, 425);
        applyEntry(hud2_3Ref, 440);
        applyEntry(hud2_4Ref, 455);
      } else {
        if (hudGroup2Ref.current) hudGroup2Ref.current.style.opacity = "0";
      }
    };

    images[0].onload = render;

    // Timeline Masuk Fase 1
    const entryTl = gsap.timeline({ delay: 0.2 });
    entryTl.fromTo(titleRef.current,
      { opacity: 0, scaleY: 0.01, scaleX: 1.5 },
      { opacity: 1, scaleX: 1, duration: 0.15, ease: "power2.in" }
    )
      .to(titleRef.current, { scaleY: 1, duration: 0.2, ease: "power4.out" })
      .to(titleRef.current, { opacity: 0.4, skewX: 15, x: -15, duration: 0.04 })
      .to(titleRef.current, { opacity: 1, skewX: -15, x: 15, duration: 0.04 })
      .to(titleRef.current, { opacity: 1, skewX: 0, x: 0, duration: 0.05 });

    entryTl.fromTo(badgeRef.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.04 }, "+=0.15")
      .to(badgeRef.current, { opacity: 0, duration: 0.03 })
      .to(badgeRef.current, { opacity: 1, duration: 0.05 })
      .to(badgeRef.current, { opacity: 0.3, duration: 0.03 })
      .to(badgeRef.current, { opacity: 1, duration: 0.1 });

    const flickerTargets = [titleRef.current, badgeRef.current];
    const flickerTl = gsap.timeline({ repeat: -1, delay: 3 });
    flickerTl.to(flickerTargets, { opacity: 0.3, duration: 0.04, ease: "power1.inOut" })
      .to(flickerTargets, { opacity: 1, duration: 0.08, ease: "power1.inOut" })
      .to(flickerTargets, { opacity: 0.5, duration: 0.04, ease: "power1.inOut" })
      .to(flickerTargets, { opacity: 1, duration: 0.1, ease: "power1.inOut" })
      .to(flickerTargets, { opacity: 1, duration: 4 });

    // Timeline Scroll (GSAP)
    const st = gsap.to(sequence, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
      onUpdate: () => requestAnimationFrame(render),
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });

    tl.to(".ui-particle", {
      x: "random(-1500, 1500)", y: "random(-1000, 1000)", z: "random(-1000, 1000)",
      rotationX: "random(-720, 720)", rotationY: "random(-720, 720)", rotationZ: "random(-720, 720)",
      scale: "random(0.1, 4)", opacity: 0, filter: "blur(15px)", duration: "random(4, 8)", ease: "power4.out",
    }, 8)
      .to(phase1Ref.current, { opacity: 0, duration: 1 }, 12);

    tl.fromTo(phase2Ref.current, { opacity: 0 }, { opacity: 1, duration: 2, ease: "power1.inOut" }, 14)
      .to(phase2TitleRef.current, {
        keyframes: [
          { opacity: 0, duration: 0.1 }, { opacity: 1, duration: 0.1 }, { opacity: 0.3, duration: 0.1 },
          { opacity: 1, duration: 0.2 }, { opacity: 0.5, duration: 0.1 }, { opacity: 1, duration: 0.4 }
        ], ease: "none",
      }, 14.2)
      .to([".term-word-cyan", ".term-word-magenta"], { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" }, 14.5)
      .to([".term-word-cyan", ".term-word-magenta"], { opacity: 0, filter: "blur(8px)", x: 15, duration: 0.2, stagger: 0.015, ease: "power2.in" }, 25.0)
      .to(phase2TitleRef.current, {
        keyframes: [
          { opacity: 0, x: -10, skewX: 10, duration: 0.05 }, { opacity: 1, x: 10, skewX: -10, duration: 0.05 },
          { opacity: 0, scaleY: 0.01, scaleX: 1.2, skewX: 0, filter: "brightness(3)", duration: 0.15 }
        ], ease: "power4.in"
      }, 25.5)
      .to(phase2Ref.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 25.8);

    tl.fromTo(phase4Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 5 }, 60)
      .to(phase4Ref.current, { opacity: 0, y: -50, duration: 5 }, 75);

    tl.fromTo(phase5Ref.current, { opacity: 0 }, { opacity: 1, duration: 3 }, 97)
      .to(canvasRef.current, { opacity: 0, duration: 3 }, 97)
      .to(videoRef.current, { opacity: 1, duration: 3 }, 97);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      clearTimeout(timer);
      st.kill();
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className={`relative min-h-screen bg-black text-white overflow-x-hidden font-mono selection:bg-green-500/30 transition-opacity duration-1000 ease-in-out ${isReady ? 'opacity-100' : 'opacity-0'}`}>

      {/* ========================================== */}
      {/* PUSAT KENDALI CSS (Centralized Keyframes)  */}
      {/* ========================================== */}
      <style>{`
        /* Phase 4: Lockdown Mobile */
        @keyframes mechanical-rotate {
          0%, 15% { transform: rotate(0deg); }
          35%, 75% { transform: rotate(-90deg); }
          90%, 100% { transform: rotate(0deg); }
        }
        .animate-mechanical-rotate { animation: mechanical-rotate 3.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite; }
        
        /* Phase 3: HUD Animation */
        @keyframes hud-pulse {
          0%, 100% { opacity: 1; filter: brightness(1) drop-shadow(0 0 10px rgba(34,211,238,0.5)); }
          50% { opacity: 0.8; filter: brightness(1.3) drop-shadow(0 0 20px rgba(34,211,238,0.8)); }
        }
        .animate-hud-pulse { animation: hud-pulse 3s ease-in-out infinite; }
        
        @keyframes ghost-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .animate-ghost-float { animation: ghost-float 4s ease-in-out infinite; }
        
        /* Phase 2: Animations */
        @keyframes core-breathe {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 0px rgba(34,211,238,0)); }
          50% { filter: brightness(1.25) drop-shadow(0 0 15px rgba(34,211,238,0.6)); }
        }
        .animate-core-breathe { animation: core-breathe 3s ease-in-out infinite; }
        
        @keyframes circuit-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; filter: brightness(1.5); }
        }
        .animate-circuit { animation: circuit-pulse 2s ease-in-out infinite; }
        
        /* Phase 5: CTA Animations */
        @keyframes dual-core-breathe {
          0% { text-shadow: 0 0 10px rgba(255,255,255,0.8), 0 0 30px rgba(34,211,238,0.9), 0 0 60px rgba(34,211,238,0.5), 0 5px 20px rgba(0,0,0,1); filter: brightness(1.2); }
          50% { text-shadow: 0 0 10px rgba(255,255,255,0.8), 0 0 30px rgba(217,70,239,0.9), 0 0 60px rgba(217,70,239,0.5), 0 5px 20px rgba(0,0,0,1); filter: brightness(1); }
          100% { text-shadow: 0 0 10px rgba(255,255,255,0.8), 0 0 30px rgba(34,211,238,0.9), 0 0 60px rgba(34,211,238,0.5), 0 5px 20px rgba(0,0,0,1); filter: brightness(1.2); }
        }
        .animate-dual-core { animation: dual-core-breathe 4s infinite ease-in-out; }
        
        @keyframes shimmer-sweep {
          0% { transform: translateX(-150%) skewX(-25deg); opacity: 0; }
          10% { opacity: 1; }
          40% { transform: translateX(250%) skewX(-25deg); opacity: 0; }
          100% { transform: translateX(250%) skewX(-25deg); opacity: 0; } 
        }
        .btn-shimmer { position: relative; overflow: hidden; }
        .btn-shimmer::after {
          content: ''; position: absolute; top: 0; left: 0; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.7), transparent);
          animation: shimmer-sweep 3.5s infinite ease-in-out; z-index: 10; pointer-events: none;
        }
      `}</style>

      {/* ========================================== */}
      {/* LOCKDOWN ORIENTASI PERANGKAT (Hanya Mobile Portrait) */}
      {/* ========================================== */}
      <div className={`fixed inset-0 z-[9999] hidden max-md:portrait:flex flex-col items-center justify-center bg-black px-6 text-center ${rajdhani.className}`}>
        <div className="relative w-16 h-28 border-2 border-cyan-400 rounded-xl mb-8 flex items-center justify-center animate-mechanical-rotate shadow-[0_0_20px_rgba(34,211,238,0.2)] bg-black">
          <div className="w-5 h-1 bg-cyan-400/50 rounded-full absolute top-2"></div>
          <div className="w-4 h-4 border border-fuchsia-500 rounded-full absolute bottom-2 shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
        </div>
        <h2 className="text-2xl font-bold text-red-500 tracking-[0.2em] mb-4 uppercase" style={{ textShadow: '0 0 10px rgba(239,68,68,0.6)' }}>
          [ SYS.ERR: ORIENTATION ]
        </h2>
        <p className="text-zinc-300 text-lg tracking-[0.1em] max-w-[280px] leading-relaxed">
          ROTATE DEVICE TO LANDSCAPE TO INITIALIZE THE GRID.
        </p>
        <div className="mt-10 flex gap-3">
          <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse shadow-[0_0_5px_#22d3ee]"></div>
          <div className="w-1.5 h-1.5 bg-fuchsia-500 animate-pulse shadow-[0_0_5px_#d946ef]" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse shadow-[0_0_5px_#22d3ee]" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* ========================================== */}
      {/* MEDIA LATAR BELAKANG */}
      {/* ========================================== */}
      <video
        ref={videoRef}
        src="/assets/CTA Final_processed.webm"
        autoPlay loop muted playsInline
        className="fixed inset-0 w-screen h-[100dvh] z-0 object-cover pointer-events-none opacity-0"
      />
      <canvas ref={canvasRef} className="fixed inset-0 w-screen h-[100dvh] z-0 object-cover pointer-events-none" />

      {/* ========================================== */}
      {/* FASE 3: FRAME-PERFECT HUD OVERLAY */}
      {/* ========================================== */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-50 overflow-hidden">

        {/* KELOMPOK 1: The Core Reboot */}
        <div ref={hudGroup1Ref} className="absolute inset-0 w-full h-full opacity-0">

          {/* 1. Tengah Atas - Posisi desktop (lg) dinaikkan ekstrem ke top-[8%] dan ukuran font didongkrak ke text-5xl/6xl */}
          <div ref={hud1_1Ref} className="absolute top-[10%] md:top-[12%] lg:top-[8%] left-1/2 -translate-x-1/2 font-mono text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-[0.2em] lg:tracking-[0.3em] text-white whitespace-nowrap opacity-0 animate-hud-pulse" style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(34,211,238,0.8)' }}>
            <span>[ SYSTEM OVERRIDE ]</span>
          </div>

          {/* 2. Sisi Kanan Atas (SYNC) */}
          <div ref={hud1_2Ref} className="absolute top-[30%] md:top-[33%] lg:top-[30%] left-[62%] md:left-[62%] lg:left-[60%] font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-lg font-medium text-fuchsia-400 whitespace-nowrap opacity-0 animate-hud-pulse" style={{ textShadow: '0 0 8px rgba(217,70,239,0.8)' }}>
            <span>&gt;</span> <span className="ml-1">SYNC</span> <span className="ml-1">CASCADE:</span> <span className="ml-1">INITIATED</span>
          </div>

          {/* 3. Sisi Kiri Tengah (CORRUPTION) - Desktop didorong keluar ke lg:right-[63%] */}
          <div ref={hud1_3Ref} className="absolute top-[43%] md:top-[46%] lg:top-[45%] right-[65%] md:right-[65%] lg:right-[63%] font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-lg font-medium text-cyan-400 whitespace-nowrap opacity-0 animate-hud-pulse" style={{ textShadow: '0 0 8px rgba(34,211,238,0.8)' }}>
            <span>&gt;</span> <span className="ml-1">CORRUPTION:</span> <span className="ml-1">PURGED</span>
          </div>

          {/* 4. Sisi Kanan Bawah (DIAMOND) */}
          <div ref={hud1_4Ref} className="absolute top-[60%] md:top-[62%] lg:top-[60%] left-[62%] md:left-[62%] lg:left-[60%] font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-lg font-bold text-white whitespace-nowrap opacity-0 animate-hud-pulse" style={{ textShadow: '0 0 8px rgba(255,255,255,0.8), 0 0 15px rgba(34,211,238,0.8)' }}>
            <span>&gt;</span> <span className="ml-1">DIAMOND</span> <span className="ml-1">CORE:</span> <span className="ml-1">RESTORED</span>
          </div>

        </div>


        {/* KELOMPOK 2: Tunnel Transition */}
        {/* Kalibrasi: Skala font dinaikkan (text-xl sm:text-2xl md:text-3xl) agar lebih tegas di mobile, jarak antar kata disesuaikan proporsional */}
        <div ref={hudGroup2Ref} className="absolute top-[8%] md:top-[12%] lg:top-[15%] left-1/2 -translate-x-1/2 flex flex-row justify-center items-center gap-x-2 md:gap-x-3 lg:gap-x-5 w-full px-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl tracking-wide opacity-0 animate-ghost-float whitespace-nowrap">

          <span ref={hud2_1Ref} className={`text-white opacity-0 font-bold ${rajdhani.className}`}
            style={{ textShadow: '0 4px 15px rgba(15,23,42,0.8), 0 10px 30px rgba(88,28,135,0.5), 0 0 15px rgba(255,255,255,0.9)' }}>
            SYSTEM
          </span>

          {/* Margin-right disesuaikan dengan skala font baru */}
          <span ref={hud2_2Ref} className={`text-white opacity-0 mr-1.5 md:mr-4 lg:mr-6 font-bold ${rajdhani.className}`}
            style={{ textShadow: '0 4px 15px rgba(15,23,42,0.8), 0 10px 30px rgba(88,28,135,0.5), 0 0 15px rgba(255,255,255,0.9)' }}>
            STABLE.
          </span>

          <span ref={hud2_3Ref} className={`text-cyan-400 opacity-0 font-bold ${rajdhani.className}`}
            style={{ textShadow: '0 4px 15px rgba(8,51,68,0.8), 0 10px 30px rgba(6,182,212,0.3), 0 0 15px rgba(34,211,238,0.9)' }}>
            WELCOME,
          </span>

          <span ref={hud2_4Ref} className={`text-fuchsia-400 opacity-0 font-bold ${rajdhani.className}`}
            style={{ textShadow: '0 4px 15px rgba(74,4,78,0.8), 0 10px 30px rgba(192,38,211,0.3), 0 0 15px rgba(217,70,239,0.9)' }}>
            OPERATOR.
          </span>

        </div>
      </div>

      {/* ========================================== */}
      {/* KONTAINER GULIRAN UTAMA (Scroll Sections)  */}
      {/* ========================================== */}
      <div ref={containerRef} className="relative z-10 h-[1500vh] w-full">

        {/* FASE 1: THE INITIATION (Diperbarui untuk Mobile) */}
        <div ref={phase1Ref} className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none px-4" style={{ perspective: '1200px' }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7)_0%,transparent_70%)] -z-10"></div>

          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center w-full px-2">
            {/* 
              Kalibrasi Ulang Ukuran Judul:
              - Skala dasar & md dinaikkan ke text-3xl dan md:text-4xl (Hierarki utama kembali kuat)
              - Jarak bawah (mb) sedikit diperlebar agar tidak menabrak badge
            */}
            <h1 ref={titleRef}
              className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center uppercase mb-4 md:mb-6 lg:mb-10 relative z-10 leading-tight lg:leading-relaxed tracking-[0.1em] lg:tracking-[0.15em] opacity-0 ${corruptedFont.className}`}
              style={{ textShadow: `0 0 5px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.3), 0 5px 20px rgba(0,0,0,0.9)` }}>
              {explodeText("The controller arcade game")}
              <br />
              {explodeText("that hits different.")}
            </h1>
          </div>

          <div ref={badgeRef} className="relative mt-0 lg:mt-2 opacity-0">
            {/* Sudut Partikel Badge */}
            <div className="ui-particle absolute -top-[2px] -left-[2px] w-4 h-[2px] bg-cyan-400 z-20"></div>
            <div className="ui-particle absolute -top-[2px] -left-[2px] w-[2px] h-4 bg-cyan-400 z-20"></div>
            <div className="ui-particle absolute -bottom-[2px] -right-[2px] w-4 h-[2px] bg-fuchsia-500 z-20"></div>
            <div className="ui-particle absolute -bottom-[2px] -right-[2px] w-[2px] h-4 bg-fuchsia-500 z-20"></div>
            <div className="ui-particle absolute top-1/2 -left-[6px] w-[6px] h-[1px] bg-cyan-400/50 z-20"></div>
            <div className="ui-particle absolute top-1/3 -right-[6px] w-[6px] h-[1px] bg-fuchsia-500/50 z-20"></div>

            {/* 
              Kalibrasi Badge:
              - Padding dikurangi ekstrem untuk mobile (px-3 py-1.5)
              - Ukuran teks dipaksa sangat kecil di mobile (text-[10px] & md:text-xs)
            */}
            <div className="ui-particle flex items-center gap-2 lg:gap-4 bg-black/40 px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 relative z-10 border border-zinc-800/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
              <p className={`text-cyan-400 text-[10px] md:text-xs lg:text-base tracking-[0.1em] lg:tracking-[0.2em] uppercase ${corruptedFont.className}`} style={{ textShadow: 'none' }}>
                SYS.INFECTED // You are the Operator
              </p>
            </div>
          </div>
        </div>

        {/* FASE 2: THE TEARDOWN */}
        <div ref={phase2Ref} className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none px-2 md:px-12 lg:px-24 opacity-0">

          {/* Judul Utama Atas */}
          <div className="absolute top-[6%] md:top-[14%] flex flex-col items-center w-full px-4">
            <h2 ref={phase2TitleRef}
              className="animate-core-breathe text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[3.5rem] text-white font-extrabold italic uppercase tracking-tight flex flex-wrap justify-center gap-x-2 md:gap-x-5 gap-y-1 leading-none text-center"
              style={{ textShadow: `0 0 5px rgba(255, 255, 255, 0.9), 0 0 15px rgba(34, 211, 238, 0.8), 0 0 30px rgba(34, 211, 238, 0.4), 1px 1px 0 #06b6d4, 2px 2px 0 #0891b2, 3px 3px 0 #164e63, 4px 4px 0 #083344, 5px 5px 0 #042f2e, 8px 8px 15px rgba(0, 0, 0, 1), 0 15px 40px rgba(0, 0, 0, 0.9), 0 0 60px rgba(0, 0, 0, 0.7)` }}>
              <span>Two hemispheres.</span>
              <span>One Core.</span>
              <span className="whitespace-nowrap">Zero chill.</span>
            </h2>
          </div>

          <style>{`
            @keyframes circuit-pulse {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 1; filter: brightness(1.5); }
            }
            .animate-circuit {
              animation: circuit-pulse 2s ease-in-out infinite;
            }
          `}</style>

          {/* Panel Kiri (Posisi Y dinaikkan ke top-[47%] untuk Mobile Landscape) */}
          <div className="absolute left-[2%] md:left-[5%] lg:left-[14%] xl:left-[16%] top-[47%] lg:top-[50%] -translate-y-1/2 w-[42%] sm:w-[35%] lg:max-w-[300px] flex flex-col justify-center border-l-[2px] lg:border-l-[3px] border-cyan-400/50 pl-2 md:pl-3 lg:pl-5 text-left">
            <div className="absolute top-0 -left-[1px] lg:-left-[2px] w-2 lg:w-4 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-circuit"></div>
            <div className="absolute bottom-0 -left-[1px] lg:-left-[2px] w-2 lg:w-4 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-circuit" style={{ animationDelay: '1s' }}></div>
            <p className="text-zinc-100 text-[9px] sm:text-[10px] md:text-xs lg:text-base xl:text-lg leading-[1.4] lg:leading-snug font-sans font-medium tracking-tight lg:tracking-normal"
              style={{ textShadow: '0 2px 5px rgba(0,0,0,1), 0 0 15px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.9)' }}>
              {renderTerminalText(
                "Your controller is the command device. Every run is an Operation inside a corrupted neon hex grid.",
                "term-word-cyan"
              )}
            </p>
          </div>

          {/* Panel Kanan (Posisi Y dinaikkan ke top-[47%] untuk Mobile Landscape) */}
          <div className="absolute right-[2%] md:right-[5%] lg:right-[14%] xl:right-[16%] top-[47%] lg:top-[50%] -translate-y-1/2 w-[42%] sm:w-[35%] lg:max-w-[300px] flex flex-col justify-center border-r-[2px] lg:border-r-[3px] border-fuchsia-500/50 pr-2 md:pr-3 lg:pr-5 text-right">
            <div className="absolute top-0 -right-[1px] lg:-right-[2px] w-2 lg:w-4 h-[2px] bg-fuchsia-500 shadow-[0_0_8px_#d946ef] animate-circuit"></div>
            <div className="absolute bottom-0 -right-[1px] lg:-right-[2px] w-2 lg:w-4 h-[2px] bg-fuchsia-500 shadow-[0_0_8px_#d946ef] animate-circuit" style={{ animationDelay: '1s' }}></div>
            <p className="text-zinc-100 text-[9px] sm:text-[10px] md:text-xs lg:text-base xl:text-lg leading-[1.4] lg:leading-snug font-sans font-medium tracking-tight lg:tracking-normal"
              style={{ textShadow: '0 2px 5px rgba(0,0,0,1), 0 0 15px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1)' }}>
              {renderTerminalText(
                "Your job is simple: command the board, route clean energy, purge virus tiles, and restore the Diamond Core before instability takes over.",
                "term-word-magenta"
              )}
            </p>
          </div>

        </div>

        {/* FASE 4 (Kosong) */}
        <div ref={phase4Ref} className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none px-4 opacity-0"></div>

        {/* FASE 5: THE FINAL HOOK & CTA */}
        <div ref={phase5Ref} className="fixed inset-0 w-full h-[100dvh] pointer-events-none z-20 opacity-0 flex flex-col items-center justify-between py-2 sm:py-3 lg:py-16">

          {/* 1. TAJUK ULTIMATUM */}
          {/* Kalibrasi: Ukuran font diperbesar (text-xl sm:text-2xl) dan posisi diturunkan lagi (mt-6 sm:mt-8) */}
          <div className="w-full text-center px-4 mt-6 sm:mt-8 lg:mt-0">
            <h2 className={`text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-zinc-100 tracking-[0.15em] uppercase animate-dual-core ${rajdhani.className}`}>
              THE GRID IS OPEN
            </h2>
          </div>

          {/* 2. AREA AKSI (Tengah Bawah) */}
          <div className="w-full flex flex-col items-center pb-1 lg:pb-0">

            <button className={`btn-shimmer pointer-events-auto mb-1.5 sm:mb-2 lg:mb-6 px-4 py-1.5 sm:px-5 sm:py-2 lg:px-8 lg:py-3.5 border border-cyan-400/80 bg-black/40 backdrop-blur-md text-cyan-400 font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-base tracking-[0.2em] uppercase transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] ${rajdhani.className}`}>
              Secure Early Access
            </button>

            <div className="pointer-events-auto scale-[0.55] sm:scale-75 lg:scale-100 origin-bottom">
              <SocialIcons />
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}