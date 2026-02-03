"use client";

import React from "react";
import Image from "next/image";
import {
  User,
  LineChart,
  Package,
  Percent,
  Award,
  Smile,
  Users,
  Headset,
  Globe,
  Smartphone,
} from "lucide-react";

import { FaClock, FaUsers, FaTrophy, FaBox } from "react-icons/fa";

import FeaturesSection from "@/compoents/FeaturesSection";
import CtaSection from "@/compoents/CtaSection";

import OurRegistrations from "@/compoents/OurRegistrations";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Enhanced Professional Design */}
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 relative overflow-hidden min-h-screen flex items-center">
        {/* Professional Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f26b36] to-orange-600"></div>

        {/* Enhanced Background Elements for Professional Depth */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-white/10 to-transparent rounded-t-full"></div>
          <div className="absolute top-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-8xl mx-auto text-center">
            {/* Main Heading - Two Line Layout */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-tight mb-8 drop-shadow-lg">
              <span className="block mb-3">We are an award-winning</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-black">
                consultancy agency
              </span>
            </h1>

            {/* Subheading - Enhanced Professional Copy */}
            <p className="mt-8 text-xl sm:text-2xl lg:text-3xl text-white/95 max-w-7xl mx-auto leading-relaxed font-medium drop-shadow-md">
              At Everonic Solutions, we empower businesses through strategic
              insights and innovative solutions that drive sustainable growth
              and transform digital landscapes.
            </p>

            {/* Call to Action Buttons - Enhanced Professional Design */}
            <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
              {/* Primary CTA - Professional White Button with Shadow */}
              <a
                href="#about-section"
                className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-white px-12 py-5 text-lg font-bold text-brand-orange shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-brand-orange hover:text-white"
              >
                Discover Our Story
              </a>

              {/* Secondary CTA - Professional Outline Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white px-12 py-5 text-lg font-bold text-white hover:bg-white hover:text-brand-orange transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Trust Indicators - Professional Card Design */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Experience Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f26b36] to-black flex items-center justify-center group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300">
                    <FaClock className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-center text-gray-900 font-bold text-lg mb-2">
                  Experience
                </h3>
                <p className="text-center text-gray-700 font-semibold text-2xl">
                  15+ Years
                </p>
              </div>

              {/* Clients Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f26b36] to-black flex items-center justify-center group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300">
                    <FaUsers className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-center text-gray-900 font-bold text-lg mb-2">
                  Clients
                </h3>
                <p className="text-center text-gray-700 font-semibold text-2xl">
                  200+
                </p>
              </div>

              {/* Recognition Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f26b36] to-black flex items-center justify-center group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300">
                    <FaTrophy className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-center text-gray-900 font-bold text-lg mb-2">
                  Recognition
                </h3>
                <p className="text-center text-gray-700 font-semibold text-2xl">
                  Industry
                </p>
              </div>

              {/* Products Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f26b36] to-black flex items-center justify-center group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300">
                    <FaBox className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-center text-gray-900 font-bold text-lg mb-2">
                  Products
                </h3>
                <p className="text-center text-gray-700 font-semibold text-2xl">
                  10+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-200 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#f26b36]/20 to-black/20 rotate-3"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <Image
                    src="/image/about.png" // Ensure this path is correct
                    alt="Everonic Solutions About Us"
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700 }}
                >
                  About <span className="text-[#f26b36]">Everonic</span>{" "}
                  Solutions
                </h2>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p className="mb-4 text-lg leading-relaxed">
                    At Everonic Solutions, we pride ourselves on being an
                    award-winning consultancy agency dedicated to empowering
                    businesses with strategic insights and innovative solutions.
                    With a proven track record of success and a commitment to
                    excellence, we are your trusted partner in driving
                    sustainable growth and achieving your business objectives.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our approach combines cutting-edge technology with practical
                    business strategies, ensuring that every solution we deliver
                    adds tangible value to your organization.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="flex items-start p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                  <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-[#f26b36] to-black group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Experienced Team
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Our experts bring years of industry experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                  <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-[#f26b36] to-black group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300">
                    <LineChart className="h-6 w-6 text-white" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Customized Solutions
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Tailored to meet your specific business needs
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center rounded-full py-4 px-8 text-base font-bold text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-gradient-to-r from-[#f26b36] to-black border border-transparent"
                >
                  Explore Our Work
                  <svg
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurRegistrations />
      {/* Features Section */}
      <FeaturesSection />
      <CtaSection />
    </div>
  );
};

export default AboutPage;
