import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          About Sunrise Printers | Printing Experts in Hapur
        </title>

        <meta
          name="description"
          content="Learn about Sunrise Printers, a trusted printing and branding company in Hapur offering flex printing, sign boards, visiting cards, banners and custom printing services."
        />

        <meta
          name="keywords"
          content="about sunrise printers, printing company Hapur, flex printing Hapur, sign board makers, banner printing, visiting card printing, branding services NCR, printing experts Hapur"
        />

        <meta
          property="og:title"
          content="About Sunrise Printers"
        />

        <meta
          property="og:description"
          content="Discover Sunrise Printers and our professional printing and branding solutions in Hapur and NCR."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://sunriseprinters.in/about"
        />

        <meta
          property="og:image"
          content="https://sunriseprinters.in/images/SRHome.avif"
        />

        <link
          rel="canonical"
          href="https://sunriseprinters.in/about"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          name="author"
          content="Sunrise Printers"
        />
      </Helmet>

      <AboutUs />
    </>
  );
}