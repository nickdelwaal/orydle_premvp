"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavbarVisualShell } from "@/components/ui/navbar-visual-shell";

const navLinks = [
  { href: "/krum", label: "Krum" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/security", label: "Security" },
];

const THEME_STORAGE_KEY = "orydle-theme";
type ThemeMode = "dark" | "light";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 2.8v2.4M12 18.8v2.4M3.4 12h2.4M18.2 12h2.4M5.9 5.9l1.7 1.7M16.4 16.4l1.7 1.7M18.1 5.9l-1.7 1.7M7.6 16.4l-1.7 1.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
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

function ThemeSwitcher({
  theme,
  onToggle,
  className,
}: {
  theme: ThemeMode;
  onToggle: () => void;
  className?: string;
}) {
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn("navbar-theme-toggle", className)}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={isLight}
    >
      <span className={cn("navbar-theme-toggle-thumb", isLight && "is-light")} aria-hidden="true" />
      <span className={cn("navbar-theme-toggle-slot", !isLight && "is-active")} aria-hidden="true">
        <MoonIcon />
      </span>
      <span className={cn("navbar-theme-toggle-slot", isLight && "is-active")} aria-hidden="true">
        <SunIcon />
      </span>
    </button>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const themeAttr = document.documentElement.getAttribute("data-theme");
    if (themeAttr === "light" || themeAttr === "dark") {
      setTheme(themeAttr);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <NavbarVisualShell>
        <div className="flex w-full items-center justify-between gap-4 px-2 py-4 sm:px-4 md:px-5 lg:px-6">
          <Link
            href="/"
            className="flex min-h-11 items-center rounded-full px-2 text-[#e7e5e4] transition-opacity hover:opacity-85"
          >
            <Image
              src="/transparent_bg_brandmark.svg"
              alt=""
              aria-hidden="true"
              width={48}
              height={48}
              className="h-14 w-14 object-contain"
              priority
            />
            <span className="font-[var(--font-ui)] text-[2rem] font-medium tracking-[-0.02em]">Orydle</span>
          </Link>

          <nav className="hidden flex-1 justify-center md:flex">
            <div className="flex items-center gap-1.5 rounded-full border border-white/12 bg-[#e7e5e4]/5 p-1.5 backdrop-blur-[8px]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "inline-flex h-11 items-center justify-center rounded-full px-8 text-[15px] font-medium leading-none transition-colors duration-300",
                    isActive(link.href)
                      ? "bg-[#e7e5e4] text-[#0c0a09]"
                      : "text-[#e7e5e4]/78 hover:bg-[#e7e5e4] hover:text-[#0c0a09]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeSwitcher theme={theme} onToggle={toggleTheme} />

            <Link
              href="/request-access"
              className={cn(
                "btn-pill-primary navbar-primary-cta min-h-11 px-9 py-2.5 text-[15px]",
                isActive("/request-access") && "ring-2 ring-blue-electric/35"
              )}
            >
              Request Access
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 text-[#e7e5e4] md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {isMenuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </NavbarVisualShell>

      {isMenuOpen ? (
        <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-[#1c1917]/98 p-4 shadow-2xl md:hidden">
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex min-h-11 items-center rounded-2xl px-4 text-[15px] font-medium transition-colors duration-300",
                  isActive(link.href)
                    ? "bg-[#e7e5e4] text-[#0c0a09]"
                    : "text-[#e7e5e4]/80 hover:bg-[#e7e5e4] hover:text-[#0c0a09]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <ThemeSwitcher theme={theme} onToggle={toggleTheme} className="mt-4" />

          <Link
            href="/request-access"
            onClick={() => setIsMenuOpen(false)}
            className="btn-pill-primary navbar-primary-cta mt-4 flex min-h-11 w-full items-center justify-center text-[15px]"
          >
            Request Access
          </Link>
        </div>
      ) : null}
    </header>
  );
}
