import React from "react";
import { ArrowRight, ArrowUp } from "lucide-react";
import logoImg from "@/assets/logo.png";
import avatarAditya from "@/assets/avatar_aditya.png";
import avatarNeha from "@/assets/avatar_neha.png";
import avatarRahul from "@/assets/avatar_rahul.png";
import avatarAmit from "@/assets/avatar_amit.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="footer-section"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(1.8rem, 3.2vh, 2.6rem) 0 clamp(0.8rem, 1.4vh, 1.2rem) 0",
        fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        transition: "background-color 0.3s ease, color 0.3s ease"
      }}
    >
      {/* Background Ambient Glow & Cosmic Curves */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "20%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(110, 231, 183, 0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            right: "15%",
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(229, 169, 60, 0.07) 0%, transparent 80%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 2,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(1.4rem, 2.4vh, 2rem)"
        }}
      >
        {/* ================= TOP FLOATING GRAND CTA GLASS CARD ================= */}
        <div
          className="footer-cta-card"
          style={{
            borderRadius: "20px",
            padding: "clamp(1.2rem, 2.4vh, 1.8rem) clamp(1.4rem, 2.5vw, 2.4rem)",
            backdropFilter: "blur(25px)",
            border: "1.5px solid rgba(229, 169, 60, 0.45)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(229, 169, 60, 0.14)",
            display: "grid",
            gridTemplateColumns: "1.25fr 0.75fr 1.05fr",
            gap: "1.5rem",
            alignItems: "center",
            position: "relative",
            width: "100%",
            boxSizing: "border-box"
          }}
        >
          {/* Left CTA Info */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.25rem" }}>
              <div style={{ width: 18, height: 2, background: "#E5A93C", borderRadius: 2 }} />
              <span style={{ color: "#E5A93C", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                LET'S WORK TOGETHER
              </span>
            </div>

            <h3 className="footer-cta-title" style={{ fontSize: "clamp(1.35rem, 1.8vw, 1.85rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.15, margin: "0 0 0.35rem 0" }}>
              Ready to <span style={{ color: "#E5A93C" }}>grow your business online?</span>
            </h3>

            <p className="footer-cta-desc" style={{ fontSize: "0.76rem", lineHeight: 1.38, color: "rgba(255,255,255,0.7)", margin: "0 0 0.75rem 0", maxWidth: "480px" }}>
              Join 50+ businesses that trust us to bring their ideas to life with modern design, scalable solutions, and real results.
            </p>

            {/* Social Proof Avatars & Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexWrap: "wrap" }}>
              {/* Avatars */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {[avatarAditya, avatarNeha, avatarRahul, avatarAmit].map((av, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        border: "2px solid #020704",
                        overflow: "hidden",
                        marginLeft: idx === 0 ? 0 : -8,
                        background: "#0d281e"
                      }}
                    >
                      <img src={av} alt="Client avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  ))}
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      border: "2px solid #020704",
                      background: "rgba(229, 169, 60, 0.2)",
                      color: "#E5A93C",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.68rem",
                      fontWeight: 800,
                      marginLeft: -8
                    }}
                  >
                    +
                  </div>
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, marginLeft: "0.6rem" }} className="happy-clients-text">
                  50+ Happy Clients
                </span>
              </div>

              {/* Rating */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <div style={{ color: "#E5A93C", fontSize: "0.75rem", letterSpacing: "1px" }}>★★★★★</div>
                <span style={{ fontSize: "0.72rem", fontWeight: 700 }} className="rating-text">4.9/5 Average Rating</span>
              </div>
            </div>
          </div>

          {/* Middle Cursive Hint */}
          <div
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "1.1rem",
              color: "rgba(255, 255, 255, 0.85)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              lineHeight: 1.1,
              transform: "rotate(-6deg)"
            }}
            className="footer-cta-cursive"
          >
            <span>Let's create<br />something amazing<br />together!</span>
            <svg width="26" height="26" viewBox="0 0 32 30" fill="none" style={{ transform: "rotate(35deg) scaleX(-1)", marginTop: "2px" }}>
              <path d="M4 4 C 14 6, 24 14, 26 26 M 26 26 L 18 24 M 26 26 L 25 18" stroke="#E5A93C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Right Action Buttons & Value Props */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.85rem" }}>
            <div style={{ display: "flex", gap: "0.65rem", alignItems: "center" }}>
              <a
                href="#contact"
                style={{
                  background: "#E5A93C",
                  color: "#020704",
                  padding: "0.52rem 1.25rem",
                  borderRadius: "9px",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  boxShadow: "0 6px 20px rgba(229, 169, 60, 0.35)",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; e.currentTarget.style.transform = "none"; }}
              >
                <span>Start a Project</span>
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>

              <a
                href="#work"
                className="view-work-btn"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#ffffff",
                  padding: "0.52rem 1.15rem",
                  borderRadius: "9px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#E5A93C"; e.currentTarget.style.color = "#E5A93C"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)"; e.currentTarget.style.color = "#ffffff"; e.currentTarget.style.transform = "none"; }}
              >
                View Our Work
              </a>
            </div>

            {/* 3 Value Props */}
            <div style={{ display: "flex", gap: "0.95rem", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(229, 169, 60, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E5A93C", fontSize: "0.7rem" }}>⚡</div>
                <div style={{ fontSize: "0.62rem" }}>
                  <div style={{ fontWeight: 800 }}>Fast</div>
                  <div style={{ opacity: 0.65 }}>Response</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(110, 231, 183, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6EE7B7", fontSize: "0.7rem" }}>👥</div>
                <div style={{ fontSize: "0.62rem" }}>
                  <div style={{ fontWeight: 800 }}>Free</div>
                  <div style={{ opacity: 0.65 }}>Consultation</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(229, 169, 60, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E5A93C", fontSize: "0.7rem" }}>🛡️</div>
                <div style={{ fontSize: "0.62rem" }}>
                  <div style={{ fontWeight: 800 }}>No Obligation</div>
                  <div style={{ opacity: 0.65 }}>Just Ideas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN 5-COLUMN FOOTER NAVIGATION ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1.3fr",
            gap: "2.2rem",
            alignItems: "start",
            margin: "0",
            position: "relative"
          }}
          className="footer-nav-grid"
        >
          {/* Column 1: Brand */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.65rem" }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: "#06130D",
                  border: "1px solid rgba(229, 169, 60, 0.4)",
                  boxShadow: "0 0 14px rgba(229, 169, 60, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                <img src={logoImg} alt="SIDEONE Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
                  <span className="footer-brand-title">SIDE</span>
                  <span style={{ 
                    background: "linear-gradient(135deg, #F5D77F 0%, #D4AF37 50%, #B58525 100%)", 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent",
                    marginLeft: "1px"
                  }}>ONE</span>
                </div>
                <span style={{ 
                  fontSize: "0.46rem", 
                  letterSpacing: "0.22em", 
                  color: "rgba(255, 255, 255, 0.55)", 
                  fontWeight: 700, 
                  textTransform: "uppercase", 
                  marginTop: "1px" 
                }} className="footer-brand-desc">
                  TWO MINDS · ONE DIRECTION
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.74rem", lineHeight: 1.45, color: "rgba(255, 255, 255, 0.65)", margin: "0 0 0.85rem 0", maxWidth: "240px" }} className="footer-brand-desc">
              Premium digital studio crafting websites and brand experiences for businesses ready to grow.
            </p>

            {/* Social Icons (5 Squares) */}
            <div style={{ display: "flex", gap: "0.45rem", alignItems: "center", marginBottom: "0.85rem" }}>
              {[
                { label: "𝕏", url: "https://x.com" },
                { label: "📷", url: "https://instagram.com" },
                { label: "in", url: "https://linkedin.com" },
                { label: "🐙", url: "https://github.com" },
                { label: "▶", url: "https://youtube.com" }
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-icon-btn"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "6px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "rgba(255, 255, 255, 0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.2s ease"
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Cursive Handwriting Tag */}
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "0.95rem",
                lineHeight: 1.1,
                color: "#E5A93C",
                display: "inline-block"
              }}
            >
              <div>Ideas</div>
              <div>Build</div>
              <div>Better</div>
              <div>Futures.</div>
              <div style={{ width: "100%", height: 2, background: "linear-gradient(to right, #E5A93C, transparent)", borderRadius: 2, marginTop: "2px" }} />
            </div>
          </div>

          {/* Column 2: SERVICES */}
          <div>
            <div style={{ color: "#E5A93C", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.65rem" }}>
              SERVICES
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.42rem" }}>
              {["Web Design", "Web Development", "UI/UX Design", "Brand Identity", "Social Media Design", "Startup Landing Page"].map((item) => (
                <a
                  key={item}
                  href="#services"
                  className="footer-nav-link"
                  style={{ fontSize: "0.74rem", color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", transition: "color 0.2s ease" }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: INDUSTRIES */}
          <div>
            <div style={{ color: "#E5A93C", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.65rem" }}>
              INDUSTRIES
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.42rem" }}>
              {["Restaurants", "Gyms", "Cafes", "E-commerce", "Startups", "Real Estate"].map((item) => (
                <a
                  key={item}
                  href="#industries"
                  className="footer-nav-link"
                  style={{ fontSize: "0.74rem", color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", transition: "color 0.2s ease" }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: COMPANY */}
          <div>
            <div style={{ color: "#E5A93C", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.65rem" }}>
              COMPANY
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.42rem" }}>
              {[
                { title: "About Us", link: "#about" },
                { title: "Our Process", link: "#process" },
                { title: "Featured Work", link: "#work" },
                { title: "Blog", link: "#work" },
                { title: "Careers", link: "#team" },
                { title: "Testimonials", link: "#team" }
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="footer-nav-link"
                  style={{ fontSize: "0.74rem", color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", transition: "color 0.2s ease" }}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Column 5: CONTACT */}
          <div style={{ position: "relative" }}>
            <div style={{ color: "#E5A93C", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.65rem" }}>
              CONTACT
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <a href="#contact" className="footer-nav-link" style={{ fontSize: "0.74rem", color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <span>🚀</span>
                <span>Start a Project</span>
              </a>

              <a href="https://cal.com/vishal-biswas-iynwpk/project-discovery-call" target="_blank" rel="noreferrer" className="footer-nav-link" style={{ fontSize: "0.74rem", color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <span>📅</span>
                <span>Book a Call</span>
              </a>

              <a href="mailto:vk6051950@gmail.com" className="footer-nav-link" style={{ fontSize: "0.74rem", color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <span>✉️</span>
                <span>vk6051950@gmail.com</span>
              </a>

              <a href="https://wa.me/919318395641?text=Hi%20Vishal%2C%20I%20want%20to%20discuss%20a%20website%20project%20for%20my%20business." target="_blank" rel="noreferrer" className="footer-nav-link" style={{ fontSize: "0.74rem", color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <span>💬</span>
                <span>WhatsApp</span>
              </a>

              <div style={{ fontSize: "0.74rem", color: "rgba(255, 255, 255, 0.7)", display: "flex", alignItems: "flex-start", gap: "0.35rem", marginTop: "0.1rem" }}>
                <span>📍</span>
                <div>
                  <div>Delhi NCR, India</div>
                  <div style={{ fontSize: "0.62rem", opacity: 0.65 }}>Remote worldwide</div>
                </div>
              </div>
            </div>

            {/* Far Right Cursive Annotation */}
            <div
              style={{
                position: "absolute",
                top: "1.2rem",
                right: "-2.8rem",
                fontFamily: "'Caveat', cursive",
                fontSize: "1.05rem",
                color: "rgba(255, 255, 255, 0.85)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                textAlign: "right",
                lineHeight: 1.05
              }}
              className="footer-side-cursive"
            >
              <span>Same<br />Vision<br />Bigger<br />Things</span>
              <svg width="22" height="22" viewBox="0 0 32 30" fill="none" style={{ transform: "rotate(30deg) scaleX(-1)", marginTop: "3px" }}>
                <path d="M4 4 C 14 6, 24 14, 26 26 M 26 26 L 18 24 M 26 26 L 25 18" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.2rem",
            paddingTop: "clamp(0.35rem, 0.7vh, 0.55rem)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            fontSize: "0.68rem"
          }}
          className="footer-bottom-bar"
        >
          {/* Copyright */}
          <div style={{ color: "rgba(255, 255, 255, 0.6)" }} className="footer-copy-text">
            © 2026 SIDEONE. All rights reserved.
          </div>

          {/* Center Divider Tagline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              fontSize: "0.64rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "rgba(255, 255, 255, 0.75)"
            }}
            className="footer-center-tagline"
          >
            <div style={{ width: 35, height: 1, background: "linear-gradient(to right, transparent, rgba(229, 169, 60, 0.5))" }} />
            <span>DESIGN × DEVELOP × GROW × TOGETHER</span>
            <div style={{ width: 35, height: 1, background: "linear-gradient(to left, transparent, rgba(229, 169, 60, 0.5))" }} />
          </div>

          {/* Right Policy Links & Scroll-to-Top Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            <div style={{ display: "flex", gap: "1rem" }} className="footer-policy-links">
              <a href="#" className="footer-policy-link" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }}>Privacy Policy</a>
              <a href="#" className="footer-policy-link" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }}>Terms of Service</a>
              <a href="#" className="footer-policy-link" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }}>Cookie Policy</a>
            </div>

            {/* Scroll To Top Button */}
            <button
              onClick={scrollToTop}
              className="scroll-top-btn"
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(229, 169, 60, 0.45)",
                color: "#E5A93C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: "0 0 10px rgba(229, 169, 60, 0.15)"
              }}
              title="Scroll to top"
            >
              <ArrowUp size={15} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= CSS STYLES & LIGHT THEME RULES ================= */}
      <style>{`
        /* ================= DARK THEME (ODD SECTION: LIGHTER DARK) ================= */
        .footer-section {
          background-color: #06130D;
          color: #ffffff;
        }
        .footer-cta-card {
          background: linear-gradient(165deg, rgba(8, 28, 20, 0.94) 0%, rgba(3, 14, 9, 0.98) 100%);
        }
        .footer-cta-title {
          color: #ffffff;
        }
        .footer-brand-title {
          color: #ffffff;
        }
        .footer-nav-link:hover {
          color: #E5A93C !important;
          transform: translateX(2px);
        }
        .footer-social-icon-btn:hover {
          background: #E5A93C !important;
          color: #020704 !important;
          border-color: #E5A93C !important;
          transform: translateY(-2px);
        }
        .footer-policy-link:hover {
          color: #E5A93C !important;
        }
        .scroll-top-btn:hover {
          background: #E5A93C !important;
          color: #020704 !important;
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(229, 169, 60, 0.4) !important;
        }

        /* ================= LIGHT THEME ================= */
        html:not(.dark) .footer-section {
          background-color: #F6F5F0;
          color: #143026;
        }
        html:not(.dark) .footer-cta-card {
          background: linear-gradient(165deg, rgba(255, 255, 255, 0.98) 0%, rgba(244, 248, 245, 0.98) 100%);
          border: 1.5px solid rgba(20, 48, 38, 0.15) !important;
          box-shadow: 0 15px 40px rgba(20, 48, 38, 0.08) !important;
        }
        html:not(.dark) .footer-cta-title {
          color: #143026;
        }
        html:not(.dark) .footer-cta-desc {
          color: #4A6357 !important;
        }
        html:not(.dark) .happy-clients-text, html:not(.dark) .rating-text {
          color: #143026 !important;
        }
        html:not(.dark) .footer-cta-cursive {
          color: #143026 !important;
        }
        html:not(.dark) .view-work-btn {
          background: rgba(20, 48, 38, 0.06) !important;
          color: #143026 !important;
          border-color: rgba(20, 48, 38, 0.2) !important;
        }
        html:not(.dark) .view-work-btn:hover {
          border-color: #B57D1E !important;
          color: #B57D1E !important;
        }
        html:not(.dark) .footer-brand-title {
          color: #143026;
        }
        html:not(.dark) .footer-brand-desc {
          color: #4A6357 !important;
        }
        html:not(.dark) .footer-nav-link {
          color: #4A6357 !important;
        }
        html:not(.dark) .footer-nav-link:hover {
          color: #B57D1E !important;
        }
        html:not(.dark) .footer-social-icon-btn {
          background: rgba(20, 48, 38, 0.05) !important;
          border-color: rgba(20, 48, 38, 0.14) !important;
          color: #143026 !important;
        }
        html:not(.dark) .footer-social-icon-btn:hover {
          background: #B57D1E !important;
          color: #ffffff !important;
          border-color: #B57D1E !important;
        }
        html:not(.dark) .footer-side-cursive {
          color: #143026 !important;
        }
        html:not(.dark) .footer-bottom-bar {
          border-top-color: rgba(20, 48, 38, 0.1) !important;
        }
        html:not(.dark) .footer-copy-text {
          color: #5B7569 !important;
        }
        html:not(.dark) .footer-center-tagline {
          color: #5B7569 !important;
        }
        html:not(.dark) .footer-policy-link {
          color: #5B7569 !important;
        }
        html:not(.dark) .footer-policy-link:hover {
          color: #B57D1E !important;
        }
        html:not(.dark) .scroll-top-btn {
          background: rgba(20, 48, 38, 0.06) !important;
          border-color: rgba(181, 125, 30, 0.45) !important;
          color: #B57D1E !important;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 1024px) {
          .footer-section { height: auto !important; max-height: none !important; padding: 3.5rem 0 !important; }
          .footer-cta-card { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .footer-cta-cursive { display: none !important; }
          .footer-nav-grid { grid-template-columns: 1fr 1fr 1fr !important; gap: 2rem !important; }
          .footer-side-cursive { display: none !important; }
          .footer-bottom-bar { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
          .footer-center-tagline { display: none !important; }
        }
        @media (max-width: 640px) {
          .footer-nav-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-policy-links { flex-wrap: wrap !important; }
        }
      `}</style>
    </footer>
  );
}
