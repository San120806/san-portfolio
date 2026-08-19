'use client';

interface StartMenuProps {
  onOpen: (windowId: string) => void;
  onClose: () => void;
}

const leftItems = [
  { id: 'projects', label: 'My Projects', icon: '🌐', desc: 'View my work' },
  { id: 'contact', label: 'Contact Me', icon: '✉️', desc: 'Send a message' },
  { id: 'about', label: 'About Me', icon: '👤', desc: undefined },
  { id: 'messenger', label: 'Live Messenger', icon: '💬', desc: undefined },
];

const rightItems = [
  { id: 'about', label: 'About Me', icon: '👤' },
  { id: 'projects', label: 'My Projects', icon: '🌐' },
  { id: 'contact', label: 'Contact Me', icon: '✉️' },
  { id: 'messenger', label: 'Live Messenger', icon: '💬' },
];

export default function StartMenu({ onOpen, onClose }: StartMenuProps) {
  const handleItem = (id: string) => {
    onOpen(id);
    onClose();
  };

  return (
    <div className="xp-start-menu" onClick={e => e.stopPropagation()}>
      {/* Header */}
      <div className="xp-start-menu-header">
        <div style={{
          width: 48, height: 48, borderRadius: 4,
          background: 'linear-gradient(135deg, #4a80d4, #1a50a0)',
          border: '2px solid #1a3880',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24,
        }}>
          👩‍💻
        </div>
        <div>
          <div className="xp-start-menu-name">Saniya Kapure</div>
          <div style={{ color: '#b0d0ff', fontSize: 11 }}>Developer & Designer</div>
        </div>
      </div>

      {/* Body */}
      <div className="xp-start-menu-body">
        {/* Left column */}
        <div className="xp-start-menu-left">
          <div style={{ padding: '4px 8px 2px', fontSize: 10, color: '#888', fontWeight: 'bold' }}>
            Pinned
          </div>
          {leftItems.map(item => (
            <div
              key={item.id}
              className="xp-menu-item"
              onClick={() => handleItem(item.id)}
            >
              <div style={{
                width: 32, height: 32, background: '#e8e8e8',
                border: '1px solid #ccc', borderRadius: 3,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: 12 }}>{item.label}</div>
                {item.desc && <div style={{ fontSize: 10, color: '#888' }}>{item.desc}</div>}
              </div>
            </div>
          ))}

          <div className="xp-menu-separator" />

          <div style={{ padding: '4px 8px 2px', fontSize: 10, color: '#888', fontWeight: 'bold' }}>
            All Programs ▶
          </div>
          <div className="xp-menu-item" onClick={() => handleItem('messenger')}>
            <span style={{ fontSize: 18 }}>💬</span>
            <span>Live Messenger</span>
          </div>
        </div>

        {/* Right column */}
        <div className="xp-start-menu-right">
          <div style={{ padding: '4px 8px 2px', fontSize: 10, color: '#3458a0', fontWeight: 'bold' }}>
            Quick Access
          </div>
          {rightItems.map(item => (
            <div
              key={item.id}
              className="xp-menu-item"
              onClick={() => handleItem(item.id)}
              style={{ fontSize: 12 }}
            >
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}

          <div className="xp-menu-separator" />

          <div className="xp-menu-item">
            <span style={{ fontSize: 16 }}>🔍</span>
            <span>Search</span>
          </div>
          <div className="xp-menu-item">
            <span style={{ fontSize: 16 }}>⚙️</span>
            <span>Settings</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="xp-start-menu-footer">
        <button className="xp-button" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span>🚪</span> Log Off
        </button>
        <button className="xp-button" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span>🔴</span> Shut Down
        </button>
      </div>
    </div>
  );
}
