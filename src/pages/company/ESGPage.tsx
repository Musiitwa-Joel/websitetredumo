import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Users, Shield, BarChart } from "lucide-react";
import { motion } from "framer-motion";

interface ESGPageProps {
  theme: string;
}

const ESGPage: React.FC<ESGPageProps> = ({ theme }) => {
  const metrics = {
    environmental: [
      {
        metric: "100%",
        label: "Renewable Energy",
        description:
          "All data centers and offices powered by renewable sources",
      },
      {
        metric: "Zero",
        label: "Carbon Emissions",
        description: "Carbon neutral operations through offsets and reduction",
      },
      {
        metric: "90%",
        label: "Waste Reduction",
        description:
          "Reduction in office waste through recycling and composting",
      },
      {
        metric: "50%",
        label: "Water Savings",
        description: "Reduction in water usage through conservation efforts",
      },
    ],
    social: [
      {
        metric: "45%",
        label: "Women in Leadership",
        description: "Women in senior management positions",
      },
      {
        metric: "38%",
        label: "Diverse Workforce",
        description: "Employees from underrepresented groups",
      },
      {
        metric: "100%",
        label: "Pay Equity",
        description: "Equal pay for equal work across all demographics",
      },
      {
        metric: "40hrs",
        label: "Volunteer Time",
        description: "Paid volunteer time per employee annually",
      },
    ],
    governance: [
      {
        metric: "50%",
        label: "Board Diversity",
        description: "Independent board members from diverse backgrounds",
      },
      {
        metric: "100%",
        label: "Ethics Training",
        description: "Employees completed ethics and compliance training",
      },
      {
        metric: "Zero",
        label: "Incidents",
        description: "Major security or privacy incidents in 2023",
      },
      {
        metric: "A+",
        label: "ESG Rating",
        description: "Top-tier ESG rating from major agencies",
      },
    ],
  };

  const initiatives = [
    {
      title: "Environmental Stewardship",
      description:
        "Our commitment to environmental sustainability and reducing our carbon footprint.",
      goals: [
        "Achieve net-zero emissions by 2025",
        "Implement circular economy practices",
        "Reduce e-waste through recycling programs",
        "Expand renewable energy usage",
      ],
    },
    {
      title: "Social Impact",
      description: "Creating positive change in our communities and workplace.",
      goals: [
        "Increase workforce diversity by 25%",
        "Expand educational access programs",
        "Enhance employee well-being initiatives",
        "Strengthen community partnerships",
      ],
    },
    {
      title: "Corporate Governance",
      description:
        "Maintaining the highest standards of business ethics and transparency.",
      goals: [
        "Enhance board diversity and independence",
        "Strengthen data privacy measures",
        "Expand stakeholder engagement",
        "Improve supply chain transparency",
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
              Environmental, Social &
              <br />
              Governance Report
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Our commitment to sustainable and responsible business practices
              that create long-term value for all stakeholders.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Metrics Section */}
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
              <div className="space-y-12">
                {/* Environmental Metrics */}
                <div>
                  <div className="flex items-center mb-6">
                    <Leaf
                      className={`h-6 w-6 ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mr-3`}
                    />
                    <h2
                      className={`text-2xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Environmental Impact
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.environmental.map((item, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-xl ${
                          theme === "dark"
                            ? "bg-white/5 border-white/5"
                            : "bg-black/5 border-black/5"
                        } backdrop-blur-xl border`}
                      >
                        <div
                          className={`text-3xl font-bold ${
                            theme === "dark" ? "text-white" : "text-black"
                          } mb-2`}
                        >
                          {item.metric}
                        </div>
                        <div
                          className={`font-medium ${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          } mb-2`}
                        >
                          {item.label}
                        </div>
                        <div
                          className={`text-sm ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          }`}
                        >
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Metrics */}
                <div>
                  <div className="flex items-center mb-6">
                    <Users
                      className={`h-6 w-6 ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mr-3`}
                    />
                    <h2
                      className={`text-2xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Social Impact
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.social.map((item, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-xl ${
                          theme === "dark"
                            ? "bg-white/5 border-white/5"
                            : "bg-black/5 border-black/5"
                        } backdrop-blur-xl border`}
                      >
                        <div
                          className={`text-3xl font-bold ${
                            theme === "dark" ? "text-white" : "text-black"
                          } mb-2`}
                        >
                          {item.metric}
                        </div>
                        <div
                          className={`font-medium ${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          } mb-2`}
                        >
                          {item.label}
                        </div>
                        <div
                          className={`text-sm ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          }`}
                        >
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Governance Metrics */}
                <div>
                  <div className="flex items-center mb-6">
                    <Shield
                      className={`h-6 w-6 ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mr-3`}
                    />
                    <h2
                      className={`text-2xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Governance
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.governance.map((item, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-xl ${
                          theme === "dark"
                            ? "bg-white/5 border-white/5"
                            : "bg-black/5 border-black/5"
                        } backdrop-blur-xl border`}
                      >
                        <div
                          className={`text-3xl font-bold ${
                            theme === "dark" ? "text-white" : "text-black"
                          } mb-2`}
                        >
                          {item.metric}
                        </div>
                        <div
                          className={`font-medium ${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          } mb-2`}
                        >
                          {item.label}
                        </div>
                        <div
                          className={`text-sm ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          }`}
                        >
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Section */}
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
              Our Commitments
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              2024 ESG Initiatives
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                  {initiative.goals.map((goal, idx) => (
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
                        {goal}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Progress Section */}
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <BarChart
                      className={`h-6 w-6 ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mr-3`}
                    />
                    <h2
                      className={`text-2xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Progress Tracking
                    </h2>
                  </div>

                  <p
                    className={`${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    } mb-6`}
                  >
                    We're committed to transparency in our ESG journey. Track
                    our progress and hold us accountable to our goals.
                  </p>

                  <div className="space-y-6">
                    {[
                      { label: "Carbon Reduction", progress: 75 },
                      { label: "Diversity Goals", progress: 85 },
                      { label: "Governance Standards", progress: 90 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-white/80"
                                : "text-black/80"
                            }`}
                          >
                            {item.label}
                          </span>
                          <span
                            className={`${
                              theme === "dark" ? "text-white" : "text-black"
                            } font-medium`}
                          >
                            {item.progress}%
                          </span>
                        </div>
                        <div
                          className={`h-2 rounded-full ${
                            theme === "dark" ? "bg-white/10" : "bg-black/10"
                          }`}
                        >
                          <div
                            className={`h-full rounded-full ${
                              theme === "dark" ? "bg-white" : "bg-black"
                            }`}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                    alt="ESG Progress"
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
                Join us in creating a sustainable future
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Learn more about our ESG initiatives and how you can get
                involved.
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
                  Get Involved
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/corporate-responsibility"
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

export default ESGPage;
