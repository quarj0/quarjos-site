const certifications = [
  {
    title: "Cyber Security Analyst Professional",
    issuer: "IBM",
    period: "",
    description: "",
  },
  {
    title: "Cyber Threat Intelligence",
    issuer: "IBM",
    period: "",
    description: "",
  },
  {
    title: "Penetration Testing, Incident Response, and Forensic",
    issuer: "IBM",
    period: "",
    description: "",
  },
  {
    title: "Cyber Compliance Framework & System Administration",
    issuer: "IBM",
    period: "",
    description: "",
  },
  {
    title: "Capture the Flag Challenge",
    issuer: "CyberTeq",
    period: "2022",
    description:
      "Identified and exploited vulnerabilities in 3 Linux and 1 Windows system.",
  },
  {
    title: "Cyber Security Capstone",
    issuer: "IBM",
    period: "2023",
    description: "Breach Response Case Studies",
  },
  {
    title: "Security Principles",
    issuer: "ISC2",
    period: "",
    description: "",
  },
];

const CertificationSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-purple-950 text-white py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            Certifications & Achievements
          </h2>
          <p
            className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent mt-4 md:mt-0"
            style={{ WebkitTextStroke: "1px #E5E7EB" }}
          >
            2020 - 2025
          </p>
        </div>
        <div className="w-20 h-1 bg-blue-500 mb-12"></div>

        {/* Certifications List */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800/40 backdrop-blur-md p-6 rounded-xl flex flex-col lg:flex-row gap-4 lg:gap-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="lg:w-1/3">
                <h4 className="text-lg md:text-xl font-semibold text-white">
                  {cert.title}
                </h4>
                <p className="text-gray-400">
                  {cert.issuer} {cert.period && `| ${cert.period}`}
                </p>
              </div>
              <div className="lg:w-2/3">
                <p className="text-gray-300 leading-relaxed">
                  {cert.description || "-"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
