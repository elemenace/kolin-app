import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    // Here, you would typically send the form data to a server or email service.
  };

  return (
    <section className="min-h-screen bg-[#f8f4e8] text-[#4B3E28] px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-12 py-2 text-[#d4677e]">
        Contact Us
      </h1>
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium mb-2 text-[#4B3E28]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#6B4A32] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4677e]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium mb-2 text-[#4B3E28]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#6B4A32] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4677e]"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2 text-[#4B3E28]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#6B4A32] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4677e]"
                placeholder="Your Message"
                rows="6"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[#d4677e] text-white text-lg font-bold rounded-lg hover:bg-[#E7C8B3] focus:outline-none focus:ring-2 focus:ring-[#d4677e]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
