import SystemAnalyzer from "../assets/images/SystemAnalyzer.png";
import ATMMobile from "../assets/images/mobiletrans.png";
import ATMIinterface from "../assets/images/interface.png";
import KumasiHive from "../assets/images/Kumasi Hive.png";
import RealCPO from "../assets/images/RealCPO.png";
import Weloret from "../assets/images/Weloret.png";

const Projects = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-purple-950 text-white min-h-screen flex flex-col justify-between px-4 md:px-6 py-12">
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          SELECTED PROJECTS
        </h2>
        <div className="w-1/2 h-2 bg-blue-500 mb-12"></div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center">
            <img
              src={Weloret}
              alt="Weloret Research Hub Project"
              className="w-full h-auto object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-medium mb-2">
              Weloret Research Hub | 2024
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Developed an all-in-one research platform designed to empower
              knowledge sharing and innovation. The hub features a diverse range
              of resources, including blogs for insightful research discussions,
              an events calendar for upcoming academic conferences and webinars,
              and a collection of curated materials to support research efforts.
              This platform is designed to keep researchers informed and engaged
              with the latest trends in their field. Additionally, the hub
              offers valuable opportunities for research funding, including
              grants to support academic projects, and an IT training section to
              equip researchers with essential technological skills. By
              combining resources, events, funding, and training, this platform
              is a powerful tool for driving academic and professional growth in
              the research community.
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center">
            <img
              src={SystemAnalyzer}
              alt="System Analyzer Project"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-medium mb-2">
              System Analyzer | 2023
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Developed a system analyzer tool that provides a comprehensive
              overview for measuring system response times, checking OS updates,
              monitoring system metrics like CPU, memory, disk usage, and
              network traffic, as well as conducting network speed tests.
              Designed for IT professionals, system administrators, and
              developers, the tool offers a user-friendly interface with
              real-time data visualization and detailed reports. By providing
              valuable insights into system performance and network
              connectivity, the system analyzer tool helps users optimize their
              systems for peak performance and reliability. The tool is
              compatible with Windows, macOS, and Linux operating systems,
              making it a versatile solution for monitoring and analyzing system
              performance across different platforms.
            </p>
          </div>

          {/* Project 3 */}
          <div className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center">
            <img
              src={RealCPO}
              alt="RealCPO Project"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-medium mb-2">
              RealCPO | 2024
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              I redesigned the RealCPO website as a template, a platform focused
              on delivering services related to Chief Product Officer (CPO)
              expertise. The goal was to create a modern, user-friendly design
              that clearly communicates the platform&apos;s offerings while
              providing a seamless experience for visitors. The new design
              features a clean layout, intuitive navigation, and engaging
              visuals to showcase the platform&apos;s services and benefits. By
              enhancing the design and user experience of the RealCPO website,
              the platform is now better positioned to attract and engage users
              interested in CPO-related services.
            </p>
          </div>

          {/* Project 4 */}

          <div className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center">
            <img
              src={KumasiHive}
              alt="Kumasi Hive Website Project"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-medium mb-2">
              Kumasi Hive Website Project | 2024
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              I developed the Kumasi Hive website, a platform focused on
              delivering services related to technology, innovation and helping
              of startups. The goal was to create a modern, user-friendly design
              that clearly communicates the platform&apos;s offerings while
              providing a seamless experience for visitors. The new design
              features a clean layout, intuitive navigation, and engaging
              visuals to showcase the platform&apos;s services and benefits. By
              enhancing the design and user experience of the Kumasi Hive
              website, the platform is now better positioned to attract and
              engage users interested in technology and innovation services.
            </p>
          </div>

          {/* Project 5 */}

          <div className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center">
            <img
              src={ATMMobile || ATMIinterface}
              alt="ATM Project"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-medium mb-2">
              Fingerprint ATM Simulator | 2023
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Developed an Fingerprint ATM simulator application that provides a
              realistic banking experience for users. The application allows
              users to perform various banking operations, such as checking
              account balances, transferring funds, and withdrawing cash using
              their fingerprint for authentication. The simulator features a
              user-friendly interface with interactive screens for navigating
              through different banking functions. By incorporating
              fingerprint-based authentication, the application offers enhanced
              security and convenience for users. The simulator is designed to
              replicate the functionality of a real ATM machine, providing a
              hands-on experience for users to practice their banking skills
              safely and securely. This project was developed using Java
              programming language and MySQL database and was part of software
              engineering course that I helped a team of student to develop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
