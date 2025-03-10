import React, { useState } from "react";
import { Link } from "@inertiajs/react"; // Importez Link depuis @inertiajs/react
import Banner from "./Banner";
import logo from "./Photos/logo.png";
import Worker from "./Photos/Worker.png";
import Services from "./Services";
import Footer from "./Footer";
import Categories from "./Categories";
import ContactForm from "./ContactForm";

function Home() {
  // État pour afficher le menu déroulant
  const [showDropdown, setShowDropdown] = useState(false);

  // Fonction pour faire défiler jusqu'à une section
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full bg-gradient-to-b from-sky-500 to-blue-900">
        {/* Navigation */}
        <nav className="fixed w-full top-0 left-0 z-10 shadow-lg bg-white">
          <div className="container mx-auto flex justify-between items-center p-4">
            <img src={logo} alt="Company Logo" className="h-12 w-13" />

            {/* Navigation Links */}
            <ul className="flex space-x-8 md:text-xl text-lg font-semibold text-gray-800">
              <li>
                <button onClick={() => scrollToSection("home")} className="hover:text-amber-500 transition-all">
                  Home
                </button>
              </li>

              {/* Menu déroulant Produits */}
              <li className="relative group">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="hover:text-amber-500 transition-all"
                >
                  Produits ▼
                </button>
                {showDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20">
                    <button
                      onClick={() => { scrollToSection("windows"); setShowDropdown(false); }}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                      Windows
                    </button>
                    <Link
                      href="/Cuisine" // Lien vers la route /Cuisine
                      onClick={() => setShowDropdown(false)} // Fermer le dropdown
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                      Cuisine
                    </Link>
                    <button
                      onClick={() => { scrollToSection("doors"); setShowDropdown(false); }}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                      Doors
                    </button>
                    <button
                      onClick={() => { scrollToSection("facades"); setShowDropdown(false); }}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                      Facades
                    </button>
                  </div>
                )}
              </li>

              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-amber-500 transition-all">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-amber-500 transition-all">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-amber-500 transition-all">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Sections avec des IDs */}
        <div id="home" className="relative w-full h-full p-5 flex items-center justify-center text-white text-center px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold bg-yellow-300 bg-clip-text text-transparent">
              Nous Construisons La Maison De Vos Rêves
            </h1>
            <p className="text-lg md:text-xl">
              Découvrez nos services de haute qualité pour vos projets de construction et d'aluminium.
            </p>
            <button className="bg-yellow-300 md:text-2xl text-sky-700 px-12 py-3 m-5 rounded-lg hover:bg-black hover:text-white transition-colors duration-300">
              Nos services
            </button>
          </div>
          <img src={Worker} className="w-97 bottom-6 m-3 h-53" alt="Worker" />
        </div>

        <div id="about">
          <Banner />
        </div>

        <div id="categories">
          <Categories />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;