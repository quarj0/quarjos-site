import "../styles/Skills.css";
import {
  FaPython,
  FaLinux,
  FaReact,
  FaGit,
  FaJs,
  FaDatabase,
  FaRocket,
  FaJava,
} from "react-icons/fa";

const MySkills = () => {
  return (
    <div className="container text-body-primary">
      <div className="text-start card-body about">
        <i 
          data-aos="fade-right"
          className="fa fa-tasks fa-1x fa-ico mt-4 mb-2 text-uppercase"
        >
          {" "}
          My Skills{" "}
        </i>
        <h3 className="text-header text-wrap  mb-2">
          <span className="fs-1 text-body-primary"> My </span>
          <span className="text-success fs-1"> Advantages </span>
        </h3>
        <div className="skills-container">
          <div data-aos="fade-right" className="skills">
            <p className="language fs-6">Python</p>
            <div className="circle">
              <FaPython color="blue" className="fadvantage" />
              <span className="percentage">70%</span>
            </div>
          </div>

          <div data-aos="fade-left" className="skills">
            <p className="language fs-6">Kali Linux</p>
            <div className="circle">
              <FaLinux className="fadvantage" />
              <span className="percentage">80%</span>
            </div>
          </div>

          <div className="skills">
            <p className="language fs-6">ReactJs</p>
            <div className="circle">
              <FaReact color="lightblue" className="fadvantage" />
              <span className="percentage">58%</span>
            </div>
          </div>

          <div data-aos="fade" className="skills">
            <p className="language fs-6">Git</p>
            <div className="circle">
              <FaGit className="fadvantage" color="#F05033" />
              <span className="percentage">80%</span>
            </div>
          </div>

          <div className="skills">
            <p className="language">JavaScript</p>
            <div className="circle">
              <FaJs className="fadvantage" color="yellow" />
              <span className="percentage">60%</span>
            </div>
          </div>

          <div data-aos="fade-up" className="skills">
            <p className="language">Database</p>
            <div className="circle">
              <FaDatabase color="teal" className="fadvantage" />
              <span className="percentage">70%</span>
            </div>
          </div>
          <div data-aos="fade-left" className="skills">
            <p className="language">Django</p>
            <div className="circle">
              <FaRocket
                color="green"
                style={{ transform: "rotate(313deg)" }}
                className="fadvantage"
              />
              <span className="percentage">68%</span>
            </div>
          </div>
          <div data-aos="fade-up" className="skills">
            <p className="language">Java</p>
            <div className="circle">
              <FaJava color="red" className="fadvantage" />
              <span className="percentage">50%</span>
              </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
