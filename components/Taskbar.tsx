'use client';

import { useState, useEffect } from 'react';
import StartMenu from './StartMenu';
import { en } from '@/data/i18n/en';
import { hi } from '@/data/i18n/hi';

interface TaskbarWindow {
  id: string;
  title: string;
  icon?: string;
  isMinimized: boolean;
  isActive: boolean;
}

interface TaskbarProps {
  windows: TaskbarWindow[];
  onWindowClick: (id: string) => void;
  onOpenWindow: (id: string) => void;
  startMenuOpen: boolean;
  onStartClick: () => void;
  onStartMenuClose: () => void;
  lang: 'en' | 'hi';
  onLangToggle: () => void;
  soundEnabled: boolean;
  onSoundToggle: () => void;
  crtEnabled: boolean;
  onCrtToggle: () => void;
  onLogOff: () => void;
  onShutDown: () => void;
}

// 4-Color Windows XP Logo
function XPLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 22 22" style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.5))' }}>
      <path d="M1 5.5 Q 6 3 10 4 L 10 11 L 1 11 Z" fill="#e83030" />
      <path d="M11 3.8 Q 16 2.2 21 2.5 L 21 11 L 11 11 Z" fill="#60b030" />
      <path d="M1 12 L 10 12 L 10 19 Q 5 18 1 16 Z" fill="#2060d0" />
      <path d="M11 12 L 21 12 L 21 20.5 Q 16 19 11 17.5 Z" fill="#e8b000" />
    </svg>
  );
}

export default function Taskbar({
  windows,
  onWindowClick,
  onOpenWindow,
  startMenuOpen,
  onStartClick,
  onStartMenuClose,
  lang,
  onLangToggle,
  soundEnabled,
  onSoundToggle,
  crtEnabled,
  onCrtToggle,
  onLogOff,
  onShutDown,
}: TaskbarProps) {
  const t = lang === 'hi' ? hi : en;
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDateStr(now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {startMenuOpen && (
        <StartMenu
          onOpen={onOpenWindow}
          onClose={onStartMenuClose}
          lang={lang}
          onLogOff={onLogOff}
          onShutDown={onShutDown}
        />
      )}

      <div className="xp-taskbar">
        {/* Start Button */}
        <button
          className={`xp-start-btn ${startMenuOpen ? 'pressed' : ''}`}
          onClick={onStartClick}
        >
          <XPLogo />
          <span>{t.system.start}</span>
        </button>

        {/* Quick Launch separator */}
        <div style={{ width: 1, height: 26, background: 'rgba(255,255,255,0.25)', margin: '0 3px' }} />

        {/* Open Windows / Tasks List */}
        <div style={{ display: 'flex', gap: 3, flex: 1, overflowX: 'auto', padding: '0 4px' }}>
          {windows.map(win => (
            <button
              key={win.id}
              className={`taskbar-task ${win.isActive && !win.isMinimized ? 'active' : ''}`}
              onClick={() => onWindowClick(win.id)}
              title={win.title}
            >
              {win.icon && (
                win.icon.startsWith('/') ? (
                  <img src={win.icon} alt="" style={{ width: 14, height: 14, objectFit: 'contain' }} />
                ) : (
                  <span style={{ fontSize: 13 }}>{win.icon}</span>
                )
              )}
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {win.title}
              </span>
            </button>
          ))}
        </div>

        {/* System Notification Tray */}
        <div className="xp-tray">
          {/* CRT Monitor Toggle */}
          <button
            onClick={onCrtToggle}
            title={crtEnabled ? 'Disable CRT Scanlines' : 'Enable CRT Scanlines'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, opacity: crtEnabled ? 1 : 0.6 }}
          >
            📺
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onSoundToggle}
            title={soundEnabled ? 'Mute Audio' : 'Unmute Audio'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13 }}
          >
            {soundEnabled ? '🔊' : '🔇'}
          </button>

          {/* Language Switcher */}
          <button
            onClick={onLangToggle}
            className="xp-button"
            title="Switch Language / भाषा बदलें"
            style={{ padding: '1px 5px', fontSize: 10, fontWeight: 'bold' }}
          >
            {lang === 'en' ? 'EN' : 'हिन्दी'}
          </button>

          {/* Live Clock with Date Tooltip */}
          <div className="xp-tray-clock" title={dateStr}>
            {timeStr}
          </div>
        </div>
      </div>
    </>
  );
}
