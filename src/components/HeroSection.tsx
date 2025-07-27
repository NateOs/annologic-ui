'use client';
export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated circular gradients */}
      <div className="absolute inset-0">
        {/* Purple circle */}
        <div className="absolute w-96 h-96 rounded-full opacity-30 animate-pulse"
             style={{
               background: 'radial-gradient(circle, rgb(88, 28, 135) 0%, transparent 70%)',
               left: '10%',
               top: '20%',
               animation: 'float1 6s ease-in-out infinite'
             }}>
        </div>
        
        {/* Blue circle */}
        <div className="absolute w-80 h-80 rounded-full opacity-40 animate-pulse"
             style={{
               background: 'radial-gradient(circle, rgb(30, 58, 138) 0%, transparent 70%)',
               left: '15%',
               top: '50%',
               animation: 'float2 8s ease-in-out infinite'
             }}>
        </div>
        
        {/* Teal circle */}
        <div className="absolute w-72 h-72 rounded-full opacity-35 animate-pulse"
             style={{
               background: 'radial-gradient(circle, rgb(13, 148, 136) 0%, transparent 70%)',
               left: '5%',
               top: '70%',
               animation: 'float3 7s ease-in-out infinite'
             }}>
        </div>
      </div>

      {/* Background pattern/grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.9); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, -30px) scale(1.2); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -40px) scale(0.8); }
          75% { transform: translate(-30px, 20px) scale(1.1); }
        }
      `}</style>

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