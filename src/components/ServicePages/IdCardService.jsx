import { ShieldCheck, Truck } from "lucide-react";

export default function IdCardService() {

  const idCardTypes = [
    { title: "Paper ID Cards", image: "https://printingstudio.in/cdn/shop/files/9907680_4298503.jpg?v=1709815861&width=1946" },
    { title: "PVC ID Cards", image: "https://cms.cloudinary.vpsvc.com/image/upload/if_ar_gt_1.1/c_scale,t_pdpHeroGallery_Gallery/if_else/c_scale,w_816/if_end/f_auto,q_auto:best,dpr_auto/India%20LOB/Unity%20PDP/ID%20Cards/IN_ID-cardsl_Hero-image_03" },
    { title: "Student ID Cards", image: "https://images.jdmagicbox.com/quickquotes/images_main/identity-card-for-school-2229595515-oc4gus8j.jpg" },
    { title: "Employee ID Cards", image: "https://phoenixprint.in/wp-content/uploads/2023/10/id-2-1.jpg" },
    { title: "Event ID Cards", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SRF9ieNdVnlUivQz01L76UaC92RSyg877A&s" },
    { title: "Visitor ID Cards", image: "https://images.jdmagicbox.com/quickquotes/images_main/pvc-identify-card-blr3cnej.jpg" },
  ];

  const accessories = [
    { title: "Lanyards", image: "https://5.imimg.com/data5/SELLER/Default/2023/6/314181960/RT/IB/AI/68371448/polyester-id-card-lanyard.jpg" },
    { title: "Card Holders", image: "https://m.media-amazon.com/images/I/31qSwIadDTL.jpg" },
    { title: "Metal Clips", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQmXVx-V1IDKq0JeMhtV06xU05vYSlPpgH3Q&s" },
    { title: "Yo-Yo Reel Holders", image: "https://rukminim2.flixcart.com/image/480/640/xif0q/lanyard/c/p/f/combo-pack-of-blue-id-card-holder-with-retractable-reel-yoyo-original-imah4fmchunkugmm.jpeg?q=90" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0b0b0f] via-[#12121a] to-[#0b0b0f] text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-orange-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500/20 blur-[120px]" />

      {/* ================= HERO SECTION ================= */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 ">

        {/* Image */}
        <div className="flex justify-center relative group">
         <div className="
  absolute
  top-1 left-12 right-12 bottom-12
  bg-gradient-to-tr from-orange-500 to-pink-500
  rounded-xl blur-xl opacity-40
  group-hover:opacity-60 transition
" />

          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/3/BQ/IK/IK/4192797/id-cards-500x500.jpg"
            alt="ID Card Printing"
            className="sm:h-[440px] relative z-10 rounded-md shadow-2xl  object-cover hover:scale-[1.02] transition duration-300"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-orange-400">ID Cards</span>
          </h1>

          <p className="text-gray-300 leading-relaxed mb-10">
            We provide high-quality, durable and fully customizable ID cards
            suitable for offices, schools, events and organizations.
            Designed for long-term use with premium finishing.
          </p>

          {/* ===== BULK ORDER CTA ===== */}
          <div className="
  inline-flex items-center gap-2
  bg-yellow-100 text-gray-900
  px-5 py-2 rounded-full
  text-sm font-medium
  border-2 border-red-500
  pulse-orange
">
            <span>Looking for <strong>BULK Order ?</strong></span>
            <span className="text-red-600 font-semibold cursor-pointer hover:scale-105 transition-transform">
              <a href="tel:+919568828814">Get a Call Back</a>

            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-6" />

          {/* ===== TRUST BADGES ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">

            {/* Satisfaction */}
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-orange-400 w-7 h-7" />
              <div className="text-sm leading-tight">
                <p className="font-semibold">100% SATISFACTION</p>
                <p className="text-gray-400">GUARANTEED</p>
              </div>
            </div>

            {/* Shipping */}
            <div className="flex items-center gap-3">
              <Truck className="text-orange-400 w-7 h-7" />
              <div className="text-sm leading-tight">
                <p className="font-semibold">FREE SHIPPING ON ALL</p>
                <p className="text-gray-400">ORDERS</p>
              </div>
            </div>

          </div>

          {/* ===== SPECIFICATIONS ===== */}
          <div className="mt-4 mb-4">
            <h3 className="text-lg font-semibold mb-3">Specifications</h3>

            <ul className="space-y-2 text-gray-300 text-sm list-disc pl-5">
              <li>Material: 300 GSM glossy laminated paper</li>
              <li>Size: 89mm × 54mm (standard ID size)</li>
              <li>Single-sided & double-sided printing available</li>
              <li>High-quality digital printing with glossy finish</li>
              <li>Waterproof & fade-resistant</li>
            </ul>
          </div>


        </div>
      </div>

      {/* ================= ID CARD TYPES ================= */}
      <div className="relative max-w-7xl mx-auto px-6 mt-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          ID Card <span className="text-orange-400">Types</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {idCardTypes.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-orange-400/40 transition"
            >
              <div className=" overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-orange-300">
                  {item.title}
                </h3>
                {/* <p className="mt-2 text-sm text-gray-400">
                  Available in bulk with custom design & lamination.
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ACCESSORIES ================= */}
      <div className="relative max-w-7xl mx-auto px-6 mt-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          ID Card <span className="text-orange-400">Accessories</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden text-center hover:border-pink-400/40 transition"
            >
              <div className=" overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-medium text-orange-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
