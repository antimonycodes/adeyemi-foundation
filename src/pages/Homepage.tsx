import About from "../components/About";
import Contact from "../components/Contact";
import Donation from "../components/Donation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import ImpactSect from "../components/ImpactSect";
import Nav from "../components/Nav";
import Programs from "../components/Programs";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Impact />
      <About />
      <Programs />
      <Donation />
      <ImpactSect />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
