import { useState } from "react";
import { RotateCcw } from "lucide-react";

const servicesData = [
  {
    title: "Web Design",
    tag: "DESIGN",
    desc: "Pixel-perfect, conversion-focused websites that reflect your brand's identity and drive real results.",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=600&h=400&fit=crop&auto=format",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 20H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 8H17M7 11H13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    features: ["User Research", "Wireframes", "UI Design", "Interactive Prototypes", "Design Systems"],
    graphicType: "browser",
  },
  {
    title: "Web Development",
    tag: "DEVELOPMENT",
    desc: "Fast, scalable, and secure websites built on modern tech stacks — from landing pages to complex platforms.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&h=400&fit=crop&auto=format",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M8 9L5 12L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 9L19 12L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 6L11 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    features: ["React / Next.js", "Headless CMS", "Performance Optimization", "Secure Architecture", "API Integration"],
    graphicType: "code",
  },
  {
    title: "UI/UX Design",
    tag: "UX",
    desc: "User-centered designs that create seamless experiences and meaningful interactions.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop&auto=format",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12C9 10.343 10.343 9 12 9C13.657 9 15 10.343 15 12C15 13.657 13.657 15 12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    features: ["User Research", "Wireframes", "UI Design", "Interactive Prototypes", "Design Systems"],
    graphicType: "mobile",
  },
  {
    title: "Brand Identity",
    tag: "BRANDING",
    desc: "Logos, visual systems, and brand guidelines that communicate authority, trust, and differentiation.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop&auto=format",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L14.5 8.5H20.5L15.5 12L17.5 18L12 14.5L6.5 18L8.5 12L3.5 8.5H9.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    features: ["Logo Design", "Color Palette", "Typography System", "Brand Guidelines", "Marketing Assets"],
    graphicType: "brand",
  },
  {
    title: "Social Media Design",
    tag: "SOCIAL",
    desc: "On-brand, scroll-stopping visual content designed to build presence and engagement across every platform.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop&auto=format",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    features: ["Post Templates", "Story Designs", "Ad Creatives", "Profile Assets", "Grid Layouts"],
    graphicType: "cards",
  },
  {
    title: "Startup Landing Page",
    tag: "STARTUP",
    desc: "High-converting, responsive landing pages designed to showcase your SaaS, product, or mobile app features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: ["Value Prop Focus", "High Conversion", "Waitlist Integration", "Responsive Design", "Fast Loading"],
    graphicType: "rocket",
  },
];

