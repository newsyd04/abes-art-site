import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ArtworksPage from "./pages/ArtworksPage.jsx";
import LessonsPage from "./pages/LessonsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<><Navbar mode="dark" /><HomePage /></>} />
        <Route path="/about" element={<><Navbar mode="light" /><AboutPage /></>} />
        <Route path="/artworks" element={<><Navbar mode="light" /><ArtworksPage /></>} />
        <Route path="/lessons" element={<><Navbar mode="light" /><LessonsPage /></>} />
        <Route path="/contact" element={<><Navbar mode="light" /><ContactPage /></>} />
      </Routes>
      <Footer />
    </div>
  );
}
