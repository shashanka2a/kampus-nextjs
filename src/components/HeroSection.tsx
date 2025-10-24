'use client';

import { ShoppingBag, Car, Home, PartyPopper, Star, Users, Shield } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Headline */}
        <h1 className="text-center mb-6 animate-fade-in-up">
          <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Your Campus,{' '}
            <span className="bg-gradient-to-r from-[#FF1744] via-[#7C4DFF] to-[#00BCD4] bg-clip-text text-transparent animate-gradient-x">
              Simplified.
            </span>
          </span>
        </h1>

        {/* Subline */}
        <p className="text-center text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
          The UF student marketplace for textbooks, furniture, rides, housing, and events trusted by 250+ Gators.
        </p>

        {/* Glassmorphism App Icons Card */}
        <div className="max-w-xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="grid grid-cols-4 gap-6">
              {/* Shop */}
              <div className="flex flex-col items-center gap-3 group cursor-pointer animate-fade-in-up animation-delay-600">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-blue-500/50 group-hover:-translate-y-2 group-hover:scale-110">
                  <ShoppingBag className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Shop</span>
                <span className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors duration-300">Textbooks</span>
              </div>

              {/* Uber */}
              <div className="flex flex-col items-center gap-3 group cursor-pointer animate-fade-in-up animation-delay-700">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-pink-500/50 group-hover:-translate-y-2 group-hover:scale-110">
                  <Car className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-pink-600 transition-colors duration-300">Uber</span>
                <span className="text-xs text-gray-500 group-hover:text-pink-500 transition-colors duration-300">Rideshare</span>
              </div>

              {/* Live */}
              <div className="flex flex-col items-center gap-3 group cursor-pointer animate-fade-in-up animation-delay-800">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-green-500/50 group-hover:-translate-y-2 group-hover:scale-110">
                  <Home className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">Live</span>
                <span className="text-xs text-gray-500 group-hover:text-green-500 transition-colors duration-300">Housing</span>
              </div>

              {/* Party */}
              <div className="flex flex-col items-center gap-3 group cursor-pointer animate-fade-in-up animation-delay-900">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-purple-500/50 group-hover:-translate-y-2 group-hover:scale-110">
                  <PartyPopper className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">Party</span>
                <span className="text-xs text-gray-500 group-hover:text-purple-500 transition-colors duration-300">Events</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16 animate-fade-in-up animation-delay-1000">
          <Button 
            className="relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group"
            onClick={() => {
              const featuresSection = document.getElementById('features');
              if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
              <span className="group-hover:tracking-wide transition-all duration-300">Explore Now</span>
            </span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-1200">
          <div className="flex flex-col items-center gap-2 p-4 group hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:animate-pulse">
                250+
              </span>
            </div>
            <span className="text-sm text-gray-600 group-hover:text-purple-600 transition-colors duration-300">Active Students</span>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 border-l border-r border-gray-200 group hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent group-hover:animate-pulse">
                4.9
              </span>
            </div>
            <span className="text-sm text-gray-600 group-hover:text-yellow-600 transition-colors duration-300">Average Rating</span>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 group hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent group-hover:animate-pulse">
                100%
              </span>
            </div>
            <span className="text-sm text-gray-600 group-hover:text-green-600 transition-colors duration-300">.Edu Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
