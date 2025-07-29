import vectorone from "../assets/vectorone.png";
import vectortwo from "../assets/vectortwo.png";
import vectorthree from "../assets/vectorthree.png";
import vectorfour from "../assets/vector.png";
import Image from "next/image";

export default function ServicesGrid() {
  const services = [
    {
      number: "01",
      title: "Trade Instantly",
      description:
        "Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.",
      icon: vectorone // Placeholder for the geometric icon
    },
    {
      number: "02",
      title: "Trade Instantly",
      description:
        "Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.",
      icon: vectortwo, // Placeholder for the geometric icon
    },
    {
      number: "03",
      title: "Trade Instantly",
      description:
        "Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.",
      icon: vectorthree, // Placeholder for the geometric icon
    },
    {
      number: "04",
      title: "Trade Instantly",
      description:
        "Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.",
      icon: vectorfour, // Placeholder for the geometric icon
    },
  ];

  return (
    <section className="bg-[#C9D7FF] py-20 px-6">
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
              We're bringing communities across the continent to the
              decentralized world economy.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6">
              {/* Left card with icon */}
              <div className="bg-gray-800 rounded-2xl p-8 flex-1 flex flex-col min-h-[300px] relative">
                <div className="text-gray-400 text-4xl font-mono absolute top-8 left-8">
                  {service.number}
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <Image
                    src={service.icon}
                    alt="logo"
                    width={100}
                    height={100}></Image>
                  <h3 className="text-white text-2xl font-semibold pt-8">
                    {service.title}
                  </h3>
                </div>
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