import { Link } from "react-router-dom";
import { Button } from "../ui/button";
// import { Heart } from "lucide-react";
import logo from "../assets/logo.jpg";

const Nav = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Adeyemi Relief Initiative
              </h1>
              <p className="text-xs text-gray-600">Empowering Communities</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="about"
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="programs"
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Programs
            </Link>
            <Link
              to="impact"
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Impact
            </Link>
            <Link
              to="contact"
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Contact
            </Link>
            <Button className="bg-red-600 hover:bg-red-700">Donate Now</Button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Nav;
