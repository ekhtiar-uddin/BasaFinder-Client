"use client";
import { motion } from "framer-motion";
import { Bath, Bed, Heart, House, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CardTwo = ({ property, propertyLink }: Record<string, any>) => {
  const [imgSrc, setImgSrc] = useState(
    property?.imageUrls?.[0] || "/placeholder.jpg",
  );

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full w-full "
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <Image
          src={imgSrc}
          alt={property.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgSrc("/placeholder.jpg")}
        />

        {/* Badges */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {property.isPetsAllowed && (
            <span className="bg-[#ebf0f5] text-primary-800 text-xs font-semibold px-2 py-1 rounded-full">
              Pets Allowed
            </span>
          )}
          {property.isParkingIncluded && (
            <span className="bg-[#ebf0f5] text-primary-800 text-xs font-semibold px-2 py-1 rounded-full">
              Parking Included
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 hover:bg-white transition-colors shadow-sm">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start ">
          <div className="flex-1 min-w-0 pr-3">
            <h2 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-[#f6920a] transition-colors">
              {property.name}
            </h2>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="line-clamp-1">
                {property?.location?.address}, {property?.location?.city}
              </span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center bg-gray-50 px-2 py-1 rounded-md flex-shrink-0">
            <Star className="w-3.5 h-3.5 text-[#f6920a] fill-[#f6920a] mr-1" />
            <span className="text-sm font-semibold text-gray-700">
              {/* {property?.averageRating?.toFixed(1)} */}
              {4.2}
            </span>
            <span className="text-gray-500 text-xs ml-1 hidden sm:inline">
              {/* ({property?.numberOfReviews}) */}
              (5)
            </span>
          </div>
        </div>

        <div className="mt-3 ">
          {/* Stats Row */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-4">
            <div className="flex items-center text-gray-600 text-sm">
              <Bed className="w-4 h-4 mr-1.5 text-gray-400" />
              <span>{property.beds} Bed</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Bath className="w-4 h-4 mr-1.5 text-gray-400" />
              <span>{property.baths} Bath</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <House className="w-4 h-4 mr-1.5 text-gray-400" />
              <span>{property.squareFeet} sq ft</span>
            </div>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                ${property?.price?.toFixed(0)}
              </span>
              <span className="text-gray-500 text-sm ml-1">/month</span>
            </div>
            <Link href={propertyLink} scroll={false}>
              <button className=" bg-gray-900 cursor-pointer px-4 py-2 hover:bg-secondary-600 text-white text-sm font-medium rounded-md transition-colors">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardTwo;
