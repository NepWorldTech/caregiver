import React from 'react';
import help from '../../assets/images/help.jpg';
import team from '../../assets/images/team.jpg';
import dis from '../../assets/images/dis.jpg';
import { Stethoscope, Handshake, CircleDollarSign, Laugh } from 'lucide-react';

const OurTeam = () => {
  return (
    <>
      {/* Header Section with Background Image */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${help})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Meet Our Crew</h1>
          <p className="text-lg font-medium pt-6">Home / Our Team</p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="text-center my-12 px-4">
        <h2 className="text-xl text-blue-500 font-bold">Meet Our Care Professionals</h2>
        <h1 className="text-4xl font-bold pt-4 pb-4">Caring for Your Loved<br />Ones Like Family</h1>
        <p className="text-md font-medium italic text-gray-700 max-w-2xl mx-auto">
          Our compassionate team of medical professionals and nurses is dedicated to providing quality care with
          empathy and respect, ensuring every individual feels safe and valued.
        </p>
      </div>

      {/* Main Flex Section with Icons and Image */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-6 lg:px-16 py-12">
        {/* Grid of 2x2 Icons and Texts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          <div className="bg-white p-6 shadow-2xl rounded-2xl text-center">
            <Stethoscope className="mx-auto mb-3 text-blue-500" size={32} />
            <h3 className="text-xl font-semibold mb-2">Trained Nurses</h3>
            <p className="text-gray-700">
              Our certified nurses deliver skilled, attentive care with warmth and professionalism.
            </p>
          </div>
          <div className="bg-white p-6 shadow-2xl rounded-2xl text-center">
            <Handshake className="mx-auto mb-3 text-blue-500" size={32} />
            <h3 className="text-xl font-semibold mb-2">Reliable Support</h3>
            <p className="text-gray-700">
              Count on us for consistent, responsive care – anytime you need peace of mind.
            </p>
          </div>
          <div className="bg-white p-6 shadow-2xl rounded-2xl text-center">
            <CircleDollarSign className="mx-auto mb-3 text-blue-500" size={32} />
            <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-gray-700">
              No hidden costs or surprises – just clear and fair pricing for every service we provide.
            </p>
          </div>
          <div className="bg-white p-6 shadow-2xl rounded-2xl text-center">
            <Laugh className="mx-auto mb-3 text-blue-500" size={32} />
            <h3 className="text-xl font-semibold mb-2">Satisfaction First</h3>
            <p className="text-gray-700">
              We're committed to ensuring every client feels safe, respected, and fully supported.
            </p>
          </div>
        </div>

        {/* Side Image */}
        <div className="flex-1">
          <img src={team} alt="Our Team" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
        </div>
      </div>
     <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-12">
  {/* Image Side */}
  <div className="w-full lg:w-1/2">
    <img
      src={dis}
      alt="Discussion"
      className="rounded-xl shadow-lg w-full h-auto object-cover"
    />
  </div>

  {/* Text Side */}
  <div className="w-full lg:w-1/2">
    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
      Committed to Personalized, <br /> High-Quality Senior Care
    </h1>
    <p className="text-gray-700 text-lg leading-relaxed">
      We focus on comfort, dignity, and well-being—providing trusted,
      care <br/>that supports every senior’s daily life with empathy and
      professionalism.
    </p>
  </div>
</div>

    </>
  );
};

export default OurTeam;

