export const fade = {
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  initial: { opacity: 0 },
};
export const slideLeft = {
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
    x: 0,
  },
  initial: { opacity: 0, x: "100%" },
};
export const scaleDown = {
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
    scaleY: 1,
  },
  initial: { opacity: 0, scaleY: 0 },
};
