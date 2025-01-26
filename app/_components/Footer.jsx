import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-400 py-12 px-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-900 inline-block text-transparent bg-clip-text">
                Xenith
              </h3>
              <p>Bridging Tech with Education Sector</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#why-us" className="hover:text-white">Why Us</a></li>
                <li><a href="#offerings" className="hover:text-white">Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Contact</h4>
              <ul className="space-y-2">
                <li>Email: info@xenith.com</li>
                <li>Phone: +91 9229756237</li>
                <li>Address: BIT Mesra , Ranchi</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-600">Follow Us</h4>
              <div className="flex gap-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer