"use client";

import { useIsVisible } from "@/hooks/useIsVisible";
import { Instagram } from "lucide-react";
import { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707385060909-34a3c220696a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707385060909-34a3c220696a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function Onboarding() {
  const ref = useRef<HTMLElement | undefined>();
  const isVisible = useIsVisible(ref);

  return (
    <section
      //@ts-expect-error
      ref={ref}
      id="#home"
      className="lg:flex 2xl:h-full lg:items-center xl:justify-around lg:flex-row"
    >
      <div id="onboarding" className="mt-12 lg:flex lg:flex-col lg:gap-5">
        <span
          className={`text-xl lg:text-3xl font-serif text-gray-500 ${
            isVisible && "animate-[slideIn_2s]"
          }`}
        >
          frontend developer
        </span>
        <h1
          className={`text-3xl lg:text-5xl font-serif text-slate-600 ${
            isVisible && "animate-[slideIn_2.5s]"
          }`}
        >
          heyy there, I'm Guilherme
        </h1>
        <span
          className={`text-xl lg:text-3xl font-serif text-gray-500 ${
            isVisible && "animate-[slideIn_3s]"
          }`}
        >
          just a guy with passion for coding, coffee and origami
        </span>
      </div>

      <div className="columns-2 gap-5 space-y-5 mt-10 lg:mt-0 relative">
        <a
          href="https://instagram.com/galavernag"
          target="_blank"
          className="absolute z-10 hover:brightness-90 transition-all hover:cursor-pointer flex items-center gap-3 right-10 bottom-10 bg-white px-3 py-2 font-medium text-slate-600"
        >
          <Instagram size={20} />
          Follow me on Instagram
        </a>

        {images.map((img, i) => (
          <div
            key={i}
            style={{
              background: `url(${img})`,
              backgroundSize: "cover",
            }}
            className="block w-[160px] h-[200px] lg:w-[282px] lg:h-[355px] bg-red-300 hover:scale-105 transition-transform animate-[invert-slideIn_2.5s]"
          >
            {" "}
          </div>
        ))}
      </div>
    </section>
  );
}
