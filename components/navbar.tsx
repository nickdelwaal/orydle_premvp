"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavbarVisualShell } from "@/components/ui/navbar-visual-shell";
import RotationNavItem from "@/components/ui/RotationButton";

const navLinks = [
  { href: "/krum", label: "Krum" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
];



export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

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
                  className="inline-flex outline-none rounded-full overflow-hidden"
                >
                  <RotationNavItem label={link.label} isActive={isActive(link.href)} />
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/request-access"
              className={cn(
                "cta-button navbar-primary-cta",
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
                className="flex outline-none rounded-full overflow-hidden"
              >
                <RotationNavItem label={link.label} isActive={isActive(link.href)} />
              </Link>
            ))}
          </nav>

          <Link
            href="/request-access"
            onClick={() => setIsMenuOpen(false)}
            className="cta-button navbar-primary-cta mt-4 flex w-full items-center justify-center"
          >
            Request Access
          </Link>
        </div>
      ) : null}
    </header>
  );
}
