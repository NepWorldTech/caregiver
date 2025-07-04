import React from 'react'
import old from '../../assets/images/old.png'
import sky from '../../assets/images/sky.jpg'

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${sky})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold italic text-white leading-tight mb-4">
            Empowering Comfort <br /> and Dignity for <br /> Family Members.
          </h1>
          <p className="text-lg text-gray-200 mb-8">
           From daily wellness to emotional support — <br/>we’re here to ensure every moment is lived with <br/> dignity, comfort, and peace of mind.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-4 text-center shadow-md">
              <h2 className="text-xl font-bold text-black">2 hours</h2>
              <p className="text-sm text-gray-600">Average care response time</p>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-md">
              <h2 className="text-xl font-bold text-black">8000+</h2>
              <p className="text-sm text-gray-600">Experienced and vested carers</p>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-md">
              <h2 className="text-xl font-bold text-black">45,000+</h2>
              <p className="text-sm text-gray-600">People have hired a carer</p>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow-md">
              <h2 className="text-xl font-bold text-black">2.75 million+</h2>
              <p className="text-sm text-gray-600">Hours of high quality, paid care</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={old}
            alt="Care illustration"
            className="max-w-full h-auto "
          />
        </div>
      </div>
    </div>
  )
}

export default Home


