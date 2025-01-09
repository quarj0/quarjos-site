const ExperienceSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-800 to-black text-white min-h-screen flex justify-center items-center px-4 md:px-6 py-12">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            EXPERIENCE
          </h2>
          <p className="text-4xl md:text-5xl lg:text-7xl text-gray-200 mt-4 md:mt-0">
            2020 - 2025
          </p>
        </div>
        <div className="w-1/4 h-1 bg-blue-400 mb-12"></div>
        {/* Experience List */}
        <div className="space-y-8">
          {/* Experience Item */}
          {[
            {
              company: "Kumasi Hive",
              role: "Software Developer",
              period: "2024 - 2025",
              description:
                "I was responsible for building and maintaining the company's software systems, collaborating with cross-functional teams to deliver high-quality products.",
            },
            {
              company: "Borcelle",
              role: "Junior Developer",
              period: "2022 - 2024",
              description:
                "Developed scalable web applications, fixed bugs, and optimized existing features to improve user experience and system performance.",
            },
            {
              company: "Arrowai Industries",
              role: "Content Creator",
              period: "2020 - 2022",
              description:
                "Managed and produced digital content for marketing campaigns, increasing engagement by 30% across multiple platforms.",
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
