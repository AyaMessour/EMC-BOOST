import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white">
      {/* Half Blue Background */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-blue-300"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full max-w-md mx-auto">
            {/* Hockey Player Image (Overlapping) */}
            <img
              src="https://via.placeholder.com/500" // Replace with actual image
              alt="Hockey Player"
              className="relative w-full h-auto object-cover drop-shadow-lg"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            WELCOME TO HOCKEY SCHOOL
          </h1>
          <p className="mt-4 text-gray-700">
            The contemporary sport developed in Canada from European and native
            influences. These included various stick and ball games similar to
            field hockey, bandy, and other games.
          </p>
          <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;