import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center py-4 px-6 bg-transparent z-20 shadow-lg">
      {/* Brand Name */}
      <div className="text-3xl font-serif font-bold text-[#d4677e]">
        <Link to="/">Flawless Aura</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-[#7f4b56]">
        <li className="hover:text-[#d4677e] transition duration-300">
          <Link to="/">HOME</Link> {/* Added Home Link */}
        </li>
        <li className="hover:text-[#d4677e] transition duration-300">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="hover:text-[#d4677e] transition duration-300">
          <Link to="/shop">SHOP</Link>
        </li>
        <li className="hover:text-[#d4677e] transition duration-300">
          <Link to="/cosmetics">COSMETICS</Link>
        </li>
        <li className="hover:text-[#d4677e] transition duration-300">
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>

      {/* Social Media Icons */}
      <div className="flex space-x-7 text-[#7f4b56]">
        <a
          href="#facebook"
          className="hover:text-[#d4677e] transition duration-300"
        >
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </a>
        <a
          href="#twitter"
          className="hover:text-[#d4677e] transition duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a
          href="#instagram"
          className="hover:text-[#d4677e] transition duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
