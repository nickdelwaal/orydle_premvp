"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};

// Binary texture component
function BinaryTexture() {
    const binary = "01001011 01010010 01010101 01001101 ".repeat(100);
    return (
        <div
            className="pointer-events-none absolute inset-0 overflow-hidden font-mono text-[10px] leading-relaxed text-white/[0.04]"
            style={{ wordBreak: "break-all" }}
            aria-hidden="true"
        >
            {binary}
        </div>
    );
}

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-20">
            {/* Binary texture watermark */}
            <BinaryTexture />

            {/* Subtle light effects */}
            <motion.div
                className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-white/[0.08] blur-[100px]"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.08, 0.12, 0.08],
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-white/[0.06] blur-[100px]"
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.06, 0.1, 0.06],
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />

            {/* Main content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 mx-auto max-w-5xl text-center"
            >
                {/* Overline */}
                <motion.div
                    variants={itemVariants}
                    className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-platinum/60"
                >
                    Orydle AI
                </motion.div>

                {/* Main title - GIANT, BOLD, PURE WHITE */}
                <motion.h1
                    variants={itemVariants}
                    className="hero-headline mb-8 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl"
                >
                    AI for software systems —<br className="hidden md:block" /> not just
                    code snippets.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-platinum/80 md:text-xl"
                >
                    Orydle AI is building developer tools that help teams understand,
                    change, and evolve large software systems. Our first product, Krum, is
                    designed for real-world codebases with real complexity.
                </motion.p>

                {/* CTA Buttons - REVERSED: White on Blue */}
                <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <Link
                        href="/request-access"
                        className="btn-primary group inline-flex items-center gap-2 rounded-xl px-10 py-5 text-lg"
                    >
                        Request Early Access
                        <span className="inline-block transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                    <Link
                        href="#problem"
                        className="btn-outline rounded-xl px-8 py-5 text-lg"
                    >
                        Learn More ↓
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
                animate={{ y: [0, 12, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                }}
            >
                <span className="text-sm text-platinum/40">Scroll to explore</span>
                <svg
                    className="h-5 w-5 text-platinum/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </motion.div>
        </section>
    );
}
