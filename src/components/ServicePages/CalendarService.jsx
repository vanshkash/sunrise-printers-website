import { Helmet } from "react-helmet-async";
import { ShieldCheck, Truck } from "lucide-react";

export default function CalendarService() {

  return (
    <>
  <Helmet>
    <title>
      Calendar Printing in Hapur | Sunrise Printers
    </title>

    <meta
      name="description"
      content="Get premium customized calendar printing services in Hapur including wall calendars, desk calendars and branded business calendars with vibrant printing."
    />

    <meta
      name="keywords"
      content="calendar printing Hapur, wall calendars, desk calendars, custom calendars, business calendars, branded calendars"
    />

    <meta
      name="author"
      content="Sunrise Printers"
    />

    <meta
      name="robots"
      content="index, follow"
    />

    <meta
      property="og:title"
      content="Calendar Printing in Hapur"
    />

    <meta
      property="og:description"
      content="Professional customized calendar printing services by Sunrise Printers."
    />

    <meta
      property="og:type"
      content="website"
    />

    <meta
      property="og:image"
      content="https://sunriseprinters.in/services/calendars.webp"
    />

    <meta
      property="og:url"
      content="https://sunriseprinters.in/services/calendars"
    />

    <link
      rel="canonical"
      href="https://sunriseprinters.in/services/calendars"
    />
  </Helmet>
    <section className="relative py-24 bg-gradient-to-br from-[#0b0b0f] via-[#12121a] to-[#0b0b0f] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-orange-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500/20 blur-[120px]" />

      {/* HERO SECTION */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

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
            src="/services/calendars.avif"
            alt="Calendar Printing"
            fetchPriority="high"
            className="sm:h-[440px] relative z-10 rounded-md shadow-2xl object-cover hover:scale-[1.02] transition duration-300"
          />
        </div>

        {/* Content */}
        <div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Premium <span className="text-orange-400">Calendars</span>
          </h1>

          <p className="text-gray-300 leading-relaxed mb-10">
            We provide customized wall and desk calendars with premium
            printing quality, vibrant designs and professional branding
            solutions perfect for promotions, offices and businesses.
          </p>

          {/* CTA */}
          <div className="
            inline-flex items-center gap-2
            bg-yellow-100 text-gray-900
            px-5 py-2 rounded-full
            text-sm font-medium
            border-2 border-red-500
            pulse-orange
          ">

            <span>
              Looking for <strong>BULK Order ?</strong>
            </span>

            <span className="text-red-600 font-semibold cursor-pointer hover:scale-105 transition-transform">
              <a href="tel:+919568828814">
                Get a Call Back
              </a>
            </span>

          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-6" />

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">

            {/* Quality */}
            <div className="flex items-center gap-3">

              <ShieldCheck className="text-orange-400 w-7 h-7" />

              <div className="text-sm leading-tight">
                <p className="font-semibold">
                  PREMIUM PRINT QUALITY
                </p>

                <p className="text-gray-400">
                  GUARANTEED
                </p>
              </div>

            </div>

            {/* Delivery */}
            <div className="flex items-center gap-3">

              <Truck className="text-orange-400 w-7 h-7" />

              <div className="text-sm leading-tight">
                <p className="font-semibold">
                  FAST DELIVERY
                </p>

                <p className="text-gray-400">
                  ALL OVER INDIA
                </p>
              </div>

            </div>

          </div>

          {/* Specifications */}
          <div className="mt-4 mb-4">

            <h3 className="text-lg font-semibold mb-3">
              Specifications
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm list-disc pl-5">
              <li>Wall & desk calendar formats available</li>
              <li>Premium glossy & matte paper options</li>
              <li>Custom branding and logo printing</li>
              <li>High-resolution vibrant color printing</li>
              <li>Available in multiple sizes & layouts</li>
            </ul>

          </div>

        </div>
      </div>

    </section>
    </>
  );
}