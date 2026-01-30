"use client";

import React from "react";
import Image from "next/image";
import Testimonial from "../../compoents/Testimonial";
import OurServices from "../../compoents/OurServices";

const ServicePage = () => {
  const services = [
    {
      title: "Mobile Applications",
      description:
        "With the booming mobile/smart phone industry, your presence on a mobile phone is just as essential and we make that happen by creating beautifully designed mobile applications that offer a friendly user experience for your customers.",
      features: [
        "iOS & Android Development",
        "User-Centered Design",
        "Cross-Platform Solutions",
        "App Store Optimization",
      ],
    },
    {
      title: "Web & Social Applications",
      description:
        "Build a powerful online presence with our comprehensive web development services. Whether you need a stunning website or a robust e-commerce platform, Everonic Solutions delivers responsive, visually appealing, and SEO-friendly websites that drive engagement and conversions.",
      features: [
        "Full-Stack Development",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Integration",
      ],
    },
    {
      title: "Responsive Web Design",
      description:
        "Responsive web design allows your website will look great and function flawlessly to adapt an optimal experience on any device like desktop computer, laptop, tablet or smartphone.",
      features: [
        "Mobile-First Approach",
        "Cross-Browser Compatibility",
        "Performance Optimization",
        "Accessibility Standards",
      ],
    },
    {
      title: "Search Engine Optimization",
      description:
        "Enhance your visibility and attract more organic traffic with our SEO expertise. Our team uses proven strategies and the latest tools to optimize your website, improve your search rankings, and ensure your business reaches its target audience effectively.",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Link Building",
        "Performance Analytics",
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Our digital marketing services include search engine optimization, social media marketing, email marketing, and more. We use a data-driven approach to create effective marketing campaigns that generate leads and drive conversions for our clients.",
      features: [
        "Social Media Strategy",
        "Email Marketing Campaigns",
        "PPC Advertising",
        "Analytics & Reporting",
      ],
    },
    {
      title: "Internship and Training",
      description:
        "At Everonic Solutions, we believe in nurturing talent and providing opportunities for growth and development. Our internship and training programs are designed to equip aspiring professionals with the skills, knowledge, and hands-on experience needed to succeed in today's competitive job market.",
      features: [
        "Hands-on Projects",
        "Industry Mentorship",
        "Skill Development",
        "Career Guidance",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "Everonic solutions has proven to be an excellent consulting firm over the past year. They respond professionally to the changing business environment and help successfully implement the coastal/offshore model. We truly appreciate their dedication and hard work.",
      author: "Anushk Singh",
      image: "/img/testimonial-4.jpg",
      role: "Business Client",
      rating: 5,
    },
    {
      quote:
        "I was pleasantly surprised at Everonic solutions's work as they brought my vision to reality. It was definitely a great experience for me, they helped me reduce the learning curve. I would like to summarize my experience with Everonic solutions, it will be my first choice in my future endeavors.",
      author: "Durgesh Tiwari",
      image: "/img/testimonial-2.jpg",
      role: "Project Manager",
      rating: 5,
    },
    {
      quote:
        "One of the greatest qualities of Everonic solutions that I appreciate is their ability to take complete ownership of a project and execute the plan. The level of detail and support they devote to their customers is just fantastic. High quality interactions are the trademark of Everonic solutions Minds.",
      author: "Aditya Yadav",
      image: "/img/emptyManImg.jpg",
      role: "Tech Lead",
      rating: 5,
    },
    {
      quote:
        "Everonic solutions is a significant player in bringing about digital transformation and providing leadership and innovation in the field of technology.<br><br> i love there work.",
      author: "Rohan Gupta",
      image: "/img/emptyManImg.jpg",
      role: "CTO",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
              <span className="block mb-3">We empower your business with</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white">
                effective solutions
              </span>
            </h1>

            {/* Subheading - Enhanced Professional Copy */}
            <p className="mt-8 text-xl sm:text-2xl lg:text-3xl text-white/95 max-w-7xl mx-auto leading-relaxed font-medium drop-shadow-md">
              Our comprehensive services are designed to drive your business
              forward and transform your digital landscape.
            </p>

            {/* Call to Action Buttons - Enhanced Professional Design */}
            <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
              {/* Primary CTA - Professional White Button with Shadow */}
              <a
                href="#service"
                className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-white px-12 py-5 text-lg font-bold text-brand-orange shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-brand-orange hover:text-white"
              >
                Explore Our Services
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

      {/* Services Section */}
      <OurServices
        services={services}
        title="Our Services"
        subtitle="Comprehensive digital solutions tailored to drive your business forward"
      />
      <Testimonial
        testimonials={testimonials}
        title="What our clients say about our services"
        subtitle="Discover why businesses trust Everonic Solutions for their digital transformation needs"
      />
    </div>
  );
};

export default ServicePage;
