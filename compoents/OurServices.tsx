"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaAndroid,
  FaCode,
  FaChartLine,
  FaChartArea,
  FaBalanceScale,
  FaHouseDamage,
  FaGlobe,
  FaMobileAlt,
  FaLaptopCode,
  FaSearch,
  FaBullhorn,
  FaGraduationCap,
} from "react-icons/fa";

interface ServiceItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
}

interface OurServicesProps {
  services?: ServiceItem[];
  title?: string;
  subtitle?: string;
}

// Default services data
const defaultServices: ServiceItem[] = [
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

const OurServices: React.FC<OurServicesProps> = ({
  services = defaultServices,
  title = "Our Services",
  subtitle = "Comprehensive digital solutions tailored to drive your business forward",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getServiceIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "mobile applications":
        return <FaMobileAlt className="h-8 w-8" />;
      case "web & social applications":
        return <FaGlobe className="h-8 w-8" />;
      case "responsive web design":
        return <FaLaptopCode className="h-8 w-8" />;
      case "search engine optimization":
        return <FaSearch className="h-8 w-8" />;
      case "digital marketing":
        return <FaBullhorn className="h-8 w-8" />;
      case "internship and training":
        return <FaGraduationCap className="h-8 w-8" />;
      default:
        return <FaCode className="h-8 w-8" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-8xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <div
                className="inline-block border-2 rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wider mb-6 relative overflow-hidden"
                style={{ color: "#f26b36", borderColor: "#f26b36" }}
              >
                <div className="absolute inset-0 bg-[#f26b36] opacity-10 rounded-full"></div>
                <span className="relative">Services</span>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              {title}
            </motion.h2>

            {subtitle && (
              <motion.p
                variants={itemVariants}
                className="text-gray-700 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="service-item bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden h-full flex flex-col"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f26b36]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#f26b36] to-black group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300 shadow-lg">
                      <div className="text-white">
                        {service.icon || getServiceIcon(service.title)}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#f26b36] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <div className="text-gray-600 leading-relaxed text-center mb-6 flex-grow">
                    {service.description
                      .split(". ")
                      .map((sentence, index, array) => (
                        <p key={index} className="mb-3 last:mb-0 text-justify">
                          {sentence.trim()}
                          {index < array.length - 1 ? "." : ""}
                        </p>
                      ))}
                  </div>

                  {/* Features (if provided) */}
                  {service.features && (
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-[#f26b36] mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
