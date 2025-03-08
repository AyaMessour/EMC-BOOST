import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "@inertiajs/react";

import Banner from "./Banner";
import logo from "./Photos/logo.png"
import Worker from "./Photos/Worker.png";
import Services from "./Services";
import Footer from "./Footer";
import Categories from "./Categories" ;
function Home() {
  return (
    <>
    <div className=" w-full bg-gradient-to-b from-blue-300 via-sky-600 to-sky-900">
            {/* Navigation */}
            <nav className="fixed w-full top-0 left-0 z-10 shadow-lg bg-white">
  <div className="container mx-auto flex justify-between items-center p-4">
    <img src={logo} alt="Company Logo" className="h-12 w-13" />
    {/* Hamburger Menu for Mobile */}
    <button className="md:hidden block text-gray-800 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
    {/* Navigation Links */}
    <ul className="hidden md:flex space-x-8 md:text-xl text-lg font-semibold text-gray-800">
      <li className="relative group">
        <Link href="/Menu" className="hover:text-amber-500 transition-all ease-in-out duration-300">
          Produits
        </Link>
        {/* Dropdown Menu */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden mt-2 space-y-2 bg-white/95 backdrop-blur-sm shadow-lg rounded-lg group-hover:block p-4 min-w-[200px]">
          <Link href="/category/windows" className="block text-xl text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300">Windows</Link>
          <Link href="/category/doors" className="block text-xl text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300">Doors</Link>
          <Link href="/category/facades" className="block text-xl text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300">Facades</Link>
          {/* Add more categories if needed */}
        </div>
      </li>
      <li>
        <Link href="/about" className="hover:text-amber-500 transition-all ease-in-out duration-300">
          About
        </Link>
      </li>
      <li>
        <Link href="/services" className="hover:text-amber-500 transition-all ease-in-out duration-300">
          Services
        </Link>
      </li>
      <li>
        <Link href="/Contact" className="hover:text-amber-500 transition-all ease-in-out duration-300">
          Contact
        </Link>
      </li>
      <li>
        <Link href="/cart" className="hover:text-amber-500 transition-all ease-in-out duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l3 9h9l3-9h2M6 15h12m-7 4v-4" />
          </svg>
        </Link>
      </li>
    </ul>
  </div>
</nav>


      {/* Hero Section */}
      <section className="relative w-full h-full p-5 flex items-center justify-center text-white text-center px-6">
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
<img src={Worker} className=" w-97 bottom-6 m-3 h-53" alt="" />
      
      </section>
     

    </div>
  
    <br />
   
    <Banner></Banner>
    <Categories></Categories>
    <Services></Services>
    <Footer></Footer>
    </>
  );
}

export default Home;
