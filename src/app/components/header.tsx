import { Menu } from "lucide-react";

export function Header() {
  return (
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
  );
}
