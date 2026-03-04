"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardData {
    title: string;
    description: string;
    imageUrl: string;
}

const CARDS_DATA: CardData[] = [
    {
        title: "System Builder Interface",
        description:
            "Visual composition: services, boundaries, flows designed as structured blocks—not diagrams",
        imageUrl:
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Architecture Model",
        description:
            "Formal graph representation: dependencies, ownership, constraints, invariants",
        imageUrl:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Generated Structure",
        description:
            "Real, editable code organized by your architecture—boilerplate, interfaces, connective logic",
        imageUrl:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Evolution Controls",
        description:
            "Safe change management: impact analysis, alignment verification, execution confidence",
        imageUrl:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

export default function ShowcaseCatalogSection() {
    return (
        <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 z-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px", amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full flex justify-center text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extralight tracking-wide text-white max-w-3xl leading-tight">
                        The system is the truth.{" "}
                        <span className="italic font-light text-cyan-200/90">
                            Code follows.
                        </span>
                    </h2>
                </motion.div>

                {/* Card Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px", amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
                >
                    {CARDS_DATA.map((card, idx) => (
                        <ShowcaseCard key={idx} card={card} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ShowcaseCard({ card }: { card: CardData }) {
    return (
        <motion.div
            variants={itemVariants}
            className="group relative flex flex-col rounded-3xl overflow-hidden bg-slate-900/40 backdrop-blur-md border border-slate-800/60 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(6,182,212,0.1)] hover:-translate-y-1 hover:border-slate-700/80"
        >
            {/* Top Image Area */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-800 rounded-t-3xl">
                <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_120%)] pointer-events-none" />

                {/* Soft bottom gradient to blend into text area */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none" />
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-1 p-6 md:p-8 gap-3 relative z-10 bg-gradient-to-b from-transparent to-slate-900/20">
                <h3 className="text-xl font-serif font-light italic text-white tracking-wide">
                    {card.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light opacity-80">
                    {card.description}
                </p>
            </div>
        </motion.div>
    );
}
