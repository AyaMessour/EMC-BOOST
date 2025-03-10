import React from "react";

// Importez vos images ici
import windowImage from "./Photos/product/window-4.jpeg";
import windowImage1 from "./Photos/product/window-8.jpeg";
import windowImage2 from "./Photos/product/window-3.jpeg";
import doorImage from "./Photos/product/door-3.jpeg";
import doorImage2 from "./Photos/product/door-12.jpeg";
import doorImage3 from "./Photos/product/door-4.jpeg";

import kitchenImage from "./Photos/product/kitchen-1.jpeg";
import kitchenImage2 from "./Photos/product/kitchen-2.jpeg";
import kitchenImage3 from "./Photos/product/kitchen-4.jpeg";

import facadeImage from "./Photos/product/fasade-1.jpeg";

import facadeImage2 from "./Photos/product/window-7.jpeg";

import facadeImage3 from "./Photos/product/window-2.jpeg";

function Categories() {
  // Données des produits groupées par catégorie
  const categories = [
    {
      name: "Fenêtres",
      products: [
        {
          title: "Fenêtres en Aluminium",
          description: "Des fenêtres modernes et performantes pour votre maison.",
          image: windowImage,
          features: ["Isolation thermique", "Design élégant", "Durabilité"],
        },
        {
          title: "Fenêtres Coulissantes",
          description: "Idéales pour les petits espaces.",
          image: windowImage1,
          features: ["Gain de place", "Facile à utiliser", "Étanchéité optimale"],
        },
        {
          title: "Fenêtres Coulissantes",
          description: "Idéales pour les petits espaces.",
          image: windowImage2,
          features: ["Gain de place", "Facile à utiliser", "Étanchéité optimale"],
        },
      ],
    },
    {
      name: "Portes",
      products: [
        {
          title: "Portes en Aluminium",
          description: "Portes sécurisées et esthétiques pour chaque espace.",
          image: doorImage,
          features: ["Sécurité renforcée", "Design personnalisable", "Facile à entretenir"],
        },
        {
          title: "Portes Coulissantes",
          description: "Parfaites pour les espaces modernes.",
          image: doorImage2,
          features: ["Design minimaliste", "Fonctionnalité optimale", "Durabilité"],
        },
        {
          title: "Portes Coulissantes",
          description: "Parfaites pour les espaces modernes.",
          image: doorImage3,
          features: ["Design minimaliste", "Fonctionnalité optimale", "Durabilité"],
        },
      ],
    },
    {
      name: "Cuisines",
      products: [
        {
          title: "Cuisines sur Mesure",
          description: "Des cuisines fonctionnelles et modernes adaptées à vos besoins.",
          image: kitchenImage,
          features: ["Espace optimisé", "Matériaux de qualité", "Design personnalisé"],
        },
        {
          title: "Cuisines sur Mesure",
          description: "Des cuisines fonctionnelles et modernes adaptées à vos besoins.",
          image: kitchenImage2,
          features: ["Espace optimisé", "Matériaux de qualité", "Design personnalisé"],
        },
        {
          title: "Cuisines sur Mesure",
          description: "Des cuisines fonctionnelles et modernes adaptées à vos besoins.",
          image: kitchenImage3,
          features: ["Espace optimisé", "Matériaux de qualité", "Design personnalisé"],
        },
      ],
    },
    {
      name: "Façades",
      products: [
        {
          title: "Façades en Aluminium",
          description: "Des façades contemporaines pour une maison unique.",
          image: facadeImage,
          features: ["Résistance aux intempéries", "Design moderne", "Entretien minimal"],
        },
        {
          title: "Façades en Aluminium",
          description: "Des façades contemporaines pour une maison unique.",
          image: facadeImage2,
          features: ["Résistance aux intempéries", "Design moderne", "Entretien minimal"],
        },
        {
          title: "Façades en Aluminium",
          description: "Des façades contemporaines pour une maison unique.",
          image: facadeImage3,
          features: ["Résistance aux intempéries", "Design moderne", "Entretien minimal"],
        },
      ],
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sky-800 mb-8">Nos Catégories de Produits</h2>
        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-3xl font-semibold text-sky-700 mb-6">{category.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-t-lg" />
                  <h2 className="text-2xl font-bold text-sky-800 mt-4">{product.title}</h2>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <ul className="mt-4 space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-sky-600 mr-2">✔</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;