import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Specialization.css";

const Specialization = () => {
  return (
    <div className="special-container container-fluid text-body-primary">
      <div className="card-title text-start mt-4">
        <i data-aos="fade-right" className="fa fa-users-cog fa-1x fa-ico text-uppercase"> Services </i>
        <h2 className="card-title ">
          <span className="fs-1 text-body-primary">My </span> <span className="text-success fs-1">Specialization</span>
        </h2>
      </div>
      <div data-aos="fade-down" className="card card-special-container">
        <h5 className="card-body text-start mt-3 m-lg-2">Development</h5>
        <div className="card-body text-start">
          <small className="card-body text-body-primary">
          I build APIs using Django and MySQL.
           Django provides a robust framework for developing web and mobile
            applications quickly, while MySQL offers a reliable and scalable database solution.
            Together, they allow me to create efficient and secure APIs for various applications.
          </small>

        </div>
      </div>
      <div data-aos="fade-down" className="card  card-special-container">
        <h5 className="card-body text-start mt-3 m-lg-2">Programming</h5>
        <div className="card-body text-start">
          <small className="card-title text-body-primary card-body">
            I write scripts in Python to automate tasks and build tools for developers.
            I also write scripts to analyze and evaluate the behavior and performance of computer systems and networks.
          </small>

        </div>
      </div>
      <div
        data-aos="fade-down"
        className="card mb-4 mt-3 card-special-container"
      >
        <h5 className="card-body text-start mt-3 m-lg-2">Pentesting</h5>
        <div className="card-body text-start">
          <small className="card-body text-body-primary">
            I take projects on bounty hunting and help other developers to
            secure their web apps
          </small>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="card mb-4 mt-3 card-special-container"
      >
        <h5 className="card-body text-start mt-3 m-lg-2">
          System Analysis
        </h5>
        <div className="card-body text-start">
          <small className="card-body text-body-primary">
            I analyze and evaluate the behavior and performance of computer
            systems and networks to improve their reliability and security and to help developers to build secure web apps and systems.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
