import React from 'react';
import servicing from '../../assets/images/servicing.jpg';
import sleep from '../../assets/images/sleep.jpg';
import check from '../../assets/images/check.jpg';
import women from '../../assets/images/women.jpg';
import hug from '../../assets/images/hug.jpg';
import { ArrowBigRight, CircleChevronRight } from 'lucide-react';

const ServiceDetail = () => {
  return (
    <>
      {/* Header */}
      <div
        className="relative mt-20 bg-cover bg-center bg-no-repeat h-[250px] md:h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url(${servicing})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-2 drop-shadow-lg">
            Service Detail
          </h1>
          <p className="text-sm md:text-lg font-medium text-gray-200">
            Home / Services / Service Details
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-10">
          
          {/* Services Include */}
          <div className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-4 border-b pb-2 border-blue-300">
              Services Include
            </h2>
            <ul className="space-y-3 text-gray-700 text-left">
              {[
                'Daily Task',
                'Social Companionship',
                'Wellness Check-ins',
                'Flexible Visits',
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CircleChevronRight className="text-blue-600 w-5 h-5" />
                  <span className="font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-bold text-teal-700 mb-6 border-b pb-2 border-teal-300">
              Services List:
            </h3>
            <ul className="space-y-5 text-left">
              {[
                'Personal Care',
                'Companion Care',
                'Medication Management',
                'Meal Preparation',
                'Home Maintenance',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-all duration-200 group"
                >
                  <ArrowBigRight className="text-blue-600 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span className="text-base font-medium group-hover:underline">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Get a Quote Form */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-300 p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Get a Quote:</h3>
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Email Address:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Got Any Questions?</label>
                <textarea
                  placeholder="Insert your message here..."
                  rows={4}
                  className="px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-950 text-white px-6 py-2 rounded-md transition hover:bg-blue-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b pb-3 border-gray-300">
            Service Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to our service detail page. Here, you'll find comprehensive information
            about the specific services we offer. Whether it's personal care, health monitoring,
            or social support, our goal is to improve the quality of life with compassion and expertise.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[sleep, check, women, hug].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Service ${i + 1}`}
                className="w-full rounded-lg shadow-md object-cover aspect-[4/3] hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
          <p className='text-lg text-gray-700 leading-relaxed mb-6 mt-6'>We specialize in personal care services that prioritize comfort, privacy, and trust. From helping with daily hygiene routines to mobility assistance, our caregivers provide attentive support that allows individuals to maintain a sense of independence while staying safe and healthy in their own environment.</p>
          <p className='text-lg text-gray-700 leading-relaxed mb-6'>Our services combine the latest in caregiving techniques with a human touch. We make use of proven routines, up-to-date health practices, and personalized approaches to deliver care that’s efficient, safe, and comforting. Whether you're seeking long-term help or short-term support, we provide solutions you can trust.</p>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;





