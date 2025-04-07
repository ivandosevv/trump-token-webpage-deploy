
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
