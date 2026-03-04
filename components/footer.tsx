"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const THEME_STORAGE_KEY = "orydle-theme";
type ThemeMode = "dark" | "light";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 2.8v2.4M12 18.8v2.4M3.4 12h2.4M18.2 12h2.4M5.9 5.9l1.7 1.7M16.4 16.4l1.7 1.7M18.1 5.9l-1.7 1.7M7.6 16.4l-1.7 1.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
      <path
        d="M20.2 14.7A8.5 8.5 0 0 1 9.3 3.8a8.7 8.7 0 1 0 10.9 10.9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const themeAttr = document.documentElement.getAttribute("data-theme");
    if (themeAttr === "light" || themeAttr === "dark") {
      setTheme(themeAttr);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isLight = theme === "light";

  return (
    <footer className="pt-20" ref={sectionRef}>
      <div className="footer-cta-shell">
        <div className="footer-cta-main relative z-10 mx-auto flex min-h-[55vh] max-w-4xl flex-col items-center justify-center py-16 text-center">

          {/* Centered Copy & Actions */}
          <motion.div
            className="flex w-full flex-col items-center justify-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="footer-cta-label block">ORYDLE / SYSTEM INTELLIGENCE</p>
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

          {/* Premium UI/UX Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 mt-20 mb-32 flex w-full justify-center md:mb-40"
          >
            {mounted ? (
              <button
                type="button"
                className="group relative flex items-center gap-4 rounded-full border border-white/10 bg-[#12100f]/80 p-2 pr-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:bg-[#1c1917]/90 hover:shadow-[0_16px_48px_rgba(37,91,252,0.25)]"
                onClick={toggleTheme}
                aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
                aria-checked={isLight}
                role="switch"
              >
                <div className="absolute inset-0 -z-10 rounded-full bg-blue-electric/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
                <div className={cn("navbar-theme-toggle m-0 shrink-0 shadow-inner ring-1 ring-black/20 group-hover:border-white/30")}>
                  <span className={cn("navbar-theme-toggle-thumb", isLight && "is-light")} aria-hidden="true" />
                  <span className={cn("navbar-theme-toggle-slot", !isLight && "is-active")} aria-hidden="true">
                    <MoonIcon />
                  </span>
                  <span className={cn("navbar-theme-toggle-slot", isLight && "is-active")} aria-hidden="true">
                    <SunIcon />
                  </span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-platinum/50 transition-colors group-hover:text-platinum/70">
                    Theme Engine
                  </span>
                  <span className="text-sm font-medium text-platinum/90 transition-colors group-hover:text-white">
                    {isLight ? "Light Mode Active" : "Dark Mode Active"}
                  </span>
                </div>
              </button>
            ) : (
              <div className="h-[60px] w-64 rounded-full border border-white/5 bg-[#12100f]/40 backdrop-blur-xl" />
            )}
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
