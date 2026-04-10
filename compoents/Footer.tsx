"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Home,
  ArrowRight,
  MessageSquare,
  Globe,
  Shield,
  Briefcase,
  Settings,
  Truck,
  ChevronUp,
  Building,
  Users,
  Code,
  Target,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "919984024365"; // WhatsApp number without + sign
  const whatsappMessage =
    "Hello! I'm interested in your IT services and would like to get more information.";

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/everonicsolutions/",
      icon: FaFacebookF,
      color: "#1877F2",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/everonic_solutions/",
      icon: FaInstagram,
      color: "#E4405F",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/everonic-solution",
      icon: FaLinkedinIn,
      color: "#0A66C2",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "/aboutUs", icon: Building },
    { name: "Contact Us", href: "/contactUs", icon: MessageSquare },
    { name: "Career", href: "/career", icon: Users },
    {
      name: "Webmail",
      href: "https://rs205.webhostbox.net:2096/cpsess1294297146/3rdparty/roundcube/?_task=mail&_mbox=INBOX",
      target: "_blank",
      icon: Mail,
    },
    {
      name: "Utilities",
      href: "https://utilities.everonics.in",
      target: "_blank",
      icon: Settings,
    },
  ];

  const popularLinks = [
    {
      name: "Location Track - VTS",
      href: "http://www.locationtrack.in/",
      target: "_blank",
      icon: Target,
    },

  ];

  const services = [
    { name: "Web Development", href: "#services", icon: Code },
    { name: "Mobile Apps", href: "#services", icon: Settings },
    { name: "Digital Marketing", href: "#services", icon: Target },
    { name: "IT Consultancy", href: "#services", icon: Briefcase },
  ];

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-[#0e2e50] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* linear Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-linear-to-br from-[#f26b36]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-linear-to-tr from-[#f26b36]/5 to-transparent rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-linear(to right, white 1px, transparent 1px),
                            linear-linear(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-linear-to-br from-[#f26b36] to-orange-400 rounded-xl flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight">
                    Everonic Solutions
                  </h2>
                  <p className="text-xs text-gray-300 mt-1">
                    IT Consultancy Agency
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted IT consultancy agency since 2018, delivering lean,
                efficient, and scalable technology solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#f26b36] transition-colors duration-300 shrink-0">
                    <MapPin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="text-white text-sm">
                      T-4, Sanjay Gandhi Puram, Lucknow, UP 226016
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#f26b36] transition-colors duration-300 shrink-0">
                    <Phone className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a
                      href="tel:+919984024365"
                      className="text-white text-sm font-medium hover:text-[#f26b36] transition-colors"
                    >
                      +91 9984024365
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#f26b36] transition-colors duration-300 shrink-0">
                    <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:info@everonics.in"
                      className="text-white text-sm font-medium hover:text-[#f26b36] transition-colors"
                    >
                      info@everonics.in
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold relative inline-block">
                <span className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-[#f26b36]" />
                  Quick Links
                </span>
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-linear-to-r from-[#f26b36] to-transparent rounded-full"></span>
              </h3>

              <ul className="space-y-3">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link
                        href={link.href}
                        target={link.target}
                        className="flex items-center text-gray-300 hover:text-white group transition-all duration-300"
                      >
                        <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#f26b36] transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex items-center flex-1">
                          <span className="border-b border-transparent group-hover:border-[#f26b36] pb-0.5 transition-all duration-300">
                            {link.name}
                          </span>
                          {link.target === "_blank" && (
                            <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </div>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold relative inline-block">
                <span className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-[#f26b36]" />
                  Our Services
                </span>
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-linear-to-r from-[#f26b36] to-transparent rounded-full"></span>
              </h3>

              <ul className="space-y-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link
                        href={service.href}
                        className="flex items-center text-gray-300 hover:text-white group transition-all duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#f26b36] mr-3 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
                        <Icon className="w-4 h-4 mr-2 text-[#f26b36] opacity-70" />
                        <span className="border-b border-transparent group-hover:border-[#f26b36]/30 pb-0.5 transition-all duration-300">
                          {service.name}
                        </span>
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#f26b36]" />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Popular Links & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Popular Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold relative inline-block">
                  <span className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-[#f26b36]" />
                    Popular Links
                  </span>
                  <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-linear-to-r from-[#f26b36] to-transparent rounded-full"></span>
                </h3>

                <div className="space-y-3">
                  {popularLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Link
                          href={link.href}
                          target={link.target}
                          className="block bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-all duration-300 group"
                        >
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-linear-to-br from-[#f26b36] to-orange-400 rounded-lg flex items-center justify-center mr-3">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-medium group-hover:text-[#f26b36] transition-colors">
                                {link.name}
                              </span>
                              <div className="flex items-center mt-1">
                                <span className="text-xs text-gray-400">
                                  Click to explore
                                </span>
                                <ExternalLink className="w-3 h-3 ml-2 text-gray-400" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold relative inline-block">
                  <span className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-[#f26b36]" />
                    Follow Us
                  </span>
                </h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group flex-1"
                        aria-label={social.name}
                      >
                        <div
                          className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
                          style={{ backgroundColor: social.color + "20" }}
                        >
                          <Icon
                            className="w-6 h-6"
                            style={{ color: social.color }}
                          />
                        </div>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          Visit our {social.name}
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Bottom Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm flex items-center">
                <span className="mr-2">
                  © {currentYear} Everonic Solutions Private Limited.
                </span>
                <span className="text-gray-500">All rights reserved.</span>
              </p>
              <p className="text-gray-500 text-xs mt-1 flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                T-4, Sanjay Gandhi Puram, Lucknow, UP 226016
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-400 hover:text-white text-sm flex items-center space-x-1 group transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>

              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm flex items-center space-x-1 group transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>Privacy</span>
              </Link>

              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm flex items-center space-x-1 group transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                <span>Terms</span>
              </Link>

              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm flex items-center space-x-1 group transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button (Right Side) */}
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 border-2 border-white/20 group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <div className="absolute -top-10 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </motion.button>

      {/* Back to Top Button (Left Side) */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 left-8 w-14 h-14 bg-linear-to-br from-[#f26b36] to-orange-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 border-2 border-white/20 group"
        aria-label="Back to top"
      >
        <ChevronUp className="w-7 h-7 text-white" />
        <div className="absolute -top-10 left-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Back to Top
          <div className="absolute -bottom-1 left-4 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </motion.button>
    </footer>
  );
};

export default Footer;
