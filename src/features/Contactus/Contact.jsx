import React from 'react';
import talk from '../../assets/images/talk.jpg';
import call from '../../assets/images/call.jpg';
import { LocationEdit } from 'lucide-react';
import { Mails } from 'lucide-react';
import { Phone } from 'lucide-react';


const Contact = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white px-4 py-20 md:py-32"
        style={{ backgroundImage: `url(${talk})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start max-w-4xl mx-auto text-center md:text-left space-y-6">
          <h1 className="text-[#ffd3b3] text-2xl font-semibold">Contact Us</h1>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Don't let your Health <br /> Take a Back Seat!
          </h2>
          <p className="text-white max-w-lg">
            Fill out the appointment form below to consult with the best carers.
          </p>
          <button className="bg-white text-blue-500 font-medium px-6 py-3 rounded-xl shadow hover:text-white hover:bg-blue-700 transition duration-200">
            Book Appointment Now
          </button>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="bg-white py-10 px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-start gap-10 max-w-6xl mx-auto">
          {/* Form */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointment</h2>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">Name:</label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">Email:</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">Contact No:</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">Preferred Date:</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">Preferred Time:</label>
                <input
                  type="time"
                  className="border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow transition duration-200 hover:bg-blue-700"
              >
                Submit Appointment
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={call}
              alt="Call for Appointment"
              className="w-full h-auto max-w-md mx-auto md:mx-0 rounded-xl shadow-md"
            />

            <div className="px-4 py-10 md:px-16 bg-white text-gray-800 space-y-8">
      
      <div className="flex items-start gap-4">
        <LocationEdit className="text-blue-500 mt-1" />
        <div>
          <h1 className="text-lg font-semibold">Address</h1>
          <p>Caregiver, Japan</p>
        </div>
      </div>

     
      <div className="flex items-start gap-4">
        <Mails className="text-blue-500 mt-1" />
        <div>
          <h1 className="text-lg font-semibold">Email</h1>
          <p>support@careexample.com</p>
        </div>
      </div>

     
      <div className="flex items-start gap-4">
        <Phone className="text-blue-500 mt-1" />
        <div>
          <h1 className="text-lg font-semibold">Phone</h1>
          <p>+1 (800) 123-4567</p>
        </div>
      </div>
    </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;


