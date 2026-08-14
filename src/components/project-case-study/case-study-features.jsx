export function CaseStudyFeatures({ features }) {
  if (!features?.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-xl border border-border/60 bg-card/80 p-5 backdrop-blur-sm"
        >
          <h3 className="font-semibold tracking-tight">{feature.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
