import { NextPage } from "next";
import { RefreshCw, Globe, Smartphone } from "lucide-react";
import React from "react";
import Aboutsection from "@/compoents/AboutSection";
import CtaSection from "@/compoents/CtaSection";
import OurServices from "@/compoents/OurServices";
import FeaturesSection from "@/compoents/FeaturesSection";
import OurRegistrations from "@/compoents/OurRegistrations";
import TestimonialSection from "@/compoents/TestimonialSection";

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


/**
 * Hero Section Component - Professional Design with Brand Orange Background
 */
const HeroSection: React.FC = () => (
  <section
    id="home"
    className="pt-32 pb-24 sm:pt-40 sm:pb-32 relative overflow-hidden min-h-screen flex items-center
               bg-gradient-to-r from-[#f26b36] to-orange-600"
  >
    {/* Enhanced Background Elements for Professional Depth */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/15 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-white/10 to-transparent rounded-t-full"></div>
      <div className="absolute top-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
    </div>

    <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 text-center relative z-10">
      {/* Main Heading - Enhanced Width and Professional Typography */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[6.5rem] font-black tracking-tight text-white leading-none mb-6 drop-shadow-lg">
        Driving Business{" "}
        <span className="block text-gray-800">Growth with</span>{" "}
        <span className="text-white/90 font-black">Innovative IT</span>{" "}
        <span className="text-white/80">Solutions</span>
      </h1>

      {/* Subheading - Enhanced Width and Professional Copy */}
      <p className="mt-8 text-xl sm:text-2xl lg:text-3xl text-gray-800 max-w-7xl mx-auto leading-relaxed font-medium drop-shadow-md">
        At Everonic Solutions, we transform businesses through cutting-edge
        technology and strategic digital innovation.
      </p>

      {/* Call to Action Buttons - Enhanced Professional Design */}
      <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
        {/* Primary CTA - Professional White Button with Shadow */}
        <a
          href="#services"
          className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-white px-12 py-5 text-lg font-bold text-brand-orange shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-brand-orange hover:text-white"
        >
          Explore Our Services
        </a>

        {/* Secondary CTA - Professional Outline Button */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-2xl border-2 border-white px-12 py-5 text-lg font-bold text-white hover:bg-white hover:text-brand-orange transition-all duration-300 transform hover:-translate-y-1"
        >
          Start Your Project
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
      <OurRegistrations />
      <OurServices />
      <CtaSection />
      <FeaturesSection />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
