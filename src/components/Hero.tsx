
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="gradient-bg text-white py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">ANTITRUMP TOKEN</h1>
            <p className="text-2xl md:text-3xl mb-8 font-semibold">
              While others are losing in the market, be the one winning. Buy $NOTRUMP
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-900 text-white border-2 border-white"
                onClick={() => window.open("https://dexscreener.com/solana/5vg98ZY1XXH1bYEiQQ24ixix9GS6g2jJnqnadsxev4TB", "_blank")}
              >
                Buy Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="/lovable-uploads/5555a851-f1d1-4bd2-a40e-3f02f758cd0f.png" 
              alt="ANTITRUMP Token" 
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl border-4 border-white/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
