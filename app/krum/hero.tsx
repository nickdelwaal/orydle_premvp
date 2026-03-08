"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function KrumHero() {
  return (
    <section className="px-6 pb-20 pt-10 md:pb-24 md:pt-16 overflow-hidden">
      <div className="mx-auto flex max-w-7xl items-center gap-10">

        {/* Left column: text */}
        <motion.div
          className="w-[45%] shrink-0 z-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="ui-label mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Orydle AI / Krum
          </motion.p>

          <h1 className="editorial-h1 mb-6 text-platinum">
            Build systems that stay <em>understood</em>
          </h1>

          <motion.p
            className="mb-8 max-w-xl text-[18px] leading-relaxed text-platinum/60"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Design your architecture visually with Krum. Generate real code.
            Keep intent, structure, and execution aligned as your system
            evolves — not just documented, but enforced.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/request-access" className="cta-button">
              Request Early Access
            </Link>
            <Link href="#the-problem" className="btn-pill-ghost px-7 py-3 text-[15px]">
              See the problem
            </Link>
          </motion.div>
        </motion.div>

        {/* Right column: node graph */}
        <motion.div
          className="flex flex-1 items-center justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/orydle-node-graph-v4.svg"
            alt="Orydle system architecture graph"
            fetchPriority="high"
            decoding="async"
            style={{
              width: "100%",
              maxWidth: "760px",
              height: "auto",
              display: "block",
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
