import { BadgeCheck, Truck, Printer, ThumbsUp } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 overflow-hidden ">
      
      {/* subtle background glow (same as services) */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" /> */}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Choose <span className="text-orange-500">Us</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Premium printing & branding solutions trusted by businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <BadgeCheck size={36} />,
              title: "Premium Quality",
              desc: "High-grade materials & vibrant prints that last longer."
            },
            {
              icon: <Truck size={36} />,
              title: "Fast Delivery",
              desc: "On-time delivery for hoardings, flex & banners."
            },
            {
              icon: <Printer size={36} />,
              title: "Latest Technology",
              desc: "Advanced machines for sharp colors & finishing."
            },
            {
              icon: <ThumbsUp size={36} />,
              title: "Trusted Brand",
              desc: "Hundreds of satisfied clients & repeat customers."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="
                bg-gray-900/70
                backdrop-blur-xl
                border border-white/10
                rounded-2xl
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-orange-500/30
              "
            >
              <div className="text-orange-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
