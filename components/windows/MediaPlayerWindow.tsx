'use client';

import { useState, useEffect, useRef } from 'react';

const TRACKS = [
  { id: 1, title: 'Saniya XP - Dreamy Retro Synth', artist: 'Saniya Kapure', duration: '2:14' },
  { id: 2, title: 'Chiptune Builders Anthem', artist: 'Saniya Kapure', duration: '1:45' },
  { id: 3, title: 'Midnight Terminal Lo-Fi', artist: 'Saniya Kapure', duration: '3:02' },
];

export default function MediaPlayerWindow() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [visualizerBars, setVisualizerBars] = useState<number[]>(new Array(16).fill(10));
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setVisualizerBars(
          new Array(16).fill(0).map(() => Math.floor(Math.random() * 80) + 15)
        );
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setVisualizerBars(new Array(16).fill(8));
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0a1020', color: '#88aadd' }}>
      {/* Media Player Top Chrome */}
      <div style={{
        background: 'linear-gradient(180deg, #1d3356 0%, #0d1e38 100%)',
        borderBottom: '1px solid #1a4070',
        padding: '3px 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 11,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ color: '#00d8ff' }}>▶</span>
          <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Windows Media Player 9</span>
        </div>
        <span style={{ color: '#6fa0e8', fontSize: 10 }}>Saniya XP Edition</span>
      </div>

      {/* Visualizer Display Screen */}
      <div style={{
        flex: 1,
        background: '#040814',
        border: '2px inset #0a1c38',
        margin: 6,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glow ambient background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(0, 180, 255, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Animated Spectrum Analyzer Bars */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 4,
          height: 100,
          padding: '0 20px',
          zIndex: 1,
        }}>
          {visualizerBars.map((height, idx) => (
            <div
              key={idx}
              style={{
                width: 10,
                height: `${height}%`,
                background: `linear-gradient(180deg, #00ffff 0%, #0088ff 60%, #002288 100%)`,
                borderRadius: '2px 2px 0 0',
                boxShadow: '0 0 6px rgba(0, 255, 255, 0.4)',
                transition: 'height 0.08s ease-out',
              }}
            />
          ))}
        </div>

        {/* Track Title Info */}
        <div style={{ zIndex: 1, marginTop: 16, textAlign: 'center' }}>
          <div style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 13, textShadow: '0 0 8px rgba(0,255,255,0.6)' }}>
            {TRACKS[currentTrack].title}
          </div>
          <div style={{ color: '#6fa0e8', fontSize: 11, marginTop: 2 }}>
            {TRACKS[currentTrack].artist} • {isPlaying ? 'Playing...' : 'Paused'}
          </div>
        </div>
      </div>

      {/* Playlist & Controls */}
      <div style={{
        background: 'linear-gradient(180deg, #102444 0%, #08162c 100%)',
        borderTop: '1px solid #1a4070',
        padding: '6px 10px',
      }}>
        {/* Playback buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 6 }}>
          <button
            className="xp-button"
            onClick={() => setCurrentTrack((currentTrack - 1 + TRACKS.length) % TRACKS.length)}
            style={{ padding: '2px 8px' }}
          >
            ⏮️ Prev
          </button>
          <button
            className="xp-button"
            onClick={togglePlay}
            style={{ padding: '3px 14px', fontWeight: 'bold', color: '#004499' }}
          >
            {isPlaying ? '⏸️ Pause' : '▶️ Play'}
          </button>
          <button
            className="xp-button"
            onClick={() => setCurrentTrack((currentTrack + 1) % TRACKS.length)}
            style={{ padding: '2px 8px' }}
          >
            ⏭️ Next
          </button>
        </div>

        {/* Track listing */}
        <div style={{
          background: '#040a16',
          border: '1px solid #12284c',
          borderRadius: 3,
          maxHeight: 65,
          overflowY: 'auto',
          fontSize: 10,
        }}>
          {TRACKS.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => { setCurrentTrack(idx); setIsPlaying(true); }}
              style={{
                padding: '2px 6px',
                cursor: 'pointer',
                background: currentTrack === idx ? '#1a3c70' : 'transparent',
                color: currentTrack === idx ? '#ffffff' : '#88aadd',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>{idx + 1}. {t.title}</span>
              <span>{t.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
