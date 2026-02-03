"use client";

import React, { useState, useEffect } from "react";
import Testimonial from "./Testimonial";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get current testimonial
  const currentTestimonial = [testimonials[currentIndex]];

  return (
    <Testimonial
      testimonials={currentTestimonial}
      title="What our clients say about our services"
      subtitle="Discover why businesses trust Everonic Solutions for their digital transformation needs"
    />
  );
};

export default TestimonialSection;
