import { SectionReveal } from "@/components/section-reveal";
import { TechStackMarqueeRow } from "@/components/tech-stack-marquee-row";
import { siteConfig } from "@/config/site";

export function TechStackSection() {
  const { techStack } = siteConfig;

  return (
    <section
      id="tech-stack"
      className="border-t border-border/40 bg-primary/[0.03] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        <SectionReveal className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {techStack.title}
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            {techStack.description}
          </p>
        </SectionReveal>

        {techStack.categories?.length ? (
          <SectionReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.categories.map((category) => (
              <div
                key={category.name}
                className="rounded-xl border border-border/60 bg-card/40 p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {category.name}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border/60 bg-muted/50 px-2.5 py-0.5 text-sm font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </SectionReveal>
        ) : null}

        <SectionReveal>
          <div className="relative -mx-4 space-y-4 sm:-mx-6">
            {techStack.rows.map((row) => (
              <TechStackMarqueeRow
                key={row.direction}
                items={row.items}
                direction={row.direction}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
