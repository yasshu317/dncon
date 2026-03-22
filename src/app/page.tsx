import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import TechStack from "@/components/sections/TechStack";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Solutions preview />
      <div className="divider" />
      <TechStack />
      <div className="divider" />
      <Services preview />
      <div className="divider" />
      <Clients />
      <div className="divider" />
      <Contact />
    </>
  );
}
