"use client";

import Image from "next/image";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  getScreenshotDimensions,
  isNativeScreenshot,
  PROJECT_SCREENSHOT_QUALITY,
  PROJECT_SCREENSHOT_SIZES,
} from "@/lib/project-images";
import { cn } from "@/lib/utils";

export function CaseStudyScreenshots({ screenshots }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!screenshots?.length) return null;

  const activeSlide = screenshots[activeIndex];
  const dimensions = getScreenshotDimensions(activeSlide.image);
  const useNative = isNativeScreenshot(activeSlide.image);

  return (
    <div className="space-y-4">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Screenshot views"
      >
        {screenshots.map((slide, index) => (
          <button
            key={slide.label}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
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
        className={cn(
          "overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-lg",
          !useNative && "relative aspect-video w-full",
        )}
        role="tabpanel"
      >
        {useNative ? (
          <Image
            key={activeSlide.image + activeIndex}
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            width={dimensions.width}
            height={dimensions.height}
            className="w-full h-auto"
            quality={PROJECT_SCREENSHOT_QUALITY}
            sizes={PROJECT_SCREENSHOT_SIZES}
            priority={activeIndex === 0}
          />
        ) : (
          <Image
            key={activeSlide.image + activeIndex}
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            fill
            className="object-cover"
            quality={PROJECT_SCREENSHOT_QUALITY}
            sizes={PROJECT_SCREENSHOT_SIZES}
            priority={activeIndex === 0}
          />
        )}
      </div>
    </div>
  );
}
