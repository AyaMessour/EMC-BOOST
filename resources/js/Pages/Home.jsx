
import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import Banner from "./Banner";
import logo from "./Photos/logo.png";
import Worker from "./Photos/Worker.png";
import Services from "./Services";
import Footer from "./Footer";
import Categories from "./Categories";
import ContactForm from "./ContactForm";
import { FiMenu, FiX } from "react-icons/fi";

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <div className="w-full ">
        {/* Navigation */}
        <nav className="fixed w-full top-0 left-0 z-10 shadow-lg bg-white">
          <div className="container mx-auto flex justify-between items-center p-4">
            <img src={logo} alt="Company Logo" className="h-10" />
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              {menuOpen ? (
                <FiX size={30} onClick={() => setMenuOpen(false)} />
              ) : (
                <FiMenu size={30} onClick={() => setMenuOpen(true)} />
              )}
            </div>
            {/* Navigation Links */}
            <ul className={`md:flex md:space-x-8 text-lg font-semibold text-gray-800 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ${menuOpen ? "block" : "hidden"}`}>
              <li>
                <button onClick={() => scrollToSection("home")} className="hover:text-amber-500 transition-all block p-3 md:inline">
                  Home
                </button>
              </li>
              <li className="relative group">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="hover:text-amber-500 transition-all block p-3 md:inline"
                >
                  Produits ▼
                </button>
                {showDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20">
                    {[
                      { name: "Fenêtre", link: "/Windows" },
                      { name: "Cuisine", link: "/Cuisine" },
                      { name: "Les Portes", link: "/Doors" },
                      { name: "Enseigne Lumineuse", link: "/Signs" },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={item.link}
                        onClick={() => setShowDropdown(false)}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              {[
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className="hover:text-amber-500 transition-all block p-3 md:inline">
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Sections */}
    
        <div id="home" className="relative w-full bg-gradient-to-b from-sky-500 to-blue-900 p-7 p-5 flex flex-col md:flex-row items-center justify-center text-white text-center px-6">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold bg-yellow-300 bg-clip-text p-5 m-7 text-transparent">
              Nous Construisons La Maison De Vos Rêves
            </h1>
            <p className="text-lg md:text-xl">
              Découvrez nos services de haute qualité pour vos projets de construction et d'aluminium.
            </p>
            <button className="bg-yellow-300 md:text-2xl text-sky-700 px-12 py-3 m-5 rounded-lg hover:bg-black hover:text-white transition-colors duration-300">
              Nos services
            </button>
          </div>
          <img src={Worker} className="w-full md:w-1/2 h-auto max-w-md" alt="Worker" />
        </div>
        <div id="about" className="p-5">
          <Banner />
        </div>

        <div id="categories" className="p-5">
          <Categories />
        </div>

        <div id="services" className="p-5">
          <Services />
        </div>

        <div id="contact" className="p-5">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
