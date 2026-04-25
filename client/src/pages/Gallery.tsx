import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      title: "Building Exterior",
      description: "Modern PG building with welcoming entrance",
      image: "/manus-storage/pg_building_exterior_real_4709eae0.webp",
      category: "Building",
    },
    {
      id: 2,
      title: "Double Sharing Room",
      description: "Spacious room with two beds and study desks",
      image: "/manus-storage/pg_room_real_photo_1_d147f1aa.webp",
      category: "Rooms",
    },
    {
      id: 3,
      title: "Room Interior",
      description: "Well-furnished room with wardrobe and storage",
      image: "/manus-storage/pg_room_real_photo_2_4f4637e9.webp",
      category: "Rooms",
    },
    {
      id: 4,
      title: "Dining Area",
      description: "Hygienic dining area with fresh, delicious meals",
      image: "/manus-storage/pg_room_real_photo_1_d147f1aa.webp",
      category: "Dining",
    },
    {
      id: 5,
      title: "Location Map",
      description: "Strategic location near major IT companies",
      image: "/manus-storage/pg_building_exterior_real_4709eae0.webp",
      category: "Location",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(galleryImages.map((img) => img.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const handleWhatsApp = () => {
    const message =
      "Hi, I'm interested in Shree Balaji PG in Hinjewadi. Please share details about available rooms and pricing.";
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encoded}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky CTA Bar - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg md:hidden z-50 flex gap-2 p-3">
        <Button
          onClick={handleCall}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center gap-2"
        >
          <Phone size={18} />
          Call
        </Button>
        <Button
          onClick={handleWhatsApp}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center gap-2"
        >
          <MessageCircle size={18} />
          WhatsApp
        </Button>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-lg text-blue-100">
            Explore our rooms, amenities, and facilities
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
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
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.image)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end">
                    <div className="w-full bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="font-bold text-lg">{image.title}</h3>
                      <p className="text-sm text-gray-200">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="mt-4 w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Visit?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Schedule a tour or get more information about our facilities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleCall}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 rounded-lg text-lg font-semibold flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call: +91-9876543210
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-lg text-lg font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Shree Balaji PG
              </h3>
              <p className="text-sm">
                Premium accommodation for IT professionals and students in
                Hinjewadi, Pune.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/amenities" className="hover:text-white transition">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="hover:text-white transition">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li>Phone: +91-9876543210</li>
                <li>
                  Address: Laxmi Chowk, Phase 1, Hinjewadi, Pune 411057
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>
              &copy; 2026 Shree Balaji PG. All rights reserved. | Privacy
              Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
