import { useState } from "react";
import { Link } from "@inertiajs/react"; // Importez Link depuis @inertiajs/react
import logo1 from "./Photos/logo.png";

const Navbar = ({ logo, scrollToSection }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed w-full h-13 m-2 left-0 z-10 shadow-lg bg-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <img src={logo1} alt="Company Logo" className="h-12 w-auto" />

        {/* Navigation Links */}
        <ul className="flex space-x-8 md:text-xl text-lg font-semibold text-gray-800">
       
<Link
                      href="/" // Lien vers la route /Cuisine
                      onClick={() => setShowDropdown(false)} // Fermer le dropdown
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                     Home
                    </Link>
          {/* Dropdown Menu */}
          <li className="relative group">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="hover:text-amber-500 transition-all focus:outline-none"
            >
              Produits ▼
            </button>
            {showDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20">
                <Link href="/Windows">
                  <span
                    onClick={() => setShowDropdown(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left cursor-pointer"
                  >
                    Fenetre
                  </span>
                </Link>
                <Link href="/Cuisine">
                  <span
                    onClick={() => setShowDropdown(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left cursor-pointer"
                  >
                    Cuisine
                  </span>
                </Link>
                <Link href="/Doors">
                  <span
                    onClick={() => setShowDropdown(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left cursor-pointer"
                  >
                    Les portes
                  </span>
                </Link>
                <Link href="/Signs">
                  <span
                    onClick={() => setShowDropdown(false)}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left cursor-pointer"
                  >
                    Enseigne lumineuse
                  </span>
                </Link>
              </div>
            )}
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;