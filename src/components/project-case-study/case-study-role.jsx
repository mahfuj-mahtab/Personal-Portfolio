export function CaseStudyRole({ role }) {
  if (!role?.length) return null;

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {role.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-xl border border-border/60 bg-card/80 p-4 text-sm leading-relaxed text-muted-foreground backdrop-blur-sm"
        >
          <span
            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
