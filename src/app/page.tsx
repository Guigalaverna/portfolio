import { Menu } from "lucide-react";

export default function Home() {
  return (
    <main className="px-5 py-12 text-gray-800 md:px-12 xl:px-60 xl:py-16">
      <header className="flex items-center justify-between">
        <span className="text-base font-medium xl:text-lg">
          Guilherme Galaverna
        </span>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-9 text-sm xl:text-lg font-medium">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
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
            Lorem ipsum dolor sit amet,{" "}
            <span className="bg-red-500/65 px-1">consectetur</span> adipiscing
            elit. Fusce ut pellentesque lorem. Vivamus finibus gravida ante.
            Duis molestie lacus nec{" "}
            <span className="bg-teal-500/65 px-1">sollicitudin</span> facilisis.
            Vivamus convallis gravida diam, a vulputate elit tristique.
          </p>
        </article>

        <img
          src="https://github.com/Guigalaverna.png"
          className="rounded-full size-40 grayscale xl:size-80"
          alt="Guilherme's picture"
        />
      </section>
    </main>
  );
}
