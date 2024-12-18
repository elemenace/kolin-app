import React from "react";

function About() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#fbe8e3] text-[#7d4d57] px-6 py-12">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-5xl font-serif font-bold text-[#d4677e] mb-6">
          About Us
        </h1>
        <p className="text-lg leading-relaxed text-[#7f4b56]">
          At Flawless Aura, we’re passionate about creating beauty products that
          are simple, effective, and kind to your skin. Our goal is to help you
          embrace your natural beauty with confidence.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-[#7f4b56]">
          From cruelty-free formulations to thoughtful packaging, every detail
          reflects our commitment to quality. Join us on this journey to
          effortless beauty.
        </p>
      </div>
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center rounded-full">
        <img
          src="/cosmitics.jpg" // Image from public folder
          alt="About Us"
          className="rounded-lg shadow-xl w-full max-w-md"
        />
      </div>
    </section>
  );
}

export default About;
