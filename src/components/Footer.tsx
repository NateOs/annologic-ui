import Image from "next/image";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-teal-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
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
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">ig</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">x</span>
              </div>
            </div>
          </div>

          {/* Products Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Exchange</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Exchange</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Exchange</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Exchange</a></li>
            </ul>
          </div>

          {/* Products Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Exchange</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Exchange</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Exchange</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Exchange</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              <div>
                <p className="text-gray-300 leading-relaxed">
                  17 Ngong Road, Nairobi,
                  <br />
                  Kenya
                </p>
              </div>
              <div>
                <a href="tel:1-800-555-SUNRAYS" className="text-gray-300 hover:text-white transition-colors underline">
                  1–800–555–SUNRAYS
                </a>
                <br />
                <span className="text-gray-400">(1–800–555–3737)</span>
              </div>
              <div>
                <a href="mailto:hello@heiroglf.com" className="text-gray-300 hover:text-white transition-colors underline">
                  hello@heiroglf.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">© 2024 Heiroglf. All rights reserved.</p>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors underline">
              Privacy policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors underline">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}