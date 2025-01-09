const ExperienceSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-purple-950 text-white min-h-screen flex justify-center items-center px-4 md:px-6 py-12">
      <div className="max-w-5xl w-full">
        {/* /* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-normal mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            EXPERIENCE
          </h2>
          <p className="text-4xl md:text-5xl lg:text-7xl md:ml-36 font-black text-transparent mt-4 md:mt-0" style={{ WebkitTextStroke: '1px #E5E7EB' }}>
            2020 - 2025
          </p>
        </div>
        <div className="w-1/4 h-2 bg-blue-500 mb-12"></div>
        {/* Experience List */}
        <div className="space-y-8">
          {/* Experience Item */}
          {[
            {
              company: "Kumasi Hive",
              role: "Software Developer",
              period: "2024 - present",
              description:
                "I am responsible for building and maintaining the company's software systems, collaborating with cross-functional teams to deliver high-quality products.",
            },
            {
              company: "College of Distance Education (UCC)",
              role: "IT Support Specialist",
              period: "2023 - 2024",
              description:
                "Provided technical support to students and staff, managed IT infrastructure, and implemented security measures to protect the network.",
            },
            {
              company: "Freelancer",
              role: "Web Developer & Cybersecurity Analyst",
              period: "2021 - present",
              description:
                "Develope websites and web applications for clients, conducts penetration testing, and implemented security measures to protect websites from cyber threats.",
            },
            {
              company: "LoveTv and Radio Online",
              role: "IT Support Specialist",
              period: "2020 - 2021",
              description:
                "Provided technical support to staff, managed IT infrastructure, and implemented security measures to protect the network.",
            },
          ].map((experience, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:items-start"
            >
              <div className="lg:w-1/3">
                <h4 className="text-lg font-semibold text-white">
                  {experience.company}
                </h4>
                <p className="text-gray-400">
                  {experience.role} {experience.period}
                </p>
              </div>
              <div className="lg:w-2/3 lg:pl-6 mt-4 lg:mt-0">
                <p className="text-gray-400 leading-relaxed">
                  {experience.description}
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
