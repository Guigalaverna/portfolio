import { Menu } from "lucide-react";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1432107294469-414527cb5c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <main className="px-5 py-12 text-gray-800 md:px-12 xl:px-60 xl:py-16">
      <header className="flex items-center justify-between">
        <span className="text-base font-medium xl:text-lg">
          Guilherme Galaverna
        </span>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-9 text-sm xl:text-lg font-medium">
            <li>
              <a href="#onboarding">Home</a>
            </li>
            <li>
              <a href="#about-me">About me</a>
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
      </header>

      <section
        id="onboarding"
        className="mt-16 flex flex-col items-center gap-20 md:flex-row md:justify-between md:mt-16"
      >
        <article className="xl:max-w-5xl">
          <h1 className="text-xl font-medium xl:text-4xl">
            heyy there, I'm Guilherme
          </h1>
          <p className="text-sm mt-4 font-light leading-[1.6] xl:text-lg xl:max-w-2xl">
            just a cool boy with love in{" "}
            <span className="bg-teal-500/50 px-1">software engineering</span>,
            coffee, origami and a nice tv series
          </p>
        </article>

        <img
          src="https://github.com/Guigalaverna.png"
          className="rounded-full size-40 grayscale xl:size-80"
          alt="Guilherme's picture"
        />
      </section>

      <section
        id="about-me"
        className="about-me flex flex-col items-center mt-16 space-y-28"
      >
        <h2 className="text-2xl mb-16 font-medium xl:text-4xl">about me</h2>

        <section className="flex w-full flex-col items-center xl:flex-row xl:justify-between">
          <img
            src="https://images.unsplash.com/photo-1708623460319-3f1d8865778a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-52 object-cover rounded-lg xl:w-1/2 xl:h-[344px] xl:aspect-square"
            alt=""
          />

          <article className="xl:max-w-xl">
            <h3 className="my-10 text-xl font-medium xl:text-4xl xl:my-4">
              who am i?
            </h3>
            <div className="leading-[1.6] font-light space-y-10 xl:space-y-4">
              <p>
                My name is Guilherme Galaverna. Now, I am{" "}
                {new Date().getFullYear() - 2006} years old. I started in
                programming about 4-5 years when I decided be a frontend
                developer. I'm brazilian and have english as a second language.
              </p>

              <h4 className="font-medium">my goals</h4>
              <ul className="list-inside list-disc space-y-2">
                <li>get my first job</li>
                <li>student exchange in next year</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="w-full xl:flex xl:flex-row-reverse xl:items-center xl:justify-between">
          <div className="grid grid-cols-2 grid-rows-2 gap-5 w-full xl:w-1/2">
            {images.map((img, i) => {
              return (
                <img
                  key={i}
                  src={img}
                  className="w-full h-full rounded-lg object-contain snap-start"
                />
              );
            })}
          </div>

          <article className="mt-16 xl:max-w-xl xl:pr-48">
            <h3 className="text-xl flex items-center gap-3 font-medium xl:text-4xl xl:my-4">
              my passion <span className="text-lg">❤️</span>
            </h3>

            <div className="leading-[1.6] font-light space-y-10">
              <p className="mt-4">
                I enjoy folding animal{" "}
                <span className="bg-red-500/50 px-1">origamis</span> with
                precision, <span className="bg-green-500/50 px-1">coding</span>{" "}
                innovative projects, and savoring the sweetness of a well-brewed{" "}
                <span className="bg-purple-500/50 px-1">cup of coffee</span>.
                Each of these activities brings me joy and fulfillment, allowing
                me to express my creativity and problem-solving skills.
              </p>
            </div>
          </article>
        </section>

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
              <strong className="font-medium">React ecosystem</strong>,
              including Next.js, TailwindCSS, and TypeScript. Additionally, I am
              proficient in consuming RESTful APIs to integrate dynamic data
              into my applications. Furthermore, I have familiarity with Next.js
              Server Components and possess intermediate knowledge of UNIX
              systems, enabling me to operate in more complex development
              environments and leverage powerful tools available in these
              systems.
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
