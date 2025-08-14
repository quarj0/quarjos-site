const CertificationSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-purple-950 text-white min-h-screen flex justify-center items-center px-4 md:px-6 py-12">
      <div className="max-w-5xl w-full">
        {/* /* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-normal mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">
            Cerfications & Achievements
          </h2>
          <p
            className="text-4xl md:text-5xl lg:text-7xl md:ml-36 font-black text-transparent mt-4 md:mt-0"
            style={{ WebkitTextStroke: "1px #E5E7EB" }}
          >
            2020 - 2025
          </p>
        </div>
        <div className="w-1/4 h-2 bg-blue-500 mb-12"></div>
        {/* Cerfications List */}
        <div className="space-y-8">
          {/* Cerfications Item */}
          {[
            {
              company: "Cyber Security Analyst Professional",
              cert: "",
              period: "",
              description: "IBM",
            },
            {
              company: "Cyber Threat Intelligence",
              cert: "",
              period: "",
              description: "IBM",
            },

            {
              company: "Penetration Testing, Incident Response, and Forensic",
              cert: "",
              period: "",
              description: "IBM",
            },
            {
              company: "Cyber Comppliance Framework & System Administration",
              role: "",
              period: "",
              description: "IBM",
            },
            {
              company: "Capture the Flag Challenge",
              cert: "CyberTeq",
              period: "2022",
              description:
                "Identified and eploited vulnerabilities in 3 Linux and a Window systems",
            },
            {
              company: "Cyber Security Capstone",
              cert: "IBM",
              period: "2023",
              description: "Breach Response Case Studies",
            },
            {
              company: "Security Principles",
              cert: "",
              period: "",
              description: "ISC2",
            },
          ].map((Cerfications, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:items-start"
            >
              <div className="lg:w-1/3">
                <h4 className="text-lg font-semibold text-white">
                  {Cerfications.company}
                </h4>
                <p className="text-gray-400">
                  {Cerfications.cert} {Cerfications.period}
                </p>
              </div>
              <div className="lg:w-2/3 lg:pl-6 mt-4 lg:mt-0">
                <p className="text-gray-400 leading-relaxed">
                  {Cerfications.description}
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
