import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import contactDeskImg from "@/assets/contact_desk.jpg";

// --- CONTACT CONFIGURATION ---
const CONTACT_CONFIG = {
  whatsappNumber: "919318395641",
  whatsappMessage: "Hi Vishal, I want to discuss a website project for my business.",
  calendlyUrl: "https://cal.com/vishal-biswas-iynwpk/project-discovery-call",
  web3formsAccessKey: "b1bc7840-f749-4d6f-95a8-97626662a660",
};

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "Cafe & Bakery",
    message: "",
    selectedPills: [] as string[]
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePill = (pillName: string) => {
    setForm((prev) => {
      const exists = prev.selectedPills.includes(pillName);
      return {
        ...prev,
        selectedPills: exists
          ? prev.selectedPills.filter((p) => p !== pillName)
          : [...prev.selectedPills, pillName]
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (CONTACT_CONFIG.web3formsAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setSent(true);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: CONTACT_CONFIG.web3formsAccessKey,
          name: form.name,
          email: form.email,
          business: form.business,
          tags: form.selectedPills.join(", "),
          message: form.message,
          subject: `New Project Inquiry from ${form.name}`,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSent(true);
      } else {
        alert("Something went wrong while sending the form. Please reach out via WhatsApp or Email.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again or reach out via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(1.4rem, 2.6vh, 2.2rem) 0 clamp(0.6rem, 1.2vh, 1rem) 0",
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
      {/* Ambient Background Glow Lights */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "5%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(110, 231, 183, 0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "5%",
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(229, 169, 60, 0.09) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 2.5rem",
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        {/* ================= MAIN 2-COLUMN GRID (FILLS SECTION) ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: "clamp(1.5rem, 3vw, 3.5rem)",
            alignItems: "center",
            width: "100%",
            flex: 1,
            minHeight: 0
          }}
          className="contact-main-grid"
        >
          {/* ================= LEFT COLUMN ================= */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(0.75rem, 1.4vh, 1.1rem)",
              justifyContent: "center",
              height: "100%"
            }}
          >
            {/* Header & Subtitle */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
                <div style={{ width: 22, height: 2, background: "#E5A93C", borderRadius: 2 }} />
                <span style={{ color: "#E5A93C", fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="contact-main-title" style={{ fontSize: "clamp(1.85rem, 2.6vw, 2.65rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.14, margin: "0 0 0.45rem 0" }}>
                Let's Build Something<br />
                <span style={{ color: "#E5A93C" }}>Great Together</span>
              </h2>

              <p className="contact-main-desc" style={{ fontSize: "0.86rem", lineHeight: 1.45, margin: "0 0 0.85rem 0", maxWidth: "530px" }}>
                Whether you're a startup launching your first product or an established business ready for a digital upgrade — we'd love to hear from you.
              </p>

              {/* 3 Feature Badges */}
              <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap", marginBottom: "0.85rem" }}>
                <div className="feature-item-pill" style={{ display: "flex", alignItems: "center", gap: "0.45rem", borderRadius: "100px", padding: "0.32rem 0.85rem", fontSize: "0.76rem", fontWeight: 700 }}>
                  <span style={{ fontSize: "0.9rem" }}>📋</span>
                  <span>Discuss Your Idea</span>
                </div>
                <div className="feature-item-pill" style={{ display: "flex", alignItems: "center", gap: "0.45rem", borderRadius: "100px", padding: "0.32rem 0.85rem", fontSize: "0.76rem", fontWeight: 700 }}>
                  <span style={{ fontSize: "0.9rem" }}>👤</span>
                  <span>Get Expert Guidance</span>
                </div>
                <div className="feature-item-pill" style={{ display: "flex", alignItems: "center", gap: "0.45rem", borderRadius: "100px", padding: "0.32rem 0.85rem", fontSize: "0.76rem", fontWeight: 700 }}>
                  <span style={{ fontSize: "0.9rem" }}>✨</span>
                  <span>Turn Ideas Into Reality</span>
                </div>
              </div>

              {/* 2 Big Primary Action Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.95rem", marginBottom: "0.85rem" }}>
                {/* Book a Free Call */}
                <a
                  href={CONTACT_CONFIG.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="action-card-call"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.8rem 1.05rem",
                    borderRadius: "14px",
                    textDecoration: "none",
                    background: "rgba(229, 169, 60, 0.08)",
                    border: "1.5px solid rgba(229, 169, 60, 0.45)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                    transition: "all 0.25s ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: 38, height: 38, borderRadius: "10px", background: "rgba(229, 169, 60, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E5A93C", fontSize: "1.1rem" }}>
                      📅
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "0.88rem", color: "#ffffff" }} className="action-card-title">Book a Free Call</div>
                      <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.65)", marginTop: "2px" }} className="action-card-sub">30-min strategy session</div>
                    </div>
                  </div>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#E5A93C", display: "flex", alignItems: "center", justifyContent: "center", color: "#020704" }}>
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </div>
                </a>

                {/* Chat on WhatsApp */}
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="action-card-whatsapp"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.8rem 1.05rem",
                    borderRadius: "14px",
                    textDecoration: "none",
                    background: "rgba(37, 211, 102, 0.08)",
                    border: "1.5px solid rgba(37, 211, 102, 0.45)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                    transition: "all 0.25s ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: 38, height: 38, borderRadius: "10px", background: "rgba(37, 211, 102, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#25D366", fontSize: "1.1rem" }}>
                      💬
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "0.88rem", color: "#ffffff" }} className="action-card-title">Chat on WhatsApp</div>
                      <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.65)", marginTop: "2px" }} className="action-card-sub">Replies in minutes</div>
                    </div>
                  </div>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff" }}>
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </div>
                </a>
              </div>

              {/* Contact Info (3 columns) */}
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.2fr 1.4fr", gap: "0.85rem" }}>
                {/* Email */}
                <a
                  href="mailto:vk6051950@gmail.com"
                  style={{ display: "flex", alignItems: "center", gap: "0.55rem", textDecoration: "none" }}
                  className="contact-info-link"
                >
                  <div style={{ width: 30, height: 30, borderRadius: "8px", background: "rgba(229, 169, 60, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", color: "#E5A93C" }}>✉️</div>
                  <div>
                    <div style={{ fontSize: "0.62rem", fontWeight: 800, color: "#E5A93C", letterSpacing: "0.1em", textTransform: "uppercase" }}>EMAIL</div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700 }} className="contact-detail-val">vk6051950@gmail.com</div>
                  </div>
                </a>

                {/* Location */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                  <div style={{ width: 30, height: 30, borderRadius: "8px", background: "rgba(110, 231, 183, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", color: "#6EE7B7" }}>📍</div>
                  <div>
                    <div style={{ fontSize: "0.62rem", fontWeight: 800, color: "#6EE7B7", letterSpacing: "0.1em", textTransform: "uppercase" }}>LOCATION</div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700 }} className="contact-detail-val">Delhi NCR, India</div>
                  </div>
                </div>

                {/* Availability */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                  <div style={{ width: 30, height: 30, borderRadius: "8px", background: "rgba(229, 169, 60, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", color: "#E5A93C" }}>🕒</div>
                  <div>
                    <div style={{ fontSize: "0.62rem", fontWeight: 800, color: "#E5A93C", letterSpacing: "0.1em", textTransform: "uppercase" }}>AVAILABILITY</div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700 }} className="contact-detail-val">Mon - Sun · 9 AM - 9 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Desk Workspace Preview Artwork */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(130px, 17vh, 170px)",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1.5px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.6)"
              }}
              className="contact-desk-preview"
            >
              <img
                src={contactDeskImg}
                alt="SIDEONE Studio Workspace"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 60%",
                  display: "block"
                }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(2,7,4,0.65) 0%, rgba(2,7,4,0.1) 50%, rgba(2,7,4,0.75) 100%)" }} />

              {/* Overlay Handwriting Text */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0.65rem",
                  right: "1.2rem",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "1.2rem",
                  color: "#ffffff",
                  textShadow: "0 2px 12px rgba(0,0,0,0.95)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  lineHeight: 1.05,
                  textAlign: "right"
                }}
              >
                <span>Same<br />Vision<br />Bigger Things</span>
                <svg width="26" height="26" viewBox="0 0 32 30" fill="none" style={{ transform: "rotate(20deg)" }}>
                  <path d="M4 4 C 14 6, 24 14, 26 26 M 26 26 L 18 24 M 26 26 L 25 18" stroke="#6EE7B7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: GRAND CONTACT FORM GLASS CARD ================= */}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
            {/* Floating Top Cursive Annotation */}
            <div
              style={{
                position: "absolute",
                top: "-1.5rem",
                right: "1.2rem",
                fontFamily: "'Caveat', cursive",
                fontSize: "1.15rem",
                color: "#6EE7B7",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                zIndex: 10
              }}
              className="contact-cursive-top"
            >
              <span>Let's create impact together.</span>
              <svg width="22" height="22" viewBox="0 0 32 30" fill="none" style={{ transform: "rotate(15deg)" }}>
                <path d="M4 4 C 14 6, 24 14, 26 26 M 26 26 L 18 24 M 26 26 L 25 18" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Main Glass Card */}
            <div
              className="contact-glass-card"
              style={{
                borderRadius: "20px",
                padding: "clamp(1.2rem, 2.2vh, 1.65rem) clamp(1.3rem, 2vw, 1.75rem)",
                backdropFilter: "blur(25px)",
                border: "1.5px solid rgba(229, 169, 60, 0.45)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(229, 169, 60, 0.18)",
                position: "relative"
              }}
            >
              {sent ? (
                <div style={{ textAlign: "center", padding: "3rem 1.5rem" }}>
                  <div style={{ width: 64, height: 64, background: "#E5A93C", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.2rem", color: "#020704", fontSize: "1.8rem", fontWeight: 800 }}>
                    ✓
                  </div>
                  <h3 style={{ fontSize: "1.45rem", fontWeight: 800, margin: "0 0 0.5rem 0" }} className="contact-sent-title">
                    Message Sent Successfully!
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", maxWidth: "380px", margin: "0 auto 1.8rem auto", lineHeight: 1.5 }} className="contact-sent-desc">
                    Thank you for reaching out! We will review your project requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    style={{
                      background: "rgba(229, 169, 60, 0.15)",
                      border: "1px solid #E5A93C",
                      color: "#E5A93C",
                      padding: "0.55rem 1.5rem",
                      borderRadius: "9px",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      cursor: "pointer"
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  {/* Card Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.65rem" }}>
                    <div
                      style={{
                        background: "#E5A93C",
                        color: "#020704",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        borderRadius: "100px",
                        padding: "0.28rem 0.8rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem"
                      }}
                    >
                      <span>🚀</span>
                      <span>START A PROJECT</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.76rem", color: "rgba(255,255,255,0.85)" }} className="reply-time-badge">
                      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#25D366", display: "inline-block" }} />
                      <span>We usually reply within <strong style={{ color: "#E5A93C" }}>24 hours</strong></span>
                    </div>
                  </div>

                  {/* Card Title & Subtitle */}
                  <h3 className="card-form-title" style={{ fontSize: "1.28rem", fontWeight: 800, margin: "0 0 0.2rem 0", lineHeight: 1.2 }}>
                    Tell us about your project
                  </h3>
                  <p className="card-form-sub" style={{ fontSize: "0.8rem", lineHeight: 1.4, color: "rgba(255,255,255,0.65)", margin: "0 0 0.85rem 0" }}>
                    Fill in the details and we'll get back to you with the best way forward.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    {/* Row 1: Name & Email */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "0.25rem" }} className="input-field-label">
                          Your Name *
                        </label>
                        <div style={{ position: "relative" }}>
                          <span style={{ position: "absolute", left: "0.85rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.85rem", opacity: 0.6 }}>👤</span>
                          <input
                            type="text"
                            placeholder="Alex Johnson"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            className="contact-text-input"
                            style={{
                              width: "100%",
                              padding: "0.58rem 0.85rem 0.58rem 2.2rem",
                              borderRadius: "9px",
                              fontSize: "0.82rem",
                              outline: "none",
                              boxSizing: "border-box"
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "0.25rem" }} className="input-field-label">
                          Email Address *
                        </label>
                        <div style={{ position: "relative" }}>
                          <span style={{ position: "absolute", left: "0.85rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.85rem", opacity: 0.6 }}>✉️</span>
                          <input
                            type="email"
                            placeholder="alex@company.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                            className="contact-text-input"
                            style={{
                              width: "100%",
                              padding: "0.58rem 0.85rem 0.58rem 2.2rem",
                              borderRadius: "9px",
                              fontSize: "0.82rem",
                              outline: "none",
                              boxSizing: "border-box"
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Business Type Dropdown */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "0.25rem" }} className="input-field-label">
                        Business Type
                      </label>
                      <div style={{ position: "relative" }}>
                        <span style={{ position: "absolute", left: "0.85rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.85rem", opacity: 0.8, pointerEvents: "none" }}>💼</span>
                        <select
                          value={form.business}
                          onChange={(e) => setForm({ ...form, business: e.target.value })}
                          className="contact-text-input"
                          style={{
                            width: "100%",
                            padding: "0.58rem 2.2rem 0.58rem 2.2rem",
                            borderRadius: "9px",
                            fontSize: "0.82rem",
                            outline: "none",
                            boxSizing: "border-box",
                            cursor: "pointer",
                            appearance: "none",
                            WebkitAppearance: "none",
                            MozAppearance: "none"
                          }}
                        >
                          <option value="Cafe & Bakery">☕ Cafe & Bakery</option>
                          <option value="Restaurant & Dining">🍽️ Restaurant & Dining</option>
                          <option value="Gym & Fitness Center">🏋️ Gym & Fitness Center</option>
                          <option value="Travel & Hospitality">✈️ Travel & Hospitality</option>
                          <option value="E-commerce Store">🛒 E-commerce Store</option>
                          <option value="Tech Startup & SaaS">🚀 Tech Startup & SaaS</option>
                        </select>
                        <span style={{ position: "absolute", right: "0.85rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.7rem", opacity: 0.7, pointerEvents: "none" }}>▼</span>
                      </div>
                    </div>

                    {/* Row 3: Project Message Textarea */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "0.25rem" }} className="input-field-label">
                        Tell us about your project *
                      </label>
                      <div style={{ position: "relative" }}>
                        <span style={{ position: "absolute", left: "0.85rem", top: "0.7rem", fontSize: "0.85rem", opacity: 0.6 }}>📄</span>
                        <textarea
                          placeholder="What do you need help with? Any budget or timeline details?"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          required
                          rows={3}
                          className="contact-text-input"
                          style={{
                            width: "100%",
                            padding: "0.58rem 0.85rem 0.58rem 2.2rem",
                            borderRadius: "9px",
                            fontSize: "0.82rem",
                            outline: "none",
                            resize: "none",
                            boxSizing: "border-box"
                          }}
                        />
                      </div>
                    </div>

                    {/* Row 4: 4 Quick Tags / Actions */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.55rem", margin: "0.2rem 0" }}>
                      {[
                        { id: "attach", icon: "📎", title: "Attach Files", sub: "( Optional )" },
                        { id: "idea", icon: "💡", title: "IDEA", sub: "Share your vision" },
                        { id: "budget", icon: "💼", title: "BUDGET", sub: "Help us plan" },
                        { id: "timeline", icon: "⏱️", title: "TIMELINE", sub: "Set expectations" }
                      ].map((item) => {
                        const isSelected = form.selectedPills.includes(item.id);
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => togglePill(item.id)}
                            className={`contact-quick-pill ${isSelected ? "is-selected" : ""}`}
                            style={{
                              borderRadius: "9px",
                              padding: "0.38rem 0.45rem",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              textAlign: "center",
                              cursor: "pointer",
                              transition: "all 0.2s ease"
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.68rem", fontWeight: 800 }}>
                              <span>{item.icon}</span>
                              <span>{item.title}</span>
                            </div>
                            <div style={{ fontSize: "0.55rem", opacity: 0.7, marginTop: "2px" }}>
                              {item.sub}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Row 5: Big Send Message Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        background: "#E5A93C",
                        color: "#020704",
                        padding: "0.65rem 1.3rem",
                        borderRadius: "10px",
                        border: "none",
                        fontSize: "0.88rem",
                        fontWeight: 800,
                        cursor: loading ? "not-allowed" : "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.65rem",
                        boxShadow: "0 6px 18px rgba(229, 169, 60, 0.35)",
                        transition: "transform 0.2s ease, filter 0.2s ease",
                        marginTop: "0.2rem"
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.15)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; e.currentTarget.style.transform = "none"; }}
                    >
                      <span>{loading ? "Sending..." : "Send Message"}</span>
                      <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#020704", color: "#E5A93C", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <ArrowRight size={13} strokeWidth={2.5} />
                      </span>
                    </button>

                    {/* Row 6: Security Guarantee */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", fontSize: "0.66rem", color: "rgba(255,255,255,0.6)", marginTop: "0.2rem" }} className="security-text">
                      <span>🔒</span>
                      <span>Your information is safe with us. We never share your data.</span>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM STATS BAR ================= */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            paddingTop: "clamp(0.6rem, 1.2vh, 0.9rem)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)"
          }}
          className="contact-bottom-bar"
        >
          {/* 4 Stats Pills */}
          <div style={{ display: "flex", gap: "2.2rem", alignItems: "center" }} className="contact-stats-row">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ fontSize: "1rem" }}>👥</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: "0.88rem", lineHeight: 1 }} className="stat-val">10+</div>
                <div style={{ fontSize: "0.64rem", opacity: 0.65, marginTop: "2px" }}>Projects Delivered</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ fontSize: "1rem", color: "#E5A93C" }}>💛</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: "0.88rem", lineHeight: 1 }} className="stat-val">100%</div>
                <div style={{ fontSize: "0.64rem", opacity: 0.65, marginTop: "2px" }}>Client Satisfaction</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ fontSize: "1rem", color: "#6EE7B7" }}>⚡</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: "0.88rem", lineHeight: 1 }} className="stat-val">24h</div>
                <div style={{ fontSize: "0.64rem", opacity: 0.65, marginTop: "2px" }}>Average Response</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ fontSize: "1rem" }}>🌐</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: "0.88rem", lineHeight: 1 }} className="stat-val">Global</div>
                <div style={{ fontSize: "0.64rem", opacity: 0.65, marginTop: "2px" }}>Remote Collaboration</div>
              </div>
            </div>
          </div>

          {/* Far Right Tagline */}
          <div style={{ fontSize: "0.76rem", fontWeight: 600, color: "rgba(255,255,255,0.6)" }} className="contact-bottom-quote">
            <span>Ideas today. A better tomorrow. —</span>
          </div>
        </div>
      </div>

      {/* ================= CSS STYLES & LIGHT THEME RULES ================= */}
      <style>{`
        /* ================= DARK THEME (DEFAULT) ================= */
        .contact-section {
          background-color: #020704;
          color: #ffffff;
        }
        .contact-main-title {
          color: #ffffff;
        }
        .contact-main-desc {
          color: rgba(255, 255, 255, 0.65);
        }
        .feature-item-pill {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.85);
        }
        .contact-glass-card {
          background: linear-gradient(165deg, rgba(8, 28, 20, 0.94) 0%, rgba(3, 14, 9, 0.98) 100%);
        }
        .contact-text-input {
          background: rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .contact-text-input:focus {
          border-color: #E5A93C !important;
          background: rgba(0, 0, 0, 0.65) !important;
        }
        .contact-quick-pill {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
        }
        .contact-quick-pill:hover, .contact-quick-pill.is-selected {
          background: rgba(229, 169, 60, 0.15) !important;
          border-color: #E5A93C !important;
          color: #E5A93C !important;
        }
        .contact-detail-val {
          color: rgba(255, 255, 255, 0.9);
        }
        .stat-val {
          color: #ffffff;
        }

        /* ================= LIGHT THEME (EVEN SECTION: CRISP WHITE) ================= */
        html:not(.dark) .contact-section {
          background-color: #FFFFFF;
          color: #143026;
        }
        html:not(.dark) .contact-main-title {
          color: #143026;
        }
        html:not(.dark) .contact-main-desc {
          color: #4A6357;
        }
        html:not(.dark) .contact-world-graphic {
          color: rgba(20, 48, 38, 0.4) !important;
        }
        html:not(.dark) .feature-item-pill {
          background: rgba(20, 48, 38, 0.06);
          border: 1px solid rgba(20, 48, 38, 0.14);
          color: #143026;
        }
        html:not(.dark) .action-card-call {
          background: rgba(229, 169, 60, 0.08) !important;
          border-color: rgba(181, 125, 30, 0.4) !important;
          box-shadow: 0 4px 15px rgba(20, 48, 38, 0.06) !important;
        }
        html:not(.dark) .action-card-call .action-card-title {
          color: #143026 !important;
        }
        html:not(.dark) .action-card-call .action-card-sub {
          color: #4A6357 !important;
        }
        html:not(.dark) .action-card-whatsapp {
          background: rgba(37, 211, 102, 0.08) !important;
          border-color: rgba(37, 211, 102, 0.4) !important;
          box-shadow: 0 4px 15px rgba(20, 48, 38, 0.06) !important;
        }
        html:not(.dark) .action-card-whatsapp .action-card-title {
          color: #143026 !important;
        }
        html:not(.dark) .action-card-whatsapp .action-card-sub {
          color: #4A6357 !important;
        }
        html:not(.dark) .contact-detail-val {
          color: #143026;
        }
        html:not(.dark) .contact-glass-card {
          background: linear-gradient(165deg, rgba(255, 255, 255, 0.98) 0%, rgba(244, 248, 245, 0.98) 100%);
          border: 1.5px solid rgba(20, 48, 38, 0.15) !important;
          box-shadow: 0 15px 40px rgba(20, 48, 38, 0.08) !important;
        }
        html:not(.dark) .card-form-title {
          color: #143026;
        }
        html:not(.dark) .card-form-sub {
          color: #4A6357;
        }
        html:not(.dark) .reply-time-badge {
          color: #4A6357 !important;
        }
        html:not(.dark) .input-field-label {
          color: #143026 !important;
        }
        html:not(.dark) .contact-text-input {
          background: #FFFFFF;
          border: 1px solid rgba(20, 48, 38, 0.18);
          color: #143026;
        }
        html:not(.dark) .contact-text-input:focus {
          border-color: #B57D1E !important;
          background: #FFFFFF !important;
        }
        html:not(.dark) .contact-quick-pill {
          background: rgba(20, 48, 38, 0.04);
          border: 1px solid rgba(20, 48, 38, 0.14);
          color: #143026;
        }
        html:not(.dark) .contact-quick-pill:hover, html:not(.dark) .contact-quick-pill.is-selected {
          background: rgba(181, 125, 30, 0.15) !important;
          border-color: #B57D1E !important;
          color: #B57D1E !important;
        }
        html:not(.dark) .security-text {
          color: #5B7569 !important;
        }
        html:not(.dark) .contact-sent-title {
          color: #143026 !important;
        }
        html:not(.dark) .contact-sent-desc {
          color: #4A6357 !important;
        }
        html:not(.dark) .contact-bottom-bar {
          border-top-color: rgba(20, 48, 38, 0.1) !important;
        }
        html:not(.dark) .stat-val {
          color: #143026;
        }
        html:not(.dark) .contact-bottom-quote {
          color: #5B7569 !important;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 960px) {
          .contact-section { height: auto !important; max-height: none !important; padding: 3.5rem 0 !important; }
          .contact-main-grid { grid-template-columns: 1fr !important; gap: 2.2rem !important; }
          .contact-desk-preview { height: 180px !important; }
          .contact-bottom-bar { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
          .contact-stats-row { flex-wrap: wrap !important; gap: 1.2rem !important; }
        }
      `}</style>
    </section>
  );
}
