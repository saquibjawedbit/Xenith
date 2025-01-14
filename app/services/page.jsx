import { ChevronRight } from 'lucide-react';
import React from 'react';

import Navbar from '../_components/Navbar';

function page() {
  return (
    <div className=" bg-black text-white">
      <div className="pt-28 pb-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-black to-gray-950">
        <h1 className="text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-blue-400 to-blue-900 inline-block text-transparent bg-clip-text">
          Our Services
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "App Development",
              description: "Custom mobile and web applications tailored for educational institutions.",
              features: ["Student Management", "Course Creation", "Progress Tracking", "Interactive Learning"],
            },
            {
              title: "Website Development",
              description: "Responsive, SEO-friendly websites for coaching centers and educators.",
              features: ["Modern Design", "Content Management", "SEO Optimization", "Analytics Integration"],
            },
            {
              title: "Marketing Tools",
              description: "Digital marketing solutions to grow your educational business.",
              features: ["Email Marketing", "Lead Generation", "Social Media Integration", "Analytics Dashboard"],
            },
            {
              title: "Learning Management",
              description: "Comprehensive LMS solutions for online education.",
              features: ["Course Management", "Student Engagement", "Assessment Tools", "Progress Reports"],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-900/70 backdrop-blur-lg border border-gray-800 hover:shadow-lg hover:shadow-blue-500/20 transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <ChevronRight className="w-5 h-5 text-blue-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
