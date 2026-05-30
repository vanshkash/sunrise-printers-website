import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import { useInView } from "react-intersection-observer";
const PastWorks = lazy(() => import("../components/PastWorks"));
import WhyChooseUs from "../components/WhyChooseUs";
const AboutUs = lazy(() => import("../components/AboutUs"));
const Contact = lazy(() => import("../components/Contact"));
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
