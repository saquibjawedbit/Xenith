'use client';  // Add this at the top to mark as Client Component

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">Xenith</div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-purple-600">Home</a>
            <a href="#why-us" className="hover:text-purple-600">Why Us</a>
            <a href="#offerings" className="hover:text-purple-600">Services</a>
            <a href="#team" className="hover:text-purple-600">Team</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <motion.div 
          className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bridging Tech with Education Sector
            </h1>
            <p className="text-gray-600 mb-8">
              Elevating Education with Innovative Software Solutions.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 mx-auto md:mx-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Book a Call
            </button>
          </div>
          <div className="flex-1">
            <Image
              src="/hero-image.jpg"
              alt="Education Technology"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            {...fadeIn}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 inline-block text-transparent bg-clip-text"
          >
            Why Choose Xenith?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title: "Innovation", desc: "Cutting-edge educational technology"},
              {title: "Experience", desc: "Years of industry expertise"},
              {title: "Support", desc: "24/7 dedicated assistance"}
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-purple-100 hover:border-purple-200 transition shadow-lg hover:shadow-purple-100">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="offerings" className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            {...fadeIn}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 inline-block text-transparent bg-clip-text"
          >
            What We Offer
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Learning Management System",
                desc: "Comprehensive platform for online education delivery",
                icon: "📚"
              },
              {
                title: "Student Analytics",
                desc: "Data-driven insights for better learning outcomes",
                icon: "📊"
              },
              {
                title: "Virtual Classrooms",
                desc: "Interactive online learning environments",
                icon: "💻"
              },
              {
                title: "Custom Solutions",
                desc: "Tailored educational software development",
                icon: "⚙️"
              },
              {
                title: "Mobile Learning",
                desc: "Education on the go with mobile applications",
                icon: "📱"
              },
              {
                title: "AI Integration",
                desc: "Smart learning features powered by AI",
                icon: "🤖"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:border-purple-200 transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-purple-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            {...fadeIn}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 inline-block text-transparent bg-clip-text"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md border border-purple-100 hover:border-purple-200 transition"
              >
                <p className="text-gray-600 italic mb-4">
                  "Xenith has transformed how we approach education technology..."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-gray-500">School Principal</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            {...fadeIn}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Team
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h3 className="font-semibold">Team Member</h3>
                <p className="text-gray-600">Position</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-purple-900 to-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 inline-block text-transparent bg-clip-text">
                Xenith
              </h3>
              <p className="text-gray-400">Bridging Tech with Education Sector</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-purple-200">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#why-us" className="hover:text-white">Why Us</a></li>
                <li><a href="#offerings" className="hover:text-white">Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-purple-200">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@xenith.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: City, Country</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-purple-200">Follow Us</h4>
              <div className="flex gap-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
