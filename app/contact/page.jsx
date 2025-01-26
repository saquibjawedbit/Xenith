"use client"
import { MessageSquare, Users } from "lucide-react";
import React, { useState } from "react";

function page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message Sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className=" bg-black text-white">
      <div className="pt-28 pb-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-black to-gray-950">
        <h1 className="text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-blue-400 to-blue-900 inline-block text-transparent bg-clip-text">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-white">Get in Touch</h2>
            <p className="text-gray-400 leading-relaxed">
              Ready to transform your educational platform? We're here to help
              you create an impactful digital presence.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <MessageSquare className="w-5 h-5 text-blue-500 mr-3" />
                info@xenith.in
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 text-blue-500 mr-3" />
                +91 9229756237
              </div>
            </div>
          </div>
          {/* Form Section */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-900 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
