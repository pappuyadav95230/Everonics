import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-[#f26b36] to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/95 mb-6 text-base md:text-lg max-w-lg">
              Get in touch with us today for a free consultation
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href="tel:+919984024365"
                className="flex items-center gap-2 bg-white text-[#f26b36] hover:bg-gray-100 transition-all duration-300 px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-bold text-sm md:text-base"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/919984024365?text=Hello! I would like to get more information about your services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition-all duration-300 px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-bold text-sm md:text-base"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:info@everonics.in"
                className="flex items-center gap-2 bg-white text-[#f26b36] hover:bg-gray-100 transition-all duration-300 px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-bold text-sm md:text-base"
              >
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative bg-white backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-2xl">
              <Image
                src="/image/newsletter.png" // Ensure this path is correct
                alt="Newsletter subscription"
                width={280}
                height={200}
                objectFit="contain"
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
