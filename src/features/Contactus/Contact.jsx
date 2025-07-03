import React from 'react';
import contact from '../../assets/images/contact.png';
import call from '../../assets/images/call.jpg'

const Contact = () => {
  return (
    <>
      <section className="bg-[#ffe1c9] py-10 px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          <div className="flex-1">
            <img
              src={contact}
              alt="Contact Us"
              className="w-full h-auto max-w-md mx-auto md:mx-12 rounded-xl"
            />
          </div>

          
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-[#d54224] text-2xl font-semibold">Contact Us</h1>
            <h2 className="text-3xl font-bold text-gray-800 leading-snug">
              Don't let your Health <br /> Take a Back Seat!
            </h2>
            <p className="text-gray-700">
              Fill out the appointment form below to consult with the best carers.
            </p>
            <button className="bg-white text-[#d54224] font-medium px-6 py-3 rounded-xl shadow hover:bg-[#ffd3b3] transition duration-200">
              Book Appointment Now
            </button>
          </div>
        </div>
      </section>

     <section className="bg-white py-10 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-start gap-10 max-w-6xl mx-auto">

        
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointment</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d54224]"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d54224]"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">Contact No:</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d54224]"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">Preferred Date:</label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d54224]"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">Preferred Time:</label>
              <input
                type="time"
                className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d54224]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#b3341c] text-white font-semibold py-3 rounded-lg shadow transition duration-200 hover:bg-[#992b17]"
            >
              Submit Appointment
            </button>
          </form>
        </div>

        
        <div className="flex-1">
          <img
            src={call}
            alt="Call for Appointment"
            className="w-full h-auto max-w-md mx-auto md:mx-0 rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;

