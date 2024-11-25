import "bootstrap/dist/css/bootstrap.min.css";

const Introduction = () => {
  return (
    <div>
      <div className="container text-body-primary ">
        <i
          data-aos="fade-right"
          className="fa fa-home fa-1x fa-ico text-uppercase"
        >
          {" "}
          Introduce
        </i>
        <h1 className="text-header text-wrap">
          <span className="text-body-primary ">Hi 👋! I&apos;m</span>
          <span className="text-success m-2 text-capitalize">Quarjo</span>,
          <br />
          <span className="text-body-primary">
            Cybersecurity Analyst and Backend Dev.
          </span>
        </h1>
        <p className="text-wrap text-body-primary">
          Welcome to my portfolio website! This online space serves as a
          comprehensive showcase of my skills, experiences, and accomplishments
          in the world of IT, web development, and design. As a dedicated
          student at the University of Cape Coast in Ghana with a passion for
          cybersecurity and Web Development, this platform
          reflects my journey and aspirations.
        </p>
      </div>
      <div className="text-center text-body-primary">
        <h3 className="text-header experience ">5+</h3>
        <p className="text-wrap text-body-primary">years of experience</p>
      </div>
    </div>
  );
};

export default Introduction;
