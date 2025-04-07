
import { Card, CardContent } from "@/components/ui/card";
import { BadgeMinus, TrendingDown, Shield, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About ANTITRUMP Token</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            ANTITRUMP is more than just a token - it's a movement. Our cryptocurrency is designed to move in the opposite direction of certain political fortunes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-black/40 border border-red-800 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
                  <TrendingDown size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Inverse Performance</h3>
                <p className="text-gray-300">
                  As indicated by our chart, we're designed to move inversely with specific market trends.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border border-red-800 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Owned</h3>
                <p className="text-gray-300">
                  A decentralized token owned by the community, for the community.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border border-red-800 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Transactions</h3>
                <p className="text-gray-300">
                  Built on Solana for lightning-fast transactions and low fees.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border border-red-800 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
                  <BadgeMinus size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Limited Supply</h3>
                <p className="text-gray-300">
                  With a limited token supply, $ANTITRUMP is designed to maintain its value over time.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
