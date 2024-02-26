"use client";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ translateY: "-200%", opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="flex items-center justify-between"
    >
      <span className="text-base font-medium xl:text-lg">
        Guilherme Galaverna
      </span>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-9 text-sm xl:text-lg font-medium">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about-me">About me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          {/* <li>
              <a href="#b">Blog</a>
            </li> */}
        </ul>
      </nav>

      <button className="block md:hidden">
        <Menu size={20} />
      </button>
    </motion.header>
  );
}
