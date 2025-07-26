export default function ServicesGrid() {
  const services = [
    {
      number: "01",
      title: "Trade Instantly",
      description: "Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.",
      icon: "📊" // Placeholder for the geometric icon
    },
    {
      number: "02", 
      title: "Trade Instantly",
      description: "Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.",
      icon: "💎" // Placeholder for the geometric icon
    },
    {
      number: "03",
      title: "Trade Instantly", 
      description: "Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.",
      icon: "🔗" // Placeholder for the geometric icon
    },
    {
      number: "04",
      title: "Trade Instantly",
      description: "Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.", 
      icon: "⚡" // Placeholder for the geometric icon
    }
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What You Can Do
              <br />
              with Heirogif
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 text-lg">
              We're bringing communities across the continent to the decentralized world economy.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex gap-6">
              {/* Left card with icon */}
              <div className="bg-gray-800 rounded-2xl p-8 flex-1 flex flex-col items-center justify-center text-center min-h-[300px]">
                <div className="text-gray-400 text-sm font-mono mb-4">
                  {service.number}
                </div>
                <div className="text-4xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-white text-xl font-semibold">
                  {service.title}
                </h3>
              </div>

              {/* Right card with description */}
              <div className="bg-gray-700 rounded-2xl p-8 flex-1 flex items-center min-h-[300px]">
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}