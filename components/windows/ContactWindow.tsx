'use client';

import { useState } from 'react';
import { socialsData } from '@/data/socials';
import { en } from '@/data/i18n/en';
import { hi } from '@/data/i18n/hi';

interface ContactWindowProps {
  lang?: 'en' | 'hi';
}

export default function ContactWindow({ lang = 'en' }: ContactWindowProps) {
  const t = lang === 'hi' ? hi : en;
  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSend = () => {
    if (!from || !subject || !message) {
      setError(true);
      setTimeout(() => setError(false), 2500);
      return;
    }

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFrom('');
      setSubject('');
      setMessage('');
    }, 3500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f5f3ee' }}>
      {/* Menu bar */}
      <div style={{
        background: '#f0ede4',
        borderBottom: '1px solid #aba99a',
        padding: '2px 0',
        display: 'flex',
        fontSize: 11,
      }}>
        {['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Message', 'Help'].map(m => (
          <span key={m} style={{ padding: '2px 8px', cursor: 'pointer' }}
            className="hover:bg-blue-600 hover:text-white">{m}</span>
        ))}
      </div>

      {/* Toolbar */}
      <div className="xp-toolbar">
        <button
          className="xp-button"
          onClick={handleSend}
          style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 'bold' }}
        >
          <span>📤</span> {t.contact.send}
        </button>
        <div style={{ width: 1, height: 20, background: '#ccc', margin: '0 4px' }} />
        <button
          className="xp-button"
          onClick={() => { setFrom(''); setSubject(''); setMessage(''); }}
          style={{ display: 'flex', alignItems: 'center', gap: 4 }}
        >
          <span>📝</span> {t.contact.newMsg}
        </button>
        <div style={{ width: 1, height: 20, background: '#ccc', margin: '0 4px' }} />
        <button className="xp-button"><span>✂️</span></button>
        <button className="xp-button"><span>📋</span></button>
        <button className="xp-button"><span>📄</span></button>
        <div style={{ marginLeft: 'auto' }}>
          <a href={socialsData.linkedin} target="_blank" rel="noopener noreferrer">
            <button className="xp-button" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ color: '#0077b5', fontWeight: 'bold', fontSize: 12 }}>in</span> LinkedIn
            </button>
          </a>
        </div>
      </div>

      {/* Outlook Form Fields */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
        {/* To field */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #c0bdb5',
          padding: '4px 8px',
          background: '#faf8f2',
          gap: 8,
        }}>
          <span style={{ fontSize: 11, width: 60, fontWeight: 'bold', color: '#555', flexShrink: 0 }}>
            {t.contact.to}
          </span>
          <div style={{
            flex: 1,
            background: 'white',
            border: '2px inset #7f9db9',
            padding: '2px 6px',
            fontSize: 11,
            color: '#000',
          }}>
            Saniya Kapure &lt;{socialsData.email}&gt;
          </div>
        </div>

        {/* From field */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #c0bdb5',
          padding: '4px 8px',
          background: '#faf8f2',
          gap: 8,
        }}>
          <span style={{ fontSize: 11, width: 60, fontWeight: 'bold', color: '#555', flexShrink: 0 }}>
            {t.contact.from}
          </span>
          <input
            className="xp-input"
            placeholder={t.contact.fromPlaceholder}
            value={from}
            onChange={e => setFrom(e.target.value)}
            style={{ flex: 1 }}
          />
        </div>

        {/* Subject field */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #c0bdb5',
          padding: '4px 8px',
          background: '#faf8f2',
          gap: 8,
        }}>
          <span style={{ fontSize: 11, width: 60, fontWeight: 'bold', color: '#555', flexShrink: 0 }}>
            {t.contact.subject}
          </span>
          <input
            className="xp-input"
            placeholder={t.contact.subjectPlaceholder}
            value={subject}
            onChange={e => setSubject(e.target.value)}
            style={{ flex: 1 }}
          />
        </div>

        {/* Message body */}
        <div style={{ flex: 1, padding: 6, display: 'flex', flexDirection: 'column' }}>
          <textarea
            className="xp-textarea"
            placeholder={t.contact.messagePlaceholder}
            value={message}
            onChange={e => setMessage(e.target.value)}
            style={{ flex: 1, height: '100%', fontSize: 12 }}
          />
        </div>

        {/* Sent Confirmation Toast */}
        {sent && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#e8ffe8',
            border: '2px solid #3a8a3a',
            padding: '14px 24px',
            borderRadius: 6,
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            zIndex: 100,
            textAlign: 'center',
            fontSize: 13,
            color: '#006600',
            fontWeight: 'bold',
          }}>
            {t.contact.sentSuccess}
          </div>
        )}

        {/* Error Validation Toast */}
        {error && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#ffe8e8',
            border: '2px solid #d43428',
            padding: '12px 20px',
            borderRadius: 6,
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            zIndex: 100,
            textAlign: 'center',
            fontSize: 12,
            color: '#cc0000',
            fontWeight: 'bold',
          }}>
            ⚠️ {t.contact.fillAll}
          </div>
        )}
      </div>

      {/* Status bar */}
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
