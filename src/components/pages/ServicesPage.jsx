import { Helmet } from "react-helmet-async";
import Services from "../Services";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>
          Printing Services in Hapur | Sunrise Printers
        </title>

        <meta
          name="description"
          content="Explore professional printing services by Sunrise Printers including flex printing, sign boards, visiting cards, bill books, banners, glow sign boards and custom branding solutions in Hapur and NCR."
        />

        <meta
          name="keywords"
          content="printing services Hapur, flex printing Hapur, sign boards, visiting cards printing, banner printing, bill books printing, glow sign boards, custom printing services NCR"
        />

        <meta
          property="og:title"
          content="Sunrise Printers Services"
        />

        <meta
          property="og:description"
          content="Professional printing and branding services in Hapur including flex printing, sign boards, banners and visiting cards."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://sunriseprinters.in/services"
        />

        <meta
          property="og:image"
          content="https://sunriseprinters.in/images/SRHome.avif"
        />

        <link
          rel="canonical"
          href="https://sunriseprinters.in/services"
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

      <Services />
    </>
  );
}