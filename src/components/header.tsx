"use client";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "phosphor-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <section
            className="fixed inset-0 z-10 bg-black/60 w-screen h-screen"
            onClick={handleToggleIsOpen}
          >
            <motion.aside
              initial={{ translateX: "-100%", opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ translateX: "-100%", opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              className="h-full flex flex-col items-start justify-between w-[80vw] bg-slate-100 px-5 py-12"
            >
              <span className="text-base font-medium xl:text-lg">
                Guilherme Galaverna
              </span>

              <nav className="">
                <ul className="flex flex-col items-start gap-6 text-2xl font-medium">
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

              <button className="block md:hidden" onClick={handleToggleIsOpen}>
                <X size={20} />
              </button>
            </motion.aside>
          </section>
        )}
      </AnimatePresence>

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

        <button className="block md:hidden" onClick={handleToggleIsOpen}>
          <Menu size={20} />
        </button>
      </motion.header>
    </>
  );
}
