import Image from "next/image";
import MyImage from "../assets/images/optimized/plain pic4.webp";

const Homepage = () => {
  return (
    <div itemScope itemType="https://schema.org/Person">
      <meta property="name" content="Owusu Ansah" />
      <meta
        property="jobTitle"
        content="Software Engineer | Aspiring Cybersecurity Analyst"
      />
      <meta
        property="description"
        content="I am a software engineer and certified cybersecurity professional with a strong foundation in security principles."
      />
      <>
        <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-purple-950 text-white flex flex-col">
          <div className="flex-1 flex flex-col md:flex-row items-center justify-evenly px-6 md:px-12">
            <div className="max-w-lg text-center md:text-left mt-5">
              <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6 sm:mt-8">
                I&apos;m Owusu Ansah
              </h1>
              <p className="text-blue-400 text-xs md:text-sm uppercase tracking-widest mb-6">
                Sofware Engineer | Aspiring Cybersecurity Analyst
              </p>
              <p className="text-gray-400 leading-relaxed">
                I am a software engineer and certified cybersecurity
                professional with a strong foundation in security principles.
                Currently serving as the I.T & Software Lead at Kumasi Hive, I
                specialize in building secure, scalable full-stack applications
                and providing technical training. With a passion for both
                cybersecurity and software development, I enjoy exploring
                emerging technologies and applying them to create innovative,
                security-focused solutions.
              </p>
            </div>

            {/* Image */}
            <div className="mt-8 md:mt-0">
              <Image
                src={MyImage}
                alt="owusu's picture"
                width={600}
                height={400}
                className="rounded-full shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Homepage;
