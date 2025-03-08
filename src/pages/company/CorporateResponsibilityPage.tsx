import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

interface CorporateResponsibilityPageProps {
  theme: string;
}

const CorporateResponsibilityPage: React.FC<
  CorporateResponsibilityPageProps
> = ({ theme }) => {
  const initiatives = [
    {
      icon: (
        <Leaf
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Environmental Impact",
      description:
        "Our commitment to reducing our carbon footprint and promoting sustainable practices.",
      metrics: [
        "Carbon neutral operations since 2023",
        "100% renewable energy in data centers",
        "Zero-waste offices worldwide",
        "Sustainable supply chain practices",
      ],
    },
    {
      icon: (
        <Heart
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Social Responsibility",
      description:
        "Supporting education and empowering communities through technology and resources.",
      metrics: [
        "Free software for 1000+ non-profit schools",
        "$2M in educational grants awarded",
        "10,000 student scholarships provided",
        "Digital literacy programs in 50 countries",
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
      title: "Global Impact",
      description:
        "Making education accessible and equitable across borders and cultures.",
      metrics: [
        "Present in 150+ countries",
        "Support for 40+ languages",
        "Cultural exchange programs",
        "Local community partnerships",
      ],
    },
    {
      icon: (
        <Users
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Employee Engagement",
      description:
        "Fostering a culture of giving back and community involvement.",
      metrics: [
        "40 hours paid volunteer time per employee",
        "Employee donation matching up to $5000",
        "Skills-based volunteering program",
        "Annual impact awards",
      ],
    },
  ];

  const reports = [
    {
      year: "2023",
      title: "Annual Impact Report",
      description:
        "Our comprehensive review of environmental and social initiatives.",
      link: "/reports/2023-impact",
    },
    {
      year: "2023",
      title: "Sustainability Report",
      description: "Detailed analysis of our environmental impact and goals.",
      link: "/reports/2023-sustainability",
    },
    {
      year: "2023",
      title: "Community Impact",
      description: "Overview of our educational and community programs.",
      link: "/reports/2023-community",
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
              Making a positive impact
              <br />
              in education and beyond
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Our commitment to environmental sustainability, social
              responsibility, and ethical business practices.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Initiatives Section */}
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
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="mb-6">{initiative.icon}</div>
                <h3
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {initiative.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-6`}
                >
                  {initiative.description}
                </p>
                <ul className="space-y-3">
                  {initiative.metrics.map((metric, idx) => (
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
                        {metric}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Reports Section */}
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
              Impact Reports
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Measuring our impact
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {reports.map((report, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <span
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-white/60" : "text-black/60"
                  }`}
                >
                  {report.year}
                </span>
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mt-2 mb-3`}
                >
                  {report.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-4`}
                >
                  {report.description}
                </p>
                <Link
                  to={report.link}
                  className={`inline-flex items-center ${
                    theme === "dark" ? "text-white" : "text-black"
                  } font-medium group`}
                >
                  Read report
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
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
                Join us in making a difference
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Learn how you can partner with us to create positive change in
                education and beyond.
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
                  Partner with us
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/esg"
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  View ESG Report
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorporateResponsibilityPage;
