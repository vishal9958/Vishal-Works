import { useState, useEffect } from "react";
import logoImg from "@/assets/logo.png";

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

  const links = ["Services", "Industries", "Work", "Process", "About", "Team", "Contact"];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === "" || targetId === "#" || targetId === "hero" || targetId === "top") {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
          zIndex: 99999,
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          background: scrolled ? "var(--glass-bg)" : "transparent",
          boxShadow: scrolled ? "0 1px 0 var(--border)" : "none",
          backdropFilter: scrolled ? "var(--glass-blur)" : "none",
          fontFamily: "'Manrope', sans-serif",
          pointerEvents: "auto",
        }}
      >
        <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a 
            href="#hero" 
            onClick={(e) => handleScroll(e, "hero")}
            style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none", cursor: "pointer" }}
            title="SIDEONE - Home"
          >
            <div style={{ 
              width: 36, 
              height: 36, 
              borderRadius: 8, 
              overflow: "hidden", 
              background: "#06130D",
              border: "1px solid rgba(229, 169, 60, 0.35)",
              boxShadow: "0 0 16px rgba(229, 169, 60, 0.2)",
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              flexShrink: 0
            }}>
              <img 
                src={logoImg} 
                alt="SIDEONE Logo" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                letterSpacing: "0.14em", 
                fontSize: "1.08rem", 
                fontWeight: 900, 
                fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
                lineHeight: 1.1
              }}>
                <span style={{ color: "var(--text-primary)" }}>SIDE</span>
                <span style={{ 
                  background: "linear-gradient(135deg, #F5D77F 0%, #D4AF37 50%, #B58525 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  marginLeft: "1px"
                }}>ONE</span>
              </div>
              <span style={{ 
                fontSize: "0.48rem", 
                letterSpacing: "0.22em", 
                color: "var(--text-secondary)", 
                fontWeight: 700, 
                textTransform: "uppercase", 
                marginTop: "1px" 
              }}>
                TWO MINDS · ONE DIRECTION
              </span>
            </div>
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
            style={{ 
              background: "none", 
              border: "none", 
              cursor: "pointer", 
              padding: "0.5rem", 
              display: "none",
              zIndex: 110 
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            <div style={{ width: 22, height: 2, background: "var(--text-primary)", marginBottom: 5, borderRadius: 2, transition: "transform 0.25s ease, background-color 0.25s ease", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <div style={{ width: 22, height: 2, background: "var(--text-primary)", marginBottom: 5, borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s ease" }} />
            <div style={{ width: 22, height: 2, background: "var(--text-primary)", borderRadius: 2, transition: "transform 0.25s ease, background-color 0.25s ease", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </nav>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div 
            className="mobile-menu-drawer"
            style={{
              background: isDark ? "rgba(4, 15, 10, 0.95)" : "rgba(255, 255, 255, 0.96)",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              padding: "1.25rem 1.5rem 1.75rem", 
              display: "flex", 
              flexDirection: "column", 
              gap: "0.85rem",
              fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
          >
            {links.map((l) => (
              <a 
                key={l} 
                href={`#${l.toLowerCase()}`} 
                onClick={(e) => { setMenuOpen(false); handleScroll(e, l.toLowerCase()); }}
                style={{ 
                  color: "var(--text-primary)", 
                  textDecoration: "none", 
                  fontSize: "1rem", 
                  fontWeight: 600,
                  padding: "0.45rem 0.5rem",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <span>{l}</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.4 }}>→</span>
              </a>
            ))}

            <a 
              href="#contact" 
              onClick={(e) => { setMenuOpen(false); handleScroll(e, "contact"); }}
              style={{ 
                background: "#E5A93C", 
                color: "#020704", 
                padding: "0.75rem 1.5rem", 
                borderRadius: "10px", 
                textDecoration: "none", 
                fontSize: "0.92rem", 
                fontWeight: 800, 
                textAlign: "center",
                marginTop: "0.5rem",
                boxShadow: "0 6px 20px rgba(229, 169, 60, 0.35)"
              }}
            >
              Start a Project →
            </a>
          </div>
        )}

        <style>{`
          @media (max-width: 820px) {
            .hidden-mobile { display: none !important; }
            .show-mobile { display: flex !important; flex-direction: column !important; justify-content: center !important; }
          }
          @media (min-width: 821px) {
            .show-mobile { display: none !important; }
          }
          @media (max-width: 600px) {
            .floating-theme-btn {
              bottom: 1.25rem !important;
              right: 1.25rem !important;
              width: 44px !important;
              height: 44px !important;
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
