import Gallery from "@/components/Gallery";
import Logo from "@/components/Logo";

const pawMarks = [
  { top: 6, left: 600, width: 18, opacity: 0.15, rotate: -12 },
  { top: 64, left: 566, width: 16, opacity: 0.15, rotate: 10 },
  { top: 126, left: 520, width: 16, opacity: 0.13, rotate: -9 },
  { top: 188, left: 478, width: 14, opacity: 0.12, rotate: 8 },
  { top: 250, left: 434, width: 13, opacity: 0.11, rotate: -7 },
  { top: 310, left: 392, width: 12, opacity: 0.1, rotate: 6 },
];

function PawMark({
  top,
  left,
  width,
  opacity,
  rotate,
}: (typeof pawMarks)[number]) {
  return (
    <svg
      className="pointer-events-none absolute max-[760px]:hidden"
      style={{ top, left, width, opacity, transform: `rotate(${rotate}deg)` }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F3F3F0"
      strokeWidth={1.3}
    >
      <circle cx="7" cy="8" r="1.8" />
      <circle cx="12" cy="6" r="1.8" />
      <circle cx="17" cy="8" r="1.8" />
      <path d="M8 14.2c0-2.3 1.9-4.2 4-4.2s4 1.9 4 4.2c0 2.3-1.9 3.6-4 3.6s-4-1.3-4-3.6z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-[1000px] px-8 pb-16 pt-14">
      <header className="mb-[72px]">
        <Logo />
      </header>

      <div className="relative">
        {pawMarks.map((mark, i) => (
          <PawMark key={i} {...mark} />
        ))}

        <section className="mb-10 max-w-[620px]">
          <h1 className="mb-[22px] font-sans text-5xl font-extrabold leading-[1.1] tracking-[-0.01em] max-[760px]:text-4xl">
            A dozen,
            <br />
            chosen on purpose.
          </h1>
          <p className="max-w-[44ch] font-mono text-[13px] leading-[1.8] text-text-dim">
            No archive, no upload button — just the ones worth keeping,
            sorted by mood.
          </p>
        </section>
      </div>

      <Gallery />

      <hr className="mb-6 border-0 border-t border-line-soft" />
      <footer className="flex flex-wrap items-baseline justify-between gap-2 font-mono text-xs tracking-[0.02em] text-text-faint">
        <span>Taichung &middot; 2023&ndash;2026</span>
        <span className="text-accent">handpicked</span>
      </footer>
    </div>
  );
}
