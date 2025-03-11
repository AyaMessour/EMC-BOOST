import React from "react";
import kitchenImage1 from "./Photos/signs/sign-1.jpg";
import kitchenImage2 from "./Photos/signs/sign-2.jpg";
import kitchenImage3 from "./Photos/signs/sign-3.jpg";
import kitchenImage4  from "./Photos/signs/sign-4.jpg";
import kitchenImage5 from "./Photos/signs/sign-5.jpg";
import kitchenImage6 from "./Photos/signs/sign-6.jpg";
import kitchenImage7 from "./Photos/signs/sign-7.jpg";
import kitchenImage8 from "./Photos/signs/sign-8.jpg";

import Footer from "./Footer";
import Navbar from "./Navbar";

import { Link } from "@inertiajs/react";
const products = [
  { id: 1, name: "Cuisine Moderne Blanche", image:kitchenImage1, description: "Design épuré avec finitions en marbre." },
  { id: 2, name: "Cuisine Rustique en Bois", image: kitchenImage2, description: "Un style chaleureux et authentique en bois massif." },
  { id: 3, name: "Cuisine Minimaliste", image: kitchenImage3 , description: "Espaces optimisés et lignes modernes." },
  { id: 4, name: "Cuisine Noire et Or", image: kitchenImage4, description: "Un design luxueux avec une touche dorée." },
  { id: 5, name: "Cuisine Scandinave", image: kitchenImage5, description: "Inspirée du style nordique avec bois clair et blanc." },
  { id: 6, name: "Cuisine en U avec îlot", image: kitchenImage6, description: "Idéale pour les grands espaces et les familles." },
  { id: 7, name: "Cuisine en L", image: kitchenImage7, description: "Parfaite pour optimiser l’espace dans les coins." },
  { id: 8, name: "Cuisine industrielle", image: kitchenImage8, description: "Mélange de métal, bois et béton pour un look moderne." },

];

function Cuisine() {
  return (
    <>
    <Navbar></Navbar>
    <section id="cuisine" className="py-16 px-6 bg-gray-100 text-center">
      
      <h2 className="text-3xl  m-12 font-bold text-gray-800">Nos Modèles de Cuisines</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-3">
        Découvrez notre sélection de cuisines modernes, classiques et personnalisées adaptées à tous les espaces.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-50 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
     
    </section>
    <Footer></Footer>
    </>
    
  );
}

export default Cuisine;
