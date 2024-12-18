import React from "react";

function Cosmetics() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center bg-[#fef7f2] text-[#5a3e3a] px-6 py-12">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/cosmetics2.jpg" // Replace with your actual image path
          alt="Cosmetics"
          className="rounded-lg  w-full max-w-md"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-5xl font-serif font-bold text-[#d4677e] mb-6">
          Cosmetics
        </h1>
        <p className="text-lg leading-relaxed text-[#7f4b56]">
          Whether it’s a subtle touch or a bold look, our cosmetics are made for
          everyone. Play with colors, try something new, and let your
          personality shine through.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-[#7f4b56]">
          Our collection is designed to celebrate all skin tones and styles.
          Find your next favorite product today!
        </p>
        {/* Call-to-Action Button */}
        <button className="mt-6 px-8 py-3 bg-[#d4677e] text-white rounded-lg text-lg shadow-lg hover:bg-[#c34f67] transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Cosmetics;
