import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const leftVariant = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: "easeOut" },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.6,
        ease: "easeOut",
      },
    },
  };


  return (
    <section className="relative pt-24 min-h-screen overflow-hidden flex items-center">
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pb-6">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <motion.h1
            variants={leftVariant}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Creative Printing & <br />
            <span className="text-orange-500">Marketing Solutions</span>
          </motion.h1>

          <p className="mt-4 text-gray-400 text-lg">
            Hoardings, Flex Banners, Business Cards, Glow Sign Boards &
            complete branding solutions for your business.
          </p>

          <motion.div variants={leftVariant}
            initial="hidden"
            animate="visible" className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://wa.me/919568828814"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-700 transition"
            >
              Get a Quote <ArrowRight size={18} />
            </a>

            <Link
              to="/services"
              className="border border-orange-500 text-orange-400 px-6 py-3 rounded-full hover:bg-orange-500/10 transition"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <div className="mt-10 flex gap-10 text-sm text-gray-400">
            <div>
              <h3 className="text-xl font-bold text-orange-500">10+</h3>
              Years Experience
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-500">5000+</h3>
              Happy Clients
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-500">100%</h3>
              Quality Print
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE AREA ================= */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="relative"
        >

          {/* MAIN IMAGE  */}
          <img
            src="/images/SRHome.jpg"
            alt="Printing Services"
            className="rounded-2xl shadow-xl relative z-10"
          />

          {/* ===== FLOATING IMAGES AROUND MAIN IMAGE ===== */}
          {/* Visiting Card */}
          <img
            src="/images/HeroFloatingImages/VisitingCard.webp"
            alt="Visiting Card"
            className="absolute -top-8 -left-8 w-28 rounded-md shadow-lg
             float-slow z-30 hidden md:block"
          />
          {/* Bill Book */}
          <img
            src="/images/HeroFloatingImages/Billbook.png"
            alt="Bill Book Printing"
            className="absolute -top-6 -right-6 w-44 rounded-md shadow-lg
                       float-slow z-30 hidden md:block"
          />

          {/* ID Card */}
          <img
            src="/images/HeroFloatingImages/IdCard.png"
            alt="Id Card Printing"
            className="absolute top-1/2 -left-12 w-32 rounded-md shadow-lg
                       float-medium z-30 hidden md:block"
          />

          {/* Signboard */}
          <img
            src="/images/HeroFloatingImages/LedSignBoard.png"
            alt="Signboard Printing"
            className="absolute -bottom-10 right-12 w-36 rounded-md shadow-lg
                       float-fast z-30 hidden md:block"
          />

          <div className="absolute -bottom-6 -left-6 z-20
                          bg-gray-900/80 backdrop-blur-xl
                          border border-white/10 p-4
                          rounded-xl shadow-lg">
            <p className="text-sm font-semibold text-white">
              ⚡ Fast Delivery
            </p>
            <p className="text-xs text-gray-400">
              Premium Quality Printing
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
