import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import model2 from "./Photos/model-2.jpg";
import model3 from "./Photos/model-3.jpg";
import model4 from "./Photos/model-4.jpg";
import model5 from "./Photos/model-5.jpg";

function Banner() {
  return (
    <section className="relative w-full bg-gray-100 h-auto flex flex-col md:flex-row justify-between items-center py-10 px-6 gap-10">
      {/* Left Section: Text and Button (Centered) */}
      <div className="w-full md:w-1/3 flex flex-col gap-5 justify-center items-center text-center">
        <h1 className="text-4xl  top-3 font-bold bg-gradient-to-b from-sky-700 to-cyan-700 bg-clip-text text-transparent mb-4">
          Bienvenue à EMC-BOOST, votre partenaire de confiance
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Découvrez la force et l'élégance des fenêtres en aluminium, des portes et des solutions sur mesure pour vos projets.
        </p>
        <p className="text-md text-gray-600 mb-6">
          Chez EMC-BOOST, nous vous offrons des solutions innovantes pour tous vos besoins en menuiserie aluminium. Nous concevons et fabriquons des fenêtres, des portes et des structures en aluminium de haute qualité, alliant design moderne et performance optimale. Nos experts vous accompagnent à chaque étape de votre projet pour vous garantir une installation durable et esthétique.
        </p>
        <button className="bg-sky-800 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition duration-300">
          Obtenez un devis gratuit
        </button>
      </div>

      {/* Right Section: Swiper Image Slider (Bigger) */}
      <div className="w-full md:w-2/3 h-96 flex justify-center md:justify-end">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full h-full"
        >
          {[model2, model3, model4, model5].map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-91 h-66 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Banner;