import React from "react";
import { Award, Users, Target, Shield, Clock, CheckCircle } from "lucide-react";

const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description:
        "ITEK Construction Limited was established with a vision to transform Nigeria's road infrastructure.",
    },
    {
      year: "2016",
      title: "First Major Highway",
      description:
        "Completed our first major federal highway project, establishing our reputation for quality.",
    },
    {
      year: "2018",
      title: "Expansion to Uyo",
      description:
        "Opened our branch office in Uyo to serve the South-South region of Nigeria.",
    },
    {
      year: "2020",
      title: "100+ Projects",
      description:
        "Reached the milestone of completing over 100 road construction projects nationwide.",
    },
    {
      year: "2023",
      title: "Modern Equipment",
      description:
        "Invested in state-of-the-art road construction equipment and technology.",
    },
    {
      year: "2025",
      title: "Industry Leader",
      description:
        "Recognized as one of Nigeria's leading road construction companies.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every project, ensuring the highest quality standards in road construction.",
    },
    {
      icon: Shield,
      title: "Safety",
      description:
        "Safety is our top priority. We maintain strict safety protocols to protect our workers and the public.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "We deliver projects on time and within budget, building trust with our clients and communities.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Our success is built on the collaboration and expertise of our dedicated team members.",
    },
    {
      icon: CheckCircle,
      title: "Quality",
      description:
        "We use premium materials and proven construction methods to ensure long-lasting road infrastructure.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "We embrace new technologies and methods to improve efficiency and quality in road construction.",
    },
  ];

  const awards = [
    {
      image: "/certitek1.jpg",
      name: "Corporate affairs",
    },
    {
      image: "/certitek2.jpg",
      name: "firs",
    },
  ];

  const leadership = [
    {
      name: "Engr. Ernest Mike",
      position: "(MD) ITEK CONSTRUCTION COMPANY LIMITED",
      image: "/md.jpg",
      description: "",
    },
    {
      name: "Engr. Obinna Paul Peter",
      position: "DIRECTOR ITEK CONSTRUCTION COMPANY LIMITED",
      image: "/obinna.jpg",
      description: "",
    },
    {
      name: "Engr. Maduekwe Eberechukwu James",
      position: "DIRECTOR ITEK CONSTRUCTION COMPANY LIMITED",
      image: "/Maduekwe.jpg",
      description: "",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-6">
              About ITEK Construction
            </h1>
            <p className="text-sm max-w-3xl mx-auto leading-relaxed">
              Building Nigeria's road infrastructure for over a decade. We are
              committed to connecting communities and driving economic growth
              through quality road construction.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <p className="font-bold">Humble Beginnings</p>A small road
                construction firm, "PathMakers," was born from a passionate
                entrepreneur's dream. With limited resources and a handful of
                dedicated employees, they started tackling small projects in
                their local community.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <p className="font-bold">Perseverance and Hard Work</p>
                Through determination and hard work, PathMakers gradually built
                a reputation for quality and reliability. They expanded their
                team, invested in modern equipment, and explored new markets.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <p className="font-bold">Innovative Solutions</p>
                PathMakers distinguished themselves by embracing innovative
                technologies and sustainable practices. They adopted advanced
                road construction materials and techniques, ensuring durability
                and environmental responsibility.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <p className="font-bold">Growth and Expansion</p>
                As their expertise and portfolio grew, so did their client base.
                PathMakers secured larger projects, collaborated with major
                contractors, and expanded their services to neighboring regions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <p className="font-bold">Awards and Recognition</p>
                As their expertise and portfolio grew, so did their client base.
                PathMakers secured larger projects, collaborated with major
                contractors, and expanded their services to neighboring regions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <p className="font-bold">Legacy and Impact:</p>
                PathMakers' journey from "grass to grace" is a testament to
                entrepreneurial spirit, innovation, and dedication. They not
                only built roads but also created opportunities, improved lives,
                and left a lasting legacy.
              </p>
            </div>
            <div>
              <img
                src="/itekoffice1.jpg"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is to deliver high-quality construction projects
                that exceed client expectations, while prioritizing safety,
                sustainability, and community engagement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our vision is to be a leading construction company, renowned for
                innovation, excellence, and customer satisfaction, while making
                a positive impact on the built environment and the communities
                we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach
              to road construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and development as Nigeria's trusted
              road construction partner.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line - remains visible on all screens, but its positioning changes for mobile */}
            {/* On mobile, line is on the left. On large screens, it's centered. */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-1 h-full bg-orange-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  // On mobile, force flex-row (left-aligned), no need for flex-row-reverse
                  // On large screens, apply alternating flex-row / flex-row-reverse
                  className={`flex items-center w-full lg:w-auto ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Box */}
                  <div
                    // On mobile, text is left-aligned, margin-left for spacing from line
                    // On large screens, apply alternating text alignment and padding
                    className={`w-full lg:w-1/2 ${
                      index % 2 === 0
                        ? "lg:pr-8 text-left lg:text-right"
                        : "lg:pl-8 text-left"
                    } ml-8 lg:ml-0`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-orange-500 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Circle Dot (Indicator) */}
                  {/* Position relative to the line. On mobile, it's aligned with the left line. */}
                  <div className="absolute z-10 flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full border-4 border-white shadow-lg left-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>

                  {/* Empty Spacer Div (only for desktop alignment) */}
                  <div className="hidden lg:block w-1/2"></div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading ITEK Construction to
              new heights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-blue-500 font-bold mb-3">
                  {leader.position}
                </p>
                <p className="text-gray-600">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" bg-white">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certificates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map(
              (
                award,
                index // Changed 'leader' to 'award' for clarity
              ) => (
                <div
                  key={index}
                  className="text-center bg-gray-50 p-8 transition-shadow duration-300"
                >
                  <img
                    src={award.image}
                    alt={award.name}
                    className="mx-auto mb-4 object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who have trusted ITEK
            Construction with their road infrastructure projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
            </a>
            {/* <a
              href="tel:+2348065438080"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-500 transition-colors duration-300"
            >
              Call Now
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
