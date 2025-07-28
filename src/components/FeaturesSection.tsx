"use client";

import sealcheck from "../assets/SealCheck.png";
import logoblack from "../assets/logoblack.png";
import Image from "next/image";
export default function FeaturesSection() {
  const features = [
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Accomplish
            <br />
            Anything in Crypto
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            This is the space to introduce the Services section. Briefly
            describe the types of services offered and highlight any special
            benefits or features.
          </p>
        </div>

        {/* Features grid with center logo */}
        <div className="relative max-w-6xl w-full">
          {/* Center logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
              <Image
                src={logoblack}
                alt="logo"
                width={80}
                height={80}
                className="w-20 h-20"></Image>
            </div>
          </div>

          {/* Left features */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-8">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-white">
                <Image
                  src={sealcheck}
                  alt="logo"
                  width={20}
                  height={20}></Image>{" "}
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Right features */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-8">
            {features.slice(3, 6).map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-white">
                <Image
                  src={sealcheck}
                  alt="logo"
                  width={20}
                  height={20}></Image>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
