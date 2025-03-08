import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  AlertTriangle,
  DollarSign,
  Target,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

interface BugBountyPageProps {
  theme: string;
}

const BugBountyPage: React.FC<BugBountyPageProps> = ({ theme }) => {
  const rewards = [
    {
      severity: "Critical",
      description:
        "Remote code execution, SQL injection, authentication bypass",
      range: "$10,000 - $25,000",
      examples: [
        "Remote code execution",
        "SQL injection",
        "Authentication bypass",
        "Unauthorized access to sensitive data",
      ],
    },
    {
      severity: "High",
      description: "Significant security vulnerabilities with direct impact",
      range: "$5,000 - $10,000",
      examples: [
        "Stored XSS",
        "CSRF with significant impact",
        "Direct object reference",
        "Business logic bypass",
      ],
    },
    {
      severity: "Medium",
      description: "Security vulnerabilities with moderate impact",
      range: "$1,000 - $5,000",
      examples: [
        "Reflected XSS",
        "CSRF with moderate impact",
        "Information disclosure",
        "Rate limiting bypass",
      ],
    },
    {
      severity: "Low",
      description: "Minor security issues with limited impact",
      range: "$100 - $1,000",
      examples: [
        "Security misconfiguration",
        "Minor information disclosure",
        "Low-impact CSRF",
        "Self-XSS",
      ],
    },
  ];

  const scope = [
    {
      title: "In Scope",
      items: [
        "*.tredumo.com domains",
        "Tredumo mobile applications",
        "API endpoints (api.tredumo.com)",
        "Authentication systems",
        "Payment processing systems",
        "User data handling",
      ],
    },
    {
      title: "Out of Scope",
      items: [
        "Denial of Service (DoS) attacks",
        "Social engineering",
        "Physical security",
        "Third-party services",
        "Recently reported issues",
        "Non-security bugs",
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
              Bug Bounty Program
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Help us make Tredumo more secure. Find vulnerabilities, get
              rewarded.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Program Overview */}
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
                    Program Overview
                  </span>
                  <h3
                    className={`text-3xl md:text-4xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mt-4 mb-6 tracking-tight`}
                  >
                    Securing our platform together
                  </h3>

                  <div
                    className={`space-y-6 ${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    }`}
                  >
                    <p>
                      At Tredumo, we take security seriously. Our bug bounty
                      program invites security researchers to help us identify
                      and fix vulnerabilities in our systems.
                    </p>
                    <p>
                      We value the contributions of the security research
                      community and offer competitive rewards for verified
                      vulnerabilities based on their severity and impact.
                    </p>
                    <p>
                      All testing must comply with our program rules and respect
                      the privacy of our users. Responsible disclosure is key to
                      maintaining a safe environment for everyone.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: (
                        <Shield
                          className={`h-8 w-8 ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        />
                      ),
                      title: "Safe Harbor",
                      description:
                        "Legal protection for security researchers following our guidelines.",
                    },
                    {
                      icon: (
                        <DollarSign
                          className={`h-8 w-8 ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        />
                      ),
                      title: "Rewards",
                      description:
                        "Competitive bounties for verified security vulnerabilities.",
                    },
                    {
                      icon: (
                        <Target
                          className={`h-8 w-8 ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        />
                      ),
                      title: "Scope",
                      description:
                        "Clear guidelines on what systems and vulnerabilities qualify.",
                    },
                    {
                      icon: (
                        <AlertTriangle
                          className={`h-8 w-8 ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        />
                      ),
                      title: "Response",
                      description:
                        "Quick response times and transparent communication.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-xl ${
                        theme === "dark"
                          ? "bg-white/5 border-white/5"
                          : "bg-black/5 border-black/5"
                      } backdrop-blur-xl border`}
                    >
                      <div className="mb-4">{item.icon}</div>
                      <h4
                        className={`text-lg font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        } mb-2`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        } text-sm`}
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rewards Section */}
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
              Rewards
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Bounty Structure
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {rewards.map((reward, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className={`text-2xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {reward.severity}
                  </h3>
                  <span
                    className={`text-xl font-semibold ${
                      theme === "dark"
                        ? "text-tredumo-blue-400"
                        : "text-tredumo-blue-600"
                    }`}
                  >
                    {reward.range}
                  </span>
                </div>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-6`}
                >
                  {reward.description}
                </p>
                <div>
                  <h4
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } uppercase mb-3`}
                  >
                    Examples
                  </h4>
                  <ul className="space-y-2">
                    {reward.examples.map((example, idx) => (
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
                          {example}
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

      {/* Scope Section */}
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {scope.map((section, index) => (
              <div
                key={index}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 border-white/5"
                    : "bg-black/5 border-black/5"
                } backdrop-blur-xl border`}
              >
                <h3
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-6`}
                >
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
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
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            } backdrop-blur-xl border p- Continuing the BugBountyPage.tsx file content from where we left off:

12 md:p-16 text-center relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div className="relative">
              <h2
                className={`text-3xl md:text-4xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6 tracking-tight`}
              >
                Ready to start hunting?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Join our bug bounty program and help us make Tredumo more secure
                for everyone.
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
                  Submit a Vulnerability
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/trust"
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BugBountyPage;
