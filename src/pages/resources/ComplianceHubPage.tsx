import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileText, Globe, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ComplianceHubPageProps {
  theme: string;
}

const ComplianceHubPage: React.FC<ComplianceHubPageProps> = ({ theme }) => {
  const policies = [
    {
      title: "GDPR Compliance",
      description: "Our commitment to European data protection standards.",
      features: [
        "Data processing agreements",
        "Data subject rights management",
        "Privacy impact assessments",
        "Data breach notification procedures",
      ],
      link: "/privacy",
    },
    {
      title: "CCPA Compliance",
      description: "California Consumer Privacy Act compliance measures.",
      features: [
        "Consumer data rights",
        "Data collection transparency",
        "Opt-out mechanisms",
        "Privacy notice requirements",
      ],
      link: "/privacy",
    },
    {
      title: "FERPA Compliance",
      description: "Educational records privacy protection standards.",
      features: [
        "Student data protection",
        "Parental consent management",
        "Educational record access controls",
        "Directory information policies",
      ],
      link: "/privacy",
    },
    {
      title: "HIPAA Compliance",
      description: "Health information privacy and security measures.",
      features: [
        "PHI data protection",
        "Security risk assessments",
        "Access control policies",
        "Audit trail maintenance",
      ],
      link: "/privacy",
    },
  ];

  const certifications = [
    {
      name: "ISO 27001",
      status: "Certified",
      validUntil: "2024",
      description: "Information security management",
    },
    {
      name: "SOC 2 Type II",
      status: "Compliant",
      validUntil: "2024",
      description: "Security and privacy controls",
    },
    {
      name: "GDPR",
      status: "Compliant",
      validUntil: "Ongoing",
      description: "EU data protection",
    },
    {
      name: "CCPA",
      status: "Compliant",
      validUntil: "Ongoing",
      description: "California privacy law",
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
              Compliance Hub
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Our commitment to global privacy and security standards
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Policies Grid */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {policies.map((policy, index) => (
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
                  {policy.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-6`}
                >
                  {policy.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {policy.features.map((feature, idx) => (
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
                <Link
                  to={policy.link}
                  className={`inline-flex items-center ${
                    theme === "dark" ? "text-white" : "text-black"
                  } font-medium group`}
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
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
              Certifications
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Our compliance certifications
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 border-white/5"
                    : "bg-black/5 border-black/5"
                } backdrop-blur-xl border`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {cert.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      theme === "dark"
                        ? "bg-white/10 text-white"
                        : "bg-black/10 text-black"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-4`}
                >
                  {cert.description}
                </p>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-white/60" : "text-black/60"
                  }`}
                >
                  Valid until: {cert.validUntil}
                </div>
              </motion.div>
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
            } backdrop-blur-xl border p-12 md:p-16 text-center relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div className="relative">
              <h2
                className={`text-3xl md:text-4xl font-semibold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6 tracking-tight`}
              >
                Need more information?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Contact our compliance team to learn more about our security
                measures and compliance programs.
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
                  Contact Compliance Team
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/trust"
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  View Trust Center
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComplianceHubPage;
