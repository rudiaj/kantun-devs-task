//framer-motion animation variants
export const fadeOutVariants = {
  open: { opacity: 0, scale: 0.975, transition: { duration: 0.5, delay: 0.1 } },
  closed: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const fadeInVariants = {
  open: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.8 } },
  closed: { opacity: 0, scale: 0.5, transition: { duration: 0.3 } },
};

export const reverseFadeInVariants = {
  closed: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.4 } },
  open: { opacity: 0, scale: 0.5, transition: { duration: 0.3 } },
};

export const bgVariants = {
  open: { height: "91vh", transition: { duration: 0.5, delay: 0.2 } },
  closed: { height: 0, transition: { duration: 0.5 } },
};

export const imageVariants = {
  open: { y: "0", opacity: 1, transition: { duration: 0.6 } },
  closed: { y: "100%", opacity: 0, transition: { duration: 0.6 } },
};

export const fadeUpVariants = ({ duration = 0.6, delay = 0.5 }) => ({
  open: { y: 0, opacity: 1, transition: { duration, delay } },
  closed: { y: 30, opacity: 0, transition: { duration } },
});

export const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const gridItemVariants = {
  hidden: { opacity: 0, y: "-30px" },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
