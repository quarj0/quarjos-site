const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black text-white flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row items-center justify-evenly px-6 md:px-12">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            I&apos;m Owusu Ansah
          </h1>
          <p className="text-blue-400 text-xs md:text-sm uppercase tracking-widest mb-6">
            Software Developer | Aspiring Cybersecurity Analyst
          </p>
          <p className="text-gray-400 leading-relaxed">
            I am a software developer with a passion for building secure and
            scalable applications. I am interested in cybersecurity and I am
            currently learning more about it. I am also a tech enthusiast who
            loves to explore new technologies and tools.
          </p>
        </div>

        {/* Image */}
        <div className="mt-8 md:mt-0">
          <img
            src="https://avatars.githubusercontent.com/u/54241472?v=4"
            alt="Owusu Ansah"
            className="w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] h-auto object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
