'use client';

import { useState, useEffect, useRef } from 'react';

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  year: string;
  genre: string;
  audioSrc: string;
  coverStyle: {
    bg: string;
    artType: 'daftpunk' | 'lenka' | 'coldplay';
    accentColor: string;
  };
}

const TRACKS: Track[] = [
  {
    id: 1,
    title: 'Veridis Quo',
    artist: 'Daft Punk',
    album: 'Discovery',
    year: '2001',
    genre: 'Electronic / French House',
    audioSrc: '/Daft Punk - Veridis Quo (Official Audio).mp3',
    coverStyle: {
      bg: 'linear-gradient(135deg, #050510 0%, #150025 50%, #001020 100%)',
      artType: 'daftpunk',
      accentColor: '#e040fb',
    },
  },
  {
    id: 2,
    title: 'Everything At Once',
    artist: 'Lenka',
    album: 'Two',
    year: '2011',
    genre: 'Indie Pop / Quirky Pop',
    audioSrc: '/Lenka - Everything At Once (Official Video).mp3',
    coverStyle: {
      bg: 'linear-gradient(135deg, #fff2cc 0%, #ffd6d6 50%, #d8f3dc 100%)',
      artType: 'lenka',
      accentColor: '#ff4081',
    },
  },
  {
    id: 3,
    title: 'Adventure Of A Lifetime',
    artist: 'Coldplay',
    album: 'A Head Full of Dreams',
    year: '2015',
    genre: 'Disco Pop / Alternative Rock',
    audioSrc: '/Coldplay - Adventure Of A Lifetime (Audio).mp3',
    coverStyle: {
      bg: 'linear-gradient(135deg, #091a3a 0%, #1a0b2e 50%, #002244 100%)',
      artType: 'coldplay',
      accentColor: '#00e5ff',
    },
  },
];

