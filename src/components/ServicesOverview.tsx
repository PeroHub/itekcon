import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Slider from "react-slick";

const ServicesOverview: React.FC = () => {
  const services = [
    {
      imageUrl: "/itekbridge9.jpg",
      title: "Highway Construction",
      description:
        "Major highway and expressway construction projects connecting cities and regions.",
      features: ["Federal Highways", "Quality Asphalt", "Timely Delivery"],
    },
    {
      imageUrl: "/itekbridge8.jpg",
      title: "Urban Road Development",
      description:
        "City roads, street networks, and urban infrastructure development projects.",
      features: ["Modern Design", "Drainage Systems", "Traffic Standards"],
    },
    {
      imageUrl: "/itekbridge11.jpg",
      title: "Bridge Construction",
      description:
        "Bridge construction and major infrastructure projects across Nigeria.",
      features: [
        "Government Projects",
        "Structural Engineering",
        "Safety Focused",
      ],
    },
    {
      imageUrl: "/itekbridge13.jpg",
      title: "Road Maintenance",
      description:
        "Professional road maintenance, repair, and rehabilitation services.",
      features: [
        "Preventive Maintenance",
        "Cost Effective",
        "Minimal Disruption",
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            From highways to urban roads and bridges, we deliver comprehensive
            road construction solutions tailored to your infrastructure needs.
          </p>
        </div>

        {/* This div wraps the slider */}
        <div className="mb-12 services-slider-container">
          <Slider {...settings}>
            {services.map((service, index) => (
              // Each slide item must be a direct child of Slider
              <div key={index} className="px-4">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div className="flex justify-center mb-4 overflow-hidden rounded-lg">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-40 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-center flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-500 flex items-center"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
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
