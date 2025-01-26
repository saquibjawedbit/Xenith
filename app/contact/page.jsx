import { MessageSquare, Users } from 'lucide-react';
import React from 'react';

function page() {
  return (
    <div className=" bg-black text-white">
      <div className="pt-28 pb-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-black to-gray-950">
        <h1 className="text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-blue-400 to-blue-900 inline-block text-transparent bg-clip-text">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-white">
              Get in Touch
            </h2>
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
          <form className="space-y-6">
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
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:outline-none"
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
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:outline-none"
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
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-900  hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
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
