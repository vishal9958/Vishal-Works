import React, { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import logoImg from "@/assets/logo.png";
import vishalAvatar from "@/assets/vishal_avatar.png";
import kunalAvatar from "@/assets/kunal_avatar.png";
import vishalFullBody from "@/assets/vishal_fullbody.png";
import kunalFullBody from "@/assets/kunal_fullbody.png";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge?: string;
  quote: string;
  dialogue: string;
  bio: string;
  skills: string[];
  avatar: string;
  fullBody: string;
  cursiveTag?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "vishal",
    name: "Vishal",
    role: "Founder & Design Editor",
    badge: "👑 LEADER",
    quote: "“Turning ideas into digital experiences that actually matter.”",
    dialogue: "“Zero templates. Zero compromises. Only premium custom code.”",
    bio: "Dedicated to crafting pixel-perfect web designs, responsive layouts, and modern front-ends.",
    skills: ["UI/UX", "Branding", "Product"],
    avatar: vishalAvatar,
    fullBody: vishalFullBody,
    cursiveTag: "Build\nCreate\nRepeat"
  },
  {
    id: "kunal",
    name: "Kunal",
    role: "UI/UX Designer",
    quote: "“Designs that feel simple, intuitive, and human.”",
    dialogue: "“Designing intuitive interfaces that turn visitors into loyal customers.”",
    bio: "User experience specialist. Passionate about transforming ideas into elegant, intuitive wireframes and user journeys that engage visitors.",
    skills: ["Figma", "UI Design", "Prototyping"],
    avatar: kunalAvatar,
    fullBody: kunalFullBody,
    cursiveTag: "Design\nCraft\nInspire"
  }
];

