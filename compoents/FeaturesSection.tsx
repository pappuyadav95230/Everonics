import React from "react";
import { Package, Percent, Award, Smile, Users, Headset } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* First Section - Features Overview */}
          <section className="py-16 bg-gradient-to-br from-slate-100 to-stone-100 rounded-3xl px-6">
            <div className="max-w-8xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block border-2 rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wider text-[#f26b36] border-[#f26b36] mb-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f26b36] to-black opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative z-10">Features</span>
                </div>

                <h2
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700 }}
                >
                  Why People Choose Us?
                </h2>

                <div className="max-w-6xl mx-auto mt-8">
                  <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f26b36] to-black"></div>
                    <div className="relative z-10">
                      <div className="flex items-start">
                        <div className="flex-1">
                          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                            We do not just build software applications for our
                            clients. Rather we engage, co-conceptualize, often
                            redefine and then deliver solutions that are lean,
                            efficient and scalable. As a result we most
                            effectively meet our client's business goals and
                            missions. We consider business process applications
                            as a critical link that chains together data,
                            systems, processes and most importantly people. This
                            last element is considered most critical for us.
                            Therefore, we never miss out on user and client
                            satisfaction and enjoy their full cooperation during
                            the entire development cycle.
                          </p>
                          <div className="mt-6 pt-6 border-t border-gray-100">
                            <p className="text-gray-600 italic">
                              "Your success is our mission - we don't just
                              deliver projects, we build partnerships."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Second Section - Core Values & Services */}
          <section className="py-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl px-6">
            <div className="max-w-8xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block w-16 h-1 bg-gradient-to-r from-[#f26b36] to-black mb-8 rounded-full"></div>

                <h2
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700 }}
                >
                  Our Core Values & Services
                </h2>
                <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  At Everonic Solutions, we pride ourselves on delivering
                  exceptional service through our core values and commitment to
                  excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#f26b36]/30 group transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-[#f26b36] to-black group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300 shadow-lg">
                      <Package className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#f26b36] transition-colors duration-300">
                      Best In Industry
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We deliver top-notch services and set industry standards
                    with cutting-edge technology and innovative solutions.
                  </p>
                  <div className="flex items-center text-[#f26b36] font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#f26b36]/30 group transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-[#f26b36] to-black group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300 shadow-lg">
                      <Percent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#f26b36] transition-colors duration-300">
                      99% Success Rate
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our proven track record speaks for itself with successful
                    project deliveries and satisfied clients across industries.
                  </p>
                  <div className="flex items-center text-[#f26b36] font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#f26b36]/30 group transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-[#f26b36] to-black group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300 shadow-lg">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#f26b36] transition-colors duration-300">
                      Award Winning
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Recognized for excellence and innovation in delivering
                    exceptional digital solutions and transformative business
                    outcomes.
                  </p>
                  <div className="flex items-center text-[#f26b36] font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#f26b36]/30 group transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-[#f26b36] to-black group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300 shadow-lg">
                      <Smile className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#f26b36] transition-colors duration-300">
                      100% Happy Client
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our clients' satisfaction is our top priority. We measure
                    success by the happiness and success of our partners.
                  </p>
                  <div className="flex items-center text-[#f26b36] font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#f26b36]/30 group transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-[#f26b36] to-black group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300 shadow-lg">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#f26b36] transition-colors duration-300">
                      Professional Advisors
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Expert guidance tailored to your needs with experienced
                    consultants who become your strategic business partners.
                  </p>
                  <div className="flex items-center text-[#f26b36] font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#f26b36]/30 group transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-[#f26b36] to-black group-hover:from-black group-hover:to-[#f26b36] transition-all duration-300 shadow-lg">
                      <Headset className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#f26b36] transition-colors duration-300">
                      24/7 Customer Support
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We're here to help anytime you need us with round-the-clock
                    support and dedicated account management.
                  </p>
                  <div className="flex items-center text-[#f26b36] font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
          </section>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
