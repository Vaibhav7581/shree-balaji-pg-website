import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, MapPin, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send to a backend
    alert(
      "Thank you for your message! We will get back to you soon via WhatsApp or phone."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-blue-100">
            Get in touch with us for inquiries and bookings
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 border-0 shadow-md text-center">
              <Phone className="text-blue-600 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <a
                href="tel:+919876543210"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                +91-9876543210
              </a>
            </Card>

            <Card className="p-6 border-0 shadow-md text-center">
              <MessageCircle className="text-green-500 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
              <button
                onClick={handleWhatsApp}
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Send Message
              </button>
            </Card>

            <Card className="p-6 border-0 shadow-md text-center">
              <MapPin className="text-orange-500 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-sm text-gray-600">
                Laxmi Chowk, Phase 1, Hinjewadi, Pune 411057
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-md text-center">
              <Clock className="text-purple-500 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Available</h3>
              <p className="text-sm text-gray-600">24/7 Support</p>
            </Card>
          </div>

          {/* Contact Form & Map */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="+91-9876543210"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Tell us about your inquiry..."
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button
                    onClick={handleCall}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    Call Now
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Map & Address */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Find Us
              </h2>

              {/* Google Maps Embed */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8674892968854!2d73.73223!3d18.59227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbf8f82863bd%3A0xf057fc90302559d5!2sShree%20Balaji%20PG!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Address Details */}
              <Card className="p-6 border-0 shadow-md">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Address
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Shree Balaji PG
                      </p>
                      <p className="text-gray-600 text-sm">
                        JP2J+8X7, Sairung Paradise Hinjawadi Marunji Road,
                        Laxmi Chowk Rd, Pune, Maharashtra 411057, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a
                        href="tel:+919876543210"
                        className="text-blue-600 hover:text-blue-700 text-sm"
                      >
                        +91-9876543210
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Availability
                      </p>
                      <p className="text-gray-600 text-sm">24/7 Open</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What is the booking process?",
                a: "Contact us via phone or WhatsApp, visit the PG, finalize room selection, and complete the booking with security deposit and first month's rent.",
              },
              {
                q: "What is the security deposit amount?",
                a: "The security deposit is typically 1-2 months' rent, which is refundable after vacating the PG.",
              },
              {
                q: "Are utilities included in the rent?",
                a: "Yes, WiFi, water, electricity, and laundry are included. Food charges are separate if opted.",
              },
              {
                q: "Can I get a room on short notice?",
                a: "Yes, we try to accommodate short-notice bookings based on room availability. Contact us immediately for urgent requirements.",
              },
              {
                q: "Is there a notice period for leaving?",
                a: "Typically, 30 days' notice is required. Please discuss specific terms during booking.",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6 border-0 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </Card>
            ))}
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
