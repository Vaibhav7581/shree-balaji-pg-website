import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Wifi,
  UtensilsCrossed,
  Shirt,
  Shield,
  Zap,
  Droplets,
  Wind,
  Tv,
  Sofa,
  Utensils,
  Smartphone,
  Leaf,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function Amenities() {
  const amenitiesList = [
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description:
        "Unlimited high-speed internet with 24/7 connectivity. Perfect for work-from-home and entertainment.",
    },
    {
      icon: UtensilsCrossed,
      title: "3-Time Meals",
      description:
        "Delicious North & South Indian cuisine. Breakfast, lunch, and dinner prepared fresh daily. Sunday special meals included.",
    },
    {
      icon: Shirt,
      title: "Laundry Service",
      description:
        "Weekly laundry service included. Professional washing and ironing of your clothes.",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description:
        "CCTV surveillance in all common areas. Biometric entry system. Gated premises with security personnel.",
    },
    {
      icon: Zap,
      title: "Power Backup",
      description:
        "Generator backup for common areas. Uninterrupted power supply during outages.",
    },
    {
      icon: Droplets,
      title: "RO Water Purifier",
      description:
        "Pure drinking water with RO water purification system. Geyser in all bathrooms.",
    },
    {
      icon: Wind,
      title: "Air Conditioning",
      description:
        "AC available in rooms (optional). Climate control for comfort in all seasons.",
    },
    {
      icon: Tv,
      title: "Common Lounge",
      description:
        "Spacious lounge with TV, comfortable seating, and entertainment options.",
    },
    {
      icon: Sofa,
      title: "Study Area",
      description:
        "Dedicated study area with proper lighting and quiet environment for focused work.",
    },
    {
      icon: Utensils,
      title: "Kitchen Facilities",
      description:
        "Microwave and refrigerator available in common areas for your convenience.",
    },
    {
      icon: Smartphone,
      title: "Responsive Management",
      description:
        "Quick issue resolution. Friendly and helpful management team available 24/7.",
    },
    {
      icon: Leaf,
      title: "Clean Environment",
      description:
        "Daily room cleaning and maintenance. Hygienic common areas. Regular pest control.",
    },
  ];

  const roomFeatures = [
    "Quality mattress & premium bedding",
    "Wooden study desk & comfortable chair",
    "Spacious wardrobe/storage",
    "Window with natural light & ventilation",
    "Attached or shared bathroom (as per room type)",
    "Daily cleaning included",
    "Individual reading lamp",
    "Adequate electrical outlets",
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Amenities
          </h1>
          <p className="text-lg text-blue-100">
            Everything you need for a comfortable and productive stay
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenitiesList.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <Card
                  key={amenity.title}
                  className="p-6 border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <Icon className="text-orange-500 mb-4" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Room Features */}
      <section className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Room Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663479052245/DXG6ifuLrLFsa2RDADA3Nn/room-interior-single-BhFvEPyMDdvfsFgECg33qq.webp"
                alt="Room Interior"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div>
              <ul className="space-y-4">
                {roomFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Shree Balaji PG?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">3.7/5</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Highly Rated
              </h3>
              <p className="text-gray-600">
                Trusted by 26+ verified residents with excellent reviews
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">24/7</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Always Available
              </h3>
              <p className="text-gray-600">
                Responsive management team ready to help anytime
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">✓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Safe & Secure
              </h3>
              <p className="text-gray-600">
                24/7 CCTV surveillance and biometric security system
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Premium Living
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Book your room today and enjoy all these amenities!
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
