import { Helmet } from "react-helmet-async";
import Gallery from "../Gallery";

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>
          Gallery | Sunrise Printers Printing Work in Hapur
        </title>

        <meta
          name="description"
          content="Explore the gallery of Sunrise Printers featuring flex printing, sign boards, visiting cards, banners, glow sign boards and branding projects in Hapur and NCR."
        />

        <meta
          name="keywords"
          content="sunrise printers gallery, flex printing gallery Hapur, sign boards work, printing projects Hapur, branding work NCR, visiting card designs, banner printing gallery"
        />

        <meta
          property="og:title"
          content="Sunrise Printers Gallery"
        />

        <meta
          property="og:description"
          content="View our latest printing, branding and sign board projects completed for businesses in Hapur and NCR."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://sunriseprinters.in/gallery"
        />

        <meta
          property="og:image"
          content="https://sunriseprinters.in/images/SRHome.avif"
        />

        <link
          rel="canonical"
          href="https://sunriseprinters.in/gallery"
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

      <Gallery />
    </>
  );
}