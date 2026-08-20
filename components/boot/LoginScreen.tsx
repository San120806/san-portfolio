'use client';

import Image from 'next/image';
import { profileData } from '@/data/profile';

interface LoginScreenProps {
  onLogin: () => void;
  lang?: 'en' | 'hi';
  onShutDown?: () => void;
  onRestart?: () => void;
}

export default function LoginScreen({ onLogin, onShutDown, onRestart }: LoginScreenProps) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999998,
        display: 'flex',
        flexDirection: 'column',
        userSelect: 'none',
        fontFamily: "'Segoe UI', Tahoma, Arial, sans-serif",
      }}
    >
      {/* Top Navy Banner Bar */}
      <div
        style={{
          height: '11%',
          minHeight: 50,
          maxHeight: 70,
          background: '#002288',
          width: '100%',
        }}
      />

      {/* Main Split Center Area with XP Scanline Texture */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          background: 'radial-gradient(ellipse at center, #6b8fe8 0%, #5177d6 45%, #466cc9 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '20px 40px',
        }}
      >
        {/* Scanline Texture Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0px, rgba(0, 0, 0, 0.04) 1px, transparent 1px, transparent 3px)',
            pointerEvents: 'none',
          }}
        />

        {/* Center 2-Column Split Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 880,
            width: '100%',
            gap: 40,
            flexWrap: 'wrap',
          }}
        >
          {/* Left Column: XP Branding & Prompt */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              minWidth: 280,
            }}
          >
            {/* Windows XP 3D Logo */}
            <div style={{ position: 'relative', width: 90, height: 90, marginBottom: 8 }}>
              <Image
                src="/windowsxplogo_transparent.png"
                alt="Windows XP Logo"
                fill
                sizes="90px"
                unoptimized
                priority
                style={{
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))',
                }}
              />
            </div>

            {/* Saniya xp Title */}
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 2 }}>
              <span
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  fontFamily: "'Segoe UI', Tahoma, Arial, sans-serif",
                  lineHeight: 1,
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                Saniya
              </span>
              <sup
                style={{
                  fontSize: 18,
                  fontWeight: 900,
                  fontStyle: 'italic',
                  color: '#f05b18',
                  marginLeft: 3,
                  top: '-0.4em',
                  position: 'relative',
                  fontFamily: "'Franklin Gothic Medium', Arial, sans-serif",
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                }}
              >
                xp
              </sup>
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: 13,
                fontStyle: 'italic',
                color: '#dbe8fb',
                marginBottom: 20,
              }}
            >
              curious mind
            </div>

            {/* Helper Text */}
            <div
              style={{
                fontSize: 13,
                color: '#ffffff',
                textShadow: '0 1px 3px rgba(0,0,0,0.6)',
                fontWeight: 500,
              }}
            >
              To begin, click on {profileData.name} to log in
            </div>
          </div>

          {/* Vertical Divider */}
          <div
            style={{
              width: 1,
              height: 220,
              background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.4) 80%, transparent 100%)',
            }}
          />

          {/* Right Column: User Card */}
          <div style={{ minWidth: 280 }}>
            <div
              onClick={onLogin}
              className="hover:scale-[1.03]"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '12px 18px',
                borderRadius: 8,
                background: 'rgba(255, 255, 255, 0.08)',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                backdropFilter: 'blur(6px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
                e.currentTarget.style.borderColor = '#ffffff';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 70, 200, 0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
              }}
            >
              {/* Avatar Box with 3D XP Frame */}
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 6,
                  border: '2px solid #ffffff',
                  background: 'linear-gradient(135deg, #3a75c4 0%, #1e4b8a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                  flexShrink: 0,
                  position: 'relative',
                }}
              >
                <Image
                  src="/icons/saniya_avatar.png"
                  alt={profileData.name}
                  fill
                  sizes="58px"
                  unoptimized
                  style={{ objectFit: 'contain', padding: 2 }}
                />
              </div>

              {/* User Details */}
              <div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#ffffff',
                    textShadow: '0 1px 3px rgba(0,0,0,0.7)',
                  }}
                >
                  {profileData.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: '#002570',
                    fontWeight: 600,
                    marginTop: 2,
                    textShadow: '0 1px 1px rgba(255,255,255,0.4)',
                  }}
                >
                  curious mind
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orange Accent Line */}
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
        }}
      >
        {/* Bottom Left Restart / Shutdown Button */}
        <button
          onClick={onRestart || onShutDown}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 12,
            fontFamily: 'inherit',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '6px 10px',
            borderRadius: 4,
            transition: 'background 0.15s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 4,
              background: '#28a745',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 12,
              fontWeight: 'bold',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.6)',
            }}
          >
            🔄
          </div>
          <span>Restart Saniya XP</span>
        </button>

        {/* Bottom Right XP Tagline */}
        <div
          style={{
            textAlign: 'right',
            color: '#c0d6f6',
            fontSize: 11,
            lineHeight: 1.3,
          }}
        >
          <div>After you log on, the system's yours to explore.</div>
          <div>Every detail has been designed with a purpose.</div>
        </div>
      </div>
    </div>
  );
}
