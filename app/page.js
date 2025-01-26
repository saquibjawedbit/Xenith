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
     <Hero/> 
    </div>
  );
}
