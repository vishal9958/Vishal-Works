import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    client: "Cafe",
    category: "Cafe · Web Design + Brand Identity",
    tagline: "Where handcrafted flavor meets digital patience.",
    problem: "The client needed a digital sanctuary that captures the unhurried warmth of their physical cafe while driving online orders and loyalty signups.",
    solution: "We designed a custom online ordering platform, integrated interactive digital menus, and created an elegant brand storytelling showcase.",
    results: ["+220% online orders", "65% repeat rate", "Featured in Condé Nast"],
    image: "https://images.unsplash.com/photo-1565650839149-2c48a094196c?w=700&h=420&fit=crop&auto=format",
    color: "#8B5E3C",
    link: "https://cafe-designn.vercel.app/",
  },
  {
    id: 2,
    client: "Gym",
    category: "Gym · Performance Identity + Web",
    tagline: "Transforming limits, built for elite athletes.",
    problem: "The gym needed an online space that reflects their focus on strength, discipline, and evidence-based performance to drive elite memberships.",
    solution: "Complete design overhaul: booking integration, training program portals, client progression tracking, and high-energy athletic aesthetics.",
    results: ["+180% member signups", "98% client success rate", "Integrated booking"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&h=420&fit=crop&auto=format",
    color: "#143D35",
    link: "https://gym-design-temp.vercel.app/",
  },
  {
    id: 3,
    client: "Restaurant",
    category: "Restaurant · Reservation + Web System",
    tagline: "Tables full every night, crafted with care.",
    problem: "The client lacked direct booking control, losing revenue to third-party dining apps and having inconsistent reservation flows.",
    solution: "We built an atmospheric digital menu showcase, a seamless direct reservation system, and a table booking flow.",
    results: ["+310% reservations", "Online table booking", "0% third-party fees"],
    image: "https://images.unsplash.com/photo-1776993298422-5b7df704c2c1?w=700&h=420&fit=crop&auto=format",
    color: "#2C1810",
    link: "https://restaurant-demooo.vercel.app/",
  },
  {
    id: 4,
    client: "Travel",
    category: "Travel · Cinematic Booking + Blog",
    tagline: "Inspiring journeys and cinematic stories.",
    problem: "The agency lacked a rich visual layout to inspire high-value travelers, leading to low inquiries on custom packages.",
    solution: "We engineered a highly visual travel blog, integrated interactive itineraries, and built a custom booking inquiry flow.",
    results: ["+190% tour inquiries", "Rich itinerary builder", "Mobile-optimized blog"],
    image: "https://images.unsplash.com/photo-1734378016894-98c048b7f7a3?w=700&h=420&fit=crop&auto=format",
    color: "#0B3D4F",
    link: "https://cinematic-travel-site.vercel.app/",
  },
  {
    id: 5,
    client: "E-commerce",
    category: "E-commerce · High-Conversion Store",
    tagline: "Reveal your timeless beauty.",
    problem: "The wellness brand was seeing high cart abandonment due to complex checkout paths and lack of social proof.",
    solution: "We built a conversion-focused store with optimized single-page checkout, clinically-backed product pages, and automated retention loops.",
    results: ["+280% conversion rate", "Optimized checkout", "94% visible results in 30d"],
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=700&h=420&fit=crop&auto=format",
    color: "#B87C4C",
    link: "https://ecommerce-design-templete.vercel.app/",
  },
  {
    id: 6,
    client: "Startup",
    category: "Startup · SaaS Landing Page",
    tagline: "Ultra-fast launches, built to convert.",
    problem: "The SaaS startup needed a high-performance landing page that clearly explains their value proposition, shows off product features, and captures early waitlist users.",
    solution: "We engineered an interactive layout with dynamic feature galleries, a fast signup flow, and optimized it for a perfect PageSpeed score.",
    results: ["+150% waitlist signups", "100% customized layout", "500ms page load speed"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=700&h=420&fit=crop&auto=format",
    color: "#0E2E28",
    link: "https://startup-design-temp.vercel.app/",
  }
];

export function FeaturedWork() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  useEffect(() => {
    projects.forEach((proj) => {
      const img = new Image();
      img.src = proj.image;
    });
  }, []);

  return (
    <section id="work" style={{ background: "#ffffff", padding: "7rem 2rem", fontFamily: "'Manrope', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3.5rem" }} className="reveal">
          <div style={{ maxWidth: 500 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 24, height: 1.5, background: "#C8A15A" }} />
              <span style={{ color: "#C8A15A", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Featured Work</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800, color: "#1B1B1B", letterSpacing: "-0.025em", lineHeight: 1.15 }}>
              Results, not just<br />
              <span style={{ color: "#143D35" }}>beautiful work</span>
            </h2>
          </div>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {projects.map((pr, i) => (
              <button
                key={pr.id}
                onClick={() => setActive(i)}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  background: active === i ? "#143D35" : "#F5F4EE",
                  color: active === i ? "#fff" : "#1B1B1B",
                  border: "1px solid",
                  borderColor: active === i ? "#143D35" : "rgba(20,61,53,0.12)",
                  borderRadius: 100,
                  padding: "0.45rem 1rem",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {`0${i + 1}`}
              </button>
            ))}
          </div>
        </div>

        <div key={p.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="work-grid fade-in-animation">
          {/* Image side */}
          <div>
            <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.12)" }}>
              <img
                src={p.image}
                alt={p.client}
                style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: `${p.color}40` }} />
              <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", background: "rgba(255,255,255,0.95)", borderRadius: 8, padding: "0.5rem 0.875rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1B1B1B", letterSpacing: "0.02em" }}>{p.category}</span>
              </div>
            </div>

            {/* Results */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }} className="results-container">
              {p.results.map((r) => (
                <div key={r} style={{ flex: 1, background: "#F5F4EE", borderRadius: 12, padding: "1rem", border: "1px solid rgba(20,61,53,0.08)", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#143D35" }}>{r}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content side */}
          <div>
            <div style={{ display: "inline-block", background: "#143D35", color: "#C8A15A", borderRadius: 6, padding: "0.3rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Case Study
            </div>
            <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#1B1B1B", letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: "0.75rem" }}>
              {p.client}
            </h3>
            <p style={{ fontSize: "1rem", color: "#143D35", fontWeight: 600, fontStyle: "italic", marginBottom: "2rem" }}>"{p.tagline}"</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { label: "The Problem", text: p.problem, icon: "⚠️" },
                { label: "Our Solution", text: p.solution, icon: "✦" },
              ].map((item) => (
                <div key={item.label} style={{ borderLeft: "2px solid rgba(20,61,53,0.15)", paddingLeft: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <span>{item.icon}</span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#C8A15A", letterSpacing: "0.06em", textTransform: "uppercase" }}>{item.label}</span>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#666666", lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-diagonal"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "2rem",
                background: "#143D35", color: "#F5F4EE", padding: "0.75rem 1.5rem",
                borderRadius: 8, textDecoration: "none", fontSize: "0.875rem", fontWeight: 600,
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1a5247")}
              onMouseLeave={e => (e.currentTarget.style.background = "#143D35")}
            >
              Explore Live Template
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-animation {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (max-width: 900px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .results-container > div {
            flex: 1 1 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
