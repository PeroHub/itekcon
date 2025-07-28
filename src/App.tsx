import React, { useEffect } from "react"; // Import useEffect
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import WhatsAppButton from "./components/WhatsAppButton";

// Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      // You can customize AOS options here, these are common and recommended ones:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms (e.g., 1000ms = 1 second)
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element should trigger the animation
    });

    // Optional: If you have dynamic content loading or route changes that
    // don't cause a full page reload, you might want to refresh AOS.
    // However, with React Router, a simple init() at the root is usually sufficient
    // as components will mount/unmount and AOS will pick up the new elements.
    // If you encounter issues, you could call AOS.refresh() or AOS.refreshHard()
    // inside a useEffect in the individual page components, but start without it.
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
