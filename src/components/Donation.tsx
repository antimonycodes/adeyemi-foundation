import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Heart, Scale, BookOpen, Users } from "lucide-react";

const Donation = () => {
  const programs = [
    {
      title: "Hernia Surgeries",
      description: "Sponsor life-changing hernia surgeries for 20 patients",
      icon: <Scale className="w-8 h-8" />,
      amount: "₦4,000,000",
      progress: 10, // percentage
    },
    {
      title: "Education Support",
      description:
        "Provide school fees, supplies for 10 underprivileged children",
      icon: <BookOpen className="w-8 h-8" />,
      amount: "₦1,200,000",
      progress: 20,
    },
    {
      title: "Widow Empowerment",
      description: "Support 10 widows with small business grants",
      icon: <Users className="w-8 h-8" />,
      amount: "₦1,000,000",
      progress: 20,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Support Our Ongoing Programs
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Choose a specific initiative to support or make a general
              donation. 100% of your contribution goes directly to those in
              need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-xl p-6 backdrop-blur border border-white/20 hover:border-yellow-400 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-white/20 mr-4">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                </div>
                <p className="mb-4 opacity-90">{program.description}</p>
                <p className="font-bold text-yellow-400 mb-2">
                  Goal: {program.amount}
                </p>
                <div className="w-full bg-white/20 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-yellow-400 h-2.5 rounded-full"
                    style={{ width: `${program.progress}%` }}
                  ></div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-semibold">
                  Support This Program
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-white/10 rounded-xl p-8 backdrop-blur border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">
              General Donation
            </h3>
            <p className="text-center mb-6 opacity-90">
              Prefer to make a general donation? We'll allocate it where it's
              needed most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="number"
                placeholder="Enter amount (₦)"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-yellow-400"
              />
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-semibold px-8">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
