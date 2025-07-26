export default function FeaturesSection() {
  const features = [
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra", 
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra",
    "Viverra ipsum pellentesque nulla sed viverra"
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
            This is the space to introduce the Services section. Briefly describe the
            types of services offered and highlight any special benefits or features.
          </p>
        </div>

        {/* Features grid with center logo */}
        <div className="relative max-w-6xl w-full">
          {/* Center logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Left features */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-8">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 text-white">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Right features */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-8">
            {features.slice(3, 6).map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 text-white">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Connecting lines */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 400">
              {/* Left side lines */}
              <line x1="200" y1="150" x2="350" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="200" y1="200" x2="350" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="200" y1="250" x2="350" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              
              {/* Right side lines */}
              <line x1="450" y1="200" x2="600" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="450" y1="200" x2="600" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="450" y1="200" x2="600" y2="250" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}