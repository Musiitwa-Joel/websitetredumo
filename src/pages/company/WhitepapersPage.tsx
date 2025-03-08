import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  FileText,
  BookOpen,
  Users,
  BarChart,
} from "lucide-react";
import { motion } from "framer-motion";

interface WhitepapersPageProps {
  theme: string;
}

const WhitepapersPage: React.FC<WhitepapersPageProps> = ({ theme }) => {
  const whitepapers = [
    {
      category: "Industry Research",
      papers: [
        {
          title: "The Future of Education Technology",
          description:
            "An in-depth analysis of emerging trends and technologies shaping the future of education.",
          date: "October 2023",
          length: "32 pages",
          downloadUrl: "/whitepapers/future-of-edtech-2023.pdf",
        },
        {
          title: "AI in Education Management",
          description:
            "How artificial intelligence is transforming educational administration and student success.",
          date: "September 2023",
          length: "28 pages",
          downloadUrl: "/whitepapers/ai-in-education-2023.pdf",
        },
      ],
    },
    {
      category: "Case Studies",
      papers: [
        {
          title: "Digital Transformation Success Story",
          description:
            "How a leading university modernized their operations with Tredumo.",
          date: "August 2023",
          length: "24 pages",
          downloadUrl: "/whitepapers/digital-transformation-case-study.pdf",
        },
        {
          title: "Improving Student Outcomes",
          description:
            "Measuring the impact of data-driven decision making in education.",
          date: "July 2023",
          length: "20 pages",
          downloadUrl: "/whitepapers/student-outcomes-study.pdf",
        },
      ],
    },
    {
      category: "Technical Guides",
      papers: [
        {
          title: "Education Data Security Guide",
          description:
            "Best practices for protecting sensitive student and institutional data.",
          date: "September 2023",
          length: "36 pages",
          downloadUrl: "/whitepapers/data-security-guide.pdf",
        },
        {
          title: "Integration Best Practices",
          description:
            "Technical guide for integrating education management systems.",
          date: "August 2023",
          length: "42 pages",
          downloadUrl: "/whitepapers/integration-guide.pdf",
        },
      ],
    },
  ];

  const featuredPaper = {
    title: "2024 State of Education Technology",
    description:
      "Comprehensive analysis of current trends, challenges, and opportunities in education technology. This report includes insights from over 500 educational institutions worldwide.",
    highlights: [
      "Latest EdTech trends and adoption rates",
      "Impact of AI and machine learning",
      "Data-driven decision making",
      "Future of hybrid learning",
      "Security and privacy considerations",
    ],
    date: "January 2024",
    length: "48 pages",
    downloadUrl: "/whitepapers/state-of-edtech-2024.pdf",
  };

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
              Whitepapers & Research
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              In-depth research and insights on education technology trends,
              best practices, and innovation.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Featured Whitepaper Section */}
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
                    Featured Report
                  </span>
                  <h3
                    className={`text-3xl md:text-4xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mt-4 mb-6 tracking-tight`}
                  >
                    {featuredPaper.title}
                  </h3>

                  <p
                    className={`${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    } mb-6`}
                  >
                    {featuredPaper.description}
                  </p>

                  <div className="mb-8">
                    <h4
                      className={`text-sm font-medium ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } uppercase mb-3`}
                    >
                      Key Insights
                    </h4>
                    <ul className="space-y-3">
                      {featuredPaper.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <ArrowRight
                            className={`h-4 w-4 ${
                              theme === "dark"
                                ? "text-white/60"
                                : "text-black/60"
                            } mr-3 flex-shrink-0`}
                          />
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-white/80"
                                : "text-black/80"
                            }`}
                          >
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center space-x-8">
                    <a
                      href={featuredPaper.downloadUrl}
                      className={`${
                        theme === "dark"
                          ? "bg-white text-black hover:bg-gray-100"
                          : "bg-black text-white hover:bg-gray-900"
                      } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
                    >
                      Download Report
                      <Download className="ml-2 h-4 w-4" />
                    </a>
                    <div
                      className={`${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } text-sm`}
                    >
                      {featuredPaper.length} • {featuredPaper.date}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className={`absolute inset-0 ${
                      theme === "dark" ? "bg-white/5" : "bg-black/5"
                    } backdrop-blur-xl rounded-2xl border ${
                      theme === "dark" ? "border-white/10" : "border-black/10"
                    }`}
                  ></div>
                  <div className="relative p-8">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        {
                          icon: (
                            <Users
                              className={`h-8 w-8 ${
                                theme === "dark" ? "text-white" : "text-black"
                              }`}
                            />
                          ),
                          stat: "500+",
                          label: "Institutions Surveyed",
                        },
                        {
                          icon: (
                            <BookOpen
                              className={`h-8 w-8 ${
                                theme === "dark" ? "text-white" : "text-black"
                              }`}
                            />
                          ),
                          stat: "48",
                          label: "Pages of Insights",
                        },
                        {
                          icon: (
                            <BarChart
                              className={`h-8 w-8 ${
                                theme === "dark" ? "text-white" : "text-black"
                              }`}
                            />
                          ),
                          stat: "25+",
                          label: "Data Visualizations",
                        },
                        {
                          icon: (
                            <FileText
                              className={`h-8 w-8 ${
                                theme === "dark" ? "text-white" : "text-black"
                              }`}
                            />
                          ),
                          stat: "12",
                          label: "Case Studies",
                        },
                      ].map((item, index) => (
                        <div key={index} className="text-center">
                          <div className="flex justify-center mb-4">
                            {item.icon}
                          </div>
                          <div
                            className={`text-2xl font-bold ${
                              theme === "dark" ? "text-white" : "text-black"
                            } mb-1`}
                          >
                            {item.stat}
                          </div>
                          <div
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/60"
                                : "text-black/60"
                            }`}
                          >
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          {whitepapers.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {category.category}
                </h2>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {category.papers.map((paper, paperIndex) => (
                  <motion.div
                    key={paperIndex}
                    variants={itemVariants}
                    className={`p-8 rounded-3xl ${
                      theme === "dark"
                        ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                        : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                    } backdrop-blur-xl border transition-all duration-300`}
                  >
                    <h3
                      className={`text-xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-4`}
                    >
                      {paper.title}
                    </h3>
                    <p
                      className={`${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      } mb-6`}
                    >
                      {paper.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div
                        className={`${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        } text-sm`}
                      >
                        {paper.length} • {paper.date}
                      </div>
                      <a
                        href={paper.downloadUrl}
                        className={`${
                          theme === "dark" ? "text-white" : "text-black"
                        } flex items-center font-medium group`}
                      >
                        Download
                        <Download className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
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
                Stay informed
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Subscribe to receive notifications when we publish new research
                and whitepapers.
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
                  Subscribe to Updates
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
                  Contact Research Team
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhitepapersPage;
