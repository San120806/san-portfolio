'use client';

import { useState } from 'react';

export interface TechItem {
  id: string;
  name: string;
  category: 'LANGUAGES' | 'FRAMEWORKS & RUNTIME' | 'DATABASES & CLOUD' | 'AI & TOOLS';
  iconType: string;
  versionOrType?: string;
}

export const technicalEcosystemData: TechItem[] = [
  // LANGUAGES
  { id: 'cpp', name: 'C++', category: 'LANGUAGES', iconType: 'cpp', versionOrType: 'Compiled Language' },
  { id: 'python', name: 'Python', category: 'LANGUAGES', iconType: 'python', versionOrType: 'Scripting & AI' },
  { id: 'java', name: 'Java', category: 'LANGUAGES', iconType: 'java', versionOrType: 'OOP & Enterprise' },
  { id: 'javascript', name: 'JavaScript', category: 'LANGUAGES', iconType: 'javascript', versionOrType: 'ES6+ Web Logic' },
  { id: 'typescript', name: 'TypeScript', category: 'LANGUAGES', iconType: 'typescript', versionOrType: 'Static Type System' },
  { id: 'html', name: 'HTML5', category: 'LANGUAGES', iconType: 'html', versionOrType: 'Semantic Markup' },
  { id: 'css', name: 'CSS3', category: 'LANGUAGES', iconType: 'css', versionOrType: 'Modern Styling' },
  { id: 'shell', name: 'Shell Script', category: 'LANGUAGES', iconType: 'terminal', versionOrType: 'Bash / CLI' },

  // FRAMEWORKS & RUNTIME
  { id: 'react', name: 'React.js', category: 'FRAMEWORKS & RUNTIME', iconType: 'react', versionOrType: 'Frontend Library' },
  { id: 'nextjs', name: 'Next.js', category: 'FRAMEWORKS & RUNTIME', iconType: 'nextjs', versionOrType: 'Full-Stack App Router' },
  { id: 'nodejs', name: 'Node.js', category: 'FRAMEWORKS & RUNTIME', iconType: 'nodejs', versionOrType: 'JS Runtime' },
  { id: 'express', name: 'Express.js', category: 'FRAMEWORKS & RUNTIME', iconType: 'terminal', versionOrType: 'REST Microservices' },
  { id: 'restapi', name: 'REST API', category: 'FRAMEWORKS & RUNTIME', iconType: 'terminal', versionOrType: 'Endpoints Architecture' },
  { id: 'flutter', name: 'Flutter', category: 'FRAMEWORKS & RUNTIME', iconType: 'flutter', versionOrType: 'Cross-Platform UI' },

  // DATABASES & CLOUD
  { id: 'mongodb', name: 'MongoDB', category: 'DATABASES & CLOUD', iconType: 'mongodb', versionOrType: 'NoSQL Document DB' },
  { id: 'firebase', name: 'Firebase', category: 'DATABASES & CLOUD', iconType: 'firebase', versionOrType: 'BaaS & Realtime DB' },
  { id: 'supabase', name: 'Supabase', category: 'DATABASES & CLOUD', iconType: 'supabase', versionOrType: 'Postgres Backend' },
  { id: 'sql', name: 'SQL', category: 'DATABASES & CLOUD', iconType: 'terminal', versionOrType: 'Relational Queries' },
  { id: 'mysql', name: 'MySQL', category: 'DATABASES & CLOUD', iconType: 'terminal', versionOrType: 'RDBMS Engine' },
  { id: 'aws', name: 'AWS Cloud', category: 'DATABASES & CLOUD', iconType: 'aws', versionOrType: 'EC2, S3, RDS, VPC' },
  { id: 'docker', name: 'Docker', category: 'DATABASES & CLOUD', iconType: 'docker', versionOrType: 'Containers & Images' },

  // AI & TOOLS
  { id: 'llms', name: 'LLMs', category: 'AI & TOOLS', iconType: 'terminal', versionOrType: 'Prompt Engineering' },
  { id: 'aiagents', name: 'AI Agents', category: 'AI & TOOLS', iconType: 'terminal', versionOrType: 'Autonomous Systems' },
  { id: 'n8n', name: 'n8n', category: 'AI & TOOLS', iconType: 'terminal', versionOrType: 'Workflow Automation' },
  { id: 'figma', name: 'Figma', category: 'AI & TOOLS', iconType: 'figma', versionOrType: 'UI/UX Prototyping' },
  { id: 'systemdesign', name: 'System Design', category: 'AI & TOOLS', iconType: 'terminal', versionOrType: 'Distributed Architecture' },
  { id: 'git', name: 'Git', category: 'AI & TOOLS', iconType: 'git', versionOrType: 'Version Control' },
  { id: 'selenium', name: 'Selenium', category: 'AI & TOOLS', iconType: 'terminal', versionOrType: 'End-to-End Testing' },
  { id: 'cypress', name: 'Cypress', category: 'AI & TOOLS', iconType: 'terminal', versionOrType: 'Web Automation Tests' },
];

