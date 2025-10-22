import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0D0D0F] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#7C4DFF] to-[#00BCD4] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="font-bold text-2xl">Kampus</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Your campus, simplified. Making student life easier with trusted textbooks, furniture, rides, housing, and events — all in one platform.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Apps Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Apps</h4>
            <ul className="space-y-3">
              <li>
                <a href="#gatorex" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  GatorEx
                </a>
              </li>
              <li>
                <a href="#rydify" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Rydify
                </a>
              </li>
              <li>
                <a href="#vybr" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Vybr
                </a>
              </li>
              <li>
                <a href="#tribzy" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Tribzy
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#help" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Kampus. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> for students.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
