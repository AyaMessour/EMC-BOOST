import React from "react";
import kitchenImage1 from "./Photos/product/door-1.jpeg";
import kitchenImage2 from "./Photos/product/door-2.jpeg";
import kitchenImage3 from "./Photos/product/door-3.jpeg";
import kitchenImage4 from "./Photos/product/door-4.jpeg";
import kitchenImage5 from "./Photos/product/door-5.jpeg";
import kitchenImage6 from "./Photos/product/door-6.jpeg";
import kitchenImage7 from "./Photos/product/door-7.jpeg";
import kitchenImage9 from "./Photos/product/door-8.jpeg";
import kitchenImage8 from "./Photos/product/door-9.jpeg";
import kitchenImage10 from "./Photos/product/door-10.jpeg";
import kitchenImage11 from "./Photos/product/door-11.jpeg";
import kitchenImage12 from "./Photos/product/door-12.jpeg";
import kitchenImage13 from "./Photos/product/door-13.jpeg";
import kitchenImage14 from "./Photos/product/door-14.jpeg";
import kitchenImage15 from "./Photos/product/door-15.jpg";
import kitchenImage16 from "./Photos/product/door-16.jpg";
import kitchenImage17 from "./Photos/product/door-17.jpg";
import kitchenImage18 from "./Photos/product/door-18.jpg";
import kitchenImage19 from "./Photos/product/door-19.jpg";
import kitchenImage20 from "./Photos/product/door-20.jpg";
import kitchenImage21 from "./Photos/product/door-21.jpg";
import kitchenImage22 from "./Photos/product/door-22.jpg";
import kitchenImage23 from "./Photos/product/door-23.jpg";
import kitchenImage25 from "./Photos/product/door-24.jpg";
import kitchenImage24 from "./Photos/product/door-25.jpg";
import kitchenImage26 from "./Photos/product/door-26.jpg";

import Footer from "./Footer";
import Navbar from "./Navbar";


const products = [
  { id: 1, name: "Cuisine Moderne Blanche", image:kitchenImage1, description: "Design épuré avec finitions en marbre." },
  { id: 2, name: "Cuisine Rustique en Bois", image: kitchenImage2, description: "Un style chaleureux et authentique en bois massif." },
  { id: 3, name: "Cuisine Minimaliste", image: kitchenImage3 , description: "Espaces optimisés et lignes modernes." },
  { id: 4, name: "Cuisine Noire et Or", image: kitchenImage4, description: "Un design luxueux avec une touche dorée." },
  { id: 5, name: "Cuisine Scandinave", image: kitchenImage5, description: "Inspirée du style nordique avec bois clair et blanc." },
  { id: 6, name: "Cuisine en U avec îlot", image: kitchenImage6, description: "Idéale pour les grands espaces et les familles." },
  { id: 7, name: "Cuisine en L", image: kitchenImage7, description: "Parfaite pour optimiser l’espace dans les coins." },
  { id: 8, name: "Cuisine industrielle", image: kitchenImage8, description: "Mélange de métal, bois et béton pour un look moderne." },
  { id: 9, name: "Cuisine Rustique en Bois", image: kitchenImage9, description: "Un style chaleureux et authentique en bois massif." },
  { id: 10, name: "Cuisine Minimaliste", image: kitchenImage10 , description: "Espaces optimisés et lignes modernes." },
  { id: 11, name: "Cuisine Noire et Or", image: kitchenImage11, description: "Un design luxueux avec une touche dorée." },
  { id: 12, name: "Cuisine Scandinave", image: kitchenImage12, description: "Inspirée du style nordique avec bois clair et blanc." },
  { id: 13, name: "Cuisine en U avec îlot", image: kitchenImage13, description: "Idéale pour les grands espaces et les familles." },
  { id: 14, name: "Cuisine en L", image: kitchenImage14, description: "Parfaite pour optimiser l’espace dans les coins." },
  { id: 15, name: "Cuisine industrielle", image: kitchenImage15, description: "Mélange de métal, bois et béton pour un look moderne." },
  { id: 16, name: "Cuisine Rustique en Bois", image: kitchenImage16, description: "Un style chaleureux et authentique en bois massif." },
  { id: 17, name: "Cuisine Minimaliste", image: kitchenImage17 , description: "Espaces optimisés et lignes modernes." },
  { id: 18, name: "Cuisine Noire et Or", image: kitchenImage18, description: "Un design luxueux avec une touche dorée." },
  { id: 19, name: "Cuisine Scandinave", image: kitchenImage19, description: "Inspirée du style nordique avec bois clair et blanc." },
  { id: 20, name: "Cuisine en U avec îlot", image: kitchenImage20, description: "Idéale pour les grands espaces et les familles." },
  { id: 21, name: "Cuisine en L", image: kitchenImage21, description: "Parfaite pour optimiser l’espace dans les coins." },
  { id: 22, name: "Cuisine industrielle", image: kitchenImage22, description: "Mélange de métal, bois et béton pour un look moderne." },
  { id: 23, name: "Cuisine Rustique en Bois", image: kitchenImage23, description: "Un style chaleureux et authentique en bois massif." },
  { id: 24, name: "Cuisine Minimaliste", image: kitchenImage24 , description: "Espaces optimisés et lignes modernes." },
  { id: 25, name: "Cuisine Noire et Or", image: kitchenImage25, description: "Un design luxueux avec une touche dorée." },
  { id: 26, name: "Cuisine Scandinave", image: kitchenImage26, description: "Inspirée du style nordique avec bois clair et blanc." },

];

function Cuisine() {
  return (
    <>
    <Navbar></Navbar>
    <section id="cuisine" className="py-16 px-6 bg-gray-100 text-center">
      
      <h2 className="text-3xl font-bold  m-12 text-gray-800">Nos Modèles de Cuisines</h2>
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
