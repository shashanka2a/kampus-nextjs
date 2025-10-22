import { ArrowRight, Users, Star, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export function CTASection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-600 to-purple-700" />
      
      {/* Floating Gradient Blobs */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Simplify Your Campus Life?
          <span className="inline-block ml-2">✨</span>
        </h2>

        {/* Subline */}
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Get started with our student-focused platform today
        </p>

        {/* Pill Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">No setup fees</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white">
            <Users className="w-4 h-4" />
            <span className="text-sm">Join 250+ students</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white">
            <Star className="w-4 h-4 fill-white" />
            <span className="text-sm">4.9★ rating</span>
          </div>
        </div>

        {/* Central CTA */}
        <div className="flex justify-center mb-6">
          <Button className="relative bg-white text-purple-600 px-10 py-7 rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-200 hover:-translate-y-1 group border-2 border-transparent hover:border-purple-400">
            <span className="flex items-center gap-3">
              <span className="text-lg">Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          </Button>
        </div>

        {/* Footer Note */}
        <p className="text-white/70 text-sm">
          <CheckCircle className="w-4 h-4 inline mr-1" />
          Free to start • No credit card required
        </p>
      </div>
    </section>
  );
}
