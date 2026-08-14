export function CaseStudyChallenges({ challenges }) {
  if (!challenges?.length) return null;

  return (
    <div className="space-y-4">
      {challenges.map((challenge, index) => (
        <div
          key={challenge.title}
          className="flex gap-4 rounded-xl border border-border/60 bg-card/80 p-5 backdrop-blur-sm"
        >
          <span
            className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary"
            aria-hidden
          >
            {index + 1}
          </span>
          <div className="space-y-1">
            <h3 className="font-semibold tracking-tight">{challenge.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {challenge.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
