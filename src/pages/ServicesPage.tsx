import React from 'react';
import { CheckCircle, Award, Users, Clock, Shield, Route } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Highway Construction',
      description: 'Building major highways and expressways that connect cities and regions across Nigeria.',
      image: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Federal highway construction',
        'Multi-lane expressway development',
        'Highway interchange construction',
        'Toll road infrastructure',
        'Highway lighting and signage',
      ],
    },
    {
      title: 'Urban Road Development',
      description: 'Developing comprehensive urban road networks for growing cities.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'City street construction',
        'Residential area road networks',
        'Commercial district access roads',
        'Parking lot construction',
        'Pedestrian walkways and sidewalks',
      ],
    },
    {
      title: 'Bridge Construction',
      description: 'Engineering and constructing bridges that stand the test of time.',
      image: 'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Highway bridge construction',
        'Pedestrian bridge development',
        'Railway bridge construction',
        'Bridge maintenance and repair',
        'Structural engineering services',
      ],
    },
    {
      title: 'Road Maintenance & Repair',
      description: 'Comprehensive maintenance services to keep roads in optimal condition.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Asphalt resurfacing and repair',
        'Pothole repair and prevention',
        'Road marking and signage',
        'Drainage system maintenance',
        'Emergency road repairs',
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Over 10 years of delivering high-quality road construction projects across Nigeria.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified engineers and construction professionals with extensive road building experience.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We pride ourselves on completing projects on schedule without compromising quality.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Strict adherence to safety protocols and international construction standards.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure every project meets our high standards.',
    },
    {
      icon: Route,
      title: 'Full Service',
      description: 'From road planning and design to construction and maintenance, we handle it all.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction solutions tailored to meet your unique requirements. From concept to completion, we deliver excellence in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ITEK Construction?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine years of road construction experience with cutting-edge technology and unwavering commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <item.icon className="h-12 w-12 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team today for a free consultation and detailed project quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+2348065438080"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-500 transition-colors duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;