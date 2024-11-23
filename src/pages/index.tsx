import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-blue-800 to-purple-900 text-white py-24 px-6"
        style={{
          backgroundImage: 'url(/images/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to <span className="text-blue-300">Stellar-UI</span>
          </motion.h1>
          <motion.p
            className="text-lg mb-8 opacity-90"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Crafting visually stunning and functional digital experiences.
          </motion.p>
          <motion.a
            href="/services"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Get Started
          </motion.a>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Web Development', description: 'Scalable and robust web solutions.', icon: '/icons/web.svg' },
              { title: 'Mobile Development', description: 'Modern mobile app experiences.', icon: '/icons/mobile.svg' },
              { title: 'UI/UX Design', description: 'Beautiful and intuitive interfaces.', icon: '/icons/uiux.svg' },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 flex items-center justify-center">
                  <img src={service.icon} alt={service.title} className="w-16 h-16" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Our Portfolio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: 'Cosmic Website', description: 'A futuristic space-themed website.', image: '/images/portfolio1.jpg' },
              { title: 'Galaxy App', description: 'An astronomy app for stargazers.', image: '/images/portfolio2.jpg' },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-gray-200 mb-8">
          Let’s collaborate and make your ideas come to life.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-all"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
