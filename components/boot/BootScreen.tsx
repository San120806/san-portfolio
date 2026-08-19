'use client';

import { useEffect, useState } from 'react';

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#000000',
      zIndex: 999999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Tahoma, sans-serif',
      userSelect: 'none',
    }}>
      {/* Skip Button */}
      <button
        onClick={onComplete}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: 'rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: '#ffffff',
          padding: '6px 14px',
          borderRadius: 4,
          fontSize: 11,
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        SKIP ➔
      </button>

      {/* Saniya XP Boot Logo */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        {/* 4-Color Windows Flag */}
        <div style={{ display: 'inline-block', marginBottom: 12 }}>
          <svg width="64" height="64" viewBox="0 0 24 24">
            <path d="M1 5.5 Q 6 3 10 4 L 10 11 L 1 11 Z" fill="#e83030" />
            <path d="M11 3.8 Q 16 2.2 21 2.5 L 21 11 L 11 11 Z" fill="#60b030" />
            <path d="M1 12 L 10 12 L 10 19 Q 5 18 1 16 Z" fill="#2060d0" />
            <path d="M11 12 L 21 12 L 21 20.5 Q 16 19 11 17.5 Z" fill="#e8b000" />
          </svg>
        </div>

        <div style={{ fontSize: 32, fontWeight: 'bold', letterSpacing: 2, textShadow: '0 0 12px rgba(255,255,255,0.6)' }}>
          SANIYA <span style={{ color: '#ff6600', fontStyle: 'italic', fontWeight: '900' }}>XP</span>
        </div>
        <div style={{ fontSize: 12, color: '#888888', letterSpacing: 4, marginTop: 4, textTransform: 'uppercase' }}>
          Personal Desktop OS
        </div>
      </div>

      {/* XP Animated 3-Block Loading Bar */}
      <div style={{
        width: 220,
        height: 14,
        border: '2px solid #555555',
        borderRadius: 4,
        padding: 2,
        background: '#111111',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div
          style={{
            width: '28%',
            height: '100%',
            background: 'linear-gradient(90deg, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%)',
            borderRadius: 2,
            position: 'absolute',
            left: `${progress}%`,
            transition: 'left 0.15s ease-out',
            boxShadow: '0 0 8px #2989d8',
          }}
        />
      </div>

      <div style={{ fontSize: 11, color: '#666666', marginTop: 16 }}>
        Starting Saniya XP...
      </div>
    </div>
  );
}
