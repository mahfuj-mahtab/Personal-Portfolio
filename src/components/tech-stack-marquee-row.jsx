"use client";

import { TechIcon } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

function TechPill({ name, icon }) {
  return (
    <li
      className="flex shrink-0 items-center gap-2.5 rounded-full border border-primary/15 bg-card/60 px-4 py-2.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm"
      aria-hidden
    >
      <TechIcon slug={icon} name={name} className="text-foreground/90" />
      <span>{name}</span>
    </li>
  );
}

export function TechStackMarqueeRow({ items, direction }) {
  const loopItems = [...items, ...items];
  const isLtr = direction === "ltr";

  return (
    <div
      className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label={isLtr ? "Python and JavaScript technologies" : "DevOps and AI technologies"}
    >
      <ul
        className={cn(
          "flex w-max gap-3 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-4 motion-safe:group-hover:[animation-play-state:paused]",
          isLtr
            ? "motion-safe:animate-marquee-ltr"
            : "motion-safe:animate-marquee-rtl",
        )}
      >
        {loopItems.map((item, index) => (
          <TechPill
            key={`${item.icon}-${item.name}-${index}`}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </ul>
      <ul className="sr-only">
        {items.map((item) => (
          <li key={`${item.icon}-${item.name}`}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
