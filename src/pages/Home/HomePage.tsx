import Header from "../../layouts/Home/header.tsx";
import Footer from "../../layouts/Home/footer.tsx";

import Hero from "../Home/sections/Hero.tsx";
import Problem from "../Home/sections/Problem.tsx";
import Solution from "../Home/sections/Solution.tsx";
import Features from "../Home/sections/Features.tsx";
import Demo from "../Home/sections/Demo.tsx";
import Benefits from "../Home/sections/Benefits.tsx";
import CTA from "../Home/sections/CTA.tsx";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Demo />
      <Benefits />
      <CTA />
      <Footer />
    </>
  );
}
