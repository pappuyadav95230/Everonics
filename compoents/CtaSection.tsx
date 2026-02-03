import React from "react";
import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#f26b36] via-orange-500 to-orange-600 text-white">
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse" />

      {/* Subtle diagonal lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-full h-0.5 bg-white/20 transform -rotate-12"></div>
        <div className="absolute top-3/4 left-1/4 w-full h-0.5 bg-white/20 transform rotate-12"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm">
              <span className="px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-full bg-[#f26b36]/80">
                Free Consultation
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Ready to Transform <br className="hidden sm:block" />
              Your Business?
            </h2>

            <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              Let's discuss your idea and turn it into a scalable, modern
              digital product. No pressure, just clarity and results.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-8">
              <a
                href="tel:+919984024365"
                className="group relative flex items-center justify-center gap-2 bg-white text-[#f26b36] px-7 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Call Now</span>
              </a>

              <a
                href="https://wa.me/919984024365?text=Hello! I would like to get more information about your services."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-7 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageCircle className="w-5 h-5 relative z-10" />
                <span className="relative z-10">WhatsApp</span>
              </a>

              <a
                href="mailto:info@everonics.in"
                className="group relative flex items-center justify-center gap-2 bg-white/90 text-[#f26b36] hover:bg-white px-7 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/90 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Email Us</span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#f26b36] to-orange-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-white p-8 rounded-3xl border border-gray-200 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/image/newsletter.png"
                  alt="Business transformation consultation"
                  width={360}
                  height={280}
                  className="rounded-2xl drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
