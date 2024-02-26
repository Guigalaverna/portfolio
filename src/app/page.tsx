import { Onboarding } from "../components/sections/onboarding";

import { Header } from "../components/header";
import { AboutMeSection } from "../components/sections/about-me";

export default function Home() {
  return (
    <main className="px-5 py-12 text-gray-800 md:px-12 xl:px-60 xl:py-16 space-y-40">
      <Header />

      <Onboarding />
    </main>
  );
}
