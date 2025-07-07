import React from 'react';
import discussing from '../../assets/images/discussing.jpg';
import workers from '../../assets/images/workers.jpg';
import {
  HeartHandshake, HandHeart, Cross, House,
  Ambulance, Stethoscope, Eye, Hospital, Sofa
} from 'lucide-react';

const Services = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-[250px] md:h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url(${discussing})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold">What We Offer</h1>
          <h2 className="text-sm md:text-lg pt-3 md:pt-5 font-medium">Home / Services</h2>
        </div>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col items-center justify-center mt-10 text-center px-4">
        <h1 className="text-xl md:text-2xl pb-3 italic font-bold text-teal-800">+ What We Offer</h1>
        <h2 className="text-2xl md:text-4xl pt-2 italic font-bold">
          Care That Enhances Quality of Life
        </h2>
      </div>

      {/* Core Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 md:px-20">
        {[
          {
            icon: <Cross className="text-teal-800 w-14 h-14" />,
            title: 'Personal Care',
            desc: 'Assisting with daily routines to enhance comfort.',
          },
          {
            icon: <HandHeart className="text-teal-800 w-14 h-14" />,
            title: 'Social Support',
            desc: 'Engaging companionship and meaningful social interactions.',
          },
          {
            icon: <HeartHandshake className="text-teal-800 w-14 h-14" />,
            title: 'Health Monitoring',
            desc: 'Helping with mobility, exercise, and physical activities.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
          >
            {item.icon}
            <h3 className="text-xl md:text-2xl font-bold pt-3">{item.title}</h3>
            <p className="font-medium pt-2 text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Workers Background Services */}
      <div
        className="relative mt-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${workers})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white text-center px-4 py-16">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">+ Our Services</h1>
          <p className="text-base md:text-lg mt-4 mb-10">Your Well-Being, Our Priority</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Hospital className="text-teal-400 w-14 h-14" />,
                title: 'Personal Care',
                desc: 'Assisting with daily routines to enhance comfort.',
              },
              {
                icon: <Eye className="text-teal-400 w-14 h-14" />,
                title: 'Friendly Visits',
                desc: 'Reducing loneliness through social interaction.',
              },
              {
                icon: <Stethoscope className="text-teal-400 w-14 h-14" />,
                title: 'Medication Help',
                desc: 'Medication management and timely intake.',
              },
              {
                icon: <Ambulance className="text-teal-400 w-14 h-14" />,
                title: 'Safe Transport',
                desc: 'Transportation for appointments and errands.',
              },
              {
                icon: <House className="text-teal-400 w-14 h-14" />,
                title: 'Home Checks',
                desc: 'Ensuring a safe and hazard-free home environment.',
              },
              {
                icon: <Sofa className="text-teal-400 w-14 h-14" />,
                title: 'Comfort Care',
                desc: 'Quality care for improved life in difficult times.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white/90 text-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center"
              >
                {service.icon}
                <h3 className="text-xl md:text-2xl font-bold pt-3">{service.title}</h3>
                <p className="font-medium pt-2 text-sm md:text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Services;



