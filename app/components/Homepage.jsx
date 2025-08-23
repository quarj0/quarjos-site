import Image from "next/image";

const Homepage = () => {
  return (
    <div itemScope itemType="https://schema.org/Person">
      <meta property="name" content="Owusu Ansah" />
      <meta
        property="jobTitle"
        content="Software Developer | Aspiring Cybersecurity Analyst"
      />
      <meta
        property="description"
        content="Software developer and certified cybersecurity professional specializing in secure, scalable full-stack applications."
      />

      <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-purple-950 text-white flex flex-col">
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
          {/* Text Section */}
          <div className="max-w-lg text-center md:text-left mt-5">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4">
              I&apos;m Owusu Ansah
            </h1>
            <p className="text-blue-400 text-xs md:text-sm uppercase tracking-widest mb-6">
              Software Developer | Cybersecurity Analyst
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Software developer and certified cybersecurity professional
              specializing in building secure, scalable full-stack applications.
              Currently leading I.T & Software at Kumasi Hive, I enjoy exploring
              new technologies to create innovative, security-focused solutions.
            </p>
          </div>

          {/* Image */}
          <div className="mt-8 md:mt-0">
            <Image
              src={"/pic3.webp"}
              alt="Owusu Ansah"
              width={600}
              height={400}
              className="rounded-full shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
