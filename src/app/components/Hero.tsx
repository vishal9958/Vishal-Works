export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#F5F4EE",
        display: "flex",
        alignItems: "center",
        fontFamily: "'Manrope', sans-serif",
        overflow: "hidden",
        position: "relative",
        paddingTop: 72,
      }}
    >
      {/* Subtle background shapes */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "10%", right: "-5%", width: 480, height: 480,
          borderRadius: "50%", background: "rgba(20,61,53,0.04)",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", left: "-8%", width: 360, height: 360,
          borderRadius: "50%", background: "rgba(200,161,90,0.06)",
        }} />
        <div style={{
          position: "absolute", top: "35%", left: "40%", width: 200, height: 200,
          borderRadius: "50%", background: "rgba(20,61,53,0.03)",
        }} />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 2rem 4rem", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="hero-grid">
        {/* Left */}
        <div className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(20,61,53,0.07)", borderRadius: 100, padding: "0.4rem 1rem", marginBottom: "2rem" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#C8A15A" }} />
            <span style={{ color: "#143D35", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>Bespoke Design & Development</span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.4rem, 4.5vw, 4rem)", fontWeight: 800, color: "#1B1B1B",
            lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1.5rem",
          }}>
            We design & build<br />
            <span style={{ color: "#143D35" }}>premium websites</span> for<br />
            growing brands.
          </h1>

          <p style={{ fontSize: "1.05rem", color: "#666666", lineHeight: 1.7, maxWidth: 480, marginBottom: "2.5rem", fontWeight: 400 }}>
            No templates, no boring layouts. We craft fully custom digital products, web designs, and brand systems that make your business stand out.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#contact"
              className="btn-arrow"
              style={{
                background: "#143D35", color: "#F5F4EE", padding: "0.85rem 2rem",
                borderRadius: 8, textDecoration: "none", fontSize: "0.95rem", fontWeight: 600,
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1a5247"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#143D35"; e.currentTarget.style.transform = "none"; }}
            >
              Start a Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#work"
              style={{
                background: "transparent", color: "#1B1B1B", padding: "0.85rem 2rem",
                borderRadius: 8, textDecoration: "none", fontSize: "0.95rem", fontWeight: 600,
                border: "1.5px solid rgba(20,61,53,0.2)",
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#143D35"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(20,61,53,0.2)"; e.currentTarget.style.transform = "none"; }}
            >
              View Our Work
            </a>
          </div>

          <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem" }}>
            {[["100%", "Custom Coded"], ["99+", "PageSpeed Score"], ["Mobile", "First Layout"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#143D35", letterSpacing: "-0.02em" }}>{num}</div>
                <div style={{ fontSize: "0.8rem", color: "#666666", fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — mockup showcase */}
        <div style={{ position: "relative" }} className="reveal reveal-delay-2">
          {/* Browser mockup */}
          <div style={{
            background: "#fff", borderRadius: 16, boxShadow: "0 32px 80px rgba(20,61,53,0.12), 0 8px 24px rgba(0,0,0,0.06)",
            overflow: "hidden", border: "1px solid rgba(20,61,53,0.1)",
          }}>
            {/* Browser chrome */}
            <div style={{ background: "#F0EFE9", padding: "0.75rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", gap: 5 }}>
                {["#E74C3C", "#F39C12", "#2ECC71"].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
              </div>
              <div style={{ flex: 1, background: "#fff", borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", color: "#666", textAlign: "center", maxWidth: 200, margin: "0 auto" }}>vishalworks.co</div>
            </div>
            {/* Site preview */}
            <div style={{ background: "#143D35", padding: "2rem", position: "relative", minHeight: 220 }}>
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ width: 80, height: 6, background: "rgba(255,255,255,0.9)", borderRadius: 3, marginBottom: 10 }} />
                <div style={{ width: 140, height: 4, background: "rgba(200,161,90,0.8)", borderRadius: 3, marginBottom: 6 }} />
                <div style={{ width: 110, height: 4, background: "rgba(255,255,255,0.3)", borderRadius: 3, marginBottom: 16 }} />
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ width: 80, height: 28, background: "#C8A15A", borderRadius: 5 }} />
                  <div style={{ width: 80, height: 28, background: "rgba(255,255,255,0.1)", borderRadius: 5, border: "1px solid rgba(255,255,255,0.2)" }} />
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: "1.5rem" }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: 8, padding: "0.75rem", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ width: 24, height: 24, background: "rgba(200,161,90,0.3)", borderRadius: 6, marginBottom: 8 }} />
                    <div style={{ width: "70%", height: 4, background: "rgba(255,255,255,0.6)", borderRadius: 2, marginBottom: 5 }} />
                    <div style={{ width: "50%", height: 3, background: "rgba(255,255,255,0.3)", borderRadius: 2 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating card 1 */}
          <div
            className="hero-card-1"
            style={{
              position: "absolute", bottom: -20, left: -30,
              background: "#fff", borderRadius: 12, padding: "0.875rem 1.125rem",
              boxShadow: "0 16px 40px rgba(0,0,0,0.1)", border: "1px solid rgba(20,61,53,0.08)",
              display: "flex", alignItems: "center", gap: "0.75rem",
            }}
          >
            <div style={{ width: 36, height: 36, background: "#143D35", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L11.5 7H16.5L12.5 10.5L14 16L9 12.5L4 16L5.5 10.5L1.5 7H6.5L9 2Z" fill="#C8A15A"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1B1B1B", fontFamily: "'Manrope', sans-serif" }}>Handcrafted Design</div>
              <div style={{ fontSize: "0.7rem", color: "#666", fontFamily: "'Manrope', sans-serif" }}>Tailored to your needs</div>
            </div>
          </div>

          {/* Floating card 2 */}
          <div
            className="hero-card-2"
            style={{
              position: "absolute", top: 20, right: -24,
              background: "#143D35", borderRadius: 12, padding: "0.875rem 1.125rem",
              boxShadow: "0 16px 40px rgba(20,61,53,0.25)",
              display: "flex", alignItems: "center", gap: "0.75rem",
            }}
          >
            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#C8A15A", fontFamily: "'Manrope', sans-serif" }}>99+</div>
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#fff", fontFamily: "'Manrope', sans-serif" }}>Speed Score</div>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", fontFamily: "'Manrope', sans-serif" }}>SEO & Performance ready</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 500px) {
          .hero-card-1 {
            left: 0px !important;
            bottom: 10px !important;
          }
          .hero-card-2 {
            right: 0px !important;
            top: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
