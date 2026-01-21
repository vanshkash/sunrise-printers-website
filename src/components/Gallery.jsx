import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryData = [
  { id: 1, category: "Flexes", image: "https://img500.exportersindia.com/product_images/bc-500/dir_160/4772934/flex-board-printing-services-1526981368-3889866.jpeg" },
  { id: 2, category: "Cards", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jnqqowr6mbxYm7hTD9GhBrnyP08Y72FmAA&s" },
  { id: 3, category: "Boards", image: "https://img500.exportersindia.com/product_images/bc-500/dir_160/4772934/flex-board-printing-services-1526981368-3889866.jpeg" },
  { id: 4, category: "Flexes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUp-D4Axjsd19-a8uEi9sR_O6HJ02EDL1Yg&s" },
  { id: 5, category: "Cards", image: "https://cdn.pixabay.com/photo/2024/09/29/11/27/vertical-billboard-9083310_1280.jpg" },
  { id: 6, category: "Boards", image: "https://img500.exportersindia.com/product_images/bc-500/dir_160/4772934/flex-board-printing-services-1526981368-3889866.jpeg" },
  { id: 7, category: "Flexes", image: "https://img500.exportersindia.com/product_images/bc-500/dir_160/4772934/flex-board-printing-services-1526981368-3889866.jpeg" },
  { id: 8, category: "Cards", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jnqqowr6mbxYm7hTD9GhBrnyP08Y72FmAA&s" },
  { id: 9, category: "Boards", image: "https://img500.exportersindia.com/product_images/bc-500/dir_160/4772934/flex-board-printing-services-1526981368-3889866.jpeg" },
  { id: 10, category: "Flexes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUp-D4Axjsd19-a8uEi9sR_O6HJ02EDL1Yg&s" },
  { id: 11, category: "Cards", image: "https://cdn.pixabay.com/photo/2024/09/29/11/27/vertical-billboard-9083310_1280.jpg" },
  { id: 12, category: "Boards", image: "https://img500.exportersindia.com/product_images/bc-500/dir_160/4772934/flex-board-printing-services-1526981368-3889866.jpeg" },
  { id: 13, category: "Cards", image: "https://cdn.pixabay.com/photo/2024/09/29/11/27/vertical-billboard-9083310_1280.jpg" },
  { id: 14, category: "Boards", image: "https://img500.exportersindia.com/product_images/bc-500/dir_160/4772934/flex-board-printing-services-1526981368-3889866.jpeg" },

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
              alt=""
              loading="lazy"
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
            alt=""
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
