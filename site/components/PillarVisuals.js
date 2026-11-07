'use client';

import { useEffect, useRef, useState } from 'react';
import { Bot, Check, CheckCircle2, Database, FileText, Mail, MessageCircle, Bell, Loader2 } from 'lucide-react';

/* ----------------------------------------------------------------
   Shared helpers
----------------------------------------------------------------- */

/* Fixed-size design canvas scaled to the container width, so the
   scene looks identical on mobile and desktop. */
function Stage({ w, h, children }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / w));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [w]);
  return (
    <div ref={ref} className="viz-bg relative w-full overflow-hidden" style={{ aspectRatio: `${w} / ${h}` }}>
      <div className="viz-grid absolute inset-0" />
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: w, height: h, transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  );
}

/* Ticks only while the scene is on screen (and motion is allowed). */
function useTick(ref, ms) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let id = null;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !id) id = setInterval(() => setTick((t) => t + 1), ms);
      if (!e.isIntersecting && id) {
        clearInterval(id);
        id = null;
      }
    });
    io.observe(ref.current);
    return () => {
      io.disconnect();
      if (id) clearInterval(id);
    };
  }, [ref, ms]);
  return tick;
}

const CHANNEL = {
  whatsapp: { Icon: MessageCircle, cls: 'bg-emerald-400/15 text-emerald-300' },
  mail: { Icon: Mail, cls: 'bg-sky-400/15 text-sky-300' },
  form: { Icon: FileText, cls: 'bg-violet-400/15 text-violet-300' },
  system: { Icon: Database, cls: 'bg-amber-400/15 text-amber-300' },
};

