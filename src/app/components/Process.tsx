import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  icon: string;
  checks: string[];
}

const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery",
    desc: "We chat about your business, your audience, and what you want to achieve.",
    icon: "🔍",
    checks: ["Understand goals", "Research & analysis", "Define requirements"]
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We plan out the pages, structure, and user flow. We make sure everything is simple, easy to navigate, and serves a clear purpose.",
    icon: "📊",
    checks: ["Site structure", "User flow planning", "Content strategy"]
  },
  {
    num: "03",
    title: "Design",
    desc: "We create custom visual designs tailored to your brand style. We focus on clean layouts, beautiful typography, and visual hierarchy.",
    icon: "🎨",
    checks: ["Wireframes", "UI/UX design", "Design feedback"]
  },
  {
    num: "04",
    title: "Development",
    desc: "We turn the designs into fast, clean, and responsive code. We make sure the site runs smoothly on all devices and builds without issues.",
    icon: "</>",
    checks: ["Frontend & backend", "Responsive development", "Testing & optimization"]
  },
  {
    num: "05",
    title: "Launch",
    desc: "We run final checks, optimize site speed, configure domain settings, and push the site live. We stay on hand to support you as you launch.",
    icon: "🚀",
    checks: ["Final QA & testing", "Deployment", "Ongoing support"]
  }
];