const GraphicRenderer = ({ type }: { type: string }) => {
  if (type === "browser") {
    return (
      <div style={{
        width: 170, height: 160, background: "var(--bg-secondary)", borderRadius: 12, border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
        transform: "rotate(-10deg) translateY(20px) translateX(15px)", boxShadow: "-10px 10px 30px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", overflow: "hidden"
      }}>
        <div style={{ background: "color-mix(in srgb, var(--text-primary) 5%, transparent)", padding: "0.5rem 0.8rem", display: "flex", gap: 6, borderBottom: "1px solid color-mix(in srgb, var(--text-primary) 5%, transparent)" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5F56" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFBD2E" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#27C93F" }} />
        </div>
        <div style={{ padding: "1rem", flex: 1, background: "linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, transparent) 0%, transparent 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ color: "var(--text-primary)", fontWeight: 800, fontSize: "1rem", textAlign: "center", lineHeight: 1.2 }}>Build<br/>Your Brand<br/>Online.</div>
          <div style={{ width: "80%", height: 12, background: "color-mix(in srgb, var(--primary) 20%, transparent)", borderRadius: 6, marginTop: "0.8rem" }} />
        </div>
      </div>
    );
  }
  if (type === "code") {
    return (
      <div style={{
        width: 190, height: 140, background: "#1a1a1a", borderRadius: 12, border: "1px solid color-mix(in srgb, var(--glass-border) 50%, transparent)",
        transform: "rotate(-6deg) translateY(10px) translateX(20px)", boxShadow: "-10px 10px 30px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", overflow: "hidden"
      }}>
        <div style={{ background: "#262626", padding: "0.5rem 0.8rem", display: "flex", gap: 6 }}>
           <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5F56" }} />
           <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFBD2E" }} />
           <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#27C93F" }} />
        </div>
        <div style={{ padding: "0.8rem", fontFamily: "monospace", fontSize: "0.6rem", lineHeight: 1.6, color: "#fff", display: "flex", flexDirection: "column", gap: 3 }}>
           <div><span style={{ color: "#56b6c2" }}>01</span> <span style={{ color: "#c678dd" }}>import</span> React</div>
           <div><span style={{ color: "#56b6c2" }}>02</span> <span style={{ color: "#c678dd" }}>const</span> <span style={{ color: "#61afef" }}>App</span> = () =&gt; {'{'}</div>
           <div><span style={{ color: "#56b6c2" }}>03</span> &nbsp;&nbsp;<span style={{ color: "#c678dd" }}>return</span> (</div>
           <div><span style={{ color: "#56b6c2" }}>04</span> &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: "#e06c75" }}>div</span>&gt;</div>
           <div><span style={{ color: "#56b6c2" }}>05</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: "#e06c75" }}>h1</span>&gt;Build&lt;/<span style={{ color: "#e06c75" }}>h1</span>&gt;</div>
           <div><span style={{ color: "#56b6c2" }}>06</span> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style={{ color: "#e06c75" }}>div</span>&gt;</div>
           <div><span style={{ color: "#56b6c2" }}>07</span> &nbsp;&nbsp;) {'}'}</div>
        </div>
      </div>
    );
  }
  if (type === "mobile") {
    return (
      <div style={{ position: "relative", width: 140, height: 200, transform: "rotate(12deg) translateY(20px) translateX(30px)" }}>
         {/* Back Phone */}
         <div style={{ position: "absolute", top: 15, left: -25, width: 100, height: 200, background: "var(--bg-secondary)", borderRadius: 16, border: "2px solid color-mix(in srgb, var(--primary) 10%, transparent)", opacity: 0.8, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }} />
         {/* Front Phone */}
         <div style={{ position: "absolute", top: 0, left: 0, width: 110, height: 210, background: "var(--bg-primary)", borderRadius: 18, border: "2px solid color-mix(in srgb, var(--primary) 30%, transparent)", boxShadow: "-10px 20px 40px rgba(0,0,0,0.3)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ width: 45, height: 12, background: "var(--text-primary)", borderBottomLeftRadius: 8, borderBottomRightRadius: 8, margin: "0 auto", marginBottom: "0.6rem" }} />
            <div style={{ padding: "0.6rem" }}>
              <div style={{ width: "100%", height: 70, background: "linear-gradient(135deg, color-mix(in srgb, var(--primary) 20%, transparent) 0%, transparent 100%)", borderRadius: 8, marginBottom: "0.6rem" }} />
              <div style={{ width: "80%", height: 8, background: "color-mix(in srgb, var(--text-primary) 10%, transparent)", borderRadius: 4, marginBottom: "0.6rem" }} />
              <div style={{ width: "100%", height: 35, background: "color-mix(in srgb, var(--text-primary) 5%, transparent)", borderRadius: 8, marginBottom: "0.6rem" }} />
              <div style={{ width: "100%", height: 35, background: "color-mix(in srgb, var(--text-primary) 5%, transparent)", borderRadius: 8 }} />
            </div>
         </div>
      </div>
    );
  }
  if (type === "brand") {
    return (
      <div style={{
        width: 150, height: 170, background: "var(--bg-secondary)", borderRadius: 12, border: "1px solid color-mix(in srgb, var(--primary) 15%, transparent)",
        transform: "rotate(-12deg) translateY(30px) translateX(10px)", boxShadow: "-10px 10px 30px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative"
      }}>
        <div style={{ position: "absolute", top: "10%", right: "-20%", width: 90, height: 180, background: "color-mix(in srgb, var(--primary) 8%, transparent)", borderRadius: 12, transform: "rotate(15deg)" }} />
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
           <div style={{ color: "var(--primary)", fontSize: "4rem", fontWeight: 900 }}>S</div>
        </div>
      </div>
    );
  }
  if (type === "cards") {
    return (
      <div style={{ position: "relative", width: 150, height: 170, transform: "rotate(8deg) translateY(20px) translateX(20px)" }}>
         {/* Card 1 */}
         <div style={{ position: "absolute", top: 40, left: -25, width: 110, height: 140, background: "var(--bg-secondary)", borderRadius: 12, border: "1px solid color-mix(in srgb, var(--text-primary) 5%, transparent)", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", transform: "rotate(-20deg)", padding: "0.6rem" }}>
            <div style={{ width: "100%", height: 70, background: "color-mix(in srgb, var(--primary) 10%, transparent)", borderRadius: 8, marginBottom: "0.6rem", display: "flex", alignItems: "center", justifyContent: "center" }} >
              <span style={{ fontSize: "1.5rem", color: "var(--primary)" }}>♡</span>
            </div>
            <div style={{ width: "80%", height: 6, background: "color-mix(in srgb, var(--text-primary) 10%, transparent)", borderRadius: 3, marginBottom: 5 }} />
            <div style={{ width: "50%", height: 6, background: "color-mix(in srgb, var(--text-primary) 10%, transparent)", borderRadius: 3 }} />
         </div>
         {/* Card 2 */}
         <div style={{ position: "absolute", top: 10, left: 25, width: 110, height: 150, background: "var(--bg-primary)", borderRadius: 12, border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)", boxShadow: "-10px 15px 40px rgba(0,0,0,0.3)", transform: "rotate(5deg)", padding: "0.6rem" }}>
            <div style={{ width: "100%", height: 80, background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 15%, transparent), transparent)", borderRadius: 8, marginBottom: "0.6rem", display: "flex", alignItems: "center", justifyContent: "center" }} >
              <span style={{ fontSize: "1.8rem", color: "var(--accent)" }}>✨</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
              <div style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--accent)" }} />
              <div style={{ width: "50%", height: 6, background: "color-mix(in srgb, var(--text-primary) 10%, transparent)", borderRadius: 3 }} />
            </div>
            <div style={{ width: "90%", height: 6, background: "color-mix(in srgb, var(--text-primary) 10%, transparent)", borderRadius: 3, marginBottom: 5 }} />
         </div>
      </div>
    );
  }
  if (type === "rocket") {
    return (
      <div style={{
        width: 160, height: 180, background: "var(--bg-secondary)", borderRadius: 12, border: "1px solid color-mix(in srgb, var(--text-primary) 8%, transparent)",
        transform: "rotate(-8deg) translateY(20px) translateX(20px)", boxShadow: "-10px 10px 30px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", overflow: "hidden"
      }}>
        <div style={{ background: "color-mix(in srgb, var(--text-primary) 2%, transparent)", padding: "0.5rem", display: "flex", justifyContent: "center", borderBottom: "1px solid color-mix(in srgb, var(--text-primary) 5%, transparent)" }}>
          <div style={{ width: 50, height: 4, borderRadius: 2, background: "color-mix(in srgb, var(--text-primary) 10%, transparent)" }} />
        </div>
        <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ color: "var(--text-primary)", fontWeight: 800, fontSize: "1rem", textAlign: "center", lineHeight: 1.2, marginBottom: "1rem" }}>Launch<br/>Your Idea</div>
          <div style={{ fontSize: "3rem", position: "absolute", bottom: -10, animation: "float 4s ease-in-out infinite" }}>🚀</div>
        </div>
      </div>
    );
  }
  return null;
};

export function Services() {
  return (
    <section id="services" className="services-section" style={{ 
      position: "relative", 
      minHeight: "100vh", 
      maxHeight: "100vh",
      height: "100vh",
      boxSizing: "border-box",
      overflow: "hidden", 
      padding: "clamp(1.2rem, 2.8vh, 2.2rem) 2rem", 
      fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif", 
      display: "flex", 
      flexDirection: "column",
      justifyContent: "space-between", 
      transition: "background-color 0.3s ease, color 0.3s ease" 
    }}>

      <div style={{ maxWidth: 1360, margin: "0 auto", position: "relative", zIndex: 1, width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "clamp(0.4rem, 1.2vh, 0.8rem)" }} className="reveal">
          <div style={{ maxWidth: 620 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.25rem" }}>
              <div style={{ width: 24, height: 1.5, background: "var(--accent)" }} />
              <span style={{ color: "var(--accent)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>What We Do</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.4rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "0.25rem" }}>
              Services built for{" "}
              <span style={{ color: "transparent", backgroundImage: "linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>business impact</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.4, fontWeight: 400 }}>
              Every service is crafted to deliver measurable results — not just beautiful work.
            </p>
          </div>
          
          {/* Top Right Profile Badge & Hover Hint */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontFamily: "'Caveat', cursive, sans-serif", fontSize: "1.1rem", color: "var(--text-secondary)", transform: "rotate(-3deg)", display: "inline-flex", alignItems: "center", gap: "0.3rem" }} className="hover-hint">
              <span>Hover cards to flip</span>
              <RotateCcw size={13} strokeWidth={2.2} style={{ transform: "rotate(30deg)" }} />
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "var(--glass-card-bg)", border: "1px solid var(--glass-border)", padding: "0.45rem 0.95rem", borderRadius: 100, backdropFilter: "blur(12px)" }}>
              <div style={{ display: "flex", marginLeft: 6 }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{ 
                    width: 28, height: 28, borderRadius: "50%", background: "var(--bg-secondary)", 
                    marginLeft: -8, border: "2px solid var(--bg-primary)",
                    backgroundImage: `url(https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10})`, backgroundSize: "cover"
                  }} />
                ))}
              </div>
              <div>
                <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "var(--text-primary)" }}>From idea to impact</div>
                <div style={{ fontSize: "0.66rem", color: "var(--text-secondary)", lineHeight: 1.2 }}>Digital products that grow with you.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="services-grid" style={{ display: "grid", gap: "clamp(0.6rem, 1.2vh, 0.95rem)", gridTemplateColumns: "repeat(3, 1fr)", flex: 1, alignItems: "center" }}>
          {servicesData.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${(i % 3) + 1} service-flip-card`}
            >
              <div className="service-flip-card-inner">
                
                {/* FRONT SIDE */}
                <div className="service-flip-card-front" style={{
                  background: "var(--glass-card-bg)",
                  border: "1px solid var(--glass-border)", borderRadius: 14,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)", overflow: "hidden",
                }}>
                  {/* Decorative corner glow */}
                  <div style={{ position: "absolute", top: "-20%", right: "-20%", width: "120px", height: "120px", background: "color-mix(in srgb, var(--primary) 10%, transparent)", borderRadius: "50%", filter: "blur(30px)", pointerEvents: "none", zIndex: 0 }} />
                  
                  {/* Front Content */}
                  <div style={{ position: "absolute", inset: 0, zIndex: 1, padding: "1.1rem", display: "flex", flexDirection: "column" }}>
                    
                    {/* Tag */}
                    <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "color-mix(in srgb, var(--primary) 5%, transparent)", border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)", borderRadius: 100, padding: "0.18rem 0.55rem", fontSize: "0.55rem", fontWeight: 800, color: "var(--primary)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {s.tag}
                    </div>

                    {/* Icon Box */}
                    <div style={{ width: 36, height: 36, border: "1px solid color-mix(in srgb, var(--primary) 30%, transparent)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.65rem", color: "var(--accent)", background: "color-mix(in srgb, var(--primary) 5%, transparent)" }}>
                      {s.icon}
                    </div>

                    <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.3rem", letterSpacing: "-0.02em", maxWidth: "75%" }}>{s.title}</h3>
                    <p style={{ fontSize: "0.76rem", color: "var(--text-secondary)", lineHeight: 1.4, marginBottom: "0.5rem", maxWidth: "75%" }}>{s.desc}</p>
                    
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "var(--accent)", fontSize: "0.76rem", fontWeight: 700, marginTop: "auto" }}>
                      <span>Learn more</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Graphic Mockup Area */}
                  <div style={{ position: "absolute", bottom: -25, right: -25, zIndex: 0, pointerEvents: "none" }}>
                    <GraphicRenderer type={s.graphicType} />
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="service-flip-card-back" style={{
                  border: "1px solid var(--glass-border)", borderRadius: 14,
                  boxShadow: "0 15px 40px rgba(0,0,0,0.1)", overflow: "hidden", position: "relative"
                }}>
                  
                  {/* Image Background */}
                  <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${s.image})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
                  {/* Blur / Glass Overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "color-mix(in srgb, var(--glass-card-bg) 50%, transparent)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 1 }} />
                  {/* Tint Overlay for Readability */}
                  <div style={{ position: "absolute", inset: 0, background: "color-mix(in srgb, var(--bg-primary) 30%, transparent)", zIndex: 2 }} />

                  {/* Content (Text only, no button) */}
                  <div style={{ position: "absolute", inset: 0, zIndex: 3, padding: "1.2rem", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", marginBottom: "0.75rem" }}>
                      <h4 style={{ color: "var(--text-primary)", fontSize: "1.05rem", fontWeight: 800 }}>What you get</h4>
                      <div style={{ width: 24, height: 24, background: "var(--bg-primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "1px solid var(--glass-border)" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                      </div>
                    </div>
                    
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem", width: "100%", flex: 1 }}>
                      {s.features.map(f => (
                        <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.76rem", color: "var(--text-secondary)", fontWeight: 600 }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: "var(--primary)", flexShrink: 0 }}>
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div style={{ textAlign: "center", marginTop: "clamp(0.4rem, 1vh, 0.8rem)", display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }} className="reveal fade-in-up">
           <div style={{ width: 50, height: 1, background: "var(--glass-border)" }} />
           <p style={{ color: "var(--text-secondary)", fontSize: "0.78rem", fontWeight: 500 }}>
             More than services — <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>a partner in your growth.</span>
           </p>
           <div style={{ width: 50, height: 1, background: "var(--glass-border)" }} />
        </div>
      </div>

      <style>{`
        /* ================= DARK THEME (EVEN SECTION: DEEP DARK) ================= */
        .services-section {
          background-color: #020704;
          background-image: radial-gradient(circle at 70% 40%, rgba(20, 61, 53, 0.15) 0%, #020704 65%);
          color: #F5F4EE;
        }
        .services-section .service-flip-card-front {
          background: linear-gradient(165deg, rgba(8, 26, 18, 0.88) 0%, rgba(3, 14, 9, 0.98) 100%) !important;
          border: 1.5px solid rgba(110, 231, 183, 0.18) !important;
        }

        /* ================= LIGHT THEME (EVEN SECTION: CRISP WHITE) ================= */
        html:not(.dark) .services-section {
          background-color: #FFFFFF;
          background-image: radial-gradient(circle at 70% 40%, rgba(240, 245, 242, 0.6) 0%, #FFFFFF 65%);
          color: #143026;
        }
        html:not(.dark) .services-section .service-flip-card-front {
          background: linear-gradient(165deg, rgba(246, 245, 240, 0.92) 0%, rgba(255, 255, 255, 0.98) 100%) !important;
          border: 1.5px solid rgba(20, 48, 38, 0.12) !important;
          box-shadow: 0 10px 30px rgba(20, 48, 38, 0.05) !important;
        }
        html:not(.dark) .services-section h3 {
          color: #143026 !important;
        }
        html:not(.dark) .services-section p {
          color: #4A6357 !important;
        }

        .service-flip-card {
          background-color: transparent;
          perspective: 1000px;
          height: clamp(190px, 23vh, 220px);
          width: 100%;
        }
        .service-flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s ease-in-out;
          transform-style: preserve-3d;
          cursor: pointer;
        }
        
        .service-flip-card:hover .service-flip-card-inner {
          transform: rotateY(180deg);
        }
        
        /* Glowing hover effect */
        .service-flip-card:hover .service-flip-card-back,
        .service-flip-card:hover .service-flip-card-front {
          box-shadow: 0 0 30px color-mix(in srgb, var(--primary) 15%, transparent);
          border-color: color-mix(in srgb, var(--primary) 40%, transparent) !important;
        }

        .service-flip-card-front, .service-flip-card-back {
          position: absolute; top: 0; left: 0;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          box-sizing: border-box;
          transform-style: preserve-3d;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .service-flip-card-back {
          transform: rotateY(180deg);
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @media (max-width: 1200px) {
          .services-section { height: auto !important; max-height: none !important; padding: 3.5rem 1.5rem !important; }
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .hover-hint { display: none !important; }
        }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .service-flip-card { height: 230px !important; }
        }
      `}</style>
    </section>
  );
}
