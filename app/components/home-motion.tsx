"use client";

import { motion, useReducedMotion } from "motion/react";

type HomeMotionProps = {
  children: React.ReactNode;
  className?: string;
};

export function HomeMotion({ children, className }: HomeMotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.12,
            delayChildren: reduceMotion ? 0 : 0.06,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HomeMotionItem({ children, className }: HomeMotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: reduceMotion ? 1 : 0,
          y: reduceMotion ? 0 : 14,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reduceMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
