import {
  SectionReveal,
  StaggerReveal,
  StaggerRevealItem,
} from "@/components/section-reveal";
import { siteConfig } from "@/config/site";

function formatDateRange(start, end) {
  if (!end || end === "Present") {
    return `${start} – Present`;
  }
  return `${start} – ${end}`;
}

function ExperienceCard({ item }) {
  const companyInitial = item.company.charAt(0).toUpperCase();
  const metaLine = [item.company, item.employmentType]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="rounded-xl border border-border/60 bg-card/40 p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
        <div
          className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/60 text-lg font-semibold text-primary"
          aria-hidden
        >
          {companyInitial}
        </div>
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/90">{metaLine}</p>
              {item.location ? (
                <p className="text-sm text-muted-foreground">{item.location}</p>
              ) : null}
            </div>
            <p className="shrink-0 text-sm text-muted-foreground sm:text-right">
              {formatDateRange(item.start, item.end)}
            </p>
          </div>

          {item.summary ? (
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {item.summary}
            </p>
          ) : null}

          {item.highlights?.length ? (
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}

          {item.skills?.length ? (
            <ul className="flex flex-wrap gap-2 pt-1">
              {item.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-border/60 bg-muted/50 px-2.5 py-0.5 text-xs font-medium sm:text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ExperienceSection() {
  const { experience } = siteConfig;

  return (
    <section id="experience" className="border-t border-border/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        <SectionReveal className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {experience.title}
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            {experience.description}
          </p>
        </SectionReveal>

        <SectionReveal className="space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
            {experience.work.title}
          </h3>
          <StaggerReveal
            as="ol"
            className="relative list-none space-y-0 border-l border-border/60 pl-6 sm:pl-8"
          >
            {experience.work.items.map((item, index) => (
              <StaggerRevealItem
                as="li"
                key={item.id}
                className={
                  index < experience.work.items.length - 1
                    ? "relative pb-10"
                    : "relative pb-0"
                }
              >
                <span
                  className="absolute -left-px mt-2 size-2.5 -translate-x-1/2 rounded-full border-2 border-background bg-primary"
                  aria-hidden
                />
                <ExperienceCard item={item} />
              </StaggerRevealItem>
            ))}
          </StaggerReveal>
        </SectionReveal>

        <SectionReveal className="space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
            {experience.products.title}
          </h3>
          <StaggerReveal className="grid gap-4 sm:grid-cols-2">
            {experience.products.items.map((item) => (
              <StaggerRevealItem key={item.id}>
                <ExperienceCard item={item} />
              </StaggerRevealItem>
            ))}
          </StaggerReveal>
        </SectionReveal>
      </div>
    </section>
  );
}
