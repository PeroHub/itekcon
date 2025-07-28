import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ["All"];
  const projects = [
    {
      id: 1,
      title: "Office View",
      category: "Highways",
      image: "/itekoffice1.jpg",
      description:
        " A clear shot of an office building's facade, featuring a balcony with a banner",
    },
    {
      id: 2,
      title: "Office View",
      category: "Highways",
      image: "/itekoffice2.jpg",
      description:
        "This perspective showcases a well-maintained office building, strategically positioned to offer a prime Highways view",
    },
    {
      id: 3,
      title: "Office View",
      category: "Urban Roads",
      image: "/itekoffice3.jpg",
      description:
        "A partial view into an office space, where a banner prominently displays the ITEK CONSTRUCTION COMPANY LIMITED logo and their seven core values.",
    },
    {
      id: 4,
      title: "Office View",
      category: "Bridges",
      image: "/itekoffice4.jpg",
      description:
        "A modern office building with a clean, functional design, featuring yellow and grey facade elements.",
    },
    {
      id: 5,
      title: "Expressway Construction",
      category: "Highways",
      image: "/itekoffice5.jpg",
      description:
        "Glimpse a segment of a contemporary office structure, characterized by its distinct yellow and stone-patterned grey exterior.",
    },
    {
      id: 6,
      title: "Urban Street Network",
      category: "Urban Roads",
      image: "/itekbridge5.jpg",
      description:
        "A concrete culvert, an essential component of urban road infrastructure, is prominently featured during its construction phase",
    },
    {
      id: 7,
      title: "Highway Overpass",
      category: "Bridges",
      image: "/itekbridge6.jpg",
      description: "Modern highway overpass construction project.",
    },
    {
      id: 8,
      title: "Rural Access Road",
      category: "Urban Roads",
      image: "/itekbridge7.jpg",
      description: "Rural access road connecting remote communities.",
    },
    {
      id: 9,
      title: "Interstate Highway",
      category: "Highways",
      image: "/itekbridge8.jpg",
      description: "Major interstate highway construction project.",
    },
    {
      id: 10,
      title: "Pedestrian Bridge",
      category: "Bridges",
      image: "/itekbridge9.jpg",
      description: "Modern pedestrian bridge for safe road crossing.",
    },
    {
      id: 11,
      title: "",
      category: "",
      image: "/itekbridge10.jpg",
      description: "",
    },
    {
      id: 12,
      title: "",
      category: "",
      image: "/itekbridge11.jpg",
      description: "",
    },
    {
      id: 13,
      title: "",
      category: "",
      image: "/itekbridge12.jpg",
      description: "",
    },
    {
      id: 14,
      title: "",
      category: "",
      image: "/itekbridge13.jpg",
      description: "",
    },
    {
      id: 15,
      title: "",
      category: "",
      image: "/itekbridge14.jpg",
      description: "",
    },
    {
      id: 16,
      title: "",
      category: "",
      image: "/itekbridge15.jpg",
      description: "",
    },
    {
      id: 17,
      title: "",
      category: "",
      image: "/itekbridge16.jpg",
      description: "",
    },
    {
      id: 18,
      title: "",
      category: "",
      image: "/itekbridge17.jpg",
      description: "",
    },
    {
      id: 19,
      title: "",
      category: "",
      image: "/itekbridge18.jpg",
      description: "",
    },
    {
      id: 20,
      title: "",
      category: "",
      image: "/itekbridge19.jpg",
      description: "",
    },
    {
      id: 21,
      title: "",
      category: "",
      image: "/itekbridge20.jpg",
      description: "",
    },
    {
      id: 22,
      title: "",
      category: "",
      image: "/itekbridge21.jpg",
      description: "",
    },
    {
      id: 23,
      title: "",
      category: "",
      image: "/itekbridge22.jpg",
      description: "",
    },
    {
      id: 24,
      title: "",
      category: "",
      image: "/itekbridge22.jpg",
      description: "",
    },
    {
      id: 25,
      title: "",
      category: "",
      image: "/itekbridge23.jpg",
      description: "",
    },
    {
      id: 26,
      title: "",
      category: "",
      image: "/itekbridge24.jpg",
      description: "",
    },
    {
      id: 27,
      title: "",
      category: "",
      image: "/itekbridge25.jpg",
      description: "",
    },
    {
      id: 28,
      title: "",
      category: "",
      image: "/itekbridge26.jpg",
      description: "",
    },
    {
      id: 29,
      title: "",
      category: "",
      image: "/itekbridge27.jpg",
      description: "",
    },
    {
      id: 30,
      title: "",
      category: "",
      image: "/itekbridge28.jpg",
      description: "",
    },
    {
      id: 31,
      title: "",
      category: "",
      image: "/itekbridge29.jpg",
      description: "",
    },
    {
      id: 32,
      title: "",
      category: "",
      image: "/itekbridge30.jpg",
      description: "",
    },
    {
      id: 33,
      title: "",
      category: "",
      image: "/itekbridge31.jpg",
      description: "",
    },
    {
      id: 34,
      title: "",
      category: "",
      image: "/itekbridge32.jpg",
      description: "",
    },
    {
      id: 35,
      title: "",
      category: "",
      image: "/itekbridge33.jpg",
      description: "",
    },
    {
      id: 36,
      title: "",
      category: "",
      image: "/itekbridge34.jpg",
      description: "",
    },
    {
      id: 37,
      title: "",
      category: "",
      image: "/itekbridge35.jpg",
      description: "",
    },
    {
      id: 38,
      title: "",
      category: "",
      image: "/itekbridge36.jpg",
      description: "",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredProjects.findIndex(
        (p) => p.id === selectedImage
      );
      const nextIndex = (currentIndex + 1) % filteredProjects.length;
      setSelectedImage(filteredProjects[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredProjects.findIndex(
        (p) => p.id === selectedImage
      );
      const prevIndex =
        (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
      setSelectedImage(filteredProjects[prevIndex].id);
    }
  };

  const selectedProject = projects.find((p) => p.id === selectedImage);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of completed road construction projects
              showcasing our expertise in highways, urban roads, and bridge
              construction.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const hasTextContent =
                project.title || project.category || project.description;

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col"
                  // Ensure a consistent card height when there's no text content
                  style={{ height: hasTextContent ? "auto" : "300px" }} // Adjust '300px' as needed
                  onClick={() => setSelectedImage(project.id)}
                >
                  <div
                    className={`relative overflow-hidden ${
                      hasTextContent ? "h-64" : "flex-grow"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-300 ${
                        hasTextContent ? "h-full" : "absolute inset-0 h-full"
                      }`}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>

                  {/* Conditional rendering for the text content */}
                  {hasTextContent && (
                    <div className="p-6 flex-shrink-0">
                      {project.category && (
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full mb-2">
                          {project.category}
                        </span>
                      )}
                      {project.title && (
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                      )}
                      {project.description && (
                        <p className="text-gray-600">{project.description}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="bg-white rounded-xl overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600">{selectedProject.description}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="h-12 w-12" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
