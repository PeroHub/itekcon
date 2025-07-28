import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram } from "lucide-react"; // Import Facebook and Instagram icons

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "", //
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "",
      icon: Instagram,
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="/iteklogo.jpg"
                  height={"50px"}
                  width={"50px"}
                  alt="logo"
                />
                <span className="text-xl font-bold text-gray-900">
                  Itek Construction Limited
                </span>
              </Link>
            </div>

            {/* Desktop Navigation and Social Icons */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {/* Desktop Social Icons */}
              <div className="flex items-center space-x-4 ml-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button and Social Icons for mobile */}
            <div className="md:hidden flex items-center space-x-4">
              {" "}
              {/* Added space-x-4 for spacing */}
              {/* Mobile Social Icons (visible even when menu is closed) */}
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-orange-500 bg-orange-50"
                      : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Social Icons inside mobile menu (optional, can be removed if already in header) */}
              {/* If you want them duplicated inside the dropdown, uncomment this block */}
              {/* <div className="flex justify-center space-x-6 py-4 border-t border-gray-100 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/iteklogo.jpg"
                  height={"30px"}
                  width={"30px"}
                  alt="logo"
                />
                <span className="text-xl font-bold">
                  Itek Construction Limited
                </span>
              </div>
              <p className="text-gray-300 mb-4">
                Building roads and infrastructure with over a decade of
                experience in highway construction, urban road development, and
                bridge construction across Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                {" "}
                {/* Added flex-col for mobile stacking */}
                <a
                  href="tel:+2348065438080"
                  className="text-orange-500 hover:text-orange-400"
                >
                  +234 806 543 8080
                </a>
                <a
                  href="tel:+2348029006984"
                  className="text-orange-500 hover:text-orange-400"
                >
                  +234 802 900 6984
                </a>
              </div>
              {/* Social Icons in Footer */}
              <div className="flex space-x-6 mt-6">
                {" "}
                {/* Added margin-top */}
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Highway Construction</li>
                <li>Urban Road Development</li>
                <li>Bridge Construction</li>
                <li>Road Maintenance & Repair</li>
                <li>Road markings and signage</li>
                <li>Pavement construction</li>
                <li>Site preparation</li>
                <li>Design and planning</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Locations</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="text-sm">
                    Suite 004 Garki Mall, Garki 2 FCT, Abuja
                  </p>
                </div>
                <div>
                  <p className="font-medium">Branch Office</p>
                  <p className="text-sm">
                    Trinity Plaza 2nd Floor Right Wing Ring Road 3, Before
                    Hensek Asphalt Yard Uyo, Akwa Ibom State
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Itek Company Construction
              Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
