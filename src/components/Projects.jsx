import systemresponse from "../assets/sysanalyzer.png";

const Advantages = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      {/* Section Header */}
      <div className="text-left mb-8">
        <i className="fa fa-building text-xl uppercase text-blue-600 mb-2">
          Portfolio
        </i>
        <h3 className="text-3xl font-semibold">
          Featured <span className="text-green-500">Projects</span>
        </h3>
        <p className="text-base mt-4">
          Dive into a collection of projects that showcase my technical skills
          and creativity. These projects span web development, programming, and
          cybersecurity, providing a glimpse of my problem-solving abilities and
          innovative thinking.
        </p>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* System Analyser */}
        <div className="card border shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={systemresponse}
            alt="System Analyser"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold">System Analyser</h5>
            <p className="text-gray-600 mt-2">
              A Python script to evaluate system performance across platforms
              like Linux, Windows, and MacOS.
            </p>
            <ul className="list-disc pl-4 mt-3 text-sm">
              <li>URL response time measurement</li>
              <li>System update status</li>
              <li>Disk, memory, and CPU usage monitoring</li>
              <li>Network speed testing</li>
            </ul>
            <a
              href="https://github.com/quarj0/system-analyser"
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-green-500 text-white py-2 mt-4 rounded hover:bg-green-600 transition-colors"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Hostel Management */}
        <div className="card border shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="p-4">
            <h5 className="text-xl font-bold">Hostel Management</h5>
            <span className="text-red-500 text-sm">APIs Only</span>
            <p className="text-gray-600 mt-2">
              Backend APIs for managing hostel services built using Django Rest
              Framework.
            </p>
            <ul className="list-disc pl-4 mt-3 text-sm">
              <li>Authentication and Authorization</li>
              <li>Booking management</li>
              <li>Search and filter functionality</li>
            </ul>
            <a
              href="https://github.com/quarj0/hostel_management"
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-green-500 text-white py-2 mt-4 rounded hover:bg-green-600 transition-colors"
            >
              Private Repo
            </a>
          </div>
        </div>

        {/* Weloret Research Hub */}
        <div className="card border shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="p-4">
            <h5 className="text-xl font-bold">Weloret Research Hub</h5>
            <p className="text-gray-600 mt-2">
              A knowledge hub offering blogs, events, and resources to empower
              learning and skills.
            </p>
            <a
              href="https://weloret.com"
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-green-500 text-white py-2 mt-4 rounded hover:bg-green-600 transition-colors"
            >
              Check Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
