import { cn } from "@/lib/utils";

export function CaseStudySection({
  title,
  description,
  children,
  className,
  id,
}) {
  return (
    <section id={id} className={cn("space-y-4", className)}>
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
