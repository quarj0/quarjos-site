import Education from "@/app/components/Education";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Homepage from "@/app/components/Homepage";
import Certifications from "@/app/components/Ceritfications";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

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
