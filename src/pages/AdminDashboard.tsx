// src/pages/AdminDashboard.js
import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import axios from "axios";

const CLOUDINARY_UPLOAD_PRESET = "itek_gallery_unsigned";
const CLOUDINARY_CLOUD_NAME = "dywd8r6rd";

type GalleryItem = {
  _id: string;
  title?: string;
  category?: string;
  description?: string;
  image?: string;
  mediaType?: string;
  date: string;
};

const AdminDashboard = () => {
  const auth = useAuth();
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGalleryItem, setCurrentGalleryItem] =
    useState<GalleryItem | null>(null);
  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formMedia, setFormMedia] = useState<File | null>(null);
  const [formMediaPreview, setFormMediaPreview] = useState("");
  const [formMediaType, setFormMediaType] = useState("");
  // ⚠️ UPDATED: Renamed `message` to `formMessage` for in-modal errors
  const [formMessage, setFormMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // ⚠️ NEW: State for the global notification banner
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  // const API_BASE_URL = "https://itekconstruction.onrender.com/api/gallery";
  const API_BASE_URL = "http://localhost:5000/api/gallery";

  useEffect(() => {
    if (auth && auth.token) {
      fetchGalleryItems();
    }
  }, [auth?.token]);

  // ⚠️ NEW: Effect for managing the notification's auto-hide timer
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  if (!auth) {
    return (
      <div className="text-center p-12 text-xl text-red-600">
        Error: Authentication context not available. This page should be
        protected.
      </div>
    );
  }
  const { token, user, logout } = auth;

  const fetchGalleryItems = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(API_BASE_URL);
      if (response.ok) {
        const data: GalleryItem[] = await response.json();
        const sortedData = [...data].sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        setGalleryItems(sortedData);
        setCurrentPage(1);
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

  const uploadToCloudinary = async (file: File) => {
    try {
      setIsUploading(true);
      setUploadProgress(0);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const isVideo = file.type.startsWith("video/");
      const resourceType = isVideo ? "video" : "image";
      const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`;

      const response = await axios.post(url, formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total ?? 1)
          );
          setUploadProgress(percentCompleted);
        },
      });

      setIsUploading(false);
      setUploadProgress(0);
      return { url: response.data.secure_url, mediaType: resourceType };
    } catch (err) {
      setIsUploading(false);
      setUploadProgress(0);
      console.error("Cloudinary upload error:", err);
      throw new Error("Failed to upload media to Cloudinary.");
    }
  };

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormMedia(file);
    if (file) {
      setFormMediaPreview(URL.createObjectURL(file));
      setFormMediaType(file.type.startsWith("video/") ? "video" : "image");
    } else {
      setFormMediaPreview("");
      setFormMediaType("");
    }
  };

  const openModal = (item: GalleryItem | null = null) => {
    setCurrentGalleryItem(item);
    setFormTitle(item ? item.title || "" : "");
    setFormCategory(item ? item.category || "" : "");
    setFormDescription(item ? item.description || "" : "");
    setFormMedia(null);
    setFormMediaType(item ? item.mediaType || "" : "");
    setFormMediaPreview(item && item.image ? item.image : "");
    setFormMessage(""); // ⚠️ UPDATED: Use formMessage
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentGalleryItem(null);
    setFormTitle("");
    setFormCategory("");
    setFormDescription("");
    setFormMedia(null);
    setFormMediaPreview("");
    setFormMediaType("");
    setFormMessage(""); // ⚠️ UPDATED: Use formMessage
    setIsUploading(false);
    setUploadProgress(0);
  };

  // ⚠️ UPDATED: Handle form submission to use the new notification state
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormMessage("");

    let mediaUrl = currentGalleryItem?.image;
    let mediaType = currentGalleryItem?.mediaType;

    if (formMedia) {
      try {
        const uploadResult = await uploadToCloudinary(formMedia);
        mediaUrl = uploadResult.url;
        mediaType = uploadResult.mediaType;
      } catch (err: any) {
        setFormMessage(err.message || "Failed to upload media.");
        return;
      }
    } else if (!currentGalleryItem) {
      setFormMessage("Please upload an image or video for new gallery items.");
      return;
    }

    const galleryData = {
      title: formTitle,
      category: formCategory,
      description: formDescription,
      image: mediaUrl,
      mediaType: mediaType,
    };

    const method = currentGalleryItem ? "PUT" : "POST";
    const url = currentGalleryItem
      ? `${API_BASE_URL}/${currentGalleryItem._id}`
      : API_BASE_URL;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token ?? "",
        },
        body: JSON.stringify(galleryData),
      });

      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (jsonError) {
        console.error("Frontend: Failed to parse JSON response:", jsonError);
        setFormMessage("Server returned non-JSON response.");
        return;
      }

      if (response.ok) {
        setNotification({
          message:
            data.msg ||
            (currentGalleryItem
              ? "Item updated successfully!"
              : "Item added successfully!"),
          type: "success",
        });
        fetchGalleryItems();
        closeModal();
      } else {
        setFormMessage(data.msg || "Operation failed.");
      }
    } catch (err) {
      setFormMessage("Network error during operation.");
      console.error("Frontend: Fetch error:", err);
    }
  };

  // ⚠️ UPDATED: Handle delete to use the new notification state
  const handleDelete = async (id: string) => {
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

    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "x-auth-token": token ?? "",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setNotification({
          message: data.msg || "Item deleted successfully.",
          type: "success",
        });
        fetchGalleryItems();
      } else {
        setNotification({
          message: data.msg || "Deletion failed.",
          type: "error",
        });
      }
    } catch (err) {
      setNotification({
        message: "Network error during deletion.",
        type: "error",
      });
      console.error("Delete gallery item error:", err);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = galleryItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading)
    return (
      <div className="text-center p-12 text-xl text-gray-700">
        Loading gallery items...
      </div>
    );
  if (error)
    return (
      <div className="text-center p-12 text-xl text-red-600">
        Error: {error}
      </div>
    );

  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      {/* ⚠️ NEW: Notification Banner */}
      {notification && (
        <div
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-lg shadow-xl text-white font-medium transition-all duration-300 ease-out transform ${
            notification.type === "success"
              ? "bg-green-500 opacity-100 scale-100"
              : "bg-red-500 opacity-100 scale-100"
          }`}
        >
          {notification.message}
        </div>
      )}

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentItems.length === 0 ? (
          <p className="col-span-full text-center text-gray-600 text-2xl py-10">
            No gallery items found. Click "Add New Gallery Item" to get started!
          </p>
        ) : (
          currentItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition duration-300 hover:scale-103 hover:shadow-xl"
            >
              {item.mediaType === "video" ? (
                <video
                  src={item.image}
                  controls
                  className="w-full h-56 object-cover object-center"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title || "Gallery Image"}
                  className="w-full h-56 object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://placehold.co/400x300/e0e0e0/555555?text=Image+Not+Found";
                  }}
                />
              )}
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
          ))
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
          {/* ⚠️ UPDATED: Constrained modal size and added vertical scrolling */}
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-3xl mx-auto relative transform transition-all duration-300 scale-100 opacity-100 border border-gray-100 max-h-[90vh] overflow-y-auto">
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
                  htmlFor="formMedia"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Media (Image or Video)
                </label>
                <input
                  type="file"
                  id="formMedia"
                  accept="image/*,video/*"
                  className="mt-1 block w-full text-base text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-base file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  onChange={handleMediaChange}
                  required={!currentGalleryItem}
                />
                {formMediaPreview && (
                  <div className="mt-5">
                    {formMediaType === "video" ? (
                      <video
                        src={formMediaPreview}
                        controls
                        className="max-w-full h-40 object-contain rounded-lg shadow-sm border border-gray-200 mx-auto"
                      />
                    ) : (
                      <img
                        src={formMediaPreview}
                        alt="Media Preview"
                        className="max-w-full h-40 object-contain rounded-lg shadow-sm border border-gray-200 mx-auto"
                      />
                    )}
                  </div>
                )}
              </div>
              {isUploading && (
                <div className="space-y-2 mt-4">
                  <p className="text-sm font-semibold text-gray-700">
                    Uploading... {uploadProgress}%
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-orange-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              {formMessage && ( // ⚠️ UPDATED: Use formMessage
                <p
                  className={`text-center text-base ${
                    formMessage.includes("success")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {formMessage}
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
                  disabled={isUploading}
                  className="px-8 py-3 border border-transparent rounded-lg shadow-md text-xl font-bold text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isUploading
                    ? `Uploading... ${uploadProgress}%`
                    : currentGalleryItem
                    ? "Update Item"
                    : "Add Item"}
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