"use client";

import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export function SpotlightText({
  children,
  className,
  variant = "foreground",
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 42, y: 48 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef(0);

  const highlightColor =
    variant === "primary" ? "var(--primary)" : "var(--foreground)";

  useEffect(() => {
    if (reduceMotion || isHovering) return undefined;

    const start = performance.now();
    const animate = (now) => {
      const t = (now - start) / 4000;
      setPosition({
        x: 38 + Math.sin(t) * 22,
        y: 48 + Math.cos(t * 0.85) * 18,
      });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reduceMotion, isHovering]);

  const handlePointerMove = useCallback(
    (event) => {
      if (reduceMotion) return;
      const element = ref.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      setPosition({
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 100,
      });
    },
    [reduceMotion],
  );

  const handlePointerEnter = useCallback(() => {
    if (!reduceMotion) setIsHovering(true);
  }, [reduceMotion]);

  const handlePointerLeave = useCallback(() => {
    if (reduceMotion) return;
    setIsHovering(false);
    setPosition({ x: 42, y: 48 });
  }, [reduceMotion]);

  if (reduceMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span
      ref={ref}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn("relative inline-block", className)}
    >
      <span
        className={cn(
          "block",
          variant === "primary"
            ? "text-primary/25"
            : "text-foreground/25",
        )}
      >
        {children}
      </span>
      <span
        className="pointer-events-none absolute inset-0 block bg-clip-text text-transparent"
        style={{
          backgroundImage: `radial-gradient(circle 9rem at ${position.x}% ${position.y}%, ${highlightColor} 0%, color-mix(in oklch, ${highlightColor} 65%, transparent) 28%, transparent 62%)`,
        }}
        aria-hidden
      >
        {children}
      </span>
    </span>
  );
}
