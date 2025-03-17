import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

interface EventsPageProps {
  theme: string;
}

const EventsPage: React.FC<EventsPageProps> = ({ theme }) => {
  const upcomingEvents = [
    {
      title: "Tredumo Developer Conference 2024",
      date: "June 15-17, 2024",
      location: "San Francisco, CA",
      type: "Conference",
      description:
        "Join us for three days of technical sessions, workshops, and networking with the Tredumo developer community.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
      registrationUrl: "/events/devconf2024",
    },
    {
      title: "Education Tech Summit",
      date: "July 8, 2024",
      location: "Virtual Event",
      type: "Summit",
      description:
        "A virtual summit focusing on the future of education technology and digital transformation in learning.",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80",
      registrationUrl: "/events/techsummit2024",
    },
    {
      title: "Product Workshop Series",
      date: "Monthly",
      location: "Multiple Locations",
      type: "Workshop",
      description:
        "Hands-on workshops to help you get the most out of Tredumo's features and capabilities.",
      image:
        "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80",
      registrationUrl: "/events/workshops",
    },
  ];

  const pastEvents = [
    {
      title: "API Integration Masterclass",
      date: "March 15, 2024",
      location: "London, UK",
      type: "Workshop",
      description:
        "Deep dive into Tredumo's API capabilities and integration best practices.",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
      recordingUrl: "/events/recordings/api-masterclass",
    },
    {
      title: "Education Innovation Forum",
      date: "February 22, 2024",
      location: "New York, NY",
      type: "Forum",
      description:
        "Industry leaders discuss the latest trends in education technology and digital learning.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
      recordingUrl: "/events/recordings/innovation-forum",
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
              Events & Meetups
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Join us at our upcoming events or watch recordings of past
              sessions
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Featured Event */}
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
              } backdrop-blur-xl rounded-[2rem] border overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      theme === "dark"
                        ? "bg-white/10 text-white"
                        : "bg-black/10 text-black"
                    } mb-6`}
                  >
                    Featured Event
                  </span>

                  <h3
                    className={`text-3xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    {upcomingEvents[0].title}
                  </h3>

                  <p
                    className={`${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    } mb-6`}
                  >
                    {upcomingEvents[0].description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center">
                      <Calendar
                        className={`h-4 w-4 ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        } mr-2`}
                      />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        {upcomingEvents[0].date}
                      </span>
                    </div>
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
                        {upcomingEvents[0].location}
                      </span>
                    </div>
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
                        Limited spots available
                      </span>
                    </div>
                  </div>

                  <Link
                    to={upcomingEvents[0].registrationUrl}
                    className={`inline-flex items-center ${
                      theme === "dark"
                        ? "bg-white text-black hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-900"
                    } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="h-full">
                  <img
                    src={upcomingEvents[0].image}
                    alt={upcomingEvents[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Join us at these events
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {upcomingEvents.slice(1).map((event, index) => (
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
                    src={event.image}
                    alt={event.title}
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
                      {event.type}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      {event.date}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-2`}
                  >
                    {event.title}
                  </h3>

                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } text-sm mb-4`}
                  >
                    {event.description}
                  </p>

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
                        {event.location}
                      </span>
                    </div>

                    <Link
                      to={event.registrationUrl}
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

      {/* Past Events */}
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
              Past Events
            </span>
            <h2
              className={`text-3xl md:text-4xl font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Watch event recordings
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {pastEvents.map((event, index) => (
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
                    src={event.image}
                    alt={event.title}
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
                      {event.type}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        theme === "dark" ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      {event.date}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-2`}
                  >
                    {event.title}
                  </h3>

                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } text-sm mb-4`}
                  >
                    {event.description}
                  </p>

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
                        {event.location}
                      </span>
                    </div>

                    <Link
                      to={event.recordingUrl}
                      className={`inline-flex items-center text-sm ${
                        theme === "dark" ? "text-white" : "text-black "
                      } font-medium group`}
                    >
                      Watch Recording
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
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
                Want to host an event?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Partner with us to organize workshops, meetups, or technical
                sessions for your community.
              </p>

              <Link
                to="/contact"
                className={`inline-flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
              >
                Contact Events Team
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
