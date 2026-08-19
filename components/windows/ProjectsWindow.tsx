'use client';

import { useState } from 'react';
import { projectsData, Project } from '@/data/projects';
import { en } from '@/data/i18n/en';
import { hi } from '@/data/i18n/hi';

interface ProjectsWindowProps {
  lang?: 'en' | 'hi';
}

export default function ProjectsWindow({ lang = 'en' }: ProjectsWindowProps) {
  const t = lang === 'hi' ? hi : en;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [darkMode, setDarkMode] = useState(true);

  const categories = ['All', 'Full Stack', 'AI', 'Cloud', 'UI/UX'];

  const filteredProjects = projectsData.filter(p => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All' ||
      p.category.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIdx = projectsData.findIndex(p => p.slug === selectedProject.slug);
    const nextIdx = (currentIdx + 1) % projectsData.length;
    setSelectedProject(projectsData[nextIdx]);
  };

  const bg = darkMode ? '#121212' : '#f4f4f4';
  const cardBg = darkMode ? '#1e1e1e' : '#ffffff';
  const textColor = darkMode ? '#f0f0f0' : '#1a1a1a';
  const subText = darkMode ? '#a0a0a0' : '#666666';
  const borderCol = darkMode ? '#333333' : '#e0e0e0';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: bg, color: textColor }}>
      {/* IE Menu Bar */}
      <div style={{
        background: darkMode ? '#222222' : '#f0ede4',
        borderBottom: `1px solid ${darkMode ? '#333333' : '#aba99a'}`,
        padding: '2px 0',
        display: 'flex',
        alignItems: 'center',
        fontSize: 11,
      }}>
        {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map(m => (
          <span key={m} style={{ padding: '2px 8px', cursor: 'pointer' }}
            className="hover:bg-blue-600 hover:text-white">{m}</span>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, paddingRight: 8 }}>
          <span style={{ fontSize: 13, color: '#e83030' }}>⊞</span>
          <span style={{ fontSize: 10, color: subText }}>Internet Explorer 6.0</span>
        </div>
      </div>

      {/* IE Standard Buttons Toolbar */}
      <div className="xp-toolbar" style={{ background: darkMode ? '#2a2a2a' : undefined, justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <button
            className="xp-button"
            disabled={!selectedProject}
            onClick={() => setSelectedProject(null)}
            style={{ opacity: selectedProject ? 1 : 0.5, display: 'flex', alignItems: 'center', gap: 3 }}
          >
            <span>⬅️</span> Back
          </button>
          <button className="xp-button" style={{ opacity: 0.5 }}>
            <span>➡️</span> Forward
          </button>
          <button className="xp-button" onClick={() => { setSearchQuery(''); setSelectedProject(null); }}>
            <span>🔄</span> Refresh
          </button>
          <button className="xp-button" onClick={() => setSelectedProject(null)}>
            <span>🏠</span> Home
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <button
            className="xp-button"
            onClick={() => setDarkMode(!darkMode)}
            style={{ background: darkMode ? '#444' : undefined, color: darkMode ? '#fff' : undefined }}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>

      {/* IE Address Bar */}
      <div className="xp-addressbar" style={{ background: darkMode ? '#2a2a2a' : undefined }}>
        <span style={{ fontSize: 11, color: darkMode ? '#aaa' : '#555', flexShrink: 0 }}>Address</span>
        <div style={{
          display: 'flex', alignItems: 'center', background: darkMode ? '#333' : 'white',
          border: '2px inset #7f9db9', flex: 1, padding: '1px 6px',
        }}>
          <span style={{ fontSize: 12, marginRight: 6 }}>🔒</span>
          <span style={{ fontSize: 11, color: darkMode ? '#eee' : '#000', fontFamily: 'monospace' }}>
            {selectedProject ? `https://www.saniyaprojects.com/${selectedProject.slug}` : 'https://www.saniyaprojects.com'}
          </span>
        </div>
        <button className="xp-button" style={{ padding: '1px 8px', fontSize: 11 }}>Go</button>
      </div>

      {/* Browser Main Body */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        {/* If a project detail is open */}
        {selectedProject ? (
          <div style={{ padding: '20px 24px', maxWidth: 840, margin: '0 auto', width: '100%' }}>
            <button
              onClick={() => setSelectedProject(null)}
              className="xp-button"
              style={{ marginBottom: 14, display: 'inline-flex', alignItems: 'center', gap: 4 }}
            >
              <span>⬅️</span> Back to All Projects
            </button>

            {/* Project Header Banner */}
            <div style={{
              background: `linear-gradient(135deg, ${selectedProject.color}22, ${selectedProject.accent}44)`,
              border: `1px solid ${selectedProject.color}66`,
              borderRadius: 6,
              padding: '18px 22px',
              marginBottom: 20,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10 }}>
                <div>
                  <span style={{
                    background: selectedProject.color,
                    color: 'white',
                    fontSize: 10,
                    fontWeight: 'bold',
                    padding: '2px 8px',
                    borderRadius: 3,
                    textTransform: 'uppercase',
                  }}>
                    {selectedProject.category}
                  </span>
                  <h1 style={{ fontSize: 24, fontWeight: 'bold', margin: '8px 0 4px', color: textColor }}>
                    {selectedProject.title}
                  </h1>
                  <div style={{ color: selectedProject.color, fontSize: 13, fontWeight: '600' }}>
                    {selectedProject.tagline}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="xp-button"
                      style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 'bold' }}
                    >
                      <span>⚫</span> {t.projects.githubRepo}
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="xp-button"
                      style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, color: '#0047ba', fontWeight: 'bold' }}
                    >
                      <span>🚀</span> {t.projects.liveDemo}
                    </a>
                  )}
                </div>
              </div>

              {/* Technologies Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
                {selectedProject.technologies.map(tech => (
                  <span key={tech} style={{
                    background: darkMode ? '#222' : 'white',
                    border: `1px solid ${borderCol}`,
                    padding: '2px 8px',
                    borderRadius: 3,
                    fontSize: 11,
                    fontWeight: '500',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Detailed Content Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, lineHeight: 1.6, fontSize: 12 }}>
              {/* Overview */}
              <div>
                <h3 style={{ fontSize: 13, fontWeight: 'bold', color: selectedProject.color, textTransform: 'uppercase', marginBottom: 4 }}>
                  {t.projects.overview}
                </h3>
                <p style={{ margin: 0, color: subText }}>{selectedProject.overview}</p>
              </div>

              {/* Problem & Approach */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                <div style={{ background: cardBg, padding: 14, borderRadius: 4, border: `1px solid ${borderCol}` }}>
                  <h4 style={{ fontSize: 12, fontWeight: 'bold', color: '#e83030', margin: '0 0 6px' }}>
                    {t.projects.problem}
                  </h4>
                  <p style={{ margin: 0, color: subText }}>{selectedProject.problem}</p>
                </div>
                <div style={{ background: cardBg, padding: 14, borderRadius: 4, border: `1px solid ${borderCol}` }}>
                  <h4 style={{ fontSize: 12, fontWeight: 'bold', color: '#10b981', margin: '0 0 6px' }}>
                    {t.projects.approach}
                  </h4>
                  <p style={{ margin: 0, color: subText }}>{selectedProject.approach}</p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 style={{ fontSize: 13, fontWeight: 'bold', color: selectedProject.color, textTransform: 'uppercase', marginBottom: 6 }}>
                  {t.projects.keyFeatures}
                </h3>
                <ul style={{ margin: 0, paddingLeft: 18, color: subText, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {selectedProject.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>

              {/* Architecture */}
              <div>
                <h3 style={{ fontSize: 13, fontWeight: 'bold', color: selectedProject.color, textTransform: 'uppercase', marginBottom: 4 }}>
                  {t.projects.architecture}
                </h3>
                <p style={{ margin: 0, color: subText }}>{selectedProject.architecture}</p>
              </div>

              {/* Outcome */}
              <div style={{
                background: darkMode ? '#1c281c' : '#eaf7ea',
                border: `1px solid ${darkMode ? '#2d5a2d' : '#88d488'}`,
                padding: '12px 16px',
                borderRadius: 4,
              }}>
                <h4 style={{ fontSize: 12, fontWeight: 'bold', color: '#2e7d32', margin: '0 0 4px' }}>
                  {t.projects.outcome}
                </h4>
                <p style={{ margin: 0, color: subText }}>{selectedProject.outcome}</p>
              </div>
            </div>

            {/* Next Project Footer */}
            <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px solid ${borderCol}`, display: 'flex', justifyContent: 'flex-end' }}>
              <button
                className="xp-button"
                onClick={handleNextProject}
                style={{ padding: '6px 16px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 6 }}
              >
                {t.projects.nextProject}
              </button>
            </div>
          </div>
        ) : (
          /* Projects Catalog Grid */
          <div style={{ padding: '16px 20px' }}>
            {/* Header with Search & Categories */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              marginBottom: 16,
              borderBottom: `1px solid ${borderCol}`,
              paddingBottom: 14,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 6,
                    background: 'linear-gradient(135deg, #e83030, #ff6060)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 'bold', fontSize: 16,
                  }}>
                    S
                  </div>
                  <div>
                    <h2 style={{ fontSize: 16, fontWeight: 'bold', margin: 0, color: textColor }}>
                      Saniya Projects
                    </h2>
                    <span style={{ fontSize: 10, color: subText }}>Interactive Software, AI & Cloud Portfolio</span>
                  </div>
                </div>

                {/* Search Input */}
                <div style={{ position: 'relative', minWidth: 220 }}>
                  <input
                    className="xp-input"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder={t.projects.searchPlaceholder}
                    style={{
                      background: darkMode ? '#222' : 'white',
                      color: textColor,
                      paddingRight: 24,
                    }}
                  />
                  <span style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)', fontSize: 12 }}>
                    🔍
                  </span>
                </div>
              </div>

              {/* Category Pills */}
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="xp-button"
                    style={{
                      fontWeight: selectedCategory === cat ? 'bold' : 'normal',
                      background: selectedCategory === cat ? '#3169c4' : (darkMode ? '#333' : undefined),
                      color: selectedCategory === cat ? 'white' : (darkMode ? '#eee' : undefined),
                      borderColor: selectedCategory === cat ? '#1d4890' : undefined,
                    }}
                  >
                    {cat === 'All' ? t.projects.all : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 16,
            }}>
              {filteredProjects.map(project => (
                <div
                  key={project.slug}
                  onClick={() => setSelectedProject(project)}
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderCol}`,
                    borderRadius: 6,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  }}
                  className="hover:scale-[1.02] hover:border-blue-500"
                >
                  {/* Hero Thumbnail Banner */}
                  <div style={{
                    height: 120,
                    background: `linear-gradient(135deg, ${project.color}33, ${project.accent}88)`,
                    borderBottom: `1px solid ${borderCol}`,
                    padding: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}>
                    <span style={{
                      alignSelf: 'flex-start',
                      background: 'rgba(0,0,0,0.6)',
                      color: 'white',
                      fontSize: 10,
                      fontWeight: 'bold',
                      padding: '1px 6px',
                      borderRadius: 3,
                      backdropFilter: 'blur(4px)',
                    }}>
                      {project.category}
                    </span>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}>
                      <span style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                      }}>
                        {project.title}
                      </span>
                      <span style={{
                        background: 'rgba(0,0,0,0.7)',
                        color: '#eee',
                        fontSize: 9,
                        padding: '1px 5px',
                        borderRadius: 2,
                      }}>
                        {project.itemsCount} {t.projects.items}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '12px 14px' }}>
                    <div style={{ fontSize: 11, color: project.color, fontWeight: 'bold', marginBottom: 4 }}>
                      {project.tagline}
                    </div>
                    <p style={{
                      fontSize: 11,
                      color: subText,
                      margin: '0 0 10px',
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {project.description}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10, color: subText }}>
                      <span>{project.views} {t.projects.views} • {project.year}</span>
                      <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>{t.projects.viewProject} ➔</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div style={{ textAlign: 'center', padding: 40, color: subText }}>
                No projects found for "{searchQuery}"
              </div>
            )}
          </div>
        )}
      </div>

      {/* IE Status Bar */}
      <div style={{
        background: darkMode ? '#222222' : '#d4d0c8',
        borderTop: `1px solid ${darkMode ? '#333333' : '#aba99a'}`,
        padding: '2px 8px',
        fontSize: 11,
        display: 'flex',
        justifyContent: 'space-between',
        color: subText,
      }}>
        <span>🌐 {t.system.ready}</span>
        <span>Internet | Protected Mode: On</span>
      </div>
    </div>
  );
}
