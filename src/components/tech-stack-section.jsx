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
