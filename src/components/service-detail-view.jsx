import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ServiceDetailView({ service, relatedProjects }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/#services"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "mb-8 -ml-2 text-muted-foreground",
        )}
      >
        <ArrowLeft className="size-4" data-icon="inline-start" />
        Back to services
      </Link>

      <div className="space-y-12">
        <header className="max-w-3xl space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {service.name}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {service.seo.lead}
          </p>
        </header>

        <section className="space-y-3 rounded-2xl border border-border/60 bg-card/80 p-6 sm:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Who it is for
          </h2>
          <p className="leading-relaxed text-muted-foreground">{service.target}</p>
        </section>

        {service.includes?.length ? (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              What is included
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {service.stack?.length ? (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Stack
            </h2>
            <ul className="flex flex-wrap gap-2">
              {service.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-border/60 bg-muted/50 px-2.5 py-0.5 text-sm font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {service.priceRange ? (
          <section className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Pricing
            </h2>
            <p className="text-muted-foreground">{service.priceRange}</p>
          </section>
        ) : null}

        {relatedProjects.length ? (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Related projects
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {relatedProjects.map((project) => (
                <li key={project.id}>
                  <Link
                    href={`/projects/${project.id}`}
                    className="block h-full rounded-xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/40"
                  >
                    <p className="font-semibold">{project.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            FAQ
          </h2>
          <div className="space-y-4">
            {service.seo.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-xl border border-border/60 bg-card/40 p-5"
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        {service.cta ? (
          <section className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              {service.cta.label}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {service.pitch}
            </p>
            <a
              href={service.cta.href}
              className={cn(buttonVariants({ size: "lg" }), "mt-5")}
            >
              <Mail className="size-4" data-icon="inline-start" />
              {service.cta.label}
            </a>
          </section>
        ) : null}
      </div>
    </main>
  );
}
