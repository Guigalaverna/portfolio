import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col xl:flex-row">
      <Navigation />

      <section className="px-12 xl:px-0 xl:w-full overflow-y-auto scrollbar-hide space-y-[25vh] 2xl:max-w-[1800px] 2xl:mx-auto">
        <section
          id="#home"
          className="lg:flex 2xl:h-full lg:items-center xl:justify-around lg:flex-row"
        >
          <div className="mt-12 lg:flex lg:flex-col lg:gap-5">
            <span className="text-xl lg:text-3xl font-serif text-gray-500">
              frontend developer
            </span>
            <h1 className="text-3xl lg:text-5xl font-serif text-slate-600">
              heyy there, I'm Guilherme
            </h1>
            <span className="text-xl lg:text-3xl font-serif text-gray-500">
              just a body with passion for coding, coffee and origami
            </span>
          </div>

          <div className="columns-2 gap-3 space-y-3 mt-10 lg:mt-0 ">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="block w-[160px] h-[200px] lg:w-[282px] lg:h-[355px] bg-red-300">
                {i}
              </div>
            ))}
          </div>
        </section>

        <section
          id="#about-me"
          className="xl:flex lg:items-center xl:justify-around lg:flex-row"
        >
          <div className="mt-12 lg:flex lg:flex-col lg:gap-5">
            <span className="text-xl lg:text-3xl font-serif text-gray-500">
              who am i?
            </span>
            <h1 className="text-3xl lg:text-5xl font-serif text-slate-600">
              About me
            </h1>
            <span className="text-xl lg:text-3xl font-serif text-gray-500">
              <i>"Heyy, how you doin'?"</i>
            </span>
          </div>

          <div className="mt-10 text-lg space-y-3 tracking-tight leading-[1.6] text-slate-600 max-w-3xl">
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

        <section
          id="#projects"
          className="xl:flex xl:items-center xl:justify-around xl:flex-row"
        >
          <div className="mt-12 lg:flex lg:flex-col lg:gap-5">
            <span className="text-xl lg:text-3xl font-serif text-gray-500">
              awesome things that I've made 🌟
            </span>
            <h1 className="text-3xl lg:text-5xl font-serif text-slate-600">
              Projects
            </h1>
            <span className="text-xl lg:text-3xl font-serif text-gray-500">
              <i className="flex items-center gap-3">
                E = mc²{" "}
                <span className="text-lg">(e: energy / m: my / c: coffee)</span>
              </i>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-5 p-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="flex flex-col p-3 border-zinc-300 border-[1px] group hover:scale-105 transition-all hover:bg-slate-800 focus:bg-slate-800">
                <img src="https://placehold.co/200x100" alt="" />

                <h3 className="mt-3 text-xl group-hover:text-white text-slate-600 after:pl-2 after:content-['↗']">
                  move.it
                </h3>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
