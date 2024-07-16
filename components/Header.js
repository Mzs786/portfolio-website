import { motion } from "framer-motion";

const Header = () => (
  <motion.header
    className="bg-gray-800 text-white p-4"
    initial={{ y: -250 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 120 }}
  >
    <div className="container mx-auto flex justify-between">
      <h1 className="text-xl">Your Name</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </motion.header>
);

export default Header;
