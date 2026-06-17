import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We chat about your business, your audience, and what you want to achieve. No complex forms—just a straightforward conversation to align our goals.",
    duration: "1–2 days",
    thought: "A great website starts with deep listening. We dive into your business model to design a presence that speaks directly to your ideal customers.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 7V11L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We plan out the pages, structure, and user flow. We make sure everything is simple, easy to navigate, and serves a clear purpose.",
    duration: "2–3 days",
    thought: "Design without strategy is just art. We map out every click and user path to guide your visitors straight to actions that grow your business.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 17L8 11L12 13L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Design",
    desc: "We create custom visual designs tailored to your brand style. We focus on clean layouts, beautiful typography, and visual hierarchy.",
    duration: "5–10 days",
    thought: "No templates, no boring grids. We craft a bespoke visual system that commands attention and makes your brand look highly premium.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="4" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 9H18M9 9V18" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Development",
    desc: "We turn the designs into fast, clean, and responsive code. We make sure the site runs smoothly on all devices and builds without issues.",
    duration: "7–14 days",
    thought: "Clean code means lightning-fast speeds. We engineer modern layouts with semantic HTML and optimized assets to ensure seamless performance.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M7 8L4 11L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 8L18 11L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 5L9 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Launch",
    desc: "We run final checks, optimize site speed, configure domain settings, and push the site live. We stay on hand to support you as you launch.",
    duration: "1–2 days",
    thought: "Launch is just day one. We optimize SEO tags, speed scores, and domain configuration to ensure your site makes an impact from the very first second.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 17L10.5 11.5M10.5 11.5L14 5L18 8L11.5 11.5M10.5 11.5L7.5 12.5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="8" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section id="process" style={{ background: "var(--bg-secondary)", padding: "7rem 2rem", fontFamily: "'Manrope', sans-serif", transition: "background-color 0.3s ease", position: "relative", overflow: "hidden" }}>
      {/* Background Glow Bubbles for Glassmorphism */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "25%", left: "15%", width: 450, height: 450,
          borderRadius: "50%", background: "color-mix(in srgb, var(--accent) 14%, transparent)",
          filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute", bottom: "15%", right: "15%", width: 400, height: 400,
          borderRadius: "50%", background: "color-mix(in srgb, var(--primary) 12%, transparent)",
          filter: "blur(70px)",
        }} />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 560, marginBottom: "5rem" }} className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <div style={{ width: 24, height: 1.5, background: "var(--accent)" }} />
            <span style={{ color: "var(--accent)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Process</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1rem" }}>
            From brief to launch<br />in a structured sprint
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75 }}>
            No guesswork, no sudden delays. Just a structured, transparent timeline built to deliver peak visual performance.
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.5rem" }} className="process-grid">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal reveal-delay-${(i % 5) + 1} process-flip-card`}
              >
                <div className="process-flip-card-inner">
                  {/* Front Side */}
                  <div className="process-flip-card-front">
                    {/* Icon Circle */}
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "color-mix(in srgb, var(--primary) 10%, transparent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                      color: "var(--primary)",
                      transition: "background 0.3s, color 0.3s",
                    }}>
                      {step.icon}
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "flex-start", width: "100%" }}>
                      <div style={{ color: "var(--accent)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "0.4rem" }}>{step.num}</div>
                      <h3 style={{ color: "var(--text-primary)", fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.6rem" }}>{step.title}</h3>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.55, marginBottom: "1.25rem", flex: 1 }}>{step.desc}</p>
                      
                      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", background: "color-mix(in srgb, var(--primary) 10%, transparent)", borderRadius: 100, padding: "0.3rem 0.65rem", width: "fit-content", transition: "background-color 0.3s" }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} />
                        <span style={{ fontSize: "0.7rem", color: "var(--text-primary)", fontWeight: 700, transition: "color 0.3s" }}>{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="process-flip-card-back">
                    <span style={{ color: "#C8A15A", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Insight</span>
                    <h3 style={{ color: "#fff", fontSize: "1.10rem", fontWeight: 800, letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>{step.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.8rem", lineHeight: 1.5, fontStyle: "italic", flex: 1, margin: 0 }}>"{step.thought}"</p>
                    
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "#C8A15A", fontSize: "0.75rem", fontWeight: 600, marginTop: "auto" }}>
                      <span>Sprint Stage</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .process-flip-card {
          background-color: transparent;
          perspective: 1000px;
          height: 290px;
          width: 100%;
        }
        .process-flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
          cursor: pointer;
        }
        .process-flip-card:hover .process-flip-card-inner {
          transform: rotateY(180deg);
        }
        .process-flip-card-front, .process-flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 20px;
          box-sizing: border-box;
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          overflow: hidden;
        }
        .process-flip-card-front {
          background: var(--glass-card-on-cream);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          color: var(--text-primary);
          padding: 1.75rem 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          text-align: left;
          transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .process-flip-card-back {
          background: #143D35;
          color: #F5F4EE;
          transform: rotateY(180deg);
          border-color: rgba(200, 161, 90, 0.2);
          box-shadow: 0 16px 40px rgba(20, 61, 53, 0.15);
          padding: 1.75rem 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          text-align: left;
        }

        @media (max-width: 1200px) {
          .process-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
