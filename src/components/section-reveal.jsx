"use client";

import { motion, useReducedMotion } from "framer-motion";

import { scrollReveal, staggerReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SectionReveal({ children, className, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={scrollReveal.hidden}
      whileInView={scrollReveal.visible}
      viewport={scrollReveal.viewport}
      transition={{ ...scrollReveal.transition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({ children, className, as = "div" }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={scrollReveal.viewport}
      variants={staggerReveal.container}
    >
      {children}
    </Component>
  );
}

export function StaggerRevealItem({ children, className, as = "div" }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component className={cn(className)} variants={staggerReveal.item}>
      {children}
    </Component>
  );
}
