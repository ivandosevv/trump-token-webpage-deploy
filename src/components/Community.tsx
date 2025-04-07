
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Send, ExternalLink } from "lucide-react";

const Community = () => {
  return (
    <section id="community" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Connect with thousands of ANTITRUMP supporters across our social platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-900 to-blue-700 border-none overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col items-center">
              <Twitter className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Twitter/X</h3>
              <p className="text-gray-200 text-center mb-4">
                Follow us for the latest updates, news, and announcements.
              </p>
              <Button 
                className="bg-white text-blue-900 hover:bg-gray-100"
                onClick={() => window.open("https://x.com/antitrumpcrypto", "_blank")}
              >
                Follow <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-300 border-none overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col items-center">
              <Send className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Telegram</h3>
              <p className="text-gray-800 text-center mb-4">
                Join our Telegram group to chat with the community.
              </p>
              <Button 
                className="bg-white text-blue-500 hover:bg-gray-100"
                onClick={() => window.open("https://t.me/anitrumpcoinsol", "_blank")}
              >
                Join Group <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-700 border-none overflow-hidden hover:shadow-xl transition-all duration-300 md:col-span-2 xl:col-span-1">
            <CardContent className="p-8 flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">$</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Buy ANTITRUMP</h3>
              <p className="text-gray-300 text-center mb-4">
                Ready to join the movement? Buy ANTITRUMP tokens now.
              </p>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.open("https://www.hamicoin.com/#buy", "_blank")}
              >
                Buy Now <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Community;
