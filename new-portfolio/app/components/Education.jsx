const educationData = [
  {
    title: "Senior High School",
    institution: "Collins Senior High",
    major: "Science",
    year: "2020",
  },
  {
    title: "Bachelor Degree",
    institution: "University of Cape Coast",
    major: "BSc. Information Technology",
    year: "2024",
  },
];

const EducationSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-purple-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
          <div className="w-24 h-1 bg-blue-500 mb-4"></div>
          <p className="text-gray-400 leading-relaxed text-lg">
            I have a background in IT and Science, completing Senior High at
            Collins SHS and earning a BSc in Information Technology from the
            University of Cape Coast.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center space-y-8">
          <h3
            className="text-6xl md:text-7xl font-bold text-transparent text-right md:text-left"
            style={{ WebkitTextStroke: "1px #E5E7EB" }}
          >
            2020 - 2024
          </h3>

          <div className="space-y-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="bg-gray-800/40 backdrop-blur-md p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl md:text-2xl font-semibold text-white">
                  {edu.title}
                </h4>
                <p className="text-gray-400 text-sm md:text-base mt-1">
                  {edu.institution} | {edu.major} | {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
