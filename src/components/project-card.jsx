import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitBranch } from "lucide-react";

import { ProjectKindBadge } from "@/components/project-kind-badge";
import { buttonVariants } from "@/components/ui/button";
import {
  getScreenshotDimensions,
  isNativeScreenshot,
  PROJECT_SCREENSHOT_QUALITY,
} from "@/lib/project-images";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, imageOnRight }) {
  const hasImage = Boolean(project.image);

  return (
    <article
      className={cn(
        "grid gap-8 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-lg backdrop-blur-sm transition-shadow hover:ring-1 hover:ring-primary/20 lg:grid-cols-2 lg:items-center lg:gap-10",
        imageOnRight && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
      )}
    >
      <div className="relative w-full overflow-hidden rounded-xl border border-border/60 bg-muted">
        {hasImage ? (
          isNativeScreenshot(project.image) ? (
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.name}
              width={getScreenshotDimensions(project.image).width}
              height={getScreenshotDimensions(project.image).height}
              className="w-full h-auto"
              quality={PROJECT_SCREENSHOT_QUALITY}
              sizes="(max-width: 1024px) 100vw, 576px"
            />
          ) : (
            <div className="relative aspect-video w-full">
              <Image
                src={project.image}
                alt={project.imageAlt ?? project.name}
                fill
                className="object-cover"
                quality={PROJECT_SCREENSHOT_QUALITY}
                sizes="(max-width: 1024px) 100vw, 576px"
              />
            </div>
          )
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/40"
            aria-hidden
          >
            <span className="text-4xl font-bold text-muted-foreground/50">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {project.name}
          </h3>
          <ProjectKindBadge kind={project.kind} />
        </div>
        {project.period ? (
          <p className="text-sm font-medium text-primary">{project.period}</p>
        ) : null}
        <p className="leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <Link
            href={`/projects/${project.id}`}
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Details
          </Link>
          {project.live ? (
            <a
              href={project.live.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              <ExternalLink className="size-4" data-icon="inline-start" />
              {project.live.label}
            </a>
          ) : null}
          {project.github?.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <GitBranch className="size-4" data-icon="inline-start" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
