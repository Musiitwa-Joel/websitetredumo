import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Lock,
  FileText,
  Globe,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

interface TrustCenterPageProps {
  theme: string;
}

const TrustCenterPage: React.FC<TrustCenterPageProps> = ({ theme }) => {
  const securityMeasures = [
    {
      icon: (
        <Shield
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Data Protection",
      description: "Enterprise-grade security measures to protect your data.",
      features: [
        "End-to-end encryption",
        "Regular security audits",
        "24/7 monitoring",
        "Incident response team",
      ],
    },
    {
      icon: (
        <Lock
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Access Control",
      description: "Granular control over who can access your data.",
      features: [
        "Role-based access",
        "Multi-factor authentication",
        "Single sign-on",
        "Activity logging",
      ],
    },
    {
      icon: (
        <FileText
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Compliance",
      description: "Meeting global privacy and security standards.",
      features: [
        "GDPR compliance",
        "FERPA compliance",
        "ISO 27001 certified",
        "Regular audits",
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
      title: "Global Infrastructure",
      description: "Secure, redundant infrastructure worldwide.",
      features: [
        "Multiple data centers",
        "99.99% uptime SLA",
        "Disaster recovery",
        "Data residency options",
      ],
    },
  ];

  const certifications = [
    {
      name: "ISO 27001",
      description: "Information security management system certification",
      status: "Certified",
      lastAudit: "September 2023",
    },
    {
      name: "SOC 2 Type II",
      description: "Security, availability, and confidentiality controls",
      status: "Compliant",
      lastAudit: "October 2023",
    },
    {
      name: "GDPR",
      description: "European Union data protection regulation",
      status: "Compliant",
      lastAudit: "Ongoing",
    },
    {
      name: "FERPA",
      description: "U.S. student data privacy compliance",
      status: "Compliant",
      lastAudit: "Ongoing",
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
              Trust Center
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Our commitment to security, privacy, and compliance.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Security Measures Section */}
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
              Security
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Enterprise-grade security
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="mb-6">{measure.icon}</div>
                <h3
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {measure.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-6`}
                >
                  {measure.description}
                </p>
                <ul className="space-y-3">
                  {measure.features.map((feature, idx) => (
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
              Compliance & certifications
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-2xl font-semibold ${
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
                  Last audit: {cert.lastAudit}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data Processing Section */}
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
                    Data Processing
                  </span>
                  <h3
                    className={`text-3xl md:text-4xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mt-4 mb-6 tracking-tight`}
                  >
                    How we handle your data
                  </h3>

                  <div
                    className={`space-y-6 ${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    }`}
                  >
                    <p>
                      We follow strict data processing principles to ensure the
                      security and privacy of your information. Our practices
                      are designed to meet and exceed industry standards and
                      regulatory requirements.
                    </p>
                    <p>
                      All data is encrypted both in transit and at rest using
                      industry-standard encryption protocols. We maintain
                      detailed access logs and regularly audit our systems to
                      ensure compliance with our security policies.
                    </p>
                    <p>
                      Our data centers are strategically located to provide
                      optimal performance while meeting data residency
                      requirements. We offer flexible options for data storage
                      locations to help you comply with local regulations.
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    {[
                      "Regular security assessments",
                      "Automated threat detection",
                      "Comprehensive backup systems",
                      "Incident response procedures",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle
                          className={`h-5 w-5 ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          } mr-3`}
                        />
                        <span
                          className={`${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                    alt="Data Security"
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
                Have security questions?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Our security team is here to help. Contact us to learn more
                about our security measures and compliance programs.
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
                  Contact Security Team
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/security/bug-bounty"
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  View Bug Bounty Program
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TrustCenterPage;
