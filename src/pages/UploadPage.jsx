import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const abeUrl = "https://webdev-backends.onrender.com/abe";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get(`${abeUrl}/images`);
      setImages(res.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return alert("Select an image first");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${abeUrl}/upload`, formData, {
        headers: { Authorization: token },
      });
      setImages([...images, res.data]);
      setTitle("");
      setImage(null);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed — please try again.");
    }
  };

  const deleteImage = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`${abeUrl}/images/${id}`, {
        headers: { Authorization: token },
      });
      setImages(images.filter((img) => img._id !== id));
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#F1EEE6] pt-32 pb-16 px-4 sm:px-8 md:px-12 font-[Poppins]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Upload Form */}
        <div className="bg-white/90 p-6 sm:p-8 rounded-2xl shadow-md border border-[#EAE4DA]">
          <h1 className="text-3xl text-[#2E2520] font-[Playfair_Display] mb-6 text-center">
            Upload Artwork
          </h1>

          <form onSubmit={handleUpload} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
              required
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#E07A5F] text-white py-3 rounded-lg font-semibold hover:bg-[#D45A3C] transition"
            >
              Upload
            </button>
          </form>
        </div>

        {/* Uploaded Artworks */}
        <div>
          <h2 className="text-3xl font-[Playfair_Display] text-[#2E2520] mb-6 text-center">
            Uploaded Artworks
          </h2>

          {images.length === 0 ? (
            <p className="text-center text-[#5C5247] italic mt-8">
              No artworks uploaded yet.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((img) => (
                <div
                  key={img._id}
                  className="bg-white/90 p-4 rounded-xl shadow-sm border border-[#EAE4DA] hover:shadow-md transition"
                >
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-56 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold text-[#2E2520] text-center">
                    {img.title}
                  </h3>
                  <div className="flex justify-center mt-3">
                    <button
                      onClick={() => deleteImage(img._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
