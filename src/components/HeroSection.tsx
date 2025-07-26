export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-600 relative overflow-hidden">
      {/* Background pattern/grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 max-w-4xl leading-tight">
          Redefining Crypto
          <br />
          Finance for Africa
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
          Buy, sell, and grow your digital assets with confidence without in
          Africa's homegrown crypto exchange – secure, fast, and built for you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Create Your Account Now
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-colors flex items-center gap-2">
            Explore Features
            <span>→</span>
          </button>
        </div>

        {/* Partner logos */}
        <div className="flex items-center justify-center space-x-12 opacity-60">
          <div className="text-white font-bold">OpenAI</div>
          <div className="text-white font-bold">TheVerse</div>
          <div className="text-white font-bold">Figma</div>
          <div className="text-white font-bold">stripe</div>
          <div className="text-white font-bold">trivago</div>
        </div>
      </div>
    </section>
  );
}