import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css";

const Contact = () => {
  const handleMailTo = () => {
    const email = "owusuansahkwadwo24@gmail.com";
    const subject = "Contact from your portfolio";
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailto;
  };

  return (
    <div className="container text-body-primary">
      <i
        data-aos="fade-right"
        className="fa fa-contact-book fa-1x fa-ico mt-4 mb-2 text-uppercase text-sm-center"
      >
        {" "}
        Contact Me{" "}
      </i>
      <form>
        <div className="row g-3 m-2">
          <p className="text-body-primary fs-1">
            <span>Let&apos;s Work</span>{" "}
            <span className="text-success">Together!</span>
          </p>

          <div className="contact message">
            <p className="text-body-primary fs-6">
              I value collaboration, networking, and sharing knowledge. Feel
              free to reach out via the provided contact information or connect
              with me on LinkedIn and GitHub. I welcome opportunities for
              collaboration, discussions on cybersecurity, programming, or any
              exciting projects.
            </p>
          </div>

          <div className="col text-center ">
            <button
              className="btn btn-success text-center w-25 text-uppercase"
              type="submit"
              onClick={handleMailTo}
            >
              send message
            </button>
          </div>
        </div>
      </form>
      <hr className=" text-success" />
    </div>
  );
};

export default Contact;
