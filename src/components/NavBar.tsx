
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Twitter, ExternalLink } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">$ANTITRUMP</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-red-400">About</a>
            <a href="#tokenomics" className="hover:text-red-400">Tokenomics</a>
            <a href="#roadmap" className="hover:text-red-400">Roadmap</a>
            <a href="#community" className="hover:text-red-400">Community</a>
            <Button 
              className="bg-red-600 hover:bg-red-700"
              onClick={() => window.open("https://www.hamicoin.com/#buy", "_blank")}
            >
              Buy Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMenu}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#about" className="block py-2 hover:text-red-400" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#tokenomics" className="block py-2 hover:text-red-400" onClick={() => setIsMenuOpen(false)}>Tokenomics</a>
            <a href="#roadmap" className="block py-2 hover:text-red-400" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
            <a href="#community" className="block py-2 hover:text-red-400" onClick={() => setIsMenuOpen(false)}>Community</a>
            <Button 
              className="bg-red-600 hover:bg-red-700 w-full"
              onClick={() => window.open("https://www.hamicoin.com/#buy", "_blank")}
            >
              Buy Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
