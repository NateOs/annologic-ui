"use client";
import openai from "../assets/openai.png";
import theverge from "../assets/the_verge_logo.svg.png";
import figma from "../assets/figma.png";
import stripe from "../assets/stripe_logo.svg.png";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";

export default function HeroSection() {
  // Animation variants for different blobs
  const blobVariants = {
    purple: {
      x: [0, 30, -20, 40, 0],
      y: [0, -20, 30, -10, 0],
      scale: [1, 1.1, 0.9, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: easeInOut // use the imported easeInOut function
      }
    },
    blue: {
      x: [0, -40, 30, -20, 0],
      y: [0, -30, 20, 40, 0],
      scale: [1, 1.2, 0.8, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: easeInOut// cubic-bezier for easeInOut
      }
    },
    teal: {
      x: [0, 20, -40, 30, -10, 0],
      y: [0, -40, 20, -30, 35, 0],
      scale: [1, 0.8, 1.1, 0.9, 1.2, 1],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: easeInOut// cubic-bezier for easeInOut
      }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated circular gradients */}
      <div className="absolute inset-0">
        {/* Purple circle */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-90"
          style={{
            background:
              "radial-gradient(circle, rgb(88, 28, 135) 0%, transparent 70%)",
            left: "10%",
            top: "20%",
          }}
          variants={blobVariants}
          animate="purple"
        />

        {/* Blue circle */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-80"
          style={{
            background:
              "radial-gradient(circle, rgb(30, 58, 138) 0%, transparent 70%)",
            left: "15%",
            top: "50%",
          }}
          variants={blobVariants}
          animate="blue"
        />

        {/* Teal circle */}
        <motion.div
          className="absolute w-72 h-72 rounded-full opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgb(13, 148, 136) 0%, transparent 70%)",
            left: "5%",
            top: "70%",
          }}
          variants={blobVariants}
          animate="teal"
        />
      </div>

      {/* Background pattern/grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Main heading */}
        <motion.h1 
          className="text-5xl md:text-7xl text-white mb-8 max-w-4xl poppins-regular"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Redefining Crypto
          <br />
          Finance for Africa
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Buy, sell, and grow your digital assets with confidence without in
          Africa's homegrown crypto exchange – secure, fast, and built for you.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            className="bg-white text-black px-8 py-3 rounded-md font-medium transition-colors"
            whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
            whileTap={{ scale: 0.95 }}
          >
            Create Your Account Now
          </motion.button>
          <motion.button 
            className="border border-gray-600 text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Features
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Partner logos slider */}
        <motion.div 
          className="relative w-full max-w-6xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="flex items-center space-x-16"
            animate={{ x: [0, -50 + "%"] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {/* First set of logos */}
            <div className="flex items-center space-x-16 flex-shrink-0">
              <motion.div 
                className="w-24 h-12 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={openai}
                  alt="OPENAI"
                  width={96}
                  height={48}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <motion.div 
                className="w-24 h-12 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={theverge}
                  alt="THEVERGE"
                  width={96}
                  height={48}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <motion.div 
                className="w-24 h-12 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={figma}
                  alt="FIGMA"
                  width={96}
                  height={48}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <motion.div 
                className="w-24 h-12 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={stripe}
                  alt="STRIPE"
                  width={96}
                  height={48}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-16 flex-shrink-0">
              <motion.div 
                className="w-24 h-12 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={openai}
                  alt="OPENAI"
                  width={96}
                  height={48}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <motion.div 
                className="w-24 h-12 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={theverge}
                  alt="THEVERGE"
                  width={96}
                  height={48}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <motion.div 
                className="w-24 h-12 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={figma}
                  alt="FIGMA"
                  width={96}
                  height={48}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <motion.div 
                className="w-24 h-12 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={stripe}
                  alt="STRIPE"
                  width={96}
                  height={48}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}