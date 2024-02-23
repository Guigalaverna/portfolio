export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707385060909-34a3c220696a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707385060909-34a3c220696a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <main className="w-screen h-screen flex overflow-y-hidden">
      <aside className="m-28 w-[10vw] flex flex-col items-start text-slate-700 justify-between text-xl">
        <span>Guilherme Galaverna</span>

        <nav>
          <ul className="space-y-3">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about-me">About me</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </nav>

        <a href="#" className="text-gray-500">
          Close navigation
        </a>
      </aside>
      <section className="w-full overflow-y-auto flex flex-col items-start justify-start mr-28 scrollbar-hide">
        <main id="home" className="flex w-full  items-center justify-between">
          <aside className="flex flex-col gap-3">
            <span className="text-gray-500 text-3xl font-serif">
              frontend developer
            </span>
            <h1 className="text-slate-700 text-6xl font-serif">
              hey there, I'am Guilherme
            </h1>
            <span className="text-gray-500 text-2xl font-serif">
              just a guy with passion for technology, coffee and origami
            </span>
          </aside>

          <aside className="columns-2 gap-8 space-y-8">
            {images.map((image, i) => (
              <div
                key={i}
                className="w-[282px] h-[344px]"
                style={{
                  background: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </aside>
        </main>

        <main
          id="about-me"
          className="w-full mt-32 flex items-start justify-between"
        >
          <aside className="w-1/2 h-1/2">
            <span className="text-gray-500 text-3xl font-serif">about me</span>
            <h1 className="text-slate-700 text-6xl font-serif">
              who is Guilherme?
            </h1>

            <span className="text-gray-500 text-2xl font-serif">
              <i>"Hello, how you doin'?"</i>
            </span>
          </aside>

          <aside className="space-y-3 w-1/2 h-1/2 overflow-y-auto scrollbar-hide ">
            <p className="text-xl leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
              impedit molestiae. Cumque qui iusto necessitatibus excepturi,
              natus provident dolorum? Commodi reprehenderit molestiae rem
              quidem voluptates sequi veniam consequatur voluptatem error.
            </p>

            <p className="text-xl leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
              impedit molestiae. Cumque qui iusto necessitatibus excepturi,
              natus provident dolorum? Commodi reprehenderit molestiae rem
              quidem voluptates sequi veniam consequatur voluptatem error.
            </p>

            <p className="text-xl leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
              impedit molestiae. Cumque qui iusto necessitatibus excepturi,
              natus provident dolorum? Commodi reprehenderit molestiae rem
              quidem voluptates sequi veniam consequatur voluptatem error.
            </p>

            <p className="text-xl leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
              impedit molestiae. Cumque qui iusto necessitatibus excepturi,
              natus provident dolorum? Commodi reprehenderit molestiae rem
              quidem voluptates sequi veniam consequatur voluptatem error.
            </p>

            <p className="text-xl leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
              impedit molestiae. Cumque qui iusto necessitatibus excepturi,
              natus provident dolorum? Commodi reprehenderit molestiae rem
              quidem voluptates sequi veniam consequatur voluptatem error.
            </p>

            <p className="text-xl leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
              impedit molestiae. Cumque qui iusto necessitatibus excepturi,
              natus provident dolorum? Commodi reprehenderit molestiae rem
              quidem voluptates sequi veniam consequatur voluptatem error.
            </p>
          </aside>
        </main>
      </section>
    </main>
  );
}
