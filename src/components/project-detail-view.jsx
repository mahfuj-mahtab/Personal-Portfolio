"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Check, ExternalLink, GitBranch, Play } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { SectionReveal } from "@/components/section-reveal";
import { cn } from "@/lib/utils";

export function ProjectDetailView({ project, detail }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = detail.carousel[activeIndex];
  const primaryGithub = project.github?.[0];

  const actionLinks = [
    project.live
      ? {
          key: "live",
          label: project.live.label,
          href: project.live.href,
          icon: ExternalLink,
        }
      : null,
    primaryGithub
      ? {
          key: "github",
          label: primaryGithub.label,
          href: primaryGithub.href,
          icon: GitBranch,
        }
      : null,
    detail.video
      ? {
          key: "video",
          label: detail.video.label,
          href: detail.video.href,
          icon: Play,
        }
      : null,
  ].filter(Boolean);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/#projects"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "mb-8 -ml-2 text-muted-foreground",
        )}
      >
        <ArrowLeft className="size-4" data-icon="inline-start" />
        Back to projects
      </Link>

      <SectionReveal>
      <div className="space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {project.name}
          </h1>
        </header>

        <section className="space-y-4" aria-label="Project screenshots">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Image Carousel
          </h2>
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Screenshot views"
          >
            {detail.carousel.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                role="tab"
                id={`carousel-tab-${index}`}
                aria-selected={activeIndex === index}
                aria-controls={`carousel-panel-${index}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  buttonVariants({
                    variant: activeIndex === index ? "default" : "outline",
                    size: "sm",
                  }),
                )}
              >
                {slide.label}
              </button>
            ))}
          </div>
          <div
            id={`carousel-panel-${activeIndex}`}
            role="tabpanel"
            aria-labelledby={`carousel-tab-${activeIndex}`}
            className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-lg"
          >
            <Image
              key={activeSlide.image + activeIndex}
              src={activeSlide.image}
              alt={activeSlide.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1152px) 100vw, 1152px"
              priority={activeIndex === 0}
            />
          </div>
        </section>

        {actionLinks.length > 0 ? (
          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-6">
            {actionLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary"
                >
                  <Check className="size-4 shrink-0 text-primary" aria-hidden />
                  <link.icon className="size-4 shrink-0 opacity-70" aria-hidden />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Description</h2>
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            {detail.description}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Tech</h2>
          <ul className="flex flex-wrap gap-2">
            {detail.tech.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border/60 bg-muted/50 px-3 py-1 text-sm font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Highlights</h2>
          <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground">
            {detail.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-6 rounded-2xl border border-border/60 bg-card/80 p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight">
            Case Study
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Problem
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {detail.caseStudy.problem}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Solution
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {detail.caseStudy.solution}
              </p>
            </div>
          </div>
        </section>
      </div>
      </SectionReveal>
    </main>
  );
}
