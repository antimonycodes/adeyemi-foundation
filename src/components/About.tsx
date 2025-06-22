import { HandHeart, Heart, Users } from "lucide-react";
import img from "../assets/WhatsApp Image 2025-06-22 at 09.22.09_9d8551bf.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            About Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Adeyemi Relief Initiative is a not-for-profit and non-political
            organization firmly and solemnly resolved to provide for ourselves
            and society through compassionate action and sustainable support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={img}
              alt="Our mission"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Our Core Values
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Compassion</h4>
                  <p className="text-gray-600">
                    We approach every situation with empathy and understanding.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Community</h4>
                  <p className="text-gray-600">
                    We believe in the power of collective action and support.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <HandHeart className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Integrity</h4>
                  <p className="text-gray-600">
                    We maintain transparency and accountability in all our
                    actions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
