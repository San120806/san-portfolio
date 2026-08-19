'use client';

import { useState, useEffect, useRef } from 'react';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  durationSeconds: number;
  album: string;
  genre: string;
  // Melodic notes for Web Audio synthesis (freq in Hz, duration in seconds)
  notes: Array<{ freq: number; dur: number; type?: OscillatorType }>;
}

const TRACKS: Track[] = [
  {
    id: 1,
    title: 'Verdis Quo',
    artist: 'Daft Punk',
    duration: '3:57',
    durationSeconds: 237,
    album: 'Discovery',
    genre: 'Electronic / Synthwave',
    notes: [
      // Iconic Verdis Quo chord progression & organ arpeggios
      { freq: 440.00, dur: 0.35, type: 'sawtooth' }, // A4
      { freq: 523.25, dur: 0.35, type: 'sawtooth' }, // C5
      { freq: 659.25, dur: 0.35, type: 'sawtooth' }, // E5
      { freq: 880.00, dur: 0.70, type: 'sawtooth' }, // A5
      { freq: 783.99, dur: 0.35, type: 'sawtooth' }, // G5
      { freq: 659.25, dur: 0.35, type: 'sawtooth' }, // E5
      { freq: 523.25, dur: 0.70, type: 'sawtooth' }, // C5
      { freq: 392.00, dur: 0.35, type: 'sawtooth' }, // G4
      { freq: 493.88, dur: 0.35, type: 'sawtooth' }, // B4
      { freq: 587.33, dur: 0.35, type: 'sawtooth' }, // D5
      { freq: 783.99, dur: 0.70, type: 'sawtooth' }, // G5
      { freq: 659.25, dur: 0.35, type: 'sawtooth' }, // E5
      { freq: 587.33, dur: 0.35, type: 'sawtooth' }, // D5
      { freq: 493.88, dur: 0.70, type: 'sawtooth' }, // B4
      { freq: 349.23, dur: 0.35, type: 'sawtooth' }, // F4
      { freq: 440.00, dur: 0.35, type: 'sawtooth' }, // A4
      { freq: 523.25, dur: 0.35, type: 'sawtooth' }, // C5
      { freq: 698.46, dur: 0.70, type: 'sawtooth' }, // F5
      { freq: 659.25, dur: 0.35, type: 'sawtooth' }, // E5
      { freq: 523.25, dur: 0.35, type: 'sawtooth' }, // C5
      { freq: 440.00, dur: 0.70, type: 'sawtooth' }, // A4
      { freq: 329.63, dur: 0.35, type: 'sawtooth' }, // E4
      { freq: 392.00, dur: 0.35, type: 'sawtooth' }, // G4
      { freq: 493.88, dur: 0.35, type: 'sawtooth' }, // B4
      { freq: 659.25, dur: 0.70, type: 'sawtooth' }, // E5
    ],
  },
  {
    id: 2,
    title: 'Everything at Once',
    artist: 'Lenka',
    duration: '2:38',
    durationSeconds: 158,
    album: 'Two',
    genre: 'Indie Pop',
    notes: [
      // Playful rhythmic melody of "As sly as a fox, as strong as an ox..."
      { freq: 329.63, dur: 0.22, type: 'sine' }, // E4
      { freq: 329.63, dur: 0.22, type: 'sine' }, // E4
      { freq: 369.99, dur: 0.22, type: 'sine' }, // F#4
      { freq: 392.00, dur: 0.44, type: 'sine' }, // G4
      { freq: 329.63, dur: 0.22, type: 'sine' }, // E4
      { freq: 392.00, dur: 0.22, type: 'sine' }, // G4
      { freq: 440.00, dur: 0.44, type: 'sine' }, // A4
      { freq: 392.00, dur: 0.22, type: 'sine' }, // G4
      { freq: 369.99, dur: 0.22, type: 'sine' }, // F#4
      { freq: 329.63, dur: 0.44, type: 'sine' }, // E4
      { freq: 293.66, dur: 0.22, type: 'sine' }, // D4
      { freq: 329.63, dur: 0.44, type: 'sine' }, // E4
      { freq: 392.00, dur: 0.22, type: 'sine' }, // G4
      { freq: 440.00, dur: 0.22, type: 'sine' }, // A4
      { freq: 493.88, dur: 0.44, type: 'sine' }, // B4
      { freq: 440.00, dur: 0.22, type: 'sine' }, // A4
      { freq: 392.00, dur: 0.22, type: 'sine' }, // G4
      { freq: 329.63, dur: 0.60, type: 'sine' }, // E4
    ],
  },
  {
    id: 3,
    title: 'Adventure of a Lifetime',
    artist: 'Coldplay',
    duration: '4:18',
    durationSeconds: 258,
    album: 'A Head Full of Dreams',
    genre: 'Disco Pop / Alternative Rock',
    notes: [
      // Iconic Jonny Buckland upbeat funk riff
      { freq: 587.33, dur: 0.18, type: 'triangle' }, // D5
      { freq: 659.25, dur: 0.18, type: 'triangle' }, // E5
      { freq: 739.99, dur: 0.18, type: 'triangle' }, // F#5
      { freq: 880.00, dur: 0.36, type: 'triangle' }, // A5
      { freq: 739.99, dur: 0.18, type: 'triangle' }, // F#5
      { freq: 659.25, dur: 0.18, type: 'triangle' }, // E5
      { freq: 587.33, dur: 0.36, type: 'triangle' }, // D5
      { freq: 493.88, dur: 0.18, type: 'triangle' }, // B4
      { freq: 587.33, dur: 0.18, type: 'triangle' }, // D5
      { freq: 659.25, dur: 0.36, type: 'triangle' }, // E5
      { freq: 739.99, dur: 0.18, type: 'triangle' }, // F#5
      { freq: 880.00, dur: 0.18, type: 'triangle' }, // A5
      { freq: 987.77, dur: 0.36, type: 'triangle' }, // B5
      { freq: 880.00, dur: 0.18, type: 'triangle' }, // A5
      { freq: 739.99, dur: 0.18, type: 'triangle' }, // F#5
      { freq: 659.25, dur: 0.54, type: 'triangle' }, // E5
    ],
  },
];

