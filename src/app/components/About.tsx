import vishalAvatar from "@/assets/vishal_avatar.png";
import kunalAvatar from "@/assets/kunal_avatar.png";
import vishalFullBody from "@/assets/vishal_fullbody.png";
import kunalFullBody from "@/assets/kunal_fullbody.png";

const team = [
  {
    name: "Vishal",
    role: "Founder & Design Editor",
    bio: "Creative lead and editor. Dedicated to crafting pixel-perfect web designs, responsive layouts, and modern front-ends that make a mark.",
    image: vishalAvatar,
    fullBody: vishalFullBody,
    dialogue: "Zero templates. Zero compromises. Only premium custom code.",
  },
  {
    name: "Kunal",
    role: "UI/UX Designer",
    bio: "User experience specialist. Passionate about transforming ideas into elegant, intuitive wireframes and user journeys that engage visitors.",
    image: kunalAvatar,
    fullBody: kunalFullBody,
    dialogue: "Designing intuitive interfaces that turn visitors into loyal customers.",
  },
];

export function About() {
  return (
    <section id="about" style={{ position: "relative", overflow: "hidden", background: "var(--bg-primary)", padding: "7rem 2rem", fontFamily: "'Manrope', sans-serif", transition: "background-color 0.3s ease" }}>
      {/* Background Glow Bubbles for Glassmorphism */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "30%", right: "-5%", width: 350, height: 350,
          borderRadius: "50%", background: "color-mix(in srgb, var(--primary) 12%, transparent)",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute", bottom: "20%", left: "-5%", width: 300, height: 300,
          borderRadius: "50%", background: "color-mix(in srgb, var(--accent) 15%, transparent)",
          filter: "blur(50px)",
        }} />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Founder story */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", marginBottom: "6rem" }} className="about-grid">
          <div className="reveal">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 24, height: 1.5, background: "var(--accent)" }} />
              <span style={{ color: "var(--accent)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>About the Work</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.75rem" }}>
              Every business deserves a<br />
              <span style={{ color: "var(--primary)" }}>strong digital presence</span>
            </h2>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              We started this studio with a simple belief — every business deserves a strong digital presence, regardless of its size. Our goal is to create modern, thoughtful, and user-focused digital solutions that help small businesses, startups, and local brands stand out.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              As a growing studio, we focus on quality over quantity. We approach every project with care and attention to detail, building exceptional digital experiences to grow alongside the businesses we work with.
            </p>

            {/* Values */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                ["Mission", "To help businesses establish a strong and professional digital presence through thoughtful design, modern technology, and user-centered experiences."],
                ["Vision", "To build a creative digital studio known for delivering high-quality websites, digital products, and brand experiences that help businesses grow with confidence."],
              ].map(([title, text]) => (
                <div key={title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, background: "var(--bg-secondary)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background-color 0.3s" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", transition: "background-color 0.3s" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)", marginBottom: "0.2rem" }}>{title}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }} className="reveal reveal-delay-2">
            <img
              src="https://images.unsplash.com/photo-1742440710136-1976b1cad864?w=600&h=480&fit=crop&auto=format"
              alt="Vishal Works team working"
              style={{ width: "100%", borderRadius: 20, objectFit: "cover", height: 460, display: "block" }}
            />
            <div className="glass-panel" style={{
              position: "absolute", bottom: "2rem", right: "2rem",
              borderRadius: 14, padding: "1.25rem 1.5rem",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ background: "var(--primary)", borderRadius: 10, padding: "0.6rem", display: "flex", transition: "background-color 0.3s" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" fill="var(--primary-foreground)"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>Founded 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: "2.5rem", textAlign: "center" }} className="reveal">
            The people behind the work
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem", maxWidth: 680, margin: "0 auto" }} className="team-grid">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`reveal reveal-delay-${i + 1} flip-card`}
              >
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front" style={{ padding: "1.5rem" }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", marginBottom: "0.75rem", border: "2px solid var(--accent)", transition: "border-color 0.3s" }}
                    />
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.15rem" }}>{member.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "0.75rem", transition: "color 0.3s" }}>{member.role}</div>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{member.bio}</p>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back" style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", gap: "0.75rem", textAlign: "left", padding: "1rem", overflow: "hidden" }}>
                    <img
                      src={member.fullBody}
                      alt={member.name}
                      style={{ 
                        height: 280, 
                        width: 180, 
                        objectFit: "contain", 
                        flexShrink: 0,
                        alignSelf: "flex-end",
                        marginBottom: "-1.05rem"
                      }}
                    />
                    <div style={{ alignSelf: "center", flex: 1, paddingBottom: "0.5rem" }}>
                      <div style={{ fontSize: "0.75rem", color: "#C8A15A", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "0.35rem" }}>{member.role}</div>
                      <p style={{ fontSize: "0.85rem", color: "rgba(245,244,238,0.9)", lineHeight: 1.4, fontWeight: 500, fontStyle: "italic" }}>"{member.dialogue}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
          height: 300px;
          width: 100%;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
          cursor: pointer;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
        }
        .flip-card-front {
          background: var(--glass-card-on-white);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          color: var(--text-primary);
          transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .flip-card-back {
          background: #143D35;
          color: #F5F4EE;
          transform: rotateY(180deg);
          border-color: rgba(200,161,90,0.2);
          box-shadow: 0 16px 40px rgba(20,61,53,0.15);
        }

        @media (max-width: 1000px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
