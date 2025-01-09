const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-purple-950">
      <footer className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-4 border-t border-gray-600">
        <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-0">
          Portfolio &copy; {new Date().getFullYear()}
        </p>
        <div className="h-[2px] w-16 md:w-24 bg-gray-500"></div>
      </footer>
    </div>
  );
};
export default Footer;
