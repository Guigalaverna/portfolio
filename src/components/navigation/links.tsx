interface LinksProps {
  className?: string;
}

export function Links(props: LinksProps) {
  return (
    <nav className={props.className}>
      <ul className="text-2xl space-y-5">
        <li>
          <a
            href="#home"
            className="relative after:block after:w-0 after:absolute after:bg-slate-800 after:h-1 hover:after:w-full hover:after:animate-increase-width"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about-me"
            className="relative after:block after:w-0 after:absolute after:bg-slate-800 after:h-1 hover:after:w-full hover:after:animate-increase-width"
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="relative after:block after:w-0 after:absolute after:bg-slate-800 after:h-1 hover:after:w-full hover:after:animate-increase-width"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className="relative after:block after:w-0 after:absolute after:bg-slate-800 after:h-1 hover:after:w-full hover:after:animate-increase-width"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
