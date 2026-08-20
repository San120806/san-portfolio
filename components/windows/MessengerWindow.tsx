'use client';

import { useState, useRef, useEffect } from 'react';
import { en } from '@/data/i18n/en';
import { hi } from '@/data/i18n/hi';
import { soundManager } from '@/lib/soundEffects';

interface Message {
  from: 'bot' | 'user';
  text: string;
  isNudge?: boolean;
}

interface MessengerWindowProps {
  lang?: 'en' | 'hi';
  onOpenWindow?: (id: string) => void;
  onNudgeTrigger?: () => void;
}

export default function MessengerWindow({ lang = 'en', onOpenWindow, onNudgeTrigger }: MessengerWindowProps) {
  const t = lang === 'hi' ? hi : en;
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'bot',
      text: t.messenger.botWelcome,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const botResponses: Record<string, { reply: string; actionWindow?: string }> = {
    projects: {
      reply: lang === 'hi'
        ? "सानिया ने 5 प्रमुख परियोजनाएं बनाई हैं:\n1. BUILDTRACK — निर्माण ट्रैकर (Full Stack)\n2. DRIFT — पर्सनल ऑपरेशन्स (AI / Product)\n3. SMART TIMETABLE — AI शेड्यूलिंग\n4. URBANMOVE — क्लाउड राइड-शेयरिंग (AWS)\n5. MESCORA INTERIORS — इंटीरियर डिजाइन डिजिटल अनुभव\n\n'My Projects' विंडो खोल रहा हूँ..."
        : "Here are Saniya's key projects:\n1. BUILDTRACK — Construction Project Tracker (Full Stack)\n2. DRIFT — Personal Operations System (AI / Product)\n3. SMART TIMETABLE — AI Scheduling Platform\n4. URBANMOVE — Cloud Ride-Sharing (AWS)\n5. MESCORA INTERIORS — Interior Design Digital Experience\n\nOpening 'My Projects' window...",
      actionWindow: 'projects',
    },
    about: {
      reply: lang === 'hi'
        ? "सानिया कापुरे ITM Skills University में B.Tech CS की छात्रा हैं, जो Full-Stack, AI और Cloud में विशेषज्ञ हैं।\n\n'About Me' विंडो खोल रहा हूँ..."
        : "Saniya Kapure is a Computer Science student at ITM Skills University specializing in Full-Stack development, AI interfaces, and Cloud systems.\n\nOpening 'About Me' window...",
      actionWindow: 'about',
    },
    resume: {
      reply: lang === 'hi'
        ? "सानिया का बायोडाटा लोड किया जा रहा है...\n\n'My Resume' विंडो खोल रहा हूँ..."
        : "Loading Saniya's resume document...\n\nOpening 'My Resume' window...",
      actionWindow: 'resume',
    },
    contact: {
      reply: lang === 'hi'
        ? "आप सानिया से सीधे संपर्क कर सकते हैं!\n\n'Contact Me' विंडो खोल रहा हूँ..."
        : "You can reach out directly to Saniya!\n\nOpening 'Contact Me' window...",
      actionWindow: 'contact',
    },
    skills: {
      reply: lang === 'hi'
        ? "कौशल:\n• फ्रंटएंड: React, Next.js, TypeScript, Tailwind\n• बैकएंड: Node.js, FastAPI, Python, MongoDB, PostgreSQL\n• क्लाउड: AWS (EC2, S3, RDS, Lambda), Docker\n• AI: Embeddings, pgvector, Multi-Agent Workflows"
        : "Key Skills:\n• Frontend: React, Next.js, TypeScript, Tailwind CSS\n• Backend: Node.js, FastAPI, Python, MongoDB, PostgreSQL\n• Cloud: AWS (EC2, S3, RDS, Lambda), Docker\n• AI: Embeddings, pgvector, Multi-Agent Workflows",
    },
    github: {
      reply: "Check out Saniya's open source projects on GitHub: https://github.com/San120806 🚀",
    },
    hello: {
      reply: "Hey there! 👋 Nice to meet you. Ask me anything about Saniya's projects, skills, or background!",
    },
    hi: {
      reply: "Hi! 😊 How can I help you explore Saniya's portfolio today? Try clicking the chips below!",
    },
  };

  const handleSend = (textToSend?: string) => {
    const raw = textToSend || input;
    const trimmed = raw.trim();
    if (!trimmed) return;

    soundManager.playClick();
    const userMsg: Message = { from: 'user', text: trimmed };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setIsTyping(true);

    const lower = trimmed.toLowerCase();
    const matched = Object.keys(botResponses).find(k => lower.includes(k));

    setTimeout(() => {
      setIsTyping(false);
      soundManager.playMessageChime();

      if (matched) {
        const item = botResponses[matched];
        setMessages(prev => [...prev, { from: 'bot', text: item.reply }]);
        if (item.actionWindow && onOpenWindow) {
          setTimeout(() => onOpenWindow(item.actionWindow!), 500);
        }
      } else {
        const fallback = lang === 'hi'
          ? "मुझे समझ नहीं आया! 'projects', 'about', 'skills', 'resume', या 'contact' टाइप करने का प्रयास करें। 🤔"
          : "I'm not sure about that! Try asking for 'projects', 'about', 'skills', 'resume', or 'contact' 🤔";
        setMessages(prev => [...prev, { from: 'bot', text: fallback }]);
      }
    }, 700);
  };

  const handleNudge = () => {
    soundManager.playNudge();
    if (onNudgeTrigger) onNudgeTrigger();
    setMessages(prev => [
      ...prev,
      { from: 'user', text: `⚡ ${t.messenger.nudgedText}`, isNudge: true },
    ]);
  };

  const now = new Date();
  const dateStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#ffffff' }}>
      {/* Title Bar Tab */}
      <div style={{
        background: '#e0d8c8',
        borderBottom: '1px solid #c0bdb5',
        padding: '3px 8px 0',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          background: 'white',
          border: '1px solid #c0bdb5',
          borderBottom: 'none',
          padding: '3px 12px',
          borderRadius: '4px 4px 0 0',
          fontSize: 11,
          fontWeight: 'bold',
          color: '#003399',
        }}>
          <span>🤖</span>
          <span>SaniyaBot (Online)</span>
        </div>
      </div>

      {/* Profile & Status Card */}
      <div style={{
        background: '#f0ede4',
        borderBottom: '1px solid #c0bdb5',
        padding: '6px 10px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 11,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 4,
          background: 'linear-gradient(135deg, #4a80d4, #1a50a0)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20, flexShrink: 0,
        }}>
          👩‍💻
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 'bold', color: '#222' }}>Saniya Kapure &lt;SaniyaBot&gt;</div>
          <div style={{ color: '#008800', fontSize: 10, display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 8 }}>●</span> {t.messenger.status}
          </div>
        </div>

        {/* Nudge Button */}
        <button
          className="xp-button"
          onClick={handleNudge}
          style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 'bold', color: '#c00' }}
          title="Send a Nudge screen shake"
        >
          ⚡ {t.messenger.nudgeBtn}
        </button>
      </div>

      {/* Messages Feed */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: 12,
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: msg.from === 'bot' ? 'row' : 'row-reverse',
              gap: 8,
              alignItems: 'flex-start',
            }}
          >
            {msg.from === 'bot' && (
              <div style={{
                width: 28, height: 28, borderRadius: 4,
                background: 'linear-gradient(135deg, #4a80d4, #1a50a0)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, flexShrink: 0,
              }}>
                🤖
              </div>
            )}

            <div style={{ maxWidth: '80%' }}>
              <div style={{
                fontSize: 10,
                color: '#666',
                marginBottom: 2,
                fontWeight: 'bold',
                textAlign: msg.from === 'bot' ? 'left' : 'right',
              }}>
                {msg.from === 'bot' ? 'SaniyaBot says:' : 'You said:'}
              </div>

              <div
                className={msg.from === 'bot' ? 'messenger-bubble-incoming' : 'messenger-bubble-outgoing'}
                style={{
                  whiteSpace: 'pre-line',
                  lineHeight: 1.4,
                  fontSize: 11,
                  background: msg.isNudge ? '#fff3cd' : undefined,
                  borderColor: msg.isNudge ? '#ffeeba' : undefined,
                }}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#666', fontStyle: 'italic' }}>
            <span>🤖 SaniyaBot is typing...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestion Chips */}
      <div style={{
        background: '#f8f5ee',
        borderTop: '1px solid #e0ddd5',
        padding: '4px 8px',
        display: 'flex',
        gap: 4,
        overflowX: 'auto',
      }}>
        {['projects', 'about', 'skills', 'resume', 'contact'].map(chip => (
          <button
            key={chip}
            className="xp-button"
            onClick={() => handleSend(chip)}
            style={{ fontSize: 10, padding: '1px 6px', textTransform: 'capitalize' }}
          >
            💡 {chip}
          </button>
        ))}
      </div>

      {/* Input controls */}
      <div style={{ background: '#f0ede4', borderTop: '1px solid #c0bdb5', padding: '6px 8px' }}>
        <div style={{ display: 'flex', gap: 4 }}>
          <input
            className="xp-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder={t.messenger.typePlaceholder}
            style={{ flex: 1 }}
          />
          <button
            className="xp-button"
            onClick={() => handleSend()}
            style={{ padding: '2px 14px', fontWeight: 'bold' }}
          >
            {t.messenger.sendBtn}
          </button>
        </div>
      </div>

      {/* Messenger Status Bar */}
      <div style={{
        background: '#d4d0c8',
        borderTop: '1px solid #aba99a',
        padding: '2px 8px',
        fontSize: 10,
        color: '#555',
      }}>
        Connected • Last activity today at {dateStr}
      </div>
    </div>
  );
}
