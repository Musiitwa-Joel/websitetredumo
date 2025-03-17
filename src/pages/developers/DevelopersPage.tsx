import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Book,
  Terminal,
  GitBranch,
  Package,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

interface DevelopersPageProps {
  theme: string;
}

const DevelopersPage: React.FC<DevelopersPageProps> = ({ theme }) => {
  const resources = [
    {
      icon: (
        <Book
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Documentation",
      description: "Comprehensive guides and API references",
      links: [
        { text: "Getting Started", url: "/docs/getting-started" },
        { text: "API Reference", url: "/docs/api" },
        { text: "SDKs & Tools", url: "/docs/sdks" },
      ],
    },
    {
      icon: (
        <Code
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Code Examples",
      description: "Sample code and implementation guides",
      links: [
        { text: "Code Samples", url: "/docs/examples" },
        { text: "Tutorials", url: "/docs/tutorials" },
        { text: "Best Practices", url: "/docs/best-practices" },
      ],
    },
    {
      icon: (
        <Terminal
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "CLI Tools",
      description: "Command-line tools for developers",
      links: [
        { text: "CLI Documentation", url: "/docs/cli" },
        { text: "Installation Guide", url: "/docs/cli/install" },
        { text: "Commands", url: "/docs/cli/commands" },
      ],
    },
    {
      icon: (
        <GitBranch
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Integration Guides",
      description: "Step-by-step integration tutorials",
      links: [
        { text: "Quick Start", url: "/docs/integration" },
        { text: "Authentication", url: "/docs/auth" },
        { text: "Webhooks", url: "/docs/webhooks" },
      ],
    },
  ];

  const sdks = [
    {
      language: "JavaScript",
      description: "Official JavaScript/TypeScript SDK with full API coverage",
      version: "v2.5.0",
      status: "Stable",
      docs: "/docs/sdk/javascript",
    },
    {
      language: "Python",
      description: "Python SDK for server-side integration",
      version: "v2.3.1",
      status: "Stable",
      docs: "/docs/sdk/python",
    },
    {
      language: "Java",
      description: "Java SDK for enterprise applications",
      version: "v2.2.0",
      status: "Stable",
      docs: "/docs/sdk/java",
    },
    {
      language: "Ruby",
      description: "Ruby SDK for Rails applications",
      version: "v2.1.0",
      status: "Beta",
      docs: "/docs/sdk/ruby",
    },
  ];

  const features = [
    {
      icon: (
        <Package
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "RESTful APIs",
      description:
        "Modern REST APIs with comprehensive documentation and examples.",
    },
    {
      icon: (
        <Shield
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Authentication",
      description: "Secure authentication with OAuth 2.0 and API keys.",
    },
    {
      icon: (
        <Terminal
          className={`h-8 w-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "CLI Tools",
      description: "Powerful command-line tools for automation and deployment.",
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
              Developer Resources
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Everything you need to build with Tredumo
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/docs/getting-started"
                className={`${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/docs/api"
                className={`${
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-black/10 text-black hover:bg-black/20"
                } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
              >
                API Reference
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Resources Grid */}
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
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="mb-6">{resource.icon}</div>
                <h3
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-4`}
                >
                  {resource.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } mb-6`}
                >
                  {resource.description}
                </p>
                <ul className="space-y-3">
                  {resource.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.url}
                        className={`inline-flex items-center ${
                          theme === "dark"
                            ? "text-white hover:text-white/80"
                            : "text-black hover:text-black/80"
                        } font-medium group`}
                      >
                        {link.text}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SDKs Section */}
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
              SDKs
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Official SDKs
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {sdks.map((sdk, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {sdk.language}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      theme === "dark"
                        ? "bg-white/10 text-white"
                        : "bg-black/10 text-black"
                    }`}
                  >
                    {sdk.status}
                  </span>
                </div>

                <p
                  className={`${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  } text-sm mb-4`}
                >
                  {sdk.description}
                </p>

                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-white/60" : "text-black/60"
                  } mb-4`}
                >
                  Version: {sdk.version}
                </div>

                <Link
                  to={sdk.docs}
                  className={`inline-flex items-center ${
                    theme === "dark" ? "text-white" : "text-black"
                  } font-medium group`}
                >
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3
                      className={`text-xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-4`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
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
                Ready to start building?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Get started with our comprehensive documentation and developer
                tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/docs/getting-started"
                  className={`${
                    theme === "dark"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-900"
                  } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
                >
                  Get Started
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
                  Contact Support
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DevelopersPage;
