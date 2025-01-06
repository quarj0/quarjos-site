import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="text-body-primary">
      <div className="container about">
        <div className="row">
          <div className="cols-md-2">
            <i
              data-aos="fade-right"
              className="fa fa-user fa-1x fa-ico text-uppercase"
            >
              {" "}
              About{" "}
            </i>
          </div>
          <div className="cols-md-10 m-2">
            <h3 className="text-header">
              <span>Every day is a new opportunity to</span>{" "}
              <span className="text-success">learn something new</span>.
            </h3>
            <p data-aos="fade-left" className="text-wrap text-body-primary">
              Hello, I am{" "}
              <span className="text-success">Owusu Ansah Kwadwo</span>, a
              software developer based in Kumasi, Ghana. I have a
              Bachelor&apos;s degree in Information Technology from University
              of Cape Coast. I have experience in building web applications
              using modern technologies like React, Python, and Postgresql or
              MySQL. I am always looking for new opportunities to learn and grow
              as a developer.
            </p>
            <p data-aos="fade-left" className="text-wrap text-body-primary">
              I am also an aspiring Cyber Security Analyst. I have a keen
              interest in Cyber Security and I am currently studying for the
              CompTIA Security+ certification. I am also looking forward to
              learning more about Cyber Security and getting more certifications
              in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
