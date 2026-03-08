"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <footer className="pt-20" ref={sectionRef}>
      <div className="footer-cta-shell">
        <div className="footer-cta-main relative z-10 mx-auto flex min-h-[55vh] max-w-4xl flex-col items-center justify-center pt-16 pb-56 text-center">

          {/* Centered Copy & Actions */}
          <motion.div
            className="flex w-full flex-col items-center justify-center relative z-10 mb-40 lg:mb-48"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >

            <h2 className="footer-cta-heading mx-auto mt-6 max-w-[18ch] leading-[1.05]">
              Architecture that enforces itself
            </h2>
            <p className="footer-cta-supporting mx-auto mt-8 max-w-2xl text-[1.15rem]">
              Stop documenting systems. Start defining them. Design visually with Krum, generate structure, ship changes that preserve alignment across intent, architecture, and code.
            </p>

            <div className="footer-cta-buttons mt-10 justify-center flex w-full gap-4">
              <Link href="/request-access" className="cta-button">
                Request Access
              </Link>
              <Link href="/approach" className="btn-pill-ghost footer-light min-h-11 px-7 py-3 text-[15px]">
                Read the Approach
              </Link>
            </div>
          </motion.div>



        </div>

        {/* Background Watermark */}
        <p className="footer-cta-watermark" aria-hidden="true">
          ORYDLE
        </p>
      </div>
    </footer>
  );
}
