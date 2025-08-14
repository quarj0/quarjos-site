import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Homepage from "@/components/Homepage";
import Certifications from "@/components/Ceritfications";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      
        <Homepage />
        
        
        
          <Education />
        
        
          <Certifications />
        
        
          <Experience />
        
        
          <Projects />
        
        
          <Contact />
        
      
      <Footer />
    </>
  );
}