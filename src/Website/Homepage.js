import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";

export default function Website() {
  return (
    <div className="font-inter">
      <div className="flex flex-col h-screen w-full">
        <Nav />
        <Hero />
      </div>

      {/* <Features />
      <CTA />
      <Pricing />
      More features
      Integrations
      Another call to action */}
      <Footer />
    </div>
  );
}
