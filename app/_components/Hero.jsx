import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Menu, X, Code, Rocket, Users, MessageSquare, ChevronRight, Github, Twitter, Linkedin, BookOpen, DollarSign, HelpCircle } from 'lucide-react';

function Hero() {
    return (
        <div>
            <section className="pt-24 pb-16 px-8 bg-gradient-to-b from-gray-900  to-black">
                <motion.div
                    className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-10">
                            DIGITALIZE <span className='text-blue-400'>GROW</span> <span className='text-blue-600'>LEAD</span>
                        </h1>
                        <p className="text-gray-300 mb-8">
                        We create cutting-edge applications and websites that transform the way educators connect with their students.
                        </p>
                        {/* <button className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-500 transition-all duration-300 flex items-center gap-2 mx-auto md:mx-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          Book a Call
        </button> */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href={'/contact'} className="bg-gradient-to-r from-blue-600 to-blue-900 flex gap-2 items-center justify-center hover:bg-blue-700 px-8 py-3 rounded-full transition-all transform hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
                                Book a Call
                            </Link>
                            <Link href={'/portfolio'} className="border border-blue-600 hover:bg-blue-600/20 px-8 py-3 rounded-full transition-all transform hover:scale-105">
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 mt-16">
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



            <section className="py-20 px-4 ">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Xenith ? </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Rocket className="w-8 h-8 text-blue-500" />,
                                title: "Custom Solutions",
                                description: "Tailored applications designed specifically for educational needs"
                            },
                            {
                                icon: <Users className="w-8 h-8 text-blue-500" />,
                                title: "Expert Team",
                                description: "Experienced developers dedicated to your success"
                            },
                            {
                                icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
                                title: "24/7 Support",
                                description: "Round-the-clock assistance for all your technical needs"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-blue-500 transition-all">
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-950">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Educational Platform?</h2>
                    <p className="text-gray-400 mb-8">
                        Let's discuss how we can help you create an impactful digital presence.
                    </p>
                    <Link  href={'/contact'} className="group bg-gradient-to-r from-blue-600 to-blue-900 hover:bg-blue-700 px-8 py-3 rounded-lg transition-all transform hover:scale-105 flex items-center mx-auto inline-flex">
                        Schedule a Free Consultation
                        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Hero