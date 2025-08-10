import { Badge, Heart } from "lucide-react";
import { Button } from "../ui/button";
import bannerImg from "../assets/WhatsApp Image 2025-06-14 at 12.33.32_20f63f71.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-50 to-blue-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
              Free Hernia Surgeries • Non-Profit
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Restoring Health Through
              <span className="text-blue-600"> Free Hernia Surgeries</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Adeyemi Relief Initiative specializes in providing free hernia
              surgeries to those in need, while also supporting widows, orphans,
              and ensuring access to education for underprivileged children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-lg px-8"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Learn More
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Over 50 successful hernia surgeries Sponsored to
            </p>
          </div>
          <div className="relative">
            <img
              src={bannerImg}
              alt="Medical team performing hernia surgery"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
