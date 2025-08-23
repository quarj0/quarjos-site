import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { BiMailSend } from "react-icons/bi";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const contacts = [
  {
    icon: <PhoneIcon className="h-12 w-12 text-blue-400 mb-2" />,
    title: "Phone & Mobile",
    details: ["+233 559 537 405", "+233 503 206 053"],
  },
  {
    icon: <BiMailSend className="h-12 w-12 text-gray-200 mb-2" />,
    title: "Email & Website",
    details: [
      "owusuansahkwadwo24@gmail.com",
      <Link
        key="portfolio"
        href="https://quarjos-site.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 text-gray-400"
      >
        QUARJO PORTFOLIO
      </Link>,
    ],
  },
  {
    icon: <HiLocationMarker className="h-12 w-12 text-red-500 mb-2" />,
    title: "Address",
    details: ["Kumasi, Ghana", "Ejisu-Ashanti"],
  },
  {
    icon: <FaInstagram className="h-12 w-12 text-pink-500 mb-2" />,
    title: "Instagram",
    details: [
      <Link
        key="instagram"
        href="http://instagram.com/quarjowusu"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 text-gray-400"
      >
        @quarjowusu
      </Link>,
    ],
  },
  {
    icon: <FaTwitter className="h-12 w-12 text-blue-400 mb-2" />,
    title: "X",
    details: [
      <Link
        key="twitter"
        href="http://x.com/quarjowusu"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 text-gray-400"
      >
        @quarjowusu
      </Link>,
    ],
  },
  {
    icon: <FaLinkedin className="h-12 w-12 text-blue-600 mb-2" />,
    title: "LinkedIn",
    details: [
      <Link
        key="linkedin"
        href="http://linkedin.com/in/quarjo"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 text-gray-400"
      >
        @quarjo
      </Link>,
    ],
  },
  {
    icon: <FaGithub className="h-12 w-12 text-black mb-2" />,
    title: "GitHub",
    details: [
      <Link
        key="github"
        href="http://github.com/quarj0"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 text-gray-400"
      >
        @quarj0
      </Link>,
    ],
  },
  {
    icon: <FaWhatsapp className="h-12 w-12 text-green-400 mb-2" />,
    title: "WhatsApp",
    details: ["+233 595 603 554"],
  },
];

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-purple-950 text-white min-h-screen flex flex-col justify-center items-center px-6 py-16">
      <div className="max-w-6xl w-full text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Get in Touch</h2>
        <p className="text-blue-400 text-lg md:text-xl">
          Let&apos;s Work Together
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {contacts.map((contact, idx) => (
          <div
            key={idx}
            className="bg-gray-800/40 backdrop-blur-md p-6 rounded-xl flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            {contact.icon}
            <h3 className="font-semibold text-xl mb-2">{contact.title}</h3>
            {contact.details.map((detail, i) => (
              <p key={i} className="text-gray-400">
                {detail}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <hr className="border-gray-600 mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide uppercase">
          Owusu Ansah
        </h1>
        <hr className="border-gray-600 mt-4" />
      </div>
    </section>
  );
};

export default Contact;
