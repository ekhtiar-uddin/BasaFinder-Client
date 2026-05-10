"use client";
import CardTwo from "@/components/ui/CardTwo";
import { useAllProperties } from "@/redux/hook";
import { IProperty } from "@/types";
import { motion } from "framer-motion";
import FeaturedPropertiesSkeleton from "./FeaturedPropertiesSkeleton";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeaturedProperties = () => {
  const { data: properties, isLoading } = useAllProperties(
    undefined,
    undefined,
    undefined,
  );

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className=" bg-opacity-50 pt-[100px] pb-[50px] customWidth "
    >
      <div className="">
        {/* flex items-center  justify-between mb-5 */}
        <div className="">
          <motion.h2
            variants={itemVariants}
            className="text-3xl  lg:text-[40px]  mb-2 font-extrabold text-center "
          >
            Featured Properties
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="  text-gray-500 md:text-base text-sm text-center"
          >
            Quickly find the home you want using effective search filters and
            powerful tools, <br /> simple to discover perfect rentals fast
          </motion.p>

          {/* <Link href="/search">
            <Button variant="outline" className="rounded-full">
              All Properties
            </Button>
          </Link> */}
        </div>

        <div className="mt-10">
          {isLoading ? (
            <div className="min-h-screen grid lg:grid-cols-4 gap-5">
              {Array.from({ length: 8 }).map((item, index) => (
                <FeaturedPropertiesSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className=" w-full ">
              <div className="grid 2xl:grid-cols-4  2lg:grid-cols-3 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2  gap-5">
                {properties?.slice(0, 8).map((property: IProperty) => (
                  <CardTwo
                    variants={itemVariants}
                    key={property._id}
                    property={property}
                    propertyLink={`/search/${property._id}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <button
              className="bg-white border-2 border-gray-200 text-gray-900 hover:border-[#f6920a] hover:text-[#f6920a] px-8 py-3 rounded-xl font-bold transition-colors cursor-pointer"
              onClick={() => (window.location.href = "/search")}
            >
              Load More Properties
            </button>
          </div>
          {/* <div
            className={`${
              isLoading
                ? "hidden"
                : "w-[190px] rounded py-3.5 flex justify-center items-center bg-secondary-400 mx-auto mt-10"
            }`}
          >
            <Link href="/search" className="hover:text-white">
              More Properties
            </Link>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProperties;