function XPIcon({ type }: { type: string }) {
  switch (type) {
    case 'cpp':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="url(#cppgrad)" />
          <path d="M16 4L28 11V25L16 32L4 25V11L16 4Z" stroke="#004482" strokeWidth="1.5" fill="#00599c" />
          <text x="16" y="21" fontSize="13" fontWeight="900" fill="#ffffff" textAnchor="middle" fontFamily="Tahoma, sans-serif">C++</text>
          <defs>
            <linearGradient id="cppgrad" x1="0" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#629fe7" />
              <stop offset="1" stopColor="#1e5ba8" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'python':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32">
          <path d="M15.5 3C9.8 3 10.2 5.5 10.2 5.5L10.2 8.1H16V9.4H7.6C4.8 9.4 3 11.2 3 14.5C3 18.2 5.4 18.5 5.4 18.5H7.2V16C7.2 13 9.7 13 9.7 13H15.5C18.6 13 18.8 10.6 18.8 10.6V5.5C18.8 5.5 18.8 3 15.5 3Z" fill="#366f9f" />
          <circle cx="12" cy="6" r="1" fill="#fff" />
          <path d="M16.5 29C22.2 29 21.8 26.5 21.8 26.5L21.8 23.9H16V22.6H24.4C27.2 22.6 29 20.8 29 17.5C29 13.8 26.6 13.5 26.6 13.5H24.8V16C24.8 19 22.3 19 22.3 19H16.5C13.4 19 13.2 21.4 13.2 21.4V26.5C13.2 26.5 13.2 29 16.5 29Z" fill="#ffd43b" />
          <circle cx="20" cy="26" r="1" fill="#366f9f" />
        </svg>
      );
    case 'java':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32">
          <rect width="32" height="32" rx="4" fill="#ffffff" stroke="#d0d7e5" />
          <path d="M16 6C14 9 18 11 16 14C15 12 13 10 14 7" stroke="#e76f00" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M19 9C18 11 21 12 19 15" stroke="#5382a1" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8 21C11 24 21 24 24 21C23 19 9 19 8 21Z" fill="#e76f00" />
          <path d="M9 24C13 26 19 26 23 24" stroke="#5382a1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'javascript':
      return (
        <div style={{
          width: 28, height: 28, background: 'linear-gradient(135deg, #f7df1e, #d8bc07)',
          borderRadius: 4, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
          padding: '0 3px 2px 0', fontWeight: 'bold', fontSize: 12, color: '#000000',
          boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.6), 1px 1px 2px rgba(0,0,0,0.2)',
          border: '1px solid #c4a900'
        }}>
          JS
        </div>
      );
    case 'typescript':
      return (
        <div style={{
          width: 28, height: 28, background: 'linear-gradient(135deg, #3178c6, #1d5fa8)',
          borderRadius: 4, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
          padding: '0 3px 2px 0', fontWeight: 'bold', fontSize: 12, color: '#ffffff',
          boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.2)',
          border: '1px solid #144983'
        }}>
          TS
        </div>
      );
    case 'html':
      return (
        <div style={{
          width: 28, height: 28, background: 'linear-gradient(135deg, #e34f26, #c5340d)',
          borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: '900', fontSize: 10, color: '#ffffff',
          boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.2)',
          border: '1px solid #a42807'
        }}>
          HTML
        </div>
      );
    case 'css':
      return (
        <div style={{
          width: 28, height: 28, background: 'linear-gradient(135deg, #1572b6, #0e5285)',
          borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: '900', fontSize: 11, color: '#ffffff',
          boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.2)',
          border: '1px solid #0a3d63'
        }}>
          CSS
        </div>
      );
    case 'react':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#20232a" stroke="#444" />
          <circle cx="16" cy="16" r="3.2" fill="#61dafb" />
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61dafb" strokeWidth="1.6" />
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61dafb" strokeWidth="1.6" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61dafb" strokeWidth="1.6" transform="rotate(120 16 16)" />
        </svg>
      );
    case 'nextjs':
      return (
        <div style={{
          width: 28, height: 28, background: '#000000', borderRadius: '50%',
          border: '2px solid #ffffff', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontWeight: 'bold', fontSize: 13, color: '#ffffff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          N
        </div>
      );
    case 'nodejs':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="#539e43" stroke="#3b7230" />
          <text x="16" y="20" fontSize="13" fontWeight="bold" fill="#ffffff" textAnchor="middle">Node</text>
        </svg>
      );
    case 'flutter':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#f0f7ff" stroke="#c0d8f8" />
          <path d="M18 4L6 16L10 20L26 4H18Z" fill="#42a5f5" />
          <path d="M18 16L12 22L18 28H26L16 18L18 16Z" fill="#0277bd" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#f4faf4" stroke="#c4e4c4" />
          <path d="M16 3C16 3 9 9 9 17C9 23 13 28 16 29C19 28 23 23 23 17C23 9 16 3 16 3Z" fill="#47a248" />
          <path d="M16 3V29C16 29 15 27 15 17C15 9 16 3 16 3Z" fill="#3fa037" />
        </svg>
      );
    case 'firebase':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#fff9ee" stroke="#f0d8a0" />
          <path d="M7 23L11 7L15 13L7 23Z" fill="#ffa000" />
          <path d="M15 13L18 4L25 23L15 13Z" fill="#f57c00" />
          <path d="M7 23L16 28L25 23L15 13L7 23Z" fill="#ffca28" />
        </svg>
      );
    case 'supabase':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#1c1c1c" stroke="#333" />
          <path d="M18 3L6 18H15L13 29L25 14H16L18 3Z" fill="#3ecf8e" />
        </svg>
      );
    case 'aws':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#232f3e" stroke="#161e27" />
          <path d="M6 19Q16 25 26 18" stroke="#ff9900" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M23 17L26 18L24 21" fill="#ff9900" />
        </svg>
      );
    case 'docker':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#eef7ff" stroke="#c0dcff" />
          <rect x="7" y="12" width="3.5" height="3.5" fill="#2496ed" />
          <rect x="11.5" y="12" width="3.5" height="3.5" fill="#2496ed" />
          <rect x="16" y="12" width="3.5" height="3.5" fill="#2496ed" />
          <rect x="11.5" y="7.5" width="3.5" height="3.5" fill="#2496ed" />
          <path d="M3 18Q5 25 16 25Q27 25 29 18Q23 16 16 18Q9 16 3 18Z" fill="#2496ed" />
        </svg>
      );
    case 'figma':
      return (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#2c2d30" stroke="#444" />
          <rect x="7" y="5" width="9" height="7" rx="3.5" fill="#f24e1e" />
          <rect x="16" y="5" width="9" height="7" rx="3.5" fill="#ff7262" />
          <rect x="16" y="12" width="9" height="7" rx="3.5" fill="#1abcfe" />
          <circle cx="11.5" cy="15.5" r="3.5" fill="#a259ff" />
          <circle cx="11.5" cy="22.5" r="3.5" fill="#0acf83" />
        </svg>
      );
    case 'git':
      return (
        <div style={{
          width: 28, height: 28, background: 'linear-gradient(135deg, #f05032, #c83015)',
          borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#ffffff', fontSize: 16, fontWeight: 'bold',
          boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.2)',
          border: '1px solid #9e1f0a'
        }}>
          ⑂
        </div>
      );
    default:
      return (
        <div style={{
          width: 28, height: 28, background: 'linear-gradient(180deg, #f0f3f8 0%, #d8e2ec 100%)',
          borderRadius: 4, border: '1px solid #9fb2c8', display: 'flex',
          alignItems: 'center', justifyContent: 'center', color: '#0047ba',
          fontSize: 13, fontWeight: 'bold', fontFamily: 'monospace',
          boxShadow: 'inset 1px 1px 0 #fff, 0 1px 2px rgba(0,0,0,0.15)'
        }}>
          &gt;_
        </div>
      );
  }
}

