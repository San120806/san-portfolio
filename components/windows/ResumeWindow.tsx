'use client';

import { useState } from 'react';

export default function ResumeWindow() {
  const [viewMode, setViewMode] = useState<'pdf' | 'text'>('pdf');
  const pdfUrl = '/RESUME-SANIYAKAPURE-113.pdf';

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'RESUME-SANIYAKAPURE.pdf';
    a.click();
  };

  const handleOpenNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  const handlePrint = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#525659' }}>
      {/* Acrobat Reader XP Toolbar */}
      <div style={{
        background: 'linear-gradient(180deg, #f5f3ee 0%, #e0ddd5 100%)',
        borderBottom: '1px solid #999',
        padding: '3px 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 6,
        fontSize: 11,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ color: '#d32f2f', fontWeight: 'bold', fontSize: 14 }}>📄</span>
            <span style={{ fontWeight: 'bold', color: '#222' }}>Adobe Reader 6.0 — RESUME-SANIYAKAPURE.pdf</span>
          </div>

          <div style={{ width: 1, height: 18, background: '#bbb', margin: '0 4px' }} />

          {/* Action buttons */}
          <button
            className="xp-button"
            onClick={handleDownload}
            title="Download PDF Resume"
            style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 'bold', color: '#003399' }}
          >
            <span>💾</span> Save Copy
          </button>

          <button
            className="xp-button"
            onClick={handleOpenNewTab}
            title="Open in New Browser Tab"
            style={{ display: 'flex', alignItems: 'center', gap: 4 }}
          >
            <span>↗️</span> Full Screen
          </button>

          <button
            className="xp-button"
            onClick={handlePrint}
            title="Print Document"
            style={{ display: 'flex', alignItems: 'center', gap: 4 }}
          >
            <span>🖨️</span> Print
          </button>
        </div>

        {/* View Mode Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <button
            className={`xp-button ${viewMode === 'pdf' ? 'active' : ''}`}
            onClick={() => setViewMode('pdf')}
            style={{ fontWeight: viewMode === 'pdf' ? 'bold' : 'normal' }}
          >
            PDF Viewer
          </button>
          <button
            className={`xp-button ${viewMode === 'text' ? 'active' : ''}`}
            onClick={() => setViewMode('text')}
            style={{ fontWeight: viewMode === 'text' ? 'bold' : 'normal' }}
          >
            Text View
          </button>
        </div>
      </div>

      {/* Main Document Frame */}
      <div style={{ flex: 1, display: 'flex', position: 'relative', overflow: 'hidden', background: '#333' }}>
        {viewMode === 'pdf' ? (
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              background: '#525659',
            }}
            title="Saniya Kapure Resume PDF"
          />
        ) : (
          /* High-fidelity formatted text fallback view */
          <div style={{
            flex: 1,
            overflow: 'auto',
            display: 'flex',
            justifyContent: 'center',
            padding: '20px 10px',
            background: '#525659',
          }}>
            <div style={{
              background: 'white',
              width: 600,
              minHeight: 780,
              padding: '36px 42px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
              color: '#111',
              fontFamily: '"Segoe UI", Tahoma, sans-serif',
              fontSize: 12,
              lineHeight: 1.5,
            }}>
              {/* Header */}
              <div style={{ borderBottom: '2px solid #0047ba', paddingBottom: 12, marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h1 style={{ fontSize: 24, fontWeight: 'bold', color: '#0047ba', margin: 0 }}>SANIYA KAPURE</h1>
                    <div style={{ fontSize: 13, fontWeight: '600', color: '#555', marginTop: 2 }}>
                      Computer Science Student · Developer · Designer
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: 11, color: '#666' }}>
                    <div>📍 Mumbai, India</div>
                    <div>✉️ saniya@example.com</div>
                    <div>🔗 linkedin.com/in/saniyakapure</div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div style={{ marginBottom: 16 }}>
                <h2 style={{ fontSize: 12, fontWeight: 'bold', color: '#0047ba', textTransform: 'uppercase', letterSpacing: 0.5, borderBottom: '1px solid #ddd', paddingBottom: 2, marginBottom: 6 }}>
                  Education
                </h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                  <span>B.Tech Computer Science</span>
                  <span style={{ color: '#666', fontSize: 11 }}>ITM Skills University</span>
                </div>
              </div>

              {/* Skills */}
              <div style={{ marginBottom: 16 }}>
                <h2 style={{ fontSize: 12, fontWeight: 'bold', color: '#0047ba', textTransform: 'uppercase', letterSpacing: 0.5, borderBottom: '1px solid #ddd', paddingBottom: 2, marginBottom: 6 }}>
                  Technical Expertise
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '4px 12px', fontSize: 11 }}>
                  <span style={{ fontWeight: 'bold', color: '#444' }}>Languages:</span>
                  <span>TypeScript, JavaScript, Python, HTML5, CSS3, SQL</span>
                  <span style={{ fontWeight: 'bold', color: '#444' }}>Frontend:</span>
                  <span>React, Next.js, Tailwind CSS, Vue.js, Web Audio API, Canvas</span>
                  <span style={{ fontWeight: 'bold', color: '#444' }}>Backend & DB:</span>
                  <span>Node.js, Express, FastAPI, MongoDB, PostgreSQL, REST APIs</span>
                  <span style={{ fontWeight: 'bold', color: '#444' }}>Cloud & AI:</span>
                  <span>AWS (EC2, S3, RDS, Lambda), Docker, AI Workflows, pgvector</span>
                  <span style={{ fontWeight: 'bold', color: '#444' }}>Design & Tools:</span>
                  <span>Figma, Git, GitHub, VS Code, Cursor, Claude, Antigravity</span>
                </div>
              </div>

              {/* Projects Mention */}
              <div style={{ marginBottom: 16 }}>
                <h2 style={{ fontSize: 12, fontWeight: 'bold', color: '#0047ba', textTransform: 'uppercase', letterSpacing: 0.5, borderBottom: '1px solid #ddd', paddingBottom: 2, marginBottom: 8 }}>
                  Key Featured Projects
                </h2>
                <ul style={{ margin: 0, paddingLeft: 16, color: '#333', fontSize: 11, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li><strong>BuildTrack:</strong> Construction project management platform for tracking site progress, worker logs, material deliveries, and budget status.</li>
                  <li><strong>Drift:</strong> AI personal operations system bringing tasks, calendar, and asynchronous workflows into an intelligent adaptive timeline.</li>
                  <li><strong>Smart Timetable:</strong> Intelligent AI-powered timetable and constraint-solving scheduling platform for academic institutions.</li>
                  <li><strong>UrbanMove:</strong> Cloud infrastructure blueprint on AWS demonstrating compute, RDS, S3, Docker, and VPC networking.</li>
                  <li><strong>Mescora Interiors:</strong> Elevated digital experience for an interior design studio with high-conversion client onboarding.</li>
                </ul>
              </div>

              {/* Community */}
              <div>
                <h2 style={{ fontSize: 12, fontWeight: 'bold', color: '#0047ba', textTransform: 'uppercase', letterSpacing: 0.5, borderBottom: '1px solid #ddd', paddingBottom: 2, marginBottom: 6 }}>
                  Community Leadership
                </h2>
                <p style={{ margin: 0, color: '#444', fontSize: 11 }}>
                  Developer Student Club Co-lead — actively organizing meetups, workshops, hackathons, and fostering technical builder communities.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* PDF Status Bar */}
      <div style={{
        background: '#d4d0c8',
        borderTop: '1px solid #999',
        padding: '2px 8px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 11,
        color: '#444',
      }}>
        <span>RESUME-SANIYAKAPURE-113.pdf</span>
        <span>Adobe PDF Document</span>
      </div>
    </div>
  );
}
