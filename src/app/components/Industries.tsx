import { useState } from "react";

const industries = [
  {
    id: "gym",
    label: "Gym",
    icon: "🏋️",
    color: "#143D35",
    headline: "Peak Performance Online",
    desc: "Membership portals, class booking systems, and high-energy brand sites that convert visitors into members.",
    metrics: ["+180% membership signups", "Integrated booking system", "Mobile-first experience"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=360&fit=crop&auto=format",
  },
  {
    id: "cafe",
    label: "Cafe",
    icon: "☕",
    color: "#5C3D2E",
    headline: "Brew More Business",
    desc: "Atmospheric websites with online menus, ordering, and loyalty program integrations for coffee brands.",
    metrics: ["+220% online orders", "Digital menu system", "Brand storytelling"],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=360&fit=crop&auto=format",
  },
  {
    id: "restaurant",
    label: "Restaurant",
    icon: "🍽️",
    color: "#2C1810",
    headline: "Tables Full Every Night",
    desc: "Reservation systems, digital menus, and hospitality-grade digital experiences that fill seats.",
    metrics: ["+310% reservations", "Online table booking", "Menu showcase"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=360&fit=crop&auto=format",
  },
  {
    id: "travel",
    label: "Travel",
    icon: "✈️",
    color: "#0B3D4F",
    headline: "Inspire More Journeys",
    desc: "Travel agency and tour operator sites with itinerary builders, booking flows, and destination showcases.",
    metrics: ["+190% package inquiries", "Itinerary builder", "Destination galleries"],
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=360&fit=crop&auto=format",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: "🛒",
    color: "#143D35",
    headline: "Sell More, Every Day",
    desc: "Conversion-optimized e-commerce stores with seamless checkout, product photography, and retention tools.",
    metrics: ["+280% conversion rate", "Optimized checkout", "Retention automation"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=360&fit=crop&auto=format",
  },
  {
    id: "startup",
    label: "Startup",
    icon: "🚀",
    color: "#0E2E28",
    headline: "Launch & Scale Faster",
    desc: "High-converting landing pages, interactive product showcases, and scalable frontends built for venture-backed startups.",
    metrics: ["+150% product signups", "Optimized conversion funnels", "Ultra-fast page loads"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=360&fit=crop&auto=format",
  }
];

export function Industries() {
  const [active, setActive] = useState(industries[0].id);
  const current = industries.find((i) => i.id === active)!;

  return (
    <section id="industries" style={{ background: "#F5F4EE", padding: "7rem 2rem", fontFamily: "'Manrope', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ maxWidth: 560, marginBottom: "3.5rem" }} className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <div style={{ width: 24, height: 1.5, background: "#C8A15A" }} />
            <span style={{ color: "#C8A15A", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Industries</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800, color: "#1B1B1B", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1rem" }}>
            We speak your<br />
            <span style={{ color: "#143D35" }}>industry's language</span>
          </h2>
          <p style={{ color: "#666666", fontSize: "1rem", lineHeight: 1.7 }}>
            Deep experience across sectors means faster delivery and better outcomes for your business.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "2rem", alignItems: "start" }} className="industries-grid reveal reveal-delay-1">
          {/* Category tabs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActive(ind.id)}
                style={{
                  background: active === ind.id ? "#143D35" : "transparent",
                  border: active === ind.id ? "none" : "1px solid rgba(20,61,53,0.1)",
                  borderRadius: 10,
                  padding: "0.85rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textAlign: "left",
                }}
                onMouseEnter={e => { if (active !== ind.id) e.currentTarget.style.background = "#ffffff"; }}
                onMouseLeave={e => { if (active !== ind.id) e.currentTarget.style.background = "transparent"; }}
              >
                <span style={{ fontSize: "1.1rem" }}>{ind.icon}</span>
                <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: active === ind.id ? "#fff" : "#1B1B1B" }}>
                  {ind.label}
                </span>
                {active === ind.id && (
                  <svg style={{ marginLeft: "auto" }} width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7H11M7.5 3.5L11 7L7.5 10.5" stroke="#C8A15A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Preview panel */}
          <div style={{
            background: "#ffffff",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(20,61,53,0.08)",
          }}>
            <div style={{ position: "relative", height: 280, background: "#ddd", overflow: "hidden" }}>
              <img
                src={current.image}
                alt={current.label}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: `${current.color}cc` }} />
              <div style={{ position: "absolute", inset: 0, padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{current.icon}</span>
                <h3 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.4rem", fontFamily: "'Manrope', sans-serif" }}>{current.headline}</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "'Manrope', sans-serif" }}>{current.desc}</p>
              </div>
            </div>
            <div style={{ padding: "1.75rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {current.metrics.map((m) => (
                <div key={m} style={{ background: "#F5F4EE", borderRadius: 8, padding: "0.6rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(20,61,53,0.08)" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8A15A" }} />
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#1B1B1B" }}>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
