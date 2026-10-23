import Link from "next/link";
import { Brain, Mail, Rocket, Server } from "lucide-react";

import {
  SectionReveal,
  StaggerReveal,
  StaggerRevealItem,
} from "@/components/section-reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const serviceIcons = {
  rocket: Rocket,
  brain: Brain,
  server: Server,
};

function ServiceCard({ service }) {
  const Icon = serviceIcons[service.icon];
  const isPrimary = service.badge === "Primary";

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-xl border border-border/60 bg-card/40 p-5 shadow-sm sm:p-6",
        isPrimary && "bg-primary/[0.04] ring-1 ring-primary/30",
      )}
    >
      <div className="flex items-start gap-3">
        {Icon ? (
          <div
            className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/60 text-primary"
            aria-hidden
          >
            <Icon className="size-5" />
          </div>
        ) : null}
        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold leading-tight">
              {service.name}
            </h3>
            {service.badge ? (
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                {service.badge}
              </span>
            ) : null}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {service.pitch}
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-primary">
        For
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{service.target}</p>

      {service.includes?.length ? (
        <>
          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-primary">
            Includes
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}

      {service.stack?.length ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {service.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-lg border border-border/60 bg-muted/50 px-2.5 py-0.5 text-xs font-medium sm:text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      ) : null}

      {service.priceRange ? (
        <p className="mt-4 text-sm font-medium text-foreground/90">
          {service.priceRange}
        </p>
      ) : null}

      <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row sm:flex-wrap">
        <Link
          href={`/services/${service.id}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "w-full sm:w-auto",
          )}
        >
          Learn more
        </Link>
        {service.cta ? (
          <a
            href={service.cta.href}
            className={cn(
              buttonVariants({
                variant: isPrimary ? "default" : "outline",
                size: "sm",
              }),
              "w-full sm:w-auto",
            )}
          >
            <Mail className="size-4" data-icon="inline-start" />
            {service.cta.label}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function ServicesSection() {
  const { services } = siteConfig;

  return (
    <section id="services" className="border-t border-border/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
        <SectionReveal className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {services.title}
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            {services.description}
          </p>
        </SectionReveal>

        <StaggerReveal className="grid gap-6 lg:grid-cols-3">
          {services.items.map((service) => (
            <StaggerRevealItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerRevealItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
