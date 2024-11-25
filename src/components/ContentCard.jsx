import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Introduction from "./Introduction.jsx";
import About from "./About.jsx";
import Certificate from "./Certificates.jsx";
import Education from "./Education.jsx";
import Specialization from "./Specialization.jsx";
import Skills from "./Skills.jsx";
import FixedCard from "./FixedCard";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import WorkExp from "./WorkExp.jsx";
import "../styles/ContentCard.css";

const ContentCard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 768;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="row content-container container-fluid">
      {isLoading && (
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="spinner-border text-success" role="status">
              <span className="sr-only text-body-primary">Loading...</span>
            </div>
            <p className="text-body-primary">Loading...</p>
          </div>
        </div>
      )}
      {!isLoading && (
        <>
          <div className="col-lg-4 col-md-12 fixed-card-container">
            <FixedCard />
          </div>
          <div className="col-lg-8 col-md-12 scrollable-contents">
            <Introduction />
            <About />
            <Education />
            <Certificate />
            <WorkExp />
            <Specialization />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default ContentCard;
