import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./layouts/PageTransition";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import IdCardService from "./components/ServicePages/IdCardService";  

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
                  <PageTransition>
                  <Home />
              </PageTransition>
                </MainLayout>
            }
          />

          <Route
            path="/about"
            element={
              <MainLayout>
                <PageTransition>
                  <AboutUs />
                </PageTransition>
              </MainLayout>
            }
          />

          <Route
            path="/services"
            element={
              <MainLayout>
                <PageTransition>
                  <Services />
                </PageTransition>
              </MainLayout>
            }
          />
            <Route 
            path="/services/id-cards" 
            element={
              // <MainLayout>
                <PageTransition>
                  <IdCardService />
                </PageTransition>
              // </MainLayout>
              }
               />

          <Route
            path="/gallery"
            element={
              <MainLayout>
                <PageTransition>
                  <Gallery />
                </PageTransition>
              </MainLayout>
            }
          />

          <Route
            path="/contact"
            element={
              <MainLayout>
                <PageTransition>
                  <Contact />
                </PageTransition>
              </MainLayout>
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
