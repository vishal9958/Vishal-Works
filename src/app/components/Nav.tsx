import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return saved === "dark" || (!saved && systemPrefersDark);
    }
    return false;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const links = ["Services", "Work", "Process", "About", "Contact"];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 72;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          background: scrolled ? "var(--glass-bg)" : "transparent",
          boxShadow: scrolled ? "0 1px 0 var(--border)" : "none",
          backdropFilter: scrolled ? "var(--glass-blur)" : "none",
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
          >
            <div style={{ width: 32, height: 32, background: "var(--primary)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 4L9 14L15 4" stroke={isDark ? "#091613" : "#C8A15A"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>Vishal Works</span>
          </a>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={(e) => handleScroll(e, l.toLowerCase())}
                style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500, opacity: 0.75, transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
              >
                {l}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              style={{
                background: "var(--primary)", color: "var(--primary-foreground)", padding: "0.55rem 1.35rem",
                borderRadius: 6, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600,
                transition: "background 0.2s, transform 0.1s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = isDark ? "#d9b36c" : "#1a5247")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--primary)")}
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
            <div style={{ width: 24, height: 2, background: "var(--text-primary)", marginBottom: 5, transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <div style={{ width: 24, height: 2, background: "var(--text-primary)", marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
            <div style={{ width: 24, height: 2, background: "var(--text-primary)", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: "var(--bg-secondary)", borderTop: "1px solid var(--border)",
            padding: "1.5rem 2rem 2rem", display: "flex", flexDirection: "column", gap: "1.25rem",
            fontFamily: "'Manrope', sans-serif",
            backdropFilter: "var(--glass-blur)",
          }}>
            {links.map((l) => (
              <a 
                key={l} 
                href={`#${l.toLowerCase()}`} 
                onClick={(e) => { setMenuOpen(false); handleScroll(e, l.toLowerCase()); }}
                style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "1.05rem", fontWeight: 500 }}
              >
                {l}
              </a>
            ))}

            <a 
              href="#contact" 
              onClick={(e) => { setMenuOpen(false); handleScroll(e, "contact"); }}
              style={{ background: "var(--primary)", color: "var(--primary-foreground)", padding: "0.75rem 1.5rem", borderRadius: 6, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, textAlign: "center" }}
            >
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
          @media (max-width: 600px) {
            .floating-theme-btn {
              bottom: 1.25rem !important;
              right: 1.25rem !important;
              width: 46px !important;
              height: 46px !important;
            }
          }
        `}</style>
      </header>

      {/* Floating Theme Toggle Button in Bottom-Right Corner */}
      <button
        onClick={toggleTheme}
        className="floating-theme-btn"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 9999,
          width: 52,
          height: 52,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          background: "var(--glass-card-bg)",
          border: "1px solid var(--glass-border)",
          boxShadow: "var(--glass-shadow)",
          backdropFilter: "var(--glass-blur)",
          WebkitBackdropFilter: "var(--glass-blur)",
          color: "var(--text-primary)",
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1.1) rotate(15deg)";
          e.currentTarget.style.boxShadow = "0 15px 35px 0 rgba(0, 0, 0, 0.18)";
          e.currentTarget.style.borderColor = "var(--primary)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "var(--glass-shadow)";
          e.currentTarget.style.borderColor = "var(--glass-border)";
        }}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
          </svg>
        )}
      </button>
    </>
  );
}
