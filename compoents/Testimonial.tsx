"use client";

import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

interface TestimonialItem {
  quote: string;
  author: string;
  image?: string;
  role?: string;
  rating?: number;
}

interface TestimonialProps {
  testimonials: TestimonialItem[];
  title?: string;
  subtitle?: string;
  showRating?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({
  testimonials,
  title = "What our clients say!",
  subtitle,
  showRating = true,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#f26b36]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
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
                <span className="relative">Testimonial</span>
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

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="testimonial-item bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f26b36]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <FaQuoteLeft className="h-10 w-10 text-[#f26b36] flex-shrink-0" />

                    {showRating && (
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    )}
                  </div>

                  {/* Quote Text */}
                  <p
                    className="text-gray-700 leading-relaxed text-lg mb-8 font-medium text-justify"
                    dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                  ></p>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="relative">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f26b36] to-black flex items-center justify-center shadow-md border-2 border-white">
                          <span className="text-white font-bold text-xl">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                      )}

                      {/* Online indicator */}
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>

                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-xl group-hover:text-[#f26b36] transition-colors duration-300">
                        {testimonial.author}
                      </h4>
                      {testimonial.role && (
                        <p className="text-gray-600 text-sm mt-1">
                          {testimonial.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
