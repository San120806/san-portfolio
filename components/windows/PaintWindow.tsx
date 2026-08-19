'use client';

import { useState, useRef, useEffect } from 'react';

const COLORS = [
  '#000000', '#7f7f7f', '#880015', '#ed1c24', '#ff7f27', '#fff200', '#22b14c', '#00a2e8', '#3f48cc', '#a349a4',
  '#ffffff', '#c3c3c3', '#b97a57', '#ffaec9', '#ffc90e', '#efe4b0', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7',
];

export default function PaintWindow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(3);
  const [tool, setTool] = useState<'brush' | 'eraser'>('brush');
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : color;
    ctx.lineWidth = tool === 'eraser' ? brushSize * 4 : brushSize;
    ctx.lineCap = 'round';
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDraw = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Saniya_Paint_Drawing.png';
    a.click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#d4d0c8' }}>
      {/* Menu */}
      <div style={{
        background: '#f0ede4',
        borderBottom: '1px solid #aba99a',
        padding: '2px 0',
        display: 'flex',
        fontSize: 11,
      }}>
        {['File', 'Edit', 'View', 'Image', 'Colors', 'Help'].map(m => (
          <span key={m} style={{ padding: '2px 8px', cursor: 'pointer' }}
            className="hover:bg-blue-600 hover:text-white">{m}</span>
        ))}
      </div>

      {/* Toolbar */}
      <div className="xp-toolbar">
        <button
          className={`xp-button ${tool === 'brush' ? 'active' : ''}`}
          onClick={() => setTool('brush')}
          style={{ fontWeight: tool === 'brush' ? 'bold' : 'normal' }}
        >
          ✏️ Brush
        </button>
        <button
          className={`xp-button ${tool === 'eraser' ? 'active' : ''}`}
          onClick={() => setTool('eraser')}
          style={{ fontWeight: tool === 'eraser' ? 'bold' : 'normal' }}
        >
          🧹 Eraser
        </button>
        <div style={{ width: 1, height: 18, background: '#999', margin: '0 2px' }} />
        {[2, 4, 8].map(sz => (
          <button
            key={sz}
            className="xp-button"
            onClick={() => setBrushSize(sz)}
            style={{ fontWeight: brushSize === sz ? 'bold' : 'normal', padding: '1px 6px' }}
          >
            {sz}px
          </button>
        ))}
        <div style={{ width: 1, height: 18, background: '#999', margin: '0 2px' }} />
        <button className="xp-button" onClick={clearCanvas}>🗑️ Clear</button>
        <button className="xp-button" onClick={saveCanvas}>💾 Save</button>
      </div>

      {/* Canvas Area */}
      <div style={{ flex: 1, overflow: 'auto', padding: 8, background: '#7f7f7f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <canvas
          ref={canvasRef}
          width={500}
          height={320}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={stopDraw}
          onMouseLeave={stopDraw}
          style={{
            background: 'white',
            border: '2px inset #ffffff',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.4)',
            cursor: tool === 'eraser' ? 'crosshair' : 'default',
          }}
        />
      </div>

      {/* Color Palette */}
      <div style={{
        background: '#d4d0c8',
        borderTop: '1px solid #aba99a',
        padding: '4px 8px',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}>
        <div style={{
          width: 24, height: 24, background: color,
          border: '2px inset #ffffff',
          boxShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 16px)', gap: 2 }}>
          {COLORS.map(c => (
            <button
              key={c}
              onClick={() => { setColor(c); setTool('brush'); }}
              style={{
                width: 16,
                height: 16,
                background: c,
                border: '1px solid #888',
                cursor: 'pointer',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
