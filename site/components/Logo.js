'use client';

/**
 * Animated logo: "desenvolvendo" in white + ".ia" in gradient, with a
 * comet sweeping over the ".ia" leaving a glowing trail and twinkling
 * star particles. Pure SVG/CSS — crisp at any size (sized in em).
 */
const SPARKLES = [
  { cx: 92, cy: 5, r: 1.4, d: '0s' },
  { cx: 84, cy: 3, r: 1.0, d: '0.5s' },
  { cx: 76, cy: 4, r: 1.6, d: '1.1s' },
  { cx: 69, cy: 8, r: 0.9, d: '0.3s' },
  { cx: 63, cy: 15, r: 1.2, d: '1.6s' },
  { cx: 60, cy: 22, r: 0.8, d: '0.8s' },
  { cx: 88, cy: 10, r: 0.7, d: '1.9s' },
  { cx: 70, cy: 13, r: 0.7, d: '2.3s' },
];

export default function Logo({ className = '' }) {
  return (
    <span
      className={`relative inline-flex items-baseline whitespace-nowrap font-display font-bold tracking-tight ${className}`}
    >
      <span className="text-white">desenvolvendo</span>
      <span className="relative">
        <span className="text-gradient">.ia</span>

        {/* comet + sparkles over the .ia */}
        <svg
          viewBox="0 0 100 60"
          aria-hidden="true"
          className="pointer-events-none absolute overflow-visible"
          style={{ width: '2.9em', height: '1.75em', right: '-0.55em', top: '-1.05em' }}
        >
          <defs>
            <linearGradient id="cometGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5B9BFF" stopOpacity="0" />
              <stop offset="55%" stopColor="#5B9BFF" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#22d3aa" />
            </linearGradient>
          </defs>

          {/* trail */}
          <path
            id="cometPath"
            d="M96 5 C 76 -1, 60 9, 58 33"
            fill="none"
            stroke="url(#cometGrad)"
            strokeWidth="2.4"
            strokeLinecap="round"
            className="comet-trail"
          />

          {/* comet head */}
          <circle r="3" fill="#9BF0DF" className="comet-head">
            <animateMotion dur="4.5s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.45;1" calcMode="linear">
              <mpath href="#cometPath" />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;1;1;0;0"
              keyTimes="0;0.08;0.42;0.52;1"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* landing glow on the dot of the "i" */}
          <circle cx="58" cy="33" r="4.5" fill="#22d3aa" className="comet-glow" />

          {/* twinkling star dust */}
          {SPARKLES.map((s, i) => (
            <circle
              key={i}
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill="#BFE8FF"
              className="twinkle"
              style={{ animationDelay: s.d }}
            />
          ))}
        </svg>
      </span>
    </span>
  );
}
