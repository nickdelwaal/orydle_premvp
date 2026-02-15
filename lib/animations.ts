import type { Variants } from "framer-motion";

// Standard cubic-bezier easing curve
export const standardEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// Reusable container variants with stagger
export const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Reusable fade-in-up item variants
export const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: standardEase,
        },
    },
};

// Spring animation item variants
export const springItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 20,
        },
    },
};

// Slide-in from left variants
export const slideInLeftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: standardEase,
        },
    },
};

// Slide-in from right variants
export const slideInRightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: standardEase,
        },
    },
};
