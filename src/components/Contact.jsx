import { PhoneIcon } from "@heroicons/react/24/outline";
import { BiMailSend } from "react-icons/bi";
import { FaGithubAlt, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-800 to-black text-white px-6">
      <div className="text-center p-8 max-w-4xl w-full">
        {/* Header Section */}
        <h2 className="text-3xl font-bold mb-2">GET IN TOUCH</h2>
        <p className="text-blue-400 text-lg mb-8">Let&apos;s Work Together</p>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone & Mobile */}
          <div className="flex flex-col items-center">
            <PhoneIcon className="h-12 w-12 text-blue-400 mb-2" />
            <h3 className="font-semibold text-xl">Phone & Mobile</h3>
            <p className="text-gray-400">+233 559 537 405</p>
            <p className="text-gray-400">+233 503 206 053</p>
          </div>

          {/* Email & Website */}
          <div className="flex flex-col items-center">
            <BiMailSend className="h-12 w-12 text-blue-400 mb-2" />
            <h3 className="font-semibold text-xl">Email & Website</h3>
            <p className="text-gray-400">owusuansahkwadwo24@gmail.com</p>
            <p className="text-gray-400">quarjos-site.vercel.app</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center">
            <HiLocationMarker className="h-12 w-12 text-blue-400 mb-2" />
            <h3 className="font-semibold text-xl">Address</h3>
            <p className="text-gray-400">Kumasi, Ghana</p>
            <p className="text-gray-400">Ejisu-Ashanti</p>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center">
            <FaInstagram className="h-12 w-12 text-blue-400 mb-2" />
            <h3 className="font-semibold text-xl">Instagram</h3>
            <p className="text-gray-400">@quarjowusu</p>
          </div>

          <div className="flex flex-col items-center">
            <FaTwitter className="h-12 w-12 text-blue-400 mb-2" />
            <h3 className="font-semibold text-xl">X</h3>
            <p className="text-gray-400">@quarjowusu</p>
          </div>

          <div className="flex flex-col items-center">
            <FaLinkedin className="h-12 w-12 text-blue-400 mb-2" />
            <h3 className="font-semibold text-xl">LinkedIn</h3>
            <p className="text-gray-400">@quarjowusu</p>
          </div>

          <div className="flex flex-col items-center">
            <FaGithubAlt className="h-12 w-12 text-blue-400 mb-2" />
            <h3 className="font-semibold text-xl">Github</h3>
            <p className="text-gray-400">@quarj0</p>
          </div>

          <div className="flex flex-col items-center">
            <FaWhatsapp className="h-12 w-12 text-blue-400 mb-2" />
            <h3 className="font-semibold text-xl">WhatsApp</h3>
            <p className="text-gray-400">+233 595 603 554</p>
          </div>
        </div>

        <div className="mt-12">
          <hr className="border-gray-600 mb-4" />
          <h1 className="text-2xl font-bold tracking-wide text-center uppercase">
            Owusu Ansah
          </h1>
          <hr className="border-gray-600 mb-4 mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
