"use client";
import { useIsVisible } from "@/hooks/useIsVisible";
import { useRef } from "react";

export function AboutMe() {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <section
      //@ts-expect-error
      ref={ref}
      id="#about-me"
      className="xl:flex lg:items-center xl:justify-around lg:flex-row"
    >
      <div className="mt-12 lg:flex lg:flex-col lg:gap-5">
        <span
          className={`text-xl lg:text-3xl font-serif text-gray-500 ${
            isVisible && "animate-[slideIn_2s]"
          } `}
        >
          who am i?
        </span>
        <h1
          className={`text-3xl lg:text-5xl font-serif text-slate-600 ${
            isVisible && "animate-[slideIn_2.5s]"
          } `}
        >
          About me
        </h1>
        <span
          className={`text-xl lg:text-3xl font-serif text-gray-500 ${
            isVisible && "animate-[slideIn_3s]"
          } `}
        >
          <i>"Heyy, how you doin'?"</i>
        </span>
      </div>

      <div
        className={`mt-10 text-lg space-y-3 tracking-tight leading-[1.6] text-slate-600 max-w-3xl ${
          isVisible && "animate-[invert-slideIn_2.5s]"
        }`}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          dicta debitis repellendus minus perspiciatis possimus omnis in
          repellat illum, qui delectus, a accusamus dolorum. Dolore suscipit
          blanditiis accusamus praesentium nobis?
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          dicta debitis repellendus minus perspiciatis possimus omnis in
          repellat illum, qui delectus, a accusamus dolorum. Dolore suscipit
          blanditiis accusamus praesentium nobis?
        </p>
      </div>
    </section>
  );
}
