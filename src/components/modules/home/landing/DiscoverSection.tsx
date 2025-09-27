"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DiscoverSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className="mt-[100px]  3xs:py-0  "
    >
      <div className="customWidth">
        <motion.div variants={itemVariants} className=" text-center">
          <p className="text-sm font-bold text-secondary-600 ">
            Your Ideal Rental Home Awaits!
          </p>
          <h2 className="text-3xl mb-4   lg:text-[40px]    font-extrabold leading-tight ">
            Move to Dream Living{" "}
          </h2>
          <p className=" md:text-base text-sm text-gray-500 max-w-3xl mx-auto">
            Easily explore rental listings perfectly suited to your lifestyle.
            Using smart search tools, finding the perfect home is quick.
          </p>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 2sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 text-center">
          {[
            {
              imageSrc: "/landing-icon-wand.png",
              title: "Find the Perfect Rental",
              description:
                "Explore a wide range of rental listings tailored to your preferred location and lifestyle.",
            },
            {
              imageSrc: "/landing-icon-calendar.png",
              title: "Secure Your Rental Today",
              description:
                "Found your ideal place? Book it instantly online with a simple, hassle-free process.",
            },
            {
              imageSrc: "/landing-icon-heart.png",
              title: "Welcome to Your New Home",
              description:
                "Settle into your rental and begin making memories in your perfect space.",
            },
          ].map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DiscoverCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="px-4 border-t py-12 border-b-4 border-b-primary-600 shadow-lg rounded-lg bg-primary-50 md:h-72">
    <div className="bg-secondary-600 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
      <Image
        src={imageSrc}
        width={30}
        height={30}
        className="w-full h-full"
        alt={title}
      />
    </div>
    <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>
    <p className="mt-2 md:text-base text-sm text-gray-500">{description}</p>
  </div>
);

export default DiscoverSection;
