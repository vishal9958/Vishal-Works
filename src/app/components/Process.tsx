const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We chat about your business, your audience, and what you want to achieve. No complex forms—just a straightforward conversation to align our goals.",
    duration: "1–2 days",
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
    <section id="process" style={{ background: "#143D35", padding: "7rem 2rem", fontFamily: "'Manrope', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ maxWidth: 560, marginBottom: "5rem" }} className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <div style={{ width: 24, height: 1.5, background: "#C8A15A" }} />
            <span style={{ color: "#C8A15A", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Process</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1rem" }}>
            From brief to launch<br />in a structured sprint
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.75 }}>
            No guesswork, no sudden delays. Just a structured, transparent timeline built to deliver peak visual performance.
          </p>
        </div>

        {/* Steps */}
        <div style={{ position: "relative" }}>
          {/* Connecting line */}
          <div style={{ position: "absolute", top: 32, left: 32, right: "calc(20% - 19px)", height: 1.5, background: "rgba(200,161,90,0.2)" }} className="process-line" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.5rem" }} className="process-grid">
            {steps.map((step, i) => (
              <div key={step.num} style={{ position: "relative" }} className={`reveal reveal-delay-${i + 1}`}>
                {/* Number circle */}
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: i === 0 ? "#C8A15A" : "rgba(255,255,255,0.08)",
                  border: `2px solid ${i === 0 ? "#C8A15A" : "rgba(200,161,90,0.3)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.5rem", position: "relative", zIndex: 1,
                  color: i === 0 ? "#143D35" : "rgba(255,255,255,0.6)",
                  transition: "background 0.2s, border-color 0.2s",
                  cursor: "default",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#C8A15A";
                    e.currentTarget.style.color = "#143D35";
                    e.currentTarget.style.borderColor = "#C8A15A";
                  }}
                  onMouseLeave={e => {
                    if (i !== 0) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                      e.currentTarget.style.borderColor = "rgba(200,161,90,0.3)";
                    }
                  }}
                >
                  {step.icon}
                </div>

                <div style={{ padding: "0 0.25rem" }}>
                  <div style={{ color: "#C8A15A", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "0.35rem" }}>{step.num}</div>
                  <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>{step.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>{step.desc}</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", background: "rgba(200,161,90,0.1)", borderRadius: 100, padding: "0.25rem 0.6rem" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#C8A15A" }} />
                    <span style={{ fontSize: "0.7rem", color: "#C8A15A", fontWeight: 600 }}>{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .process-line { display: none; }
        }
        @media (max-width: 560px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
