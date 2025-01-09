import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BiographySection from "./components/BiographySection";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects"; 
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<BiographySection />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
