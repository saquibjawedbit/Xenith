"use client";  // Add this at the top to mark as Client Component

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};


export default function Home() {


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white ">
      {/* Navbar */}
  
      {/* Hero Section */}
     <Hero/>

      {/* Why Choose Us */}
      {/* <section id="why-us" className="py-16 px-8 ">
        <div className="container mx-auto px-6">
          <motion.h2 
            {...fadeIn}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 inline-block text-transparent bg-clip-text"
          >
            Why Choose Xenith?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{title: "Innovation", desc: "Cutting-edge educational technology"},
              {title: "Experience", desc: "Years of industry expertise"},
              {title: "Support", desc: "24/7 dedicated assistance"}].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-lg bg-gray-900 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition shadow-lg hover:shadow-purple-400">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* What We Offer Section */}
      {/* <section id="offerings" className="py-16 px-8 bg-gradient-to-b from-black to-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2 
            {...fadeIn}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 inline-block text-transparent bg-clip-text"
          >
            What We Offer
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{title: "Learning Management System", desc: "Comprehensive platform for online education delivery", icon: "📚"},
              {title: "Student Analytics", desc: "Data-driven insights for better learning outcomes", icon: "📊"},
              {title: "Virtual Classrooms", desc: "Interactive online learning environments", icon: "💻"},
              {title: "Custom Solutions", desc: "Tailored educational software development", icon: "⚙️"},
              {title: "Mobile Learning", desc: "Education on the go with mobile applications", icon: "📱"},
              {title: "AI Integration", desc: "Smart learning features powered by AI", icon: "🤖"}].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-gray-600  transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-16 px-8 bg-gradient-to-b from-gray-800 to-black">
        <div className="container mx-auto px-6">
          <motion.h2 
            {...fadeIn}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 inline-block text-transparent bg-clip-text"
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
                className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 hover:border-gray-600 transition"
              >
                <p className="text-gray-300 italic mb-4">
                  "Xenith has transformed how we approach education technology..."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-gray-400">School Principal</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section id="team" className="py-16 bg-gradient-to-b from-black to-gray-800">
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
                <div className="w-32 h-32 mx-auto bg-gray-700 rounded-full mb-4"></div>
                <h3 className="font-semibold">Team Member</h3>
                <p className="text-gray-400">Position</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      
     
    </div>
  );
}
