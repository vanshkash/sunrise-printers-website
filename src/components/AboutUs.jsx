import React from "react";

export default function AboutUs() {
  return (
    <section className="relative text-white py-24 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[160px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Reliable printing solutions built on quality, trust, and experience.
          </p>
        </div>

        {/* About Content */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-semibold mb-4">
            Printing That Builds Trust
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Sunrise Printers is a dedicated printing service provider offering
            flex printing, posters, visiting cards, banners, glowing sign boards,
            wedding cards, and custom print solutions. We focus on clean output,
            durable materials, and timely delivery.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Whether it’s a small order or a large project, we give equal attention
            to every job. Our goal is simple — provide honest service and quality
            printing that customers can rely on.
          </p>
        </div>

        {/* Owner Message */}
        <div className="mb-20 bg-[#0b0b0f]/60 border border-white/10 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-semibold mb-3">
            Message From the Owner
          </h3>

          <p className="text-gray-300 leading-relaxed">
            “We believe in honest work, fair pricing, and quality printing that
            customers can trust.”
          </p>

          <p className="mt-4 text-orange-400 font-medium">
            — Gautam Kumar, Sunrise Printers
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-semibold text-center mb-10">
            Our <span className="text-orange-500">Team</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* Team Member 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition">
              <img
                src="/images/AboutUsImage.webp"
                alt="Team Member"
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold text-lg">Gautam Kumar</h4>
              <p className="text-gray-400 text-sm">Founder and CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition">
              <img
                src="/images/AboutUsImage.webp"
                alt="Team Member"
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold text-lg">Amit Verma</h4>
              <p className="text-gray-400 text-sm">Design & Layout</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition">
              <img
                src="/images/AboutUsImage.webp"
                alt="Team Member"
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold text-lg">Sandeep Kumar</h4>
              <p className="text-gray-400 text-sm">Design & Layout</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
