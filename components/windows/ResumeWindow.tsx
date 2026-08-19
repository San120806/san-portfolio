'use client';

import { useState } from 'react';

export default function ResumeWindow() {
  const [zoom, setZoom] = useState(100);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate simple text/pdf download simulation
    const resumeText = `SANIYA KAPURE - FULL STACK DEVELOPER & DESIGNER
Email: saniya@example.com | Portfolio: https://mitchivin.com clone | GitHub: github.com/saniyakapure

SUMMARY
Passionate Full Stack Developer & UI/UX Designer specialized in modern web applications, Next.js, React, TypeScript, and crafting immersive retro & futuristic user experiences.

SKILLS
• Frontend: React, Next.js, TypeScript, Tailwind CSS, HTML5/CSS3, Web Audio API, Canvas
• Backend & DB: Node.js, Express, PostgreSQL, MongoDB, RESTful APIs, WebSockets
• Design & Tools: Figma, Adobe Creative Cloud, Blender, Git, VS Code

EXPERIENCE
• Senior Frontend Engineer / Creative Technologist (2023 - Present)
  - Engineered high-performance interactive web applications with 60fps animations.
  - Architected modular component libraries and custom design systems.
• Full Stack Developer (2021 - 2023)
  - Developed end-to-end full stack web platforms and client solutions.
  - Implemented responsive, pixel-perfect user interfaces and RESTful microservices.

EDUCATION
• Bachelor of Science in Computer Science & Information Technology
`;
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Saniya_Kapure_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#525659' }}>
      {/* Acrobat Reader XP Toolbar */}
      <div style={{
        background: 'linear-gradient(180deg, #f5f3ee 0%, #e0ddd5 100%)',
        borderBottom: '1px solid #999',
        padding: '3px 6px',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 11,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ color: '#d32f2f', fontWeight: 'bold', fontSize: 13 }}>📄</span>
          <span style={{ fontWeight: 'bold', color: '#333' }}>Adobe Reader 6.0</span>
        </div>

        <div style={{ width: 1, height: 18, background: '#bbb', margin: '0 4px' }} />

        {/* Action buttons */}
        <button
          className="xp-button"
          onClick={handleDownload}
          title="Save / Download Resume"
          style={{ display: 'flex', alignItems: 'center', gap: 4 }}
        >
          <span>💾</span> Save Copy
        </button>

        <button
          className="xp-button"
          onClick={handlePrint}
          title="Print Document"
          style={{ display: 'flex', alignItems: 'center', gap: 4 }}
        >
          <span>🖨️</span> Print
        </button>

        <div style={{ width: 1, height: 18, background: '#bbb', margin: '0 4px' }} />

        {/* Zoom controls */}
        <button
          className="xp-button"
          onClick={() => setZoom(prev => Math.max(70, prev - 10))}
          style={{ padding: '1px 6px', fontWeight: 'bold' }}
        >
          -
        </button>
        <span style={{ fontSize: 11, minWidth: 40, textAlign: 'center', color: '#222' }}>{zoom}%</span>
        <button
          className="xp-button"
          onClick={() => setZoom(prev => Math.min(140, prev + 10))}
          style={{ padding: '1px 6px', fontWeight: 'bold' }}
        >
          +
        </button>
        <button
          className="xp-button"
          onClick={() => setZoom(100)}
          style={{ padding: '1px 6px' }}
        >
          100%
        </button>
      </div>

      {/* Document Viewport */}
      <div style={{
        flex: 1,
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 10px',
      }}>
        <div
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'top center',
            transition: 'transform 0.1s ease-out',
            background: 'white',
            width: 580,
            minHeight: 740,
            padding: '36px 40px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
            color: '#111',
            fontFamily: '"Segoe UI", Tahoma, sans-serif',
            fontSize: 12,
            lineHeight: 1.5,
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: '2px solid #0047ba', paddingBottom: 12, marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h1 style={{ fontSize: 24, fontWeight: 'bold', color: '#0047ba', margin: 0 }}>SANIYA KAPURE</h1>
                <div style={{ fontSize: 13, fontWeight: '600', color: '#555', marginTop: 2 }}>
                  Full Stack Developer & Creative Technologist
                </div>
              </div>
              <div style={{ textAlign: 'right', fontSize: 11, color: '#666' }}>
                <div>📍 Available Worldwide</div>
                <div>✉️ saniya@example.com</div>
                <div>🔗 linkedin.com/in/saniya</div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 12, fontWeight: 'bold', color: '#0047ba', textTransform: 'uppercase', letterSpacing: 0.5, borderBottom: '1px solid #ddd', paddingBottom: 2, marginBottom: 6 }}>
              Professional Summary
            </h2>
            <p style={{ margin: 0, color: '#333' }}>
              Dedicated and inventive software developer with expertise in architecting high-performance web applications,
              rich retro/modern interfaces, and scalable full-stack platforms. Proven track record of turning complex
              ideas into polished, accessible, and delight-inducing user experiences.
            </p>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 12, fontWeight: 'bold', color: '#0047ba', textTransform: 'uppercase', letterSpacing: 0.5, borderBottom: '1px solid #ddd', paddingBottom: 2, marginBottom: 6 }}>
              Technical Expertise
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '4px 12px', fontSize: 11 }}>
              <span style={{ fontWeight: 'bold', color: '#444' }}>Languages:</span>
              <span>TypeScript, JavaScript (ES6+), Python, HTML5, CSS3, SQL</span>
              <span style={{ fontWeight: 'bold', color: '#444' }}>Frontend:</span>
              <span>React, Next.js, Tailwind CSS, Vue.js, Web Audio API, Canvas API, Redux</span>
              <span style={{ fontWeight: 'bold', color: '#444' }}>Backend & DB:</span>
              <span>Node.js, Express, PostgreSQL, MongoDB, Redis, REST APIs, WebSockets</span>
              <span style={{ fontWeight: 'bold', color: '#444' }}>Tools & Design:</span>
              <span>Git, Figma, Adobe Photoshop & Illustrator, Blender, Docker, Vercel</span>
            </div>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 12, fontWeight: 'bold', color: '#0047ba', textTransform: 'uppercase', letterSpacing: 0.5, borderBottom: '1px solid #ddd', paddingBottom: 2, marginBottom: 8 }}>
              Experience
            </h2>

            <div style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span style={{ color: '#222' }}>Lead Frontend Engineer</span>
                <span style={{ color: '#666', fontSize: 11 }}>2023 — Present</span>
              </div>
              <div style={{ color: '#0047ba', fontSize: 11, fontStyle: 'italic', marginBottom: 4 }}>Creative Tech Studio</div>
              <ul style={{ margin: 0, paddingLeft: 16, color: '#444', fontSize: 11 }}>
                <li>Led frontend development of interactive web applications, achieving sub-second load times.</li>
                <li>Crafted custom UI systems, micro-animations, and drag-and-drop desktop simulation environments.</li>
                <li>Collaborated with cross-functional teams to deliver accessible, pixel-perfect web products.</li>
              </ul>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span style={{ color: '#222' }}>Full Stack Web Developer</span>
                <span style={{ color: '#666', fontSize: 11 }}>2021 — 2023</span>
              </div>
              <div style={{ color: '#0047ba', fontSize: 11, fontStyle: 'italic', marginBottom: 4 }}>Digital Innovations Lab</div>
              <ul style={{ margin: 0, paddingLeft: 16, color: '#444', fontSize: 11 }}>
                <li>Built and maintained 10+ client websites and internal SaaS dashboard platforms.</li>
                <li>Integrated secure payment processing, authentication flows, and real-time data sync.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 style={{ fontSize: 12, fontWeight: 'bold', color: '#0047ba', textTransform: 'uppercase', letterSpacing: 0.5, borderBottom: '1px solid #ddd', paddingBottom: 2, marginBottom: 6 }}>
              Education & Certifications
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 'bold' }}>Bachelor of Science in Computer Science</span>
              <span style={{ color: '#666', fontSize: 11 }}>Graduated with Honors</span>
            </div>
          </div>
        </div>
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
        <span>Page 1 of 1 (8.5 x 11 in)</span>
        <span>Ready</span>
      </div>
    </div>
  );
}
