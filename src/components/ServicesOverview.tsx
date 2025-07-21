import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Construction, Grid as Bridge, Wrench, ArrowRight } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: Route,
      title: 'Highway Construction',
      description: 'Major highway and expressway construction projects connecting cities and regions.',
      features: ['Federal Highways', 'Quality Asphalt', 'Timely Delivery'],
    },
    {
      icon: Construction,
      title: 'Urban Road Development',
      description: 'City roads, street networks, and urban infrastructure development projects.',
      features: ['Modern Design', 'Drainage Systems', 'Traffic Standards'],
    },
    {
      icon: Bridge,
      title: 'Bridge Construction',
      description: 'Bridge construction and major infrastructure projects across Nigeria.',
      features: ['Government Projects', 'Structural Engineering', 'Safety Focused'],
    },
    {
      icon: Wrench,
      title: 'Road Maintenance',
      description: 'Professional road maintenance, repair, and rehabilitation services.',
      features: ['Preventive Maintenance', 'Cost Effective', 'Minimal Disruption'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From highways to urban roads and bridges, we deliver comprehensive road construction solutions tailored to your infrastructure needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <service.icon className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;