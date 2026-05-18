import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./layouts/PageTransition";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
// import ContactPage from "./components/pages/ContactPage";
const ContactPage = lazy(() => import("./components/pages/ContactPage"));
// import Services from "./components/Services";
const ServicesPage = lazy(() => import("./components/pages/ServicesPage"));
// import Gallery from "./components/Gallery";
const GalleryPage = lazy(() => import("./components/pages/GalleryPage"));
// import IdCardService from "./components/ServicePages/IdCardService";
const IdCardService = lazy(() =>
  import("./components/ServicePages/IdCardService")
);
// import FlexBoardService from "./components/ServicePages/FlexBoardService";
const FlexBoardService = lazy(() =>
  import("./components/ServicePages/FlexBoardService")
);
// import VisitingCardService from "./components/ServicePages/VisitingCardService";
const VisitingCardService = lazy(() =>
  import("./components/ServicePages/VisitingCardService")
);
// import SignBoardService from "./components/ServicePages/SignBoardService";
const SignBoardService = lazy(() =>
  import("./components/ServicePages/SignBoardService")
);
// import PosterService from "./components/ServicePages/PosterService";
const PosterService = lazy(() =>
  import("./components/ServicePages/PosterService")
);
// import BillBookService from "./components/ServicePages/BillBookService";
const BillBookService = lazy(() =>
  import("./components/ServicePages/BillBookService")
);

// import CalendarService from "./components/ServicePages/CalendarService";
const CalendarService = lazy(() =>
  import("./components/ServicePages/CalendarService")
);
// import GlowSignBoardService from "./components/ServicePages/GlowSignBoardService";
const GlowSignBoardService = lazy(() =>
  import("./components/ServicePages/GlowSignBoardService")
);
// import LabelsStickersService from "./components/ServicePages/LabelsStickersService";
const LabelsStickersService = lazy(() =>
  import("./components/ServicePages/LabelsStickersService")
);
// import PamphletsFlyersService from "./components/ServicePages/PamphletsFlyersService";
const PamphletsFlyersService = lazy(() =>
  import("./components/ServicePages/PamphletsFlyersService")
);
// import SchoolStationeryService from "./components/ServicePages/SchoolStationeryService";
const SchoolStationeryService = lazy(() =>
  import("./components/ServicePages/SchoolStationeryService")
);
// import OfficeStationeryService from "./components/ServicePages/OfficeStationeryService";
const OfficeStationeryService = lazy(() =>
  import("./components/ServicePages/OfficeStationeryService")
);
function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <MainLayout>
                {/* <PageTransition> */}
                <Home />
                {/* </PageTransition> */}
              </MainLayout>
            }
          />

          <Route
            path="/about"
            element={
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black">Loading...</div>}>
              <MainLayout>
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              </MainLayout>
              </Suspense>
            }
          />

          <Route
            path="/services"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black">Loading...</div>}>
              <MainLayout>
                <PageTransition>
                  <ServicesPage />
                </PageTransition>
              </MainLayout>
              </Suspense>
            }
          />
          <Route
            path="/services/id-cards"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black">Loading...</div>}>
                <PageTransition>
                  <IdCardService />
                </PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/services/flex-boards"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black" >Loading...</div>}>
                <PageTransition>
                  <FlexBoardService />
                </PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/services/visiting-cards"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black" >Loading...</div>}>
                <PageTransition>
                  <VisitingCardService />
                </PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/services/sign-boards"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black" >Loading...</div>}>
                <PageTransition>
                  <SignBoardService />
                </PageTransition>
              </Suspense>
            }
          />

          <Route
            path="/services/posters"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black" >Loading...</div>}>
                <PageTransition>
                  <PosterService />
                </PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/services/bill-books"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black" >Loading...</div>}>
                <PageTransition>
                  <BillBookService />
                </PageTransition>
              </Suspense>
              // </MainLayout>
            }
          />
          <Route
            path="/services/calendars"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black" >Loading...</div>}>
                <PageTransition>
                  <CalendarService />
                </PageTransition>
              </Suspense>
              // </MainLayout>
            }
          />
          <Route
            path="/services/glow-sign-boards"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black" >Loading...</div>}>

                <PageTransition>
                  <GlowSignBoardService />
                </PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/services/labels-stickers"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black" >Loading...</div>}>
                <PageTransition>
                  <LabelsStickersService />
                </PageTransition>
              </Suspense>
            }
          />
          <Route
            path="/services/pamphlets-flyers"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black" >Loading...</div>}>
                <PageTransition>
                  <PamphletsFlyersService />
                </PageTransition>
              </Suspense>
            }
          />

          <Route
            path="/services/school-stationery"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black" >Loading...</div>}>
                <PageTransition>
                  <SchoolStationeryService />
                </PageTransition>
              </Suspense>
            }
          />

          <Route
            path="/services/office-stationery"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black" >Loading...</div>}>
                <PageTransition>
                  <OfficeStationeryService />
                </PageTransition>

              </Suspense>
            }
          />
<Route
  path="/gallery"
  element={
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black">Loading...</div>}>
    <MainLayout>
      <PageTransition>
        <GalleryPage />
      </PageTransition>
    </MainLayout>
    </Suspense>
  }
/>

          <Route
            path="/contact"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-black">Loading...</div>}>
              <MainLayout>
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              </MainLayout>
              </Suspense>
            }
          />

        </Routes>
      </AnimatePresence>
      <FloatingCTA />
      <Footer />
    </>
  );
}

export default App;
