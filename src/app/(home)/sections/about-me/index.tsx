"use client";
import { MyPassions } from "./my-passions";
import { WhoAmI } from "./whoami";
import { Techs } from "./techs";
import { type } from "@/lib/type";

export function AboutMeSection() {
  return (
    <section
      id="about-me"
      className="about-me flex flex-col items-center mt-16 space-y-28"
    >
      <h2 className="text-2xl mb-16 font-medium xl:text-4xl">
        {type("about me")}
      </h2>

      <WhoAmI />

      <MyPassions />

      <Techs />
    </section>
  );
}
