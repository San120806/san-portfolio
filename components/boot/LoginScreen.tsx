'use client';

import { profileData } from '@/data/profile';
import { en } from '@/data/i18n/en';
import { hi } from '@/data/i18n/hi';

interface LoginScreenProps {
  onLogin: () => void;
  lang: 'en' | 'hi';
  onShutDown?: () => void;
}

export default function LoginScreen({ onLogin, lang, onShutDown }: LoginScreenProps) {
  const t = lang === 'hi' ? hi : en;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'linear-gradient(135deg, #001a4e 0%, #003399 40%, #0055ea 100%)',
      zIndex: 999998,
      display: 'flex',
      flexDirection: 'column',
      userSelect: 'none',
      fontFamily: 'Tahoma, sans-serif',
    }}>
      {/* Top Banner Bar */}
      <div style={{
        height: 60,
        background: 'linear-gradient(180deg, #001a4e 0%, #002266 100%)',
        borderBottom: '2px solid #e8b000',
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M1 5.5 Q 6 3 10 4 L 10 11 L 1 11 Z" fill="#e83030" />
            <path d="M11 3.8 Q 16 2.2 21 2.5 L 21 11 L 11 11 Z" fill="#60b030" />
            <path d="M1 12 L 10 12 L 10 19 Q 5 18 1 16 Z" fill="#2060d0" />
            <path d="M11 12 L 21 12 L 21 20.5 Q 16 19 11 17.5 Z" fill="#e8b000" />
          </svg>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            SANIYA <span style={{ color: '#ff8800', fontStyle: 'italic' }}>XP</span>
          </span>
        </div>
      </div>

      {/* Main Split Body */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 40px',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 40,
          maxWidth: 780,
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {/* Left Title branding */}
          <div style={{ color: 'white', textAlign: 'left', maxWidth: 320 }}>
            <h1 style={{ fontSize: 28, fontWeight: 'bold', margin: '0 0 8px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              SANIYA KAPURE
            </h1>
            <div style={{ fontSize: 14, color: '#d0e4ff', lineHeight: 1.4, margin: '0 0 12px' }}>
              {profileData.title}
            </div>
            <div style={{ fontSize: 11, color: '#a0c4ff' }}>
              {t.system.loginPrompt}
            </div>
          </div>

          {/* Dividing Vertical Line */}
          <div style={{
            width: 1,
            height: 160,
            background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
          }} />

          {/* Right User Clickable Card */}
          <div
            onClick={onLogin}
            className="hover:scale-105"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: 8,
              padding: '14px 20px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}
          >
            {/* Avatar Badge */}
            <div style={{
              width: 64,
              height: 64,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #4a80d4, #1a50a0)',
              border: '2px solid #ffcc00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}>
              👩‍💻
            </div>

            <div>
              <div style={{ color: 'white', fontWeight: 'bold', fontSize: 16, textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                {profileData.name}
              </div>
              <div style={{ color: '#a0d0ff', fontSize: 11, marginTop: 2 }}>
                Computer Science · Developer · Designer
              </div>
              <div style={{
                marginTop: 6,
                fontSize: 10,
                color: '#ffdd88',
                display: 'inline-block',
                background: 'rgba(0,0,0,0.3)',
                padding: '2px 8px',
                borderRadius: 4,
              }}>
                ▶ Click to Log In
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Turn Off Button */}
      <div style={{
        height: 50,
        background: 'linear-gradient(180deg, #002266 0%, #001a4e 100%)',
        borderTop: '2px solid #e8b000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
      }}>
        {onShutDown && (
          <button
            onClick={onShutDown}
            className="xp-button"
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 'bold' }}
          >
            <span style={{ color: '#e83030' }}>⏻</span> {t.system.turnOff}
          </button>
        )}
        <span style={{ color: '#88aadd', fontSize: 11 }}>
          Saniya XP — Interactive Portfolio Experience
        </span>
      </div>
    </div>
  );
}
