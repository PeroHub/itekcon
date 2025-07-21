import React from 'react';
import { Award, Users, Building, Calendar } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: Calendar,
      value: '10+',
      label: 'Years Experience',
    },
    {
      icon: Building,
      value: '200+',
      label: 'Projects Completed',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
    },
    {
      icon: Award,
      value: '50+',
      label: 'Awards Won',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-12 w-12 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;