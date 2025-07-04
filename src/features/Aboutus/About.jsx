import React, { useState } from 'react';
import consult from '../../assets/images/consult.jpg';
import laugh from '../../assets/images/laugh.jpg';
import commit from '../../assets/images/commit.jpg';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How are the carers approved/insured?',
    answer: 'We have a rigorous vetting process in place. All carers go through thorough background checks, interviews, and reference verification...',
  },
  {
    question: 'How do I make/change/cancel a booking?',
    answer: 'Making or managing a booking is simple and flexible. You can use our online platform, mobile app, or call our support team...',
  },
  {
    question: 'How do I pay the carer?',
    answer: 'All payments are handled securely through our platform. Once your booking is completed and confirmed, payment is automatically processed...',
  },
  {
    question: 'Are my funds secure and are my payments to carers guaranteed?',
    answer: 'Yes, your funds are completely secure. We use encrypted payment gateways to protect your transactions...',
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

      {/* FAQ Section */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <h1 className="text-blue-500 text-xl font-semibold">FAQs</h1>
            <h2 className="text-3xl font-bold text-gray-800">
              Frequently Asked <span className="text-blue-500 block">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-xl p-4 shadow-sm bg-white transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-blue-500" />
                  ) : (
                    <ChevronDown className="text-blue-500" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 rounded-2xl mt-10  px-10 py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Care Beyond Expectations, <br /> When You Need It Most
        </h1>
        <p className="font-medium text-white text-base md:text-lg">
          Experience personalized support and peace of mind with <br className="hidden sm:block" />
          compassionate professionals ready to help—right at your doorstep.
        </p>
      </section>
    </>
  );
};

export default About;







