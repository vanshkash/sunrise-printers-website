export default function PastWorks() {
  const works = [
    {
      img: "/images/Pastworks/jk.webp",
      name: "JK Tyres",
    },
    {
      img: "/images/Pastworks/tata.webp",
      name: "Tata Motors",
    },
    {
      img: "/images/Pastworks/dps.avif",
      name: "DPS Hapur",
    },
    {
      img: "/images/Pastworks/ambuja.avif",
      name: "ACC Cement",
    },
    {
      img: "/images/Pastworks/dewan.webp",
      name: "Dewan Public School",
    },
    {
      img: "/images/Pastworks/gd.webp",
      name: "GD Goenka School",
    },
    {
      img: "/images/Pastworks/kfc.webp",
      name: "KFC",
    },
    {
      img: "/images/Pastworks/ramah.webp",
      name: "Rama Hospital",
    },

  ];

  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Trusted <span className="text-orange-500">By</span>
        </h2>
        <p className="mt-3 text-gray-400">
          Companies and brands that rely on our printing & branding expertise
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div className="marquee-track flex gap-4 w-max">
          {[...works, ...works].map((work, index) => (
            <div
              key={index}
              className="
                min-w-[220px] sm:min-w-[260px]
                h-[190px] rounded-xl overflow-hidden
                bg-white/5 backdrop-blur
                border border-white/10
                flex flex-col items-center justify-center
              "
            >
              <img
                src={work.img}
                alt={`${work.name} Branding Work`}
                loading="lazy"
                decoding="async"
                className="w-full h-[140px] object-cover"
              />
              <p className="mt-2 text-sm text-gray-300 font-medium">
                {work.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .marquee-track {
          animation: scroll 18s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (hover: hover) {
          .marquee-track:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
