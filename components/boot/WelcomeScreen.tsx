'use client';

import { useEffect, useState } from 'react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Keep Welcome screen visible for exactly 2 seconds before completing
    const timer = setTimeout(() => {
      setFadingOut(true);
      setTimeout(onComplete, 250);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setFadingOut(true);
    setTimeout(onComplete, 150);
  };

  return (
    <div
      onClick={handleSkip}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        userSelect: 'none',
        cursor: 'default',
        opacity: fadingOut ? 0 : 1,
        transition: 'opacity 0.25s ease-out',
      }}
    >
      {/* Top Navy Bar */}
      <div
        style={{
          height: '11%',
          minHeight: 50,
          maxHeight: 70,
          background: '#002288',
          backgroundRepeat: 'repeat-x',
          width: '100%',
        }}
      />

      {/* Main Center Area with XP Scanline Texture */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          background: 'radial-gradient(ellipse at center, #6b8fe8 0%, #5177d6 45%, #466cc9 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Scanline Texture Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0px, rgba(0, 0, 0, 0.04) 1px, transparent 1px, transparent 3px)',
            pointerEvents: 'none',
          }}
        />

        {/* Center "welcome" text */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            fontFamily: "'Segoe UI', 'Franklin Gothic Medium', Tahoma, sans-serif",
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            fontStyle: 'italic',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.45), 0 0 12px rgba(255, 255, 255, 0.25)',
            transform: 'scaleY(0.95)',
          }}
        >
          welcome
        </div>
      </div>

      {/* Orange Accent Divider Line */}
      <div
        style={{
          height: 3,
          width: '100%',
          background: 'linear-gradient(90deg, #ff8c00 0%, #ffa500 50%, #ff7700 100%)',
          boxShadow: '0 0 6px rgba(255, 140, 0, 0.6)',
        }}
      />

      {/* Bottom Navy Bar */}
      <div
        style={{
          height: '11%',
          minHeight: 50,
          maxHeight: 70,
          background: '#002288',
          width: '100%',
        }}
      />
    </div>
  );
}
