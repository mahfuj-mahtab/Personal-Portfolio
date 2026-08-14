import {
  SectionReveal,
  StaggerReveal,
  StaggerRevealItem,
} from "@/components/section-reveal";
import { siteConfig } from "@/config/site";

export function AchievementsSection() {
  const { achievements } = siteConfig;

  return (
    <section
      id="achievements"
      className="border-t border-border/40 bg-primary/[0.03] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
        <SectionReveal className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {achievements.title}
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            {achievements.description}
          </p>
        </SectionReveal>
        <StaggerReveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.items.map((item) => (
            <StaggerRevealItem key={item}>
              <div
                className="flex gap-3 rounded-xl border border-border/60 bg-card/40 p-4 shadow-sm"
              >
                <span
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item}
                </p>
              </div>
            </StaggerRevealItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
