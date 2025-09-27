"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <div className="relative py-24">
      <Image
        src="/landing-call-to-action.jpg"
        alt="Rentmode Search Section Background"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#0000007d] bg-blend-overlay  bg-opacity-60"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 md:mr-10">
            <h2 className="text-3xl  font-extrabold text-white">
              Discover Your Perfect Rental Space
            </h2>
          </div>
          <div>
            <p className="text-white mb-3 md:-mt-0 -mt-3">
              Browse various rental listings in the area you want to live in.
            </p>
            <div className="flex  justify-start gap-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-block text-primary-700 bg-white rounded-sm cursor-pointer px-6 py-3 font-semibold hover:bg-primary-500 hover:text-primary-50"
              >
                Search
              </button>
              <Link
                href="/register"
                className="inline-block text-white bg-secondary-500 rounded-sm cursor-pointer px-6 py-3 font-semibold hover:bg-secondary-600"
                scroll={false}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToActionSection;
