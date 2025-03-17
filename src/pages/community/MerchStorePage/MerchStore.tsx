import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Truck, Shield } from "lucide-react";
import { motion } from "framer-motion";

interface MerchStorePageProps {
  theme: string;
}

const MerchStorePage: React.FC<MerchStorePageProps> = ({ theme }) => {
  const products = [
    {
      name: "Developer Hoodie",
      price: 49.99,
      description:
        "Comfortable cotton-blend hoodie with embroidered Tredumo logo.",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80",
      colors: ["Black", "Navy", "Gray"],
      sizes: ["S", "M", "L", "XL", "2XL"],
    },
    {
      name: "Tech T-Shirt",
      price: 24.99,
      description:
        "Lightweight performance t-shirt with printed Tredumo design.",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
      colors: ["White", "Black", "Blue"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      name: "Developer Cap",
      price: 29.99,
      description: "Adjustable cotton cap with embroidered Tredumo logo.",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80",
      colors: ["Black", "Navy"],
      sizes: ["One Size"],
    },
    {
      name: "Laptop Sleeve",
      price: 34.99,
      description: "Protective neoprene sleeve with Tredumo branding.",
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80",
      colors: ["Black"],
      sizes: ['13"', '15"', '16"'],
    },
    {
      name: "Water Bottle",
      price: 19.99,
      description: "Stainless steel water bottle with Tredumo logo.",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80",
      colors: ["Silver", "Black", "White"],
      sizes: ["20oz"],
    },
    {
      name: "Sticker Pack",
      price: 9.99,
      description:
        "Set of 5 high-quality vinyl stickers featuring Tredumo designs.",
      image:
        "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?auto=format&fit=crop&q=80",
      colors: ["Multi"],
      sizes: ["Standard"],
    },
  ];

  const features = [
    {
      icon: (
        <Truck
          className={`h-6 w-6 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Free Shipping",
      description: "Free shipping on orders over $75",
    },
    {
      icon: (
        <Shield
          className={`h-6 w-6 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Secure Checkout",
      description: "Safe and secure payment processing",
    },
    {
      icon: (
        <ShoppingCart
          className={`h-6 w-6 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      ),
      title: "Easy Returns",
      description: "30-day hassle-free returns",
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
              Merch Store
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Show your Tredumo pride with our official merchandise
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-4"
              >
                <div
                  className={`p-3 rounded-full ${
                    theme === "dark" ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-3xl ${
                  theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border overflow-hidden transition-all duration-300`}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
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
                      {product.name}
                    </h3>
                    <span
                      className={`text-lg font-medium ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      ${product.price}
                    </span>
                  </div>

                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } text-sm mb-4`}
                  >
                    {product.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        Colors:
                      </span>
                      <div className="flex items-center gap-2 mt-2">
                        {product.colors.map((color, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 text-sm rounded-full ${
                              theme === "dark"
                                ? "bg-white/10 text-white"
                                : "bg-black/10 text-black"
                            }`}
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        Sizes:
                      </span>
                      <div className="flex items-center gap-2 mt-2">
                        {product.sizes.map((size, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 text-sm rounded-full ${
                              theme === "dark"
                                ? "bg-white/10 text-white"
                                : "bg-black/10 text-black"
                            }`}
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    className={`w-full flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-white text-black hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-900"
                    } px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
                  >
                    Add to Cart
                    <ShoppingCart className="ml-2 h-4 w-4" />
                  </button>
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
                Want custom merchandise?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                } max-w-2xl mx-auto mb-8`}
              >
                Contact us for bulk orders or custom branded merchandise for
                your team.
              </p>

              <Link
                to="/contact"
                className={`inline-flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
              >
                Contact Sales
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MerchStorePage;
