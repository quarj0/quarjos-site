import "aos/dist/aos.css";

const workExperience = [
  {
    title: "Software Developer",
    company: "Full Stack Developer - Kumasi Hive",
    duration: "2024 - Present",
    tasks: [
      "Developing web applications using React and Django.",
      "Building APIs using Django and MySQL or PostgreSQL.",
      "Creating and designing user interfaces.",
      "Testing and debugging applications.",
    ],
  },
  {
    title: "IT Support",
    company: "Faculty of Law - University of Cape Coast",
    duration: "2023 - 2024",
    tasks: [
      "Providing technical support to staff and students.",
      "Assisting in the installation of new hardware and software.",
      "Managing the faculty's network.",
      "Maintaining and troubleshooting computer systems.",
    ],
  },
];

const Work = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <div className="text-center mb-8">
        <i
          data-aos="fade-right"
          className="fa fa-briefcase text-2xl text-primary mb-2 uppercase"
        >
          experience
        </i>
        <h2 className="text-3xl font-bold">
          Work &<span className="text-green-500"> Experience</span>
        </h2>
      </div>
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-300"></div>

        {/* Timeline Sections */}
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Bead */}
              <div className="w-4 h-4 bg-blue-500 rounded-full mt-1.5"></div>
              {/* Content */}
              <div
                data-aos="fade-up"
                className="bg-white p-6 rounded-lg shadow-md w-full"
              >
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <span className="block text-gray-500">{job.company}</span>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {job.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
                <small className="block mt-3 text-sm text-gray-500">
                  {job.duration}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