export default function MediaPlayerWindow() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [visualizerBars, setVisualizerBars] = useState<number[]>(new Array(20).fill(6));

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noteIdxRef = useRef<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const visualizerTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize or get AudioContext
  const getAudioContext = () => {
    if (typeof window === 'undefined') return null;
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
        const gainNode = audioCtxRef.current.createGain();
        gainNode.gain.setValueAtTime(volume * 0.15, audioCtxRef.current.currentTime);
        gainNode.connect(audioCtxRef.current.destination);
        gainNodeRef.current = gainNode;
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Play next note in track sequence
  const playNextNote = () => {
    const ctx = getAudioContext();
    if (!ctx || !gainNodeRef.current) return;

    const track = TRACKS[currentTrack];
    const notes = track.notes;
    const note = notes[noteIdxRef.current % notes.length];
    noteIdxRef.current = (noteIdxRef.current + 1) % notes.length;

    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();

    osc.type = note.type || 'sawtooth';
    osc.frequency.setValueAtTime(note.freq, ctx.currentTime);

    noteGain.gain.setValueAtTime(0.01, ctx.currentTime);
    noteGain.gain.linearRampToValueAtTime(volume * 0.2, ctx.currentTime + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + note.dur * 0.95);

    osc.connect(noteGain);
    noteGain.connect(gainNodeRef.current);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + note.dur);

    // Schedule next note
    timerRef.current = setTimeout(playNextNote, note.dur * 1000);
  };

  // Handle Play / Pause
  useEffect(() => {
    if (isPlaying) {
      getAudioContext();
      noteIdxRef.current = 0;
      playNextNote();

      // Visualizer bounce effect
      visualizerTimerRef.current = setInterval(() => {
        setVisualizerBars(
          new Array(20).fill(0).map((_, i) => {
            const factor = Math.sin((i / 20) * Math.PI) * 50;
            return Math.floor(Math.random() * (factor + 30)) + 12;
          })
        );
        setCurrentTime(prev => prev + 1);
      }, 120);
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (visualizerTimerRef.current) clearInterval(visualizerTimerRef.current);
      setVisualizerBars(new Array(20).fill(6));
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (visualizerTimerRef.current) clearInterval(visualizerTimerRef.current);
    };
  }, [isPlaying, currentTrack]);

  // Volume slider update
  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(newVol * 0.15, audioCtxRef.current.currentTime);
    }
  };

  const handleSelectTrack = (idx: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentTrack(idx);
    setCurrentTime(0);
    setIsPlaying(true);
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
        <span style={{ color: '#6fa0e8', fontSize: 10 }}>Saniya XP Audio Deck</span>
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
          background: 'radial-gradient(circle at center, rgba(0, 180, 255, 0.18) 0%, rgba(10, 20, 60, 0.4) 60%, transparent 80%)',
          pointerEvents: 'none',
        }} />

        {/* Animated Spectrum Analyzer Bars */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 3,
          height: 100,
          padding: '0 16px',
          zIndex: 1,
        }}>
          {visualizerBars.map((height, idx) => (
            <div
              key={idx}
              style={{
                width: 9,
                height: `${height}%`,
                background: `linear-gradient(180deg, #00ffff 0%, #0088ff 50%, #0033aa 100%)`,
                borderRadius: '2px 2px 0 0',
                boxShadow: isPlaying ? '0 0 8px rgba(0, 255, 255, 0.6)' : 'none',
                transition: 'height 0.1s ease-out',
              }}
            />
          ))}
        </div>

        {/* Track Title Info */}
        <div style={{ zIndex: 1, marginTop: 14, textAlign: 'center' }}>
          <div style={{
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: 14,
            textShadow: '0 0 10px rgba(0,255,255,0.7)',
          }}>
            {activeSong.title}
          </div>
          <div style={{ color: '#00d8ff', fontSize: 12, marginTop: 2, fontWeight: '600' }}>
            {activeSong.artist}
          </div>
          <div style={{ color: '#6fa0e8', fontSize: 10, marginTop: 2 }}>
            {activeSong.album} • {activeSong.genre}
          </div>
          <div style={{ color: isPlaying ? '#00ff88' : '#888', fontSize: 10, marginTop: 3 }}>
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
              onClick={() => setIsPlaying(!isPlaying)}
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
              onClick={() => { setIsPlaying(false); setCurrentTime(0); }}
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
                padding: '3px 8px',
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
