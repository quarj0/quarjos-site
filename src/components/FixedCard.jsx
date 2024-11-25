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
    <div className="card container-fluid p-1 fixed-card ">
      <div className="text-body-primary">
        <div className="text-body-primary text-end">
          <small className="text-sm-center text-break fs-6">
            Cybersecurity Analyst
          </small>
        </div>
        <div className="text-body-primary text-end">
          <small className="text-sm-center text-break fs-6">& Backend Developer</small>
        </div>
      </div>
      <img
        src="https://avatars.githubusercontent.com/u/54241472?v=4"
        alt="mypic"
        className="mypic"
      />

      <p className="text-body-primary mt-4">
        Based in Ejisu-Kumasi, Gh
      </p>
      <div className="social-icons">
        <div className="icons-container icon-link">
          <a
            color="black"
            className="icon-link"
            href="https://github.com/quarj0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
        <div className="icons-container icon-link">
          <a
            color="blue"
            className="icon-link"
            href="https://linkedin.com/in/quarjo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>
        <div className="icons-container icon-link">
          <a
            color="#1DA1F2"
            className="icon-link-"
            href="https://twitter.com/quarjowusu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
        </div>
        <div className="icons-container icon-link-">
          <a
            color="#E1306C"
            className="icon-link"
            href="https://www.instagram.com/quarjowusu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <div className="card-text">
        <p className="text-body-primary">
          <small className="text-sm-center ">
            &copy; 2023 quarjo&apos;s site. All Rights Reserved
          </small>
        </p>
      </div>
      <button
        className="btn btn-outline-success btn-sm w-25 text-uppercase"
        onClick={handleMailTo}
      >
        <i className="fa fa-envelope " >
          <span className="card-text"> hire me</span>
          </i>
      </button>
    </div>
  );
};

export default FixedCard;
