import React from 'react';

function About() {
  return (


    <div className="max-w-6xl mx-auto px-6" styele={myStyle}>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div>
          {/* np */}
        </div>

        {/* Right Content */}
        <div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h1>

          <p className="text-gray-600 leading-7 mb-6">
            We create modern web applications using React,
            Tailwind CSS, and modern technologies.
            Our mission is to build fast and beautiful websites like a real agency.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition duration-300">
            Learn More
          </button>



        </div>

      </div>

      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg">
        Enable Button
      </button>

    </div>







  );
}

export default About;