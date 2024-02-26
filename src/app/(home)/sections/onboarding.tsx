"use client";

import { type } from "@/lib/type";
import { motion } from "framer-motion";

export function Onboarding() {
  return (
    <section
      id="onboarding"
      className="mt-16  flex flex-col items-center gap-20 md:flex-row md:justify-between md:mt-16"
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
