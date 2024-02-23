"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Links } from "./links";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleNavigator() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="p-12 flex items-center justify-between xl:flex-col xl:items-start xl:h-screen xl:w-[15vw]">
      <button
        className="bg-transparent text-[0px] outline-none xl:hidden"
        onClick={handleToggleNavigator}
      >
        <Menu size={20} className="text-slate-600" />
      </button>
      <span className="text-slate-600 font-medium">Guilherme Galaverna</span>

      {isOpen && (
        <section
          className="fixed inset-0 w-screen h-screen bg-black/30"
          onClick={handleToggleNavigator}
        >
          <aside className="bg-slate-50 w-[80vw] h-screen p-12 flex flex-col items-start justify-between text-slate-600">
            <span></span>

            <Links />
            <button className="text-xl">Close navigation</button>
          </aside>
        </section>
      )}

      <nav className="hidden xl:flex text-slate-600">
        <ul className="text-2xl space-y-5">
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
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>

      <button className="hidden xl:block text-xl text-slate-600">
        Close navigation
      </button>
    </header>
  );
}
