import { motion } from "framer-motion";

export function type(text: string, duration = 0.25) {
  return text.split(" ").map((el, i) => (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: duration,

        delay: i / 10 + 0.5,
      }}
      key={i}
    >
      {el}{" "}
    </motion.span>
  ));
}
