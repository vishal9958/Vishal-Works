import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ProjectFeature {
  icon: string;
  title: string;
  desc: string;
}

interface ProjectStat {
  icon: string;
  value: string;
  label: string;
  subIcon?: string;
}

interface ProjectData {
  id: string;
  num: string;
  client: string;
  category: string;
  cursiveTag: string;
  tagline: string;
  description: string;
  features: ProjectFeature[];
  stats: ProjectStat[];
  technologies: string[];
  link: string;
  mainImage: string;
  thumbnails: string[];
  desktopUI: {
    logo: string;
    nav: string[];
    headline: string;
    sub: string;
    accentColor: string;
    cards: Array<{ name: string; price: string; img: string }>;
  };
  phoneUI: {
    logo: string;
    headline: string;
    sub: string;
    btnText: string;
    img: string;
  };
}

const projectsData: ProjectData[] = [
  {
    id: "cafe",
    num: "01",
    client: "Cafe",
    category: "Cafe · Web Design + Brand Identity",
    cursiveTag: "Good Coffee\nBetter People",
    tagline: "Where handcrafted flavor meets digital patience.",
    description: "We designed a complete digital experience for a modern cafe — from brand identity and website to an online ordering system and digital menu, helping them attract more customers and streamline operations.",
    features: [
      { icon: "☕", title: "Online Ordering System", desc: "Seamless ordering experience for web & mobile." },
      { icon: "📖", title: "Interactive Digital Menu", desc: "Beautifully designed menu with real-time updates." },
      { icon: "🎨", title: "Brand Identity", desc: "Logo, color palette, and visual storytelling." },
      { icon: "📈", title: "Higher Engagement", desc: "More customers, more orders, stronger brand presence." }
    ],
    stats: [
      { icon: "🛒", value: "+220%", label: "online orders", subIcon: "📊" },
      { icon: "👥", value: "65%", label: "repeat rate", subIcon: "📈" },
      { icon: "⭐", value: "Featured in", label: "Condé Nast", subIcon: "🔖" }
    ],
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS", "Vercel"],
    link: "https://cafe-designn.vercel.app/",
    mainImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200",
    thumbnails: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400"
    ],
    desktopUI: {
      logo: "☕ Brew & Co.",
      nav: ["Home", "Menu", "About", "Contact"],
      headline: "Good Coffee\nBetter Days",
      sub: "Specialty coffee. Fresh food. A warmer you.",
      accentColor: "#E5A93C",
      cards: [
        { name: "Cappuccino", price: "₹180", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&auto=format&fit=crop&q=80" },
        { name: "Blueberry Muffin", price: "₹220", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&auto=format&fit=crop&q=80" },
        { name: "Avocado Toast", price: "₹260", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300&auto=format&fit=crop&q=80" }
      ]
    },
    phoneUI: {
      logo: "☕ Brew & Co.",
      headline: "Good Coffee\nBetter Days",
      sub: "Freshly brewed happiness.",
      btnText: "Order Now",
      img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "gym",
    num: "02",
    client: "Gym",
    category: "Gym · Performance Identity + Web",
    cursiveTag: "Stronger\nEvery Single Day",
    tagline: "Transforming limits, built for elite athletes.",
    description: "We built an end-to-end digital performance hub for an elite fitness club — complete with class scheduling, live trainer booking, interactive progress analytics, and seamless membership checkout.",
    features: [
      { icon: "⚡", title: "Class Scheduling & Booking", desc: "Real-time calendar and trainer assignments." },
      { icon: "📊", title: "Workout & Progress Trackers", desc: "Engaging personal performance dashboards." },
      { icon: "💳", title: "Frictionless Membership", desc: "1-click recurring billing and day passes." },
      { icon: "🏆", title: "High Athlete Retention", desc: "Automated workout streaks and leaderboards." }
    ],
    stats: [
      { icon: "🏋️", value: "+180%", label: "member signups", subIcon: "📊" },
      { icon: "📈", value: "98%", label: "retention rate", subIcon: "⚡" },
      { icon: "⭐", value: "4.9 Rating", label: "Google Reviews", subIcon: "🔖" }
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe Billing", "Supabase"],
    link: "https://gym-design-temp.vercel.app/",
    mainImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    thumbnails: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=400"
    ],
    desktopUI: {
      logo: "⚡ FitZone",
      nav: ["Home", "Programs", "Trainers", "Pricing"],
      headline: "Build A\nHealthier You",
      sub: "Personalized workout plans. Real results.",
      accentColor: "#6EE7B7",
      cards: [
        { name: "Strength & HIIT", price: "₹2,500/mo", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300&auto=format&fit=crop&q=80" },
        { name: "Personal Coach", price: "₹4,000/mo", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&auto=format&fit=crop&q=80" },
        { name: "Yoga & Recovery", price: "₹1,800/mo", img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=300&auto=format&fit=crop&q=80" }
      ]
    },
    phoneUI: {
      logo: "⚡ FitZone",
      headline: "Today's\nWorkout",
      sub: "Push Day · 6 Exercises",
      btnText: "Start Workout",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "ecommerce",
    num: "03",
    client: "E-commerce",
    category: "E-commerce · High-Conversion Store",
    cursiveTag: "Curated Style\nEffortless Checkout",
    tagline: "Reveal your timeless beauty with frictionless commerce.",
    description: "We designed and developed a high-converting direct-to-consumer storefront with lightning-fast 1-click checkout, dynamic product bundles, and personalized AI recommendations.",
    features: [
      { icon: "⚡", title: "1-Click Fast Checkout", desc: "Frictionless cart with Apple Pay & Stripe." },
      { icon: "📦", title: "Dynamic Bundle Builder", desc: "Increased average order value with smart upsells." },
      { icon: "✨", title: "Live Stock & Variant System", desc: "Interactive color selector and fit calculator." },
      { icon: "🎯", title: "Conversion-Optimized UX", desc: "Predictive search and social proof integration." }
    ],
    stats: [
      { icon: "🛍️", value: "+280%", label: "conversion rate", subIcon: "📊" },
      { icon: "⚡", value: "0.6s", label: "checkout speed", subIcon: "📈" },
      { icon: "⭐", value: "+45%", label: "avg order value", subIcon: "🔖" }
    ],
    technologies: ["Shopify Plus", "Next.js", "Tailwind CSS", "Stripe", "Vercel"],
    link: "https://ecommerce-design-templete.vercel.app/",
    mainImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    thumbnails: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400"
    ],
    desktopUI: {
      logo: "🛍️ Shoply",
      nav: ["Shop", "Collections", "New Drops", "Cart (2)"],
      headline: "Shop Smarter\nLive Better",
      sub: "Curated essentials for your modern lifestyle.",
      accentColor: "#6EE7B7",
      cards: [
        { name: "Air Pro Kicks", price: "₹4,999", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop&q=80" },
        { name: "Wireless Pro", price: "₹8,499", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=80" },
        { name: "Minimal Watch", price: "₹3,299", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=80" }
      ]
    },
    phoneUI: {
      logo: "🛍️ Shoply",
      headline: "Trending\nSpring Drops",
      sub: "20% off with code SPRING",
      btnText: "Shop Collection",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "travel",
    num: "04",
    client: "Travel",
    category: "Travel · Cinematic Booking + Blog",
    cursiveTag: "Good Journeys\nBetter Stories",
    tagline: "Inspiring journeys and cinematic visual stories.",
    description: "We engineered an immersive travel booking platform for an experiential tour agency — featuring dynamic itinerary builders, destination showcases, and automated group checkout.",
    features: [
      { icon: "🌐", title: "Custom Itinerary Builders", desc: "Day-by-day visual trip planners with maps." },
      { icon: "📅", title: "Real-Time Tour Booking", desc: "Instant date reservation & secure deposit." },
      { icon: "📸", title: "Destination Showcases", desc: "Engaging 4K photography and video reels." },
      { icon: "💬", title: "Verified Traveler Reviews", desc: "Community ratings and custom package inquiries." }
    ],
    stats: [
      { icon: "✈️", value: "+190%", label: "tour inquiries", subIcon: "📊" },
      { icon: "🗺️", value: "50+", label: "destinations", subIcon: "📈" },
      { icon: "⭐", value: "4.9/5", label: "traveler rating", subIcon: "🔖" }
    ],
    technologies: ["Next.js", "Framer Motion", "Mapbox", "Tailwind CSS", "Vercel"],
    link: "https://cinematic-travel-site.vercel.app/",
    mainImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    thumbnails: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=400"
    ],
    desktopUI: {
      logo: "🏔️ Wanderly",
      nav: ["Destinations", "Packages", "About", "Contact"],
      headline: "Discover\nThe World",
      sub: "Travel farther. Experience deeper.",
      accentColor: "#6EE7B7",
      cards: [
        { name: "Bali Paradise", price: "₹45,000", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&auto=format&fit=crop&q=80" },
        { name: "Swiss Alps", price: "₹1,20,000", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=300&auto=format&fit=crop&q=80" },
        { name: "Kyoto Autumn", price: "₹85,000", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&auto=format&fit=crop&q=80" }
      ]
    },
    phoneUI: {
      logo: "🏔️ Wanderly",
      headline: "Explore The\nUncharted",
      sub: "Custom packages available",
      btnText: "Explore Trips",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "startup",
    num: "05",
    client: "Startup",
    category: "Startup · SaaS Landing Page",
    cursiveTag: "Ideas Build\nA Better Tomorrow",
    tagline: "Turn ideas into high-impact digital products.",
    description: "We designed and developed an investor-ready SaaS platform and conversion engine — featuring interactive product tours, real-time analytics demos, and high-velocity waitlist onboarding.",
    features: [
      { icon: "💻", title: "Rapid MVP Architecture", desc: "Production-grade Next.js & Supabase setup." },
      { icon: "📊", title: "Interactive Demo Dashboards", desc: "Live product previews for potential buyers." },
      { icon: "⚡", title: "100/100 PageSpeed Score", desc: "Sub-500ms load times and instant indexing." },
      { icon: "🛡️", title: "Investor-Grade UX", desc: "High-converting pitch decks and landing UX." }
    ],
    stats: [
      { icon: "🚀", value: "+150%", label: "waitlist signups", subIcon: "📊" },
      { icon: "⚡", value: "500ms", label: "page load speed", subIcon: "📈" },
      { icon: "⭐", value: "$2.4M", label: "seed round raised", subIcon: "🔖" }
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    link: "https://startup-design-temp.vercel.app/",
    mainImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
    thumbnails: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400"
    ],
    desktopUI: {
      logo: "🚀 LaunchPad",
      nav: ["Product", "Solutions", "Pricing", "Resources"],
      headline: "Turn Ideas\nInto Impact",
      sub: "We help startups build, launch and scale modern apps.",
      accentColor: "#6EE7B7",
      cards: [
        { name: "AI Workflow Engine", price: "Live Demo", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&auto=format&fit=crop&q=80" },
        { name: "Real-time Analytics", price: "Built-in", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&auto=format&fit=crop&q=80" },
        { name: "Cloud Architecture", price: "Global Scale", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&auto=format&fit=crop&q=80" }
      ]
    },
    phoneUI: {
      logo: "🚀 LaunchPad",
      headline: "Build What's\nNext Today",
      sub: "Launch your MVP in 14 days",
      btnText: "Get Started",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80"
    }
  },
  {
    id: "restaurant",
    num: "06",
    client: "Restaurant",
    category: "Restaurant · Reservation + Web System",
    cursiveTag: "Great Food\nBrings People Together",
    tagline: "Tables full every night, crafted with culinary care.",
    description: "We crafted an elegant digital dining portal for an upscale gourmet restaurant — complete with interactive tasting menus, direct table reservation engine, and private event inquiry management.",
    features: [
      { icon: "🍽️", title: "Direct Table Reservations", desc: "Real-time table booking with zero 3rd-party fees." },
      { icon: "🍷", title: "Digital Tasting Menus", desc: "Signature dishes with allergens and pairings." },
      { icon: "🥂", title: "Private Event Inquiries", desc: "Custom packages for celebrations & dinners." },
      { icon: "⭐", title: "VIP Loyalty Showcase", desc: "Exclusive chef table invitations and rewards." }
    ],
    stats: [
      { icon: "🍽️", value: "+310%", label: "reservations", subIcon: "📊" },
      { icon: "💰", value: "0%", label: "third-party fees", subIcon: "📈" },
      { icon: "⭐", value: "4.9", label: "Michelin Guide", subIcon: "🔖" }
    ],
    technologies: ["Next.js", "Tailwind CSS", "Resy API", "Sanity CMS", "Vercel"],
    link: "https://restaurant-demooo.vercel.app/",
    mainImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    thumbnails: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=400"
    ],
    desktopUI: {
      logo: "🍽️ Savor",
      nav: ["Home", "Menu", "Reservations", "About"],
      headline: "Food That Brings\nPeople Together",
      sub: "Delicious food. Memorable dining experiences.",
      accentColor: "#E5A93C",
      cards: [
        { name: "Curated Tasting", price: "₹3,800", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&auto=format&fit=crop&q=80" },
        { name: "Fine Dining Ambiance", price: "Candlelight", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&auto=format&fit=crop&q=80" },
        { name: "Artisan Cellar", price: "Signature", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&auto=format&fit=crop&q=80" }
      ]
    },
    phoneUI: {
      logo: "🍽️ Savor",
      headline: "Discover\nMemorable Dining",
      sub: "Reserve your private table",
      btnText: "Book Table",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=80"
    }
  }
];

export function FeaturedWork() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [selectedThumbIdx, setSelectedThumbIdx] = useState<number>(0);
  const [isDeviceHovered, setIsDeviceHovered] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const currentProj = projectsData[activeIdx] || projectsData[0];

  useEffect(() => {
    setSelectedThumbIdx(0);
  }, [activeIdx]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="work"
      className="featured-work-section"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(1.5rem, 3.5vh, 2.8rem) 0",
        fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
        minHeight: "100vh",
        maxHeight: "100vh",
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        transition: "background-color 0.3s ease, color 0.3s ease"
      }}
    >
      {/* Background Warm Ambiance Lights */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "15%",
            width: "45vw",
            height: "45vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(229, 169, 60, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(110, 231, 183, 0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1480,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          maxHeight: "calc(100vh - 20px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        {/* ================= TOP HEADER BAR ================= */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "clamp(0.6rem, 1.5vh, 1.2rem)"
          }}
          className="featured-header"
        >
          {/* Left Title Area */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
              <div style={{ width: 22, height: 2, background: "#E5A93C", borderRadius: 2 }} />
              <span style={{ color: "#E5A93C", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                FEATURED WORK
              </span>
            </div>

            <h2 className="featured-main-title" style={{ fontSize: "clamp(1.6rem, 2.2vw, 2.3rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.12, margin: "0 0 0.25rem 0" }}>
              Results, not just<br />
              <span style={{ color: "#E5A93C" }}>beautiful work</span>
            </h2>

            <p className="featured-main-desc" style={{ fontSize: "0.82rem", lineHeight: 1.4, margin: 0, maxWidth: "520px" }}>
              Real problems. Thoughtful solutions. Digital products that make a difference.
            </p>
          </div>

          {/* Right Cursive Hint & Circular Numbered Tabs */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.4rem" }}>
            {/* Cursive Annotation pointing to tabs */}
            <div
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1.05rem",
                color: "rgba(255, 255, 255, 0.85)",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                paddingRight: "1rem"
              }}
              className="featured-top-annotation"
            >
              <span>Click to explore<br />more projects</span>
              <svg width="28" height="24" viewBox="0 0 34 28" fill="none" style={{ transform: "rotate(10deg)" }}>
                <path d="M4 4 C 14 6, 26 12, 28 24 M 28 24 L 20 22 M 28 24 L 27 16" stroke="#E5A93C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* 6 Circular Tabs */}
            <div style={{ display: "flex", gap: "1.1rem", alignItems: "center" }} className="featured-tabs-row">
              {projectsData.map((proj, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`featured-tab-btn ${isActive ? "active" : ""}`}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.3rem",
                      transition: "all 0.25s ease"
                    }}
                  >
                    <div
                      className="tab-circle"
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.82rem",
                        fontWeight: 800,
                        transition: "all 0.25s ease",
                        background: isActive ? "#E5A93C" : "rgba(255, 255, 255, 0.05)",
                        color: isActive ? "#020704" : "rgba(255, 255, 255, 0.7)",
                        border: isActive ? "2px solid #E5A93C" : "1px solid rgba(255, 255, 255, 0.15)",
                        boxShadow: isActive ? "0 4px 16px rgba(229, 169, 60, 0.4)" : "none"
                      }}
                    >
                      {proj.num}
                    </div>
                    <span
                      className="tab-label"
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: isActive ? 800 : 500,
                        color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.55)",
                        transition: "color 0.25s ease"
                      }}
                    >
                      {proj.client}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= MAIN 2-COLUMN SHOWCASE GRID ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1.35fr",
            gap: "1.8rem",
            alignItems: "stretch",
            flex: 1,
            minHeight: 0
          }}
          className="featured-main-grid"
        >
          {/* ================= LEFT COLUMN: HERO PREVIEW + THUMBS + STATS ================= */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "0.75rem",
              height: "100%"
            }}
          >
            {/* 1. Large Hero Video / Photo Preview Card */}
            <div
              className="featured-hero-card"
              style={{
                flex: 1,
                minHeight: "220px",
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                border: "1.5px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.65)",
                cursor: "pointer",
                transition: "border 0.3s ease, box-shadow 0.3s ease"
              }}
            >
              {/* Background Cover Photo */}
              <img
                src={currentProj.thumbnails[selectedThumbIdx] || currentProj.mainImage}
                alt={currentProj.client}
                className="hero-card-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)" }} />

              {/* Top-Left Category Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "0.85rem",
                  left: "0.85rem",
                  background: "rgba(10, 20, 15, 0.75)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "100px",
                  padding: "0.32rem 0.85rem",
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  zIndex: 3
                }}
              >
                {currentProj.category}
              </div>

              {/* Top-Right Cursive Tag right on image */}
              <div
                style={{
                  position: "absolute",
                  top: "0.85rem",
                  right: "1.2rem",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  textAlign: "right",
                  whiteSpace: "pre-line",
                  lineHeight: 1.1,
                  textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                  zIndex: 3
                }}
              >
                {currentProj.cursiveTag}
              </div>
            </div>

            {/* 2. Gallery Thumbnails Strip (4 thumbs + "+3 More") */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.55rem" }}>
              {currentProj.thumbnails.map((thumb, tIdx) => {
                const isSelected = selectedThumbIdx === tIdx;
                return (
                  <button
                    key={tIdx}
                    onClick={() => setSelectedThumbIdx(tIdx)}
                    className="gallery-thumb-btn"
                    style={{
                      height: 52,
                      borderRadius: "10px",
                      overflow: "hidden",
                      padding: 0,
                      border: isSelected ? "2px solid #6EE7B7" : "1px solid rgba(255, 255, 255, 0.12)",
                      cursor: "pointer",
                      position: "relative",
                      background: "none",
                      boxShadow: isSelected ? "0 0 14px rgba(110, 231, 183, 0.45)" : "none",
                      transition: "all 0.25s ease"
                    }}
                  >
                    <img src={thumb} alt={`Thumb ${tIdx}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </button>
                );
              })}

              {/* 5th Box: +3 More */}
              <div
                className="gallery-more-btn"
                style={{
                  height: 52,
                  borderRadius: "10px",
                  background: "rgba(12, 28, 20, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  cursor: "pointer",
                  transition: "all 0.25s ease"
                }}
              >
                <span style={{ fontWeight: 800, fontSize: "0.82rem", lineHeight: 1 }}>+3</span>
                <span style={{ fontSize: "0.58rem", color: "rgba(255, 255, 255, 0.6)", marginTop: "2px" }}>More</span>
              </div>
            </div>

            {/* 3. Bottom Stats Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.55rem"
              }}
              className="featured-stats-strip"
            >
              {currentProj.stats.map((st, i) => (
                <div
                  key={i}
                  className="featured-stat-card"
                  style={{
                    borderRadius: "12px",
                    padding: "0.6rem 0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backdropFilter: "blur(12px)",
                    transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1.1rem" }}>{st.icon}</span>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span className="stat-val" style={{ fontWeight: 800, fontSize: "0.95rem", lineHeight: 1.1 }}>
                        {st.value}
                      </span>
                      <span className="stat-lbl" style={{ fontSize: "0.65rem", marginTop: "2px" }}>
                        {st.label}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: "0.82rem", opacity: 0.7 }}>{st.subIcon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CASE STUDY CONTENT + DEVICE MOCKUP ================= */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: "1.2rem",
              alignItems: "stretch",
              height: "100%"
            }}
            className="featured-details-grid"
          >
            {/* Left part of Right Column: Text, 4 Features, Action Buttons, Tech */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingRight: "0.5rem"
              }}
            >
              <div>
                {/* Case Study Badge */}
                <div
                  style={{
                    display: "inline-block",
                    background: "#E5A93C",
                    color: "#030E08",
                    borderRadius: "6px",
                    padding: "0.22rem 0.65rem",
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.45rem"
                  }}
                >
                  CASE STUDY
                </div>

                {/* Project Title */}
                <h3 className="featured-project-title" style={{ fontSize: "clamp(1.5rem, 2vw, 1.95rem)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 0.25rem 0" }}>
                  {currentProj.client}
                </h3>

                {/* Tagline quote */}
                <p style={{ fontSize: "0.85rem", color: "#E5A93C", fontWeight: 600, fontStyle: "italic", margin: "0 0 0.55rem 0", lineHeight: 1.3 }}>
                  "{currentProj.tagline}"
                </p>

                {/* Description */}
                <p className="featured-project-desc" style={{ fontSize: "0.78rem", lineHeight: 1.4, margin: "0 0 0.85rem 0" }}>
                  {currentProj.description}
                </p>

                {/* 4 Feature Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  {currentProj.features.map((feat, fIdx) => (
                    <div key={fIdx} className="feature-item-row" style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", transition: "transform 0.2s ease" }}>
                      <div
                        className="feature-bullet-icon"
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.85rem",
                          flexShrink: 0,
                          transition: "all 0.2s ease"
                        }}
                      >
                        {feat.icon}
                      </div>
                      <div>
                        <div className="feature-bullet-title" style={{ fontWeight: 700, fontSize: "0.82rem", lineHeight: 1.15 }}>
                          {feat.title}
                        </div>
                        <div className="feature-bullet-desc" style={{ fontSize: "0.7rem", lineHeight: 1.25, marginTop: "1px" }}>
                          {feat.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions + Tech Tags */}
              <div style={{ marginTop: "0.8rem" }}>
                {/* 2 Action Buttons */}
                <div style={{ display: "flex", gap: "0.65rem", alignItems: "center", marginBottom: "0.75rem" }}>
                  <a
                    href={currentProj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-site-btn"
                    style={{
                      background: "#E5A93C",
                      color: "#03120A",
                      padding: "0.45rem 1rem",
                      borderRadius: "8px",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      boxShadow: "0 4px 14px rgba(229, 169, 60, 0.35)",
                      transition: "transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease"
                    }}
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </a>
                </div>

                {/* Technologies Used */}
                <div>
                  <div className="tech-label" style={{ fontSize: "0.68rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                    Technologies Used
                  </div>
                  <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                    {currentProj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-pill"
                        style={{
                          borderRadius: "100px",
                          padding: "0.2rem 0.6rem",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          transition: "all 0.2s ease"
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right part of Right Column: 3D FLOATING DEVICE MOCKUPS (PHONE + DESKTOP) WITH HOVER PHYSICS */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                perspective: "1200px",
                cursor: "pointer"
              }}
              className="featured-devices-wrapper"
              onMouseEnter={() => setIsDeviceHovered(true)}
              onMouseLeave={() => setIsDeviceHovered(false)}
            >
              {/* Back Desktop Screen Mockup */}
              <div
                className="featured-desktop-device"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "6%",
                  bottom: "6%",
                  width: "82%",
                  borderRadius: "16px",
                  border: isDeviceHovered ? "1.5px solid rgba(110, 231, 183, 0.7)" : "1.5px solid rgba(110, 231, 183, 0.4)",
                  background: "linear-gradient(145deg, rgba(8, 24, 18, 0.95), rgba(3, 12, 8, 0.98))",
                  backdropFilter: "blur(20px)",
                  boxShadow: isDeviceHovered
                    ? "-20px 25px 65px rgba(0, 0, 0, 0.95), 0 0 45px rgba(110, 231, 183, 0.25)"
                    : "-15px 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(110, 231, 183, 0.12)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  zIndex: 2,
                  transform: isDeviceHovered
                    ? `rotateY(-2deg) rotateX(1deg) translateY(-6px) translateY(${mousePos.y * 0.25}px) translateX(${mousePos.x * 0.25}px)`
                    : `rotateY(-6deg) rotateX(2deg) translateY(${mousePos.y * 0.15}px) translateX(${mousePos.x * 0.15}px)`,
                  transition: "transform 0.35s ease-out, border 0.3s ease, box-shadow 0.3s ease",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Desktop Top Mini Nav */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.4rem 0.75rem", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.5)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF5F56", display: "inline-block" }} />
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#27C93F", display: "inline-block" }} />
                    <span style={{ color: "#fff", fontSize: "0.65rem", fontWeight: 700, marginLeft: "6px" }}>{currentProj.desktopUI.logo}</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {currentProj.desktopUI.nav.map((n) => (
                      <span key={n} style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.6)" }}>{n}</span>
                    ))}
                  </div>
                  <span style={{ background: currentProj.desktopUI.accentColor, color: "#000", padding: "0.15rem 0.45rem", borderRadius: "100px", fontSize: "0.55rem", fontWeight: 700 }}>
                    {currentProj.id === "ecommerce" ? "Cart (2)" : currentProj.id === "startup" ? "Get Demo" : "Order Now"}
                  </span>
                </div>

                {/* Desktop Inner Body */}
                <div style={{ flex: 1, padding: "0.75rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  {/* Hero banner */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, whiteSpace: "pre-line" }}>
                        {currentProj.desktopUI.headline}
                      </div>
                      <div style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.65)", marginTop: "2px" }}>
                        {currentProj.desktopUI.sub}
                      </div>
                      <div style={{ display: "flex", gap: "0.35rem", marginTop: "0.45rem" }}>
                        <span style={{ background: currentProj.desktopUI.accentColor, color: "#000", padding: "0.2rem 0.5rem", borderRadius: "4px", fontSize: "0.55rem", fontWeight: 700 }}>
                          {currentProj.id === "ecommerce" ? "Shop Now" : currentProj.id === "startup" ? "Launch MVP" : "Order Online"}
                        </span>
                        <span style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "0.2rem 0.5rem", borderRadius: "4px", fontSize: "0.55rem" }}>
                          {currentProj.id === "ecommerce" ? "Explore Drops" : currentProj.id === "startup" ? "View Features" : "View Menu"}
                        </span>
                      </div>
                    </div>
                    <div style={{ width: 65, height: 65, borderRadius: "50%", overflow: "hidden", border: "1.5px solid rgba(255,255,255,0.2)" }}>
                      <img src={currentProj.desktopUI.cards[0]?.img} alt="Hero Item" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>

                  {/* Our Favorites / Offerings Row */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.62rem", fontWeight: 700, color: "#fff", marginBottom: "0.35rem" }}>
                      <span>{currentProj.id === "ecommerce" ? "Trending Products" : currentProj.id === "startup" ? "Core Capabilities" : "Our Favorites"}</span>
                      <span style={{ color: currentProj.desktopUI.accentColor, fontSize: "0.55rem", display: "inline-flex", alignItems: "center", gap: "2px" }}>
                        See All <ArrowRight size={10} strokeWidth={2} />
                      </span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.4rem" }}>
                      {currentProj.desktopUI.cards.map((c, cIdx) => (
                        <div key={cIdx} style={{ background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "0.35rem", border: "1px solid rgba(255,255,255,0.08)" }}>
                          <img src={c.img} alt={c.name} style={{ width: "100%", height: 36, objectFit: "cover", borderRadius: "4px", marginBottom: "0.25rem" }} />
                          <div style={{ fontSize: "0.55rem", fontWeight: 700, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</div>
                          <div style={{ fontSize: "0.52rem", color: currentProj.desktopUI.accentColor, fontWeight: 700 }}>{c.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Front Floating Phone Device */}
              <div
                className="featured-phone-device"
                style={{
                  position: "absolute",
                  left: "-5px",
                  top: "14%",
                  bottom: "14%",
                  width: "48%",
                  borderRadius: "22px",
                  border: isDeviceHovered ? "2px solid rgba(110, 231, 183, 0.9)" : "2px solid rgba(110, 231, 183, 0.6)",
                  background: "linear-gradient(165deg, rgba(14, 30, 22, 0.98), rgba(2, 8, 5, 1))",
                  backdropFilter: "blur(25px)",
                  boxShadow: isDeviceHovered
                    ? "0 35px 80px rgba(0, 0, 0, 0.98), 0 0 45px rgba(110, 231, 183, 0.4)"
                    : "0 25px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(110, 231, 183, 0.25)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  padding: "0.6rem",
                  zIndex: 5,
                  transform: isDeviceHovered
                    ? `rotateY(-1deg) rotateX(1deg) scale(1.05) translateY(-8px) translateY(${mousePos.y * 0.3}px) translateX(${mousePos.x * 0.3}px)`
                    : `rotateY(-4deg) rotateX(2deg) scale(1.02) translateY(${mousePos.y * 0.15}px) translateX(${mousePos.x * 0.15}px)`,
                  transition: "transform 0.35s ease-out, border 0.3s ease, box-shadow 0.3s ease",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Phone Speaker Notch */}
                <div style={{ width: 38, height: 7, background: "#000", borderRadius: 4, margin: "0 auto 0.4rem auto" }} />

                {/* Phone Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                  <span style={{ fontSize: "0.62rem", fontWeight: 800, color: currentProj.desktopUI.accentColor }}>{currentProj.phoneUI.logo}</span>
                  <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.6)" }}>☰</span>
                </div>

                {/* Phone Headline */}
                <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#fff", lineHeight: 1.15, whiteSpace: "pre-line", marginBottom: "0.25rem" }}>
                  {currentProj.phoneUI.headline}
                </div>
                <div style={{ fontSize: "0.52rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.4rem" }}>
                  {currentProj.phoneUI.sub}
                </div>

                {/* Phone Main Image Box */}
                <div style={{ flex: 1, borderRadius: "10px", overflow: "hidden", position: "relative", marginBottom: "0.4rem" }}>
                  <img src={currentProj.phoneUI.img} alt="Phone app" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)" }} />
                  <div style={{ position: "absolute", bottom: "0.35rem", left: "0.35rem", right: "0.35rem" }}>
                    <div style={{ background: currentProj.desktopUI.accentColor, color: "#000", textAlign: "center", padding: "0.28rem", borderRadius: "6px", fontWeight: 800, fontSize: "0.62rem" }}>
                      {currentProj.phoneUI.btnText}
                    </div>
                  </div>
                </div>

                {/* Phone Bottom Nav */}
                <div style={{ display: "flex", justifyContent: "space-around", color: "rgba(255,255,255,0.45)", fontSize: "0.65rem", paddingTop: "0.2rem" }}>
                  <span style={{ color: currentProj.desktopUI.accentColor }}>🏠</span>
                  <span>📖</span>
                  <span>🛒</span>
                  <span>👤</span>
                </div>
              </div>

              {/* Bottom-Right Cursive Annotation + Arrow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  right: "12px",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "1.1rem",
                  lineHeight: 1.1,
                  color: "rgba(255, 255, 255, 0.85)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  zIndex: 10,
                  pointerEvents: "none"
                }}
                className="featured-bottom-annotation"
              >
                <svg width="28" height="22" viewBox="0 0 34 26" fill="none" style={{ transform: "rotate(-15deg)" }}>
                  <path d="M4 22 C 12 20, 24 14, 28 4 M 28 4 L 20 5 M 28 4 L 26 12" stroke="#6EE7B7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>
                  Real project<br />screenshots
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STYLES & THEME RULES ================= */}
      <style>{`
        /* ================= DARK THEME (DEFAULT) ================= */
        .featured-work-section {
          background-color: #020704;
          color: #ffffff;
        }
        .featured-main-title {
          color: #ffffff;
        }
        .featured-main-desc {
          color: rgba(255, 255, 255, 0.65);
        }
        .featured-hero-card:hover {
          border-color: rgba(229, 169, 60, 0.5) !important;
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.85), 0 0 30px rgba(229, 169, 60, 0.15) !important;
        }
        .featured-hero-card:hover .hero-card-img {
          transform: scale(1.04);
        }
        .watch-case-study-pill:hover {
          background: rgba(229, 169, 60, 0.9) !important;
          color: #000000 !important;
          box-shadow: 0 6px 20px rgba(229, 169, 60, 0.5) !important;
          transform: translateY(-2px);
        }
        .gallery-thumb-btn:hover {
          transform: scale(1.06);
          border-color: #6EE7B7 !important;
        }
        .gallery-more-btn:hover {
          background: rgba(229, 169, 60, 0.25) !important;
          border-color: #E5A93C !important;
          transform: translateY(-2px);
        }
        .featured-stat-card {
          background: rgba(10, 28, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .featured-stat-card:hover {
          transform: translateY(-3px);
          border-color: rgba(110, 231, 183, 0.4) !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(110, 231, 183, 0.15);
        }
        .featured-stat-card .stat-val {
          color: #ffffff;
        }
        .featured-stat-card .stat-lbl {
          color: rgba(255, 255, 255, 0.55);
        }
        .featured-project-title {
          color: #ffffff;
        }
        .featured-project-desc {
          color: rgba(255, 255, 255, 0.75);
        }
        .feature-item-row:hover {
          transform: translateX(4px);
        }
        .feature-item-row:hover .feature-bullet-icon {
          background: rgba(229, 169, 60, 0.25) !important;
          border-color: #E5A93C !important;
          box-shadow: 0 0 12px rgba(229, 169, 60, 0.4);
        }
        .feature-bullet-icon {
          background: rgba(229, 169, 60, 0.12);
          border: 1px solid rgba(229, 169, 60, 0.3);
          color: #E5A93C;
        }
        .feature-bullet-title {
          color: #ffffff;
        }
        .feature-bullet-desc {
          color: rgba(255, 255, 255, 0.6);
        }
        .visit-site-btn:hover {
          filter: brightness(1.15) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(229, 169, 60, 0.5) !important;
        }
        .view-case-study-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #ffffff;
        }
        .view-case-study-btn:hover {
          background: rgba(255, 255, 255, 0.14) !important;
          border-color: rgba(255, 255, 255, 0.35) !important;
          transform: translateY(-2px);
        }
        .tech-label {
          color: rgba(255, 255, 255, 0.6);
        }
        .tech-pill {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
        }
        .tech-pill:hover {
          background: rgba(110, 231, 183, 0.15) !important;
          border-color: rgba(110, 231, 183, 0.4) !important;
          color: #6EE7B7 !important;
        }

        /* ================= LIGHT THEME (EVEN SECTION: CRISP WHITE) ================= */
        html:not(.dark) .featured-work-section {
          background-color: #FFFFFF;
          color: #143026;
        }
        html:not(.dark) .featured-main-title {
          color: #143026;
        }
        html:not(.dark) .featured-main-desc {
          color: #4A6357;
        }
        html:not(.dark) .featured-top-annotation {
          color: #143026 !important;
        }
        html:not(.dark) .featured-bottom-annotation {
          color: #143026 !important;
        }
        html:not(.dark) .featured-tab-btn:not(.active) .tab-circle {
          background: rgba(20, 48, 38, 0.05) !important;
          color: #143026 !important;
          border: 1px solid rgba(20, 48, 38, 0.15) !important;
        }
        html:not(.dark) .featured-tab-btn:not(.active) .tab-label {
          color: #4A6357 !important;
        }
        html:not(.dark) .featured-tab-btn.active .tab-label {
          color: #143026 !important;
        }
        html:not(.dark) .featured-stat-card {
          background: #F6F5F0;
          border: 1px solid rgba(20, 48, 38, 0.1);
          box-shadow: 0 4px 15px rgba(20, 48, 38, 0.04);
        }
        html:not(.dark) .featured-stat-card:hover {
          box-shadow: 0 8px 24px rgba(20, 48, 38, 0.12) !important;
        }
        html:not(.dark) .featured-stat-card .stat-val {
          color: #143026;
        }
        html:not(.dark) .featured-stat-card .stat-lbl {
          color: #5B7569;
        }
        html:not(.dark) .featured-project-title {
          color: #143026;
        }
        html:not(.dark) .featured-project-desc {
          color: #4A6357;
        }
        html:not(.dark) .feature-bullet-icon {
          background: rgba(229, 169, 60, 0.15);
          border: 1px solid rgba(229, 169, 60, 0.4);
          color: #B57D1E;
        }
        html:not(.dark) .feature-bullet-title {
          color: #143026;
        }
        html:not(.dark) .feature-bullet-desc {
          color: #5B7569;
        }
        html:not(.dark) .view-case-study-btn {
          background: rgba(20, 48, 38, 0.06);
          border: 1px solid rgba(20, 48, 38, 0.15);
          color: #143026;
        }
        html:not(.dark) .view-case-study-btn:hover {
          background: rgba(20, 48, 38, 0.12);
        }
        html:not(.dark) .tech-label {
          color: #5B7569;
        }
        html:not(.dark) .tech-pill {
          background: rgba(20, 48, 38, 0.05);
          border: 1px solid rgba(20, 48, 38, 0.12);
          color: #143026;
        }
        html:not(.dark) .featured-desktop-device {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(240, 245, 242, 0.98)) !important;
          border: 1.5px solid rgba(20, 48, 38, 0.18) !important;
          box-shadow: -15px 20px 40px rgba(20, 48, 38, 0.08) !important;
        }
        html:not(.dark) .featured-phone-device {
          background: linear-gradient(165deg, rgba(255, 255, 255, 0.98), rgba(245, 248, 246, 1)) !important;
          border: 2px solid rgba(20, 48, 38, 0.22) !important;
          box-shadow: 0 20px 50px rgba(20, 48, 38, 0.12) !important;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 1200px) {
          .featured-work-section {
            height: auto !important;
            max-height: none !important;
            min-height: auto !important;
            padding: 5rem 1.5rem 3rem !important;
          }
          .featured-main-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .featured-details-grid {
            grid-template-columns: 1fr !important;
          }
          .featured-devices-wrapper {
            min-height: 380px !important;
            height: 380px !important;
            margin-top: 1.2rem !important;
          }
        }
        @media (max-width: 768px) {
          .featured-work-section {
            padding: 4.8rem 1rem 2.5rem !important;
          }
          .featured-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.85rem !important;
          }
          .featured-top-annotation {
            display: none !important;
          }
          .featured-tabs-row { 
            overflow-x: auto !important; 
            width: 100% !important; 
            padding-bottom: 0.6rem !important; 
            -webkit-overflow-scrolling: touch !important; 
            scrollbar-width: none !important; 
          }
          .featured-tabs-row::-webkit-scrollbar {
            display: none !important;
          }
          .featured-stats-strip {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.4rem !important;
          }
          .featured-devices-wrapper {
            position: relative !important;
            min-height: 280px !important;
            height: 280px !important;
            width: 100% !important;
            margin-top: 1rem !important;
            perspective: none !important;
            overflow: hidden !important;
          }
          .featured-desktop-device {
            position: absolute !important;
            left: 0 !important;
            right: 35px !important;
            top: 10px !important;
            bottom: 10px !important;
            width: auto !important;
            height: auto !important;
            transform: none !important;
          }
          .featured-phone-device {
            position: absolute !important;
            right: 5px !important;
            bottom: 5px !important;
            left: auto !important;
            top: auto !important;
            width: 125px !important;
            height: 230px !important;
            transform: none !important;
          }
          .featured-bottom-annotation {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .featured-work-section {
            padding: 4.2rem 0.85rem 2rem !important;
          }
          .featured-stats-strip {
            grid-template-columns: 1fr !important;
            gap: 0.45rem !important;
          }
          .featured-devices-wrapper {
            min-height: 240px !important;
            height: 240px !important;
          }
          .featured-desktop-device {
            right: 25px !important;
          }
          .featured-phone-device {
            width: 105px !important;
            height: 200px !important;
            right: 0px !important;
            bottom: 0px !important;
          }
        }
      `}</style>
    </section>
  );
}