export function Team() {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section
      id="team"
      className="team-section"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(1.5rem, 2.8vh, 2.5rem) 0 clamp(0.6rem, 1.2vh, 1rem) 0",
        fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
        minHeight: "100vh",
        maxHeight: "100vh",
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "background-color 0.3s ease, color 0.3s ease"
      }}
    >
      {/* Background Glow Lights */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "15%",
            width: "45vw",
            height: "45vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(110, 231, 183, 0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            right: "10%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(229, 169, 60, 0.05) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        {/* ================= TOP HEADER BAR ================= */}
        <div
          style={{
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1.5rem",
            position: "relative",
            zIndex: 10
          }}
          className="team-header"
        >
          {/* Left Title Area */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
              <div style={{ width: 22, height: 2, background: "#E5A93C", borderRadius: 2 }} />
              <span style={{ color: "#E5A93C", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                OUR TEAM
              </span>
            </div>

            <h2 className="team-main-title" style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.12, margin: "0 0 0.2rem 0" }}>
              The people behind <span style={{ color: "#E5A93C" }}>the work</span>
            </h2>

            <p className="team-main-desc" style={{ fontSize: "0.84rem", lineHeight: 1.4, margin: 0, maxWidth: "540px" }}>
              A small, passionate team building digital experiences that make a difference.
            </p>
          </div>

          {/* Right Cursive Hint & Stats Pill Card */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "0.8rem",
              position: "relative",
              zIndex: 10
            }}
            className="team-top-right"
          >
            {/* Cursive Annotation */}
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.1rem",
                color: "rgba(255, 255, 255, 0.85)",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                textAlign: "right",
                lineHeight: 1.05,
                paddingBottom: "0.2rem"
              }}
              className="team-top-annotation"
            >
              <span>Different<br />skills<br />Same vision</span>
              <svg width="24" height="24" viewBox="0 0 32 30" fill="none" style={{ transform: "rotate(25deg)" }}>
                <path d="M4 4 C 14 6, 24 14, 26 26 M 26 26 L 18 24 M 26 26 L 25 18" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Stats Pill Card */}
            <div
              className="team-stats-pill"
              style={{
                borderRadius: "12px",
                padding: "0.45rem 0.95rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                backdropFilter: "blur(14px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.6)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <span style={{ fontSize: "0.95rem" }}>👥</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.86rem", lineHeight: 1 }}>2+</div>
                  <div style={{ fontSize: "0.58rem", opacity: 0.65, marginTop: "1px" }}>Members</div>
                </div>
              </div>

              <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.15)" }} />

              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <span style={{ fontSize: "0.95rem" }}>☕</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.86rem", lineHeight: 1 }}>100%</div>
                  <div style={{ fontSize: "0.58rem", opacity: 0.65, marginTop: "1px" }}>Passionate</div>
                </div>
              </div>

              <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.15)" }} />

              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <span style={{ fontSize: "0.95rem", color: "#E5A93C" }}>⚡</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.86rem", lineHeight: 1 }}>1</div>
                  <div style={{ fontSize: "0.58rem", opacity: 0.65, marginTop: "1px" }}>Goal: Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 2 GRAND 3D FLIP CARDS ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.75rem",
            maxWidth: "1280px",
            width: "100%",
            margin: "0.4rem auto",
            alignItems: "center"
          }}
          className="team-cards-grid"
        >
          {teamMembers.map((member) => {
            const isFlipped = !!flippedCards[member.id];
            return (
              <div
                key={member.id}
                className={`team-flip-card ${isFlipped ? "is-flipped" : ""}`}
                style={{
                  perspective: "1400px",
                  height: "clamp(295px, 37vh, 355px)",
                  width: "100%"
                }}
              >
                <div
                  className="team-flip-card-inner"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                  }}
                >
                  {/* ================= FRONT SIDE ================= */}
                  <div
                    className="team-flip-card-front"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      borderRadius: "18px",
                      padding: "1rem 1.15rem",
                      display: "flex",
                      gap: "1.15rem",
                      alignItems: "center",
                      backdropFilter: "blur(25px)",
                      border: member.badge ? "1.5px solid rgba(110, 231, 183, 0.45)" : "1.5px solid rgba(110, 231, 183, 0.25)",
                      boxShadow: member.badge ? "0 20px 45px rgba(0, 0, 0, 0.8), 0 0 25px rgba(110, 231, 183, 0.12)" : "0 20px 45px rgba(0, 0, 0, 0.8)",
                      transition: "box-shadow 0.3s ease, border-color 0.3s ease"
                    }}
                  >
                    {/* Left: Avatar Photo with Cursive tag */}
                    <div
                      style={{
                        position: "relative",
                        width: "185px",
                        height: "100%",
                        borderRadius: "14px",
                        overflow: "hidden",
                        border: member.badge ? "1.5px solid rgba(229, 169, 60, 0.45)" : "1.5px solid rgba(110, 231, 183, 0.4)",
                        flexShrink: 0,
                        background: "rgba(0,0,0,0.5)"
                      }}
                    >
                      <img
                        src={member.avatar}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block"
                        }}
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)" }} />

                      {/* Cursive Tag on Avatar */}
                      {member.cursiveTag && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: "0.55rem",
                            left: "0.6rem",
                            fontFamily: "'Caveat', cursive",
                            fontSize: "1.02rem",
                            lineHeight: 1.05,
                            color: "#ffffff",
                            textShadow: "0 2px 8px rgba(0,0,0,0.95)"
                          }}
                        >
                          {member.cursiveTag}
                        </div>
                      )}
                    </div>

                    {/* Right: Info, Badge, Role, Quote, Skills, Socials & Flip Button */}
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        padding: "0.15rem 0"
                      }}
                    >
                      <div>
                        {/* Leader Badge */}
                        {member.badge && (
                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.3rem",
                              background: "rgba(229, 169, 60, 0.15)",
                              border: "1px solid rgba(229, 169, 60, 0.45)",
                              color: "#E5A93C",
                              borderRadius: "6px",
                              padding: "0.16rem 0.55rem",
                              fontSize: "0.64rem",
                              fontWeight: 800,
                              letterSpacing: "0.08em",
                              marginBottom: "0.35rem"
                            }}
                          >
                            <span>{member.badge}</span>
                          </div>
                        )}

                        {/* Name */}
                        <h3 className="member-name" style={{ fontSize: "1.35rem", fontWeight: 800, margin: "0 0 0.1rem 0", lineHeight: 1.15 }}>
                          {member.name}
                        </h3>

                        {/* Role */}
                        <div className="member-role" style={{ fontSize: "0.78rem", fontWeight: 700, color: "#E5A93C", marginBottom: "0.35rem" }}>
                          {member.role}
                        </div>

                        {/* Quote */}
                        <p className="member-quote" style={{ fontSize: "0.76rem", lineHeight: 1.35, fontStyle: "italic", margin: "0 0 0.55rem 0" }}>
                          {member.quote}
                        </p>

                        {/* Skill Tags */}
                        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                          {member.skills.map((skill) => (
                            <span
                              key={skill}
                              className="member-skill-pill"
                              style={{
                                borderRadius: "100px",
                                padding: "0.18rem 0.58rem",
                                fontSize: "0.66rem",
                                fontWeight: 600
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Social Links + Flip Trigger Button */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "0.45rem", marginTop: "0.35rem" }}>
                        {/* Social Icons */}
                        <div style={{ display: "flex", gap: "0.65rem", alignItems: "center" }}>
                          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" style={{ fontSize: "0.75rem", fontWeight: 700, textDecoration: "none" }}>in</a>
                          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" style={{ fontSize: "0.75rem", fontWeight: 700, textDecoration: "none" }}>git</a>
                          <a href="https://sideone.co" target="_blank" rel="noopener noreferrer" className="social-icon-btn" style={{ fontSize: "0.75rem", fontWeight: 700, textDecoration: "none" }}>🌐</a>
                        </div>

                        {/* Interactive Flip Button */}
                        <button
                          onClick={() => toggleFlip(member.id)}
                          className="card-flip-action-btn"
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            background: "rgba(229, 169, 60, 0.15)",
                            border: "1.5px solid #E5A93C",
                            color: "#E5A93C",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "all 0.25s ease",
                            boxShadow: "0 0 10px rgba(229, 169, 60, 0.25)"
                          }}
                          title="Click to flip card"
                        >
                          <ArrowRight size={15} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* ================= BACK SIDE ================= */}
                  <div
                    className="team-flip-card-back"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      borderRadius: "18px",
                      padding: "0.95rem 1.15rem",
                      display: "flex",
                      gap: "1.1rem",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backdropFilter: "blur(25px)",
                      border: "1.5px solid rgba(229, 169, 60, 0.5)",
                      boxShadow: "0 20px 45px rgba(0, 0, 0, 0.9), 0 0 25px rgba(229, 169, 60, 0.2)",
                      overflow: "hidden"
                    }}
                  >
                    {/* Left: Full Body Artwork */}
                    <div
                      style={{
                        position: "relative",
                        width: "180px",
                        height: "100%",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <img
                        src={member.fullBody}
                        alt={`${member.name} full body`}
                        style={{
                          height: "115%",
                          width: "auto",
                          objectFit: "contain",
                          display: "block",
                          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.85))"
                        }}
                      />
                    </div>

                    {/* Right: Role, Dialogue, Bio & Flip Back Button */}
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        padding: "0.15rem 0"
                      }}
                    >
                      <div>
                        {/* Upper Gold Tag */}
                        <div style={{ color: "#E5A93C", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                          {member.role}
                        </div>

                        {/* Big Dialogue */}
                        <h4 style={{ fontSize: "0.98rem", fontWeight: 700, fontStyle: "italic", color: "#ffffff", lineHeight: 1.3, margin: "0 0 0.45rem 0" }}>
                          {member.dialogue}
                        </h4>

                        {/* Bio */}
                        <p style={{ fontSize: "0.74rem", lineHeight: 1.4, color: "rgba(255, 255, 255, 0.75)", margin: 0 }}>
                          {member.bio}
                        </p>
                      </div>

                      {/* Flip Back Action */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "0.4rem", marginTop: "0.35rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                          <img src={logoImg} alt="SIDEONE" style={{ width: 16, height: 16, borderRadius: 4, objectFit: "cover" }} />
                          <span style={{ fontSize: "0.68rem", color: "rgba(255, 255, 255, 0.7)", fontWeight: 800, letterSpacing: "0.08em" }}>
                            SIDE<span style={{ color: "#D4AF37" }}>ONE</span>
                          </span>
                        </div>

                        <button
                          onClick={() => toggleFlip(member.id)}
                          style={{
                            background: "rgba(229, 169, 60, 0.15)",
                            border: "1px solid #E5A93C",
                            color: "#E5A93C",
                            borderRadius: "100px",
                            padding: "0.26rem 0.75rem",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.35rem"
                          }}
                        >
                          <RotateCcw size={12} strokeWidth={2.5} />
                          <span>Flip Back</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM VALUE PILLARS & CTA BAR ================= */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginTop: "clamp(0.2rem, 0.5vh, 0.4rem)",
            paddingTop: "clamp(0.3rem, 0.5vh, 0.45rem)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)"
          }}
          className="team-bottom-bar"
        >
          {/* 4 Value Pillars */}
          <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }} className="team-value-props">
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(229, 169, 60, 0.12)", border: "1px solid rgba(229, 169, 60, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E5A93C", fontSize: "0.68rem" }}>
                👥
              </div>
              <span style={{ fontSize: "0.72rem", fontWeight: 700 }} className="val-title">Collaborative by nature</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(110, 231, 183, 0.12)", border: "1px solid rgba(110, 231, 183, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6EE7B7", fontSize: "0.68rem" }}>
                ⚡
              </div>
              <span style={{ fontSize: "0.72rem", fontWeight: 700 }} className="val-title">Focused on quality</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(229, 169, 60, 0.12)", border: "1px solid rgba(229, 169, 60, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E5A93C", fontSize: "0.68rem" }}>
                💛
              </div>
              <span style={{ fontSize: "0.72rem", fontWeight: 700 }} className="val-title">Driven by impact</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(110, 231, 183, 0.12)", border: "1px solid rgba(110, 231, 183, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6EE7B7", fontSize: "0.68rem" }}>
                📈
              </div>
              <span style={{ fontSize: "0.72rem", fontWeight: 700 }} className="val-title">Always learning</span>
            </div>
          </div>

          {/* Right Action CTA Button */}
          <div>
            <a
              href="#contact"
              style={{
                background: "#E5A93C",
                color: "#020704",
                padding: "0.42rem 1.15rem",
                borderRadius: "8px",
                fontSize: "0.75rem",
                fontWeight: 800,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                boxShadow: "0 6px 18px rgba(229, 169, 60, 0.35)",
                transition: "transform 0.2s ease, filter 0.2s ease"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; e.currentTarget.style.transform = "none"; }}
            >
              <span>Work With Our Team</span>
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* ================= BOTTOM TAGLINE DIVIDER ================= */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.2rem",
            marginTop: "clamp(0.15rem, 0.4vh, 0.35rem)",
            fontSize: "0.66rem",
            fontWeight: 600,
            letterSpacing: "0.08em"
          }}
          className="team-bottom-tagline"
        >
          <div style={{ width: 50, height: 1, background: "linear-gradient(to right, transparent, rgba(229, 169, 60, 0.5))" }} />
          <span>PEOPLE × IDEAS × DIGITAL PRODUCTS × A BETTER TOMORROW</span>
          <div style={{ width: 50, height: 1, background: "linear-gradient(to left, transparent, rgba(229, 169, 60, 0.5))" }} />
        </div>
      </div>

      {/* ================= CSS STYLES & LIGHT THEME RULES ================= */}
      <style>{`
        /* ================= DARK THEME (ODD SECTION: LIGHTER DARK) ================= */
        .team-section {
          background-color: #06130D;
          color: #ffffff;
        }
        .team-main-title {
          color: #ffffff;
        }
        .team-main-desc {
          color: rgba(255, 255, 255, 0.65);
        }
        .team-stats-pill {
          background: rgba(8, 26, 18, 0.75);
          border: 1px solid rgba(110, 231, 183, 0.25);
          color: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .team-flip-card-front {
          background: linear-gradient(165deg, rgba(8, 28, 20, 0.92) 0%, rgba(3, 14, 9, 0.98) 100%);
        }
        .team-flip-card-back {
          background: linear-gradient(165deg, rgba(10, 36, 26, 0.98) 0%, rgba(4, 18, 12, 1) 100%);
        }
        .member-name {
          color: #ffffff;
        }
        .member-quote {
          color: rgba(255, 255, 255, 0.75);
        }
        .member-skill-pill {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.85);
        }
        .social-icon-btn {
          color: rgba(255, 255, 255, 0.6);
          transition: color 0.2s ease;
        }
        .social-icon-btn:hover {
          color: #E5A93C;
        }
        .card-flip-action-btn:hover {
          background: #E5A93C !important;
          color: #020704 !important;
          transform: scale(1.1);
        }
        .team-bottom-tagline {
          color: rgba(255, 255, 255, 0.55);
        }

        /* ================= LIGHT THEME ================= */
        html:not(.dark) .team-section {
          background-color: #F6F5F0;
          color: #143026;
        }
        html:not(.dark) .team-main-title {
          color: #143026;
        }
        html:not(.dark) .team-main-desc {
          color: #4A6357;
        }
        html:not(.dark) .team-top-annotation {
          color: #143026 !important;
        }
        html:not(.dark) .team-stats-pill {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(20, 48, 38, 0.12);
          color: #143026;
          box-shadow: 0 4px 20px rgba(20, 48, 38, 0.06);
        }
        html:not(.dark) .team-stats-pill > div > div > div:nth-child(2) {
          color: #5B7569 !important;
        }
        html:not(.dark) .team-oval-badge {
          border-color: rgba(181, 125, 30, 0.45) !important;
          color: #143026 !important;
        }
        html:not(.dark) .team-flip-card-front {
          background: linear-gradient(165deg, rgba(255, 255, 255, 0.98) 0%, rgba(244, 248, 245, 0.98) 100%);
          border: 1.5px solid rgba(20, 48, 38, 0.15) !important;
          box-shadow: 0 12px 30px rgba(20, 48, 38, 0.08) !important;
        }
        html:not(.dark) .team-flip-card-back {
          background: linear-gradient(165deg, #143D35 0%, #0C2822 100%);
        }
        html:not(.dark) .member-name {
          color: #143026;
        }
        html:not(.dark) .member-role {
          color: #B57D1E;
        }
        html:not(.dark) .member-quote {
          color: #4A6357;
        }
        html:not(.dark) .member-skill-pill {
          background: rgba(20, 48, 38, 0.05);
          border: 1px solid rgba(20, 48, 38, 0.12);
          color: #143026;
        }
        html:not(.dark) .social-icon-btn {
          color: #4A6357;
        }
        html:not(.dark) .social-icon-btn:hover {
          color: #B57D1E;
        }
        html:not(.dark) .team-bottom-bar {
          border-top-color: rgba(20, 48, 38, 0.1) !important;
        }
        html:not(.dark) .val-title {
          color: #143026 !important;
        }
        html:not(.dark) .team-bottom-tagline {
          color: #5B7569;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 900px) {
          .team-section { height: auto !important; max-height: none !important; padding: 3.5rem 0 !important; }
          .team-cards-grid { grid-template-columns: 1fr !important; max-width: 420px !important; gap: 1.2rem !important; }
          .team-top-right { flex-direction: column !important; align-items: flex-start !important; }
          .team-bottom-bar { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
        }
        @media (max-width: 600px) {
          .team-header { flex-direction: column !important; align-items: flex-start !important; }
          .team-flip-card { height: auto !important; min-height: 230px !important; }
          .team-value-props { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
