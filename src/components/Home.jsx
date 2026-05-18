import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import { useInView } from "react-intersection-observer";
// import Services from "../components/Services";
// import PastWorks from "../components/PastWorks";
const PastWorks = lazy(() => import("../components/PastWorks"));
import WhyChooseUs from "../components/WhyChooseUs";
// import AboutUs from "../components/AboutUs";
const AboutUs = lazy(() => import("../components/AboutUs"));
// import Contact from "../components/Contact";
const Contact = lazy(() => import("../components/Contact"));
// import Gallery from "../components/Gallery";

const Gallery = lazy(() => import("../components/Gallery"));
const Services = lazy(() => import("../components/Services"));

export default function Home() {
  const { ref: servicesRef, inView: servicesVisible } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  const { ref: aboutRef, inView: aboutVisible } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });
  const { ref: pastWorksRef, inView: pastWorksVisible } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });


  const { ref: galleryRef, inView: galleryVisible } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });
  const { ref: contactRef, inView: contactVisible } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });
  return (
    <>
      <Helmet>
        <title>
  Sunrise Printers | Best Printing Services in Hapur & NCR
</title>

        <meta
  name="description"
  content="Sunrise Printers is a trusted manufacturer of sign boards and provider of professional printing services in Hapur including flex printing, visiting cards, banners, wedding cards and custom branding solutions."
/>

        <meta
          name="keywords"
          content="flex printing Hapur, sign boards, wedding cards, visiting cards, custom printing, printing services in Hapur, NCR printing services, sunrise printers, best printing services, high-quality printing, affordable printing, local printing services"
        />

        <meta property="og:title" content="Sunrise Printers" />

        <meta
          property="og:description"
          content="Professional printing services in Hapur and NCR."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://sunriseprinters.in/images/SRHome.avif"
        />

        <meta property="og:url" content="https://sunriseprinters.in/" />

        <link rel="canonical" href="https://sunriseprinters.in/" />

        <meta name="author" content="Sunrise Printers" />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:site_name"
          content="Sunrise Printers"
        />

        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sunrise Printers",
  "url": "https://sunriseprinters.in",
  "logo": "https://sunriseprinters.in/TitleLogo.webp",
  "sameAs": [
    "https://www.instagram.com/",
    "https://www.facebook.com/"
  ]
}
`}
        </script>
      </Helmet>

      <Hero />

      <div ref={servicesRef}>
        {servicesVisible && (
          <Suspense fallback={
            <div className="py-20 text-center text-gray-400">
              Loading...
            </div>
          }>
            <Services />
          </Suspense>
        )}
      </div>

      <div ref={pastWorksRef}>
        {pastWorksVisible && (
          <Suspense fallback={
            <div className="py-20 text-center text-gray-400">
              Loading...
            </div>
          }>
            <PastWorks />
          </Suspense>
        )}
      </div>

      <WhyChooseUs />

      <div ref={aboutRef}>
        {aboutVisible && (
          <Suspense fallback={
            <div className="py-20 text-center text-gray-400">
              Loading...
            </div>
          }>
            <AboutUs />
          </Suspense>
        )}
      </div>

      <div ref={galleryRef}>
        {galleryVisible && (
          <Suspense fallback={
            <div className="py-20 text-center text-gray-400">
              Loading...
            </div>
          }>
            <Gallery />
          </Suspense>
        )}
      </div>

      <div ref={contactRef}>
        {contactVisible && (
          <Suspense fallback={
            <div className="py-20 text-center text-gray-400">
              Loading...
            </div>
          }>
            <Contact />
          </Suspense>
        )}
      </div>
    </>
  );
}
