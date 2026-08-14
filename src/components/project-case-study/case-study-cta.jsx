import { ExternalLink, GitBranch } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CaseStudyCta({ project }) {
  const githubLinks = project.github ?? [];
  const liveLink = project.live;

  if (!liveLink && !githubLinks.length) return null;

  return (
    <div
      className="flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-card/80 p-6 text-center backdrop-blur-sm sm:flex-row sm:justify-between sm:text-left sm:p-8"
    >
      <div className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight">
          Explore this project
        </h2>
        <p className="text-sm text-muted-foreground">
          View the live demo or browse the source code on GitHub.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
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
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            <GitBranch className="size-4" data-icon="inline-start" />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
