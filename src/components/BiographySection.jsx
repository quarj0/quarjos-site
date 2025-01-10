import MyPic from "../assets/images/Plain pic.webp";

const BiographySection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-purple-950 text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 items-center">
        {/* /* Image Section */ }
          <div className="w-full sm:w-2/3 lg:w-1/2 flex justify-center">
            <img
              src={MyPic}
              alt="owusu's image"
              className="w-full h-auto max-w-[800px] sm:max-w-[500px] lg:max-w-none rounded-full shadow-lg"
            />
          </div>

          {/* Content Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My Biography
          </h2>
          <div className="w-2/3 h-2 bg-blue-500"></div>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Before starting my career in tech, I was a student passionate about
            computers and technology. Although I initially had the interest to
            pursue oil engineering at university, my interest in cybersecurity
            and software development led me to self-learn programming languages
            and explore web development, software creation, and IT support. Over
            time, I built a strong foundation in computer science, gaining
            hands-on experience and continuously expanding my skills in the
            dynamic tech industry.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            I specialize in backend development for web applications and
            software. I have hands-on experience building web applications using
            the <strong>Django</strong> framework and <strong>ReactJS</strong>
            library. My expertise includes developing RESTful APIs, web
            services, and managing databases. I am proficient in working with
            databases such as <strong>PostgreSQL, MySQL, and SQLite</strong>.
            Additionally, I have solid experience using{" "}
            <strong>Git for version control</strong>
            and working with the <strong>Linux operating system.</strong>
          </p>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            I hold IBM certifications in cybersecurity, including
            the <strong>IBM Cybersecurity Analyst Professional Certificate</strong>, <strong>Database
            Essentials</strong> from the University of Colorado, and <strong>System Security</strong>
            by ISC2. I am currently pursuing the <strong>CySA+</strong> and <strong>Google IT Support
            Certifications</strong>. These certifications have equipped me with
            expertise in cybersecurity principles, network security, incident
            response, and IT support. I am skilled in troubleshooting hardware
            and software issues, providing technical assistance, and resolving
            complex IT problems. With a solid grasp of computer networks,
            operating systems, and security protocols, I am committed to staying
            updated with the latest technologies in the evolving tech industry.
          </p>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Skill & Interest
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "Cybersecurity",
                "ReactJS",
                "Django",
                "IT Support",
                "Tailwind CSS",
                "Python",
                "Linux",
                "Microsoft Office",
                "SQL",
                "Git",
                "PostgreSQL",
                "MySQL",
                "HTML & CSS",
                "JavaScript",
                "Video Games",
                "Tech Gadgets",
                "Movies",
                "Music",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-700 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition text-xs sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
