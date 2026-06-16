import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Work", "Process", "About", "Contact"];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        background: scrolled ? "rgba(245,244,238,0.95)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(20,61,53,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, background: "#143D35", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 4L9 14L15 4" stroke="#C8A15A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ color: "#143D35", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>Vishal Works</span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ color: "#1B1B1B", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500, opacity: 0.75, transition: "opacity 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: "#143D35", color: "#F5F4EE", padding: "0.55rem 1.35rem",
              borderRadius: 6, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#1a5247")}
            onMouseLeave={e => (e.currentTarget.style.background = "#143D35")}
          >
            Start a Project
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          <div style={{ width: 24, height: 2, background: "#143D35", marginBottom: 5, transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <div style={{ width: 24, height: 2, background: "#143D35", marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <div style={{ width: 24, height: 2, background: "#143D35", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "#F5F4EE", borderTop: "1px solid rgba(20,61,53,0.1)",
          padding: "1.5rem 2rem 2rem", display: "flex", flexDirection: "column", gap: "1.25rem",
          fontFamily: "'Manrope', sans-serif",
        }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ color: "#1B1B1B", textDecoration: "none", fontSize: "1.05rem", fontWeight: 500 }}>
              {l}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            style={{ background: "#143D35", color: "#F5F4EE", padding: "0.75rem 1.5rem", borderRadius: 6, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, textAlign: "center" }}>
            Start a Project
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
