
import { Button } from "@/components/ui/button";
import { Twitter, Send, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">$NOTRUMP</h3>
            <p className="text-gray-400 mb-4">
              The best investment option while the market is collapsing.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/anitrumpcoinsol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
              >
                <Send className="h-6 w-6" />
              </a>
              <a 
                href="https://x.com/antitrumpcrypto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-white transition-colors">Tokenomics</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://dexscreener.com/solana/5vg98ZY1XXH1bYEiQQ24ixix9GS6g2jJnqnadsxev4TB" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Buy ANTITRUMP
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/anitrumpcoinsol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Telegram Community
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/antitrumpcrypto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter/X
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} ANTITRUMP Token. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Disclaimer: Cryptocurrency investments involve risk. Do your own research before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
