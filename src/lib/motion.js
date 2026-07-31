export const motionEase = [0.22, 1, 0.36, 1];

export const scrollReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: motionEase },
  viewport: { once: true, amount: 0.12 },
};

export const staggerReveal = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.06,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: motionEase },
    },
  },
};