/* ----------------------------------------------------------------
   01. Digital employees: tasks in, AI core, tasks done
----------------------------------------------------------------- */
export function AgentsViz({ v, chip }) {
  const ref = useRef(null);
  const tick = useTick(ref, 1100);
  const n = v.inputs.length;
  const idx = Math.floor(tick / 5);
  const phase = tick % 5; // 0..3 working steps, 4 done
  const doneCount = idx + (phase === 4 ? 1 : 0);
  const fmt = new Intl.NumberFormat(v.counter === 'tasks today' ? 'en-US' : 'pt-BR');

  return (
    <div ref={ref}>
      <Stage w={720} h={480}>
        {/* header */}
        <div className="absolute left-7 right-7 top-6 flex items-center justify-between">
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] font-medium text-slate-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-ai" /> {v.core}
          </span>
          <span className="text-right">
            <span className="font-display text-[26px] font-bold text-white">{fmt.format(1248 + doneCount)}</span>
            <span className="ml-2 text-[13px] text-slate-400">{v.counter}</span>
          </span>
        </div>

        {/* incoming queue */}
        <div className="absolute left-7 top-[96px] w-[220px]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{v.inTitle}</p>
          <div className="space-y-3">
            {[0, 1, 2].map((k) => {
              const j = idx + k;
              const item = v.inputs[j % n];
              const ch = CHANNEL[item.ch] || CHANNEL.system;
              const active = k === 0;
              return (
                <div
                  key={`q-${j}`}
                  className={`viz-in relative overflow-hidden rounded-2xl border p-3.5 transition-all duration-500 ${
                    active
                      ? 'border-accent/60 bg-accent/[0.12] shadow-[0_0_30px_-6px_rgba(46,124,246,0.6)]'
                      : 'border-white/[0.07] bg-white/[0.03] opacity-60'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${ch.cls}`}>
                      <ch.Icon className="h-4 w-4" />
                    </span>
                    <p className="text-[13px] leading-snug text-slate-200">{item.text}</p>
                  </div>
                  {active && (
                    <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-accent to-ai transition-all duration-700" style={{ width: `${(phase / 4) * 100}%` }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* connectors */}
        <div className="absolute left-[256px] top-[200px] h-px w-[52px] bg-gradient-to-r from-accent/10 to-accent/60">
          <span className="viz-packet absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_10px_2px_rgba(46,124,246,0.8)]" />
        </div>
        <div className="absolute left-[412px] top-[200px] h-px w-[52px] bg-gradient-to-r from-ai/60 to-ai/10">
          <span className="viz-packet absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-ai shadow-[0_0_10px_2px_rgba(34,211,170,0.8)]" style={{ animationDelay: '.9s' }} />
        </div>

        {/* AI core */}
        <div className="absolute left-[308px] top-[146px] h-[104px] w-[104px]">
          <div className="viz-spin absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, transparent, rgba(46,124,246,.9), rgba(34,211,170,.9), transparent 70%)' }} />
          <div className="absolute inset-[3px] rounded-full bg-ink-900" />
          <div className="absolute inset-[14px] flex items-center justify-center rounded-full bg-gradient-to-br from-accent to-ai shadow-[0_0_50px_0_rgba(46,124,246,0.6)]">
            <Bot className="h-9 w-9 text-white" />
          </div>
          {phase === 4 && <span key={`r-${doneCount}`} className="viz-ring absolute inset-0 rounded-full border-2 border-ai" />}
        </div>

        {/* steps */}
        <div className="absolute left-[268px] top-[278px] w-[184px] space-y-2.5">
          {v.steps.map((s, i) => {
            const done = i < phase;
            const active = i === phase && phase < 4;
            return (
              <div key={s} className={`flex items-center gap-2.5 text-[12px] transition-colors duration-300 ${done ? 'text-slate-300' : active ? 'text-white' : 'text-slate-600'}`}>
                <span
                  className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    done ? 'border-ai bg-ai/20 text-ai' : active ? 'border-accent text-accent' : 'border-slate-700'
                  }`}
                >
                  {done ? <Check className="h-2.5 w-2.5" strokeWidth={3.5} /> : active ? <Loader2 className="h-2.5 w-2.5 animate-spin" /> : null}
                </span>
                {s}
              </div>
            );
          })}
        </div>

        {/* done list */}
        <div className="absolute right-7 top-[96px] w-[220px]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{v.outTitle}</p>
          <div className="space-y-3">
            {[0, 1, 2].map((k) => {
              const j = doneCount - 1 - k;
              if (j < 0) {
                return <div key={`e-${k}`} className="h-[62px] rounded-2xl border border-dashed border-white/[0.06]" />;
              }
              return (
                <div key={`d-${j}`} className={`viz-in flex items-center gap-3 rounded-2xl border p-3.5 ${k === 0 ? 'border-ai/40 bg-ai/[0.08]' : 'border-white/[0.07] bg-white/[0.03] opacity-70'}`}>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-ai/15 text-ai">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <p className="text-[13px] font-medium text-slate-100">{v.outputs[j % n]}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* toast */}
        {phase === 4 && (
          <div key={`t-${doneCount}`} className="viz-toast absolute bottom-6 left-1/2 -translate-x-1/2">
            <span className="flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-950/90 px-4 py-2.5 text-[13px] font-semibold text-white shadow-xl">
              <CheckCircle2 className="h-4 w-4 text-ai" /> {chip}
            </span>
          </div>
        )}
      </Stage>
    </div>
  );
}

/* ----------------------------------------------------------------
   02. Custom systems: live portal fed by the client's tools
----------------------------------------------------------------- */
const STATUS_CLS = [
  'bg-amber-400/15 text-amber-300',
  'bg-accent/20 text-accent-soft',
  'bg-ai/15 text-ai',
];

export function SystemsViz({ v, chip }) {
  const ref = useRef(null);
  const tick = useTick(ref, 1300);
  const [rows, setRows] = useState([0, 1, 2, 1, 0]);
  const [doneToday, setDoneToday] = useState(46);
  const [changed, setChanged] = useState(-1);

  useEffect(() => {
    if (tick === 0) return;
    const r = (tick * 3) % v.rows.length;
    setChanged(r);
    setRows((prev) => {
      const next = [...prev];
      next[r] = (next[r] + 1) % 3;
      if (next[r] === 2) setDoneToday((d) => d + 1);
      return next;
    });
  }, [tick, v.rows.length]);

  const syncing = tick % v.sources.length;
  const kpis = v.kpis.map(([l, val], i) => [l, i === 1 ? String(doneToday) : val]);
  const showToast = tick > 0 && tick % 4 === 0;

  return (
    <div ref={ref}>
      <Stage w={640} h={400}>
        {/* window */}
        <div className="absolute left-6 right-6 top-5 h-[282px] overflow-hidden rounded-2xl border border-white/10 bg-ink-950/80 shadow-2xl">
          <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.06] px-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-[11px] font-medium text-slate-400">{v.title}</span>
          </div>
          <div className="flex h-[250px]">
            <div className="w-[118px] space-y-1 border-r border-white/[0.06] p-2.5">
              {v.menu.map((m, i) => (
                <div key={m} className={`rounded-lg px-2.5 py-2 text-[11px] font-medium ${i === 2 ? 'bg-accent/20 text-white' : 'text-slate-500'}`}>
                  {m}
                </div>
              ))}
            </div>
            <div className="flex-1 p-3">
              <div className="grid grid-cols-3 gap-2">
                {kpis.map(([l, val]) => (
                  <div key={l} className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                    <p className="text-[10px] text-slate-500">{l}</p>
                    <p className="font-display text-[18px] font-bold text-white">{val}</p>
                  </div>
                ))}
              </div>
              <div className="mt-2.5 space-y-1">
                {v.rows.map((name, i) => (
                  <div key={name} className="relative flex h-[28px] items-center gap-3 rounded-lg px-2">
                    {changed === i && <span key={`f-${tick}`} className="viz-flash pointer-events-none absolute inset-0 rounded-lg" />}
                    <span className="h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 text-center text-[9px] font-bold leading-5 text-slate-200">
                      {name[0]}
                    </span>
                    <span className="w-[118px] truncate text-[11px] text-slate-300">{name}</span>
                    <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                      <span className="block h-full rounded-full bg-gradient-to-r from-accent to-ai transition-all duration-700" style={{ width: `${[25, 60, 100][rows[i]]}%` }} />
                    </span>
                    <span key={`${i}-${rows[i]}`} className={`viz-in w-[92px] whitespace-nowrap rounded-full px-1.5 py-0.5 text-center text-[10px] font-semibold ${STATUS_CLS[rows[i]]}`}>
                      {v.status[rows[i]]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* integrations */}
        <svg className="absolute left-0 top-0" width="640" height="400" aria-hidden="true">
          {v.sources.map((s, i) => {
            const x = 96 + i * 149;
            const on = i === syncing;
            return (
              <path
                key={s}
                d={`M ${x} 344 C ${x} 322, 320 324, 320 304`}
                fill="none"
                stroke={on ? 'rgba(34,211,170,0.9)' : 'rgba(148,163,184,0.25)'}
                strokeWidth={on ? 1.6 : 1}
                className="viz-dash"
              />
            );
          })}
        </svg>
        {v.sources.map((s, i) => {
          const on = i === syncing;
          return (
            <span
              key={s}
              className={`absolute top-[344px] flex h-9 w-[112px] -translate-x-1/2 items-center justify-center gap-2 rounded-full border text-[12px] font-semibold transition-all duration-500 ${
                on ? 'border-ai/60 bg-ai/15 text-white shadow-[0_0_24px_-4px_rgba(34,211,170,0.7)]' : 'border-white/10 bg-white/[0.04] text-slate-400'
              }`}
              style={{ left: 96 + i * 149 }}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${on ? 'animate-ping bg-ai' : 'bg-slate-500'}`} /> {s}
            </span>
          );
        })}

        {showToast && (
          <div key={`t-${tick}`} className="viz-toast absolute right-10 top-[26px]">
            <span className="flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-900/95 px-3.5 py-2 text-[12px] font-semibold text-white shadow-xl">
              <CheckCircle2 className="h-4 w-4 text-ai" /> {chip}
            </span>
          </div>
        )}
      </Stage>
    </div>
  );
}

/* ----------------------------------------------------------------
   03. Data intelligence: live dashboard with alert
----------------------------------------------------------------- */
const INITIAL_POINTS = [0.32, 0.4, 0.36, 0.48, 0.44, 0.55, 0.5, 0.6, 0.57, 0.66, 0.62, 0.72, 0.7, 0.8];
const INITIAL_BARS = [0.62, 0.84, 0.48, 0.92, 0.7, 0.56];

function smoothPath(pts, w, h) {
  const step = w / (pts.length - 1);
  const xy = pts.map((v, i) => [i * step, h - 8 - v * (h - 20)]);
  let d = `M ${xy[0][0]} ${xy[0][1]}`;
  for (let i = 1; i < xy.length; i++) {
    const [x0, y0] = xy[i - 1];
    const [x1, y1] = xy[i];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  return { d, last: xy[xy.length - 1] };
}

export function DataViz({ v, chip }) {
  const ref = useRef(null);
  const tick = useTick(ref, 1400);
  const [pts, setPts] = useState(INITIAL_POINTS);
  const [bars, setBars] = useState(INITIAL_BARS);
  const [recovered, setRecovered] = useState(482300);
  const [rate, setRate] = useState(38.4);

  useEffect(() => {
    if (tick === 0) return;
    setPts((p) => {
      const lastV = p[p.length - 1];
      let nv = lastV + (Math.random() - 0.42) * 0.14;
      if (nv > 0.92) nv = 0.62;
      if (nv < 0.25) nv = 0.35;
      return [...p.slice(1), nv];
    });
    setBars((b) => b.map((x) => Math.min(0.96, Math.max(0.3, x + (Math.random() - 0.5) * 0.22))));
    setRecovered((r) => r + Math.round(800 + Math.random() * 2600));
    setRate((r) => Math.min(44, Math.max(34, +(r + (Math.random() - 0.45) * 0.6).toFixed(1))));
  }, [tick]);

  const locale = v.currency === 'R$' ? 'pt-BR' : 'en-US';
  const money = new Intl.NumberFormat(locale, { style: 'currency', currency: v.currency === 'R$' ? 'BRL' : 'USD', maximumFractionDigits: 0 });
  const pct = new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const CW = 360;
  const CH = 168;
  const { d, last } = smoothPath(pts, CW, CH);
  const alertOn = tick > 0 && tick % 6 >= 3;
  const alertKey = Math.floor(tick / 6);

  return (
    <div ref={ref}>
      <Stage w={640} h={400}>
        <div className="absolute inset-5 rounded-2xl border border-white/10 bg-ink-950/80 p-5 shadow-2xl">
          <div className="flex items-center justify-between">
            <p className="font-display text-[15px] font-semibold text-white">{v.title}</p>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-ai">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ai" /> {v.live}
            </span>
          </div>

          <div className="mt-3.5 grid grid-cols-3 gap-2.5">
            {[
              [v.kpis[0], money.format(recovered), '+12%'],
              [v.kpis[1], `${pct.format(rate)}%`, locale === 'pt-BR' ? '+3,1 p.p.' : '+3.1 pts'],
              [v.kpis[2], money.format(Math.round(recovered * 2.4)), '+8%'],
            ].map(([l, val, delta]) => (
              <div key={l} className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
                <p className="text-[10px] text-slate-500">{l}</p>
                <p className="mt-0.5 font-display text-[17px] font-bold tabular-nums text-white">{val}</p>
                <p className="text-[10px] font-semibold text-ai">{delta}</p>
              </div>
            ))}
          </div>

          <div className="mt-3.5 flex gap-3">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3" style={{ width: CW + 24 }}>
              <p className="mb-1 text-[10px] text-slate-500">{v.chart}</p>
              <svg width={CW} height={CH} className="overflow-visible">
                <defs>
                  <linearGradient id="vizArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22D3AA" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#22D3AA" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="vizLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2E7CF6" />
                    <stop offset="100%" stopColor="#22D3AA" />
                  </linearGradient>
                </defs>
                {[0.25, 0.5, 0.75].map((g) => (
                  <line key={g} x1="0" x2={CW} y1={CH * g} y2={CH * g} stroke="rgba(148,163,184,0.08)" />
                ))}
                <path d={`${d} L ${CW} ${CH} L 0 ${CH} Z`} fill="url(#vizArea)" />
                <path d={d} fill="none" stroke="url(#vizLine)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx={last[0]} cy={last[1]} r="9" fill="rgba(34,211,170,0.2)" className="animate-ping" style={{ transformOrigin: `${last[0]}px ${last[1]}px` }} />
                <circle cx={last[0]} cy={last[1]} r="4.5" fill="#22D3AA" stroke="#050B18" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
              <p className="mb-1 text-[10px] text-slate-500">{v.teams}</p>
              <div className="flex h-[168px] items-end justify-between gap-2">
                {bars.map((b, i) => (
                  <div key={i} className="flex h-full flex-1 items-end">
                    <div
                      className={`w-full rounded-t-md transition-all duration-1000 ease-out ${i === 2 && alertOn ? 'bg-gradient-to-t from-amber-500/40 to-amber-400' : 'bg-gradient-to-t from-accent/40 to-accent-soft'}`}
                      style={{ height: `${b * 100}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {alertOn && (
          <div key={`a-${alertKey}`} className="viz-in absolute right-9 top-[60px]">
            <div className="flex items-start gap-2.5 rounded-2xl border border-amber-400/30 bg-ink-900/95 px-3.5 py-2.5 shadow-xl">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/15 text-amber-300">
                <Bell className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[12px] font-semibold text-white">{chip}</p>
                <p className="text-[10px] text-slate-400">{v.alert}</p>
              </div>
            </div>
          </div>
        )}
      </Stage>
    </div>
  );
}
