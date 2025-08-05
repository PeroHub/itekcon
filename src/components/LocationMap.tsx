import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const LocationMap: React.FC = () => {
  // Correct coordinates for the offices
  const abujaCords = "9.028875291079673, 7.493902348878252"; // Placeholder coordinates
  const uyoCords = "5.018607770164809, 7.977030856878277"; // Placeholder coordinates 5.018607770164809, 7.977030856878277

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-4xl">
            Our Locations
          </h2>
          <p className="text-sm text-gray-600 md:text-lg">
            Visit our offices in Abuja and Uyo for road construction
            consultation and project discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Head Office */}
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="h-64 bg-gray-200">
              <iframe
                src={`https://maps.google.com/maps?q=${abujaCords}&z=15&output=embed`}
                width="100%"
                height="256"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Abuja Head Office Location"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900 md:text-xl">
                <MapPin className="mr-2 h-5 w-5 text-orange-500" />
                Head Office - Abuja
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 md:text-normal">
                  Suite 004 Garki Mall, Garki 2 FCT, Abuja
                </p>
                <div className="flex items-center text-gray-600">
                  <Phone className="mr-2 h-4 w-4 text-orange-500" />
                  <span className="text-xs">+234 806 543 8080</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="mr-2 h-4 w-4 text-orange-500" />
                  <span className="text-xs">Mon - Fri: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Office */}
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="h-64 bg-gray-200">
              <iframe
                src={`https://maps.google.com/maps?q=${uyoCords}&z=15&output=embed`}
                width="100%"
                height="256"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Uyo Branch Office Location"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900 md:text-xl">
                <MapPin className="mr-2 h-5 w-5 text-orange-500" />
                Branch Office - Uyo
              </h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  Trinity Plaza 2nd Floor Right Wing Ring Road 3, Before Hensek
                  Asphalt Yard Uyo, Akwa Ibom State.
                </p>
                <div className="flex items-center text-gray-600">
                  <Phone className="mr-2 h-4 w-4 text-orange-500" />
                  <span className="text-xs">+234 802 900 6984</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="mr-2 h-4 w-4 text-orange-500" />
                  <span className="text-xs">Mon - Fri: 8:00 AM - 6:00 PM</span>
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