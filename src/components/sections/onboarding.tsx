"use client";

import { type } from "@/lib/type";
import { motion } from "framer-motion";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";

export function Onboarding() {
  return (
    <section
      id="onboarding"
      className="mt-16 flex flex-col items-center gap-20 md:flex-row md:justify-between md:mt-16"
    >
      <article className="xl:max-w-5xl">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
          className="text-xl font-medium xl:text-4xl"
        >
          {type("heyy there, I'm Guilherme")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
          className="text-sm mt-4 font-light leading-[1.6] xl:text-lg xl:max-w-2xl"
        >
          {type(
            "just a cool boy with love in software engineering, coffee, origami and a nice tv series"
          )}
        </motion.p>

        <div className="mt-5">
          <ul className="flex items-center gap-3">
            <li className="bg-slate-200 p-2 rounded-xl text-slate-500">
              <a target="_blank" href="https://instagram.com/galavernag">
                <InstagramLogo size={26} />
              </a>
            </li>
            <li className="bg-slate-200 p-2 rounded-xl text-slate-500">
              <a target="_blank" href="https://github.com/Guigalaverna">
                <GithubLogo size={26} />
              </a>
            </li>
            <li className="bg-slate-200 p-2 rounded-xl text-slate-500">
              <a target="_blank" href="https://twitter.com/galavernag">
                <TwitterLogo size={26} />
              </a>
            </li>
            <li className="bg-slate-200 p-2 rounded-xl text-slate-500">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/galavernag/#"
              >
                <LinkedinLogo size={26} />
              </a>
            </li>
          </ul>
        </div>
      </article>

      <motion.img
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          type: "spring",
          duration: 4,
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        src="https://github.com/Guigalaverna.png"
        className="rounded-full size-40 grayscale xl:size-80"
        alt="Guilherme's picture"
      />
    </section>
  );
}
