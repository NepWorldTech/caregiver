import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import smiling from '../../assets/images/smiling.jpg'
import fact from '../../assets/images/fact.jpg'

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'We offer a range of services including personal care, companionship, wellness check-ins, 24/7 support, and specialized care for advanced needs. Each plan can be customized to meet individual client needs...'
  },
   {
    question: 'Are you caregivers certified?',
    answer: 'Yes, all our caregivers are certified, trained, and experienced in elder care. They undergo continuous training to provide the highest quality of care with compassion and expertise....'
  },
   {
    question: 'How do I choose the right care plan?',
    answer: 'Our team will consult with you to assess your specific needs and recommend a care plan that best fits. We are here to answer any questions and make adjustments as necessary.....'
  },
  {
    question: 'Can I make changes to my care plan later?',
    answer: 'Absolutely. We understand that needs can change over time. We work with families to make any necessary adjustments to ensure the highest level of comfort and support......'
  },
   {
    question: 'Is 24/7 care available?',
    answer: 'Yes, we offer 24/7 support for clients who require around-the-clock care and monitoring. Our caregivers are available at any time to provide assistance and ensure safety and comfort.......'
  },
   {
    question: 'How do you ensure client safety and privacy?',
    answer: 'We follow strict protocols to protect client privacy and ensure safety at all times. Our caregivers are trained in confidentiality, and we use secure systems to manage client information........'
  },
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

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
      const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <>
     <section
        className="relative bg-cover bg-center bg-no-repeat text-white flex items-center justify-center text-center px-4 py-24 md:py-36"
        style={{ backgroundImage: `url(${fact})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-4xl font-extrabold">Home / FAQs</h2>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-stretch">

          {/* Left Column: FAQs */}
          <div className="flex-1 space-y-8 bg-white p-6 rounded-2xl shadow-xl">
            <div>
              <h1 className="text-blue-600 text-xl font-semibold">FAQs</h1>
              <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                Frequently Asked <span className="text-blue-500 block">Questions</span>
              </h2>
              <p className="text-gray-500 mt-2">
                Everything you need to know before getting started with our care services.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-5 bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="text-blue-500" />
                    ) : (
                      <ChevronDown className="text-blue-500" />
                    )}
                  </button>
                  <div
                    className={`mt-3 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 relative p-6 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-2xl z-0"></div>
            <img
              src={smiling}
              alt="Smiling person"
              className="relative z-10 w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Faqs
