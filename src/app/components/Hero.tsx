import { useEffect, useState } from "react";
import logoImg from "@/assets/logo.png";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        fontFamily: "'Manrope', sans-serif",
        overflow: "hidden",
        position: "relative",
        paddingTop: 60,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Background Elements (Planet Rings & Glows) */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-10%", right: "10%", width: "60vw", height: "60vw",
          borderRadius: "50%", background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 10%, transparent) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", top: "10%", right: "-10%", width: "80vw", height: "80vw",
          borderRadius: "50%", border: "2px solid color-mix(in srgb, var(--primary) 15%, transparent)",
          transform: "rotate(-20deg) scaleY(0.4)",
          boxShadow: "0 0 40px color-mix(in srgb, var(--primary) 20%, transparent)",
        }} />
        <div style={{
          position: "absolute", top: "12%", right: "-8%", width: "80vw", height: "80vw",
          borderRadius: "50%", border: "1px solid color-mix(in srgb, var(--primary) 8%, transparent)",
          transform: "rotate(-20deg) scaleY(0.42)",
        }} />
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem", width: "100%", display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: "2rem", alignItems: "center", position: "relative", zIndex: 1 }} className="hero-grid">
        
        {/* LEFT COLUMN */}
        <div className="reveal fade-in-up hero-left">
          
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "var(--glass-card-bg)", border: "1px solid var(--glass-border)",
            borderRadius: 100, padding: "0.3rem 0.8rem", marginBottom: "1.5rem",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
            <span style={{ color: "var(--primary)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Bespoke Design & Development
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: "clamp(2rem, 3.8vw, 3.5rem)", fontWeight: 800, color: "var(--text-primary)",
            lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1.2rem",
          }}>
            We design & build<br />
            <span style={{ color: "var(--accent)" }}>premium </span> 
            <span style={{ color: "var(--primary)" }}>websites</span><br />
            for growing brands.
          </h1>

          {/* Subtitle */}
          <p style={{ 
            fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", color: "var(--text-secondary)", lineHeight: 1.6, 
            maxWidth: 480, marginBottom: "2rem", fontWeight: 400 
          }}>
            No templates, no boring layouts. We craft fully custom digital products, web designs, and brand systems that make your business stand out.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <a
              href="#contact"
              style={{
                background: "var(--accent)", color: "var(--background)", padding: "0.75rem 1.75rem",
                borderRadius: 8, textDecoration: "none", fontSize: "0.9rem", fontWeight: 700,
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                transition: "transform 0.2s, filter 0.2s",
                boxShadow: "0 4px 15px color-mix(in srgb, var(--accent) 30%, transparent)"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.filter = "brightness(1.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.filter = "none"; }}
            >
              Start a Project
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#work"
              style={{
                background: "var(--glass-card-bg)", color: "var(--text-primary)", padding: "0.75rem 1.75rem",
                borderRadius: 8, textDecoration: "none", fontSize: "0.9rem", fontWeight: 600,
                border: "1px solid var(--glass-border)",
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                backdropFilter: "blur(10px)",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "color-mix(in srgb, var(--primary) 10%, transparent)"; e.currentTarget.style.borderColor = "var(--primary)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--glass-card-bg)"; e.currentTarget.style.borderColor = "var(--glass-border)"; }}
            >
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="var(--background)"><path d="M8 5v14l11-7z"/></svg>
              </div>
              View Our Work
            </a>
          </div>

          {/* Stats Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }} className="stats-grid">
            {[
              { icon: "👥", value: "10+", label: "Projects Delivered" },
              { icon: "⭐", value: "100%", label: "Client Satisfaction" },
              { icon: "⚡", value: "Modern", label: "Tech Stack" },
              { icon: "🌐", value: "Global", label: "Remote & On-site" },
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                <div style={{ fontSize: "1.1rem", color: "var(--accent)" }}>{stat.icon}</div>
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.1rem" }}>{stat.value}</div>
                  <div style={{ fontSize: "0.65rem", color: "var(--text-secondary)", fontWeight: 500 }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN (3D MOCKUP) */}
        <div className="reveal fade-in-up reveal-delay-2 right-column-container" style={{ position: "relative", perspective: 1200 }}>
          
          <div className="mockup-scaler" style={{ width: "100%", transformStyle: "preserve-3d" }}>
            <div className="mockup-inner" style={{
              position: "relative",
              transform: `rotateY(-12deg) rotateX(4deg) rotateZ(1deg) translateY(${mousePos.y * 0.5}px) translateX(${mousePos.x * 0.5}px)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.1s ease-out",
              zIndex: 2,
            }}>
              {/* Main Dashboard Mockup */}
            <div style={{
              background: "var(--bg-secondary)",
              borderRadius: 16,
              border: "1px solid var(--glass-border)",
              boxShadow: "-20px 20px 60px rgba(0,0,0,0.15), 0 0 40px color-mix(in srgb, var(--primary) 10%, transparent)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}>
              {/* Top Bar */}
              <div style={{ background: "color-mix(in srgb, var(--bg-primary) 50%, transparent)", padding: "0.6rem 1rem", display: "flex", alignItems: "center", borderBottom: "1px solid var(--glass-border)" }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F56" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#27C93F" }} />
                </div>
                <div style={{ margin: "0 auto", background: "var(--bg-secondary)", padding: "0.2rem 2rem", borderRadius: 4, fontSize: "0.65rem", color: "var(--text-secondary)" }}>
                  sideone.co
                </div>
              </div>

              {/* Dashboard Layout */}
              <div style={{ display: "flex" }}>
                {/* Sidebar */}
                <div style={{ width: 120, borderRight: "1px solid var(--glass-border)", padding: "1.2rem 0.8rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <div style={{ width: 26, height: 26, borderRadius: 6, overflow: "hidden", border: "1px solid rgba(229, 169, 60, 0.4)", marginBottom: "0.5rem" }}>
                    <img src={logoImg} alt="SIDEONE" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  {["Dashboard", "Projects", "Analytics", "Clients", "Messages", "Settings"].map((item, i) => (
                    <div key={item} style={{ 
                      display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.65rem", 
                      color: i === 0 ? "var(--primary)" : "var(--text-secondary)",
                      background: i === 0 ? "color-mix(in srgb, var(--primary) 10%, transparent)" : "transparent",
                      padding: "0.4rem 0.5rem", borderRadius: 6,
                    }}>
                      <div style={{ width: 10, height: 10, border: i === 0 ? "1.5px solid var(--primary)" : "1.5px solid var(--glass-border)", borderRadius: 3 }} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main Content Area */}
                <div style={{ flex: 1, padding: "1.5rem", background: "var(--bg-primary)" }}>
                  <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "1.4rem", color: "var(--text-primary)", fontWeight: 700, lineHeight: 1.2, marginBottom: "0.4rem" }}>
                        Turn Ideas Into <br/> <span style={{ color: "var(--primary)" }}>Real Products.</span>
                      </h3>
                      <p style={{ fontSize: "0.65rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>Design. Develop. Deploy. Scale.</p>
                      <button style={{ background: "var(--primary)", color: "var(--primary-foreground)", border: "none", padding: "0.5rem 1rem", borderRadius: 6, fontSize: "0.75rem", fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <span>Start a Project</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </div>

                    {/* Chart Widget */}
                    <div style={{ flex: 1, background: "var(--glass-card-bg)", border: "1px solid var(--glass-border)", borderRadius: 12, padding: "0.75rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <div style={{ fontSize: "0.65rem", color: "var(--text-secondary)" }}>Growth</div>
                        <div style={{ color: "var(--text-primary)" }}>...</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem", height: 70, position: "relative" }}>
                        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 40">
                          <path d="M0,35 Q10,30 20,32 T40,25 T60,15 T80,20 T100,5" fill="none" stroke="var(--primary)" strokeWidth="2" />
                          <path d="M0,35 Q10,30 20,32 T40,25 T60,15 T80,20 T100,5 L100,40 L0,40 Z" fill="url(#grad)" />
                          <defs>
                            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div style={{ position: "absolute", top: 0, right: 10, background: "var(--text-primary)", padding: "0.2rem 0.5rem", borderRadius: 4, fontSize: "0.6rem", border: "1px solid var(--glass-border)" }}>
                          <span style={{ color: "var(--background)", fontWeight: 700 }}>+248%</span><br/>
                          <span style={{ color: "var(--background)", opacity: 0.8, fontSize: "0.5rem" }}>Last 6 months</span>
                        </div>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.25rem", fontSize: "0.5rem", color: "var(--text-secondary)" }}>
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stats Row */}
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    {[
                      { icon: "📊", title: "Projects", val: "10+" },
                      { icon: "💚", title: "Happy Clients", val: "100%" },
                      { icon: "🛡️", title: "Uptime", val: "99.9%" },
                    ].map(stat => (
                      <div key={stat.title} style={{ flex: 1, background: "var(--glass-card-bg)", border: "1px solid var(--glass-border)", borderRadius: 8, padding: "0.6rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <div style={{ width: 28, height: 28, background: "color-mix(in srgb, var(--primary) 10%, transparent)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem" }}>
                          {stat.icon}
                        </div>
                        <div>
                          <div style={{ fontSize: "0.55rem", color: "var(--text-secondary)" }}>{stat.title}</div>
                          <div style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 700 }}>{stat.val}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Glass Card 1 (Top Right) */}
            <div className="floating-card-1" style={{
              position: "absolute", top: -15, right: -25,
              background: "var(--glass-bg)", backdropFilter: "blur(15px)",
              border: "1px solid var(--glass-border)", borderRadius: 12,
              padding: "0.75rem 1rem", display: "flex", alignItems: "center", gap: "0.75rem",
              transform: "translateZ(40px)",
              boxShadow: "var(--glass-shadow)",
              animation: "float 6s ease-in-out infinite",
            }}>
              <div style={{ width: 32, height: 32, background: "var(--bg-secondary)", border: "1px solid var(--primary)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
              <div>
                <div style={{ fontSize: "0.65rem", color: "var(--text-secondary)" }}>Website Traffic</div>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-primary)" }}>+248%</div>
                <div style={{ fontSize: "0.55rem", color: "var(--text-secondary)" }}>Last 6 months</div>
              </div>
            </div>

            {/* Floating Glass Card 2 (Bottom Right) */}
            <div className="floating-card-2" style={{
              position: "absolute", bottom: -15, right: -5,
              background: "var(--glass-bg)", backdropFilter: "blur(15px)",
              border: "1px solid var(--glass-border)", borderRadius: 100,
              padding: "0.5rem 1rem", display: "flex", alignItems: "center", gap: "0.75rem",
              transform: "translateZ(60px)",
              boxShadow: "var(--glass-shadow)",
              animation: "float 8s ease-in-out infinite reverse",
            }}>
              <div style={{ display: "flex", marginLeft: 10 }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{ 
                    width: 24, height: 24, borderRadius: "50%", background: "#ccc", 
                    marginLeft: -10, border: "2px solid var(--bg-primary)",
                    backgroundImage: `url(https://i.pravatar.cc/100?img=${i+10})`, backgroundSize: "cover"
                  }} />
                ))}
              </div>
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-primary)" }}>Happy Clients</div>
                <div style={{ fontSize: "0.55rem", color: "var(--text-secondary)" }}>Building together globally</div>
              </div>
              <div style={{ color: "var(--primary)", fontSize: "1rem", marginLeft: "0.25rem" }}>🌐</div>
            </div>

            {/* Hand-drawn Arrow and Text */}
            <div className="arrow-text" style={{
              position: "absolute", bottom: -45, left: 60,
              transform: "translateZ(20px)",
              display: "flex", alignItems: "flex-start", gap: "0.5rem"
            }}>
              <div style={{ fontFamily: "'Caveat', cursive, sans-serif", color: "var(--text-primary)", fontSize: "0.9rem", lineHeight: 1.2, transform: "rotate(-5deg)", width: 100 }}>
                Custom dashboards, <br/> real results.
              </div>
              <svg width="30" height="40" viewBox="0 0 50 80" fill="none" style={{ transform: "rotate(-20deg) translateY(-20px)" }}>
                <path d="M5,75 Q30,60 45,10 M35,15 L45,10 L48,25" stroke="var(--text-primary)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ================= DARK THEME (ODD SECTION) ================= */
        .hero-section {
          background-color: #06130D;
          background-image: radial-gradient(circle at 70% 40%, rgba(20, 61, 53, 0.28) 0%, #06130D 70%);
          color: #F5F4EE;
        }

        /* ================= LIGHT THEME (CREAM BACKGROUND) ================= */
        html:not(.dark) .hero-section {
          background-color: #F6F5F0;
          background-image: radial-gradient(circle at 70% 40%, rgba(190, 225, 210, 0.35) 0%, #F6F5F0 70%);
          color: #143026;
        }

        @keyframes float {
          0% { transform: translateY(0px) translateZ(40px); }
          50% { transform: translateY(-15px) translateZ(40px); }
          100% { transform: translateY(0px) translateZ(40px); }
        }
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .reveal-delay-2 { animation-delay: 0.2s; }
        
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Perfect scaling for smaller laptops / desktops to fit without scroll */
        @media (min-width: 1441px) {
           .mockup-scaler { transform: scale(1.15); transform-origin: center right; }
        }
        @media (max-width: 1440px) {
           .mockup-scaler { transform: scale(1.05); transform-origin: center right; }
        }
        @media (max-width: 1280px) {
           .hero-left h1 { font-size: 2.8rem !important; }
           .mockup-scaler { transform: scale(0.95); transform-origin: center right; }
        }

        /* Responsive stacking for smaller screens */
        @media (max-width: 1024px) {
           .hero-section { height: auto !important; min-height: 100vh !important; padding: 5.5rem 1.5rem 3.5rem !important; }
           .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; padding: 0 !important; }
           .mockup-scaler { transform: scale(0.85); transform-origin: center; }
           .mockup-inner { transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg) translateY(0) translateX(0) !important; }
           .arrow-text { display: none !important; }
           .right-column-container { display: flex !important; justify-content: center !important; }
        }
        @media (max-width: 640px) {
           .hero-section { padding: 4.8rem 1rem 2.5rem !important; }
           .hero-left h1 { font-size: clamp(1.95rem, 8vw, 2.4rem) !important; }
           .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.85rem !important; }
           .mockup-scaler { transform: scale(0.68) !important; transform-origin: top center; margin-bottom: -70px; }
           .floating-card-1 { left: -10px !important; top: -15px !important; transform: scale(0.8) !important; }
           .floating-card-2 { right: -10px !important; bottom: 10px !important; transform: scale(0.8) !important; }
           .arrow-text { display: none !important; }
        }
      `}</style>
    </section>
  );
}
