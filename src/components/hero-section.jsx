"use client";

import { motion, useReducedMotion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getYoutubeEmbedUrl } from "@/lib/youtube";
import { motionEase, scrollReveal } from "@/lib/motion";
import { socialIcons } from "@/lib/social-icons";
import { cn } from "@/lib/utils";

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: motionEase,
      delay: index * 0.12,
    },
  }),
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const videoEmbedUrl = getYoutubeEmbedUrl(siteConfig.heroVideo);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-primary/10"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-brand-glow/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 size-56 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.35] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <motion.h1
                className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
                custom={0}
                variants={heroItem}
                initial={reduceMotion ? false : "hidden"}
                animate={reduceMotion ? undefined : "visible"}
              >
                {siteConfig.name}
              </motion.h1>
              <motion.p
                className="text-xl font-medium text-primary sm:text-2xl"
                custom={1}
                variants={heroItem}
                initial={reduceMotion ? false : "hidden"}
                animate={reduceMotion ? undefined : "visible"}
              >
                {siteConfig.role}
              </motion.p>
              <motion.p
                className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
                custom={2}
                variants={heroItem}
                initial={reduceMotion ? false : "hidden"}
                animate={reduceMotion ? undefined : "visible"}
              >
                {siteConfig.tagline}
              </motion.p>
            </div>
            <motion.div
              className="flex flex-wrap items-center gap-3"
              custom={3}
              variants={heroItem}
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? undefined : "visible"}
            >
              <a
                href={siteConfig.cv.href}
                download={siteConfig.cv.download}
                className={cn(buttonVariants({ variant: "default", size: "lg" }))}
              >
                {siteConfig.cv.label}
              </a>
              <div className="flex flex-wrap items-center gap-2">
                {siteConfig.social.map((item) => {
                  const Icon = socialIcons[item.icon];
                  if (!Icon) return null;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      target={
                        item.href.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel={
                        item.href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className={cn(
                        buttonVariants({ variant: "outline", size: "icon" }),
                      )}
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
          <motion.div
            className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-xl ring-1 ring-primary/20"
            initial={reduceMotion ? false : scrollReveal.hidden}
            animate={reduceMotion ? undefined : scrollReveal.visible}
            transition={{ ...scrollReveal.transition, delay: 0.35 }}
          >
            {videoEmbedUrl ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={videoEmbedUrl}
                title="Intro video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div
                className="flex h-full min-h-[12rem] flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted to-muted/40 p-6 text-center"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Intro Video
                </p>
                <p className="text-sm text-muted-foreground">
                  My intro video will be here soon.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
