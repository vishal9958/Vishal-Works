import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface IndustryFeature {
  icon: string;
  title: string;
  desc: string;
}

interface IndustryData {
  id: string;
  label: string;
  tabIcon: string;
  tag: string;
  title: string;
  description: string;
  features: IndustryFeature[];
  stats: Array<{ icon: string; value: string; label: string }>;
  tagline: string;
  bgImage: string;
}

const industriesList: IndustryData[] = [
  {
    id: "gym",
    label: "Gym",
    tabIcon: "🏋️",
    tag: "🏋️ GYM & FITNESS",
    title: "Build A Healthier\nBrand",
    description: "High-converting fitness and gym platforms with workout trackers, class schedules, and trainer booking flows.",
    features: [
      { icon: "💪", title: "Class Scheduling & Booking", desc: "Real-time calendar and trainer assignments." },
      { icon: "📊", title: "Workout & Progress Trackers", desc: "Engaging personal performance dashboards." },
      { icon: "💳", title: "Membership Checkout", desc: "Frictionless recurring billing & pass purchases." }
    ],
    stats: [
      { icon: "👥", value: "500+", label: "Active Members" },
      { icon: "🏋️", value: "50+", label: "Workout Programs" },
      { icon: "⭐", value: "4.9", label: "Member Rating" }
    ],
    tagline: "Stronger\nEveryday",
    bgImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&auto=format&fit=crop&q=80"
  },
  {
    id: "cafe",
    label: "Cafe",
    tabIcon: "☕",
    tag: "☕ CAFE & BAKERY",
    title: "Cozy Spaces,\nModern Sales",
    description: "Artisan coffee shop platforms with visual menus, online pre-ordering, and multi-location finders.",
    features: [
      { icon: "☕", title: "Specialty Visual Menu", desc: "Showcase signature brews and fresh bakes." },
      { icon: "📱", title: "Seamless Quick Ordering", desc: "Skip-the-line pickup and table ordering." },
      { icon: "📍", title: "Interactive Cafe Finder", desc: "Real-time location directions & hours." }
    ],
    stats: [
      { icon: "☕", value: "10+", label: "Cafés" },
      { icon: "🥤", value: "50+", label: "Beverage Options" },
      { icon: "⭐", value: "4.8", label: "Customer Rating" }
    ],
    tagline: "Good Coffee\nBetter Days",
    bgImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&auto=format&fit=crop&q=80"
  },
  {
    id: "restaurant",
    label: "Restaurant",
    tabIcon: "🍽️",
    tag: "🍽️ RESTAURANT & DINING",
    title: "Elevating\nCulinary Dining",
    description: "Sophisticated restaurant websites with real-time table reservations, digital tasting menus, and event bookings.",
    features: [
      { icon: "🍽️", title: "Digital Tasting Menus", desc: "Highlight signature dishes with rich imagery." },
      { icon: "📅", title: "Real-Time Table Booking", desc: "Automated reservation and guest management." },
      { icon: "🥂", title: "Private Event Inquiries", desc: "Custom packages for parties & celebrations." }
    ],
    stats: [
      { icon: "🍽️", value: "100+", label: "Daily Diners" },
      { icon: "🏢", value: "5+", label: "Branches" },
      { icon: "⭐", value: "4.9", label: "Average Rating" }
    ],
    tagline: "Great Food\nBrings People\nTogether",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&q=80"
  },
  {
    id: "travel",
    label: "Travel",
    tabIcon: "✈️",
    tag: "✈️ TRAVEL",
    title: "Inspire More\nJourneys",
    description: "Travel agency and tour operator sites with itinerary builders, booking flows, and destination showcases.",
    features: [
      { icon: "🌐", title: "Custom Itinerary Builders", desc: "Plan and showcase trips beautifully." },
      { icon: "📅", title: "Booking & Payment Integration", desc: "Seamless and secure." },
      { icon: "🗺️", title: "Destination Showcases", desc: "Engaging travel experiences." }
    ],
    stats: [
      { icon: "✈️", value: "190+", label: "Package Inquiries" },
      { icon: "👥", value: "50+", label: "Destinations" },
      { icon: "⭐", value: "4.8", label: "User Satisfaction" }
    ],
    tagline: "Good Journeys\nBetter Stories",
    bgImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop&q=80"
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    tabIcon: "🛒",
    tag: "🛒 E-COMMERCE",
    title: "Scale Modern\nCommerce",
    description: "High-converting direct-to-consumer storefronts with lightning-fast checkouts and product customizers.",
    features: [
      { icon: "⚡", title: "1-Click Fast Checkout", desc: "Frictionless cart with Apple Pay & Stripe." },
      { icon: "📦", title: "Inventory & Variant System", desc: "Live stock counters and size guides." },
      { icon: "🎯", title: "Conversion-Optimized UX", desc: "Upsells, reviews, and dynamic search." }
    ],
    stats: [
      { icon: "📦", value: "1K+", label: "Products" },
      { icon: "👥", value: "10K+", label: "Customers" },
      { icon: "⭐", value: "4.8", label: "Product Rating" }
    ],
    tagline: "Products\nPeople Love",
    bgImage: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1600&auto=format&fit=crop&q=80"
  },
  {
    id: "startup",
    label: "Startup",
    tabIcon: "🚀",
    tag: "🚀 STARTUP",
    title: "Turn Ideas\nInto Impact",
    description: "We help venture-backed startups and founders build, launch, and scale modern digital products and web apps.",
    features: [
      { icon: "💻", title: "Rapid MVP Development", desc: "Launch from zero to product in weeks." },
      { icon: "⚡", title: "Scalable Architecture", desc: "Built with Next.js, React, and modern cloud." },
      { icon: "🛡️", title: "Investor-Ready Design", desc: "Pitch decks, dashboards, and landing pages." }
    ],
    stats: [
      { icon: "🚀", value: "100+", label: "Startups Supported" },
      { icon: "🎯", value: "90%", label: "MVP Success Rate" },
      { icon: "⭐", value: "4.9", label: "Client Satisfaction" }
    ],
    tagline: "Ideas Build\nA Better\nTomorrow",
    bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&auto=format&fit=crop&q=80"
  }
];

