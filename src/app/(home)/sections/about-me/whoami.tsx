"use client";

export function WhoAmI() {
  return (
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
            programming about 4-5 years when I decided be a frontend developer.
            I'm brazilian and have english as a second language.
          </p>

          <h4 className="font-medium">my goals</h4>
          <ul className="list-inside list-disc space-y-2">
            <li>get my first job</li>
            <li>student exchange in next year</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
