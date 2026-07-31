"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ProjectCard } from "@/components/project-card";
import { SectionReveal } from "@/components/section-reveal";
import { siteConfig } from "@/config/site";
import { motionEase } from "@/lib/motion";

const HEADER_OFFSET_PX = 80;
const STACK_STEP_PX = 20;

export function ProjectsSection() {
  const { projects } = siteConfig;
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="border-t border-border/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal className="mb-12 space-y-2">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {projects.title}
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            {projects.description}
          </p>
        </SectionReveal>

        <div className="relative">
          {projects.items.map((project, index) => (
            <div
              key={project.id}
              className="pb-8 last:pb-0"
              style={{
                position: "sticky",
                top: HEADER_OFFSET_PX + index * STACK_STEP_PX,
                zIndex: index + 1,
              }}
            >
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 22, scale: 0.99 }
                }
                whileInView={
                  reduceMotion
                    ? undefined
                    : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.85, ease: motionEase }}
              >
                <ProjectCard
                  project={project}
                  imageOnRight={index % 2 === 1}
                />
              </motion.div>
            </div>
          ))}
          <div className="h-[45vh]" aria-hidden />
        </div>
      </div>
    </section>
  );
}
