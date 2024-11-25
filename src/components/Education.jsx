import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Education.css";

const Education = () => {
  return (
    <div className="container edu-container text-body-primary">
      <div className="top-section">
        <i
          data-aos="fade-right"
          className="fa fa-university fa-1x fa-ico mb-3 text-uppercase"
        >
          {" "}
          Education
        </i>
      </div>
      <div className="title">
        <h2>
          Education &<span className="text-success"> Qualifications</span>
        </h2>
      </div>
      <div className="timeline">
        <div className="line"></div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h3>Bachelor Degree Information Technology</h3>
            <p className=" institution">University of Cape Coast</p>
            <small className=" education-date">2020 - 2024</small>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h3>High School</h3>
            <p className=" institution">Collins Senior High School</p>
            <small className="education-date">2017 - 2020</small>
            <br />
            <small className=" education-date">
              <strong>Major:</strong> General Science
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
