import Image from "next/image";
import { ExternalLink, GitBranch } from "lucide-react";

import { ProjectKindBadge } from "@/components/project-kind-badge";
import { buttonVariants } from "@/components/ui/button";
import {
  getScreenshotDimensions,
  isNativeScreenshot,
  PROJECT_SCREENSHOT_QUALITY,
  PROJECT_SCREENSHOT_SIZES,
} from "@/lib/project-images";
import { cn } from "@/lib/utils";

export function CaseStudyHero({ project, detail }) {
  const githubLinks = project.github ?? [];
  const liveLink = project.live;
  const dimensions = getScreenshotDimensions(detail.heroImage);
  const useNative = isNativeScreenshot(detail.heroImage);

  return (
    <header className="relative overflow-hidden rounded-2xl border border-border/60 shadow-lg">
      {useNative ? (
        <Image
          src={detail.heroImage}
          alt={detail.heroImageAlt}
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-auto"
          quality={PROJECT_SCREENSHOT_QUALITY}
          sizes={PROJECT_SCREENSHOT_SIZES}
          priority
        />
      ) : (
        <div className="relative aspect-video w-full bg-muted">
          <Image
            src={detail.heroImage}
            alt={detail.heroImageAlt}
            fill
            className="object-cover"
            quality={PROJECT_SCREENSHOT_QUALITY}
            sizes={PROJECT_SCREENSHOT_SIZES}
            priority
          />
        </div>
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {project.name}
          </h1>
          <ProjectKindBadge kind={project.kind} />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {liveLink ? (
            <a
              href={liveLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm" }))}
            >
              <ExternalLink className="size-4" data-icon="inline-start" />
              {liveLink.label}
            </a>
          ) : null}
          {githubLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
              )}
            >
              <GitBranch className="size-4" data-icon="inline-start" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
