'use client';

import { useState, useEffect } from 'react';
import Taskbar from '@/components/Taskbar';
import XPWindow from '@/components/XPWindow';
import BootScreen from '@/components/boot/BootScreen';
import WelcomeScreen from '@/components/boot/WelcomeScreen';
import LoginScreen from '@/components/boot/LoginScreen';
import ShutdownDialog from '@/components/dialogs/ShutdownDialog';
import AboutMeWindow from '@/components/windows/AboutMeWindow';
import ProjectsWindow from '@/components/windows/ProjectsWindow';
import ContactWindow from '@/components/windows/ContactWindow';
import MessengerWindow from '@/components/windows/MessengerWindow';
import ResumeWindow from '@/components/windows/ResumeWindow';
import CmdWindow from '@/components/windows/CmdWindow';
import NotepadWindow from '@/components/windows/NotepadWindow';
import PaintWindow from '@/components/windows/PaintWindow';
import MediaPlayerWindow from '@/components/windows/MediaPlayerWindow';
import DisplayPropertiesWindow from '@/components/windows/DisplayPropertiesWindow';
import { soundManager } from '@/lib/soundEffects';
import { en } from '@/data/i18n/en';
import { hi } from '@/data/i18n/hi';

interface WindowState {
  id: string;
  title: string;
  icon: string;
  isMinimized: boolean;
  zIndex: number;
  width?: number;
  height?: number;
  defaultX?: number;
  defaultY?: number;
}

