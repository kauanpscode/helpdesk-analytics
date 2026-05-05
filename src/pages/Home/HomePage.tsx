import Header from "../../layouts/Home/header";
import Footer from "../../layouts/Home/footer";

import Hero from "../Home/sections/Hero";
import Problem from "../Home/sections/Problem";
import Solution from "../Home/sections/Solution";
import Benefits from "../Home/sections/Benefits";
import CTA from "../Home/sections/CTA";

import { ScrollReveal } from "../../components/Reveal";

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