export default function TechnicalEcosystem() {
  const [activeTab, setActiveTab] = useState<'ALL' | 'LANGUAGES' | 'FRAMEWORKS & RUNTIME' | 'DATABASES & CLOUD' | 'AI & TOOLS'>('ALL');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const tabs: Array<{ id: 'ALL' | 'LANGUAGES' | 'FRAMEWORKS & RUNTIME' | 'DATABASES & CLOUD' | 'AI & TOOLS'; label: string; count: number; icon: string }> = [
    { id: 'ALL', label: 'All Technologies', count: technicalEcosystemData.length, icon: '🌐' },
    { id: 'LANGUAGES', label: 'Languages', count: 8, icon: '🔤' },
    { id: 'FRAMEWORKS & RUNTIME', label: 'Frameworks & Runtime', count: 6, icon: '⚡' },
    { id: 'DATABASES & CLOUD', label: 'Databases & Cloud', count: 7, icon: '☁️' },
    { id: 'AI & TOOLS', label: 'AI & Tools', count: 8, icon: '🤖' },
  ];

  const filteredItems = activeTab === 'ALL'
    ? technicalEcosystemData
    : technicalEcosystemData.filter(item => item.category === activeTab);

  return (
    <div style={{
      fontFamily: 'Tahoma, Segoe UI, sans-serif',
      background: '#ffffff',
      marginTop: 14,
      marginBottom: 18,
    }}>
      {/* XP Property Sheet Tab Strip */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        borderBottom: '2px solid #0055ea',
        paddingLeft: 4,
        gap: 3,
        userSelect: 'none',
        overflowX: 'auto',
      }}>
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                position: 'relative',
                padding: isActive ? '5px 12px 6px' : '4px 10px 4px',
                fontSize: 11,
                fontWeight: isActive ? 700 : 500,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                border: '1px solid #7f9db9',
                borderBottom: isActive ? '2px solid #ffffff' : '1px solid #7f9db9',
                marginBottom: isActive ? -2 : 0,
                background: isActive
                  ? 'linear-gradient(180deg, #ffffff 0%, #ffffff 70%, #f0f4fc 100%)'
                  : 'linear-gradient(180deg, #ece9d8 0%, #d8d3bf 100%)',
                color: isActive ? '#003399' : '#444444',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                boxShadow: isActive ? '0 -2px 4px rgba(0,0,0,0.06)' : 'none',
                zIndex: isActive ? 2 : 1,
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: 12 }}>{tab.icon}</span>
              <span>{tab.label}</span>
              <span style={{
                fontSize: 10,
                fontWeight: 'bold',
                padding: '1px 5px',
                borderRadius: 10,
                background: isActive ? '#0055ea' : '#999999',
                color: '#ffffff',
                marginLeft: 2,
              }}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main XP Explorer Folder / Tiles View Container */}
      <div style={{
        border: '1px solid #7f9db9',
        borderTop: 'none',
        background: '#ffffff',
        padding: '14px',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)',
      }}>
        {/* Subheader Details Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(180deg, #f6f9fe 0%, #e8f0fa 100%)',
          border: '1px solid #c2d5e8',
          borderRadius: 3,
          padding: '6px 12px',
          marginBottom: 12,
          fontSize: 11,
          color: '#1a4070',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontWeight: 'bold', color: '#0047ba' }}>📁 Technical Ecosystem:</span>
            <span>Click any item to inspect details</span>
          </div>
          <span style={{ fontWeight: 'bold', color: '#333' }}>
            Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Windows XP Tiles / Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
          gap: 8,
          maxHeight: 360,
          overflowY: 'auto',
          padding: 2,
        }}>
          {filteredItems.map(item => {
            const isSelected = selectedTech === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedTech(isSelected ? null : item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 10px',
                  borderRadius: 3,
                  cursor: 'pointer',
                  border: isSelected
                    ? '1px solid #316ac5'
                    : '1px solid transparent',
                  background: isSelected
                    ? '#c1d2ee'
                    : 'transparent',
                  transition: 'all 0.1s ease',
                  userSelect: 'none',
                }}
                onMouseEnter={e => {
                  if (!isSelected) {
                    e.currentTarget.style.background = '#eef3fb';
                    e.currentTarget.style.borderColor = '#c1d2ee';
                  }
                }}
                onMouseLeave={e => {
                  if (!isSelected) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'transparent';
                  }
                }}
              >
                {/* XP Icon Box */}
                <div style={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <XPIcon type={item.iconType} />
                </div>

                {/* Info Text */}
                <div style={{ overflow: 'hidden', flex: 1 }}>
                  <div style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: isSelected ? '#003399' : '#111111',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {item.name}
                  </div>
                  <div style={{
                    fontSize: 10,
                    color: isSelected ? '#224488' : '#666666',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {item.versionOrType || item.category}
                  </div>
                </div>

                {/* Selection Checkmark */}
                {isSelected && (
                  <div style={{
                    fontSize: 11,
                    color: '#0055ea',
                    fontWeight: 'bold',
                  }}>
                    ✔
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Tech Inspector Drawer */}
        {selectedTech && (() => {
          const item = technicalEcosystemData.find(t => t.id === selectedTech);
          if (!item) return null;
          return (
            <div style={{
              marginTop: 12,
              background: '#ffffed',
              border: '1px solid #e0d080',
              borderRadius: 3,
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 11,
              color: '#443300',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 14 }}>ℹ️</span>
                <span>
                  <strong>{item.name}</strong> is categorized under <strong>{item.category}</strong> ({item.versionOrType}). Actively used across portfolio projects.
                </span>
              </div>
              <button
                onClick={() => setSelectedTech(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#886600',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: 12,
                }}
              >
                ✕
              </button>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
