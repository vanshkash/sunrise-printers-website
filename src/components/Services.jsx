import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
  title: "ID Cards",
  desc: "High-quality custom ID cards for schools, offices, and organizations with durable finishing.",
  image: "https://5.imimg.com/data5/RW/JW/MY-3819677/identity-cards-500x500.jpg",
  link: "/services/id-cards",
  },
  {
    
    title: "Flex Board",
    desc: "Durable flex board for indoor & outdoor advertising.",
    image: "https://cpimg.tistatic.com/8534048/b/1/ms-frame-flex-board.jpg",
  },
  {
    title: "Visiting Cards",
    desc: "Professional visiting cards that create a lasting impression.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xfauecWKaYJ2ieUbWBvN9cfnyYO6gKlCeQ&s",
  },
  {
    title: "Sign Boards",
    desc: "Custom sign boards for shops, offices & branding.",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/vinyl-glow-sign-board-8-x-4-feet-2221313944-4z80k661.jpg",
  },
  {
    title: "Posters",
    desc: "High quality posters with vibrant colors and premium finish.",
    image: "https://www.creativefabrica.com/wp-content/uploads/2022/01/06/Corporate-Business-Flyer-Poster-Template-Graphics-23050415-2-580x387.jpg",
  },
 {
  title: "Bill Books",
  desc: "Customized bill books and invoice pads with clear layouts, numbering, and high-quality paper.",
  image: "https://printingsolutions.in/wp-content/uploads/2022/07/Bill-Book.jpg",
},
  {
  title: "Glow Sign Boards",
  desc: "Attractive LED glow sign boards for shops and businesses with bright lighting and durable materials.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwKDRnme_IY-jl03KDQzFPb68wFpH4wqctw&s",
},
{
  title: "Calendars",
  desc: "Customized wall and desk calendars with premium printing, perfect for branding and promotions.",
  image: "https://printmagicprint.com/wp-content/uploads/2020/08/A3-Size-Poster-Calendar.jpg",
},
{
  title: "Labels & Stickers",
  desc: "Custom printed labels and stickers for packaging, branding, and product identification.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjaq9kGVRMD3E2Ds7hOc6Pjd5nEDVMk8UB1A&s",
},
{
  title: "Pamphlets & Flyers",
  desc: "High-quality pamphlet and flyer printing for promotions, events, and business marketing.",
  image: "https://www.shutterstock.com/image-vector/minimal-trifold-brochure-template-business-260nw-2316834127.jpg",
},
{
  title: "School Stationery",
  desc: "Printed school stationery including notebooks, report cards, certificates, and ID cards.",
  image: "https://c8.alamy.com/comp/2JDC9D3/top-view-of-notebooksschool-supplies-and-spiral-notepad-with-space-for-text-on-blued-table-back-to-school-concept-2JDC9D3.jpg",
},
{
  title: "Office Stationery",
  desc: "Professional office stationery printing such as letterheads, envelopes, files, and visiting cards.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxgY2P6SZys66HxQU4TCoGAuTJz_ZEfcThQ&s",
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
    md:grid-cols-3
    lg:grid-cols-4
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
      <div className="h-40 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
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
