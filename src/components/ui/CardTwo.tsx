"use client";
import { Bath, Bed, House, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CardTwo = ({
  property,

  propertyLink,
}: Record<string, any>) => {
  const [imgSrc, setImgSrc] = useState(
    property?.imageUrls?.[0] || "/placeholder.jpg"
  );

  return (
    <div className="bg-white border p-3 rounded overflow-hidden shadow-lg w-full mb-5">
      <div className="relative">
        <div className="w-full h-64 relative">
          <Image
            src={imgSrc}
            alt={property.name}
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("/placeholder.jpg")}
          />
        </div>
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

        {/* <button className="absolute bottom-4 right-4 bg-white hover:bg-white/90 rounded-full p-2 cursor-pointer">
          dd
        </button> */}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className=" font-bold mb-1 ">{property.name}</h2>

          <Link href={propertyLink} className="" scroll={false}>
            <button
              className="cursor-pointer
           rounded text-sm bg-secondary-500 hover:bg-secondary-600 text-white px-5 py-2"
            >
              Details
            </button>
          </Link>
        </div>

        <p className="text-gray-600 mb-2">
          {property?.location?.address}, {property?.location?.city}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="font-semibold">
              {/* {property?.averageRating?.toFixed(1)} */}
              {4.2}
            </span>
            <span className="text-gray-600 ml-1">
              {/* ({property?.numberOfReviews} Reviews) */}({5} Reviews)
            </span>
          </div>
          <p className="text-lg font-bold mb-3">
            ${property?.price?.toFixed(0)}{" "}
            <span className="text-gray-600 text-base font-normal"> /month</span>
          </p>
        </div>
        <hr className="" />
        <div className="flex justify-between items-center gap-4 text-gray-600 mt-5">
          <span className="flex items-center">
            <Bed className="w-5 h-5 mr-2" />
            {property.beds} Bed
          </span>
          <span className="flex items-center">
            <Bath className="w-5 h-5 mr-2" />
            {property.baths} Bath
          </span>
          <span className="flex items-center">
            <House className="w-5 h-5 mr-2" />
            {property.squareFeet} sq ft
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
