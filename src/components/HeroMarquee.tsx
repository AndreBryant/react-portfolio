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
    <div className="z-40 w-2/3 overflow-hidden rounded-lg bg-slate-500/10 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] py-4 whitespace-nowrap backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <div className="animate-marquee flex w-fit">
        {[...Array(2)].map((_, copyIdx) => (
          <div key={copyIdx} className="flex shrink-0">
            {SKILLS.map((s, i) => {
              const colorClass = colors[i % colors.length];
              return (
                <span
                  key={`${copyIdx}-${i}`}
                  className={`${colorClass} rounded-lg px-2 hover:bg-slate-600/40 hover:!text-slate-50`}
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
