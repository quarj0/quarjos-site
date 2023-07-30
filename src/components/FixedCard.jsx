import "../styles/FixedCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const FixedCard = () => {
  return (
    <div className="card container-fluid text-bg-dark p-3 fixed">
      <h2 className="text-title registered fw-bold fs-2 text-start">
        Kwadwo &reg;
      </h2>
      <div className="text-body">
        <div className="text-body-secondary text-end">
          <small className="text-sm-center text-break fs-6">
            Ethical Hacker
          </small>
        </div>
        <div className="text-body-secondary text-end">
          <small className="text-sm-center text-break fs-6">
            & Programmer
          </small>
        </div>

      </div>
      <img src="src/assets/mypic.jpg" alt="mypic" className="mypic" />
      <p className="text-body-secondary">Kumasi</p>
      <div className="social-icons">
        <div className="icons-container icon-link-hover">
          <a
            className="icon-link icon-link-hover"
            href="https://github.com/hacks-and-codes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
        <div className="icons-container icon-link-hover">
          <a
            className="icon-link icon-link-hover"
            href="https://linkedin.com/in/quarjo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>
        <div className="icons-container icon-link-hover">
          <a
            className="icon-link icon-link-hover"
            href="https://twitter.com/quarjowusu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
        </div>
        <div className="icons-container icon-link-hover">
          <a
            className="icon-link icon-link-hover"
            href="https://www.instagram.com/quarjowusu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <div className="text-body">
        <p className="text-body-secondary">
          <small className="text-sm-center">
            &copy; my porfolio 2023 All Rights Reserved.
          </small>
        </p>
      </div>
      <button className="btn btn-success mt-3">Email me</button>
    </div>
  );
};

export default FixedCard;
