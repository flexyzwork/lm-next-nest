import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-customgreys-primarybg text-white-50 px-6 py-12">
      
      {/* Hero Section */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-extrabold text-primary-700">About Me</h1>
        <p className="text-gray-300 mt-4 text-sm md:text-base">
          Passionate about building technology that simplifies lives, I specialize in developing scalable and user-friendly digital experiences.
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-customgreys-secondarybg p-8 md:p-12 rounded-xl shadow-lg max-w-4xl w-full">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
            MY
          </div>
          <h3 className="text-lg font-semibold mt-3">[Your Name]</h3>
          <p className="text-xs text-gray-400">Founder & Lead Developer</p>
        </div>

        {/* Bio Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-semibold text-primary-700 mb-3">Who I Am</h2>
          <p className="text-sm text-gray-300">
            With a strong passion for innovation, I build technology that enhances productivity and enables meaningful change.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mt-12">
        <div className="bg-customgreys-secondarybg p-6 rounded-lg text-center shadow-lg">
          <h2 className="text-lg font-semibold text-primary-700 mb-2">🚀 My Mission</h2>
          <p className="text-sm text-gray-300">
            To simplify and scale technology, making it accessible to everyone.
          </p>
        </div>
        <div className="bg-customgreys-secondarybg p-6 rounded-lg text-center shadow-lg">
          <h2 className="text-lg font-semibold text-primary-700 mb-2">🌍 My Vision</h2>
          <p className="text-sm text-gray-300">
            A seamless digital world where technology enhances life effortlessly.
          </p>
        </div>
        <div className="bg-customgreys-secondarybg p-6 rounded-lg text-center shadow-lg">
          <h2 className="text-lg font-semibold text-primary-700 mb-2">💡 Core Values</h2>
          <p className="text-sm text-gray-300">
            Innovation, Integrity, Simplicity, and Continuous Learning.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-400 text-xs">

      </footer>
      
    </div>
  );
};

export default About;