// Mac OS Top Window Dots
const MacDots = () => (
  <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
    <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#FF5F56", display: "inline-block" }} />
    <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
    <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#27C93F", display: "inline-block" }} />
  </div>
);

// Desktop Browser Nav Bar
const DesktopNav = ({ logoText, logoIcon, links, ctaText }: { logoText: string; logoIcon: string; links: string[]; ctaText: string }) => (
  <div style={{
    height: 42,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1.2rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    background: "rgba(5, 15, 11, 0.75)",
    backdropFilter: "blur(12px)",
    position: "relative",
    zIndex: 5
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <MacDots />
      <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>
        <span style={{ color: "#6EE7B7", fontSize: "0.95rem" }}>{logoIcon}</span>
        <span>{logoText}</span>
      </div>
    </div>

    <div style={{ display: "flex", gap: "1.1rem", alignItems: "center" }}>
      {links.map((link) => (
        <span key={link} style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.75rem", fontWeight: 500 }}>
          {link}
        </span>
      ))}
    </div>

    <div>
      <span style={{
        background: "#6EE7B7",
        color: "#03150D",
        padding: "0.32rem 0.95rem",
        borderRadius: "100px",
        fontSize: "0.72rem",
        fontWeight: 700,
        boxShadow: "0 4px 14px rgba(110, 231, 183, 0.25)",
        display: "inline-block"
      }}>
        {ctaText}
      </span>
    </div>
  </div>
);

/* =========================================================================
   INDIVIDUAL INDUSTRY 3D DESKTOP MOCKUPS (ALL FULL-BLEED VISUAL STYLE)
========================================================================= */

// 1. GYM DESKTOP (Full-Bleed Visual Style like Travel)
const GymDesktop = () => (
  <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", position: "relative" }}>
    <DesktopNav logoIcon="⚡" logoText="FitZone" links={["Home", "Programs", "Trainers", "Pricing"]} ctaText="Join Now" />
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "1.1rem 1.5rem 1.1rem 40px", position: "relative" }}>
      {/* Full-bleed background inside desktop */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&auto=format&fit=crop&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(3, 14, 9, 0.95) 0%, rgba(3, 14, 9, 0.35) 50%, rgba(3, 14, 9, 0.75) 100%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        <h2 style={{ fontSize: "1.85rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, margin: 0 }}>
          Build A<br /><span style={{ color: "#6EE7B7" }}>Healthier You</span>
        </h2>
        <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.78rem", margin: "0.25rem 0 0.75rem 0" }}>
          Personalized workout plans. Real results.
        </p>

        <div style={{
          background: "rgba(5, 18, 12, 0.85)",
          border: "1px solid rgba(110, 231, 183, 0.3)",
          borderRadius: "100px",
          padding: "0.3rem 0.45rem 0.3rem 0.95rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.85rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)"
        }}>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>🏋️ Strength & HIIT</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.72rem" }}>|</span>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>📅 Book Trainer</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.72rem" }}>|</span>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>🔥 95% Goal Met</span>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#6EE7B7", color: "#03150D", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800 }}>
            ⚡
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.55rem", position: "relative", zIndex: 2 }}>
        {[
          { n: "Strength Training", c: "50+ Programs", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&auto=format&fit=crop&q=80" },
          { n: "Cardio & HIIT", c: "Daily Classes", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&auto=format&fit=crop&q=80" },
          { n: "Athletic Arena", c: "Personal Coaches", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop&q=80" },
          { n: "Yoga & Recovery", c: "Mind & Mobility", img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&auto=format&fit=crop&q=80" }
        ].map((d, i) => (
          <div key={i} style={{ height: "70px", borderRadius: "10px", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0.45rem 0.6rem", border: "1px solid rgba(255, 255, 255, 0.12)" }}>
            <img src={d.img} alt={d.n} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.75rem" }}>{d.n}</div>
              <div style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.58rem" }}>{d.c}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 2. CAFE DESKTOP (Full-Bleed Visual Style like Travel)
const CafeDesktop = () => (
  <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", position: "relative" }}>
    <DesktopNav logoIcon="☕" logoText="Brew & Co." links={["Home", "Menu", "Our Story", "Locations"]} ctaText="Order Now" />
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "1.1rem 1.5rem 1.1rem 40px", position: "relative" }}>
      {/* Full-bleed background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1400&auto=format&fit=crop&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16, 12, 8, 0.95) 0%, rgba(16, 12, 8, 0.35) 50%, rgba(16, 12, 8, 0.75) 100%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        <h2 style={{ fontSize: "1.85rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, margin: 0 }}>
          More Than<br /><span style={{ color: "#E6C865" }}>Just Coffee</span>
        </h2>
        <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.78rem", margin: "0.25rem 0 0.75rem 0" }}>
          Specialty coffee. Cozy spaces. Brighter days.
        </p>

        <div style={{
          background: "rgba(20, 14, 9, 0.88)",
          border: "1px solid rgba(212, 175, 55, 0.35)",
          borderRadius: "100px",
          padding: "0.3rem 0.45rem 0.3rem 0.95rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.85rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)"
        }}>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>☕ Artisan Roasts</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.72rem" }}>|</span>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>🥐 Fresh Bakes</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.72rem" }}>|</span>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>📍 10+ Cafés</span>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#E6C865", color: "#03150D", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800 }}>
            ☕
          </div>
          <span style={{ background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.15)", color: "#ffffff", padding: "0.3rem 0.7rem", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 600 }}>
            View Menu
          </span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.55rem", position: "relative", zIndex: 2 }}>
        {[
          { n: "Specialty Coffee", c: "Signature Brews", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&auto=format&fit=crop&q=80" },
          { n: "Fresh Bakes", c: "Warm Croissants", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80" },
          { n: "Cozy Ambience", c: "Chill & Relax", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&auto=format&fit=crop&q=80" },
          { n: "Work Friendly", c: "High-Speed WiFi", img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&auto=format&fit=crop&q=80" }
        ].map((d, i) => (
          <div key={i} style={{ height: "70px", borderRadius: "10px", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0.45rem 0.6rem", border: "1px solid rgba(255, 255, 255, 0.12)" }}>
            <img src={d.img} alt={d.n} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.75rem" }}>{d.n}</div>
              <div style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.58rem" }}>{d.c}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 3. RESTAURANT DESKTOP (Full-Bleed Visual Style like Travel)
const RestaurantDesktop = () => (
  <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", position: "relative" }}>
    <DesktopNav logoIcon="🍽️" logoText="Savor" links={["Home", "Menu", "Reservations", "About"]} ctaText="Book a Table" />
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "1.1rem 1.5rem 1.1rem 40px", position: "relative" }}>
      {/* Full-bleed background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&auto=format&fit=crop&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16, 12, 8, 0.95) 0%, rgba(16, 12, 8, 0.35) 50%, rgba(16, 12, 8, 0.75) 100%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        <h2 style={{ fontSize: "1.85rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, margin: 0 }}>
          Food That Brings<br /><span style={{ color: "#E6C865" }}>People Together</span>
        </h2>
        <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.78rem", margin: "0.25rem 0 0.75rem 0" }}>
          Delicious food. Memorable dining experiences.
        </p>

        <div style={{
          background: "rgba(18, 12, 8, 0.88)",
          border: "1px solid rgba(212, 175, 55, 0.35)",
          borderRadius: "100px",
          padding: "0.3rem 0.45rem 0.3rem 0.95rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.85rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)"
        }}>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>👥 2 Guests</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.72rem" }}>|</span>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>📅 Today 7:00 PM</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.72rem" }}>|</span>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>⭐ 4.9 Rating</span>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#E6C865", color: "#03150D", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800 }}>
            🥂
          </div>
          <span style={{ background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.15)", color: "#ffffff", padding: "0.3rem 0.7rem", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 600 }}>
            Find Table
          </span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.55rem", position: "relative", zIndex: 2 }}>
        {[
          { n: "Curated Tasting", c: "Chef's Specials", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&auto=format&fit=crop&q=80" },
          { n: "Fine Dining", c: "Candlelight Ambience", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=80" },
          { n: "Private Events", c: "Custom Parties", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&auto=format&fit=crop&q=80" },
          { n: "Wine Cellar", c: "Artisan Cocktails", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&auto=format&fit=crop&q=80" }
        ].map((d, i) => (
          <div key={i} style={{ height: "70px", borderRadius: "10px", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0.45rem 0.6rem", border: "1px solid rgba(255, 255, 255, 0.12)" }}>
            <img src={d.img} alt={d.n} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.75rem" }}>{d.n}</div>
              <div style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.58rem" }}>{d.c}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 4. TRAVEL DESKTOP (Full-Bleed Visual Style)
const TravelDesktop = () => (
  <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", position: "relative" }}>
    <DesktopNav logoIcon="🏔️" logoText="Wanderly" links={["Destinations", "Packages", "About", "Contact"]} ctaText="Book Now" />
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "1.1rem 1.5rem 1.1rem 40px", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&auto=format&fit=crop&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(3, 14, 9, 0.95) 0%, rgba(3, 14, 9, 0.35) 50%, rgba(3, 14, 9, 0.75) 100%)", pointerEvents: "none" }} />
      
      <div style={{ position: "relative", zIndex: 2 }}>
        <h2 style={{ fontSize: "1.85rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, margin: 0 }}>
          Discover<br /><span style={{ color: "#6EE7B7" }}>The World</span>
        </h2>
        <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.78rem", margin: "0.25rem 0 0.75rem 0" }}>
          Travel farther. Experience deeper.
        </p>

        <div style={{
          background: "rgba(5, 18, 12, 0.85)",
          border: "1px solid rgba(110, 231, 183, 0.3)",
          borderRadius: "100px",
          padding: "0.3rem 0.45rem 0.3rem 0.95rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.85rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)"
        }}>
          <span style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.72rem" }}>🔍 Where to?</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.72rem" }}>|</span>
          <span style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.72rem" }}>📅 Check in</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.72rem" }}>|</span>
          <span style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.72rem" }}>📅 Check out</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.72rem" }}>|</span>
          <span style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.72rem" }}>👥 2 Travelers</span>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#6EE7B7", color: "#03150D", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800 }}>
            🔍
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.55rem", position: "relative", zIndex: 2 }}>
        {[
          { n: "Bali", c: "Indonesia", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&auto=format&fit=crop&q=80" },
          { n: "Switzerland", c: "Europe", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400&auto=format&fit=crop&q=80" },
          { n: "Kyoto", c: "Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&auto=format&fit=crop&q=80" },
          { n: "Santorini", c: "Greece", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&auto=format&fit=crop&q=80" }
        ].map((d, i) => (
          <div key={i} style={{ height: "70px", borderRadius: "10px", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0.45rem 0.6rem", border: "1px solid rgba(255, 255, 255, 0.12)" }}>
            <img src={d.img} alt={d.n} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.75rem" }}>{d.n}</div>
              <div style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.58rem" }}>{d.c}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 5. E-COMMERCE DESKTOP (Full-Bleed Visual Style like Travel)
const EcommerceDesktop = () => (
  <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", position: "relative" }}>
    <DesktopNav logoIcon="🛍️" logoText="Shoply" links={["Home", "Shop", "Categories", "About"]} ctaText="🛒 Cart" />
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "1.1rem 1.5rem 1.1rem 40px", position: "relative" }}>
      {/* Full-bleed background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1400&auto=format&fit=crop&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(3, 14, 9, 0.95) 0%, rgba(3, 14, 9, 0.35) 50%, rgba(3, 14, 9, 0.75) 100%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        <h2 style={{ fontSize: "1.85rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, margin: 0 }}>
          Shop Smarter<br /><span style={{ color: "#6EE7B7" }}>Live Better</span>
        </h2>
        <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.78rem", margin: "0.25rem 0 0.75rem 0" }}>
          Curated essentials for a better everyday.
        </p>

        <div style={{
          background: "rgba(5, 18, 12, 0.85)",
          border: "1px solid rgba(110, 231, 183, 0.3)",
          borderRadius: "100px",
          padding: "0.3rem 0.45rem 0.3rem 0.95rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.85rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)"
        }}>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>🔍 Search 1K+ Products</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.72rem" }}>|</span>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>🏷️ 20% Off Spring</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.72rem" }}>|</span>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>⚡ 1-Click Buy</span>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#6EE7B7", color: "#03150D", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800 }}>
            🛍️
          </div>
          <span style={{ background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.15)", color: "#ffffff", padding: "0.3rem 0.7rem", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 600 }}>
            Shop Now
          </span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.55rem", position: "relative", zIndex: 2 }}>
        {[
          { n: "Streetwear & Kicks", c: "Trending Styles", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80" },
          { n: "Smart Audio & Tech", c: "Wireless Pro", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80" },
          { n: "Home & Modern Living", c: "Minimal Design", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&auto=format&fit=crop&q=80" },
          { n: "Daily Accessories", c: "Watches & Gear", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80" }
        ].map((d, i) => (
          <div key={i} style={{ height: "70px", borderRadius: "10px", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0.45rem 0.6rem", border: "1px solid rgba(255, 255, 255, 0.12)" }}>
            <img src={d.img} alt={d.n} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.75rem" }}>{d.n}</div>
              <div style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.58rem" }}>{d.c}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 6. STARTUP DESKTOP (Full-Bleed Visual Style like Travel)
const StartupDesktop = () => (
  <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", position: "relative" }}>
    <DesktopNav logoIcon="🚀" logoText="LaunchPad" links={["Product", "Solutions", "Pricing", "Resources"]} ctaText="Get Started" />
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "1.1rem 1.5rem 1.1rem 40px", position: "relative" }}>
      {/* Full-bleed background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&auto=format&fit=crop&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(3, 14, 9, 0.95) 0%, rgba(3, 14, 9, 0.35) 50%, rgba(3, 14, 9, 0.75) 100%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        <h2 style={{ fontSize: "1.85rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, margin: 0 }}>
          Turn Ideas<br /><span style={{ color: "#6EE7B7" }}>Into Impact</span>
        </h2>
        <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.78rem", margin: "0.25rem 0 0.75rem 0" }}>
          We help startups build, launch and scale digital products.
        </p>

        <div style={{
          background: "rgba(5, 18, 12, 0.85)",
          border: "1px solid rgba(110, 231, 183, 0.3)",
          borderRadius: "100px",
          padding: "0.3rem 0.45rem 0.3rem 0.95rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.85rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)"
        }}>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>💻 Rapid MVP</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.72rem" }}>|</span>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>⚡ Scalable Cloud</span>
          <span style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.72rem" }}>|</span>
          <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.72rem" }}>📈 100+ Launched</span>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#6EE7B7", color: "#03150D", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800 }}>
            🚀
          </div>
          <span style={{ background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.15)", color: "#ffffff", padding: "0.3rem 0.7rem", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 600 }}>
            Launch Now
          </span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.55rem", position: "relative", zIndex: 2 }}>
        {[
          { n: "MVP Engineering", c: "Zero to Product", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80" },
          { n: "SaaS Dashboards", c: "Realtime Analytics", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80" },
          { n: "AI & Automations", c: "Intelligent Flows", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80" },
          { n: "Cloud Architecture", c: "Global Scale", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80" }
        ].map((d, i) => (
          <div key={i} style={{ height: "70px", borderRadius: "10px", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0.45rem 0.6rem", border: "1px solid rgba(255, 255, 255, 0.12)" }}>
            <img src={d.img} alt={d.n} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.75rem" }}>{d.n}</div>
              <div style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.58rem" }}>{d.c}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* =========================================================================
   INDIVIDUAL INDUSTRY MOBILE PHONE MOCKUPS
========================================================================= */

const IndustryPhone = ({ indId }: { indId: string }) => {
  switch (indId) {
    case "gym":
      return (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.45rem" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#6EE7B7" }}>⚡ FitZone</span>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>☰</span>
          </div>
          <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.98rem", lineHeight: 1.15, marginBottom: "0.45rem" }}>
            Today's<br />Workout
          </div>
          <div style={{ flex: 1, borderRadius: "14px", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0.55rem" }}>
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=80" alt="Workout" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: "0.82rem" }}>Push Day</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.62rem", marginBottom: "0.35rem" }}>6 Exercises</div>
              <div style={{ background: "#6EE7B7", color: "#000", textAlign: "center", padding: "0.38rem", borderRadius: "6px", fontWeight: 700, fontSize: "0.72rem" }}>Start</div>
            </div>
          </div>
        </>
      );
    case "cafe":
      return (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.45rem" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#E6C865" }}>☕ Brew & Co.</span>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>☰</span>
          </div>
          <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.15, marginBottom: "0.45rem" }}>
            Good Coffee<br /><span style={{ color: "#E6C865" }}>Better Days</span>
          </div>
          <div style={{ flex: 1, borderRadius: "14px", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0.55rem" }}>
            <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=80" alt="Cafe" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ background: "#6EE7B7", color: "#000", textAlign: "center", padding: "0.38rem", borderRadius: "6px", fontWeight: 700, fontSize: "0.72rem" }}>Order Now</div>
            </div>
          </div>
        </>
      );
    case "restaurant":
      return (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.45rem" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#E6C865" }}>🍽️ Savor</span>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>☰</span>
          </div>
          <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.15, marginBottom: "0.45rem" }}>
            Discover<br /><span style={{ color: "#E6C865" }}>Memorable</span><br />Dining
          </div>
          <div style={{ flex: 1, borderRadius: "14px", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0.55rem" }}>
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=80" alt="Dining" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ background: "#6EE7B7", color: "#000", textAlign: "center", padding: "0.38rem", borderRadius: "6px", fontWeight: 700, fontSize: "0.72rem" }}>Book a Table</div>
            </div>
          </div>
        </>
      );
    case "travel":
      return (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.45rem" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#6EE7B7" }}>🏔️ Wanderly</span>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>☰</span>
          </div>
          <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.98rem", lineHeight: 1.15, marginBottom: "0.45rem" }}>
            Explore<br />the World
          </div>
          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "100px", padding: "0.25rem 0.55rem", fontSize: "0.62rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.45rem" }}>
            🔍 Search destinations...
          </div>
          <div style={{ display: "flex", gap: "0.25rem", marginBottom: "0.45rem" }}>
            {[{ i: "🏖️", l: "Beaches" }, { i: "⛰️", l: "Mountains" }, { i: "🏙️", l: "Cities" }, { i: "🌿", l: "Nature" }].map((c, idx) => (
              <div key={idx} style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "6px", padding: "0.25rem 0.15rem", textAlign: "center" }}>
                <div style={{ fontSize: "0.72rem" }}>{c.i}</div>
                <div style={{ fontSize: "0.48rem", color: "#fff" }}>{c.l}</div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, borderRadius: "12px", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0.45rem" }}>
            <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&auto=format&fit=crop&q=80" alt="Bali" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: "0.76rem" }}>Bali</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.55rem" }}>Indonesia</div>
            </div>
          </div>
        </>
      );
    case "ecommerce":
      return (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.45rem" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#6EE7B7" }}>🛍️ Shoply</span>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>☰</span>
          </div>
          <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.15, marginBottom: "0.45rem" }}>
            Your<br /><span style={{ color: "#6EE7B7" }}>Favorites</span><br />In One Place
          </div>
          <div style={{ flex: 1, borderRadius: "14px", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0.55rem" }}>
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80" alt="Shoes" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ background: "#6EE7B7", color: "#000", textAlign: "center", padding: "0.38rem", borderRadius: "6px", fontWeight: 700, fontSize: "0.72rem" }}>Shop Trend</div>
            </div>
          </div>
        </>
      );
    case "startup":
      return (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.45rem" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#6EE7B7" }}>🚀 LaunchPad</span>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>☰</span>
          </div>
          <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.15, marginBottom: "0.45rem" }}>
            Build<br /><span style={{ color: "#6EE7B7" }}>What's Next</span>
          </div>
          <div style={{ flex: 1, borderRadius: "14px", background: "radial-gradient(circle, rgba(110,231,183,0.3) 0%, rgba(0,0,0,0.8) 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#6EE7B7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.35rem", boxShadow: "0 0 20px rgba(110,231,183,0.6)" }}>
              💎
            </div>
          </div>
          <div style={{ background: "#6EE7B7", color: "#000", textAlign: "center", padding: "0.38rem", borderRadius: "6px", fontWeight: 700, fontSize: "0.72rem", marginTop: "0.4rem" }}>
            Get Started
          </div>
        </>
      );
    default:
      return null;
  }
};

