import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-12 bg-[#f26b36] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 mb-4 md:mb-0">
              Get in touch with us today for a free consultation
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <a
              href="tel:+919984024365"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-all duration-300 px-5 py-3 rounded-lg shadow-md hover:shadow-lg"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">Call Now</span>
            </a>

            <a
              href="https://wa.me/919984024365?text=Hello! I would like to get more information about your services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition-all duration-300 px-5 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">WhatsApp</span>
            </a>

            <a
              href="mailto:info@everonics.in"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-all duration-300 px-5 py-3 rounded-lg shadow-md hover:shadow-lg"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