export default function Home() {
  // OS Life Cycle States: boot -> welcome -> desktop
  const [osState, setOsState] = useState<'boot' | 'welcome' | 'login' | 'desktop' | 'turned-off'>('boot');
  const [shutdownModalOpen, setShutdownModalOpen] = useState(false);
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  // User Preferences
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [crtEnabled, setCrtEnabled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'classic' | 'silver' | 'olive'>('classic');

  // Desktop State
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [activeWindowId, setActiveWindowId] = useState<string | null>('projects');
  const [topZ, setTopZ] = useState(10);
  const [isNudging, setIsNudging] = useState(false);

  const t = lang === 'hi' ? hi : en;

  // Active windows
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'projects',
      title: 'My Projects - Internet Explorer',
      icon: '🌐',
      isMinimized: false,
      zIndex: 10,
      width: 780,
      height: 520,
      defaultX: 90,
      defaultY: 40,
    },
  ]);

  const handleBootComplete = () => {
    setOsState('login');
  };

  const handleWelcomeComplete = () => {
    if (soundEnabled) soundManager.playStartup();
    setOsState('desktop');
  };

  const handleLogin = () => {
    setOsState('welcome');
  };

  const handleLogOff = () => {
    if (soundEnabled) soundManager.playDing();
    setStartMenuOpen(false);
    setOsState('login');
  };

  const handleTurnOff = () => {
    if (soundEnabled) soundManager.playMinimize();
    setShutdownModalOpen(false);
    setOsState('turned-off');
  };

  const handleRestart = () => {
    setShutdownModalOpen(false);
    setWindows([]);
    setOsState('boot');
  };

  const openWindow = (id: string) => {
    if (soundEnabled) soundManager.playClick();
    setStartMenuOpen(false);

    // If window is already open
    const existing = windows.find(w => w.id === id);
    if (existing) {
      const nextZ = topZ + 1;
      setTopZ(nextZ);
      setActiveWindowId(id);
      setWindows(prev =>
        prev.map(w => (w.id === id ? { ...w, isMinimized: false, zIndex: nextZ } : w))
      );
      return;
    }

    // Default metadata by ID
    const metaMap: Record<string, { title: string; icon: string; width: number; height: number; defaultX: number; defaultY: number }> = {
      projects: { title: `${t.desktop.myProjects} - Internet Explorer`, icon: '🌐', width: 800, height: 530, defaultX: 80, defaultY: 30 },
      about: { title: `${t.desktop.aboutMe} - Explorer`, icon: '/icons/aboutme.png', width: 820, height: 560, defaultX: 90, defaultY: 35 },
      resume: { title: `${t.desktop.myResume} - Adobe Reader`, icon: '📄', width: 700, height: 540, defaultX: 130, defaultY: 40 },
      contact: { title: `${t.desktop.contactMe} - Outlook Express`, icon: '✉️', width: 640, height: 440, defaultX: 150, defaultY: 70 },
      messenger: { title: `${t.desktop.saniyaBot} - Windows Messenger`, icon: '💬', width: 440, height: 480, defaultX: 200, defaultY: 60 },
      cmd: { title: 'Command Prompt (cmd.exe)', icon: '💻', width: 560, height: 360, defaultX: 160, defaultY: 100 },
      notepad: { title: 'Saniya\'s Notes.txt - Notepad', icon: '📝', width: 520, height: 380, defaultX: 180, defaultY: 80 },
      paint: { title: 'Paint (Doodle Canvas)', icon: '🎨', width: 620, height: 440, defaultX: 140, defaultY: 70 },
      media: { title: 'Windows Media Player 9', icon: '🎵', width: 500, height: 400, defaultX: 220, defaultY: 90 },
      display: { title: 'Display Properties', icon: '⚙️', width: 460, height: 380, defaultX: 190, defaultY: 110 },
    };

    const meta = metaMap[id] || { title: id, icon: '📁', width: 600, height: 400, defaultX: 100, defaultY: 100 };
    const nextZ = topZ + 1;
    setTopZ(nextZ);
    setActiveWindowId(id);

    setWindows(prev => [
      ...prev,
      {
        id,
        title: meta.title,
        icon: meta.icon,
        isMinimized: false,
        zIndex: nextZ,
        width: meta.width,
        height: meta.height,
        defaultX: meta.defaultX,
        defaultY: meta.defaultY,
      },
    ]);
  };

  const closeWindow = (id: string) => {
    if (soundEnabled) soundManager.playClick();
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const minimizeWindow = (id: string) => {
    if (soundEnabled) soundManager.playMinimize();
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, isMinimized: true } : w))
    );
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const focusWindow = (id: string) => {
    const nextZ = topZ + 1;
    setTopZ(nextZ);
    setActiveWindowId(id);
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, isMinimized: false, zIndex: nextZ } : w))
    );
  };

  const handleTaskbarWindowClick = (id: string) => {
    const win = windows.find(w => w.id === id);
    if (!win) return;

    if (win.isMinimized) {
      focusWindow(id);
    } else if (activeWindowId === id) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  };

  const handleNudgeShake = () => {
    setIsNudging(true);
    setTimeout(() => setIsNudging(false), 500);
  };

  // Render content per window
  const renderWindowContent = (id: string) => {
    switch (id) {
      case 'projects':
        return <ProjectsWindow lang={lang} />;
      case 'about':
        return <AboutMeWindow lang={lang} onOpenWindow={openWindow} />;
      case 'resume':
        return <ResumeWindow />;
      case 'contact':
        return <ContactWindow lang={lang} />;
      case 'messenger':
        return <MessengerWindow lang={lang} onOpenWindow={openWindow} onNudgeTrigger={handleNudgeShake} />;
      case 'cmd':
        return <CmdWindow onOpenWindow={openWindow} />;
      case 'notepad':
        return <NotepadWindow lang={lang} />;
      case 'paint':
        return <PaintWindow />;
      case 'media':
        return <MediaPlayerWindow />;
      case 'display':
        return (
          <DisplayPropertiesWindow
            currentTheme={currentTheme}
            onThemeChange={setCurrentTheme}
            crtEnabled={crtEnabled}
            onCrtToggle={setCrtEnabled}
            soundEnabled={soundEnabled}
            onSoundToggle={setSoundEnabled}
          />
        );
      default:
        return <div style={{ padding: 20 }}>Application loaded.</div>;
    }
  };

  // Desktop Icons Configuration
  const desktopIcons = [
    { id: 'projects', label: t.desktop.myProjects, icon: '🌐' },
    { id: 'about', label: t.desktop.aboutMe, icon: '👤', iconImage: '/icons/aboutme.png' },
    { id: 'resume', label: t.desktop.myResume, icon: '📄' },
    { id: 'contact', label: t.desktop.contactMe, icon: '✉️' },
    { id: 'messenger', label: t.desktop.saniyaBot, icon: '💬' },
    { id: 'cmd', label: t.desktop.cmd, icon: '💻' },
    { id: 'notepad', label: t.desktop.notepad, icon: '📝' },
    { id: 'paint', label: 'Paint', icon: '🎨' },
    { id: 'media', label: t.desktop.mediaPlayer, icon: '🎵' },
    { id: 'display', label: t.desktop.displayProperties, icon: '⚙️' },
    { id: 'recycle', label: t.desktop.recycleBin, icon: '🗑️' },
  ];

  // Turned-Off Black Screen
  if (osState === 'turned-off') {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ff9900',
        fontFamily: 'Tahoma, sans-serif',
        userSelect: 'none',
      }}>
        <div style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' }}>
          {t.system.safeToTurnOff}
        </div>
        <button
          className="xp-button"
          onClick={() => { setOsState('boot'); }}
          style={{ padding: '8px 24px', fontSize: 13, fontWeight: 'bold' }}
        >
          🔄 {t.system.restartSaniyaXP}
        </button>
      </div>
    );
  }

  // Boot sequence
  if (osState === 'boot') {
    return <BootScreen onComplete={handleBootComplete} />;
  }

  // Welcome sequence
  if (osState === 'welcome') {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  // Login sequence
  if (osState === 'login') {
    return (
      <LoginScreen
        onLogin={handleLogin}
        lang={lang}
        onRestart={handleRestart}
        onShutDown={() => setShutdownModalOpen(true)}
      />
    );
  }

  return (
    <div
      className={`xp-desktop-bg ${crtEnabled ? 'crt-effect' : ''} ${isNudging ? 'animate-bounce' : ''}`}
      onClick={() => {
        setSelectedIcon(null);
        setContextMenu(null);
        if (startMenuOpen) setStartMenuOpen(false);
      }}
      onContextMenu={e => {
        e.preventDefault();
        setContextMenu({ x: e.clientX, y: e.clientY });
      }}
    >
      {/* Bliss Landscape Background */}
      <div className="xp-bliss-landscape" />

      {/* Desktop Icons Column (Left aligned, vertically stacked) */}
      <div style={{
        position: 'absolute',
        top: 14,
        left: 14,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: 10,
        maxHeight: 'calc(100vh - 70px)',
        zIndex: 5,
      }}>
        {desktopIcons.map(icon => (
          <div
            key={icon.id}
            className={`desktop-icon ${selectedIcon === icon.id ? 'selected' : ''}`}
            onClick={e => {
              e.stopPropagation();
              setSelectedIcon(icon.id);
            }}
            onDoubleClick={e => {
              e.stopPropagation();
              if (icon.id === 'recycle') {
                if (soundEnabled) soundManager.playDing();
              } else {
                openWindow(icon.id);
              }
            }}
            onTouchEnd={e => {
              e.stopPropagation();
              if (selectedIcon === icon.id) {
                if (icon.id !== 'recycle') openWindow(icon.id);
              } else {
                setSelectedIcon(icon.id);
              }
            }}
          >
            <div style={{
              width: 42,
              height: 42,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.6))',
            }}>
              {icon.iconImage ? (
                <img
                  src={icon.iconImage}
                  alt={icon.label}
                  style={{ width: 38, height: 38, objectFit: 'contain' }}
                />
              ) : (
                icon.icon
              )}
            </div>
            <span>{icon.label}</span>
          </div>
        ))}
      </div>

      {/* Render All Open Windows */}
      {windows.map(win => (
        <XPWindow
          key={win.id}
          id={win.id}
          title={win.title}
          icon={win.icon}
          zIndex={win.zIndex}
          isActive={activeWindowId === win.id}
          isMinimized={win.isMinimized}
          width={win.width}
          height={win.height}
          defaultX={win.defaultX}
          defaultY={win.defaultY}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={focusWindow}
        >
          {renderWindowContent(win.id)}
        </XPWindow>
      ))}

      {/* Right Click Desktop Context Menu */}
      {contextMenu && (
        <div
          onClick={e => e.stopPropagation()}
          style={{
            position: 'fixed',
            left: Math.min(contextMenu.x, typeof window !== 'undefined' ? window.innerWidth - 180 : contextMenu.x),
            top: Math.min(contextMenu.y, typeof window !== 'undefined' ? window.innerHeight - 160 : contextMenu.y),
            background: '#ffffff',
            border: '1px solid #716f64',
            boxShadow: '3px 3px 6px rgba(0,0,0,0.3)',
            zIndex: 999999,
            padding: '2px 0',
            width: 170,
            fontSize: 11,
          }}
        >
          <div className="xp-menu-item" onClick={() => setContextMenu(null)}>
            <span>📁</span> Arrange Icons
          </div>
          <div
            className="xp-menu-item"
            onClick={() => {
              if (soundEnabled) soundManager.playClick();
              setContextMenu(null);
            }}
          >
            <span>🔄</span> Refresh
          </div>
          <div className="xp-menu-separator" />
          <div className="xp-menu-item" onClick={() => { openWindow('notepad'); setContextMenu(null); }}>
            <span>📝</span> New Text Document
          </div>
          <div className="xp-menu-separator" />
          <div className="xp-menu-item" onClick={() => { openWindow('display'); setContextMenu(null); }}>
            <span>⚙️</span> {t.desktop.displayProperties}
          </div>
        </div>
      )}

      {/* Shut Down Modal Dialog */}
      {shutdownModalOpen && (
        <ShutdownDialog
          lang={lang}
          onCancel={() => setShutdownModalOpen(false)}
          onTurnOff={handleTurnOff}
          onRestart={handleRestart}
          onStandBy={() => {
            if (soundEnabled) soundManager.playDing();
            setShutdownModalOpen(false);
          }}
        />
      )}

      {/* Taskbar */}
      <Taskbar
        windows={windows.map(w => ({
          id: w.id,
          title: w.title,
          icon: w.icon,
          isMinimized: w.isMinimized,
          isActive: activeWindowId === w.id,
        }))}
        onWindowClick={handleTaskbarWindowClick}
        onOpenWindow={openWindow}
        startMenuOpen={startMenuOpen}
        onStartClick={() => {
          if (soundEnabled) soundManager.playClick();
          setStartMenuOpen(!startMenuOpen);
        }}
        onStartMenuClose={() => setStartMenuOpen(false)}
        lang={lang}
        onLangToggle={() => setLang(lang === 'en' ? 'hi' : 'en')}
        soundEnabled={soundEnabled}
        onSoundToggle={() => setSoundEnabled(!soundEnabled)}
        crtEnabled={crtEnabled}
        onCrtToggle={() => setCrtEnabled(!crtEnabled)}
        onLogOff={handleLogOff}
        onShutDown={() => {
          setStartMenuOpen(false);
          setShutdownModalOpen(true);
        }}
      />
    </div>
  );
}
