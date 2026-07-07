'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

/**
 * "AI in action" — animated WhatsApp thread where the AI agent triages,
 * schedules and hands the lead to the CRM. Progress steps light up as
 * the conversation advances. Replays when scrolled into view.
 */
export default function ProductsDemo({ t }) {
  const d = t.products.demo;
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          play();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // replay when language changes
  useEffect(() => {
    if (startedRef.current) play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [d.messages]);

  function play() {
    let i = 0;
    setVisibleCount(0);
    const tick = () => {
      if (i >= d.messages.length) {
        setTyping(false);
        return;
      }
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        i += 1;
        setVisibleCount(i);
        setTimeout(tick, 1000);
      }, 850);
    };
    tick();
  }

  return (
    <div ref={ref} className="glass flex h-full flex-col rounded-2xl p-4">
      {/* header */}
      <div className="mb-3 flex items-center gap-2 border-b border-white/5 pb-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ai/15 text-ai">
          <Icon name="bot" className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">{d.title}</p>
          <p className="flex items-center gap-1.5 text-[11px] text-ai">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ai" /> online
          </p>
        </div>
      </div>

      {/* thread */}
      <div className="flex min-h-[240px] flex-1 flex-col justify-end gap-2.5">
        {d.messages.slice(0, visibleCount).map((m, i) => (
          <div
            key={i}
            className={`chat-bubble max-w-[88%] rounded-2xl px-4 py-2.5 text-sm ${
              m.from === 'client'
                ? 'self-start rounded-bl-md bg-ink-700 text-slate-200'
                : 'self-end rounded-br-md bg-accent/90 text-white'
            }`}
          >
            {m.from === 'ai' && (
              <span className="mb-1 flex w-fit items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                <Icon name="sparkles" className="h-2.5 w-2.5" /> {d.aiBadge}
              </span>
            )}
            {m.text}
          </div>
        ))}
        {typing && (
          <div className="flex w-fit gap-1 self-end rounded-2xl bg-accent/40 px-4 py-3">
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white" />
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white" />
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white" />
          </div>
        )}
      </div>

      {/* progress steps */}
      <div className="mt-4 space-y-2 border-t border-white/5 pt-4">
        {d.steps.map((s, i) => {
          const active = visibleCount > i;
          return (
            <div
              key={s}
              className={`flex items-center gap-2.5 text-xs transition-all duration-500 ${
                active ? 'text-ai' : 'text-slate-600'
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-500 ${
                  active ? 'border-ai/50 bg-ai/15' : 'border-slate-700'
                }`}
              >
                {active && <Icon name="check" className="h-3 w-3" strokeWidth={3} />}
              </span>
              {s}
            </div>
          );
        })}
      </div>
    </div>
  );
}
