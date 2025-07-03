import React, { useState } from 'react';
import about from '../../assets/images/about.jpg';
import { BadgePoundSterling, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How are the carers approved/insured?',
    answer:
      'We have a rigorous vetting process in place. All carers go through thorough background checks, interviews, and reference verification. Additionally, they are required to provide proof of qualifications and insurance before they are approved to join our platform. Many of our carers are also registered with professional health and care bodies.',
  },
  {
    question: 'How do I make/change/cancel a booking?',
    answer:
      'Making or managing a booking is simple and flexible. You can use our online platform, mobile app, or call our support team. To change or cancel a booking, log into your account, go to your bookings, and select the change or cancel option. We recommend giving at least 24 hours’ notice to avoid cancellation fees.',
  },
  {
    question: 'How do I pay the carer?',
    answer:
      'All payments are handled securely through our platform. Once your booking is completed and confirmed, payment is automatically processed. You do not need to pay carers directly in cash. We accept all major credit/debit cards and secure online payments.',
  },
  {
    question: 'Are my funds secure and are my payments to carers guaranteed?',
    answer:
      'Yes, your funds are completely secure. We use encrypted payment gateways to protect your transactions. Payments are only released to carers once services are successfully delivered. If a carer doesn’t show up or there is an issue with your booking, our support team will help resolve it and ensure you’re either refunded or rescheduled promptly.',
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* About Section */}
      <section className="py-10 px-4 md:px-16 bg-black text-gray-400">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-white">About Us</h2>
            <p className="text-2xl font-bold text-white">
              We're <span className="text-[#d54224]">Take Care</span> <br />
              Of Your Problems Carefully
            </p>
            <p className="text-white">
              We provide supportive, compassionate, and highly qualified nurses for all your nursing and medical needs.
            </p>

            <ul className="space-y-3">
              {[
                'Affordable and transparent pricing',
                '24/7 medical support',
                'Highly trained staff',
                'Personalized care plans',
                'Trusted by hundreds of families',
                'Registered and certified professionals',
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-2 text-white">
                  <BadgePoundSterling className="bg-[#d54224] text-white rounded-xl" /> {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <img
              src={about}
              alt="Professional healthcare staff"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#ffe1c9] py-10 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-[#d54224] text-xl font-medium">FAQs</h1>
            <h2 className="text-3xl font-bold text-gray-800">
              Frequently Asked <span className="text-[#d54224] block">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-xl p-4 shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-lg font-semibold text-gray-700">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-[#d54224]" />
                  ) : (
                    <ChevronDown className="text-[#d54224]" />
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
    </>
  );
};

export default About;


