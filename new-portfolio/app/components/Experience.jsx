const experienceData = [
  {
    company: "Kumasi Hive",
    role: "Software Developer",
    period: "2024 - Present",
    description:
      "Build and maintain software systems, collaborating with cross-functional teams to deliver high-quality products.",
  },
  {
    company: "CyberTeq",
    role: "Capture the Flag Challenge (CTF)",
    description:
      "Gained hands-on experience identifying and exploiting vulnerabilities in Linux and Windows systems, enhancing skills in privilege escalation and post-exploitation.",
  },
  {
    company: "College of Distance Education (UCC)",
    role: "IT Support Specialist",
    period: "2023 - 2024",
    description:
      "Provided technical support, managed IT infrastructure, and implemented security measures to protect the network.",
  },
  {
    company: "Freelancer",
    role: "Web Developer & Cybersecurity Analyst",
    period: "2021 - Present",
    description:
      "Developed websites and web applications, conducted penetration testing, and implemented security measures to protect client systems.",
  },
  {
    company: "LoveTv and Radio Online",
    role: "IT Support Specialist",
    period: "2020 - 2021",
    description:
      "Provided technical support, managed IT infrastructure, and implemented network security measures.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-purple-950 text-white py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <p
            className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent mt-4 md:mt-0"
            style={{ WebkitTextStroke: "1px #E5E7EB" }}
          >
            2020 - 2025
          </p>
        </div>
        <div className="w-24 h-1 bg-blue-500 mb-12"></div>

        {/* Experience List */}
        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gray-800/40 backdrop-blur-md p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col lg:flex-row gap-4 lg:gap-6"
            >
              <div className="lg:w-1/3">
                <h4 className="text-lg md:text-xl font-semibold text-white">
                  {exp.company}
                </h4>
                <p className="text-gray-400">
                  {exp.role} {exp.period && `| ${exp.period}`}
                </p>
              </div>
              <div className="lg:w-2/3">
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
