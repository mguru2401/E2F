import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Industries from "./components/sections/Industries";
import About from "./components/sections/About";
import WhyE2F from "./components/sections/WhyE2F";
import Resources from "./components/sections/Resources";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <About />
        {/* <WhyE2F /> */}
        {/* <Resources /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
