const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 20H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 8H17M7 11H13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: "Web Design",
    desc: "Pixel-perfect, conversion-focused websites that reflect your brand's identity and drive real results.",
    tag: "Design",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&h=280&fit=crop&auto=format",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 9L5 12L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 9L19 12L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 6L11 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Web Development",
    desc: "Fast, scalable, and secure websites built on modern tech stacks — from landing pages to complex platforms.",
    tag: "Development",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&h=280&fit=crop&auto=format",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12C9 10.343 10.343 9 12 9C13.657 9 15 10.343 15 12C15 13.657 13.657 15 12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    title: "UI/UX Design",
    desc: "Intuitive interfaces and seamless user experiences rooted in research, strategy, and elegant interaction.",
    tag: "UX",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=280&fit=crop&auto=format",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L14.5 8.5H20.5L15.5 12L17.5 18L12 14.5L6.5 18L8.5 12L3.5 8.5H9.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Brand Identity",
    desc: "Logos, visual systems, and brand guidelines that communicate authority, trust, and differentiation.",
    tag: "Branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=280&fit=crop&auto=format",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Social Media Design",
    desc: "On-brand, scroll-stopping visual content designed to build presence and engagement across every platform.",
    tag: "Social",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=280&fit=crop&auto=format",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Startup Landing Page",
    desc: "High-converting, responsive landing pages designed to showcase your SaaS, product, or mobile app features.",
    tag: "Startup",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=280&fit=crop&auto=format",
  },
];

export function Services() {
  return (
    <section id="services" style={{ background: "#ffffff", padding: "7rem 2rem", fontFamily: "'Manrope', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ maxWidth: 560, marginBottom: "4rem" }} className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <div style={{ width: 24, height: 1.5, background: "#C8A15A" }} />
            <span style={{ color: "#C8A15A", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>What We Do</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800, color: "#1B1B1B", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1rem" }}>
            Services built for<br />
            <span style={{ color: "#143D35" }}>business impact</span>
          </h2>
          <p style={{ color: "#666666", fontSize: "1rem", lineHeight: 1.7 }}>
            Every service is crafted to deliver measurable results — not just beautiful work.
          </p>
        </div>

        {/* Cards grid */}
        <div className="services-grid" style={{ display: "grid", gap: "1.5rem" }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${(i % 3) + 1} service-flip-card`}
            >
              <div className="service-flip-card-inner">
                {/* Front Side */}
                <div className="service-flip-card-front">
                  {/* Tag */}
                  <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "#F5F4EE", borderRadius: 100, padding: "0.2rem 0.65rem", fontSize: "0.65rem", fontWeight: 700, color: "#143D35", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {s.tag}
                  </div>

                  <div style={{ width: 48, height: 48, background: "#F5F4EE", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", color: "#143D35" }}>
                    {s.icon}
                  </div>

                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1B1B1B", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "#666666", lineHeight: 1.55 }}>{s.desc}</p>
                  
                  {/* Learn More Button */}
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "#143D35", fontSize: "0.85rem", fontWeight: 700, marginTop: "auto" }}>
                    <span>Learn more</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Back Side */}
                <div className="service-flip-card-back" style={{ backgroundImage: `url(${s.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(rgba(20,61,53,0.35), rgba(20,61,53,0.92))",
                    display: "flex", flexDirection: "column", justifyContent: "flex-end",
                    padding: "1.5rem", boxSizing: "border-box", textAlign: "left"
                  }}>
                    <span style={{ color: "#C8A15A", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{s.tag}</span>
                    <h3 style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>{s.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "#C8A15A", fontSize: "0.8rem", fontWeight: 600 }}>
                      <span>Explore service</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .service-flip-card {
          background-color: transparent;
          perspective: 1000px;
          height: 250px;
          width: 100%;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-flip-card:hover {
          transform: translateY(-4px);
        }
        .service-flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
          cursor: pointer;
        }
        .service-flip-card:hover .service-flip-card-inner {
          transform: rotateY(180deg);
        }
        .service-flip-card-front, .service-flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 20px;
          box-sizing: border-box;
          border: 1px solid rgba(20, 61, 53, 0.08);
          box-shadow: 0 10px 30px rgba(20, 61, 53, 0.03);
          overflow: hidden;
        }
        .service-flip-card-front {
          background: #fff;
          color: #1B1B1B;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          text-align: left;
        }
        .service-flip-card-back {
          transform: rotateY(180deg);
          border-color: rgba(20, 61, 53, 0.1);
          box-shadow: 0 16px 40px rgba(20, 61, 53, 0.12);
        }

        @media (max-width: 991px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
