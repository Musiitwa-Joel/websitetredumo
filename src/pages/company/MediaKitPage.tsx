import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Image, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";

interface MediaKitPageProps {
  theme: string;
}

const MediaKitPage: React.FC<MediaKitPageProps> = ({ theme }) => {
  const brandAssets = [
    {
      title: "Logo Package",
      description:
        "Full logo suite including primary, secondary, and monochrome versions.",
      formats: ["AI", "SVG", "PNG", "PDF"],
      size: "12.5 MB",
      link: "/downloads/tredumo-logos.zip",
    },
    {
      title: "Brand Guidelines",
      description:
        "Comprehensive guide for logo usage, colors, typography, and brand voice.",
      formats: ["PDF"],
      size: "8.2 MB",
      link: "/downloads/tredumo-brand-guidelines.pdf",
    },
    {
      title: "Product Screenshots",
      description:
        "High-resolution screenshots of key product features and interfaces.",
      formats: ["PNG", "JPG"],
      size: "45.8 MB",
      link: "/downloads/tredumo-screenshots.zip",
    },
    {
      title: "Team Photos",
      description:
        "Professional headshots and team photos of leadership and key personnel.",
      formats: ["JPG"],
      size: "32.1 MB",
      link: "/downloads/tredumo-team-photos.zip",
    },
  ];

  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "Tredumo Launches New AI-Powered Learning Analytics Platform",
      description:
        "Revolutionary platform helps educational institutions leverage artificial intelligence for better student outcomes.",
      link: "/press/ai-platform-launch",
    },
    {
      date: "February 28, 2024",
      title: "Tredumo Reaches Milestone of 500 Partner Institutions",
      description:
        "Leading education management platform celebrates rapid growth and expanding global presence.",
      link: "/press/500-partners",
    },
    {
      date: "January 15, 2024",
      title: "Tredumo Secures $50M Series B Funding",
      description:
        "Investment will accelerate product development and international expansion.",
      link: "/press/series-b-funding",
    },
  ];

  const companyFacts = [
    {
      label: "Founded",
      value: "2022",
    },
    {
      label: "Headquarters",
      value: "San Francisco, CA",
    },
    {
      label: "Employees",
      value: "250+",
    },
    {
      label: "Partner Institutions",
      value: "500+",
    },
    {
      label: "Countries",
      value: "35+",
    },
    {
      label: "Students Served",
      value: "3.5M+",
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
              Media Kit & Press Resources
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Everything you need to tell the Tredumo story. Download our brand
              assets, access press releases, and find key company information.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Brand Assets Section */}
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
              Brand Assets
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Download official brand assets
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {brandAssets.map((asset, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3
                      className={`text-xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-2`}
                    >
                      {asset.title}
                    </h3>
                    <p
                      className={`${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      } mb-4`}
                    >
                      {asset.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <div
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        Formats: {asset.formats.join(", ")}
                      </div>
                      <div
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        Size: {asset.size}
                      </div>
                    </div>
                  </div>
                  <a
                    href={asset.link}
                    className={`p-2 rounded-full ${
                      theme === "dark"
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-black/10 hover:bg-black/20"
                    } transition-colors`}
                  >
                    <Download
                      className={`h-5 w-5 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Press Releases Section */}
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
              Press Releases
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Latest news and announcements
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div
                      className={`text-sm ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } mb-2`}
                    >
                      {release.date}
                    </div>
                    <h3
                      className={`text-xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-2`}
                    >
                      {release.title}
                    </h3>
                    <p
                      className={`${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      } mb-4 md:mb-0`}
                    >
                      {release.description}
                    </p>
                  </div>
                  <Link
                    to={release.link}
                    className={`inline-flex items-center ${
                      theme === "dark" ? "text-white" : "text-black"
                    } font-medium group whitespace-nowrap`}
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Facts Section */}
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
                  <h2
                    className={`text-3xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-6`}
                  >
                    Company Facts
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    {companyFacts.map((fact, index) => (
                      <div key={index}>
                        <div
                          className={`text-sm ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          } mb-1`}
                        >
                          {fact.label}
                        </div>
                        <div
                          className={`text-2xl font-semibold ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        >
                          {fact.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2
                    className={`text-3xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-6`}
                  >
                    Media Contacts
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3
                        className={`text-lg font-medium ${
                          theme === "dark" ? "text-white" : "text-black"
                        } mb-2`}
                      >
                        Press Inquiries
                      </h3>
                      <p
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        press@tredumo.com
                        <br />
                        +1 (415) 555-0123
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-medium ${
                          theme === "dark" ? "text-white" : "text-black"
                        } mb-2`}
                      >
                        Media Relations
                      </h3>
                      <p
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        media@tredumo.com
                        <br />
                        +1 (415) 555-0124
                      </p>
                    </div>
                  </div>
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
                Need something specific?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Contact our media relations team for additional resources,
                interview requests, or custom assets.
              </p>

              <Link
                to="/contact"
                className={`inline-flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
              >
                Contact Media Relations
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MediaKitPage;
