// src/pages/AdminDashboard.js
import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext"; // Import useAuth from AuthContext

type GalleryItem = {
  _id: string;
  title?: string;
  category?: string;
  description?: string;
  image?: string;
  date: string;
};

const AdminDashboard = () => {
  const auth = useAuth(); // Get the entire auth context object

  // State variables for managing gallery data and UI
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGalleryItem, setCurrentGalleryItem] =
    useState<GalleryItem | null>(null);
  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formImage, setFormImage] = useState<File | null>(null);
  const [formImagePreview, setFormImagePreview] = useState("");
  const [message, setMessage] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items to display per page

  // API base URL (replace with your deployed backend URL if different)
  const API_BASE_URL = "https://itekconstruction.onrender.com/api/gallery";

  // Effect hook to fetch gallery items when the component mounts or token changes
  useEffect(() => {
    if (auth && auth.token) {
      fetchGalleryItems();
    }
  }, [auth?.token]); // Re-fetch if token changes (e.g., after login/logout)

  if (!auth) {
    return (
      <div className="text-center p-12 text-xl text-red-600">
        Error: Authentication context not available. This page should be
        protected.
      </div>
    );
  }
  const { token, user, logout } = auth;

  // Function to fetch all gallery items from the backend
  const fetchGalleryItems = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(API_BASE_URL);
      if (response.ok) {
        const data: GalleryItem[] = await response.json();
        // Sort the data by date in ascending order
        const sortedData = [...data].sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        setGalleryItems(sortedData);
        setCurrentPage(1); // Reset to first page after fetching new data
      } else {
        setError("Failed to fetch gallery items.");
      }
    } catch (err) {
      setError("Network error while fetching gallery items.");
      console.error("Fetch gallery items error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handler for image file input change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormImage(file); // Set the file object
    if (file) {
      setFormImagePreview(URL.createObjectURL(file)); // Create a local URL for preview
    } else {
      setFormImagePreview("");
    }
  };

  // Function to open the add/edit modal
  const openModal = (item: GalleryItem | null = null) => {
    setCurrentGalleryItem(item);
    setFormTitle(item ? item.title || "" : "");
    setFormCategory(item ? item.category || "" : "");
    setFormDescription(item ? item.description || "" : "");
    setFormImage(null); // Clear file input
    // If editing, use the existing Cloudinary URL for preview; otherwise, clear
    setFormImagePreview(item && item.image ? item.image : "");
    setMessage(""); // Clear any previous messages
    setIsModalOpen(true);
  };

  // Function to close the add/edit modal and reset form states
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentGalleryItem(null);
    setFormTitle("");
    setFormCategory("");
    setFormDescription("");
    setFormImage(null);
    setFormImagePreview("");
    setMessage("");
  };

  // Handler for submitting the add/edit form
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    const formData = new FormData();
    formData.append("title", formTitle);
    formData.append("category", formCategory);
    formData.append("description", formDescription);

    // Append image only if a new one is selected or if it's a new item
    if (formImage) {
      formData.append("image", formImage);
      console.log(
        "Frontend: Appending image to FormData. File name:",
        formImage.name,
        "File type:",
        formImage.type
      );
    } else if (!currentGalleryItem) {
      setMessage("Please upload an image for new gallery items.");
      console.warn("Frontend: No image selected for new gallery item.");
      return;
    }

    const method = currentGalleryItem ? "PUT" : "POST";
    const url = currentGalleryItem
      ? `${API_BASE_URL}/${currentGalleryItem._id}`
      : API_BASE_URL;

    console.log("Frontend: Sending request to URL:", url, "Method:", method);
    console.log("Frontend: Auth Token:", token);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "x-auth-token": token ?? "", // Ensure token is sent
        },
        body: formData, // FormData handles the body correctly for file uploads
      });

      // Get raw response text for better debugging of 500 errors
      const responseText = await response.text();
      console.log(
        "Frontend: Raw API Response Status:",
        response.status,
        response.statusText
      );
      console.log("Frontend: Raw API Response Body:", responseText);

      let data;
      try {
        data = JSON.parse(responseText); // Attempt to parse as JSON
      } catch (jsonError) {
        console.error("Frontend: Failed to parse JSON response:", jsonError);
        setMessage(
          "Server returned non-JSON response or invalid JSON. Check backend logs."
        );
        return;
      }

      if (response.ok) {
        setMessage(data.msg || "Operation successful!");
        fetchGalleryItems(); // Refresh the list of items
        closeModal(); // Close the modal on success
      } else {
        setMessage(data.msg || "Operation failed.");
      }
    } catch (err) {
      setMessage(
        "Network error during operation. Please check your internet connection or server status."
      );
      console.error("Frontend: Fetch error:", err);
    }
  };

  // Handler for deleting a gallery item
  const handleDelete = async (id: string) => {
    // Custom confirmation modal instead of window.confirm
    const isConfirmed = await new Promise((resolve) => {
      const confirmModal = document.createElement("div");
      confirmModal.className =
        "fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4";
      confirmModal.innerHTML = `
                <div class="bg-white rounded-lg shadow-2xl p-8 w-full max-w-sm text-center">
                    <p class="text-xl font-semibold text-gray-800 mb-6">Are you sure you want to delete this item?</p>
                    <div class="flex justify-center space-x-4">
                        <button id="cancelDelete" class="px-6 py-2 border border-gray-300 rounded-lg shadow-sm text-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 transition duration-150 ease-in-out">Cancel</button>
                        <button id="confirmDelete" class="px-6 py-2 border border-transparent rounded-lg shadow-md text-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition duration-150 ease-in-out">Delete</button>
                    </div>
                </div>
            `;
      document.body.appendChild(confirmModal);

      const cancelBtn = document.getElementById("cancelDelete");
      const confirmBtn = document.getElementById("confirmDelete");
      if (cancelBtn) {
        cancelBtn.onclick = () => {
          document.body.removeChild(confirmModal);
          resolve(false);
        };
      }
      if (confirmBtn) {
        confirmBtn.onclick = () => {
          document.body.removeChild(confirmModal);
          resolve(true);
        };
      }
    });

    if (!isConfirmed) {
      return;
    }

    setMessage(""); // Clear previous messages
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "x-auth-token": token ?? "",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.msg || "Item deleted successfully.");
        fetchGalleryItems(); // Refresh the list
      } else {
        setMessage(data.msg || "Deletion failed.");
      }
    } catch (err) {
      setMessage("Network error during deletion.");
      console.error("Delete gallery item error:", err);
    }
  };

  // --- Pagination Logic ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = galleryItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Display loading state
  if (loading)
    return (
      <div className="text-center p-12 text-xl text-gray-700">
        Loading gallery items...
      </div>
    );
  // Display error state for initial fetch
  if (error)
    return (
      <div className="text-center p-12 text-xl text-red-600">
        Error: {error}
      </div>
    );

  // Main Admin Dashboard JSX
  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      <div className="md:flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Admin Dashboard
        </h1>
        <div className="flex items-center space-x-6 mt-6 md:mt-0">
          {user && (
            <span className="text-lg text-gray-700 font-medium">
              Welcome, {user.email}!
            </span>
          )}
          <button
            onClick={logout}
            className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      </div>

      <button
        onClick={() => openModal()}
        className="mb-10 px-10 py-2 bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:scale-105"
      >
        Add New Gallery Item
      </button>

      {message && (
        <div
          className={`p-5 mb-8 rounded-lg text-center text-lg font-medium ${
            message.includes("success") ||
            message.includes("successful") ||
            message.includes("added") ||
            message.includes("updated") ||
            message.includes("deleted")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentItems.length === 0 ? ( // Use currentItems for rendering check
          <p className="col-span-full text-center text-gray-600 text-2xl py-10">
            No gallery items found. Click "Add New Gallery Item" to get started!
          </p>
        ) : (
          currentItems.map(
            (
              item // Map over currentItems
            ) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition duration-300 hover:scale-103 hover:shadow-xl"
              >
                <img
                  src={item.image} // Cloudinary URL is directly used here
                  alt={item.title || "Gallery Image"}
                  className="w-full h-56 object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://placehold.co/400x300/e0e0e0/555555?text=Image+Not+Found";
                  }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title || "No Title"}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Category:{" "}
                    <span className="font-semibold text-orange-700">
                      {item.category || "N/A"}
                    </span>
                  </p>
                  <p className="text-gray-700 text-base mb-4 line-clamp-3">
                    {item.description || "No description provided."}
                  </p>
                  <div className="flex justify-end space-x-4 mt-4">
                    <button
                      onClick={() => openModal(item)}
                      className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition duration-150 ease-in-out"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-150 ease-in-out"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-12">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => paginate(page)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                currentPage === page
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
          >
            Next
          </button>
        </div>
      )}

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg relative transform transition-all duration-300 scale-100 opacity-100 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-7 text-center">
              {currentGalleryItem
                ? "Edit Gallery Item"
                : "Add New Gallery Item"}
            </h2>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-4xl font-light leading-none"
            >
              &times;
            </button>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="formTitle"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Title (Optional)
                </label>
                <input
                  type="text"
                  id="formTitle"
                  className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 text-base"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g., Office View"
                />
              </div>
              <div>
                <label
                  htmlFor="formCategory"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Category (Optional)
                </label>
                <input
                  type="text"
                  id="formCategory"
                  className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 text-base"
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  placeholder="e.g., Highways"
                />
              </div>
              <div>
                <label
                  htmlFor="formDescription"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Description (Optional)
                </label>
                <textarea
                  id="formDescription"
                  rows={4}
                  className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 text-base"
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="A clear shot of an office building's facade..."
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="formImage"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Image (Mandatory for Add, Optional for Edit)
                </label>
                <input
                  type="file"
                  id="formImage"
                  accept="image/*"
                  className="mt-1 block w-full text-base text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-base file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  onChange={handleImageChange}
                  required={!currentGalleryItem}
                />
                {formImagePreview && (
                  <div className="mt-5">
                    <img
                      src={formImagePreview}
                      alt="Image Preview"
                      className="max-w-full h-40 object-contain rounded-lg shadow-sm border border-gray-200 mx-auto"
                    />
                  </div>
                )}
              </div>
              {message && (
                <p
                  className={`text-center text-base ${
                    message.includes("success") ||
                    message.includes("successful") ||
                    message.includes("added") ||
                    message.includes("updated")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}
              <div className="flex justify-end space-x-4 mt-8">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-8 py-3 border border-gray-300 rounded-lg shadow-md text-xl font-semibold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 border border-transparent rounded-lg shadow-md text-xl font-bold text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out transform hover:scale-105"
                >
                  {currentGalleryItem ? "Update Item" : "Add Item"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
