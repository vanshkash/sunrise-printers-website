import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryData = [
  { id: 1, category: "Boards", image: "/images/gallery/agri.webp" },
  { id: 2, category: "Cards", image: "/images/SRHome.avif" },
  { id: 3, category: "Boards", image: "/images/gallery/gia.webp" },
  { id: 4, category: "Flexes", image: "/images/gallery/durga.webp" },
  { id: 5, category: "Cards", image: "/images/gallery/gd.webp" },
  { id: 6, category: "Boards", image: "/images/gallery/hero.webp" },
  { id: 7, category: "Flexes", image: "/images/gallery/hmschool.webp" },
  { id: 8, category: "Boards", image: "/images/gallery/iti.webp" },
  { id: 9, category: "Boards", image: "/images/gallery/jpschool.webp" },
  { id: 10, category: "Flexes", image: "/images/gallery/jpsr.webp" },
  { id: 11, category: "Cards", image: "/images/gallery/sps.webp" },
  { id: 12, category: "Boards", image: "/images/gallery/sr.webp" },
  { id: 13, category: "Boards", image: "/images/gallery/str.webp" },
  { id: 14, category: "Flexes", image: "/images/gallery/svg.webp" },
  { id: 15, category: "Flexes", image: "/images/gallery/vidhyapeth.webp" },
  { id: 16, category: "Boards", image: "/images/gallery/sss.webp" },
  { id: 17, category: "Flexes", image: "/images/gallery/rtw.webp" },
  { id: 18, category: "Flexes", image: "/images/gallery/logo.webp" },
  { id: 19, category: "Boards", image: "/images/gallery/everest.webp" },
  { id: 20, category: "Flexes", image: "/images/gallery/vidya.webp" },
  { id: 21, category: "Flexes", image: "/images/gallery/medi.webp" },
  { id: 22, category: "Flexes", image: "/images/gallery/letter.webp" },
  { id: 23, category: "Boards", image: "/images/gallery/globe.webp" },
  { id: 24, category: "Flexes", image: "/images/gallery/balgyan.webp" },
  { id: 25, category: "Flexes", image: "/images/gallery/durga.webp" },


];

const categories = ["All", "Flexes", "Cards", "Boards"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const close = () => setActiveIndex(null);

  const prev = () => {
    setActiveIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));
  };

  const next = () => {
    setActiveIndex((i) => (i === filtered.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, filtered.length]);

  return (
    <section className="py-20 px-4 md:px-10">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
        Our <span className="text-orange-500">Gallery</span>
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 text-sm border transition ${
              selectedCategory === cat
                ? "bg-orange-500 text-white border-orange-500"
                : "border-white/20 text-white/70 hover:text-white hover:border-orange-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ===== GALLERY GRID ===== */}
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {filtered.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className="cursor-pointer overflow-hidden bg-black/20"
          >
            <img
              src={item.image}
              alt={`${item.category} Printing Work`}
              loading="lazy"
              decoding="async"
              className="w-full h-36 object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>

      {/* ===== FULLSCREEN SLIDER ===== */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center"
          onClick={close}
        >

          <button
            onClick={close}
            className="fixed top-[90px] right-6 md:top-20 z-[120]
                       bg-white/20 hover:bg-white/40
                       text-white p-3 rounded-full backdrop-blur"
          >
            <X size={24} />
          </button>

          {/* ◀ PREV */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 md:left-10 z-[120]
                       bg-white/20 hover:bg-white/40
                       text-white p-3 rounded-full backdrop-blur"
          >
            <ChevronLeft size={28} />
          </button>

          {/* IMAGE */}
          <img
            src={filtered[activeIndex].image}
            alt="Printing Work"
            onClick={(e) => e.stopPropagation()}
            className="relative z-[110] max-h-[85vh] max-w-[90vw] object-contain"
          />

          {/* ▶ NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 md:right-10 z-[120]
                       bg-white/20 hover:bg-white/40
                       text-white p-3 rounded-full backdrop-blur"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
