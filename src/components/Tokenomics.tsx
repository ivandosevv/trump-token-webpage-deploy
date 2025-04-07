
import { Progress } from "@/components/ui/progress";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tokenomics</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Understanding the distribution and economics of $ANTITRUMP token.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="token-stats p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Token Distribution</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Community Sale</span>
                  <span className="font-bold">50%</span>
                </div>
                <Progress value={50} className="h-3 bg-gray-700" indicatorClassName="bg-red-500" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Liquidity Pool</span>
                  <span className="font-bold">30%</span>
                </div>
                <Progress value={30} className="h-3 bg-gray-700" indicatorClassName="bg-red-500" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Marketing</span>
                  <span className="font-bold">10%</span>
                </div>
                <Progress value={10} className="h-3 bg-gray-700" indicatorClassName="bg-red-500" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Team</span>
                  <span className="font-bold">5%</span>
                </div>
                <Progress value={5} className="h-3 bg-gray-700" indicatorClassName="bg-red-500" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Development</span>
                  <span className="font-bold">5%</span>
                </div>
                <Progress value={5} className="h-3 bg-gray-700" indicatorClassName="bg-red-500" />
              </div>
            </div>
          </div>

          <div className="token-stats p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Token Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-300">Token Name</span>
                <span className="font-bold">ANTITRUMP</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-300">Token Symbol</span>
                <span className="font-bold">$ANTITRUMP</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-300">Total Supply</span>
                <span className="font-bold">1,000,000,000</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-300">Blockchain</span>
                <span className="font-bold">Solana</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-300">Initial Price</span>
                <span className="font-bold">$0.00001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
