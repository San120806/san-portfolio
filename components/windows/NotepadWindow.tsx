'use client';

import { useState } from 'react';
import { en } from '@/data/i18n/en';
import { hi } from '@/data/i18n/hi';

export default function NotepadWindow({ lang = 'en' }: { lang?: 'en' | 'hi' }) {
  const t = lang === 'hi' ? hi : en;
  const [content, setContent] = useState(t.notepad.defaultContent);
  const [wordWrap, setWordWrap] = useState(true);

  const lines = content.split('\n').length;
  const chars = content.length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
      {/* Menu bar */}
      <div style={{
        background: '#f0ede4',
        borderBottom: '1px solid #aba99a',
        padding: '2px 0',
        display: 'flex',
        fontSize: 11,
      }}>
        {['File', 'Edit', 'Format', 'View', 'Help'].map(m => (
          <span
            key={m}
            style={{ padding: '2px 8px', cursor: 'pointer' }}
            className="hover:bg-blue-600 hover:text-white"
            onClick={() => {
              if (m === 'Format') setWordWrap(!wordWrap);
            }}
          >
            {m}
          </span>
        ))}
      </div>

      {/* Editor text area */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          wrap={wordWrap ? 'soft' : 'off'}
          style={{
            flex: 1,
            height: '100%',
            border: 'none',
            outline: 'none',
            padding: 8,
            fontFamily: '"Lucida Console", "Courier New", monospace',
            fontSize: 12,
            lineHeight: 1.4,
            resize: 'none',
            whiteSpace: wordWrap ? 'pre-wrap' : 'pre',
            overflow: 'auto',
          }}
        />
      </div>

      {/* Status Bar */}
      <div style={{
        background: '#d4d0c8',
        borderTop: '1px solid #aba99a',
        padding: '2px 8px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 11,
        color: '#333',
      }}>
        <span>Lines: {lines} | Chars: {chars}</span>
        <span>Windows (CRLF) | UTF-8</span>
      </div>
    </div>
  );
}
