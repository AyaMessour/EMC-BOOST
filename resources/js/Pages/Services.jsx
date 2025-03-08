import React from "react";
import { FaTools, FaDoorOpen, FaCogs, FaPencilRuler } from "react-icons/fa";

const services = [
  {
    icon: <FaDoorOpen className="text-4xl text-sky-800" />,
    title: "Fabrication de Portes et Fenêtres",
    description: "Des portes et fenêtres en aluminium de haute qualité pour un design moderne et une performance optimale."
  },
  {
    icon: <FaTools className="text-4xl text-sky-800" />,
    title: "Installation et Réparation",
    description: "Un service professionnel pour l'installation et la réparation de menuiseries en aluminium."
  },
  {
    icon: <FaCogs className="text-4xl text-sky-800" />,
    title: "Personnalisation sur Mesure",
    description: "Nous concevons des solutions adaptées à vos besoins pour un rendu esthétique et fonctionnel."
  },
  {
    icon: <FaPencilRuler className="text-4xl text-sky-800" />,
    title: "Conception et Conseil",
    description: "Nos experts vous accompagnent dans la réalisation de vos projets en aluminium."
  }
];

function Services() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Nos Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-900 mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;