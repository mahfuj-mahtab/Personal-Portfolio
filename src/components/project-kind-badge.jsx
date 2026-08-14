import { cn } from "@/lib/utils";

const kindStyles = {
  product:
    "border-primary/30 bg-primary/10 text-primary",
  project: "border-border/60 bg-muted/50 text-muted-foreground",
};

export function ProjectKindBadge({ kind = "project", className }) {
  const label = kind === "product" ? "Product" : "Project";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold uppercase tracking-wide",
        kindStyles[kind] ?? kindStyles.project,
        className,
      )}
    >
      {label}
    </span>
  );
}
