"use client";

import React from "react";
import Image from "next/image";

const OurRegistrations = () => {
  // Registration and accreditation data
  const registrations = [
    { id: 1, image: "/image/reg/logo-1.png" },
    { id: 2, image: "/image/reg/logo-2.png" },
    { id: 3, image: "/image/reg/3.png" },
    { id: 4, image: "/image/reg/4.png" },
    { id: 5, image: "/image/reg/5.png" },
  ];

  return (
    <section className="relative overflow-hidden py-12 bg-gradient-to-br from-[#f26b36] via-orange-500 to-orange-600 text-white">
      {/* Cross with line decoration */}
      <div className="absolute top-4 left-4 w-8 h-8 border border-white/30 rotate-45">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/30 transform -translate-y-1/2"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/30 transform -translate-x-1/2"></div>
      </div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border border-white/30 rotate-45">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/30 transform -translate-y-1/2"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/30 transform -translate-x-1/2"></div>
      </div>
      <div className="absolute top-1/2 left-8 w-0.5 h-16 bg-white/20 transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-8 w-0.5 h-16 bg-white/20 transform -translate-y-1/2"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block border-2 rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wider text-white border-white mb-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">Accreditations</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700 }}
          >
            Our Registrations & Accreditations
          </h2>

          <p className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-12">
            Demonstrating our commitment to quality and adherence to industry
            standards, we hold registrations with:
          </p>
        </div>

        {/* Five Images in Single Row */}
        <div className="w-full py-6">
          <div className="flex justify-between items-center w-full gap-4">
            {registrations.map((item) => (
              <div
                key={item.id}
                className="flex-1 flex items-center justify-center min-h-[80px] max-h-[120px]"
              >
                <div className="w-full h-full flex items-center justify-center bg-white rounded-lg shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 p-2">
                  <Image
                    src={item.image}
                    alt={`Registration logo ${item.id}`}
                    width={150}
                    height={100}
                    className="w-full h-full object-contain max-w-[150px] max-h-[100px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRegistrations;
