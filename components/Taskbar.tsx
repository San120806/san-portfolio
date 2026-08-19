'use client';

import { useState, useEffect } from 'react';
import StartMenu from './StartMenu';

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
}

// XP Windows logo SVG
function XPLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22">
      <path d="M0 5.5 L10 4 L10 11 L0 11 Z" fill="#e83030" />
      <path d="M11 3.5 L22 2 L22 11 L11 11 Z" fill="#60b030" />
      <path d="M0 12 L10 12 L10 19 L0 17.5 Z" fill="#2060d0" />
      <path d="M11 12 L22 12 L22 21 L11 19.5 Z" fill="#e8b000" />
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
}: TaskbarProps) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      setTime(`${h}:${m}`);
      setDate(now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {startMenuOpen && (
        <StartMenu onOpen={onOpenWindow} onClose={onStartMenuClose} />
      )}
      <div className="xp-taskbar">
        {/* Start button */}
        <button
          className="xp-start-btn"
          onClick={onStartClick}
        >
          <XPLogo />
          <span>start</span>
        </button>

        {/* Quick launch divider */}
        <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.2)', margin: '0 2px' }} />

        {/* Window tasks */}
        <div style={{ display: 'flex', gap: 2, flex: 1, overflow: 'hidden', padding: '0 4px' }}>
          {windows.map(win => (
            <button
              key={win.id}
              className={`taskbar-task ${win.isActive && !win.isMinimized ? 'active' : ''}`}
              onClick={() => onWindowClick(win.id)}
              title={win.title}
            >
              {win.icon && <span style={{ fontSize: 13 }}>{win.icon}</span>}
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: 11 }}>
                {win.title}
              </span>
            </button>
          ))}
        </div>

        {/* System tray */}
        <div className="xp-tray">
          <span style={{ fontSize: 14 }}>🔊</span>
          <span style={{ fontSize: 14 }}>📶</span>
          <div className="xp-tray-clock">
            <div style={{ fontWeight: 'bold' }}>{time}</div>
            <div style={{ fontSize: 9 }}>{date}</div>
          </div>
        </div>
      </div>
    </>
  );
}
