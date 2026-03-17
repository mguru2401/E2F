import SEO from "../components/SEO";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Industries from "../components/sections/Industries";
import About from "../components/sections/About";
import WhyE2F from "../components/sections/WhyE2F";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Services />
      <Industries />
      <About />
      <WhyE2F />
      <Contact />
    </>
  );
}
