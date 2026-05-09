"use client";
import { faqs } from "@/lib/frequentData";
import { AnimatePresence, motion } from "framer-motion";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
const faqsdd = [
  {
    question: "What plan should I get if I am managing a team?",
    answer:
      "If you are managing a team, our Professional or Enterprise plans are best suited for you. They include multi-user access, advanced permissions, and team collaboration tools.",
  },
  {
    question: "What plan works best for me?",
    answer:
      "For individual landlords with 1-5 properties, our Starter plan is perfect. If you have a larger portfolio, the Professional plan offers more advanced features like automated accounting and maintenance tracking.",
  },
  {
    question: "Why do you need property management software?",
    answer:
      "Property management software saves you time and reduces errors by automating rent collection, organizing maintenance requests, screening tenants, and keeping all your financial records in one secure place.",
  },
  {
    question: "Who can use rental property management software?",
    answer:
      "Anyone who manages rental properties can use it! This includes independent landlords, property managers, real estate investors, and large property management companies.",
  },
  {
    question: "Property management software solves many problems?",
    answer:
      "Yes, it solves common pain points like late rent payments, lost maintenance requests, disorganized paperwork, and difficult tenant communication by centralizing everything into one platform.",
  },
];
export function FrequentQuestion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="md:text-base text-sm text-gray-500 ">
            Everything you need to know about RentMode. Can't find the answer
            you're looking for? Feel free to contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "transform rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
