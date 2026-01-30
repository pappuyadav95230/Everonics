import React from "react";
import Image from "next/image";
import { UserCheck, TrendingUp } from "lucide-react";

// --- Constants ---
const BRAND_ORANGE = "#f26b36";
const BRAND_GRAY_LIGHT = "#F8F8F8"; // Defined light gray background

// --- Feature Item Component ---
const FeatureItem: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
    <div
      // Icon Circle
      className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: BRAND_ORANGE }}
    >
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div>
      <h6 className="text-lg font-bold text-gray-900 mb-1">{title}</h6>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section
      className="py-20 sm:py-32"
      id="about-us"
      style={{ backgroundColor: BRAND_GRAY_LIGHT }}
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Main Content Grid: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side: Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange/10 to-orange-100 rounded-2xl"></div>
              <Image
                src="/image/about.png" // Ensure this path is correct
                alt="Everonic Solutions About Us"
                width={600}
                height={400}
                objectFit="contain"
                className="relative rounded-xl shadow-xl"
                priority
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            {/* Header Tag */}
            <div
              className="inline-block border-2 rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: BRAND_ORANGE, borderColor: BRAND_ORANGE }}
            >
              About Everonic Solutions
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Empowering Businesses with Strategic{" "}
              <span className="relative inline-block">
                <span style={{ color: BRAND_ORANGE }}>Solutions</span>
                <span className="absolute bottom-1 left-0 w-full h-1 bg-orange-200 opacity-80"></span>
              </span>
            </h2>

            {/* Description */}
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                At Everonic Solutions, we pride ourselves on being an
                award-winning consultancy agency dedicated to empowering
                businesses with strategic insights and innovative solutions.
              </p>
              <p>
                With a proven track record of success and a commitment to
                excellence, we are your trusted partner in driving sustainable
                growth and achieving your business objectives.
              </p>
            </div>

            {/* Features Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <FeatureItem
                icon={UserCheck}
                title="Expert Team"
                description="Our seasoned professionals bring extensive industry expertise."
              />
              <FeatureItem
                icon={TrendingUp}
                title="Proven Results"
                description="Track record of delivering measurable business outcomes."
              />
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full py-4 px-8 text-base font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                style={{ backgroundColor: BRAND_ORANGE }}
              >
                Start Your Journey
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
