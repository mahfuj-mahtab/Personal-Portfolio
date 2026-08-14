import {
  SectionReveal,
  StaggerReveal,
  StaggerRevealItem,
} from "@/components/section-reveal";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
        <SectionReveal className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            About Me
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            A quick look at my background, what I build, and how I work.
          </p>
        </SectionReveal>
        <StaggerReveal className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {siteConfig.about.map((item) => (
              <StaggerRevealItem key={item.question}>
                <div className="h-full rounded-xl border border-border/60 bg-card/40 p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-primary">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </StaggerRevealItem>
            ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
