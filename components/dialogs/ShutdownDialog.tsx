'use client';

import { en } from '@/data/i18n/en';
import { hi } from '@/data/i18n/hi';

interface ShutdownDialogProps {
  onCancel: () => void;
  onTurnOff: () => void;
  onRestart: () => void;
  onStandBy: () => void;
  lang: 'en' | 'hi';
}

export default function ShutdownDialog({ onCancel, onTurnOff, onRestart, onStandBy, lang }: ShutdownDialogProps) {
  const t = lang === 'hi' ? hi : en;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'grayscale(100%)',
      zIndex: 9999999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Tahoma, sans-serif',
      userSelect: 'none',
    }}>
      <div style={{
        width: 380,
        background: 'linear-gradient(180deg, #1d6ad4 0%, #0047c0 28px, #003399 100%)',
        border: '2px solid #002266',
        borderRadius: 8,
        boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
        overflow: 'hidden',
        color: 'white',
      }}>
        {/* Header */}
        <div style={{
          padding: '8px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
        }}>
          <span style={{ fontWeight: 'bold', fontSize: 13, textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
            {t.system.turnOffDialogTitle}
          </span>
          <div style={{ display: 'flex', gap: 2 }}>
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M1 5.5 Q 6 3 10 4 L 10 11 L 1 11 Z" fill="#e83030" />
              <path d="M11 3.8 Q 16 2.2 21 2.5 L 21 11 L 11 11 Z" fill="#60b030" />
              <path d="M1 12 L 10 12 L 10 19 Q 5 18 1 16 Z" fill="#2060d0" />
              <path d="M11 12 L 21 12 L 21 20.5 Q 16 19 11 17.5 Z" fill="#e8b000" />
            </svg>
          </div>
        </div>

        {/* 3 Action Buttons */}
        <div style={{
          padding: '24px 20px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          background: 'linear-gradient(180deg, #003399 0%, #002266 100%)',
        }}>
          {/* Stand By */}
          <button
            onClick={onStandBy}
            className="hover:scale-110"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              color: 'white', fontSize: 11,
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              border: '2px solid #ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            }}>
              🌙
            </div>
            <span>{t.system.standby}</span>
          </button>

          {/* Turn Off */}
          <button
            onClick={onTurnOff}
            className="hover:scale-110"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              color: 'white', fontSize: 11, fontWeight: 'bold',
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
              border: '2px solid #ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            }}>
              ⏻
            </div>
            <span>{t.system.turnOff}</span>
          </button>

          {/* Restart */}
          <button
            onClick={onRestart}
            className="hover:scale-110"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              color: 'white', fontSize: 11,
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981, #047857)',
              border: '2px solid #ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            }}>
              🔄
            </div>
            <span>{t.system.restart}</span>
          </button>
        </div>

        {/* Cancel Button */}
        <div style={{
          padding: '8px 16px',
          background: '#001a4e',
          display: 'flex',
          justifyContent: 'flex-end',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <button
            className="xp-button"
            onClick={onCancel}
            style={{ padding: '3px 18px', fontWeight: 'bold' }}
          >
            {t.system.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}
