'use client';

import { useState } from 'react';
import { profileData } from '@/data/profile';
import { en } from '@/data/i18n/en';
import { hi } from '@/data/i18n/hi';

interface StartMenuProps {
  onOpen: (windowId: string) => void;
  onClose: () => void;
  lang: 'en' | 'hi';
  onLogOff: () => void;
  onShutDown: () => void;
}

export default function StartMenu({ onOpen, onClose, lang, onLogOff, onShutDown }: StartMenuProps) {
  const t = lang === 'hi' ? hi : en;
  const [showAllPrograms, setShowAllPrograms] = useState(false);

  const handleItem = (id: string) => {
    onOpen(id);
    onClose();
  };

  const primaryLeft = [
    { id: 'projects', label: t.desktop.myProjects, icon: '🌐', desc: 'Explore portfolio applications' },
    { id: 'resume', label: t.desktop.myResume, icon: '📄', desc: 'View PDF / Document resume' },
    { id: 'about', label: t.desktop.aboutMe, icon: '👤', desc: 'Bio, skills & background' },
    { id: 'contact', label: t.desktop.contactMe, icon: '✉️', desc: 'Send an email message' },
    { id: 'messenger', label: t.desktop.saniyaBot, icon: '💬', desc: 'Interactive chat assistant' },
  ];

  const secondaryApps = [
    { id: 'cmd', label: t.desktop.cmd, icon: '💻' },
    { id: 'notepad', label: t.desktop.notepad, icon: '📝' },
    { id: 'paint', label: 'Paint (Doodle)', icon: '🎨' },
    { id: 'media', label: t.desktop.mediaPlayer, icon: '🎵' },
    { id: 'display', label: t.desktop.displayProperties, icon: '⚙️' },
  ];

  const rightItems = [
    { id: 'about', label: t.startMenu.documents, icon: '📁' },
    { id: 'projects', label: t.startMenu.pictures, icon: '🖼️' },
    { id: 'display', label: t.startMenu.controlPanel, icon: '⚙️' },
    { id: 'cmd', label: t.startMenu.search, icon: '🔍' },
    { id: 'messenger', label: t.startMenu.help, icon: '❓' },
  ];

  return (
    <div className="xp-start-menu" onClick={e => e.stopPropagation()}>
      {/* Header with User Info */}
      <div className="xp-start-menu-header">
        <div style={{
          width: 44, height: 44, borderRadius: 6,
          background: 'linear-gradient(135deg, #4a80d4, #1a50a0)',
          border: '2px solid #ffcc00',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22, flexShrink: 0,
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
        }}>
          👩‍💻
        </div>
        <div>
          <div className="xp-start-menu-name">{profileData.name}</div>
          <div style={{ color: '#d0e4ff', fontSize: 11 }}>Computer Science · Developer · Designer</div>
        </div>
      </div>

      {/* Body: Left Pinned & Right Quick Access */}
      <div className="xp-start-menu-body">
        {/* Left Column */}
        <div className="xp-start-menu-left" style={{ position: 'relative' }}>
          <div style={{ padding: '3px 8px', fontSize: 10, color: '#666', fontWeight: 'bold', textTransform: 'uppercase' }}>
            {t.startMenu.pinned}
          </div>

          {primaryLeft.map(item => (
            <div
              key={item.id}
              className="xp-menu-item"
              onClick={() => handleItem(item.id)}
            >
              <div style={{
                width: 28, height: 28, background: '#f5f5f5',
                border: '1px solid #ddd', borderRadius: 4,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontWeight: 'bold', fontSize: 11, color: '#111' }}>{item.label}</div>
                <div style={{ fontSize: 9, color: '#777', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}

          <div className="xp-menu-separator" />

          {/* All Programs / Submenu trigger */}
          <div
            className="xp-menu-item"
            onMouseEnter={() => setShowAllPrograms(true)}
            onClick={() => setShowAllPrograms(!showAllPrograms)}
            style={{ fontWeight: 'bold', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: '#27ae60', fontSize: 14 }}>▶</span>
              <span>{t.startMenu.allPrograms}</span>
            </div>
            <span style={{ fontSize: 10 }}>▶</span>
          </div>

          {/* All Programs Flyout Menu */}
          {showAllPrograms && (
            <div
              style={{
                position: 'absolute',
                left: '100%',
                bottom: 0,
                width: 170,
                background: '#ffffff',
                border: '1px solid #716f64',
                boxShadow: '3px 3px 6px rgba(0,0,0,0.3)',
                padding: '4px 0',
                zIndex: 10001,
              }}
              onMouseLeave={() => setShowAllPrograms(false)}
            >
              <div style={{ padding: '2px 8px', fontSize: 9, color: '#888', fontWeight: 'bold' }}>
                Accessories
              </div>
              {secondaryApps.map(app => (
                <div
                  key={app.id}
                  className="xp-menu-item"
                  onClick={() => handleItem(app.id)}
                  style={{ padding: '4px 8px' }}
                >
                  <span style={{ fontSize: 14 }}>{app.icon}</span>
                  <span style={{ fontSize: 11 }}>{app.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="xp-start-menu-right">
          <div style={{ padding: '3px 8px', fontSize: 10, color: '#3458a0', fontWeight: 'bold', textTransform: 'uppercase' }}>
            {t.startMenu.quickAccess}
          </div>

          {rightItems.map(item => (
            <div
              key={item.id}
              className="xp-menu-item"
              onClick={() => handleItem(item.id)}
              style={{ fontSize: 11, color: '#001a4e' }}
            >
              <span style={{ fontSize: 15 }}>{item.icon}</span>
              <span style={{ fontWeight: '600' }}>{item.label}</span>
            </div>
          ))}

          <div className="xp-menu-separator" />

          {/* Secondary Utilities */}
          {secondaryApps.slice(0, 3).map(app => (
            <div
              key={app.id}
              className="xp-menu-item"
              onClick={() => handleItem(app.id)}
              style={{ fontSize: 11, color: '#001a4e' }}
            >
              <span style={{ fontSize: 14 }}>{app.icon}</span>
              <span>{app.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer with Log Off and Turn Off */}
      <div className="xp-start-menu-footer">
        <button
          className="xp-button"
          onClick={() => { onClose(); onLogOff(); }}
          style={{ display: 'flex', alignItems: 'center', gap: 4 }}
        >
          <span style={{ color: '#ff9900' }}>🔑</span> {t.system.logOff}
        </button>

        <button
          className="xp-button"
          onClick={() => { onClose(); onShutDown(); }}
          style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 'bold' }}
        >
          <span style={{ color: '#e83030' }}>⏻</span> {t.system.turnOff}
        </button>
      </div>
    </div>
  );
}
