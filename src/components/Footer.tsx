import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-600" />
              <span className="font-bold text-lg">
                Adeyemi Relief Initiative
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering communities through compassionate action and
              sustainable support.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link
                to="about"
                // href="#about"
                className="text-gray-400 hover:text-white block"
              >
                About Us
              </Link>
              <Link
                to="programs"
                // href="#programs"
                className="text-gray-400 hover:text-white block"
              >
                Our Programs
              </Link>
              <Link
                to="impact"
                // href="#impact"
                className="text-gray-400 hover:text-white block"
              >
                Impact Stories
              </Link>
              <Link
                to="contact"
                // href="#contact"
                className="text-gray-400 hover:text-white block"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400">Widow Empowerment</div>
              <div className="text-gray-400">Medical Support</div>
              <div className="text-gray-400">Education Support</div>
              <div className="text-gray-400">Income Support</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400">Volunteer</div>
              <div className="text-gray-400">Partner with Us</div>
              <div className="text-gray-400">Corporate Sponsorship</div>
              <Button className="bg-red-600 hover:bg-red-700 mt-4">
                Donate Now
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Adeyemi Relief Initiative. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
