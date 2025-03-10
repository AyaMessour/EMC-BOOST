import React from "react";
import kitchenImage1 from "./Photos/product/kitchen-1.jpeg";
import kitchenImage2 from "./Photos/product/kitchen-2.jpeg";
import kitchenImage3 from "./Photos/product/kitchen-3.jpeg";
import kitchenImage4  from "./Photos/product/kitchen-4.jpeg";
import kitchenImage5 from "./Photos/product/kitchen-5.jpeg";
import kitchenImage6 from "./Photos/product/kitchen-6.jpeg";
import kitchenImage7 from "./Photos/product/kitchen-7.jpeg";
import kitchenImage8 from "./Photos/product/kitchen-8.jpg";
import kitchenImage9 from "./Photos/product/kitchen-9.jpg";
import kitchenImage10 from "./Photos/product/kitchen-10.jpg";
import kitchenImage11 from "./Photos/product/kitchen-11.jpg";
import kitchenImage12 from "./Photos/product/kitchen-12.jpg";
import kitchenImage13 from "./Photos/product/kitchen-13.jpg";
import kitchenImage14 from "./Photos/product/kitchen-14.jpg";
import kitchenImage15 from "./Photos/product/kitchen-15.jpg";
import kitchenImage16 from "./Photos/product/kitchen-16.jpg";
import kitchenImage18 from "./Photos/product/kitchen-17.jpg";
import kitchenImage19 from "./Photos/product/kitchen-18.jpg";
import kitchenImage17 from "./Photos/product/kitchen-19.jpg";
import kitchenImage20 from "./Photos/product/kitchen-20.jpg";
import kitchenImage21 from "./Photos/product/kitchen-21.jpg";
import kitchenImage22 from "./Photos/product/kitchen-22.jpg";
import kitchenImage23 from "./Photos/product/kitchen-23.jpg";
import Footer from "./Footer";

const products = [
  { id: 1, name: "Cuisine Moderne Blanche", image:kitchenImage1, description: "Design épuré avec finitions en marbre." },
  { id: 2, name: "Cuisine Rustique en Bois", image: kitchenImage2, description: "Un style chaleureux et authentique en bois massif." },
  { id: 3, name: "Cuisine Minimaliste", image: kitchenImage3 , description: "Espaces optimisés et lignes modernes." },
  { id: 4, name: "Cuisine Noire et Or", image: kitchenImage4, description: "Un design luxueux avec une touche dorée." },
  { id: 5, name: "Cuisine Scandinave", image: kitchenImage5, description: "Inspirée du style nordique avec bois clair et blanc." },
  { id: 6, name: "Cuisine en U avec îlot", image: kitchenImage6, description: "Idéale pour les grands espaces et les familles." },
  { id: 7, name: "Cuisine en L", image: kitchenImage7, description: "Parfaite pour optimiser l’espace dans les coins." },
  { id: 8, name: "Cuisine industrielle", image: kitchenImage8, description: "Mélange de métal, bois et béton pour un look moderne." },
  { id: 9, name: "Cuisine avec bar", image: kitchenImage9, description: "Un coin repas intégré pour plus de convivialité." },
  { id: 10, name: "Cuisine verte naturelle", image:kitchenImage10, description: "Une touche de nature avec des finitions bois et vert." },
  { id: 11, name: "Cuisine bleue élégante", image:kitchenImage11, description: "Un design unique avec des teintes apaisantes." },
  { id: 12, name: "Cuisine compacte", image:kitchenImage12, description: "Idéale pour les petits appartements et studios." },
  { id: 13, name: "Cuisine laquée", image: kitchenImage13, description: "Brillance et modernité pour une ambiance haut de gamme." },
  { id: 14, name: "Cuisine avec placards ouverts", image: kitchenImage14, description: "Design aéré avec des rangements accessibles." },
  { id: 15, name: "Cuisine avec mur en brique", image: kitchenImage15, description: "Un look industriel et tendance avec du caractère." },
  { id: 16, name: "Cuisine vintage", image:kitchenImage16, description: "Un retour aux années 50 avec une touche rétro." },
  { id: 17, name: "Cuisine monochrome", image:kitchenImage17, description: "Un style uniforme pour une décoration épurée." },
  { id: 18, name: "Cuisine ultra-moderne", image: kitchenImage18, description: "Haute technologie et finitions high-tech." },
  { id: 19, name: "Cuisine bohème", image: kitchenImage19, description: "Un mélange de styles éclectique et chaleureux." },
  { id: 20, name: "Cuisine en inox", image: kitchenImage20, description: "Professionnelle et résistante, idéale pour les chefs." },
  { id: 21, name: "Cuisine avec verrière", image: kitchenImage21, description: "Séparation élégante entre cuisine et salon." },
  { id: 22, name: "Cuisine asymétrique", image:kitchenImage22, description: "Un design unique avec des formes originales." },
  { id: 23, name: "Cuisine Art Déco", image: kitchenImage23, description: "Un style inspiré des années 20 avec des motifs dorés." },
];

function Cuisine() {
  return (
    <>
    
    <section id="cuisine" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Nos Modèles de Cuisines</h2>
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
