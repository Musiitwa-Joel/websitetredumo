import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Code,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

interface HackathonsPageProps {
  theme: string;
}

const HackathonsPage: React.FC<HackathonsPageProps> = ({ theme }) => {
  const upcomingHackathons = [
    {
      title: "EdTech Innovation Challenge",
      date: "June 1-3, 2024",
      location: "San Francisco, CA",
      format: "In-person",
      prizes: ["$10,000 Grand Prize", "Cloud Credits", "Mentorship Program"],
      description:
        "Build innovative solutions for modern education challenges using Tredumo's API and platform.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    },
    {
      title: "Global Education Hackathon",
      date: "July 15-17, 2024",
      location: "Virtual",
      format: "Online",
      prizes: ["$5,000 First Prize", "API Credits", "Startup Program Access"],
      description:
        "A virtual hackathon focusing on accessibility and inclusion in education technology.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    },
  ];

  const pastWinners = [
    {
      project: "LearnAI Assistant",
      team: "Team Nova",
      description:
        "AI-powered learning assistant that provides personalized study recommendations.",
      prize: "$10,000",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
    },
    {
      project: "EduMetrics",
      team: "DataMinds",
      description:
        "Advanced analytics platform for tracking student progress and engagement.",
      prize: "$5,000",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    },
  ];

  const resources = [
    {
      title: "API Documentation",
      description:
        "Comprehensive documentation for Tredumo's API and integration tools.",
      link: "/developers",
    },
    {
      title: "Starter Templates",
      description:
        "Ready-to-use templates and boilerplates for quick development.",
      link: "/developers/templates",
    },
    {
      title: "Sample Projects",
      description:
        "Example projects and code samples from previous hackathons.",
      link: "/developers/examples",
    },
    {
      title: "Technical Support",
      description:
        "Direct access to our developer support team during the event.",
      link: "/contact",
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
              Hackathons
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Build innovative solutions and compete for prizes
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Upcoming Hackathons */}
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
              Upcoming Events
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Join our next hackathon
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {upcomingHackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border overflow-hidden transition-all duration-300`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-medium ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      {hackathon.format}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      {hackathon.date}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-2`}
                  >
                    {hackathon.title}
                  </h3>

                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } text-sm mb-4`}
                  >
                    {hackathon.description}
                  </p>

                  <div className="mb-6">
                    <h4
                      className={`text-sm font-medium ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } uppercase mb-2`}
                    >
                      Prizes
                    </h4>
                    <ul className="space-y-2">
                      {hackathon.prizes.map((prize, idx) => (
                        <li key={idx} className="flex items-center">
                          <Trophy
                            className={`h-4 w-4 ${
                              theme === "dark"
                                ? "text-white/60"
                                : "text-black/60"
                            } mr-2`}
                          />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/80"
                                : "text-black/80"
                            }`}
                          >
                            {prize}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin
                        className={`h-4 w-4 ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        } mr-2`}
                      />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        {hackathon.location}
                      </span>
                    </div>

                    <Link
                      to="/contact"
                      className={`inline-flex items-center text-sm ${
                        theme === "dark" ? "text-white" : "text-black"
                      } font-medium group`}
                    >
                      Register
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Past Winners */}
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
              Hall of Fame
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Past winners
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {pastWinners.map((winner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border overflow-hidden transition-all duration-300`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={winner.image}
                    alt={winner.project}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`text-xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {winner.project}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === "dark"
                          ? "bg-white/10 text-white"
                          : "bg-black/10 text-black"
                      }`}
                    >
                      {winner.prize}
                    </span>
                  </div>

                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } mb-4`}
                  >
                    {winner.description}
                  </p>

                  <div className="flex items-center">
                    <Users
                      className={`h-4 w-4 ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      } mr-2`}
                    />
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      {winner.team}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
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
              Resources
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Developer resources
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <Code
                    className={`h-6 w-6 ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mr-3`}
                  />
                  <h3
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {resource.title}
                  </h3>
                </div>

                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-4`}
                >
                  {resource.description}
                </p>

                <Link
                  to={resource.link}
                  className={`inline-flex items-center text-sm ${
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
                Ready to hack?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Join our next hackathon and build something amazing with
                Tredumo.
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
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/developers"
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HackathonsPage;
