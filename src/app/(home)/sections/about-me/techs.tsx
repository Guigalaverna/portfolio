"use client";

export function Techs() {
  return (
    <section className="flex w-full flex-col items-center xl:flex-row xl:justify-between">
      <img
        src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-52 object-cover rounded-lg xl:w-1/2 xl:h-[344px] xl:aspect-square"
        alt=""
      />

      <article className="xl:max-w-xl">
        <h3 className="my-10 text-xl font-medium xl:text-4xl xl:my-4">
          my stack
        </h3>
        <div className="leading-[1.6] font-light space-y-10 xl:space-y-4">
          As a frontend developer, I utilize the entire{" "}
          <strong className="font-medium">React ecosystem</strong>, including
          Next.js, TailwindCSS, and TypeScript. Additionally, I am proficient in
          consuming RESTful APIs to integrate dynamic data into my applications.
          Furthermore, I have familiarity with Next.js Server Components and
          possess intermediate knowledge of UNIX systems, enabling me to operate
          in more complex development environments and leverage powerful tools
          available in these systems.
        </div>
      </article>
    </section>
  );
}
