'use client';

import { useState } from 'react';

interface DisplayProps {
  currentTheme: 'classic' | 'silver' | 'olive';
  onThemeChange: (theme: 'classic' | 'silver' | 'olive') => void;
  crtEnabled: boolean;
  onCrtToggle: (enabled: boolean) => void;
  soundEnabled: boolean;
  onSoundToggle: (enabled: boolean) => void;
}

export default function DisplayPropertiesWindow({
  currentTheme,
  onThemeChange,
  crtEnabled,
  onCrtToggle,
  soundEnabled,
  onSoundToggle,
}: DisplayProps) {
  const [activeTab, setActiveTab] = useState<'themes' | 'desktop' | 'appearance' | 'settings'>('themes');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#ece9d8', padding: 8 }}>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: 2, borderBottom: '1px solid #999', paddingLeft: 4 }}>
        {[
          { id: 'themes', label: 'Themes' },
          { id: 'desktop', label: 'Desktop' },
          { id: 'appearance', label: 'Appearance' },
          { id: 'settings', label: 'Settings' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            style={{
              padding: '3px 10px',
              fontSize: 11,
              border: '1px solid #999',
              borderBottom: activeTab === tab.id ? '1px solid #ece9d8' : '1px solid #999',
              background: activeTab === tab.id ? '#ece9d8' : '#e0ddd5',
              borderRadius: '3px 3px 0 0',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal',
              cursor: 'pointer',
              marginBottom: activeTab === tab.id ? -1 : 0,
              zIndex: activeTab === tab.id ? 2 : 1,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div style={{
        flex: 1,
        border: '1px solid #999',
        borderTop: 'none',
        padding: 12,
        background: '#ece9d8',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}>
        {activeTab === 'themes' && (
          <div>
            <div style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 6 }}>Windows XP Color Scheme:</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { id: 'classic', name: 'Default (Luna Blue)', preview: '#1d6ad4' },
                { id: 'silver', name: 'Silver (Metallic XP)', preview: '#a0a4aa' },
                { id: 'olive', name: 'Olive Green (Homestead)', preview: '#6b8e23' },
              ].map(th => (
                <label
                  key={th.id}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, cursor: 'pointer' }}
                >
                  <input
                    type="radio"
                    name="theme"
                    checked={currentTheme === th.id}
                    onChange={() => onThemeChange(th.id as typeof currentTheme)}
                  />
                  <div style={{ width: 14, height: 14, background: th.preview, border: '1px solid #333', borderRadius: 2 }} />
                  <span>{th.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'desktop' && (
          <div>
            <div style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 6 }}>Wallpaper & Visual Effects:</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={crtEnabled}
                  onChange={e => onCrtToggle(e.target.checked)}
                />
                <span>📺 Enable CRT Retro Monitor Scanlines & Curve Effect</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={soundEnabled}
                  onChange={e => onSoundToggle(e.target.checked)}
                />
                <span>🔊 Enable Windows XP Audio Chimes & Sound Effects</span>
              </label>
            </div>
          </div>
        )}

        {activeTab === 'appearance' && (
          <div style={{ fontSize: 11 }}>
            <div style={{ fontWeight: 'bold', marginBottom: 6 }}>Effects & Font Smoothing:</div>
            <p style={{ color: '#444', lineHeight: 1.5 }}>
              Standard Windows XP Tahoma Subpixel rendering is enabled by default.
              Window animations, minimize swish, and active shadows are fully hardware accelerated.
            </p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div style={{ fontSize: 11 }}>
            <div style={{ fontWeight: 'bold', marginBottom: 6 }}>Screen Resolution & Device Display:</div>
            <p style={{ color: '#444', lineHeight: 1.5 }}>
              Active Display: 32-bit True Color (Hardware Scaled).
              Fully responsive across desktop, tablet, and mobile breakpoints.
            </p>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6, marginTop: 8 }}>
        <button className="xp-button" style={{ minWidth: 60, fontWeight: 'bold' }}>OK</button>
        <button className="xp-button" style={{ minWidth: 60 }}>Cancel</button>
        <button className="xp-button" style={{ minWidth: 60 }}>Apply</button>
      </div>
    </div>
  );
}
