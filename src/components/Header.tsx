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
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </a>
            <a href="#apps" className="text-gray-600 hover:text-gray-900 transition-colors">
              Apps
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
