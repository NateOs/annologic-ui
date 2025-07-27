import Image from "next/image";
import logo from "../assets/logo.png"; 
import translate from "../assets/translate.png";
import globesimple from "../assets/GlobeSimple.png";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-transparent relative z-10">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={40} height={40} className="mr-2" />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors">
          Home
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors">
          About us
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors">
          Company
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors">
          Resources
        </a>
      </nav>

      {/* Right side actions */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2">
          <span className="text-white text-sm">
            <Image
              src={translate}
              alt="languages"
              width={40}
              height={40}
              className="mr-2"
            />
          </span>
          <span className="text-white text-sm">
            <Image
              src={globesimple}
              alt="languages"
              width={40}
              height={40}
              className="mr-2"
            />
          </span>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  );
}
