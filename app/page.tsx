import { NextPage } from "next";
import { RefreshCw, Globe, Smartphone } from "lucide-react";
import React from "react";
import Aboutsection from "@/compoents/AboutSection";
import CtaSection from "@/compoents/CtaSection";

// --- Type Definitions for Services (Unchanged) ---
interface Service {
  name: string;
  description: string;
  icon: React.ElementType<{ className?: string }>;
}

const servicesData: Service[] = [
  {
    name: "Web & E-Commerce Solutions",
    description:
      "Responsive, visually appealing, and SEO-friendly websites built for performance and scalability, including robust e-commerce platforms.",
    icon: Globe,
  },
  {
    name: "Mobile Application Development",
    description:
      "Designing and developing native and cross-platform mobile apps (iOS/Android) to establish a powerful and engaging mobile presence.",
    icon: Smartphone,
  },
  {
    name: "Strategic Digital Marketing",
    description:
      "Data-driven digital marketing, including SEO, social media, and email campaigns, focused on generating high-quality leads and conversions.",
    icon: RefreshCw,
  },
];

// ------------------------------------
// COMPONENTS
// ------------------------------------

/**
 * Hero Section Component - With Bright Orange Gradient Background
 */
const HeroSection: React.FC = () => (
  <section
    id="home"
    // Apply a bright, custom gradient: from a light color, through the custom orange, to a light color.
    // Tailwind classes: bg-gradient-to-r (right)
    className="pt-40 pb-32 sm:pt-52 sm:pb-40 relative overflow-hidden min-h-screen flex items-center 
               bg-linear-to-br from-brand-white via-[#f26b36] to-brand-gray-light" // White -> Orange/30% -> Light Gray
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
      {/* Main Heading - Text Color set to brand-black for contrast against the light/orange background */}
      <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-extrabold tracking-tight text-brand-black leading-tight">
        Driving Business Growth with{" "}
        {/* Accent Color: Custom Orange (#f26b36) - Used as a bright highlight */}
        <span className="text-white">Innovative IT Solutions</span>
      </h1>

      {/* Subheading/Mission Statement - Dark gray for readability */}
      <p className="mt-8 text-xl sm:text-2xl text-brand-gray-dark max-w-6xl mx-auto">
        At Everonic Solutions, we help businesses grow by combining smart
        technology with practical solutions. Our IT services are designed to
        simplify operations, improve efficiency, and support your business
        goals.
      </p>

      {/* Call to Action Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Primary CTA (Filled - Custom Orange) - Text remains black for contrast */}
        <a
          href="#services"
          className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-10 py-3 text-base font-bold text-brand-black shadow-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-[1.02]"
        >
          Learn more
        </a>

        {/* Secondary CTA (Outlined - Black/Dark Gray) - Outline in a dark color for better visibility on a light background */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border-2 border-brand-black/50 px-10 py-3 text-base font-semibold text-brand-black hover:bg-brand-black hover:text-brand-white transition duration-300"
        >
          Start a Project
        </a>
      </div>
    </div>
  </section>
);

// ------------------------------------
// MAIN PAGE COMPONENT
// ------------------------------------
const HomePage: NextPage = () => {
  return (
    // Set a default background to ensure the page looks consistent
    <div className="min-h-screen antialiased bg-brand-white">
      <main>
        {/* 1. Hero Section with Bright Gradient */}
        <HeroSection />
        
      </main>
      <Aboutsection />

      <CtaSection />
    </div>
  );
};

export default HomePage;
