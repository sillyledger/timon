export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 110 110" width="40" height="40" aria-hidden="true">
        <g transform="rotate(-6 55 60)">
          <path d="M22 46 L28 18 L44 40 Z" fill="#9A9C9E" />
          <path d="M84 42 L80 22 L64 38 Z" fill="#9A9C9E" />
          <path d="M27 40 L30 26 L39 39 Z" fill="#3A3B41" />
          <path d="M79 37 L77 27 L67 37 Z" fill="#3A3B41" />
          <path
            d="M42 31 L46 39 M52 28 L52 37 M62 32 L58 39"
            stroke="#5A5B60"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="53" cy="63" r="34" fill="#F7F3EA" />
          <path
            d="M35 58 Q42 63 49 58"
            stroke="#33343A"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M57 58 Q64 63 71 58"
            stroke="#33343A"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="37" cy="72" rx="8" ry="5.5" fill="#F2B6AC" opacity="0.85" />
          <ellipse cx="69" cy="72" rx="8" ry="5.5" fill="#F2B6AC" opacity="0.85" />
          <path d="M50 69 L56 69 L53 73 Z" fill="#33343A" />
          <path
            d="M49 74 Q53 77 57 74"
            stroke="#33343A"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M15 63 L37 68 M14 71 L37 72 M15 79 L37 76"
            stroke="#B7B8BA"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M91 60 L69 66 M92 68 L69 70 M91 76 L69 74"
            stroke="#B7B8BA"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
        <text x="78" y="24" fontFamily="'Reddit Sans',sans-serif" fontWeight="700" fontSize="11" fill="var(--accent)">
          z
        </text>
        <text x="86" y="15" fontFamily="'Reddit Sans',sans-serif" fontWeight="700" fontSize="15" fill="var(--accent)">
          Z
        </text>
        <text x="96" y="4" fontFamily="'Reddit Sans',sans-serif" fontWeight="700" fontSize="19" fill="var(--accent)">
          Z
        </text>
      </svg>
      <span
        className="text-xl font-bold leading-none tracking-tight text-text"
        style={{ fontFamily: "var(--font-reddit-sans)" }}
      >
        timon
      </span>
    </div>
  );
}
