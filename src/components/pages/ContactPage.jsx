import { Helmet } from "react-helmet-async";
import Contact from "../Contact";

export default function ContactPage() {
  return (
    <>
      <Helmet>
  <title>
    Contact Sunrise Printers | Printing Services in Hapur
  </title>

  <meta
    name="description"
    content="Contact Sunrise Printers for flex printing, sign boards, visiting cards, wedding cards, banners and custom printing services in Hapur and NCR."
  />

  <meta
    name="keywords"
    content="contact sunrise printers, printing services Hapur, flex printing Hapur, sign boards Hapur, visiting cards printing, banner printing, wedding card printing, custom printing services NCR"
  />

  <meta
    property="og:title"
    content="Contact Sunrise Printers"
  />

  <meta
    property="og:description"
    content="Get in touch with Sunrise Printers for professional printing and branding services in Hapur and NCR."
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:url"
    content="https://sunriseprinters.in/contact"
  />

  <meta
    property="og:image"
    content="https://sunriseprinters.in/images/SRHome.avif"
  />

  <link
    rel="canonical"
    href="https://sunriseprinters.in/contact"
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

      <Contact />
    </>
  );
}