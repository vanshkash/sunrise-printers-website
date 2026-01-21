import Hero from "../components/Hero";
import Services from "../components/Services";
import PastWorks from "../components/PastWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PastWorks />
      <WhyChooseUs />
      <AboutUs />
      <Gallery />
      <Contact />
    </>
  );
}