export default function MediaPlayerWindow() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isLoading, setIsLoading] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeSong = TRACKS[currentTrack];

  // Sync volume with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handle track change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = activeSong.audioSrc;
      audioRef.current.load();
      if (isPlaying) {
        setIsLoading(true);
        audioRef.current
          .play()
          .then(() => setIsLoading(false))
          .catch((err) => {
            console.warn('Playback error:', err);
            setIsLoading(false);
          });
      }
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch((err) => {
          console.warn('Playback error:', err);
          setIsLoading(false);
        });
    }
  };

  const handleSelectTrack = (idx: number) => {
    setCurrentTrack(idx);
    setIsPlaying(true);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % TRACKS.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentTrack((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
    setIsPlaying(true);
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatSec = (sec: number) => {
    if (isNaN(sec) || sec === 0) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0a1020', color: '#88aadd' }}>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={activeSong.audioSrc}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onEnded={handleNext}
        onError={() => {
          setIsLoading(false);
        }}
      />

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
          <span style={{ color: '#00d8ff', fontSize: 13 }}>▶</span>
          <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Windows Media Player 9 Series</span>
        </div>
        <span style={{ color: '#6fa0e8', fontSize: 10 }}>Saniya XP Music Deck</span>
      </div>

      {/* Main Screen: Album Art Showcase */}
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
        padding: 10,
      }}>
        {/* Glow ambient background based on active track accent */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at center, ${activeSong.coverStyle.accentColor}25 0%, rgba(5, 10, 30, 0.6) 65%, #040814 100%)`,
          pointerEvents: 'none',
        }} />

        {/* Album Artwork Card Frame */}
        <div style={{
          position: 'relative',
          width: 140,
          height: 140,
          borderRadius: 8,
          boxShadow: isPlaying
            ? `0 0 24px ${activeSong.coverStyle.accentColor}88, 0 8px 16px rgba(0,0,0,0.8)`
            : '0 4px 14px rgba(0,0,0,0.7)',
          overflow: 'hidden',
          border: '2px solid rgba(255,255,255,0.2)',
          background: activeSong.coverStyle.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          transform: isPlaying ? 'scale(1.04)' : 'scale(1)',
        }}>
          {/* Daft Punk — Discovery Album Cover Art */}
          {activeSong.coverStyle.artType === 'daftpunk' && (
            <div style={{ textAlign: 'center', padding: 8, position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(230, 60, 255, 0.4) 0%, rgba(0, 220, 255, 0.2) 50%, transparent 80%)',
              }} />
              <div style={{
                fontSize: 16,
                fontWeight: '900',
                letterSpacing: 2,
                background: 'linear-gradient(45deg, #ff0055, #ffcc00, #00ffcc, #ff00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 10px rgba(255,255,255,0.4)',
                fontStyle: 'italic',
                zIndex: 1,
              }}>
                Daft Punk
              </div>
              <div style={{
                fontSize: 11,
                letterSpacing: 4,
                color: '#ffffff',
                fontWeight: 'bold',
                marginTop: 4,
                zIndex: 1,
                textShadow: '0 0 8px #ff00ff',
              }}>
                DISCOVERY
              </div>
              <div style={{
                marginTop: 8,
                fontSize: 8,
                color: '#00ffff',
                letterSpacing: 1,
                border: '1px solid rgba(0,255,255,0.5)',
                padding: '1px 6px',
                borderRadius: 3,
                zIndex: 1,
              }}>
                VERIDIS QUO
              </div>
            </div>
          )}

          {/* Lenka — Two (Everything At Once) Album Cover Art */}
          {activeSong.coverStyle.artType === 'lenka' && (
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 60%, #a1c4fd 100%)',
              padding: 6,
            }}>
              <div style={{
                fontSize: 22,
                marginBottom: 2,
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
              }}>
                🦊🌸
              </div>
              <div style={{
                fontSize: 18,
                fontWeight: '900',
                color: '#c2185b',
                letterSpacing: 3,
                fontFamily: 'cursive, sans-serif',
                textShadow: '1px 1px 0 #fff',
              }}>
                LENKA
              </div>
              <div style={{
                fontSize: 9,
                fontWeight: 'bold',
                color: '#4a148c',
                letterSpacing: 1,
                marginTop: 2,
                background: 'rgba(255,255,255,0.7)',
                padding: '1px 8px',
                borderRadius: 10,
              }}>
                Two • Everything At Once
              </div>
            </div>
          )}

          {/* Coldplay — A Head Full of Dreams (Adventure of a Lifetime) Album Cover Art */}
          {activeSong.coverStyle.artType === 'coldplay' && (
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              background: 'radial-gradient(circle at center, #2e0854 0%, #0d1b2a 70%, #000814 100%)',
              padding: 6,
            }}>
              {/* Flower of Life Rainbow Geometry Mandala */}
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                border: '2px solid rgba(0, 229, 255, 0.8)',
                boxShadow: '0 0 16px rgba(255, 0, 128, 0.7), inset 0 0 12px rgba(0, 255, 200, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                animation: isPlaying ? 'spin 12s linear infinite' : 'none',
              }}>
                <div style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  border: '2px dashed #ffea00',
                  boxShadow: '0 0 8px #ff007f',
                }} />
              </div>

              <div style={{
                fontSize: 12,
                fontWeight: '900',
                color: '#ffffff',
                letterSpacing: 2,
                marginTop: 6,
                textShadow: '0 0 8px #00e5ff',
              }}>
                COLDPLAY
              </div>
              <div style={{
                fontSize: 8,
                color: '#ffea00',
                letterSpacing: 1,
                textTransform: 'uppercase',
                fontWeight: '600',
              }}>
                Adventure Of A Lifetime
              </div>
            </div>
          )}
        </div>

        {/* Track Title Info */}
        <div style={{ zIndex: 1, marginTop: 10, textAlign: 'center' }}>
          <div style={{
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: 14,
            textShadow: `0 0 10px ${activeSong.coverStyle.accentColor}`,
          }}>
            {activeSong.title}
          </div>
          <div style={{ color: activeSong.coverStyle.accentColor, fontSize: 12, marginTop: 1, fontWeight: '600' }}>
            {activeSong.artist}
          </div>
          <div style={{ color: '#88aadd', fontSize: 10, marginTop: 2 }}>
            {activeSong.album} ({activeSong.year}) • {activeSong.genre}
          </div>
        </div>

        {/* Track Progress Seek Bar */}
        <div style={{ width: '88%', marginTop: 8, zIndex: 1, display: 'flex', alignItems: 'center', gap: 8, fontSize: 10, color: '#6fa0e8' }}>
          <span>{formatSec(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.5"
            value={currentTime}
            onChange={handleSeek}
            style={{
              flex: 1,
              height: 4,
              cursor: 'pointer',
              accentColor: activeSong.coverStyle.accentColor,
            }}
          />
          <span>{formatSec(duration)}</span>
        </div>
      </div>

      {/* Playlist & Controls */}
      <div style={{
        background: 'linear-gradient(180deg, #102444 0%, #08162c 100%)',
        borderTop: '1px solid #1a4070',
        padding: '6px 10px',
      }}>
        {/* Playback buttons & Volume */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <button
              className="xp-button"
              onClick={handlePrev}
              style={{ padding: '2px 8px' }}
              title="Previous Track"
            >
              ⏮️
            </button>
            <button
              className="xp-button"
              onClick={togglePlay}
              style={{
                padding: '3px 16px',
                fontWeight: 'bold',
                color: isPlaying ? '#cc0000' : '#004499',
              }}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isLoading ? '⏳' : isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
            <button
              className="xp-button"
              onClick={handleNext}
              style={{ padding: '2px 8px' }}
              title="Next Track"
            >
              ⏭️
            </button>
            <button
              className="xp-button"
              onClick={handleStop}
              style={{ padding: '2px 8px' }}
              title="Stop"
            >
              ⏹️
            </button>
          </div>

          {/* Volume Slider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: '#a0c0f0' }}>
            <span>🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              style={{ width: 70, cursor: 'pointer' }}
            />
            <span>{Math.round(volume * 100)}%</span>
          </div>
        </div>

        {/* Track Playlist listing */}
        <div style={{
          background: '#040a16',
          border: '1px solid #12284c',
          borderRadius: 3,
          maxHeight: 85,
          overflowY: 'auto',
          fontSize: 11,
        }}>
          {TRACKS.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => handleSelectTrack(idx)}
              style={{
                padding: '4px 8px',
                cursor: 'pointer',
                background: currentTrack === idx ? '#1a3c70' : 'transparent',
                color: currentTrack === idx ? '#ffffff' : '#88aadd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #08162c',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: currentTrack === idx ? '#00ffff' : '#5577aa' }}>
                  {currentTrack === idx && isPlaying ? '▶' : `${idx + 1}.`}
                </span>
                <span style={{ fontWeight: currentTrack === idx ? 'bold' : 'normal' }}>
                  {t.title} — <span style={{ opacity: 0.75 }}>{t.artist}</span>
                </span>
              </div>
              <span style={{ fontSize: 10, opacity: 0.7 }}>MP3</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
