import React from "react";
import Navbar from "../_components/Navbar";

function page() {
  return (
    <div className=" bg-black text-white">
      <div className="pt-28 pb-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-black to-gray-950">
        <h1 className="text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-blue-400 to-blue-900 inline-block text-transparent bg-clip-text">
          Our Portfolio
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "EduTech Learning Platform",
              description: "A comprehensive LMS for a leading coaching institute",
              image:
                "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=500&q=80",
            },
            {
              title: "TutorConnect App",
              description: "Mobile app connecting students with tutors",
              image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
            },
            {
              title: "SmartClass Portal",
              description: "Digital classroom management system",
              image:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80",
            },
            {
              title: "SmartClass Portal",
              description: "Digital classroom management system",
              image:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:shadow-lg hover:border-blue-500 transition-all"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">View Project</span>
                </div>
              </div>
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white hover:text-blue-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
