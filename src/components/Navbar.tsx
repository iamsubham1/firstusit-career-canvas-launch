
import { useState } from 'react';
import { Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/20 dark:bg-gray-900/80 dark:border-gray-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FirstUsit
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors dark:text-gray-300 dark:hover:text-blue-400">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors dark:text-gray-300 dark:hover:text-blue-400">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors dark:text-gray-300 dark:hover:text-blue-400">
                Services
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors dark:text-gray-300 dark:hover:text-blue-400">
                Testimonials
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" className="border-gray-300 dark:border-gray-600 dark:text-gray-300">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg rounded-lg mt-2 dark:bg-gray-900/90">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Services</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Testimonials</a>
              <div className="pt-2 space-y-2">
                <Button variant="outline" className="w-full dark:border-gray-600 dark:text-gray-300">Sign In</Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
