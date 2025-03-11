import React from "react";
import window1 from "./Photos/product/window-1.jpeg";
import window2 from "./Photos/product/window-2.jpeg";
import window3 from "./Photos/product/window-3.jpeg";
import window4 from "./Photos/product/window-4.jpeg";
import window5 from "./Photos/product/window-5.jpg";
import window6 from "./Photos/product/window-6.jpeg";
import window7 from "./Photos/product/window-12.jpg";
import window8 from "./Photos/product/window-7.jpeg";
import window9 from "./Photos/product/window-8.jpeg";
import window10 from "./Photos/product/window-9.jpg";
import window11 from "./Photos/product/window-10.jpg";
import window12 from "./Photos/product/window-11.jpg";
import window13 from "./Photos/product/window-13.jpg";
import Footer from "./Footer";
import { Link } from "@inertiajs/react";
import Navbar from "./Navbar";
const products = [
  
        { id: 1, name: "Fenêtre Moderne ", image: window1, description: "Design épuré avec cadre en aluminium ." },
        { id: 2, name: "Fenêtre Rustique en Bois", image: window2, description: "Un style chaleureux avec du bois massif naturel." },
        { id: 3, name: "Fenêtre Minimaliste", image: window3, description: "Cadre fin et verre haute performance pour plus de lumière." },
        { id: 4, name: "Fenêtre Noire et Or", image: window4, description: "Un design luxueux avec un cadre noir et détails dorés." },
        { id: 5, name: "Fenêtre Scandinave", image: window5, description: "Inspirée du style nordique avec bois clair et finitions épurées." },
        { id: 6, name: "Fenêtre en Baie avec Volets", image: window6, description: "Idéale pour maximiser la lumière et l’aération." },
        { id: 7, name: "Fenêtre à Battant", image: window7, description: "Un système classique et efficace pour une ouverture facile." },
        { id: 8, name: "Fenêtre Industrielle", image: window8, description: "Mélange de métal et de verre pour un look moderne et robuste." },
        { id: 9, name: "Fenêtre avec Store Intégré", image: window9, description: "Un design pratique avec un store intégré entre les vitres." },
        { id: 10, name: "Fenêtre Écologique", image: window10, description: "Double vitrage avec isolation thermique et phonique renforcée." },
        { id: 11, name: "Fenêtre Panoramique", image: window11, description: "Une large ouverture pour une vue imprenable." },
        { id: 12, name: "Fenêtre Coulissante", image: window12, description: "Idéale pour les petits espaces et une ouverture fluide." },
        { id: 13, name: "Fenêtre avec Vitraux", image: window13, description: "Une touche artistique avec des motifs colorés en verre." },
      ];
      
   
function Cuisine() {
  return (
    <>
    <Navbar></Navbar>
    <section id="cuisine" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold  m-12 text-gray-800">Nos Modèles de  Fenêtre </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-3">
        Découvrez notre sélection de fenêtre modernes, classiques et personnalisées adaptées à tous les espaces.
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
