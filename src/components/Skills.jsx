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
        <h3 className="text-header text-wrap mb-2">
          <span className="fs-1 text-body-primary"> My </span>
          <span className="text-success fs-1"> Advantages </span>
        </h3>
        <div className="skills-container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Skill item template */}
          {[
            {
              name: "Python",
              icon: <FaPython color="blue" />,
              percentage: "70%",
            },
            { name: "Kali Linux", icon: <FaLinux />, percentage: "80%" },
            {
              name: "ReactJs",
              icon: <FaReact color="lightblue" />,
              percentage: "58%",
            },
            { name: "Git", icon: <FaGit color="#F05033" />, percentage: "80%" },
            {
              name: "JavaScript",
              icon: <FaJs color="yellow" />,
              percentage: "60%",
            },
            {
              name: "Database",
              icon: <FaDatabase color="teal" />,
              percentage: "70%",
            },
            {
              name: "Django",
              icon: (
                <FaRocket
                  color="green"
                  style={{ transform: "rotate(313deg)" }}
                />
              ),
              percentage: "68%",
            },
            { name: "Java", icon: <FaJava color="red" />, percentage: "50%" },
          ].map(({ name, icon, percentage }, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="skills flex flex-col items-center justify-center text-center"
            >
              <p className="language fs-6">{name}</p>
              <div className="circle relative">
                {icon}
                <span className="percentage absolute bottom-0 right-0 text-white text-sm">
                  {percentage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
