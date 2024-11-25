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
              I am a Cybersecurity Analyst and Programmer. I have been working
              in the field of Cybersecurity for 5+ years. I have a passion for
              learning and sharing my knowledge with others a public as
              possible. I have a strong interest in cybersecurity and
              programming . I am always excited to learn new things. I am a fast
              learner and a team player. I am a self-motivated person and I
              believe in hard work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
