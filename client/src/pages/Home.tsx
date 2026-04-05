import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MapPin,
  Wifi,
  UtensilsCrossed,
  Shirt,
  Shield,
  Zap,
  Star,
  Phone,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("single");

  const rooms = [
    {
      id: "single",
      name: "Single Sharing",
      price: "₹14,000",
      period: "/month",
      description: "Private room with all amenities",
      features: [
        "Private room with study table",
        "Attached bathroom",
        "AC/Non-AC options",
        "Daily cleaning included",
      ],
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663479052245/DXG6ifuLrLFsa2RDADA3Nn/room-interior-single-BhFvEPyMDdvfsFgECg33qq.webp",
    },
    {
      id: "double",
      name: "Double Sharing",
      price: "₹8,500",
      period: "/person/month",
      description: "Spacious room for 2 professionals",
      features: [
        "2 individual beds & study tables",
        "Shared bathroom",
        "Wardrobe & storage",
        "Natural light & ventilation",
      ],
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663479052245/DXG6ifuLrLFsa2RDADA3Nn/room-interior-single-BhFvEPyMDdvfsFgECg33qq.webp",
    },
    {
      id: "triple",
      name: "Triple Sharing",
      price: "₹6,500",
      period: "/person/month",
      description: "Budget-friendly shared accommodation",
      features: [
        "3 individual beds & study tables",
        "Shared bathroom",
        "Spacious room layout",
        "Community-focused environment",
      ],
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663479052245/DXG6ifuLrLFsa2RDADA3Nn/room-interior-single-BhFvEPyMDdvfsFgECg33qq.webp",
    },
  ];

  const amenities = [
    {
      icon: Wifi,
      name: "High-Speed WiFi",
      description: "Unlimited internet for work & entertainment",
    },
    {
      icon: UtensilsCrossed,
      name: "3-Time Meals",
      description: "North & South Indian cuisine daily",
    },
    {
      icon: Shirt,
      name: "Laundry Service",
      description: "Weekly laundry included",
    },
    {
      icon: Shield,
      name: "24/7 Security",
      description: "CCTV surveillance & biometric entry",
    },
    {
      icon: Zap,
      name: "Power Backup",
      description: "Generator backup for common areas",
    },
    {
      icon: MapPin,
      name: "Prime Location",
      description: "Steps away from IT companies",
    },
  ];

  const testimonials = [
    {
      name: "Pravin Gupta",
      role: "IT Professional",
      rating: 5,
      text: "The owner is helpful and takes care of any issues related to the room quickly. Located in Laxmi Chowk which gives good connectivity.",
    },
    {
      name: "Sarojini Parida",
      role: "Student",
      rating: 5,
      text: "PG was very nice and it's given good facility for living. The owner is helpful and takes care of any issue. Food was tasty and quality.",
    },
    {
      name: "Parasanta Shah",
      role: "Working Professional",
      rating: 5,
      text: "The rooms are very good with spacious layout and daily cleaning. Owner is familiar and food was very tasty.",
    },
  ];

  const itCompanies = [
    "Infosys",
    "Wipro",
    "TCS",
    "Accenture",
    "HCLTech",
    "Tech Mahindra",
    "Persistent Systems",
    "Cisco",
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

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663479052245/DXG6ifuLrLFsa2RDADA3Nn/hero-pg-building-normESGiYMd3nrGsrx5ZjZ.webp"
          alt="Shree Balaji PG Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Your Perfect Stay in Hinjewadi Awaits
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Premium PG Accommodation for IT Professionals & Students
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleCall}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-lg text-lg font-semibold flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
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

      {/* Location Highlights */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Laxmi Chowk?
            </h2>
            <p className="text-lg text-gray-600">
              Strategic location with unbeatable connectivity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <MapPin className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                IT Park Proximity
              </h3>
              <p className="text-gray-600">
                Steps away from Infosys, Wipro, TCS, and 200+ IT companies in
                Rajiv Gandhi Infotech Park
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <Zap className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Excellent Connectivity
              </h3>
              <p className="text-gray-600">
                Direct access to Hinjewadi-Wakad Road and Mumbai-Pune Expressway
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <Shield className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Safe & Developed Area
              </h3>
              <p className="text-gray-600">
                Proximity to shopping malls, hospitals, temples, and entertainment
              </p>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nearby IT Companies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {itCompanies.map((company) => (
                <div
                  key={company}
                  className="bg-blue-50 rounded-lg p-4 text-center font-semibold text-blue-700"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Amenities
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for a comfortable stay
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <Card
                  key={amenity.name}
                  className="p-6 border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <Icon className="text-orange-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {amenity.name}
                  </h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rooms & Pricing */}
      <section className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Room Types & Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect room for your budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card
                key={room.id}
                className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {room.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-600">
                      {room.price}
                    </span>
                    <span className="text-gray-600 ml-2">{room.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <ChevronRight
                          size={18}
                          className="text-orange-500 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Inquire Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Residents Say
            </h2>
            <p className="text-lg text-gray-600">
              3.7/5 rating from 26 verified reviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Move In?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Limited rooms available. Contact us today to secure your spot!
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
                  <a href="#rooms" className="hover:text-white transition">
                    Rooms & Pricing
                  </a>
                </li>
                <li>
                  <a href="#amenities" className="hover:text-white transition">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
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
