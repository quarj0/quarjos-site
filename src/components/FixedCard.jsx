import "../styles/FixedCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const FixedCard = () => {
  const handleMailTo = () => {
    const email = "owusuansahkwadwo24@gmail.com";
    const subject = "Inquiry from Portfolio Website";
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailto;
  };

  return (
    <div className="card container-fluid p-1 fixed-card">
      <div className="text-body-primary">
        <div className="text-end">
          <small className="text-sm-center text-break fs-6">
            Aspiring Cybersecurity Analyst
          </small>
        </div>
        <div className="text-end">
          <small className="text-sm-center text-break fs-6">
            Software Developer
          </small>
        </div>
      </div>
      <img
        src="https://avatars.githubusercontent.com/u/54241472?v=4"
        alt="My Profile Picture"
        className="mypic"
      />
      <p className="text-body-primary mt-4">Kumasi, Ghana</p>
      <div className="social-icons flex space-x-4">
        {/* Social Links with added rel="noopener noreferrer" for security */}
        <div className="icons-container">
          <a
            href="https://github.com/quarj0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub"
          >
            <FaGithub className="icon" />
          </a>
        </div>
        <div className="icons-container">
          <a
            href="https://linkedin.com/in/quarjo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>
        <div className="icons-container">
          <a
            href="https://x.com/quarjowusu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Twitter (X)"
          >
            <FaTwitter className="icon" />
          </a>
        </div>
        <div className="icons-container">
          <a
            href="https://www.instagram.com/quarjowusu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Instagram"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <div className="card-text mt-3">
        <p className="text-body-primary">
          <small className="text-sm-center">
            &copy; 2023 quarjo&apos;s site. All Rights Reserved
          </small>
        </p>
      </div>
      <button
        className="btn btn-outline-success btn-sm w-25 text-uppercase mt-3"
        onClick={handleMailTo}
        aria-label="Email me for inquiries"
      >
        <i className="fa fa-envelope">
          <span className="card-text"> Hire me</span>
        </i>
      </button>
    </div>
  );
};

export default FixedCard;
