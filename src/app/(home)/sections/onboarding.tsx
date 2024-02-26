"use client";

export function Onboarding() {
  return (
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
  );
}
