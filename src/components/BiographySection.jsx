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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet massa sed leo molestie ultrices in non mi. Suspendisse molestie
            nisl ac aliquet pretium. Suspendisse dignissim, odio non hendrerit
            suscipit, lorem ipsum tempus tortor, suscipit vestibulum velit quam
            nec mi.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Aliquam luctus faucibus augue, in porttitor eros imperdiet sit amet.
            Vivamus vel tortor at risus vestibulum elementum accumsan id ante.
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
