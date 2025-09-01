"use client";

import { Button } from "@/components/ui/button";
import CardTwo from "@/components/ui/CardTwo";
import { useAllProperties } from "@/redux/hook";
import { IProperty } from "@/types";
import Link from "next/link";
import FeaturedPropertiesSkeleton from "./FeaturedPropertiesSkeleton";
const FeaturedProperties = () => {
  const { data: properties, isLoading } = useAllProperties(
    undefined,
    undefined,
    undefined
  );

  return (
    <div className=" bg-opacity-50 py-20 customWidth ">
      <div className="">
        <div className="flex items-center  justify-between mb-5">
          <h2 className="font-bold text-2xl">
            <span className="sm:inline hidden">Featured</span> Properties
          </h2>
          <Link href="/search">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>

        <div className="">
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
                    key={property._id}
                    property={property}
                    propertyLink={`/search/${property._id}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div
            className={`${
              isLoading
                ? "hidden"
                : "w-[190px] rounded py-3.5 flex justify-center items-center bg-secondary-400 mx-auto mt-10"
            }`}
          >
            <Link href="/search" className="hover:text-white">
              More Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
