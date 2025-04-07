
import { CheckCircle, Circle } from "lucide-react";

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our journey to establish ANTITRUMP as a recognized cryptocurrency.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-red-600"></div>

            {/* Phase 1 */}
            <div className="relative mb-12">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-red-500 mb-2">Phase 1: Launch</h3>
                  <ul className="list-disc list-inside md:list-outside text-gray-300 space-y-2 pl-0 md:pl-4">
                    <li className="flex items-start md:justify-end">
                      <span className="ml-0 md:ml-2 md:mr-2">Website Launch</span>
                      <CheckCircle className="ml-2 md:ml-0 h-5 w-5 text-green-500 flex-shrink-0" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="ml-0 md:ml-2 md:mr-2">Social Media Presence</span>
                      <CheckCircle className="ml-2 md:ml-0 h-5 w-5 text-green-500 flex-shrink-0" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="ml-0 md:ml-2 md:mr-2">Community Building</span>
                      <CheckCircle className="ml-2 md:ml-0 h-5 w-5 text-green-500 flex-shrink-0" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="ml-0 md:ml-2 md:mr-2">Token Creation</span>
                      <CheckCircle className="ml-2 md:ml-0 h-5 w-5 text-green-500 flex-shrink-0" />
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 md:pl-12 flex md:justify-start justify-center mb-4 md:mb-0 order-1 md:order-2">
                  <div className="bg-red-600 h-8 w-8 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative mb-12">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pl-12 order-2">
                  <h3 className="text-2xl font-bold text-red-500 mb-2">Phase 2: Growth</h3>
                  <ul className="list-disc list-inside md:list-outside text-gray-300 space-y-2 pl-0 md:pl-4">
                    <li className="flex items-start">
                      <Circle className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span>Exchange Listings</span>
                    </li>
                    <li className="flex items-start">
                      <Circle className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span>Marketing Campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <Circle className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span>Partnerships</span>
                    </li>
                    <li className="flex items-start">
                      <Circle className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span>Community Expansion</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 md:pr-12 flex md:justify-end justify-center mb-4 md:mb-0 order-1">
                  <div className="bg-yellow-500 h-8 w-8 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-red-500 mb-2">Phase 3: Expansion</h3>
                  <ul className="list-disc list-inside md:list-outside text-gray-300 space-y-2 pl-0 md:pl-4">
                    <li className="flex items-start md:justify-end">
                      <span className="ml-0 md:ml-2 md:mr-2">NFT Collection Launch</span>
                      <Circle className="ml-2 md:ml-0 h-5 w-5 text-blue-500 flex-shrink-0" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="ml-0 md:ml-2 md:mr-2">Mobile App Development</span>
                      <Circle className="ml-2 md:ml-0 h-5 w-5 text-blue-500 flex-shrink-0" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="ml-0 md:ml-2 md:mr-2">Global Marketing</span>
                      <Circle className="ml-2 md:ml-0 h-5 w-5 text-blue-500 flex-shrink-0" />
                    </li>
                    <li className="flex items-start md:justify-end">
                      <span className="ml-0 md:ml-2 md:mr-2">Major Exchange Listings</span>
                      <Circle className="ml-2 md:ml-0 h-5 w-5 text-blue-500 flex-shrink-0" />
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 md:pl-12 flex md:justify-start justify-center mb-4 md:mb-0 order-1 md:order-2">
                  <div className="bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
