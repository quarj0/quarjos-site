import "aos/dist/aos.css";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start">
          {/* Icon Section */}
          <div className="flex-shrink-0 text-blue-500 md:w-1/5 text-center md:text-left mb-4 md:mb-0">
            <i
              data-aos="fade-right"
              className="fa fa-user text-3xl uppercase font-bold"
            >
              {" "}
              About
            </i>
          </div>

          {/* Content Section */}
          <div className="md:w-4/5">
            <h3
              className="text-2xl font-semibold text-gray-700 mb-6"
              data-aos="fade-up"
            >
              <span>Every day is a new opportunity to</span>{" "}
              <span className="text-green-500">learn something new</span>.
            </h3>
            <p
              data-aos="fade-left"
              className="text-lg leading-relaxed mb-4 text-gray-600"
            >
              Hello, I am{" "}
              <span className="text-green-500 font-semibold">
                Owusu Ansah Kwadwo
              </span>
              , a software developer based in Kumasi, Ghana. I have a
              Bachelor&apos;s degree in Information Technology from the
              University of Cape Coast. I have experience in building web
              applications using modern technologies like React, Python, and
              PostgreSQL or MySQL. I am always looking for new opportunities to
              learn and grow as a developer.
            </p>
            <p
              data-aos="fade-left"
              className="text-lg leading-relaxed text-gray-600"
            >
              I am also an aspiring Cyber Security Analyst. I have a keen
              interest in Cyber Security and I am currently studying for the
              CompTIA Security+ certification. I am also looking forward to
              learning more about Cyber Security and obtaining more
              certifications in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
