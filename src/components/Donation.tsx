import { Button } from "../ui/button";
// import {
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
//   Card,
// } from "../ui/card";

import { Input } from "../ui/input";

const Donation = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Make a Difference Today
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Your donation directly impacts lives. Every contribution, no matter
            the size, helps us continue our mission of compassion and support.
          </p>

          {/* <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">#25</CardTitle>
                <CardDescription className="text-white/80">
                  Provides school supplies for one child
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-red-600 hover:bg-gray-100">
                  Donate #25
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white transform scale-105">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">#100</CardTitle>
                <CardDescription className="text-white/80">
                  Supports a widow's training program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-red-600 hover:bg-gray-100">
                  Donate #100
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">#500</CardTitle>
                <CardDescription className="text-white/80">
                  Helps fund a critical surgery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-red-600 hover:bg-gray-100">
                  Donate #500
                </Button>
              </CardContent>
            </Card>
          </div> */}

          <div className="bg-white/10 rounded-xl p-8 backdrop-blur">
            <h3 className="text-xl font-semibold mb-4">
              Custom Donation Amount
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="number"
                placeholder="Enter amount"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8">
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
