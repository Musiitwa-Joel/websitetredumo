import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, Globe, Target } from "lucide-react";
import { motion } from "framer-motion";

interface DiversityPageProps {
  theme: string;
}

const DiversityPage: React.FC<DiversityPageProps> = ({ theme }) => {
  const stats = [
    { value: "45%", label: "Women in Leadership" },
    { value: "38%", label: "Diverse Workforce" },
    { value: "28", label: "Nationalities" },
    { value: "100%", label: "Pay Equity" },
  ];

  const initiatives = [
    {
      icon: (
        <Users
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Inclusive Hiring",
      description:
        "Our recruitment process is designed to eliminate bias and attract diverse talent through partnerships with organizations focused on underrepresented groups in tech.",
      metrics: [
        "Blind resume screening",
        "Diverse interview panels",
        "Structured interviews",
        "Inclusive job descriptions",
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
      title: "Employee Resource Groups",
      description:
        "We support and fund employee-led groups that foster a diverse, inclusive workplace aligned with our values, mission, and goals.",
      metrics: [
        "Women in Tech",
        "LGBTQ+ Alliance",
        "Cultural Diversity Network",
        "Parents and Caregivers",
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
      title: "Global Perspective",
      description:
        "We celebrate and leverage our global diversity to build better products and create more inclusive educational solutions.",
      metrics: [
        "Cross-cultural training",
        "Global mentorship program",
        "Cultural celebration events",
        "Language learning support",
      ],
    },
    {
      icon: (
        <Target
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Development & Growth",
      description:
        "We invest in programs that support the growth and advancement of underrepresented groups within our organization.",
      metrics: [
        "Leadership development",
        "Mentorship programs",
        "Skills workshops",
        "Conference sponsorships",
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
              Diversity, Equity &
              <br />
              Inclusion at Tredumo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Building a more inclusive future through diversity in education
              technology.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p
                  className={`text-4xl md:text-5xl font-bold ${
                    theme === "dark"
                      ? "text-tredumo-blue-400"
                      : "text-tredumo-blue-600"
                  } mb-2`}
                >
                  {stat.value}
                </p>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } text-sm uppercase tracking-wider`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
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
              Our Initiatives
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Building an inclusive workplace
            </h2>
          </motion.div>

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

      {/* Commitment Section */}
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
                  <span
                    className={`text-sm font-medium tracking-widest ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } uppercase`}
                  >
                    Our Commitment
                  </span>
                  <h3
                    className={`text-3xl md:text-4xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mt-4 mb-6 tracking-tight`}
                  >
                    Creating lasting change
                  </h3>

                  <div
                    className={`space-y-6 ${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    }`}
                  >
                    <p>
                      At Tredumo, we believe that diversity drives innovation
                      and better outcomes for our employees, customers, and
                      communities. Our commitment to diversity, equity, and
                      inclusion is fundamental to our success and growth.
                    </p>
                    <p>
                      We're dedicated to creating an environment where everyone
                      feels valued, heard, and empowered to do their best work.
                      This commitment extends beyond our workplace to how we
                      develop our products and serve our customers.
                    </p>
                    <p>
                      Through partnerships, mentorship programs, and continuous
                      learning opportunities, we're working to create lasting
                      change in the tech industry and education sector.
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                    alt="Diverse Team"
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
                Join our diverse team
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                We're always looking for talented individuals who bring unique
                perspectives and experiences to our team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/careers"
                  className={`${
                    theme === "dark"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-900"
                  } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
                >
                  View Open Positions
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-black/10 text-black hover:bg-black/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DiversityPage;
