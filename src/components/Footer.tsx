'use client'
import Image from "next/image";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

export default function Footer() {
  // Animation variants for different blobs
  const blobVariants = {
    blob1: {
      x: [0, 50, -40, 30, 0],
      y: [0, -30, 40, 20, 0],
      scale: [1, 1.1, 0.9, 1.05, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    blob2: {
      x: [0, -60, 40, 0],
      y: [0, 50, -20, 0],
      scale: [1, 1.2, 0.8, 1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    blob3: {
      x: [0, -30, 50, -20, 40, 0],
      y: [0, -40, 30, 50, -10, 0],
      scale: [1, 1.1, 0.9, 1.15, 0.95, 1],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    blob4: {
      x: [0, -70, 0],
      y: [0, -60, 0],
      scale: [1, 1.3, 1],
      transition: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    blob5: {
      x: [0, 60, -30, 20, 0],
      y: [0, -50, -30, 40, 0],
      scale: [1, 0.8, 1.2, 0.9, 1],
      transition: {
        duration: 11,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className="relative bg-black text-white py-16 px-6 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        {/* Blue blob */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, rgb(30, 58, 138) 0%, transparent 70%)",
            left: "10%",
            top: "20%",
          }}
          variants={blobVariants}
          animate="blob1"
        />

        {/* Purple blob */}
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-35"
          style={{
            background: "radial-gradient(circle, rgb(88, 28, 135) 0%, transparent 70%)",
            right: "15%",
            top: "10%",
          }}
          variants={blobVariants}
          animate="blob2"
        />

        {/* Teal blob */}
        <motion.div
          className="absolute w-72 h-72 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgb(13, 148, 136) 0%, transparent 70%)",
            left: "60%",
            bottom: "20%",
          }}
          variants={blobVariants}
          animate="blob3"
        />

        {/* Additional smaller blobs */}
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgb(59, 130, 246) 0%, transparent 70%)",
            right: "5%",
            bottom: "30%",
          }}
          variants={blobVariants}
          animate="blob4"
        />

        <motion.div
          className="absolute w-56 h-56 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgb(147, 51, 234) 0%, transparent 70%)",
            left: "5%",
            bottom: "10%",
          }}
          variants={blobVariants}
          animate="blob5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Company Info - Takes 2 columns on large screens */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Image src={logo} alt="Logo" width={40} height={40} className="mr-3" />
              <span className="text-2xl font-bold">HEIROGLF</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Redefining Crypto
              <br />
              Finance for Africa
            </h2>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <motion.div 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: "rgb(75, 85, 99)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-bold">in</span>
              </motion.div>
              <motion.div 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: "rgb(75, 85, 99)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-bold">ig</span>
              </motion.div>
              <motion.div 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: "rgb(75, 85, 99)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-bold">x</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Products Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-4">
              <li><motion.a href="#" className="text-gray-300" whileHover={{ color: "#ffffff", x: 5 }}>Exchange</motion.a></li>
              <li><motion.a href="#" className="text-gray-300" whileHover={{ color: "#ffffff", x: 5 }}>Exchange</motion.a></li>
              <li><motion.a href="#" className="text-gray-300" whileHover={{ color: "#ffffff", x: 5 }}>Exchange</motion.a></li>
              <li><motion.a href="#" className="text-gray-300" whileHover={{ color: "#ffffff", x: 5 }}>Exchange</motion.a></li>
            </ul>
          </motion.div>

          {/* Products Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-4">
              <li><motion.a href="#" className="text-gray-300" whileHover={{ color: "#ffffff", x: 5 }}>Exchange</motion.a></li>
              <li><motion.a href="#" className="text-gray-300" whileHover={{ color: "#ffffff", x: 5 }}>Exchange</motion.a></li>
              <li><motion.a href="#" className="text-gray-300" whileHover={{ color: "#ffffff", x: 5 }}>Exchange</motion.a></li>
              <li><motion.a href="#" className="text-gray-300" whileHover={{ color: "#ffffff", x: 5 }}>Exchange</motion.a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <p className="text-gray-300 leading-relaxed">
                  17 Ngong Road, Nairobi,
                  <br />
                  Kenya
                </p>
              </div>
              <div>
                <motion.a 
                  href="tel:1-800-555-SUNRAYS" 
                  className="text-gray-300 underline"
                  whileHover={{ color: "#ffffff" }}
                >
                  1–800–555–SUNRAYS
                </motion.a>
                <br />
                <span className="text-gray-400">(1–800–555–3737)</span>
              </div>
              <div>
                <motion.a 
                  href="mailto:hello@heiroglf.com" 
                  className="text-gray-300 underline"
                  whileHover={{ color: "#ffffff" }}
                >
                  hello@heiroglf.com
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">© 2024 Heiroglf. All rights reserved.</p>
          </div>
          <div className="flex space-x-8">
            <motion.a 
              href="#" 
              className="text-gray-300 underline"
              whileHover={{ color: "#ffffff" }}
            >
              Privacy policy
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-300 underline"
              whileHover={{ color: "#ffffff" }}
            >
              Terms of service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}