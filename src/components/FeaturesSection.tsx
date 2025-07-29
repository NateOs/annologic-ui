"use client";

import sealcheck from "../assets/SealCheck.png";
import logoblack from "../assets/logoblack.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra",
  ];

  // Animation variants for background blobs
  const blobVariants = {
    blob1: {
      x: [0, 40, -30, 20, 0],
      y: [0, -25, 35, -15, 0],
      scale: [1, 1.1, 0.9, 1.05, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    blob2: {
      x: [0, -50, 30, -20, 0],
      y: [0, 40, -30, 25, 0],
      scale: [1, 1.2, 0.8, 1.1, 1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    blob3: {
      x: [0, 25, -40, 35, -10, 0],
      y: [0, -35, 25, -20, 30, 0],
      scale: [1, 0.9, 1.15, 0.95, 1.1, 1],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    blob4: {
      x: [0, -35, 45, -25, 0],
      y: [0, 30, -40, 20, 0],
      scale: [1, 1.15, 0.85, 1.05, 1],
      transition: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    blob5: {
      x: [0, 55, -20, 30, -15, 0],
      y: [0, -45, -25, 35, 10, 0],
      scale: [1, 0.9, 1.25, 0.95, 1.1, 1],
      transition: {
        duration: 11,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        {/* Purple blob */}
        <motion.div
          className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgb(147, 51, 234) 0%, transparent 70%)",
            left: "10%",
            top: "15%",
          }}
          variants={blobVariants}
          animate="blob1"
        />

        {/* Blue blob */}
        <motion.div
          className="absolute w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] lg:w-[480px] lg:h-[480px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgb(59, 130, 246) 0%, transparent 70%)",
            right: "10%",
            top: "20%",
          }}
          variants={blobVariants}
          animate="blob2"
        />

        {/* Teal blob */}
        <motion.div
          className="absolute w-[375px] h-[375px] sm:w-[562px] sm:h-[562px] lg:w-[750px] lg:h-[750px] rounded-full opacity-35"
          style={{
            background: "radial-gradient(circle, rgb(13, 148, 136) 0%, transparent 70%)",
            left: "50%",
            bottom: "10%",
          }}
          variants={blobVariants}
          animate="blob3"
        />

        {/* Additional purple blob */}
        <motion.div
          className="absolute w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] lg:w-[320px] lg:h-[320px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgb(88, 28, 135) 0%, transparent 70%)",
            right: "5%",
            bottom: "25%",
          }}
          variants={blobVariants}
          animate="blob4"
        />

        {/* Additional blue blob */}
        <motion.div
          className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgb(30, 58, 138) 0%, transparent 70%)",
            left: "5%",
            bottom: "5%",
          }}
          variants={blobVariants}
          animate="blob5"
        />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px] sm:bg-[length:40px_40px] lg:bg-[length:50px_50px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white poppins-regular"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Accomplish
            <br />
            Anything in Crypto
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-300 max-w-xl lg:max-w-2xl pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            This is the space to introduce the Services section. Briefly
            describe the types of services offered and highlight any special
            benefits or features.
          </motion.p>
        </motion.div>

        {/* Features layout - Mobile first, then responsive */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-6xl">
          {/* Mobile & Tablet layout (default) */}
          <div className="flex flex-col items-center space-y-8 sm:space-y-10 lg:hidden">
            {/* Features list */}
            <div className="space-y-4 sm:space-y-6 w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0"
                  >
                    <Image
                      src={sealcheck}
                      alt="check"
                      width={20}
                      height={20}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </motion.div>
                  <span className="text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Pulsating logo */}
            <motion.div 
              className="flex justify-center pt-4 sm:pt-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ 
                  boxShadow: [
                    "0 0 15px rgba(255,255,255,0.3)",
                    "0 0 30px rgba(255,255,255,0.5)",
                    "0 0 15px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity },
                  hover: { duration: 0.3 }
                }}
              >
                {/* Radiating rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/30"
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0.6, 0.3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/20"
                  animate={{
                    scale: [1, 1.8, 2.5],
                    opacity: [0.5, 0.2, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.3
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/15"
                  animate={{
                    scale: [1, 2.2, 3],
                    opacity: [0.4, 0.1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.6
                  }}
                />
                
                {/* Pulsating border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4"
                  animate={{
                    borderColor: [
                      "rgba(255,255,255,0.8)",
                      "rgba(147,51,234,0.8)",
                      "rgba(59,130,246,0.8)",
                      "rgba(13,148,136,0.8)",
                      "rgba(255,255,255,0.8)"
                    ],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <Image
                  src={logoblack}
                  alt="logo"
                  width={80}
                  height={80}
                  className="w-20 h-20 relative z-10"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:flex flex-col items-center space-y-12">
            {/* Features grid with center logo */}
            <div className="relative max-w-6xl w-full">
              {/* Desktop layout - Center logo */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pt-[12.5rem]"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-32 h-32 bg-white rounded-full flex items-center justify-center relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(255,255,255,0.3)",
                      "0 0 40px rgba(255,255,255,0.5)",
                      "0 0 20px rgba(255,255,255,0.3)"
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity },
                    hover: { duration: 0.3 }
                  }}
                >
                  {/* Radiating rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    animate={{
                      scale: [1, 1.5, 2],
                      opacity: [0.6, 0.3, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/20"
                    animate={{
                      scale: [1, 1.8, 2.5],
                      opacity: [0.5, 0.2, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.3
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-white/15"
                    animate={{
                      scale: [1, 2.2, 3],
                      opacity: [0.4, 0.1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.6
                    }}
                  />
                  
                  {/* Pulsating border */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4"
                    animate={{
                      borderColor: [
                        "rgba(255,255,255,0.8)",
                        "rgba(147,51,234,0.8)",
                        "rgba(59,130,246,0.8)",
                        "rgba(13,148,136,0.8)",
                        "rgba(255,255,255,0.8)"
                      ],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <Image
                    src={logoblack}
                    alt="logo"
                    width={80}
                    height={80}
                    className="w-20 h-20 relative z-10"
                  />
                </motion.div>
              </motion.div>

              {/* Desktop layout - Left features */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-8 pt-8 mt-8">
                {features.slice(0, 3).map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-white"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={sealcheck}
                        alt="check"
                        width={20}
                        height={20}
                      />
                    </motion.div>
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Desktop layout - Right features */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-8 pt-8 mt-8">
                {features.slice(3, 6).map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-white"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                    whileHover={{ x: -10, scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={sealcheck}
                        alt="check"
                        width={20}
                        height={20}
                      />
                    </motion.div>
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}