import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Industries } from "./components/Industries";
import { FeaturedWork } from "./components/FeaturedWork";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    // 1. Remove initial URL hash if present
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    // 2. Global scroll observer for visual elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // 3. Global click interceptor for all hash anchors to prevent URL bar hash additions
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        
        if (href === "#") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          const targetId = href.substring(1);
          const element = document.getElementById(targetId);
          if (element) {
            const offset = 72; // Header height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", background: "#F5F4EE", overflowX: "hidden" }}>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Industries />
        <FeaturedWork />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Manrope', sans-serif; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(20,61,53,0.2); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(20,61,53,0.4); }

        /* Scroll Reveal Animation Styles */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Staggered Delay classes */
        .reveal-delay-1 { transition-delay: 50ms; }
        .reveal-delay-2 { transition-delay: 150ms; }
        .reveal-delay-3 { transition-delay: 250ms; }
        .reveal-delay-4 { transition-delay: 350ms; }
        .reveal-delay-5 { transition-delay: 450ms; }

        /* Button hover animations */
        .btn-diagonal svg {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-diagonal:hover svg {
          transform: translate(3px, -3px);
        }

        .btn-arrow svg {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-arrow:hover svg {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}
