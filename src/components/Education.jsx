const EducationSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-800 to-black text-white min-h-screen flex justify-center items-center px-6 py-12">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
          <div className="w-1/2 h-1 bg-blue-400"></div>
          <p className="text-gray-400 leading-relaxed">
            I have a strong educational background in Information Technology and
            Science. I have completed my Senior High School education at Collins
            Senior High School, where I studied Science. I furthered my
            education at the University of Cape Coast, where I pursued a
            Bachelor of Science degree in Information Technology.
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <h3 className="text-7xl font-bold text-gray-500">2020 - 2024</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-white">
                Senior High School
              </h4>
              <p className="text-gray-400">
                Collins Senior High | Major: Science | 2020
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">
                Bachelor Degree
              </h4>
              <p className="text-gray-400">
                University of Cape Coast | BSc. Information Technology | 2024
              </p>
            </div>
            {/* <div>
              <h4 className="text-lg font-semibold text-white">
                Master Degree
              </h4>
              <p className="text-gray-400">
                Borcelle Art University | Master of Communication | 2019
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
