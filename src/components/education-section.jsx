import {
  SectionReveal,
  StaggerReveal,
  StaggerRevealItem,
} from "@/components/section-reveal";
import { siteConfig } from "@/config/site";

export function EducationSection() {
  const { education } = siteConfig;

  return (
    <section id="education" className="border-t border-border/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
        <SectionReveal className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {education.title}
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            {education.description}
          </p>
        </SectionReveal>
        <StaggerReveal className="grid gap-4 sm:grid-cols-2">
          {education.items.map((item) => (
            <StaggerRevealItem key={item.id}>
              <article className="h-full rounded-xl border border-border/60 bg-card/40 p-5 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-foreground/90">
                  {item.institution}
                </p>
                {item.detail ? (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.detail}
                  </p>
                ) : null}
              </article>
            </StaggerRevealItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
