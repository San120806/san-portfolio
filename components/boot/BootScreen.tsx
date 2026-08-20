'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Auto advance after 2.8 seconds
    const timer = setTimeout(() => {
      setFadingOut(true);
      setTimeout(onComplete, 300);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleFinish = () => {
    setFadingOut(true);
    setTimeout(onComplete, 200);
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000000',
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontFamily: "'Segoe UI', Tahoma, Arial, sans-serif",
        userSelect: 'none',
        opacity: fadingOut ? 0 : 1,
        transition: 'opacity 0.3s ease-out',
      }}
    >
      {/* Skip Button */}
      <button
        onClick={handleFinish}
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'rgba(255, 255, 255, 0.7)',
          padding: '5px 12px',
          borderRadius: 4,
          fontSize: 11,
          cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
          e.currentTarget.style.color = '#ffffff';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
        }}
      >
        SKIP ➔
      </button>

      {/* Main Center Content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Windows XP Official 3D Logo from /windowsxplogo_transparent.png */}
        <div style={{ marginBottom: 12, position: 'relative', width: 110, height: 110 }}>
          <Image
            src="/windowsxplogo_transparent.png"
            alt="Windows XP Logo"
            fill
            sizes="110px"
            unoptimized
            priority
            style={{
              objectFit: 'contain',
              filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.9))',
            }}
          />
        </div>

        {/* Name & XP in Exponent Form */}
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 2 }}>
          <span
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              fontFamily: "'Segoe UI', Tahoma, Arial, sans-serif",
              lineHeight: 1,
            }}
          >
            Saniya
          </span>
          <sup
            style={{
              fontSize: 22,
              fontWeight: 900,
              fontStyle: 'italic',
              color: '#f05b18',
              marginLeft: 4,
              top: '-0.45em',
              position: 'relative',
              fontFamily: "'Franklin Gothic Medium', Arial, sans-serif",
            }}
          >
            xp
          </sup>
        </div>

        {/* Subtitle: curious mind */}
        <div
          style={{
            fontSize: 15,
            fontStyle: 'italic',
            color: '#d8d8d8',
            fontWeight: 400,
            marginBottom: 36,
            letterSpacing: '0.02em',
          }}
        >
          curious mind
        </div>

        {/* Windows XP 3-Block Loading Bar */}
        <div
          style={{
            width: 172,
            height: 16,
            border: '2px solid #5a5a5a',
            borderRadius: 5,
            padding: 2,
            background: '#000000',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8), 0 0 1px rgba(255,255,255,0.2)',
          }}
        >
          <div className="xp-boot-anim" />
        </div>
      </div>

      {/* Bottom Left Fullscreen Hint */}
      <div
        onClick={handleToggleFullscreen}
        style={{
          position: 'absolute',
          bottom: 24,
          left: 28,
          fontSize: 11,
          lineHeight: 1.4,
          color: '#a0a0a0',
          cursor: 'pointer',
          fontFamily: 'Tahoma, sans-serif',
          transition: 'color 0.15s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
        onMouseLeave={e => (e.currentTarget.style.color = '#a0a0a0')}
      >
        <div>For the best experience</div>
        <div>Enter Full Screen (F11)</div>
      </div>

      {/* Bottom Right Portfolio Branding */}
      <div
        style={{
          position: 'absolute',
          bottom: 24,
          right: 28,
          fontSize: 22,
          fontWeight: 800,
          fontStyle: 'italic',
          color: '#ffffff',
          letterSpacing: '-0.02em',
          fontFamily: "'Segoe UI', Tahoma, Arial, sans-serif",
          textShadow: '0 2px 4px rgba(0,0,0,0.6)',
        }}
      >
        Portfolio<span style={{ fontSize: 13, verticalAlign: 'super', marginLeft: 1 }}>®</span>
      </div>
    </div>
  );
}
