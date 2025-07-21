import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const LocationMap: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-xl text-gray-600">
            Visit our offices in Abuja and Uyo for road construction consultation and project discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Head Office */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6267!2d7.4898!3d9.0319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48acd%3A0x4a406d7be39b3fae!2sGarki%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1735000000000!5m2!1sen!2sng"
                width="100%"
                height="256"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Abuja Head Office Location"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                Head Office - Abuja
              </h3>
              <div className="space-y-3">
                <p className="text-gray-600">Suite 004 Garki Mall, Garki 2 FCT, Abuja</p>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 text-orange-500 mr-2" />
                  <span>+234 806 543 8080</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 text-orange-500 mr-2" />
                  <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Office */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2736!2d7.9319!3d5.0447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd4f8b3b3b3b%3A0x2222222222222222!2sUyo%2C%20Akwa%20Ibom%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1735000000000!5m2!1sen!2sng"
                width="100%"
                height="256"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Uyo Branch Office Location"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                Branch Office - Uyo
              </h3>
              <div className="space-y-3">
                <p className="text-gray-600">Trinity Plaza, Uyo, Akwa Ibom State</p>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 text-orange-500 mr-2" />
                  <span>+234 802 900 6984</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 text-orange-500 mr-2" />
                  <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;