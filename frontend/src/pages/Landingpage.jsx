// import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">BlogWave</div>
          <div className="space-x-4">
            <a href="#features" className="hover:text-yellow-300 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-yellow-300 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-yellow-300 transition-colors">Testimonials</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unleash Your Creativity
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start your blogging journey with BlogWave - Where ideas come to life
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="/Signup" className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-300 transition-colors">
              Get Started
            </a>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-indigo-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-10">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-indigo-600 rounded-lg p-6">
                <h3 className="text-2xl font-bold">Easy to Use</h3>
                <p className="text-white">
                  Our platform is user-friendly, allowing you to focus on your content.
                </p>
              </div>
              <div className="bg-indigo-600 rounded-lg p-6">
                <h3 className="text-2xl font-bold">Responsive Design</h3>
                <p className="text-white">
                  Your blog will look great on all devices, ensuring a seamless experience.
                </p>
              </div>
              <div className="bg-indigo-600 rounded-lg p-6">
                <h3 className="text-2xl font-bold">SEO Friendly</h3>
                <p className="text-white">
                  Optimize your content to rank higher in search engines and attract more readers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-10">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-white">$5/month</p>
                <p className="text-white">Basic features for beginner bloggers.</p>
                <a href="#signup" className="text-yellow-400 font-semibold">Sign Up</a>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-white">$15/month</p>
                <p className="text-white">Advanced features for serious bloggers.</p>
                <a href="#signup" className="text-yellow-400 font-semibold">Sign Up</a>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-white">Contact us for pricing.</p>
                <p className="text-white">Custom solutions for large organizations.</p>
                <a href="#signup" className="text-yellow-400 font-semibold">Sign Up</a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-indigo-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-10">Testimonials</h2>
            <div className="flex flex-wrap justify-center">
              <div className="bg-indigo-600 rounded-lg p-6 m-2">
                <p className="text-white">BlogWave has transformed the way I share my thoughts!</p>
                <p className="text-yellow-400 font-semibold">- Sarah, Blogger</p>
              </div>
              <div className="bg-indigo-600 rounded-lg p-6 m-2">
                <p className="text-white">The ease of use is unmatched. I love it!</p>
                <p className="text-yellow-400 font-semibold">- Mike, Writer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Blogging Journey?</h2>
          <a href="#signup" className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-300 transition-colors">
            Get Started
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 py-6 text-center text-white">
        <p>&copy; 2024 BlogWave. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
