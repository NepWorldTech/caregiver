import React from 'react';
import { ArrowRight } from 'lucide-react';

import consult from '../../assets/images/consult.jpg';
import laugh from '../../assets/images/laugh.jpg';
import commit from '../../assets/images/commit.jpg';
import family from '../../assets/images/family.jpg';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white flex items-center justify-center text-center px-4 py-24 md:py-32"
        style={{ backgroundImage: `url(${consult})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <p className="text-3xl md:text-4xl font-bold leading-snug">
            We're <span className="text-blue-400">Take Care</span> <br />
            Of Your Problems Carefully
          </p>
          <p className="text-blue-300 text-base md:text-lg">
            We provide supportive, compassionate, and highly qualified nurses for all your nursing and medical needs.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">Home / About Us</h2>
        </div>
      </section>

      {/* About Us Section 1 */}
      <section className="px-4 sm:px-6 lg:px-20 py-12">
        <h1 className="text-blue-500 text-2xl font-bold italic mb-6">About Us</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold pb-4">
              Caring for a Better <br /> Tomorrow
            </h2>
            <p className="text-base text-gray-700">
              Empowering independence and well-being through personalized, modern care solutions. We offer compassionate support
              tailored to each senior’s unique needs, ensuring comfort, dignity, and quality of life.
              <br /><br />
              Our team provides trusted care that helps seniors feel safe, connected, and confident—every day.
            </p>
          </div>
          <div className="flex-1">
            <img src={laugh} alt="Smiling senior" className="rounded-2xl w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* About Us Section 2 */}
      <section className="px-4 sm:px-6 lg:px-20 py-12">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className="flex-1">
            <img src={commit} alt="Committed caregiver" className="rounded-2xl w-full h-auto object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold pb-4">
              Committed to Personalized, <br /> High-Quality Senior Care
            </h2>
            <p className="text-base text-gray-700">
              We focus on comfort, dignity, and well-being—providing trusted care that supports every senior’s daily life
              with empathy and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="flex flex-col md:flex-row items-center bg-blue-950 text-white py-20 px-6 md:px-20 gap-10 relative">
        <div className="flex-1">
          {/* Slightly smaller image */}
          <img
            src={family}
            alt="Core Values"
            className="rounded-2xl w-full h-[100vh] object-cover"
          />
        </div>

        <div className="flex-1 space-y-6 relative -mt-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">+ Core Values</h2>
            <h3 className="text-xl font-semibold">Caring with Purpose</h3>
          </div>

          {/* Core Values List */}
          {[
            {
              title: 'Compassion',
              desc: 'We believe in treating every client with kindness and empathy, ensuring they feel valued and respected in every interaction.'
            },
            {
              title: 'Integrity',
              desc: 'We uphold the highest standards of honesty and transparency in our services. Trust is essential in caregiving.'
            },
            {
              title: 'Excellence',
              desc: 'We are committed to delivering the highest quality of care. Our team continuously seeks improvement and innovation.'
            },
            {
              title: 'Empathy',
              desc: 'We listen, understand, and connect with each client\'s needs, delivering care with a compassionate, human touch.'
            }
          ].map((item, index) => (
            <div key={index} className="border-t border-white/20 pt-4">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-blue-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:animate-bounce" />
                {item.title}
              </h4>
              <p className="text-sm text-white/90 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;







