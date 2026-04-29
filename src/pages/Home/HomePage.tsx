import Header from "../../layouts/Home/header.tsx";
import Footer from "../../layouts/Home/footer.tsx";

import Hero from "../Home/sections/Hero.tsx";
import Problem from "../Home/sections/Problem.tsx";
import Solution from "../Home/sections/Solution.tsx";
import Benefits from "../Home/sections/Benefits.tsx";
import CTA from "../Home/sections/CTA.tsx";

import { ScrollReveal } from "../../components/Reveal.tsx";

export default function HomePage() {
  return (
    <>
      <Header />
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <Problem />
      </ScrollReveal>
      <ScrollReveal>
        <Solution />
      </ScrollReveal>
      <ScrollReveal>
        <Benefits />
      </ScrollReveal>
      <ScrollReveal>
        <CTA />
      </ScrollReveal>
      <Footer />
    </>
  );
}
