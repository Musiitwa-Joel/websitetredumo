import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Zap,
  Globe,
  Shield,
  CheckCircle,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";

interface PartnerPortalPageProps {
  theme: string;
}

const PartnerPortalPage: React.FC<PartnerPortalPageProps> = ({ theme }) => {
  const benefits = [
    {
      icon: (
        <Users
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Partner Network",
      description:
        "Join our global network of education technology partners and expand your reach.",
      features: [
        "Access to partner directory",
        "Networking opportunities",
        "Joint marketing initiatives",
        "Partner events and webinars",
      ],
    },
    {
      icon: (
        <Zap
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Technical Resources",
      description:
        "Get the tools and support you need to build successful integrations.",
      features: [
        "API documentation",
        "Development tools",
        "Testing environments",
        "Technical support",
      ],
    },
    {
      icon: (
        <Globe
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Market Expansion",
      description:
        "Reach new markets and grow your business with our global platform.",
      features: [
        "Market insights",
        "Lead generation",
        "Co-selling opportunities",
        "Revenue sharing",
      ],
    },
    {
      icon: (
        <Shield
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Partner Support",
      description: "Dedicated resources to help you succeed in our ecosystem.",
      features: [
        "Partner success manager",
        "Training programs",
        "Marketing resources",
        "Partner portal access",
      ],
    },
  ];

  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Build integrations and extend Tredumo's capabilities",
      requirements: [
        "Technical expertise in education technology",
        "Proven track record of successful integrations",
        "Commitment to security and compliance",
        "Aligned product vision",
      ],
    },
    {
      title: "Solution Partners",
      description: "Implement and customize Tredumo for institutions",
      requirements: [
        "Experience in education sector",
        "Implementation capabilities",
        "Customer success focus",
        "Industry certifications",
      ],
    },
    {
      title: "Channel Partners",
      description: "Resell and distribute Tredumo solutions",
      requirements: [
        "Established market presence",
        "Sales and marketing capabilities",
        "Education industry expertise",
        "Financial stability",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-b from-black via-black/95 to-black"
                : "bg-gradient-to-b from-white via-white/95 to-white"
            }`}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl sm:text-5xl md:text-6xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } leading-tight tracking-tight`}
            >
              Partner Portal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Join our partner ecosystem and help shape the future of education
              technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className={`${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
              >
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/partners/portal/login"
                className={`${
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-black/10 text-black hover:bg-black/20"
                } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center`}
              >
                Partner Login
                <Lock className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase`}
            >
              Partner Benefits
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Why partner with Tredumo?
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-6`}
                >
                  {benefit.description}
                </p>
                <ul className="space-y-3">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle
                        className={`h-4 w-4 ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        } mr-3 flex-shrink-0`}
                      />
                      <span
                        className={`${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className={`text-sm font-medium tracking-widest ${
                theme === "dark" ? "text-white/60" : "text-black/60"
              } uppercase`}
            >
              Partner Types
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Find your partnership path
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <h3
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {type.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-6`}
                >
                  {type.description}
                </p>
                <div>
                  <h4
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } uppercase mb-3`}
                  >
                    Requirements
                  </h4>
                  <ul className="space-y-3">
                    {type.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center">
                        <ArrowRight
                          className={`h-4 w-4 ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          } mr-3 flex-shrink-0`}
                        />
                        <span
                          className={`${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          }`}
                        >
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div
              className={`relative ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              } backdrop-blur-xl rounded-[2rem] border p-8 md:p-12 overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <span
                    className={`text-sm font-medium tracking-widest ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } uppercase`}
                  >
                    Partnership Process
                  </span>
                  <h3
                    className={`text-3xl md:text-4xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mt-4 mb-6 tracking-tight`}
                  >
                    How to become a partner
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        step: "1",
                        title: "Apply",
                        description:
                          "Submit your partnership application through our online form.",
                      },
                      {
                        step: "2",
                        title: "Evaluate",
                        description:
                          "Our team will review your application and assess the partnership fit.",
                      },
                      {
                        step: "3",
                        title: "Onboard",
                        description:
                          "Complete the onboarding process and technical integration if required.",
                      },
                      {
                        step: "4",
                        title: "Launch",
                        description:
                          "Go live with your partnership and start growing together.",
                      },
                    ].map((step, index) => (
                      <div key={index} className="flex">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full ${
                            theme === "dark"
                              ? "bg-white/10 text-white"
                              : "bg-black/10 text-black"
                          } flex items-center justify-center font-semibold mr-4`}
                        >
                          {step.step}
                        </div>
                        <div>
                          <h4
                            className={`text-lg font-medium ${
                              theme === "dark" ? "text-white" : "text-black"
                            } mb-2`}
                          >
                            {step.title}
                          </h4>
                          <p
                            className={`${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                    alt="Partnership Process"
                    className="rounded-2xl w-full shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-[2rem] ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            } backdrop-blur-xl border p-12 md:p-16 text-center relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div className="relative">
              <h2
                className={`text-3xl md:text-4xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6 tracking-tight`}
              >
                Ready to partner with us?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Join our partner ecosystem and help shape the future of
                education technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className={`${
                    theme === "dark"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-900"
                  } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPortalPage;
