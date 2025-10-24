import { ShoppingBag, Car, Home, PartyPopper, ArrowRight } from 'lucide-react';

const features = [
  {
    name: 'GatorEx',
    description: 'Sell textbooks in seconds',
    icon: ShoppingBag,
    color: 'from-blue-500 to-blue-600',
    glowColor: 'group-hover:shadow-blue-500/20',
    benefits: [
      'Instant listings',
      'Send payment',
      'Secure payments',
    ],
  },
  {
    name: 'Rydify',
    description: 'Split ride costs effortlessly',
    icon: Car,
    color: 'from-red-500 to-pink-600',
    glowColor: 'group-hover:shadow-pink-500/20',
    benefits: [
      'Cost splitting',
      'Route optimization',
      'Safety features',
    ],
  },
  {
    name: 'Vybr',
    description: 'Discover your dream housing',
    icon: Home,
    color: 'from-green-500 to-emerald-600',
    glowColor: 'group-hover:shadow-green-500/20',
    benefits: [
      'Verified listings',
      'Virtual tours',
      'Roommate matching',
    ],
  },
  {
    name: 'Tribzy',
    description: 'Never miss campus events',
    icon: PartyPopper,
    color: 'from-purple-500 to-violet-600',
    glowColor: 'group-hover:shadow-purple-500/20',
    benefits: [
      'Event discovery',
      'RSVP tracking',
      'Social features',
    ],
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-200">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Four powerful student-focused apps, all designed to make your campus life easier
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`group bg-white rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${feature.glowColor} cursor-pointer border border-gray-100 animate-fade-in-up`}
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <feature.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-gray-900 transition-colors duration-300">{feature.name}</h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>

              {/* Benefits List */}
              <ul className="space-y-2 mb-4">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300" style={{ transitionDelay: `${benefitIndex * 50}ms` }}>
                    <div className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-gray-600 transition-colors duration-300" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="flex items-center gap-1 text-sm font-medium text-gray-900 group-hover:gap-3 transition-all duration-300 group-hover:text-blue-600">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
