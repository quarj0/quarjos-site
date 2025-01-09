const BiographySection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-800 to-black text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Section */}
        <div className="w-full sm:w-2/3 lg:w-1/3 flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/54241472?v=4"
            alt="Person"
            className="w-full h-auto max-w-[300px] sm:max-w-[350px] lg:max-w-none rounded-full shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-400">
            My Biography
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Before embarking on my career in the tech industry, I was a student
            with a deep passion for technology and computer science. Although my
            initial focus was on pursuing oil engineering at university, my
            interest in computers and technology remained strong. I was
            fascinated by how computers function and how software is developed.
            Additionally, I had a keen interest in cybersecurity and the
            measures necessary to protect systems and networks from cyber
            threats. Driven by curiosity and a desire to expand my knowledge, I
            began self-learning various programming languages and delved into
            the field of cybersecurity. I honed my skills in web development,
            software development, and game creation, using a variety of
            programming languages and frameworks. Over time, I built a solid
            foundation in computer science and information technology, gaining
            valuable experience in software and web development, as well as IT
            support. I continuously sought opportunities to learn and grow
            within the ever-evolving tech industry.
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
            I hold multiple <strong>IBM certifications</strong> in cybersecurity
            and IT support, including the{" "}
            <strong>IBM Cybersecurity Analyst Professional Certificate</strong>,{" "}
            <strong>Database Essentials</strong> from the University of
            Colorado, and <strong>System Security</strong> by ISC2, among
            others. I am currently working towards obtaining the{" "}
            <strong>CySA+</strong> and{" "}
            <strong>Google IT Support Certifications</strong>. These
            certifications have provided me with a strong foundation in{" "}
            <strong>
              cybersecurity principles<strong>, </strong>network security
            </strong>
            , <strong>incident response</strong>, and{" "}
            <strong>IT support</strong> concepts. I am proficient in
            troubleshooting both hardware and software issues, providing
            effective <strong>technical assistance</strong> to end-users, and
            resolving complex IT problems. With a solid understanding of
            <strong>computer networks</strong>,{" "}
            <strong>operating systems</strong>, and{" "}
            <strong>security protocols</strong>, I am well-equipped to protect
            systems and networks from cyber threats. I am dedicated to
            continuous learning and professional development to ensure I remain
            up-to-date with the latest trends and technologies in the
            ever-evolving tech industry.
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
