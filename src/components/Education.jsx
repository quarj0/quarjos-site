const Education = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      {/* Top Section */}
      <div className="text-center mb-6">
        <i
          data-aos="fade-right"
          className="fa fa-university text-2xl font-semibold uppercase mb-3 text-blue-600"
        >
          {" "}
          Education
        </i>
      </div>

      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Education &<span className="text-green-500"> Qualifications</span>
        </h2>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-4 border-blue-600">
        {/* Timeline Item 1 */}
        <div className="mb-10 ml-8">
          <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5"></div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Bachelor Degree Information Technology
            </h3>
            <p className="text-gray-600">University of Cape Coast</p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="mb-10 ml-8">
          <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5"></div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">High School</h3>
            <p className="text-gray-600">Collins Senior High School</p>
            <small className="block text-gray-500 mt-2">
              <strong>Major:</strong> General Science
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
