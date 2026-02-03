"use client";

import React, { useState, useEffect } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-move every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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
    <section className="py-20 bg-gradient-to-r from-[#f26b36] via-orange-500 to-[#f26b36] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
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
                style={{ color: "white", borderColor: "white" }}
              >
                <div className="absolute inset-0 bg-white opacity-20 rounded-full"></div>
                <span className="relative">Testimonial</span>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
            >
              {title}
            </motion.h2>

            {subtitle && (
              <motion.p
                variants={itemVariants}
                className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden relative px-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-full px-4">
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ y: -5 }}
                      className="testimonial-item bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 group relative overflow-hidden h-full"
                    >
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f26b36]/10 to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                      <div className="relative z-10 h-full flex flex-col">
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
                        <div className="flex-grow">
                          <p
                            className="text-gray-800 leading-relaxed text-lg mb-8 font-medium text-justify"
                            dangerouslySetInnerHTML={{
                              __html: testimonial.quote,
                            }}
                          ></p>
                        </div>

                        {/* Author Info */}
                        <div className="flex flex-col items-center mt-auto pt-4">
                          <div className="relative mb-4">
                            {testimonial.image ? (
                              <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl"
                              />
                            ) : (
                              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f26b36] to-black flex items-center justify-center shadow-xl border-4 border-white">
                                <span className="text-white font-bold text-2xl">
                                  {testimonial.author.charAt(0)}
                                </span>
                              </div>
                            )}

                            {/* Online indicator */}
                            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                          </div>

                          <div className="text-center">
                            <h4 className="font-bold text-gray-900 text-xl group-hover:text-[#f26b36] transition-colors duration-300">
                              {testimonial.author}
                            </h4>
                            {testimonial.role && (
                              <p className="text-gray-700 text-sm mt-1">
                                {testimonial.role}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - positioned outside the card */}
            <button
              onClick={goToPrevious}
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#f26b36] rounded-full p-3 shadow-xl transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#f26b36] rounded-full p-3 shadow-xl transition-all duration-300"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="h-6 w-6" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
