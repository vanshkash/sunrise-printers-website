import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Posters Printing",
    desc: "High quality posters with vibrant colors and premium paper finish.",
    image: "https://img.freepik.com/free-vector/gold-foil-business-card-template_23-2148874380.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Flex Banners",
    desc: "Durable flex banners for indoor & outdoor advertising.",
    image: "https://img.freepik.com/free-vector/gold-foil-business-card-template_23-2148874380.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Visiting Cards",
    desc: "Professional visiting cards that create a lasting impression.",
    image: "https://img.freepik.com/free-vector/gold-foil-business-card-template_23-2148874380.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Sign Boards",
    desc: "Custom sign boards for shops, offices & branding.",
    image: "https://img.freepik.com/free-vector/gold-foil-business-card-template_23-2148874380.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Glowing Sign Boards",
    desc: "LED glowing boards for maximum night visibility.",
    image: "https://img.freepik.com/free-vector/gold-foil-business-card-template_23-2148874380.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Wedding Cards",
    desc: "Elegant wedding invitation cards with custom designs.",
    image: "https://img.freepik.com/free-vector/gold-foil-business-card-template_23-2148874380.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

export default function Products() {
  return (
    <section className="relative py-28  text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/3 left-[-200px] w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-[-200px] w-[500px] h-[500px] bg-orange-500/10 blur-[140px]" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-orange-500">Services</span>
          </h2>
        <p className="mt-4 text-gray-400 text-lg">
            End-to-end printing & branding services designed to grow your business.
          </p>
      </div>

      {/* Products Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/40 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="h-52 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                {item.desc}
              </p>

              <button className="inline-flex items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition">
                Request Quote
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
              <div className="absolute inset-0 bg-orange-500/5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
