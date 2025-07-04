import React from 'react';
import discussing from '../../assets/images/discussing.jpg';

const Services = () => {
  return (
    <>
    <div
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
      style={{ backgroundImage: `url(${discussing})` }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold">What We Offer</h1>
        <h2 className="text-lg pt-5 font-medium">Home / Services</h2>
      </div>
    </div>
    <div className='flex flex-row'>
        <div>
        <h1>Our Services</h1>
        <p>Connect with new faces, <br/>embrace your new place</p>
    </div>
    <div>
        <button>FIND OUT MORE</button>
    </div>
    </div>
    <div>
        
    </div>
    </>
  );
};

export default Services;

