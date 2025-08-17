import { SKILLS } from "../content";

export default function HeroMarquee() {
  const colors: string[] = [
    "text-red-300",
    "text-orange-300",
    "text-cyan-300",
    "text-slate-300",
    "text-green-300",
    "text-emerald-300",
  ];

  return (
    <div className="z-50 w-2/3 -rotate-4 overflow-hidden rounded-lg bg-slate-500/10 backdrop-blur-lg">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(2)].map((_, copyIdx) => (
          <div key={copyIdx} className="flex shrink-0">
            {SKILLS.map((s, i) => {
              const colorClass =
                colors[Math.floor(Math.random() * colors.length)];
              return (
                <span
                  key={`${copyIdx}-${i}`}
                  className={`${colorClass} mr-4 hover:!text-rose-300`}
                >
                  •{s}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
