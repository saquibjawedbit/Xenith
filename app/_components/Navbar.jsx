"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 shadow-sm backdrop-blur-sm transition-all duration-300 bg-black text-white ${scrolled ? "bg-gray-950 bg-opacity-90" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-3xl ml-2 font-extrabold bg-gradient-to-r from-white to-blue-600 inline-block text-transparent bg-clip-text">
                    Xenith
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">

                    <a href="/" className="relative font-bold group">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="/" className="relative font-bold group">
                        Why Us
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="/services" className="relative font-bold group">
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="/portfolio" className="relative font-bold group">
                        Portfolios
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="/faq" className="relative font-bold group">
                        FAQ
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
                <div className="mr-4">
                    <a
                        href="/contact"
                        className="relative bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-3xl font-bold text-white transition-all transform hover:scale-105 overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 opacity-50 blur-lg animate-pulse"></span>
                        <span className="relative">Contact Us</span>
                    </a>
                </div>
                

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-950 bg-opacity-95 text-white absolute top-16 left-0 w-full py-4 px-6">
                    <ul className="space-y-4 text-center">
                        <li>
                            <a
                                href="/"
                                className="block hover:text-blue-600"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#why-us"
                                className="block hover:text-blue-600"
                                onClick={() => setMenuOpen(false)}
                            >
                                Why Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="/services"
                                className="block hover:text-blue-600"
                                onClick={() => setMenuOpen(false)}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/portfolio"
                                className="block hover:text-blue-600"
                                onClick={() => setMenuOpen(false)}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>

                            <a
                                href="/contact"
                                className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all transform hover:scale-105 mx-auto"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            )}
            <hr className="border-gray-700"/>
        </nav>
    );
}

export default Navbar;
