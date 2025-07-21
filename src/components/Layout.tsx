import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HardHat } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
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
                <HardHat className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold text-gray-900">ITEK CONSTRUCTION</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+2348065438080"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200"
              >
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+2348065438080"
                className="block px-3 py-2 text-base font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-200 mx-3 text-center"
              >
                Call Now
              </a>
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
                <HardHat className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold">ITEK CONSTRUCTION LIMITED</span>
              </div>
              <p className="text-gray-300 mb-4">
                Building roads and infrastructure with over a decade of experience in highway construction, urban road development, and bridge construction across Nigeria.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+2348065438080" className="text-orange-500 hover:text-orange-400">
                  +234 806 543 8080
                </a>
                <a href="tel:+2348029006984" className="text-orange-500 hover:text-orange-400">
                  +234 802 900 6984
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Highway Construction</li>
                <li>Urban Road Development</li>
                <li>Bridge Construction</li>
                <li>Road Maintenance & Repair</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Locations</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="text-sm">Suite 004 Garki Mall, Garki 2 FCT, Abuja</p>
                </div>
                <div>
                  <p className="font-medium">Branch Office</p>
                  <p className="text-sm">Trinity Plaza, Uyo, Akwa Ibom State</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ITEK Company Construction Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;