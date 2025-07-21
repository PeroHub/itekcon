import React from 'react';
import { Award, Users, Target, Shield, Clock, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'ITEK Construction Limited was established with a vision to transform Nigeria\'s road infrastructure.',
    },
    {
      year: '2016',
      title: 'First Major Highway',
      description: 'Completed our first major federal highway project, establishing our reputation for quality.',
    },
    {
      year: '2018',
      title: 'Expansion to Uyo',
      description: 'Opened our branch office in Uyo to serve the South-South region of Nigeria.',
    },
    {
      year: '2020',
      title: '100+ Projects',
      description: 'Reached the milestone of completing over 100 road construction projects nationwide.',
    },
    {
      year: '2023',
      title: 'Modern Equipment',
      description: 'Invested in state-of-the-art road construction equipment and technology.',
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Recognized as one of Nigeria\'s leading road construction companies.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards in road construction.',
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Safety is our top priority. We maintain strict safety protocols to protect our workers and the public.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'We deliver projects on time and within budget, building trust with our clients and communities.',
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Our success is built on the collaboration and expertise of our dedicated team members.',
    },
    {
      icon: CheckCircle,
      title: 'Quality',
      description: 'We use premium materials and proven construction methods to ensure long-lasting road infrastructure.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace new technologies and methods to improve efficiency and quality in road construction.',
    },
  ];

  const leadership = [
    {
      name: 'Engr. Michael Okon',
      position: 'Managing Director',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Over 15 years of experience in civil engineering and road construction management.',
    },
    {
      name: 'Engr. Sarah Adebayo',
      position: 'Chief Engineer',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Structural engineering expert with specialization in bridge and highway construction.',
    },
    {
      name: 'Mr. David Udoh',
      position: 'Operations Manager',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Project management specialist ensuring timely delivery of all construction projects.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About ITEK Construction</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Building Nigeria's road infrastructure for over a decade. We are committed to connecting communities and driving economic growth through quality road construction.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Founded in 2014, ITEK Construction Limited began with a simple yet ambitious vision: to transform Nigeria's road infrastructure and connect communities across the nation. What started as a small construction company has grown into one of Nigeria's most trusted road construction specialists.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Over the years, we have successfully completed more than 200 road construction projects, ranging from major federal highways to urban street networks and critical bridge infrastructure. Our commitment to quality, safety, and timely delivery has earned us the trust of government agencies, private developers, and communities nationwide.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, with offices in Abuja and Uyo, we continue to expand our reach and capabilities, always staying true to our core mission of building roads that stand the test of time and serve the needs of Nigeria's growing population.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Road construction project"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver world-class road construction services that connect communities, facilitate economic growth, and improve the quality of life for all Nigerians. We are committed to excellence, safety, and sustainability in every project we undertake.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be Nigeria's leading road construction company, recognized for our innovation, quality, and contribution to national infrastructure development. We envision a Nigeria where every community is connected by safe, durable, and well-constructed roads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to road construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and development as Nigeria's trusted road construction partner.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-orange-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full border-4 border-white shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading ITEK Construction to new heights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{leader.position}</p>
                <p className="text-gray-600">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who have trusted ITEK Construction with their road infrastructure projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
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

export default AboutPage;