/* =========================================================================
   MAIN INDUSTRIES COMPONENT
========================================================================= */

export function Industries() {
  const [activeTab, setActiveTab] = useState<string>("gym");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDeviceHovered, setIsDeviceHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 8,
        y: (e.clientY / window.innerHeight - 0.5) * 8,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentInd = industriesList.find((i) => i.id === activeTab) || industriesList[0];

  const renderActiveDesktop = () => {
    switch (activeTab) {
      case "gym": return <GymDesktop />;
      case "cafe": return <CafeDesktop />;
      case "restaurant": return <RestaurantDesktop />;
      case "travel": return <TravelDesktop />;
      case "ecommerce": return <EcommerceDesktop />;
      case "startup": return <StartupDesktop />;
      default: return <GymDesktop />;
    }
  };

  return (
    <section
      id="industries"
      className="industries-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        maxHeight: "100vh",
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(1rem, 2vh, 1.8rem) 0 clamp(0.6rem, 1.5vh, 1.2rem) 0",
        fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
        overflow: "hidden",
        transition: "background-color 0.3s ease, color 0.3s ease"
      }}
    >
      {/* Background Image transitions with subtle blur & atmospheric lighting */}
      {industriesList.map((ind) => (
        <div
          key={`bg-${ind.id}`}
          className="industry-bg-image"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${ind.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: activeTab === ind.id ? 0.35 : 0,
            transition: "opacity 0.8s ease-in-out",
            filter: "blur(4px) brightness(0.65)",
            zIndex: 0
          }}
        />
      ))}

      {/* Atmospheric Orbit Circles & Vignette Gradient */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 1 }}>
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "15%",
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            border: "1px solid rgba(110, 231, 183, 0.12)",
            transform: "rotate(-15deg) scaleY(0.45)",
            boxShadow: "0 0 50px rgba(110, 231, 183, 0.05)"
          }}
        />
        <div className="industry-radial-gradient" />
      </div>

      <div
        style={{
          maxWidth: 1480,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 3,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          maxHeight: "calc(100vh - 35px)"
        }}
      >
        {/* Main Grid: Left Tabs Column vs Right 3-Part Showcase Stage */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "290px 1fr",
            gap: "2.2rem",
            alignItems: "stretch",
            flex: 1
          }}
          className="industries-main-grid"
        >
          {/* ================= LEFT COLUMN: HEADER & 6 TABS ================= */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "1rem" }}>
            {/* Header Badge, Headline & Subtitle */}
            <div style={{ marginBottom: "0.2rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <div style={{ width: 24, height: 2, background: "#D4AF37", borderRadius: 2 }} />
                <span style={{ color: "#D4AF37", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  INDUSTRIES
                </span>
              </div>

              <h2 className="industries-main-title" style={{ fontSize: "clamp(1.7rem, 2.2vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.12, margin: "0 0 0.45rem 0" }}>
                We speak your<br />
                <span style={{ color: "#D4AF37" }}>industry's language</span>
              </h2>

              <p className="industries-main-desc" style={{ fontSize: "0.82rem", lineHeight: 1.45, margin: 0 }}>
                Different industries. Different challenges. One approach — building digital products around your business.
              </p>
            </div>

            {/* Vertical 6 Tabs List */}
            <div className="industries-tabs-container" style={{ display: "flex", flexDirection: "column", gap: "0.42rem" }}>
              {industriesList.map((ind) => {
                const isActive = activeTab === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveTab(ind.id)}
                    className={`industry-tab-btn ${isActive ? "active" : ""}`}
                    style={{
                      borderRadius: "12px",
                      padding: "0.68rem 1.1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      textAlign: "left",
                      backdropFilter: "blur(12px)"
                    }}
                  >
                    <span style={{ fontSize: "1.1rem", filter: isActive ? "brightness(0.2)" : "none" }}>
                      {ind.tabIcon}
                    </span>
                    <span style={{ fontWeight: isActive ? 800 : 600, fontSize: "0.88rem" }}>
                      {ind.label}
                    </span>
                    {isActive && (
                      <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center" }}>
                        <ArrowRight size={15} strokeWidth={2.5} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 3-BOX SHOWCASE STAGE ================= */}
          <div
            style={{ position: "relative", width: "100%", height: "100%", minHeight: "470px" }}
            className="industries-showcase-stage"
            onMouseEnter={() => setIsDeviceHovered(true)}
            onMouseLeave={() => setIsDeviceHovered(false)}
          >
            
            {/* 1. FRONT LEFT: GLASS DETAILS CARD */}
            <div
              className="industry-glass-card"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "480px",
                borderRadius: "24px",
                padding: "1.6rem 1.8rem 1.3rem 1.8rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                zIndex: 2
              }}
            >
              <div style={{ maxWidth: "350px" }}>
                {/* Category Tag */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", color: "#6EE7B7", fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.15em", marginBottom: "0.4rem" }}>
                  <span>{currentInd.tag}</span>
                </div>

                {/* Title */}
                <h3 className="industry-card-title" style={{ fontSize: "1.95rem", fontWeight: 800, lineHeight: 1.15, margin: "0 0 0.45rem 0", whiteSpace: "pre-line" }}>
                  {currentInd.title}
                </h3>

                {/* Description */}
                <p className="industry-card-desc" style={{ fontSize: "0.85rem", lineHeight: 1.42, margin: "0 0 1.1rem 0" }}>
                  {currentInd.description}
                </p>

                {/* 3 Feature Bullets */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {currentInd.features.map((feat, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div className="industry-feature-icon" style={{
                        width: 38,
                        height: 38,
                        borderRadius: "11px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.08rem",
                        flexShrink: 0
                      }}>
                        {feat.icon}
                      </div>
                      <div>
                        <div className="industry-feature-title" style={{ fontWeight: 700, fontSize: "0.92rem", lineHeight: 1.2 }}>
                          {feat.title}
                        </div>
                        <div className="industry-feature-desc" style={{ fontSize: "0.75rem", lineHeight: 1.25, marginTop: "1px" }}>
                          {feat.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom 3 Stat Cards inside Left Card */}
              <div className="industry-stats-grid" style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.45rem",
                paddingTop: "0.85rem",
                maxWidth: "350px"
              }}>
                {currentInd.stats.map((st, i) => (
                  <div key={i} className="industry-stat-pill" style={{
                    borderRadius: "12px",
                    padding: "0.55rem 0.55rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem"
                  }}>
                    <span style={{ fontSize: "1.1rem", color: i === 2 ? "#FBBF24" : "#6EE7B7" }}>{st.icon}</span>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span className="industry-stat-val" style={{ fontWeight: 800, fontSize: "0.98rem", lineHeight: 1 }}>{st.value}</span>
                      <span className="industry-stat-lbl" style={{ fontSize: "0.6rem", fontWeight: 600, marginTop: "2px" }}>{st.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. 3D TILTED DEVICES CONTAINER */}
            <div
              style={{
                position: "absolute",
                left: "350px",
                right: 0,
                top: 0,
                bottom: 0,
                perspective: "1400px",
                display: "flex",
                alignItems: "center",
                zIndex: 5,
                cursor: "pointer"
              }}
            >
              {/* BACK DESKTOP BROWSER WINDOW */}
              <div
                style={{
                  position: "absolute",
                  left: "85px",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  transformStyle: "preserve-3d"
                }}
              >
                {/* 1. TOP CURSIVE ANNOTATION: Centered safely above window */}
                <div
                  style={{
                    position: "absolute",
                    top: "-24px",
                    right: "120px",
                    fontFamily: "'Caveat', cursive",
                    fontSize: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    pointerEvents: "none",
                    zIndex: 25,
                    whiteSpace: "nowrap"
                  }}
                  className="industry-sky-annotation"
                >
                  <span>Industry based background change</span>
                  <svg width="24" height="18" viewBox="0 0 30 24" fill="none">
                    <path d="M5 20 C 15 15, 25 10, 25 2 M 25 2 L 18 3 M 25 2 L 24 9" stroke="#6EE7B7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* 2. FLOATING HERO SLOGAN: Safely indented inside window hero area */}
                <div
                  style={{
                    position: "absolute",
                    top: "50px",
                    right: "140px",
                    maxWidth: "220px",
                    textAlign: "right",
                    fontFamily: "'Caveat', cursive",
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    transform: isDeviceHovered ? "rotate(-3deg)" : "rotate(-5deg)",
                    textShadow: "0 2px 10px rgba(0,0,0,0.95), 0 0 15px rgba(110, 231, 183, 0.4)",
                    whiteSpace: "pre-line",
                    lineHeight: 1.1,
                    zIndex: 25,
                    pointerEvents: "none",
                    transition: "transform 0.3s ease"
                  }}
                >
                  {currentInd.tagline}
                </div>

                {/* 3. SIDE CURSIVE ANNOTATION: Moved inside pointing right at bottom cards */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "22px",
                    left: "24px",
                    fontFamily: "'Caveat', cursive",
                    fontSize: "1.08rem",
                    lineHeight: 1.15,
                    zIndex: 25,
                    pointerEvents: "none",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}
                  className="industry-side-annotation"
                >
                  <span style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>
                    Real product preview<br />for each industry
                  </span>
                  <div style={{ color: "#6EE7B7", transform: "rotate(-10deg)" }}>
                    <svg width="26" height="18" viewBox="0 0 36 24" fill="none">
                      <path d="M5 12 C 15 12, 28 8, 32 3 M 32 3 L 24 2 M 32 3 L 30 10" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div
                  className="industry-desktop-window"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(145deg, rgba(8, 28, 20, 0.88), rgba(3, 14, 9, 0.98))",
                    backdropFilter: "blur(30px)",
                    borderRadius: "20px",
                    border: isDeviceHovered ? "1.5px solid rgba(110, 231, 183, 0.6)" : "1.5px solid rgba(110, 231, 183, 0.3)",
                    boxShadow: isDeviceHovered
                      ? "-25px 25px 70px rgba(0, 0, 0, 0.95), 0 0 55px rgba(110, 231, 183, 0.25)"
                      : "-25px 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(110, 231, 183, 0.1)",
                    overflow: "hidden",
                    transform: isDeviceHovered
                      ? `rotateY(-10deg) rotateX(2deg) translateY(-4px) translateY(${mousePos.y * 0.25}px) translateX(${mousePos.x * 0.25}px)`
                      : `rotateY(-14deg) rotateX(4deg) translateY(${mousePos.y * 0.15}px) translateX(${mousePos.x * 0.15}px)`,
                    transformOrigin: "center right",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.35s ease-out, border 0.3s ease, box-shadow 0.3s ease"
                  }}
                >
                  {renderActiveDesktop()}
                </div>
              </div>

              {/* 3. FRONT PHONE MOCKUP */}
              <div
                className="industry-phone-frame"
                style={{
                  position: "absolute",
                  left: "0",
                  top: "50%",
                  transform: isDeviceHovered
                    ? `translateY(-52%) rotateY(-5deg) rotateX(2deg) scale(1.02) translateY(${mousePos.y * 0.3}px) translateX(${mousePos.x * 0.3}px)`
                    : `translateY(-50%) rotateY(-8deg) rotateX(3deg) translateY(${mousePos.y * 0.15}px) translateX(${mousePos.x * 0.15}px)`,
                  width: "210px",
                  height: "410px",
                  background: "linear-gradient(165deg, rgba(16, 32, 24, 0.98), rgba(3, 10, 7, 1))",
                  borderRadius: "32px",
                  border: isDeviceHovered ? "2.5px solid rgba(110, 231, 183, 0.6)" : "2.2px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: isDeviceHovered
                    ? "0 35px 90px rgba(0, 0, 0, 0.98), 0 0 45px rgba(110, 231, 183, 0.3)"
                    : "0 25px 70px rgba(0, 0, 0, 0.95), 0 0 35px rgba(0,0,0,0.7)",
                  overflow: "hidden",
                  zIndex: 20,
                  display: "flex",
                  flexDirection: "column",
                  padding: "0.85rem",
                  backdropFilter: "blur(25px)",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.35s ease-out, border 0.3s ease, box-shadow 0.3s ease"
                }}
              >
                {/* Phone Speaker Notch */}
                <div style={{ width: 55, height: 11, background: "#000", borderRadius: 8, margin: "0 auto 0.6rem auto" }} />
                
                {/* Dynamic Inner App */}
                <IndustryPhone indId={currentInd.id} />

                {/* Bottom Navigation */}
                <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "0.55rem", color: "rgba(255,255,255,0.45)", fontSize: "0.88rem" }}>
                  <span style={{ color: "#6EE7B7" }}>🏠</span>
                  <span>🔍</span>
                  <span>❤️</span>
                  <span>👤</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Center Tagline Divider */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.2rem",
          marginTop: "clamp(0.4rem, 1vh, 0.8rem)",
          color: "rgba(255, 255, 255, 0.65)",
          fontSize: "0.82rem",
          fontWeight: 500
        }} className="industry-bottom-tagline">
          <div style={{ width: 50, height: 1, background: "linear-gradient(to right, transparent, rgba(212, 175, 55, 0.6))" }} />
          <span>One industry. Infinite possibilities.</span>
          <div style={{ width: 50, height: 1, background: "linear-gradient(to left, transparent, rgba(212, 175, 55, 0.6))" }} />
        </div>
      </div>

      <style>{`
        /* ================= DARK THEME (ODD SECTION: LIGHTER DARK) ================= */
        .industries-section {
          background-color: #06130D;
          color: #ffffff;
        }
        .industry-radial-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 60% 40%, rgba(10, 40, 28, 0.45) 0%, rgba(6, 19, 13, 0.9) 65%, rgba(6, 19, 13, 0.98) 100%);
        }
        .industries-main-title {
          color: #ffffff;
        }
        .industries-main-desc {
          color: rgba(255, 255, 255, 0.65);
        }
        .industry-tab-btn {
          background: rgba(18, 32, 26, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #ffffff;
        }
        .industry-tab-btn:hover {
          background: rgba(255, 255, 255, 0.08);
        }
        .industry-tab-btn.active {
          background: linear-gradient(135deg, #D4AF37 0%, #AA8425 100%);
          border: none;
          color: #0A140F;
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
        }
        .industry-sky-annotation {
          color: rgba(255, 255, 255, 0.9);
        }
        .industry-side-annotation {
          color: rgba(255, 255, 255, 0.9);
        }
        .industry-glass-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.09) 0%, rgba(10, 32, 24, 0.85) 60%, rgba(4, 18, 12, 0.96) 100%);
          backdrop-filter: blur(32px);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.75), inset 0 1.5px 2px rgba(255, 255, 255, 0.35);
        }
        .industry-card-title {
          color: #ffffff;
        }
        .industry-card-desc {
          color: rgba(255, 255, 255, 0.72);
        }
        .industry-feature-icon {
          background: rgba(110, 231, 183, 0.1);
          border: 1.5px solid rgba(110, 231, 183, 0.25);
          color: #6EE7B7;
        }
        .industry-feature-title {
          color: #ffffff;
        }
        .industry-feature-desc {
          color: rgba(255, 255, 255, 0.55);
        }
        .industry-stats-grid {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .industry-stat-pill {
          background: rgba(12, 34, 25, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .industry-stat-val {
          color: #ffffff;
        }
        .industry-stat-lbl {
          color: rgba(255, 255, 255, 0.55);
        }
        .industry-bottom-tagline {
          color: rgba(255, 255, 255, 0.65);
        }

        /* ================= LIGHT THEME SUPPORT ================= */
        html:not(.dark) .industries-section {
          background-color: #F6F5F0;
          color: #1B2B24;
        }
        html:not(.dark) .industry-bg-image {
          filter: blur(6px) brightness(1.15) opacity(0.25) !important;
        }
        html:not(.dark) .industry-radial-gradient {
          background: radial-gradient(circle at 60% 40%, rgba(200, 235, 220, 0.35) 0%, rgba(246, 245, 240, 0.85) 65%, rgba(246, 245, 240, 0.98) 100%);
        }
        html:not(.dark) .industries-main-title {
          color: #143026;
        }
        html:not(.dark) .industries-main-desc {
          color: #4A6357;
        }
        html:not(.dark) .industry-tab-btn {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(20, 48, 38, 0.08);
          color: #143026;
        }
        html:not(.dark) .industry-tab-btn:hover {
          background: rgba(255, 255, 255, 1);
        }
        html:not(.dark) .industry-tab-btn.active {
          background: linear-gradient(135deg, #D4AF37 0%, #AA8425 100%);
          border: none;
          color: #0A140F;
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.25);
        }
        html:not(.dark) .industry-sky-annotation {
          color: #143026;
        }
        html:not(.dark) .industry-side-annotation {
          color: #143026;
        }
        html:not(.dark) .industry-glass-card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(244, 247, 245, 0.9) 100%);
          backdrop-filter: blur(30px);
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 20px 50px rgba(20, 48, 38, 0.08), inset 0 1px 2px rgba(255, 255, 255, 1);
        }
        html:not(.dark) .industry-card-title {
          color: #143026;
        }
        html:not(.dark) .industry-card-desc {
          color: #4A6357;
        }
        html:not(.dark) .industry-feature-icon {
          background: rgba(20, 48, 38, 0.06);
          border: 1.5px solid rgba(20, 48, 38, 0.12);
          color: #0E6B4B;
        }
        html:not(.dark) .industry-feature-title {
          color: #143026;
        }
        html:not(.dark) .industry-feature-desc {
          color: #5B7569;
        }
        html:not(.dark) .industry-stats-grid {
          border-top: 1px solid rgba(20, 48, 38, 0.08);
        }
        html:not(.dark) .industry-stat-pill {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(20, 48, 38, 0.08);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }
        html:not(.dark) .industry-stat-val {
          color: #143026;
        }
        html:not(.dark) .industry-stat-lbl {
          color: #5B7569;
        }
        html:not(.dark) .industry-bottom-tagline {
          color: #4A6357;
        }

        /* ================= RESPONSIVE DESIGN ================= */
        @media (max-width: 1180px) {
          .industries-section { height: auto !important; max-height: none !important; padding: 3rem 0 !important; }
          .industries-main-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .industries-tabs-container { flex-direction: row !important; overflow-x: auto !important; padding-bottom: 0.5rem; }
          .industries-tabs-container button { white-space: nowrap !important; flex-shrink: 0 !important; }
          .industry-side-annotation { display: none !important; }
          .industries-showcase-stage { height: auto !important; min-height: 500px !important; }
        }
      `}</style>
    </section>
  );
}
