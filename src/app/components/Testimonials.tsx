import avatarRahul from "@/assets/avatar_rahul.png";
import avatarAmit from "@/assets/avatar_amit.png";
import avatarVikram from "@/assets/avatar_vikram.png";
import avatarAditya from "@/assets/avatar_aditya.png";
import avatarNeha from "@/assets/avatar_neha.png";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Owner, The Brewroom Cafe",
    avatar: avatarRahul,
    quote: "We used to share our menu as a messy PDF on WhatsApp, which looked really unprofessional. The website Vishal Works built changed everything. Customers constantly compliment the clean design, and the online menu works beautifully on phones. It makes us look like an established brand.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Founder, Peak Fitness Studio",
    avatar: avatarAmit,
    quote: "Our older site was slow and booking slots for personal training was a headache for our members. The new platform is incredibly fast and the booking system just works. Our members love it, and we've seen a noticeable jump in new sign-ups since launching.",
    rating: 5,
  },
  {
    name: "Chef Vikram Malhotra",
    role: "Head Chef & Partner, Charcoal & Spice",
    avatar: avatarVikram,
    quote: "We wanted a website that looked premium and allowed customers to reserve tables directly instead of calling us during rush hours. The design is gorgeous, and the direct table booking flow has saved us so much time. Outstanding work by Vishal and his team.",
    rating: 5,
  },
  {
    name: "Aditya Sen",
    role: "Co-Founder, Vagabond Journeys",
    avatar: avatarAditya,
    quote: "Vagabond Journeys needed a visual showcase for our premium tour packages. The cinematic layout they built is exactly what we wanted. It really highlights the destinations, and travelers are now sending inquiries directly through the site instead of just browsing.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Founder, Earth & Clay Organics",
    avatar: avatarNeha,
    quote: "Selling our handmade wellness products online was tough with our old checkout flow. Vishal Works redesigned the whole store and simplified the payment steps. The site loads instantly and customers are having a much smoother checkout experience now.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" style={{ position: "relative", overflow: "hidden", background: "var(--bg-secondary)", padding: "7rem 2rem", fontFamily: "'Manrope', sans-serif", transition: "background-color 0.3s ease" }}>
      {/* Background Glow Bubbles for Glassmorphism */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "15%", left: "-5%", width: 350, height: 350,
          borderRadius: "50%", background: "color-mix(in srgb, var(--accent) 15%, transparent)",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "-5%", width: 400, height: 400,
          borderRadius: "50%", background: "color-mix(in srgb, var(--primary) 12%, transparent)",
          filter: "blur(70px)",
        }} />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 4rem" }} className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem", justifyContent: "center" }}>
            <div style={{ width: 24, height: 1.5, background: "var(--accent)" }} />
            <span style={{ color: "var(--accent)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Testimonials</span>
            <div style={{ width: 24, height: 1.5, background: "var(--accent)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1rem" }}>
            What our clients say
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7 }}>
            Don't take our word for it. Here's what business owners say after working with us.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                background: "var(--glass-card-on-cream)",
                backdropFilter: "var(--glass-blur)",
                WebkitBackdropFilter: "var(--glass-blur)",
                borderRadius: 16,
                padding: "2rem",
                border: "1px solid var(--glass-border)",
                boxShadow: "var(--glass-shadow)",
                transition: "background-color 0.3s, border-color 0.3s, box-shadow 0.3s, transform 0.3s ease",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = "var(--primary)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "var(--glass-border)"; }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "0.2rem" }}>
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="var(--accent)">
                    <path d="M7 1.5L8.5 5H12L9.5 7L10.5 10.5L7 8.5L3.5 10.5L4.5 7L2 5H5.5L7 1.5Z"/>
                  </svg>
                ))}
              </div>

              <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", lineHeight: 1.7, fontStyle: "italic", flex: 1 }}>
                "{t.quote}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid var(--glass-border)", transition: "border-color 0.3s" }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{ width: 42, height: 42, borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)" }}>{t.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .testimonials-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
