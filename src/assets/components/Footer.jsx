import React from "react";

function Footer() {
  return (
    <footer className="bg-[#f4bcc8] text-[#4B3E28] py-6 w-full shadow-lg">
      <div className="container mx-auto px-6 text-center">
        {/* Footer Content */}
        <p className="text-sm text-[#6B4A32]">
          &copy; {new Date().getFullYear()} Flawless Aura. All rights reserved.
        </p>

        <div className="mt-4">
          <a href="#!" className="text-[#4B3E28] hover:text-[#d4677e] mx-2">
            Cosmetics
          </a>
          <a href="#!" className="text-[#4B3E28] hover:text-[#d4677e] mx-2">
            Services
          </a>
          <a href="#!" className="text-[#4B3E28] hover:text-[#d4677e] mx-2">
            About
          </a>
          <a href="#!" className="text-[#4B3E28] hover:text-[#d4677e] mx-2">
            Testimonials
          </a>
          <a href="#!" className="text-[#4B3E28] hover:text-[#d4677e] mx-2">
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
