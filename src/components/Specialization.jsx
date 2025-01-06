import "../styles/Specialization.css";

const specializations = [
  {
    title: "Development",
    description:
      "I build APIs using Django and MySQL. Django provides a robust framework for developing web and mobile applications quickly, while MySQL offers a reliable and scalable database solution.",
  },
  {
    title: "Programming",
    description:
      "I write scripts in Python to automate tasks and build tools for developers. I also write scripts to analyze and evaluate the behavior and performance of computer systems and networks.",
  },
  {
    title: "Pentesting",
    description:
      "I take projects on bounty hunting and help other developers secure their web apps.",
  },
  {
    title: "System Analysis",
    description:
      "I analyze and evaluate the behavior and performance of computer systems and networks to improve their reliability and security, helping developers build secure web apps and systems.",
  },
];

const Specialization = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 text-gray-900">
      <div className="container mx-auto">
        <div className="text-left mb-10">
          <h3
            className="text-xl font-semibold uppercase text-gray-600"
            data-aos="fade-right"
          >
            <i className="fas fa-users-cog mr-2"></i> Services
          </h3>
          <h2 className="text-4xl font-bold">
            <span className="text-gray-800">My </span>
            <span className="text-green-500">Specialization</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
              data-aos="fade-up"
            >
              <h5 className="text-lg font-semibold text-gray-800 mb-3">
                {spec.title}
              </h5>
              <p className="text-gray-600 text-sm">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialization;
