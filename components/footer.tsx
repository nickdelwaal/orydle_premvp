import Link from "next/link";

export function Footer() {
  return (
    <footer className="pt-20">
      <div className="footer-cta-shell">
        <div className="footer-cta-main">
          <div className="footer-cta-copy">
            <p className="footer-cta-label">ORYDLE / SYSTEM INTELLIGENCE</p>
            <h2 className="footer-cta-heading">Architecture that enforces itself</h2>
            <p className="footer-cta-supporting">
              Stop documenting systems. Start defining them. Design visually with Krum, generate structure, ship changes that preserve alignment across intent, architecture, and code.
            </p>

            <div className="footer-cta-buttons">
              <Link href="/request-access" className="btn-pill-primary min-h-11 px-7 py-3 text-[15px]">
                Request Access
              </Link>
              <Link href="/approach" className="btn-pill-ghost footer-light min-h-11 px-7 py-3 text-[15px]">
                Read the Approach
              </Link>
            </div>
          </div>

          <div className="footer-cta-orb" aria-hidden="true">
            <div className="footer-cta-orb-content">
              <p className="footer-cta-orb-value">43</p>
              <p className="footer-cta-orb-label">Services Mapped</p>
              <p className="footer-cta-orb-sublabel">Per System Instance</p>
            </div>
          </div>

          <p className="footer-cta-watermark" aria-hidden="true">
            ORYDLE
          </p>
        </div>
      </div>
    </footer>
  );
}
