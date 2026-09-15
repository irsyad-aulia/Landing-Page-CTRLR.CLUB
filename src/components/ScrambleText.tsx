'use client';

import { useEffect, useState } from 'react';

interface Props {
  text: string;
  isReady: boolean;
  className?: string;
  delay?: number;
}

const CHARS = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()_+{}|[]\\;:",./<>?~';

export default function ScrambleText({ text, isReady, className, delay = 0 }: Props) {
  const [displayText, setDisplayText] = useState(text);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isReady) return;

    let timeoutId: NodeJS.Timeout;
    
    timeoutId = setTimeout(() => {
      setHasStarted(true);
      
      let frame = 0;
      const duration = 40; // Total frames for animation
      let animationId: number;

      const animate = () => {
        frame++;
        const progress = frame / duration;
        
        // Calculate how many characters from the real text should be revealed
        const revealedChars = Math.floor(progress * text.length);
        
        let scrambled = '';
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            scrambled += ' '; // Preserve spaces
          } else if (i < revealedChars) {
            scrambled += text[i]; // Real character
          } else {
            // Random character
            scrambled += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        
        setDisplayText(scrambled);

        if (frame < duration) {
          animationId = requestAnimationFrame(animate);
        }
      };

      animationId = requestAnimationFrame(animate);
      
      return () => cancelAnimationFrame(animationId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isReady, text, delay]);

  return (
    <span className={className} style={{ opacity: hasStarted ? 1 : 0 }}>
      {displayText.split(' ').map((word, wordIndex, wordsArray) => (
        <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            <span key={`char-${wordIndex}-${charIndex}`} className="ui-particle inline-block" style={{ willChange: "transform, opacity" }}>
              {char}
            </span>
          ))}
          {wordIndex < wordsArray.length - 1 && (
            <span className="ui-particle inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}
