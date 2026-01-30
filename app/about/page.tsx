"use client";

import React from "react";
import Image from "next/image";
import {
  User,
  LineChart,
  Package,
  Percent,
  Award,
  Smile,
  Users,
  Headset,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f26b36] to-gray-200"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f26b36_1px,transparent_1px)] [background-size:16px_16px] opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "'Noto Serif', serif" }}
            >
              <span className="block text-white mb-3 drop-shadow-lg">
                <span className="relative inline-block">
                  We are an
                  <span className="text-[#ffd2c1] font-extrabold relative">
                    award-winning
                    <svg
                      className="absolute bottom-0 left-0 w-full h-1 fill-[#ffd2c1]/50"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path d="M0,5 Q50,0 100,5 Q50,10 0,5 Z" />
                    </svg>
                  </span>
                </span>
              </span>
              <span className="block text-white font-light drop-shadow-lg">
                helping businesses{" "}
                <span className="text-[#ffd2c1] font-semibold relative">
                  thrive
                  <svg
                    className="absolute bottom-0 left-0 w-full h-1 fill-[#ffd2c1]/50"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,5 Q50,0 100,5 Q50,10 0,5 Z" />
                  </svg>
                </span>
                .
              </span>
            </h1>

            {/* Subheading */}
            <div className="text-lg md:text-xl text-white max-w-4xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
              <span className="relative">
                At Everonic Solutions, we pride ourselves on being an
                <span className="font-semibold text-[#ffd2c1]">
                  {" "}
                  award-winning consultancy agency
                </span>{" "}
                dedicated to empowering businesses with{" "}
                <span className="font-medium text-[#ffd2c1]">
                  strategic insights
                </span>{" "}
                and{" "}
                <span className="font-medium text-[#ffd2c1]">
                  innovative solutions
                </span>
                .
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ffd2c1]/30 to-transparent"></div>
              </span>
            </div>

            {/* Decorative element */}
            <div className="flex justify-center mb-10">
              <div className="h-1 w-24 bg-gradient-to-r from-[#f26b36] to-black rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#f26b36]/20 to-black/20 rotate-3"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <Image
                    src="/image/about.png" // Ensure this path is correct
                    alt="Everonic Solutions About Us"
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700 }}
                >
                  About <span className="text-[#f26b36]">Everonic</span>{" "}
                  Solutions
                </h2>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p className="mb-4 text-lg leading-relaxed">
                    At Everonic Solutions, we pride ourselves on being an
                    award-winning consultancy agency dedicated to empowering
                    businesses with strategic insights and innovative solutions.
                    With a proven track record of success and a commitment to
                    excellence, we are your trusted partner in driving
                    sustainable growth and achieving your business objectives.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our approach combines cutting-edge technology with practical
                    business strategies, ensuring that every solution we deliver
                    adds tangible value to your organization.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="flex items-start p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                  <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-[#f26b36] to-black group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Experienced Team
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Our experts bring years of industry experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                  <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-[#f26b36] to-black group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300">
                    <LineChart className="h-6 w-6 text-white" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Customized Solutions
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Tailored to meet your specific business needs
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center rounded-full py-4 px-8 text-base font-bold text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-gradient-to-r from-[#f26b36] to-black border border-transparent"
                >
                  Explore Our Work
                  <svg
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-block border-2 rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wider text-[#f26b36] border-[#f26b36] mb-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f26b36] to-black opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative z-10">Features</span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700 }}
              >
                Why People Choose Us?
              </h2>

              <div className="space-y-8 mt-10">
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg shadow-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f26b36] to-black"></div>
                  <div className="relative z-10">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <div className="w-3 h-3 rounded-full bg-[#f26b36]"></div>
                      </div>
                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed flex-1">
                        We do not just build software applications for our
                        clients. Rather we engage, co-conceptualize, often
                        redefine and then deliver solutions that are lean,
                        efficient and scalable. As a result we most effectively
                        meet our client's business goals and missions. We
                        consider business process applications as a critical
                        link that chains together data, systems, processes and
                        most importantly people. This last element is considered
                        most critical for us. Therefore, we never miss out on
                        user and client satisfaction and enjoy their full
                        cooperation during the entire development cycle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block w-12 h-1 bg-gradient-to-r from-[#f26b36] to-black mb-6"></div>
              <p className="text-gray-800 text-lg md:text-xl font-medium mb-4">
                At Everonic Solutions, we understand that choosing the right
                agency for your needs is crucial.
              </p>
              <h3
                className="text-white text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "'Noto Serif', serif", fontWeight: 600 }}
              >
                Here's why people trust and choose us:
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f26b36]/30 group">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center mr-4 bg-[#f26b36]/10 group-hover:bg-[#f26b36] transition-colors duration-300">
                    <Package className="h-6 w-6 text-[#f26b36] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#f26b36] transition-colors duration-300">
                    Best In Industry
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We deliver top-notch services and set industry standards.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                  <div className="text-[#f26b36] text-sm font-semibold">
                    Learn More
                  </div>
                  <svg
                    className="w-4 h-4 ml-2 text-[#f26b36] group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f26b36]/30 group">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center mr-4 bg-[#f26b36]/10 group-hover:bg-[#f26b36] transition-colors duration-300">
                    <Percent className="h-6 w-6 text-[#f26b36] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#f26b36] transition-colors duration-300">
                    99% Success Rate
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Our proven track record speaks for itself.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                  <div className="text-[#f26b36] text-sm font-semibold">
                    Learn More
                  </div>
                  <svg
                    className="w-4 h-4 ml-2 text-[#f26b36] group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f26b36]/30 group">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center mr-4 bg-[#f26b36]/10 group-hover:bg-[#f26b36] transition-colors duration-300">
                    <Award className="h-6 w-6 text-[#f26b36] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#f26b36] transition-colors duration-300">
                    Award Winning
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Recognized for excellence and innovation.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                  <div className="text-[#f26b36] text-sm font-semibold">
                    Learn More
                  </div>
                  <svg
                    className="w-4 h-4 ml-2 text-[#f26b36] group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f26b36]/30 group">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center mr-4 bg-[#f26b36]/10 group-hover:bg-[#f26b36] transition-colors duration-300">
                    <Smile className="h-6 w-6 text-[#f26b36] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#f26b36] transition-colors duration-300">
                    100% Happy Client
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Our clients' satisfaction is our top priority.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                  <div className="text-[#f26b36] text-sm font-semibold">
                    Learn More
                  </div>
                  <svg
                    className="w-4 h-4 ml-2 text-[#f26b36] group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f26b36]/30 group">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center mr-4 bg-[#f26b36]/10 group-hover:bg-[#f26b36] transition-colors duration-300">
                    <Users className="h-6 w-6 text-[#f26b36] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#f26b36] transition-colors duration-300">
                    Professional Advisors
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Expert guidance tailored to your needs.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                  <div className="text-[#f26b36] text-sm font-semibold">
                    Learn More
                  </div>
                  <svg
                    className="w-4 h-4 ml-2 text-[#f26b36] group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f26b36]/30 group">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center mr-4 bg-[#f26b36]/10 group-hover:bg-[#f26b36] transition-colors duration-300">
                    <Headset className="h-6 w-6 text-[#f26b36] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#f26b36] transition-colors duration-300">
                    24/7 Customer Support
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We're here to help anytime you need us.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                  <div className="text-[#f26b36] text-sm font-semibold">
                    Learn More
                  </div>
                  <svg
                    className="w-4 h-4 ml-2 text-[#f26b36] group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
