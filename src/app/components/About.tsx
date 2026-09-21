import React from "react";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="about-section"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(1.2rem, 3vh, 2.5rem) 0",
        fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
        minHeight: "100vh",
        maxHeight: "100vh",
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        transition: "background-color 0.3s ease, color 0.3s ease"
      }}
    >
      {/* Background Warm Ambiance Lights */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "5%",
            width: "45vw",
            height: "45vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(229, 169, 60, 0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(110, 231, 183, 0.05) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1480,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          maxHeight: "calc(100vh - 20px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        {/* ================= MAIN 2-COLUMN GRID ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1.35fr",
            gap: "2.2rem",
            alignItems: "stretch",
            flex: 1,
            minHeight: 0
          }}
          className="about-main-grid"
        >
          {/* ================= LEFT COLUMN: STORY, MISSION/VISION/VALUES, CTAS ================= */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%"
            }}
          >
            {/* Header + Paragraphs */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                <div style={{ width: 22, height: 2, background: "#E5A93C", borderRadius: 2 }} />
                <span style={{ color: "#E5A93C", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  ABOUT THE WORK
                </span>
              </div>

              <h2 className="about-main-title" style={{ fontSize: "clamp(1.6rem, 2.2vw, 2.3rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.12, margin: "0 0 0.45rem 0" }}>
                Every business deserves a<br />
                <span style={{ color: "#E5A93C" }}>strong digital presence</span>
              </h2>

              <p className="about-main-desc" style={{ fontSize: "0.78rem", lineHeight: 1.45, margin: "0 0 0.4rem 0" }}>
                We started this studio with a simple belief — every business deserves a strong digital presence, regardless of its size. Our goal is to create modern, thoughtful, and user-focused digital solutions that help small businesses, startups, and local brands stand out.
              </p>

              <p className="about-main-desc" style={{ fontSize: "0.78rem", lineHeight: 1.45, margin: 0 }}>
                As a growing studio, we focus on quality over quantity. We approach every project with care and attention to detail, building exceptional digital experiences to grow alongside the businesses we work with.
              </p>
            </div>

            {/* 3 Core Pillars: Mission, Vision, Values */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.75rem",
                margin: "0.8rem 0"
              }}
              className="about-pillars-grid"
            >
              {/* Mission */}
              <div
                className="about-pillar-card"
                style={{
                  borderRadius: "14px",
                  padding: "0.75rem 0.65rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                  backdropFilter: "blur(12px)",
                  transition: "transform 0.25s ease, border-color 0.25s ease"
                }}
              >
                <div
                  className="pillar-icon-box"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.95rem"
                  }}
                >
                  🎯
                </div>
                <div className="pillar-title" style={{ fontWeight: 800, fontSize: "0.85rem", lineHeight: 1.1 }}>
                  Mission
                </div>
                <div className="pillar-desc" style={{ fontSize: "0.68rem", lineHeight: 1.35 }}>
                  To help businesses establish a strong and professional digital presence through thoughtful design, modern technology, and user-centered experiences.
                </div>
              </div>

              {/* Vision */}
              <div
                className="about-pillar-card"
                style={{
                  borderRadius: "14px",
                  padding: "0.75rem 0.65rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                  backdropFilter: "blur(12px)",
                  transition: "transform 0.25s ease, border-color 0.25s ease"
                }}
              >
                <div
                  className="pillar-icon-box"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.95rem"
                  }}
                >
                  👁️
                </div>
                <div className="pillar-title" style={{ fontWeight: 800, fontSize: "0.85rem", lineHeight: 1.1 }}>
                  Vision
                </div>
                <div className="pillar-desc" style={{ fontSize: "0.68rem", lineHeight: 1.35 }}>
                  To build a creative digital studio known for delivering high-quality websites, digital products, and brand experiences that help businesses grow with confidence.
                </div>
              </div>

              {/* Values */}
              <div
                className="about-pillar-card"
                style={{
                  borderRadius: "14px",
                  padding: "0.75rem 0.65rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                  backdropFilter: "blur(12px)",
                  transition: "transform 0.25s ease, border-color 0.25s ease"
                }}
              >
                <div
                  className="pillar-icon-box"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.95rem"
                  }}
                >
                  💎
                </div>
                <div className="pillar-title" style={{ fontWeight: 800, fontSize: "0.85rem", lineHeight: 1.1 }}>
                  Values
                </div>
                <div className="pillar-desc" style={{ fontSize: "0.68rem", lineHeight: 1.35 }}>
                  Simplicity, quality, collaboration, and continuous learning. We believe in long-term relationships, transparent communication, and creating real value for our clients.
                </div>
              </div>
            </div>

            {/* Bottom Action CTAs */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <a
                href="#contact"
                className="about-primary-btn"
                style={{
                  background: "#E5A93C",
                  color: "#020704",
                  padding: "0.55rem 1.35rem",
                  borderRadius: "10px",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  boxShadow: "0 6px 20px rgba(229, 169, 60, 0.4)",
                  transition: "transform 0.2s ease, filter 0.2s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; e.currentTarget.style.transform = "none"; }}
              >
                <span>Let's Build Something Great</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: HERO STUDIO PHOTO, 4-CARD GALLERY, STATS STRIP ================= */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "0.65rem",
              height: "100%",
              position: "relative"
            }}
          >
            {/* Top-Right Cursive Annotation */}
            <div
              style={{
                position: "absolute",
                top: "-22px",
                right: "12px",
                fontFamily: "'Caveat', cursive",
                fontSize: "1.15rem",
                color: "rgba(255, 255, 255, 0.85)",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                zIndex: 10,
                pointerEvents: "none"
              }}
              className="about-top-annotation"
            >
              <span>Real people<br />Real work</span>
              <svg width="24" height="22" viewBox="0 0 30 26" fill="none" style={{ transform: "rotate(10deg)" }}>
                <path d="M4 4 C 14 6, 24 12, 26 22 M 26 22 L 18 20 M 26 22 L 24 14" stroke="#E5A93C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* 1. Large Main Studio Photo Card */}
            <div
              className="about-main-photo-card"
              style={{
                flex: 1,
                minHeight: "210px",
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                border: "1.5px solid rgba(229, 169, 60, 0.35)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.75)"
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop&q=80"
                alt="Studio Workspace"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.5) 100%)" }} />

              {/* Floating Neon Sign Overlay on Photo */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1.2rem",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.1,
                  textShadow: "0 2px 10px rgba(0,0,0,0.9), 0 0 15px rgba(229, 169, 60, 0.5)"
                }}
              >
                Good<br />Design<br />Builds<br />Businesses
              </div>

              {/* Floating Wall Text Poster on Right */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1.2rem",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  color: "rgba(255, 255, 255, 0.7)",
                  textAlign: "right",
                  lineHeight: 1.4
                }}
              >
                IDEAS<br />DESIGN<br />DEVELOP<br />GROW
              </div>

              {/* Floating Badge: Founded 2026 */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1rem",
                  background: "rgba(10, 24, 16, 0.85)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(229, 169, 60, 0.35)",
                  borderRadius: "12px",
                  padding: "0.45rem 0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)"
                }}
              >
                <div style={{ width: 28, height: 28, borderRadius: "8px", background: "rgba(229, 169, 60, 0.2)", border: "1px solid #E5A93C", display: "flex", alignItems: "center", justifyContent: "center", color: "#E5A93C", fontSize: "0.85rem" }}>
                  ★
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#ffffff" }}>Founded 2026</div>
                  <div style={{ fontSize: "0.62rem", color: "rgba(255, 255, 255, 0.65)" }}>Building digital solutions</div>
                </div>
              </div>
            </div>

            {/* 2. Gallery Row of 4 Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.55rem" }}>
              {/* Card 1: Team meeting with play button */}
              <div style={{ height: "68px", borderRadius: "12px", overflow: "hidden", position: "relative", border: "1px solid rgba(255, 255, 255, 0.12)" }}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80" alt="Team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(255,255,255,0.25)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.65rem", paddingLeft: "1px" }}>
                    ▶
                  </div>
                </div>
              </div>

              {/* Card 2: Plan Design Develop Launch */}
              <div style={{ height: "68px", borderRadius: "12px", overflow: "hidden", position: "relative", border: "1px solid rgba(255, 255, 255, 0.12)", padding: "0.45rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&auto=format&fit=crop&q=80" alt="Wireframing" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
                <div style={{ position: "relative", zIndex: 2, fontFamily: "'Caveat', cursive", fontSize: "0.85rem", color: "#ffffff", lineHeight: 1.1, textAlign: "center" }}>
                  Plan<br />Design<br />Develop<br />Launch
                </div>
              </div>

              {/* Card 3: Small Brands Big Impact */}
              <div style={{ height: "68px", borderRadius: "12px", overflow: "hidden", position: "relative", border: "1px solid rgba(255, 255, 255, 0.12)", padding: "0.45rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80" alt="Desk" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
                <div style={{ position: "relative", zIndex: 2, fontFamily: "'Caveat', cursive", fontSize: "0.85rem", color: "#E5A93C", lineHeight: 1.1, textAlign: "center" }}>
                  Small<br />Brands<br />Big<br />Impact
                </div>
              </div>

              {/* Card 4: Better Web Experiences */}
              <div style={{ height: "68px", borderRadius: "12px", overflow: "hidden", position: "relative", border: "1px solid rgba(255, 255, 255, 0.12)", padding: "0.45rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=80" alt="Plant" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
                <div style={{ position: "relative", zIndex: 2, fontFamily: "'Caveat', cursive", fontSize: "0.95rem", color: "#6EE7B7", lineHeight: 1.1, textAlign: "center" }}>
                  Better<br />Web<br />Experiences
                </div>
              </div>
            </div>

            {/* 3. Stats Strip with 4 Metrics */}
            <div
              className="about-stats-strip"
              style={{
                borderRadius: "14px",
                padding: "0.55rem 0.85rem",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0.5rem",
                backdropFilter: "blur(14px)",
                position: "relative"
              }}
            >
              {/* Stat 1 */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <div style={{ width: 28, height: 28, borderRadius: "8px", background: "rgba(229, 169, 60, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E5A93C", fontSize: "0.85rem" }}>
                  💼
                </div>
                <div>
                  <div className="stat-val" style={{ fontWeight: 800, fontSize: "0.92rem", lineHeight: 1 }}>30+</div>
                  <div className="stat-lbl" style={{ fontSize: "0.6rem", marginTop: "2px" }}>Projects Delivered</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <div style={{ width: 28, height: 28, borderRadius: "8px", background: "rgba(110, 231, 183, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6EE7B7", fontSize: "0.85rem" }}>
                  👥
                </div>
                <div>
                  <div className="stat-val" style={{ fontWeight: 800, fontSize: "0.92rem", lineHeight: 1 }}>20+</div>
                  <div className="stat-lbl" style={{ fontSize: "0.6rem", marginTop: "2px" }}>Happy Clients</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <div style={{ width: 28, height: 28, borderRadius: "8px", background: "rgba(229, 169, 60, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E5A93C", fontSize: "0.85rem" }}>
                  📈
                </div>
                <div>
                  <div className="stat-val" style={{ fontWeight: 800, fontSize: "0.92rem", lineHeight: 1 }}>2+</div>
                  <div className="stat-lbl" style={{ fontSize: "0.6rem", marginTop: "2px" }}>Years Growing</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <div style={{ width: 28, height: 28, borderRadius: "8px", background: "rgba(110, 231, 183, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6EE7B7", fontSize: "0.85rem" }}>
                  ❤️
                </div>
                <div>
                  <div className="stat-val" style={{ fontWeight: 800, fontSize: "0.92rem", lineHeight: 1 }}>100%</div>
                  <div className="stat-lbl" style={{ fontSize: "0.6rem", marginTop: "2px" }}>Commitment</div>
                </div>
              </div>

              {/* Bottom-Right Cursive Annotation: Numbers that matter */}
              <div
                style={{
                  position: "absolute",
                  right: "-28px",
                  bottom: "-24px",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "1.1rem",
                  lineHeight: 1.1,
                  color: "rgba(255, 255, 255, 0.85)",
                  transform: "rotate(10deg)",
                  pointerEvents: "none",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem"
                }}
                className="about-bottom-annotation"
              >
                <svg width="22" height="20" viewBox="0 0 28 24" fill="none">
                  <path d="M4 18 C 12 16, 20 10, 24 4 M 24 4 L 16 5 M 24 4 L 22 12" stroke="#E5A93C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Numbers<br />that matter</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM TAGLINE DIVIDER ================= */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.2rem",
            marginTop: "clamp(0.4rem, 1vh, 0.8rem)",
            fontSize: "0.78rem",
            fontWeight: 600
          }}
          className="about-bottom-tagline"
        >
          <div style={{ width: 60, height: 1, background: "linear-gradient(to right, transparent, rgba(229, 169, 60, 0.5))" }} />
          <span>People × Ideas × Digital Products × Better Businesses</span>
          <div style={{ width: 60, height: 1, background: "linear-gradient(to left, transparent, rgba(229, 169, 60, 0.5))" }} />
        </div>
      </div>

      {/* ================= CSS STYLES & THEME RULES ================= */}
      <style>{`
        /* ================= DARK THEME (DEFAULT) ================= */
        .about-section {
          background-color: #020704;
          color: #ffffff;
        }
        .about-main-title {
          color: #ffffff;
        }
        .about-main-desc {
          color: rgba(255, 255, 255, 0.72);
        }
        .about-pillar-card {
          background: linear-gradient(165deg, rgba(8, 26, 18, 0.85) 0%, rgba(3, 14, 9, 0.96) 100%);
          border: 1px solid rgba(110, 231, 183, 0.18);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .about-pillar-card:hover {
          transform: translateY(-4px);
          border-color: rgba(110, 231, 183, 0.5) !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.75), 0 0 20px rgba(110, 231, 183, 0.15) !important;
        }
        .pillar-icon-box {
          background: rgba(110, 231, 183, 0.1);
          border: 1px solid rgba(110, 231, 183, 0.3);
          color: #6EE7B7;
        }
        .pillar-title {
          color: #ffffff;
        }
        .pillar-desc {
          color: rgba(255, 255, 255, 0.65);
        }
        .about-stats-strip {
          background: rgba(8, 24, 16, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6);
        }
        .about-stats-strip .stat-val {
          color: #ffffff;
        }
        .about-stats-strip .stat-lbl {
          color: rgba(255, 255, 255, 0.55);
        }
        .about-bottom-tagline {
          color: rgba(255, 255, 255, 0.65);
        }

        /* ================= LIGHT THEME (EVEN SECTION: CRISP WHITE) ================= */
        html:not(.dark) .about-section {
          background-color: #FFFFFF;
          color: #143026;
        }
        html:not(.dark) .about-main-title {
          color: #143026;
        }
        html:not(.dark) .about-main-desc {
          color: #4A6357;
        }
        html:not(.dark) .about-top-annotation,
        html:not(.dark) .about-bottom-annotation {
          color: #143026 !important;
        }
        html:not(.dark) .about-pillar-card {
          background: linear-gradient(165deg, rgba(246, 245, 240, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%);
          border: 1px solid rgba(20, 48, 38, 0.12);
          box-shadow: 0 8px 25px rgba(20, 48, 38, 0.05);
        }
        html:not(.dark) .about-pillar-card:hover {
          border-color: #0E6B4B !important;
          box-shadow: 0 15px 35px rgba(20, 48, 38, 0.1) !important;
        }
        html:not(.dark) .pillar-icon-box {
          background: rgba(20, 48, 38, 0.06);
          border: 1px solid rgba(20, 48, 38, 0.15);
          color: #0E6B4B;
        }
        html:not(.dark) .pillar-title {
          color: #143026;
        }
        html:not(.dark) .pillar-desc {
          color: #5B7569;
        }
        html:not(.dark) .about-stats-strip {
          background: #F6F5F0;
          border: 1px solid rgba(20, 48, 38, 0.1);
          box-shadow: 0 8px 25px rgba(20, 48, 38, 0.06);
        }
        html:not(.dark) .about-stats-strip .stat-val {
          color: #143026;
        }
        html:not(.dark) .about-stats-strip .stat-lbl {
          color: #5B7569;
        }
        html:not(.dark) .about-bottom-tagline {
          color: #5B7569;
        }
        html:not(.dark) .val-title {
          color: #143026 !important;
        }
        html:not(.dark) .val-desc {
          color: #5B7569 !important;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 1180px) {
          .about-section { height: auto !important; max-height: none !important; padding: 4rem 1.25rem 3rem !important; }
          .about-main-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .about-top-annotation, .about-bottom-annotation { display: none !important; }
          .about-bottom-bar { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
        }
        @media (max-width: 640px) {
          .about-section { padding: 3.5rem 0.85rem 2.5rem !important; }
          .about-pillars-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .about-stats-strip { grid-template-columns: repeat(2, 1fr) !important; gap: 0.85rem !important; padding: 1rem !important; }
        }
      `}</style>
    </section>
  );
}
