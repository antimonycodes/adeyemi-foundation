import { Badge, Heart } from "lucide-react";
import { Button } from "../ui/button";
import bannerImg from "../assets/WhatsApp Image 2025-06-14 at 12.33.32_20f63f71.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-red-50 to-orange-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
              Non-Profit • Non-Political
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transforming Lives Through
              <span className="text-red-600"> Compassion</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Adeyemi Relief Initiative is dedicated to empowering communities
              by supporting widows, financing critical surgeries, and ensuring
              every child has access to education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-lg px-8"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate Today
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={bannerImg}
              alt="Community support"
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
