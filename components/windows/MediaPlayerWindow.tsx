'use client';

import { useState, useEffect, useRef } from 'react';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  durationSeconds: number;
  album: string;
  year: string;
  genre: string;
  coverStyle: {
    bg: string;
    artType: 'daftpunk' | 'lenka' | 'coldplay';
    accentColor: string;
  };
  melody: Array<{ note: number; dur: number; bass?: number }>;
}

const TRACKS: Track[] = [
  {
    id: 1,
    title: 'Verdis Quo',
    artist: 'Daft Punk',
    duration: '3:57',
    durationSeconds: 237,
    album: 'Discovery',
    year: '2001',
    genre: 'Electronic / French House',
    coverStyle: {
      bg: 'linear-gradient(135deg, #050510 0%, #150025 50%, #001020 100%)',
      artType: 'daftpunk',
      accentColor: '#e040fb',
    },
    melody: [
      { note: 440.00, dur: 0.36, bass: 110.00 }, // A4, A2
      { note: 523.25, dur: 0.36, bass: 110.00 }, // C5
      { note: 659.25, dur: 0.36, bass: 110.00 }, // E5
      { note: 880.00, dur: 0.72, bass: 110.00 }, // A5
      { note: 783.99, dur: 0.36, bass: 110.00 }, // G5
      { note: 659.25, dur: 0.36, bass: 110.00 }, // E5
      { note: 523.25, dur: 0.72, bass: 110.00 }, // C5
      { note: 392.00, dur: 0.36, bass: 98.00 },  // G4, G2
      { note: 493.88, dur: 0.36, bass: 98.00 },  // B4
      { note: 587.33, dur: 0.36, bass: 98.00 },  // D5
      { note: 783.99, dur: 0.72, bass: 98.00 },  // G5
      { note: 659.25, dur: 0.36, bass: 98.00 },  // E5
      { note: 587.33, dur: 0.36, bass: 98.00 },  // D5
      { note: 493.88, dur: 0.72, bass: 98.00 },  // B4
      { note: 349.23, dur: 0.36, bass: 87.31 },  // F4, F2
      { note: 440.00, dur: 0.36, bass: 87.31 },  // A4
      { note: 523.25, dur: 0.36, bass: 87.31 },  // C5
      { note: 698.46, dur: 0.72, bass: 87.31 },  // F5
      { note: 659.25, dur: 0.36, bass: 87.31 },  // E5
      { note: 523.25, dur: 0.36, bass: 87.31 },  // C5
      { note: 440.00, dur: 0.72, bass: 87.31 },  // A4
      { note: 329.63, dur: 0.36, bass: 82.41 },  // E4, E2
      { note: 392.00, dur: 0.36, bass: 82.41 },  // G4
      { note: 493.88, dur: 0.36, bass: 82.41 },  // B4
      { note: 659.25, dur: 0.72, bass: 82.41 },  // E5
    ],
  },
  {
    id: 2,
    title: 'Everything at Once',
    artist: 'Lenka',
    duration: '2:38',
    durationSeconds: 158,
    album: 'Two',
    year: '2011',
    genre: 'Indie Pop / Quirky Pop',
    coverStyle: {
      bg: 'linear-gradient(135deg, #fff2cc 0%, #ffd6d6 50%, #d8f3dc 100%)',
      artType: 'lenka',
      accentColor: '#ff4081',
    },
    melody: [
      { note: 329.63, dur: 0.24, bass: 164.81 }, // E4, E3
      { note: 329.63, dur: 0.24, bass: 164.81 }, // E4
      { note: 369.99, dur: 0.24, bass: 164.81 }, // F#4
      { note: 392.00, dur: 0.48, bass: 164.81 }, // G4
      { note: 329.63, dur: 0.24, bass: 164.81 }, // E4
      { note: 392.00, dur: 0.24, bass: 164.81 }, // G4
      { note: 440.00, dur: 0.48, bass: 220.00 }, // A4, A3
      { note: 392.00, dur: 0.24, bass: 164.81 }, // G4
      { note: 369.99, dur: 0.24, bass: 164.81 }, // F#4
      { note: 329.63, dur: 0.48, bass: 164.81 }, // E4
      { note: 293.66, dur: 0.24, bass: 146.83 }, // D4, D3
      { note: 329.63, dur: 0.48, bass: 164.81 }, // E4
      { note: 392.00, dur: 0.24, bass: 164.81 }, // G4
      { note: 440.00, dur: 0.24, bass: 220.00 }, // A4, A3
      { note: 493.88, dur: 0.48, bass: 246.94 }, // B4, B3
      { note: 440.00, dur: 0.24, bass: 220.00 }, // A4
      { note: 392.00, dur: 0.24, bass: 164.81 }, // G4
      { note: 329.63, dur: 0.72, bass: 164.81 }, // E4
    ],
  },
  {
    id: 3,
    title: 'Adventure of a Lifetime',
    artist: 'Coldplay',
    duration: '4:18',
    durationSeconds: 258,
    album: 'A Head Full of Dreams',
    year: '2015',
    genre: 'Disco Pop / Alternative',
    coverStyle: {
      bg: 'linear-gradient(135deg, #091a3a 0%, #1a0b2e 50%, #002244 100%)',
      artType: 'coldplay',
      accentColor: '#00e5ff',
    },
    melody: [
      // Iconic Jonny Buckland upbeat guitar/synth disco riff
      { note: 587.33, dur: 0.20, bass: 146.83 }, // D5, D3
      { note: 659.25, dur: 0.20, bass: 146.83 }, // E5
      { note: 739.99, dur: 0.20, bass: 146.83 }, // F#5
      { note: 880.00, dur: 0.40, bass: 146.83 }, // A5
      { note: 739.99, dur: 0.20, bass: 146.83 }, // F#5
      { note: 659.25, dur: 0.20, bass: 146.83 }, // E5
      { note: 587.33, dur: 0.40, bass: 146.83 }, // D5
      { note: 493.88, dur: 0.20, bass: 123.47 }, // B4, B2
      { note: 587.33, dur: 0.20, bass: 123.47 }, // D5
      { note: 659.25, dur: 0.40, bass: 123.47 }, // E5
      { note: 739.99, dur: 0.20, bass: 164.81 }, // F#5, E3
      { note: 880.00, dur: 0.20, bass: 164.81 }, // A5
      { note: 987.77, dur: 0.40, bass: 164.81 }, // B5
      { note: 880.00, dur: 0.20, bass: 164.81 }, // A5
      { note: 739.99, dur: 0.20, bass: 164.81 }, // F#5
      { note: 659.25, dur: 0.60, bass: 146.83 }, // E5, D3
    ],
  },
];

