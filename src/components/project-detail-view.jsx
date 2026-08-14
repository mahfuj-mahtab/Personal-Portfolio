"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CaseStudyChallenges } from "@/components/project-case-study/case-study-challenges";
import { CaseStudyCta } from "@/components/project-case-study/case-study-cta";
import { CaseStudyFeatures } from "@/components/project-case-study/case-study-features";
import { CaseStudyHero } from "@/components/project-case-study/case-study-hero";
import { CaseStudyHighlight } from "@/components/project-case-study/case-study-highlight";
import { CaseStudyRole } from "@/components/project-case-study/case-study-role";
import { CaseStudyScreenshots } from "@/components/project-case-study/case-study-screenshots";
import { CaseStudySection } from "@/components/project-case-study/case-study-section";
import { CaseStudyVideo } from "@/components/project-case-study/case-study-video";
import { SectionReveal } from "@/components/section-reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectDetailView({ project, detail }) {
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
        <div className="space-y-16">
          <CaseStudyHero project={project} detail={detail} />

          {detail.highlight ? (
            <CaseStudyHighlight highlight={detail.highlight} />
          ) : null}

          {detail.overview ? (
            <CaseStudySection title="Overview">
              <p className="max-w-3xl leading-relaxed text-muted-foreground">
                {detail.overview}
              </p>
            </CaseStudySection>
          ) : null}

          {detail.problem || detail.solution ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {detail.problem ? (
                <div className="space-y-3 rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm sm:p-8">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Problem
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">
                    {detail.problem}
                  </p>
                </div>
              ) : null}
              {detail.solution ? (
                <div className="space-y-3 rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm sm:p-8">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Solution
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">
                    {detail.solution}
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}

          {detail.features?.length ? (
            <CaseStudySection title="Core Features">
              <CaseStudyFeatures features={detail.features} />
            </CaseStudySection>
          ) : null}

          {detail.screenshots?.length ? (
            <CaseStudySection title="Screenshots">
              <CaseStudyScreenshots screenshots={detail.screenshots} />
            </CaseStudySection>
          ) : null}

          {detail.video?.youtubeId ? (
            <CaseStudySection title="Demo Video">
              <CaseStudyVideo video={detail.video} />
            </CaseStudySection>
          ) : null}

          {detail.challenges?.length ? (
            <CaseStudySection title="Major Challenges">
              <CaseStudyChallenges challenges={detail.challenges} />
            </CaseStudySection>
          ) : null}

          {detail.role?.length ? (
            <CaseStudySection title="My Role">
              <CaseStudyRole role={detail.role} />
            </CaseStudySection>
          ) : null}

          {detail.lessonsLearned?.length ? (
            <CaseStudySection title="What I Learned">
              <ul className="space-y-3">
                {detail.lessonsLearned.map((lesson) => (
                  <li
                    key={lesson}
                    className="flex gap-3 rounded-xl border border-border/60 bg-card/80 p-4 text-sm leading-relaxed text-muted-foreground backdrop-blur-sm"
                  >
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    {lesson}
                  </li>
                ))}
              </ul>
            </CaseStudySection>
          ) : null}

          {detail.tech?.length ? (
            <CaseStudySection title="Tech Stack">
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
            </CaseStudySection>
          ) : null}

          <CaseStudyCta project={project} />
        </div>
      </SectionReveal>
    </main>
  );
}
