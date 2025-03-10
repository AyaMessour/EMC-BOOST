import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const phoneNumber = "+212674248929"; // Replace with actual phone number

  const sendToWhatsApp = () => {
    if (!name || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const text = `Bonjour, je suis ${name}. ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank"); // Open in a new tab for better UX
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6">
      {/* Contact Form */}
      <div className="w-full max-w-md flex flex-col justify-center p-6 border rounded-lg shadow-md bg-white mb-6 md:mb-0 md:mr-6">
        <h2 className="text-lg font-bold mb-4 text-center">Contact via WhatsApp</h2>
        
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full p-3 border rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Votre message"
          className="w-full p-3 border rounded mb-4 h-32 resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendToWhatsApp}
          className="bg-green-500 text-white w-full p-3 rounded text-lg hover:bg-green-600 transition-colors"
        >
          Envoyer sur WhatsApp
        </button>
      </div>

    {/* Google Maps Embed */}
<div className="w-full max-w-md p-6 gap-12 top-12 h-[453px]">
   
  <iframe
    title="Google Maps Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.4336657803124!2d-7.727695909636081!3d33.53428365413304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62b3d44533beb%3A0x909e1d67c94b41a0!2sG7MC%2BMWR%2C%20Arrahma!5e0!3m2!1sfr!2sma!4v1741629170486!5m2!1sfr!2sma"
    width="100%"
    height="98%"
    style={{ border: 0,
      
     }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
 <p className="text-lg text-black    text-center">
    📍 Bloc 09 NR 10 Rahma01, Dar Bouazza, Casablanca
  </p>
</div>


    </div>
  );
};

export default ContactForm;