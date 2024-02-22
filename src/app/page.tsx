export default function Home() {
  return (
    <main className="p-28 w-screen h-screen">
      <aside className="h-full flex flex-col items-start justify-between text-xl">
        <span>Guilherme Galaverna</span>

        <nav>
          <ul className="space-y-3">
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Resume</li>
          </ul>
        </nav>

        <a href="#" className="text-gray-500">
          Close navigation
        </a>
      </aside>
      <section></section>
    </main>
  );
}
