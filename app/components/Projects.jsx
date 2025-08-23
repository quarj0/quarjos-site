"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Weloret Research Hub | 2024",
    description:
      "Developed an all-in-one research platform featuring blogs, event listings, curated resources, funding opportunities, and IT training to support knowledge sharing, innovation, and professional growth in the research community.",
    link: "https://weloret.com",
  },
  {
    title: "System Analyzer | 2023",
    description:
      "Developed a cross-platform system analyzer tool for monitoring performance metrics, network traffic, and OS updates, with real-time visualization and detailed reports for optimized system reliability.",
    image: "/SystemAnalyzer.webp"
  },
  {
    title: "RealCPO | 2024",
    description:
      "Redesigned the RealCPO website with ReactJS, creating a clean, modern interface and intuitive navigation to better showcase CPO services and enhance user engagement.",
    link: "https://realcpo.vercel.app",
  },
  {
    title: "Kumasi Hive Website | 2024",
    description:
      "Developed the Kumasi Hive website with a clean, modern design and intuitive navigation to showcase its technology, innovation, and startup support services.",
    link: "https://kumasihive.com",
  },
  {
    title: "VoteEasy | 2025",
    description:
      "VoteEasy is an all-in-one platform for polls, nominations, and ticket management. It allows users to create polls, manage events, sell tickets, and run nominations seamlessly. Designed for competitions, conferences, and community events, VoteEasy offers secure voting, streamlined ticketing, and a smooth, user-friendly experience.",
    link: "https://livevotenow.com",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Selected Projects
          </h2>
          <div className="mt-3 w-20 h-1 bg-blue-500"></div>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/40 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow">
                  {project.description}
                </p>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Visit Project →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
