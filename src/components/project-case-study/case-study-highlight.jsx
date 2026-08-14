export function CaseStudyHighlight({ highlight }) {
  if (!highlight) return null;

  return (
    <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
        Portfolio Highlight
      </p>
      <p className="mt-2 text-lg font-medium leading-relaxed tracking-tight">
        {highlight}
      </p>
    </div>
  );
}
