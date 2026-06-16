export function Footer() {
  const links = {
    Services: ["Web Design", "Web Development", "UI/UX Design", "Brand Identity", "Social Media Design", "Startup Landing Page"],
    Industries: ["Restaurants", "Gyms", "Cafes", "E-commerce", "Startups"],
    Company: ["About Us", "Our Process", "Case Studies", "Blog", "Careers"],
    Contact: ["Start a Project", "Book a Call", "vk6051950@gmail.com", "WhatsApp"],
  };

  const getFooterLink = (cat: string, item: string) => {
    if (cat === "Services") return "#services";
    if (cat === "Industries") return "#industries";
    if (cat === "Company") {
      if (item === "About Us") return "#about";
      if (item === "Our Process") return "#process";
      if (item === "Case Studies") return "#work";
      return "#";
    }
    if (cat === "Contact") {
      if (item === "Start a Project") return "#contact";
      if (item === "Book a Call") return "https://cal.com/vishal-biswas-iynwpk/project-discovery-call";
      if (item === "vk6051950@gmail.com") return "mailto:vk6051950@gmail.com";
      if (item === "WhatsApp") return "https://wa.me/919318395641?text=Hi%20Vishal,%20I%20want%20to%20discuss%20a%20website%20project%20for%20my%20business.";
    }
    return "#";
  };

  return (
    <footer style={{ background: "#0E2E28", fontFamily: "'Manrope', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 2rem 3rem" }}>
        {/* Top CTA strip */}
        <div style={{
          background: "#143D35", borderRadius: 20, padding: "3rem", marginBottom: "5rem",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem",
          border: "1px solid rgba(200,161,90,0.15)",
        }}>
          <div>
            <h3 style={{ color: "#fff", fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: "0.5rem" }}>
              Ready to grow your business online?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
              Join 50+ businesses that trusted Vishal Works with their digital presence.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                background: "#C8A15A", color: "#1B1B1B", padding: "0.75rem 1.5rem",
                borderRadius: 8, textDecoration: "none", fontSize: "0.875rem", fontWeight: 700,
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#d4af70")}
              onMouseLeave={e => (e.currentTarget.style.background = "#C8A15A")}
            >
              Start a Project
            </a>
            <a
              href="#work"
              style={{
                background: "transparent", color: "#fff", padding: "0.75rem 1.5rem",
                borderRadius: 8, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600,
                border: "1.5px solid rgba(255,255,255,0.2)",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "4rem" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 32, height: 32, background: "#C8A15A", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 4L9 14L15 4" stroke="#143D35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>Vishal Works</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 280, marginBottom: "1.5rem" }}>
              Premium digital studio crafting websites and brand experiences for businesses ready to grow.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { label: "Twitter/X", path: "M18 4L12.5 10.5L18.5 18H14.5L11 13.5L7 18H3L8.8 11.2L3 4H7L10.3 8.2L14 4H18Z" },
                { label: "Instagram", path: "M12 3H8C5.24 3 3 5.24 3 8V12C3 14.76 5.24 17 8 17H12C14.76 17 17 14.76 17 12V8C17 5.24 14.76 3 12 3ZM10 13.5C8.07 13.5 6.5 11.93 6.5 10C6.5 8.07 8.07 6.5 10 6.5C11.93 6.5 13.5 8.07 13.5 10C13.5 11.93 11.93 13.5 10 13.5ZM14 7C13.45 7 13 6.55 13 6C13 5.45 13.45 5 14 5C14.55 5 15 5.45 15 6C15 6.55 14.55 7 14 7Z" },
                { label: "LinkedIn", path: "M4.5 7H7V16H4.5V7ZM5.75 3C4.78 3 4 3.78 4 4.75C4 5.72 4.78 6.5 5.75 6.5C6.72 6.5 7.5 5.72 7.5 4.75C7.5 3.78 6.72 3 5.75 3ZM16 16H13.5V11.2C13.5 9.4 12.1 9 11.6 9C11.1 9 9.5 9.3 9.5 11.2V16H7V7H9.5V8.1C9.9 7.4 11.2 7 12.2 7C13.2 7 16 7.6 16 11.4V16Z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: 36, height: 36, background: "rgba(255,255,255,0.07)", borderRadius: 8,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.5)", transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(200,161,90,0.15)"; e.currentTarget.style.color = "#C8A15A"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d={s.path}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                {cat}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {items.map((item) => (
                  <a
                    key={item}
                    href={getFooterLink(cat, item)}
                    target={cat === "Contact" && (item === "WhatsApp" || item === "Book a Call" || item.includes("@")) ? "_blank" : undefined}
                    rel={cat === "Contact" && (item === "WhatsApp" || item === "Book a Call" || item.includes("@")) ? "noopener noreferrer" : undefined}
                    style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s", display: "inline-block" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Vishal Works. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a
                key={link}
                href="#"
                style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
