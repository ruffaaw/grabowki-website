// src/animations/animations.ts
import { Variants, Transition } from "framer-motion";

export type Direction = "up" | "down" | "left" | "right";

export const fadeIn = (
  direction: Direction = "up",
  delay: number = 0
): Variants => {
  const transition: Transition = {
    type: "spring",
    duration: 1.3,
    delay,
  };

  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition,
    },
  };
};