export function Process() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="process-section"
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
      {/* Background Celestial Orbit Sphere & Ambiance Lighting */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        {/* Top-Right Giant Planet Curve */}
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "5%",
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            background: "radial-gradient(circle at 40% 40%, rgba(110, 231, 183, 0.12) 0%, rgba(6, 28, 18, 0.4) 50%, transparent 75%)",
            filter: "blur(40px)",
          }}
        />
        {/* Bottom Glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "10%",
            width: "45vw",
            height: "45vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(229, 169, 60, 0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
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
        {/* ================= TOP HEADER BAR ================= */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "clamp(0.4rem, 1vh, 0.8rem)"
          }}
          className="process-header"
        >
          {/* Left Title Area */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
              <div style={{ width: 22, height: 2, background: "#E5A93C", borderRadius: 2 }} />
              <span style={{ color: "#E5A93C", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                OUR PROCESS
              </span>
            </div>

            <h2 className="process-main-title" style={{ fontSize: "clamp(1.6rem, 2.2vw, 2.3rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.12, margin: "0 0 0.25rem 0" }}>
              From brief to launch<br />
              in a <span style={{ color: "#6EE7B7" }}>structured sprint</span>
            </h2>

            <p className="process-main-desc" style={{ fontSize: "0.82rem", lineHeight: 1.4, margin: 0, maxWidth: "540px" }}>
              No guesswork, no sudden delays. Just a structured, transparent timeline built to deliver peak visual performance.
            </p>
          </div>

          {/* Right Cursive Hint & Flow Pill Badge */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
            {/* Cursive Annotation */}
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.1rem",
                color: "rgba(255, 255, 255, 0.85)",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                paddingRight: "0.5rem"
              }}
              className="process-top-annotation"
            >
              <span>A clear process<br />for a stronger result.</span>
              <svg width="26" height="24" viewBox="0 0 32 28" fill="none" style={{ transform: "rotate(15deg)" }}>
                <path d="M4 4 C 14 6, 24 12, 26 24 M 26 24 L 18 22 M 26 24 L 25 16" stroke="#6EE7B7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Process Flow Pill Badge */}
            <div
              className="process-flow-pill"
              style={{
                borderRadius: "100px",
                padding: "0.38rem 0.95rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                backdropFilter: "blur(12px)"
              }}
            >
              <span style={{ color: "#27C93F", fontSize: "0.75rem" }}>●</span>
              <span>Your Idea</span>
              <ArrowRight size={12} strokeWidth={2.2} style={{ color: "rgba(255,255,255,0.4)" }} />
              <span style={{ color: "#6EE7B7", fontWeight: 700 }}>Our Process</span>
              <ArrowRight size={12} strokeWidth={2.2} style={{ color: "rgba(255,255,255,0.4)" }} />
              <span>Real Impact</span>
            </div>
          </div>
        </div>

        {/* ================= DOTTED TIMELINE ARC WITH STEP NODES ================= */}
        <div style={{ position: "relative", width: "100%", height: "32px", margin: "0.2rem 0" }} className="timeline-arc-wrapper">
          <svg width="100%" height="32" viewBox="0 0 1000 32" preserveAspectRatio="none" fill="none" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
            {/* Smooth Wavy Dashed Line */}
            <path
              d="M 50 16 Q 250 2, 500 16 T 950 12"
              stroke="#6EE7B7"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              opacity="0.6"
            />
          </svg>

          {/* 5 Numbered Circle Nodes along the timeline */}
          <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "space-between", padding: "0 8%", alignItems: "center" }}>
            {["01", "02", "03", "04", "05"].map((num, i) => (
              <div
                key={num}
                className="timeline-node"
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: hoveredCard === i ? "#6EE7B7" : "#04140D",
                  color: hoveredCard === i ? "#000" : "#6EE7B7",
                  border: "1.5px solid #6EE7B7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  boxShadow: hoveredCard === i ? "0 0 14px #6EE7B7" : "0 0 8px rgba(110, 231, 183, 0.3)",
                  transition: "all 0.25s ease",
                  transform: i === 2 ? "translateY(-4px)" : "translateY(0)"
                }}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* ================= 5 PROCESS CARDS GRID ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0.9rem",
            alignItems: "stretch",
            flex: 1,
            minHeight: 0,
            position: "relative"
          }}
          className="process-cards-grid"
        >
          {/* Side Cursive Annotation Left: "It all starts here" */}
          <div
            style={{
              position: "absolute",
              left: "-38px",
              bottom: "22%",
              fontFamily: "'Caveat', cursive",
              fontSize: "1.1rem",
              lineHeight: 1.1,
              color: "rgba(255, 255, 255, 0.85)",
              transform: "rotate(-10deg)",
              pointerEvents: "none",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              gap: "0.3rem"
            }}
            className="process-left-annotation"
          >
            <span>It all<br />starts here</span>
            <svg width="24" height="20" viewBox="0 0 30 24" fill="none">
              <path d="M4 12 C 12 12, 22 8, 26 4 M 26 4 L 18 3 M 26 4 L 24 11" stroke="#6EE7B7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Side Cursive Annotation Right: "Live & Growing" */}
          <div
            style={{
              position: "absolute",
              right: "-38px",
              bottom: "22%",
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
            className="process-right-annotation"
          >
            <svg width="24" height="20" viewBox="0 0 30 24" fill="none">
              <path d="M4 18 C 12 16, 20 10, 24 4 M 24 4 L 16 5 M 24 4 L 22 12" stroke="#6EE7B7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Live &<br />Growing</span>
          </div>

          {processSteps.map((step, idx) => {
            const isHovered = hoveredCard === idx;
            return (
              <div
                key={step.num}
                className={`process-card ${isHovered ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  borderRadius: "18px",
                  padding: "1rem 0.95rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backdropFilter: "blur(20px)",
                  position: "relative",
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer"
                }}
              >
                {/* Step Header: Icon Box + Step Number */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                    <div
                      className="process-card-icon-box"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        transition: "all 0.25s ease"
                      }}
                    >
                      {step.icon}
                    </div>
                    <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#E5A93C" }}>
                      {step.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="process-card-title" style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.3rem 0", lineHeight: 1.15 }}>
                    {step.title}
                  </h3>
                  <p className="process-card-desc" style={{ fontSize: "0.72rem", lineHeight: 1.35, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>

                {/* Step Visual Illustration Mockup */}
                <div
                  className="process-illustration-box"
                  style={{
                    height: "92px",
                    borderRadius: "12px",
                    margin: "0.6rem 0",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  {/* Step 1 Illustration: Chat / Brief Bubbles */}
                  {idx === 0 && (
                    <div style={{ width: "85%", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                        <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#6EE7B7", flexShrink: 0 }} />
                        <div style={{ background: "rgba(110, 231, 183, 0.2)", borderRadius: "6px", height: 12, width: "65%" }} />
                      </div>
                      <div style={{ display: "flex", gap: "6px", alignItems: "center", alignSelf: "flex-end", width: "80%", justifyContent: "flex-end" }}>
                        <div style={{ background: "rgba(255, 255, 255, 0.15)", borderRadius: "6px", height: 12, width: "70%" }} />
                        <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#E5A93C", flexShrink: 0 }} />
                      </div>
                      <div style={{ background: "rgba(255, 255, 255, 0.08)", borderRadius: "4px", height: 6, width: "45%" }} />
                    </div>
                  )}

                  {/* Step 2 Illustration: Wireframe / Target Bullseye */}
                  {idx === 1 && (
                    <div style={{ width: "85%", display: "flex", justifyContent: "space-between", alignItems: "flex-end", padding: "0 4px" }}>
                      <div style={{ display: "flex", gap: "4px", alignItems: "flex-end", height: "55px" }}>
                        <div style={{ width: 8, height: "40%", background: "rgba(110, 231, 183, 0.3)", borderRadius: "2px" }} />
                        <div style={{ width: 8, height: "70%", background: "rgba(110, 231, 183, 0.5)", borderRadius: "2px" }} />
                        <div style={{ width: 8, height: "100%", background: "#6EE7B7", borderRadius: "2px" }} />
                        <div style={{ width: 8, height: "60%", background: "rgba(110, 231, 183, 0.4)", borderRadius: "2px" }} />
                      </div>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", border: "2px dashed #6EE7B7", display: "flex", alignItems: "center", justifyContent: "center", color: "#6EE7B7", fontSize: "0.95rem" }}>
                        🎯
                      </div>
                    </div>
                  )}

                  {/* Step 3 Illustration: UI Artboard + Color Swatches */}
                  {idx === 2 && (
                    <div style={{ width: "88%", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ width: 34, height: 26, borderRadius: "6px", background: "rgba(110, 231, 183, 0.15)", border: "1px solid rgba(110, 231, 183, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem" }}>
                          🖼️
                        </div>
                        <span style={{ fontSize: "0.85rem", transform: "rotate(-15deg)" }}>🖱️</span>
                      </div>
                      <div style={{ display: "flex", gap: "4px", justifyContent: "center", background: "rgba(0,0,0,0.4)", padding: "3px 6px", borderRadius: "100px" }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF5F56" }} />
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FFBD2E" }} />
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#27C93F" }} />
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#6EE7B7" }} />
                      </div>
                    </div>
                  )}

                  {/* Step 4 Illustration: Code Terminal + Syntax Lines */}
                  {idx === 3 && (
                    <div style={{ width: "88%", background: "rgba(0,0,0,0.6)", borderRadius: "8px", padding: "6px 8px", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                        <div style={{ display: "flex", gap: "3px" }}>
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF5F56" }} />
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FFBD2E" }} />
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#27C93F" }} />
                        </div>
                        <span style={{ fontSize: "0.55rem", color: "#6EE7B7", fontWeight: 800 }}>&lt;/&gt;</span>
                      </div>
                      <div style={{ height: 4, width: "75%", background: "#6EE7B7", borderRadius: 2, marginBottom: "3px" }} />
                      <div style={{ height: 4, width: "55%", background: "#E5A93C", borderRadius: 2, marginBottom: "3px" }} />
                      <div style={{ height: 4, width: "85%", background: "rgba(255,255,255,0.4)", borderRadius: 2 }} />
                    </div>
                  )}

                  {/* Step 5 Illustration: Rocket Blast Off */}
                  {idx === 4 && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ fontSize: "1.45rem", transform: "rotate(-15deg)", filter: "drop-shadow(0 0 10px #6EE7B7)" }}>
                        🚀
                      </div>
                      <div style={{ width: 34, height: 6, borderRadius: "50%", background: "radial-gradient(circle, #6EE7B7 0%, transparent 80%)", filter: "blur(2px)", marginTop: "2px" }} />
                    </div>
                  )}
                </div>

                {/* Step 3 Bullet Points */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.32rem" }}>
                  {step.checks.map((chk, cIdx) => (
                    <div key={cIdx} style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                      <div
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          background: "rgba(110, 231, 183, 0.2)",
                          border: "1px solid #6EE7B7",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.55rem",
                          color: "#6EE7B7",
                          fontWeight: 800,
                          flexShrink: 0
                        }}
                      >
                        ✓
                      </div>
                      <span className="process-check-text" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
                        {chk}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Connecting Right Arrow between cards (for 1 to 4) */}
                {idx < 4 && (
                  <div
                    className="card-connector-arrow"
                    style={{
                      position: "absolute",
                      right: "-14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#04140D",
                      border: "1px solid rgba(110, 231, 183, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#6EE7B7",
                      zIndex: 8
                    }}
                  >
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM VALUE STRIP & ACTION BUTTONS ================= */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginTop: "clamp(0.6rem, 1.2vh, 1rem)",
            paddingTop: "clamp(0.4rem, 1vh, 0.8rem)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)"
          }}
          className="process-bottom-bar"
        >
          {/* Left 3 Value Pillars */}
          <div style={{ display: "flex", gap: "1.8rem", alignItems: "center" }} className="process-value-props">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(229, 169, 60, 0.12)", border: "1px solid rgba(229, 169, 60, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E5A93C", fontSize: "0.82rem" }}>
                ⚡
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700 }} className="val-title">Faster Delivery</div>
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.55)" }} className="val-desc">Optimized workflow</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(110, 231, 183, 0.12)", border: "1px solid rgba(110, 231, 183, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6EE7B7", fontSize: "0.82rem" }}>
                👥
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700 }} className="val-title">Clear Communication</div>
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.55)" }} className="val-desc">You're always in the loop</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(229, 169, 60, 0.12)", border: "1px solid rgba(229, 169, 60, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E5A93C", fontSize: "0.82rem" }}>
                🛡️
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700 }} className="val-title">Reliable Support</div>
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.55)" }} className="val-desc">Even after launch</div>
              </div>
            </div>
          </div>

          {/* Right Action CTAs */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }} className="process-ctas">
            {/* Primary CTA */}
            <a
              href="#contact"
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
              <span>Start Your Project</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>

      {/* ================= CSS STYLES & LIGHT THEME RULES ================= */}
      <style>{`
        /* ================= DARK THEME (ODD SECTION: LIGHTER DARK) ================= */
        .process-section {
          background-color: #06130D;
          color: #ffffff;
        }
        .process-main-title {
          color: #ffffff;
        }
        .process-main-desc {
          color: rgba(255, 255, 255, 0.65);
        }
        .process-flow-pill {
          background: rgba(8, 24, 16, 0.7);
          border: 1px solid rgba(110, 231, 183, 0.25);
          color: rgba(255, 255, 255, 0.85);
        }
        .process-card {
          background: linear-gradient(165deg, rgba(8, 26, 18, 0.85) 0%, rgba(3, 14, 9, 0.96) 100%);
          border: 1.5px solid rgba(110, 231, 183, 0.18);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
        }
        .process-card:hover {
          transform: translateY(-6px);
          border-color: rgba(110, 231, 183, 0.6) !important;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(110, 231, 183, 0.18) !important;
        }
        .process-card-icon-box {
          background: rgba(110, 231, 183, 0.1);
          border: 1px solid rgba(110, 231, 183, 0.3);
          color: #6EE7B7;
        }
        .process-card:hover .process-card-icon-box {
          background: #6EE7B7 !important;
          color: #020704 !important;
          box-shadow: 0 0 16px rgba(110, 231, 183, 0.5);
        }
        .process-card-title {
          color: #ffffff;
        }
        .process-card-desc {
          color: rgba(255, 255, 255, 0.68);
        }
        .process-illustration-box {
          background: rgba(0, 0, 0, 0.35);
        }
        .process-check-text {
          color: rgba(255, 255, 255, 0.82);
        }

        /* ================= LIGHT THEME ================= */
        html:not(.dark) .process-section {
          background-color: #F6F5F0;
          color: #143026;
        }
        html:not(.dark) .process-main-title {
          color: #143026;
        }
        html:not(.dark) .process-main-desc {
          color: #4A6357;
        }
        html:not(.dark) .process-top-annotation {
          color: #143026 !important;
        }
        html:not(.dark) .process-left-annotation,
        html:not(.dark) .process-right-annotation {
          color: #143026 !important;
        }
        html:not(.dark) .process-flow-pill {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(20, 48, 38, 0.15);
          color: #143026;
          box-shadow: 0 4px 15px rgba(20, 48, 38, 0.05);
        }
        html:not(.dark) .timeline-node {
          background: #FFFFFF !important;
          color: #0E6B4B !important;
          border-color: #0E6B4B !important;
          box-shadow: 0 2px 8px rgba(14, 107, 75, 0.2) !important;
        }
        html:not(.dark) .timeline-node:hover {
          background: #0E6B4B !important;
          color: #FFFFFF !important;
        }
        html:not(.dark) .process-card {
          background: linear-gradient(165deg, rgba(255, 255, 255, 0.95) 0%, rgba(244, 248, 245, 0.98) 100%);
          border: 1.5px solid rgba(20, 48, 38, 0.12);
          box-shadow: 0 15px 35px rgba(20, 48, 38, 0.06);
        }
        html:not(.dark) .process-card:hover {
          border-color: #0E6B4B !important;
          box-shadow: 0 20px 45px rgba(20, 48, 38, 0.12), 0 0 25px rgba(14, 107, 75, 0.1) !important;
        }
        html:not(.dark) .process-card-icon-box {
          background: rgba(20, 48, 38, 0.06);
          border: 1px solid rgba(20, 48, 38, 0.15);
          color: #0E6B4B;
        }
        html:not(.dark) .process-card:hover .process-card-icon-box {
          background: #0E6B4B !important;
          color: #FFFFFF !important;
        }
        html:not(.dark) .process-card-title {
          color: #143026;
        }
        html:not(.dark) .process-card-desc {
          color: #4A6357;
        }
        html:not(.dark) .process-illustration-box {
          background: rgba(20, 48, 38, 0.04);
          border: 1px solid rgba(20, 48, 38, 0.08);
        }
        html:not(.dark) .process-check-text {
          color: #2D473B;
        }
        html:not(.dark) .card-connector-arrow {
          background: #FFFFFF !important;
          border-color: rgba(20, 48, 38, 0.2) !important;
          color: #0E6B4B !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        html:not(.dark) .val-title {
          color: #143026 !important;
        }
        html:not(.dark) .val-desc {
          color: #5B7569 !important;
        }
        html:not(.dark) .process-bottom-bar {
          border-top-color: rgba(20, 48, 38, 0.1) !important;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 1200px) {
          .process-section { height: auto !important; max-height: none !important; padding: 4rem 1.25rem 3rem !important; }
          .process-cards-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 1.2rem !important; }
          .card-connector-arrow { display: none !important; }
          .timeline-arc-wrapper { display: none !important; }
          .process-left-annotation, .process-right-annotation { display: none !important; }
          .process-bottom-bar { flex-direction: column !important; align-items: flex-start !important; gap: 1.2rem !important; }
        }
        @media (max-width: 860px) {
          .process-cards-grid { grid-template-columns: 1fr !important; gap: 1.25rem !important; }
          .process-header { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
          .process-top-right { flex-direction: column !important; align-items: flex-start !important; width: 100% !important; }
          .process-top-annotation { display: none !important; }
        }
        @media (max-width: 640px) {
          .process-section { padding: 3.5rem 0.85rem 2.5rem !important; }
          .process-flow-pill { width: 100% !important; justify-content: space-between !important; padding: 0.4rem 0.65rem !important; }
          .process-value-props { flex-direction: column !important; align-items: flex-start !important; gap: 0.8rem !important; }
          .process-ctas { width: 100% !important; }
          .process-ctas a { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
