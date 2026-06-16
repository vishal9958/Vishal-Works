import { useState } from "react";

// --- CONTACT CONFIGURATION ---
// Change these values to configure your contact links and form submissions.
const CONTACT_CONFIG = {
  whatsappNumber: "919318395641", // Put your WhatsApp number with country code (e.g. 91 for India, no spaces or '+')
  whatsappMessage: "Hi Vishal, I want to discuss a website project for my business.", // Pre-filled text message
  calendlyUrl: "https://cal.com/vishal-biswas-iynwpk/project-discovery-call", // Your Calendly or Cal.com scheduling link
  web3formsAccessKey: "b1bc7840-f749-4d6f-95a8-97626662a660", // Get a free key from https://web3forms.com to make the form work
};

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // If user hasn't set up the API key yet, simulate a success submission
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
          message: form.message,
          subject: `New Project Inquiry from ${form.name}`,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSent(true);
      } else {
        alert("Something went wrong while sending the form. Please try WhatsApp or email instead.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again or reach out via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ background: "#fff", padding: "7rem 2rem", fontFamily: "'Manrope', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }} className="contact-grid">
          {/* Left */}
          <div className="reveal">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 24, height: 1.5, background: "#C8A15A" }} />
              <span style={{ color: "#C8A15A", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Get in Touch</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800, color: "#1B1B1B", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Let's Build Something<br />
              <span style={{ color: "#143D35" }}>Great Together</span>
            </h2>
            <p style={{ color: "#666666", fontSize: "1rem", lineHeight: 1.7, marginBottom: "3rem", maxWidth: 420 }}>
              Whether you're a startup launching your first product or an established business ready for a digital upgrade — we'd love to hear from you.
            </p>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
              <a
                href={CONTACT_CONFIG.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  background: "#143D35", color: "#F5F4EE",
                  padding: "1rem 1.5rem", borderRadius: 12,
                  textDecoration: "none", transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#1a5247")}
                onMouseLeave={e => (e.currentTarget.style.background = "#143D35")}
              >
                <div style={{ width: 40, height: 40, background: "rgba(255,255,255,0.12)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="4" width="14" height="13" rx="2" stroke="white" strokeWidth="1.5"/>
                    <path d="M7 2V6M13 2V6M3 9H17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>Book a Free Call</div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>30-minute strategy session</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  background: "#25D366", color: "#fff",
                  padding: "1rem 1.5rem", borderRadius: 12,
                  textDecoration: "none", transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#20bd5a")}
                onMouseLeave={e => (e.currentTarget.style.background = "#25D366")}
              >
                <div style={{ width: 40, height: 40, background: "rgba(255,255,255,0.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                    <path d="M10 2C5.58 2 2 5.58 2 10C2 11.48 2.4 12.86 3.1 14.04L2 18L6.08 16.91C7.22 17.57 8.56 17.95 10 17.95C14.42 17.95 18 14.37 18 9.95C18 5.57 14.42 2 10 2ZM13.5 12.5C13.3 12.9 12.4 13.3 12 13.3C11.6 13.3 10.3 12.5 9.5 11.7C8.5 10.7 7.8 9.5 7.8 9.1C7.8 8.7 8.1 8.2 8.3 8C8.5 7.8 8.8 7.8 9 7.8C9.1 7.8 9.3 7.8 9.4 8.2C9.6 8.6 9.9 9.5 9.9 9.6C10 9.7 10 9.9 9.9 10.1C9.8 10.2 9.7 10.4 9.6 10.5C9.5 10.6 9.3 10.8 9.4 11C9.6 11.2 10.3 12 11 12.5C11.8 13 12.2 13.1 12.4 13C12.6 12.9 12.8 12.6 13 12.4C13.2 12.2 13.3 12.2 13.5 12.3C13.7 12.4 14.3 12.7 14.5 12.8C14.7 12.9 14.8 13 14.8 13.1C14.8 13.3 14.6 13.8 13.5 12.5Z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>Chat on WhatsApp</div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.85 }}>Typically replies in minutes</div>
                </div>
              </a>
            </div>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                ["Email", "vk6051950@gmail.com"],
                ["Location", "Delhi NCR, India · Remote worldwide"],
                ["Availability", "Available for new projects"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#C8A15A", letterSpacing: "0.06em", textTransform: "uppercase", width: 120, flexShrink: 0 }}>{label}</span>
                  <span style={{ fontSize: "0.875rem", color: "#1B1B1B" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: "#F5F4EE", borderRadius: 20, padding: "2.5rem", border: "1px solid rgba(20,61,53,0.08)" }} className="reveal reveal-delay-2">
            {sent ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ width: 64, height: 64, background: "#143D35", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14L11 19L22 8" stroke="#C8A15A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1B1B1B", marginBottom: "0.75rem" }}>Message Sent!</h3>
                <p style={{ color: "#666666", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1B1B1B", marginBottom: "0.5rem" }}>Start a Project</h3>
                <p style={{ fontSize: "0.85rem", color: "#666666", marginBottom: "2rem" }}>Tell us about your project and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { key: "name", label: "Your Name", placeholder: "Alex Johnson", type: "text" },
                    { key: "email", label: "Email Address", placeholder: "alex@company.com", type: "email" },
                    { key: "business", label: "Business Type", placeholder: "Cafe, Restaurant, Startup...", type: "text" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#1B1B1B", marginBottom: "0.5rem", letterSpacing: "0.02em" }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                        required
                        style={{
                          width: "100%", background: "#fff", border: "1.5px solid rgba(20,61,53,0.12)",
                          borderRadius: 8, padding: "0.75rem 1rem", fontSize: "0.875rem",
                          color: "#1B1B1B", outline: "none", fontFamily: "'Manrope', sans-serif",
                          transition: "border-color 0.2s", boxSizing: "border-box",
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = "#143D35")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(20,61,53,0.12)")}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#1B1B1B", marginBottom: "0.5rem", letterSpacing: "0.02em" }}>
                      Tell us about your project
                    </label>
                    <textarea
                      placeholder="What do you need help with? Any budget or timeline details?"
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      required
                      style={{
                        width: "100%", background: "#fff", border: "1.5px solid rgba(20,61,53,0.12)",
                        borderRadius: 8, padding: "0.75rem 1rem", fontSize: "0.875rem",
                        color: "#1B1B1B", outline: "none", fontFamily: "'Manrope', sans-serif",
                        resize: "vertical", transition: "border-color 0.2s", boxSizing: "border-box",
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = "#143D35")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(20,61,53,0.12)")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-arrow"
                    style={{
                      background: "#143D35", color: "#F5F4EE",
                      padding: "0.875rem 2rem", borderRadius: 8, border: "none",
                      fontSize: "0.9rem", fontWeight: 700, cursor: "pointer",
                      fontFamily: "'Manrope', sans-serif",
                      transition: "background 0.2s, transform 0.2s",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#1a5247")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#143D35")}
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
