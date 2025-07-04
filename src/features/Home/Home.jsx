import React from 'react';
import old from '../../assets/images/old.png';

const Home = () => {
  return (
    <>
    <div className="relative z-10 bg-blue-50 max-w-cover mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 py-12">
      {/* Left Content */}
      <div >
        <h1 className="text-4xl md:text-5xl font-bold italic text-black leading-tight ml-20 mb-4">
          Empowering Comfort <br /> and Dignity for <br /> Family Members.
        </h1>
        <p className="text-lg text-black mb-8 ml-20">
          From daily wellness to emotional support — <br />
          we’re here to ensure every moment is lived with <br />
          dignity, comfort, and peace of mind.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 ml-20">
          <div className="bg-blue-100 rounded-2xl p-4 text-center shadow-md">
            <h2 className="text-xl font-bold text-black">2 hours</h2>
            <p className="text-sm text-gray-600">Average care response time</p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-4 text-center shadow-md">
            <h2 className="text-xl font-bold text-black">8000+</h2>
            <p className="text-sm text-gray-600">Experienced and vested carers</p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-4 text-center shadow-md">
            <h2 className="text-xl font-bold text-black">45,000+</h2>
            <p className="text-sm text-gray-600">People have hired a carer</p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-4 text-center shadow-md">
            <h2 className="text-xl font-bold text-black">2.75 million+</h2>
            <p className="text-sm text-gray-600">Hours of high quality, paid care</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:justify-end mr-20">
        <img
          src={old}
          alt="Care illustration"
          className="max-w-full h-auto "
        />
      </div>
    </div>
    </>
  );
};

export default Home;



