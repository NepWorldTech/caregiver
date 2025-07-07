import React from 'react';
import home from '../../assets/images/home.jpg';

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[100vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${home})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">
        {/* Left Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight italic mb-6 drop-shadow-lg">
            Empowering Comfort <br /> and Dignity for <br /> Family Members.
          </h1>
          <p className="text-lg font-medium mb-6 drop-shadow-sm">
            From daily wellness to emotional support — <br />
            we’re here to ensure every moment is lived with <br />
            dignity, comfort, and peace of mind.
          </p>
        </div>

        {/* Right Stats Section */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: 'Average care response time', value: '2 hours' },
            { label: 'Experienced and vested carers', value: '8000+' },
            { label: 'People have hired a carer', value: '45,000+' },
            { label: 'Hours of high-quality, paid care', value: '2.75 million+' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-2xl text-center transform transition hover:scale-105"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</h2>
              <p className="text-base md:text-lg text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;




