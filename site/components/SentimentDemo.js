'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import Icon from './Icon';
import { trackEvent } from '@/lib/i18n';

const SENTIMENT_STYLE = {
  positive: 'bg-ai/15 text-ai border-ai/30',
  neutral: 'bg-slate-500/15 text-slate-300 border-slate-500/30',
  negative: 'bg-red-400/15 text-red-300 border-red-400/30',
};

/**
 * Animated WhatsApp-style conversation with live sentiment tags and a
 * Sentimento.IA side panel that reacts as the chat progresses.
 * Replays when scrolled into view.
 */
export default function SentimentDemo({ t }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const sectionRef = useRef(null);
  const startedRef = useRef(false);

  const msgs = t.sentiment.chatMessages;

  useEffect(() => {
    const el = sectionRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          trackEvent('view_sentimento_section');
          play();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // reset animation when language changes
  useEffect(() => {
    if (startedRef.current) {
      setVisibleCount(0);
      play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msgs]);

  function play() {
    let i = 0;
    setVisibleCount(0);
    const tick = () => {
      if (i >= msgs.length) {
        setTyping(false);
        return;
      }
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        i += 1;
        setVisibleCount(i);
        setTimeout(tick, 900);
      }, 800);
    };
    tick();
  }

  // panel state derives from how far the conversation has progressed
  const showRisk = visibleCount >= 3;
  const showRecovered = visibleCount >= 5;

  return (
    <section id="sentimento" ref={sectionRef} className="section-contrast relative z-10 border-y border-white/5 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy */}
          <Reveal>
            <span className="section-label">{t.sentiment.label}</span>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {t.sentiment.title}
            </h2>
            <p className="mt-4 text-lg text-slate-400">{t.sentiment.text}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {t.sentiment.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-ai" strokeWidth={2.5} /> {f}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Demo */}
          <Reveal delay={2}>
            <div className="grid gap-4 sm:grid-cols-[1.4fr,1fr]">
              {/* chat */}
              <div className="glass flex min-h-[420px] flex-col rounded-2xl p-4">
                <div className="mb-3 flex items-center gap-2 border-b border-white/5 pb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ai/15 text-ai">
                    <Icon name="user" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.sentiment.chatTitle}</p>
                    <p className="flex items-center gap-1.5 text-[11px] text-ai">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ai" /> online
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-end gap-2.5">
                  {msgs.slice(0, visibleCount).map((m, i) => (
                    <div
                      key={i}
                      className={`chat-bubble max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                        m.from === 'client'
                          ? 'self-start rounded-bl-md bg-ink-700 text-slate-200'
                          : 'self-end rounded-br-md bg-accent/90 text-white'
                      }`}
                    >
                      {m.text}
                      {m.sentiment && (
                        <span
                          className={`mt-1.5 block w-fit rounded-full border px-2 py-0.5 text-[10px] font-semibold ${SENTIMENT_STYLE[m.sentiment]}`}
                        >
                          {t.sentiment.sentimentLabels[m.sentiment]}
                        </span>
                      )}
                    </div>
                  ))}
                  {typing && (
                    <div className="flex w-fit gap-1 self-start rounded-2xl bg-ink-700 px-4 py-3">
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                    </div>
                  )}
                </div>
              </div>

              {/* side panel */}
              <div className="glass flex flex-col gap-3 rounded-2xl border-ai/20 p-4">
                <p className="flex items-center gap-2 text-sm font-bold text-ai">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-ai" />
                  {t.sentiment.alertTitle}
                </p>

                {/* sentiment meter */}
                <div className="rounded-xl bg-ink-900/80 p-3">
                  <div className="h-2 overflow-hidden rounded-full bg-ink-700">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: showRecovered ? '87%' : showRisk ? '26%' : '55%',
                        background: showRecovered
                          ? 'linear-gradient(90deg,#22d3aa,#67e8ce)'
                          : showRisk
                            ? 'linear-gradient(90deg,#f87171,#fb923c)'
                            : 'linear-gradient(90deg,#64748b,#94a3b8)',
                      }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] text-slate-500">
                    <span>{t.sentiment.sentimentLabels.negative}</span>
                    <span>{t.sentiment.sentimentLabels.positive}</span>
                  </div>
                </div>

                {showRisk && !showRecovered && (
                  <div className="chat-bubble rounded-xl border border-red-400/25 bg-red-400/10 p-3 text-xs font-medium text-red-300">
                    <span className="flex items-center gap-1.5">
                      <Icon name="alert-triangle" className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                      {t.sentiment.alertRisk}
                    </span>
                    <p className="mt-1.5 font-normal text-slate-300">{t.sentiment.alertSuggestion}</p>
                  </div>
                )}
                {showRecovered && (
                  <div className="chat-bubble flex items-center gap-1.5 rounded-xl border border-ai/25 bg-ai/10 p-3 text-xs font-medium text-ai">
                    <Icon name="check-circle" className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                    {t.sentiment.alertRecovered}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