export default function MediaPlayerWindow() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.75);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noteIdxRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(false);
  const currentTrackRef = useRef<number>(0);
  const volumeRef = useRef<number>(0.75);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const clockTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
    currentTrackRef.current = currentTrack;
    volumeRef.current = volume;
  }, [isPlaying, currentTrack, volume]);

  // Ensure AudioContext is ready
  const initAudio = () => {
    if (typeof window === 'undefined') return null;
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
        const masterGain = audioCtxRef.current.createGain();
        masterGain.gain.setValueAtTime(volumeRef.current * 0.25, audioCtxRef.current.currentTime);
        masterGain.connect(audioCtxRef.current.destination);
        gainNodeRef.current = masterGain;
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Play next synthesized note in a robust recursive loop
  const playStep = () => {
    if (!isPlayingRef.current) return;
    const ctx = initAudio();
    if (!ctx || !gainNodeRef.current) return;

    const track = TRACKS[currentTrackRef.current];
    const notes = track.melody;
    if (!notes || notes.length === 0) return;

    const step = notes[noteIdxRef.current % notes.length];
    noteIdxRef.current = (noteIdxRef.current + 1) % notes.length;

    const now = ctx.currentTime;

    // Lead melody oscillator
    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();

    if (track.coverStyle.artType === 'daftpunk') {
      osc.type = 'sawtooth';
    } else if (track.coverStyle.artType === 'coldplay') {
      osc.type = 'triangle';
    } else {
      osc.type = 'sine';
    }

    osc.frequency.setValueAtTime(step.note, now);

    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.linearRampToValueAtTime(volumeRef.current * 0.22, now + 0.03);
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + step.dur * 0.92);

    osc.connect(noteGain);
    noteGain.connect(gainNodeRef.current);

    osc.start(now);
    osc.stop(now + step.dur);

    // Sub-bass layer
    if (step.bass) {
      const bassOsc = ctx.createOscillator();
      const bassGain = ctx.createGain();

      bassOsc.type = 'sine';
      bassOsc.frequency.setValueAtTime(step.bass, now);

      bassGain.gain.setValueAtTime(0.001, now);
      bassGain.gain.linearRampToValueAtTime(volumeRef.current * 0.18, now + 0.04);
      bassGain.gain.exponentialRampToValueAtTime(0.001, now + step.dur * 0.9);

      bassOsc.connect(bassGain);
      bassGain.connect(gainNodeRef.current);

      bassOsc.start(now);
      bassOsc.stop(now + step.dur);
    }

    // Schedule next beat
    if (isPlayingRef.current) {
      timerRef.current = setTimeout(playStep, step.dur * 1000);
    }
  };

  const startPlayback = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    initAudio();
    setIsPlaying(true);
    isPlayingRef.current = true;
    noteIdxRef.current = 0;
    playStep();

    if (clockTimerRef.current) clearInterval(clockTimerRef.current);
    clockTimerRef.current = setInterval(() => {
      setCurrentTime(prev => prev + 1);
    }, 1000);
  };

  const stopPlayback = () => {
    setIsPlaying(false);
    isPlayingRef.current = false;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (clockTimerRef.current) clearInterval(clockTimerRef.current);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  const handleSelectTrack = (idx: number) => {
    stopPlayback();
    setCurrentTrack(idx);
    currentTrackRef.current = idx;
    setCurrentTime(0);
    setTimeout(() => {
      startPlayback();
    }, 100);
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    volumeRef.current = newVol;
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(newVol * 0.25, audioCtxRef.current.currentTime);
    }
  };

  const formatSec = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const activeSong = TRACKS[currentTrack];

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
        padding: 12,
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
                VERDIS QUO
              </div>
            </div>
          )}

          {/* Lenka — Two (Everything at Once) Album Cover Art */}
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
                Two • Everything at Once
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
                A Head Full of Dreams
              </div>
            </div>
          )}
        </div>

        {/* Track Title Info */}
        <div style={{ zIndex: 1, marginTop: 12, textAlign: 'center' }}>
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
          <div style={{
            color: isPlaying ? '#00ff88' : '#888',
            fontSize: 10,
            marginTop: 4,
            fontWeight: 'bold',
          }}>
            {isPlaying ? `● Playing (${formatSec(currentTime)} / ${activeSong.duration})` : `⏸ Stopped (${activeSong.duration})`}
          </div>
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
              onClick={() => handleSelectTrack((currentTrack - 1 + TRACKS.length) % TRACKS.length)}
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
              {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
            <button
              className="xp-button"
              onClick={() => handleSelectTrack((currentTrack + 1) % TRACKS.length)}
              style={{ padding: '2px 8px' }}
              title="Next Track"
            >
              ⏭️
            </button>
            <button
              className="xp-button"
              onClick={() => { stopPlayback(); setCurrentTime(0); }}
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
              onChange={e => handleVolumeChange(parseFloat(e.target.value))}
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
              <span style={{ fontSize: 10, opacity: 0.7 }}>{t.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
