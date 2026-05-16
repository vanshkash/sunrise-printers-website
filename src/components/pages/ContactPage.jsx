import { Helmet } from "react-helmet-async";
import Contact from "../Contact";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Sunrise Printers</title>
      </Helmet>

      <Contact />
    </>
  );
}