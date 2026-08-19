'use client';

import { useState, useRef, useEffect } from 'react';

interface HistoryItem {
  command: string;
  output: string | React.ReactNode;
}

export default function CmdWindow({ onOpenWindow }: { onOpenWindow?: (id: string) => void }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: '',
      output: (
        <div>
          <div>Microsoft Windows XP [Version 5.1.2600]</div>
          <div>(C) Copyright 1985-2001 Microsoft Corp.</div>
          <br />
          <div>Type <span style={{ color: '#ffff55' }}>help</span> to view available commands.</div>
          <br />
        </div>
      ),
    },
  ]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) {
      setHistory(prev => [...prev, { command: '', output: '' }]);
      return;
    }

    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIdx(-1);

    const parts = trimmed.toLowerCase().split(' ');
    const mainCmd = parts[0];

    let output: React.ReactNode = '';

    switch (mainCmd) {
      case 'help':
        output = (
          <div style={{ color: '#ccc' }}>
            <div>Available Commands:</div>
            <div>  <span style={{ color: '#00ff66' }}>help</span>       - Displays this list of commands</div>
            <div>  <span style={{ color: '#00ff66' }}>about</span>      - Displays information about Saniya</div>
            <div>  <span style={{ color: '#00ff66' }}>projects</span>   - Opens the My Projects browser window</div>
            <div>  <span style={{ color: '#00ff66' }}>contact</span>    - Opens the Contact Me email window</div>
            <div>  <span style={{ color: '#00ff66' }}>resume</span>     - Opens the My Resume PDF document</div>
            <div>  <span style={{ color: '#00ff66' }}>skills</span>     - Lists core technical skills</div>
            <div>  <span style={{ color: '#00ff66' }}>cls</span> / <span style={{ color: '#00ff66' }}>clear</span> - Clears the terminal screen</div>
            <div>  <span style={{ color: '#00ff66' }}>date</span>       - Displays current system date and time</div>
            <div>  <span style={{ color: '#00ff66' }}>echo [text]</span> - Echoes input text back to terminal</div>
            <div>  <span style={{ color: '#00ff66' }}>matrix</span>     - Toggles matrix green hacker mode</div>
            <div>  <span style={{ color: '#00ff66' }}>dir</span>        - Lists virtual files in current directory</div>
          </div>
        );
        break;

      case 'about':
        output = 'Saniya Kapure is a passionate developer & designer building modern web applications with retro flair.';
        break;

      case 'skills':
        output = 'Languages: TypeScript, JavaScript, Python, SQL | Frameworks: React, Next.js, Node.js, Tailwind CSS | Tools: Figma, Git, Blender';
        break;

      case 'projects':
        if (onOpenWindow) onOpenWindow('projects');
        output = 'Opening My Projects window...';
        break;

      case 'contact':
        if (onOpenWindow) onOpenWindow('contact');
        output = 'Opening Contact Me window...';
        break;

      case 'resume':
        if (onOpenWindow) onOpenWindow('resume');
        output = 'Opening My Resume window...';
        break;

      case 'cls':
      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'date':
        output = new Date().toString();
        break;

      case 'echo':
        output = parts.slice(1).join(' ');
        break;

      case 'dir':
        output = (
          <div>
            <div> Volume in drive C is Windows XP</div>
            <div> Volume Serial Number is 1337-BEEF</div>
            <br />
            <div> Directory of C:\Documents and Settings\Saniya</div>
            <br />
            <div>08/19/2026  12:00 PM    &lt;DIR&gt;          .</div>
            <div>08/19/2026  12:00 PM    &lt;DIR&gt;          ..</div>
            <div>08/19/2026  12:00 PM             1,024  About_Me.lnk</div>
            <div>08/19/2026  12:00 PM             2,048  My_Projects.lnk</div>
            <div>08/19/2026  12:00 PM             1,420  My_Resume.pdf</div>
            <div>08/19/2026  12:00 PM               512  Contact_Info.txt</div>
            <div>               4 File(s)          5,004 bytes</div>
            <div>               2 Dir(s)   42,949,672,960 bytes free</div>
          </div>
        );
        break;

      case 'matrix':
        output = 'Wake up, Neo... The Matrix has you. Follow the white rabbit. 🐰';
        break;

      default:
        output = `'${trimmed}' is not recognized as an internal or external command, operable program or batch file. Type 'help' for assistance.`;
        break;
    }

    setHistory(prev => [...prev, { command: trimmed, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length > 0) {
        const nextIdx = historyIdx === -1 ? commandHistory.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIdx !== -1) {
        const nextIdx = historyIdx + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIdx(nextIdx);
          setInput(commandHistory[nextIdx]);
        } else {
          setHistoryIdx(-1);
          setInput('');
        }
      }
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      style={{
        height: '100%',
        background: '#0c0c0c',
        color: '#cccccc',
        fontFamily: '"Lucida Console", "Courier New", monospace',
        fontSize: 12,
        padding: 8,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {history.map((item, idx) => (
        <div key={idx} style={{ marginBottom: 4 }}>
          {item.command && (
            <div>
              <span style={{ color: '#cccccc' }}>C:\Documents and Settings\Saniya&gt; </span>
              <span style={{ color: '#ffffff' }}>{item.command}</span>
            </div>
          )}
          {item.output && <div style={{ marginTop: 2 }}>{item.output}</div>}
        </div>
      ))}

      {/* Active input line */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: '#cccccc', whiteSpace: 'nowrap' }}>C:\Documents and Settings\Saniya&gt;&nbsp;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#ffffff',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            flex: 1,
            caretColor: '#ffffff',
          }}
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
