import React from 'react';
import pricing from '../../assets/images/pricing.jpg';
import lady from '../../assets/images/lady.png';

const Pricing = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white flex items-center justify-center text-center px-4 py-24 md:py-36"
        style={{ backgroundImage: `url(${pricing})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold">Pricing</h1>
          <h2 className="text-xl md:text-2xl font-semibold">Home / Pricing</h2>
        </div>
      </section>

      {/* Pricing Intro */}
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <h1 className="text-2xl md:text-3xl pb-3 italic font-bold text-teal-800">+ Pricing Plan</h1>
        <p className="text-gray-700 text-4xl font-bold">Explore Our Care Packages</p>
      </div>

      {/* How It Works Section */}
      <div className="bg-blue-950 text-white ">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="flex-1 space-y-4">
            <h2 className="text-xl text-teal-300 font-semibold">+ How It Works</h2>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">Reliable Care for <br />Every Stage</h1>
            <p>We tailor our services to meet the unique needs of each individual, ensuring comfort and dignity.</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Always Caring – 24/7 Support</li>
              <li>Trusted Reliability</li>
            </ul>
          </div>

          {/* Center Image */}
          <div className="flex">
            <img src={lady} alt="Lady" className="w-full h-full pt-2  shadow-lg" />
          </div>

          {/* Right Steps */}
          <div className="flex-1 space-y-6">
            <div className="bg-white text-black p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">01. Initial Consultation</h3>
              <p>We start with a free consultation to understand your loved one's unique needs.</p>
            </div>
            <div className="bg-white text-black p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">02. Personalized Care Plan</h3>
              <p>Based on the consultation, we create a tailored care plan that matches their lifestyle.</p>
            </div>
            <div className="bg-white text-black p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">03. Ongoing Support</h3>
              <p>Our caregivers provide consistent, compassionate care with regular check-ins.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
