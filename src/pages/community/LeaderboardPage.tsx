import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Star, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

interface LeaderboardPageProps {
  theme: string;
}

const LeaderboardPage: React.FC<LeaderboardPageProps> = ({ theme }) => {
  const topContributors = [
    {
      rank: 1,
      name: "Sarah Chen",
      points: 15250,
      contributions: 156,
      badges: ["API Expert", "Community Leader", "Top Contributor"],
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    },
    {
      rank: 2,
      name: "Michael Rodriguez",
      points: 12800,
      contributions: 134,
      badges: ["Solution Architect", "Mentor", "Innovation Award"],
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    },
    {
      rank: 3,
      name: "Emily Johnson",
      points: 11500,
      contributions: 128,
      badges: ["Technical Expert", "Community Guide", "Rising Star"],
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    },
  ];

  const leaderboard = [
    {
      rank: 4,
      name: "David Kim",
      points: 9800,
      contributions: 98,
      badges: ["Problem Solver", "Helpful Hero"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    },
    {
      rank: 5,
      name: "Lisa Wang",
      points: 8900,
      contributions: 92,
      badges: ["Code Wizard", "Bug Hunter"],
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
    {
      rank: 6,
      name: "James Wilson",
      points: 8200,
      contributions: 86,
      badges: ["Feature Champion", "Early Adopter"],
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    },
  ];

  const categories = [
    {
      icon: (
        <Trophy
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Top Contributors",
      description:
        "Most active community members helping others and contributing to discussions.",
    },
    {
      icon: (
        <Star
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Feature Champions",
      description:
        "Members who provide valuable feedback and help shape our product roadmap.",
    },
    {
      icon: (
        <Users
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Community Leaders",
      description:
        "Recognized experts who guide and mentor other community members.",
    },
    {
      icon: (
        <Award
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Rising Stars",
      description: "New members making significant impact in the community.",
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
              Community Leaderboard
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Recognizing our top contributors and community leaders
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Top Contributors Section */}
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
              Top Contributors
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {topContributors.map((contributor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="relative mb-6">
                  <img
                    src={contributor.image}
                    alt={contributor.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${
                      theme === "dark"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    } flex items-center justify-center font-bold`}
                  >
                    #{contributor.rank}
                  </div>
                </div>

                <div className="text-center">
                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-2`}
                  >
                    {contributor.name}
                  </h3>

                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div>
                      <div
                        className={`text-2xl font-bold ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {contributor.points.toLocaleString()}
                      </div>
                      <div
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        Points
                      </div>
                    </div>
                    <div>
                      <div
                        className={`text-2xl font-bold ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {contributor.contributions}
                      </div>
                      <div
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        Contributions
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {contributor.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm ${
                          theme === "dark"
                            ? "bg-white/10 text-white"
                            : "bg-black/10 text-black"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leaderboard Section */}
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
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } tracking-tight`}
            >
              Leaderboard
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {leaderboard.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full ${
                      theme === "dark"
                        ? "bg-white/10 text-white"
                        : "bg-black/10 text-black"
                    } flex items-center justify-center font-bold mr-4`}
                  >
                    #{member.rank}
                  </div>

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />

                  <div className="flex-1">
                    <h3
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {member.name}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        {member.points.toLocaleString()} points
                      </span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        {member.contributions} contributions
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    {member.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm ${
                          theme === "dark"
                            ? "bg-white/10 text-white"
                            : "bg-black/10 text-black"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
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
              Categories
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Recognition Categories
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="mb-4">{category.icon}</div>
                <h3
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-2`}
                >
                  {category.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } text-sm`}
                >
                  {category.description}
                </p>
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
                Join our community
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Start contributing and earn recognition in our community.
              </p>

              <Link
                to="/contact"
                className={`inline-flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LeaderboardPage;
