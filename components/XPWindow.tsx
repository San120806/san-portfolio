'use client';

import { useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';

interface XPWindowProps {
  id: string;
  title: string;
  icon?: string;
  children: React.ReactNode;
  width?: number;
  height?: number;
  defaultX?: number;
  defaultY?: number;
  isActive?: boolean;
  isMinimized?: boolean;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  onMinimize: (id: string) => void;
  zIndex: number;
}

export default function XPWindow({
  id,
  title,
  icon,
  children,
  width = 680,
  height = 460,
  defaultX = 80,
  defaultY = 40,
  isActive = true,
  isMinimized = false,
  onClose,
  onFocus,
  onMinimize,
  zIndex,
}: XPWindowProps) {
  const nodeRef = useRef<HTMLDivElement>(null!);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: defaultX, y: defaultY });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMinimized) return null;

  const handleToggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const actualWidth = isMobile || isMaximized ? '100vw' : Math.min(width, typeof window !== 'undefined' ? window.innerWidth - 20 : width);
  const actualHeight = isMobile || isMaximized ? 'calc(100vh - 40px)' : height;
  const currentPos = isMobile || isMaximized ? { x: 0, y: 0 } : position;

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".xp-titlebar"
      bounds="parent"
      disabled={isMaximized || isMobile}
      position={currentPos}
      onStop={(_, data) => setPosition({ x: data.x, y: data.y })}
    >
      <div
        ref={nodeRef}
        className={`xp-window window-open ${isActive ? 'active-window' : 'inactive-window'}`}
        style={{
          width: actualWidth,
          height: actualHeight,
          zIndex,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        onMouseDown={() => onFocus(id)}
        onTouchStart={() => onFocus(id)}
      >
        {/* Title Bar */}
        <div
          className={`xp-titlebar ${isActive ? 'xp-titlebar-active' : 'xp-titlebar-inactive'}`}
          onDoubleClick={handleToggleMaximize}
        >
          <div className="xp-titlebar-left">
            {icon && <span style={{ fontSize: 13, marginRight: 4 }}>{icon}</span>}
            <span className="xp-titlebar-title">{title}</span>
          </div>

          <div className="xp-titlebar-buttons">
            <button
              className="xp-btn-minimize"
              onClick={(e) => { e.stopPropagation(); onMinimize(id); }}
              title="Minimize"
            >
              <span style={{ transform: 'translateY(-3px)' }}>_</span>
            </button>
            <button
              className="xp-btn-maximize"
              onClick={(e) => { e.stopPropagation(); handleToggleMaximize(); }}
              title={isMaximized ? 'Restore' : 'Maximize'}
            >
              <span style={{ fontSize: 9 }}>{isMaximized ? '❐' : '□'}</span>
            </button>
            <button
              className="xp-btn-close"
              onClick={(e) => { e.stopPropagation(); onClose(id); }}
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Window Body */}
        <div
          className="xp-window-body"
          style={{
            height: 'calc(100% - 28px)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </div>
      </div>
    </Draggable>
  );
}
