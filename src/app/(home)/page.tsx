import { Onboarding } from "./sections/onboarding";
import { WhoAmI } from "./sections/about-me/whoami";
import { MyPassions } from "./sections/about-me/my-passions";
import { Techs } from "./sections/about-me/techs";
import { Header } from "../components/header";

export default function Home() {
  return (
    <main className="px-5 py-12 text-gray-800 md:px-12 xl:px-60 xl:py-16">
      <Header />

      <Onboarding />

      <section
        id="about-me"
        className="about-me flex flex-col items-center mt-16 space-y-28"
      >
        <h2 className="text-2xl mb-16 font-medium xl:text-4xl">about me</h2>

        <WhoAmI />

        <MyPassions />

        <Techs />
      </section>
    </main>
  );
}
