import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <motion.section
        id="about"
        className="container mx-auto p-4"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>Brief introduction about yourself.</p>
      </motion.section>
      <motion.section
        id="projects"
        className="container mx-auto p-4"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="project mb-4">
            <h3 className="text-xl font-semibold">Project Title 1</h3>
            <p>Project description.</p>
            <a href="#" className="btn">
              Live Demo
            </a>
            <a href="#" className="btn">
              GitHub Repo
            </a>
          </div>
          <div className="project mb-4">
            <h3 className="text-xl font-semibold">Project Title 2</h3>
            <p>Project description.</p>
            <a href="#" className="btn">
              Live Demo
            </a>
            <a href="#" className="btn">
              GitHub Repo
            </a>
          </div>
          {/* Add more projects as needed */}
        </div>
      </motion.section>
      <motion.section
        id="skills"
        className="container mx-auto p-4"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          {/* Add more skills as needed */}
        </ul>
      </motion.section>
      <motion.section
        id="contact"
        className="container mx-auto p-4"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <form>
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="block w-full p-2 border border-gray-300 rounded mb-4"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </motion.section>
    </Layout>
  );
}
