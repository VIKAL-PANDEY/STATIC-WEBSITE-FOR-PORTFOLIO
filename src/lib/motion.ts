import type { Variants, Transition } from 'framer-motion';

// Custom cubic-bezier typed correctly for framer-motion
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const transition = (delay = 0, duration = 0.65): Transition => ({
  duration,
  ease: EASE,
  delay,
});

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: transition(delay),
  }),
};

export const fadeUp = (delay = 0, duration = 0.65) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: transition(delay, duration),
});

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: transition(delay, 0.5),
});
