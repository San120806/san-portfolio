'use client';

import { profileData } from '@/data/profile';
import { socialsData } from '@/data/socials';
import { en } from '@/data/i18n/en';
import { hi } from '@/data/i18n/hi';

interface AboutMeWindowProps {
  lang?: 'en' | 'hi';
  onOpenWindow?: (id: string) => void;
}

export default function AboutMeWindow({ lang = 'en', onOpenWindow }: AboutMeWindowProps) {
  const t = lang === 'hi' ? hi : en;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#ffffff' }}>
      {/* Menu bar */}
      <div style={{
        background: '#f0ede4',
        borderBottom: '1px solid #aba99a',
        padding: '2px 0',
        display: 'flex',
        fontSize: 11,
      }}>
        {['File', 'Edit', 'View', 'Favorites', 'Help'].map(m => (
          <span key={m} style={{ padding: '2px 8px', cursor: 'pointer' }}
            className="hover:bg-blue-600 hover:text-white">{m}</span>
        ))}
      </div>

      {/* Toolbar */}
      <div className="xp-toolbar">
        <button className="xp-toolbar-btn">← Back</button>
        <button className="xp-toolbar-btn">→ Forward</button>
        <div style={{ width: 1, height: 20, background: '#ccc', margin: '0 2px' }} />
        <button
          className="xp-toolbar-btn"
          style={{ color: '#0066cc', fontWeight: 'bold' }}
          onClick={() => onOpenWindow && onOpenWindow('projects')}
        >
          🌐 {t.desktop.myProjects}
        </button>
        <button
          className="xp-toolbar-btn"
          style={{ color: '#c00000', fontWeight: 'bold' }}
          onClick={() => onOpenWindow && onOpenWindow('resume')}
        >
          📄 {t.desktop.myResume}
        </button>
      </div>

      {/* Address bar */}
      <div className="xp-addressbar">
        <span style={{ fontSize: 11, color: '#555', flexShrink: 0 }}>{t.system.address}</span>
        <div style={{ display: 'flex', alignItems: 'center', background: 'white', border: '2px inset #7f9db9', flex: 1, padding: '1px 6px' }}>
          <span style={{ fontSize: 11, color: '#222' }}>C:\Documents and Settings\Saniya\About Me</span>
        </div>
        <button className="xp-button" style={{ padding: '1px 8px', fontSize: 11 }}>Go</button>
      </div>

      {/* Main split content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left Explorer Sidebar */}
        <div className="xp-sidebar-panel" style={{ overflowY: 'auto' }}>
          {/* Social Links Panel */}
          <div className="xp-sidebar-section-header">
            <span>{t.about.socialLinks}</span>
            <span>▼</span>
          </div>
          <div style={{ padding: '4px 6px' }}>
            {[
              { name: 'GitHub', icon: '⚫', url: socialsData.github },
              { name: 'LinkedIn', icon: '🔵', url: socialsData.linkedin },
              { name: 'Instagram', icon: '📷', url: socialsData.instagram },
            ].map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="xp-menu-item"
                style={{ fontSize: 11, textDecoration: 'none', color: '#0044bb', padding: '3px 4px' }}
              >
                <span>{s.icon}</span>
                <span className="underline hover:text-blue-800">{s.name}</span>
              </a>
            ))}
          </div>

          <div style={{ height: 1, background: '#b0c0e0', margin: '4px 0' }} />

          {/* Skills Panel */}
          <div className="xp-sidebar-section-header">
            <span>{t.about.skills}</span>
            <span>▼</span>
          </div>
          <div style={{ padding: '6px 8px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[
              { skill: 'Frontend Dev', color: '#0066cc' },
              { skill: 'Full-Stack Dev', color: '#008844' },
              { skill: 'UI/UX Design', color: '#aa00aa' },
              { skill: 'React & Next.js', color: '#0066cc' },
              { skill: 'TypeScript', color: '#0055aa' },
              { skill: 'FastAPI / Python', color: '#dd6600' },
              { skill: 'AWS Cloud', color: '#d97706' },
              { skill: 'AI Workflows', color: '#8800cc' },
              { skill: 'MongoDB / Postgres', color: '#008844' },
            ].map(item => (
              <div key={item.skill} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11 }}>
                <span style={{ color: item.color, fontSize: 10 }}>●</span>
                <span>{item.skill}</span>
              </div>
            ))}
          </div>

          <div style={{ height: 1, background: '#b0c0e0', margin: '4px 0' }} />

          {/* Tools Panel */}
          <div className="xp-sidebar-section-header">
            <span>{t.about.software}</span>
            <span>▼</span>
          </div>
          <div style={{ padding: '6px 8px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {profileData.skills.tools.map(tool => (
              <div key={tool} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11 }}>
                <span style={{ color: '#666', fontSize: 10 }}>■</span>
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px', background: '#ffffff', color: '#222' }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid #0047ba', paddingBottom: 10, marginBottom: 16 }}>
            <h1 style={{ fontSize: 22, fontWeight: 'bold', color: '#0047ba', margin: 0 }}>
              {profileData.name}
            </h1>
            <div style={{ fontSize: 12, fontWeight: '600', color: '#555', marginTop: 2 }}>
              {profileData.education.degree} · {profileData.education.college} · {profileData.location}
            </div>
          </div>

          {/* Bio section with avatar badge */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 18 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 8,
              background: 'linear-gradient(135deg, #4a80d4, #1a50a0)',
              border: '2px solid #1a3880',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28, flexShrink: 0,
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            }}>
              👩‍💻
            </div>
            <div>
              <h2 style={{ fontSize: 14, fontWeight: 'bold', color: '#222', margin: '0 0 6px' }}>
                {t.about.introHeading}
              </h2>
              <p style={{ fontSize: 12, lineHeight: 1.6, color: '#333', margin: 0 }}>
                {t.about.introP1}
              </p>
            </div>
          </div>

          {/* Story & Philosophy */}
          <div style={{
            background: '#f4f8ff',
            border: '1px solid #c2d8ff',
            borderRadius: 6,
            padding: '12px 16px',
            marginBottom: 18,
            fontSize: 12,
            lineHeight: 1.6,
          }}>
            <p style={{ margin: 0, color: '#222' }}>
              {t.about.introP2}
            </p>
          </div>

          {/* Interests & Domains */}
          <div style={{ marginBottom: 18 }}>
            <h3 style={{ fontSize: 13, fontWeight: 'bold', color: '#0047ba', marginBottom: 8, borderBottom: '1px solid #eee', paddingBottom: 4 }}>
              {t.about.interestsHeading}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 8 }}>
              {profileData.bio.interests.map(item => (
                <div key={item} style={{
                  background: '#f8f8f8',
                  border: '1px solid #ddd',
                  padding: '6px 10px',
                  borderRadius: 4,
                  fontSize: 11,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}>
                  <span style={{ color: '#0047ba' }}>✦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Community & Leadership */}
          <div style={{
            background: '#fff9e6',
            border: '1px solid #f0d080',
            borderRadius: 6,
            padding: '12px 16px',
            fontSize: 12,
            lineHeight: 1.5,
          }}>
            <div style={{ fontWeight: 'bold', color: '#996600', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>🏆</span> {t.about.communityHeading}
            </div>
            <p style={{ margin: 0, color: '#443300' }}>
              {t.about.communityText}
            </p>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div style={{
        background: '#d4d0c8',
        borderTop: '1px solid #aba99a',
        padding: '2px 8px',
        fontSize: 11,
        color: '#444',
      }}>
        {t.system.ready}
      </div>
    </div>
  );
}
