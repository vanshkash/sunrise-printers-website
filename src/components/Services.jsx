import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "ID Cards",
    desc: "High-quality custom ID cards for schools, offices, and organizations with durable finishing.",
    image: "/services/idcard.avif",
    link: "/services/id-cards",
  },
  {

    title: "Flex Board",
    desc: "Durable flex board for indoor & outdoor advertising.",
    image: "/services/flex-boards.avif",
    link: "/services/flex-boards",
  },
  {
    title: "Visiting Cards",
    desc: "Professional visiting cards that create a lasting impression.",
    image: "/services/visiting-cards.avif",
    link: "/services/visiting-cards",
  },
  {
    title: "Sign Boards",
    desc: "Custom sign boards for shops, offices & branding.",
    image: "/services/sign-boards.avif",
    link: "/services/sign-boards",
  },
  {
    title: "Posters",
    desc: "High quality posters with vibrant colors and premium finish.",
    image: "/services/posters.avif",
    link: "/services/posters",
  },
  {
    title: "Bill Books",
    desc: "Customized bill books and invoice pads with clear layouts, numbering, and high-quality paper.",
    image: "/services/bill-books.avif",
    link: "/services/bill-books",
  },
  {
    title: "Glow Sign Boards",
    desc: "Attractive LED glow sign boards for shops and businesses with bright lighting and durable materials.",
    image: "/services/glow-sign-boards.avif",
    link: "/services/glow-sign-boards",
  },
  {
    title: "Calendars",
    desc: "Customized wall and desk calendars with premium printing, perfect for branding and promotions.",
    image: "/services/calendars.avif",
    link: "/services/calendars",
  },
  {
    title: "Labels & Stickers",
    desc: "Custom printed labels and stickers for packaging, branding, and product identification.",
    image: "/services/labels-stickers.avif",
    link: "/services/labels-stickers",
  },
  {
    title: "Pamphlets & Flyers",
    desc: "High-quality pamphlet and flyer printing for promotions, events, and business marketing.",
    image: "/services/pamphlets-flyers.avif",
    link: "/services/pamphlets-flyers",
  },
  {
    title: "School Stationery",
    desc: "Printed school stationery including notebooks, report cards, certificates, and ID cards.",
    image: "/services/school-stationery.avif",
    link: "/services/school-stationery",
  },
  {
    title: "Office Stationery",
    desc: "Professional office stationery printing such as letterheads, envelopes, files, and visiting cards.",
    image: "/services/office-stationery.avif",
    link: "/services/office-stationery",
  }





];

export default function Services() {
  return (
    <section className="relative py-24 text-white overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute -left-40 top-1/3 w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px]" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-14 px-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-orange-500">Services</span>
        </h2>
        <p className="mt-3 text-gray-400 text-base">
          Professional printing & branding solutions for your business.
        </p>
      </div>

      {/* Services Grid */}
      <div
        className="
    relative z-10
    max-w-7xl mx-auto px-4 sm:px-6
    grid gap-4
    grid-cols-2
    md:grid-cols-4
    lg:grid-cols-5
  "
      >

        {services.map((item, index) => {
          const CardWrapper = item.link ? Link : "div";

          return (
            <CardWrapper
              key={index}
              to={item.link}
              className="
        bg-white/5 border border-white/10
        rounded-md overflow-hidden
        hover:border-orange-500/40
        transition
        block
      "
            >
              {/* Image */}
              <div className="h-28 sm:h-32 lg:h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} Printing Service`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold leading-snug">
                  {item.title}
                </h3>

                <p className="mt-1 text-gray-400 text-sm leading-snug hidden md:block">
                  {item.desc}
                </p>

                {item.link && (
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-orange-400 hover:text-orange-300 transition">
                    View Details
                    <ArrowRight size={14} />
                  </span>
                )}
              </div>
            </CardWrapper>
          );
        })}

      </div>
    </section>
  );
}
