import MainLayout from "../../layouts/HomeLayout";

import Hero from "../Home/sections/Hero";
import Problem from "../Home/sections/Problem";
import Solution from "../Home/sections/Solution";
import Benefits from "../Home/sections/Benefits";
import CTA from "../Home/sections/CTA";

import Section from "../../components/Section";

export default function HomePage() {
  return (
    <MainLayout>
      <Section>
        <Hero />
      </Section>

      <Section>
        <Problem />
      </Section>

      <Section>
        <Solution />
      </Section>

      <Section>
        <Benefits />
      </Section>

      <Section>
        <CTA />
      </Section>
    </MainLayout>
  );
}