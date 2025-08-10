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
              <Heart className="h-6 w-6 text-yellow-600" />
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
                className="text-gray-400 hover:text-blue-400 block transition-colors"
              >
                About Us
              </Link>
              <Link
                to="programs"
                className="text-gray-400 hover:text-indigo-400 block transition-colors"
              >
                Our Programs
              </Link>
              <Link
                to="impact"
                className="text-gray-400 hover:text-yellow-400 block transition-colors"
              >
                Impact Stories
              </Link>
              <Link
                to="contact"
                className="text-gray-400 hover:text-blue-400 block transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                Widow Empowerment
              </div>
              <div className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                Medical Support
              </div>
              <div className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">
                Education Support
              </div>
              <div className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                Income Support
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                Volunteer
              </div>
              <div className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">
                Partner with Us
              </div>
              <div className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">
                Corporate Sponsorship
              </div>
              <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 mt-4">
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
