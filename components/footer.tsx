import Link from "next/link";

export function Footer() {
  return (
    <footer className="pt-20">
      <div className="footer-cta-shell">
        <div className="footer-cta-main">
          <div className="footer-cta-copy">
            <p className="footer-cta-label">ORYDLE AI / SYSTEM INTELLIGENCE</p>
            <h2 className="footer-cta-heading">Ready to build dependable systems</h2>
            <p className="footer-cta-supporting">
              Map architecture, plan impact, review risk, and ship with confidence across shared service
              boundaries.
            </p>

            <div className="footer-cta-buttons">
              <Link href="/request-access" className="btn-pill-primary min-h-11 px-7 py-3 text-[15px]">
                Request Access
              </Link>
              <Link href="/approach" className="btn-pill-ghost footer-light min-h-11 px-7 py-3 text-[15px]">
                Explore Workflow
              </Link>
            </div>
          </div>

          <div className="footer-cta-orb" aria-hidden="true">
            <div className="footer-cta-orb-content">
              <p className="footer-cta-orb-value">43</p>
              <p className="footer-cta-orb-label">Services Mapped</p>
              <p className="footer-cta-orb-sublabel">Per Dependency Snapshot</p>
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
