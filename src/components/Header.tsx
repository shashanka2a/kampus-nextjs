import { Menu } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <Image
                src="/image.png"
                alt="Kampus Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl">Kampus</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#apps" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 relative group">
              Apps
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110">
            <Menu className="w-6 h-6 hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </header>
  );
}
