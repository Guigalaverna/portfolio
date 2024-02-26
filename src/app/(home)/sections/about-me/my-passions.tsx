"use client";

export function MyPassions() {
  const images = [
    "https://images.unsplash.com/photo-1432107294469-414527cb5c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
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
            <span className="bg-red-500/50 px-1">origamis</span> with precision,{" "}
            <span className="bg-green-500/50 px-1">coding</span> innovative
            projects, and savoring the sweetness of a well-brewed{" "}
            <span className="bg-purple-500/50 px-1">cup of coffee</span>. Each
            of these activities brings me joy and fulfillment, allowing me to
            express my creativity and problem-solving skills.
          </p>
        </div>
      </article>
    </section>
  );
}
