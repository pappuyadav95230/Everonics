import React from "react";
import Image from "next/image";
import { User, LineChart } from "lucide-react";

// --- Constants ---
const BRAND_ORANGE = "#f26b36";
const BRAND_GRAY_LIGHT = "#F8F8F8"; // Defined light gray background

// --- Feature Item Component ---
const FeatureItem: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <div className="flex items-start">
    <div
      // Icon Circle
      className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center mr-4"
      style={{ backgroundColor: BRAND_ORANGE }}
    >
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div className="pt-1">
      <h6 className="text-lg font-bold text-gray-900">{title}</h6>
      <span className="text-gray-600 text-sm">{description}</span>
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-32"
      id="about-us"
      style={{ backgroundColor: BRAND_GRAY_LIGHT }}
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center">
          {/* Left Side: Image */}
          <div className="flex justify-center">
            <Image
              src="/image/about.png" // Ensure this path is correct
              alt="Everonic Solutions About Us"
              width={600}
              height={400}
              objectFit="cover"
              className="p-2 mr-8"
            />
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6 mr-8">
            {/* Header Tag */}
            <div
              className="inline-block border-2 rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-wider"
              style={{ color: BRAND_ORANGE, borderColor: BRAND_ORANGE }}
            >
              About Us
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              We are an award-winning consultancy helping businesses thrive.
            </h2>

            {/* Description */}
            <div className="text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                At Everonic Solutions, we pride ourselves on being an
                award-winning consultancy agency dedicated to empowering
                businesses with strategic insights and innovative solutions.
                With a proven track record of success and a commitment to
                excellence, we are your trusted partner in driving sustainable
                growth and achieving your business objectives.
              </p>
            </div>

            {/* Features Row Container (Single Row, 2 Columns on Desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <FeatureItem
                icon={User}
                title="Experienced Team"
                description="Our experts bring years of industry experience."
              />
              <FeatureItem
                icon={LineChart}
                title="Customized Solutions"
                description="Tailored to meet your specific business needs."
              />
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="/about"
                className="inline-flex mt-4 items-center justify-center rounded-full py-3 px-8 text-base font-bold text-white shadow-md transition duration-300 hover:bg-opacity-90 transform hover:scale-[1.02]"
                style={{ backgroundColor: BRAND_ORANGE }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
