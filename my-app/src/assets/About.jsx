import React from 'react';

 function About() {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="About"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>

            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About Us
            </h2>

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

      </div>

    </section>
  );
}

export default About;