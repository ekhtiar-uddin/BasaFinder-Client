"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setFilters } from "@/redux/features/globalSlice";
import { useAppDispatch } from "@/redux/hook";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeroSection = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleLocationSearch = async () => {
    try {
      const trimmedQuery = searchQuery.trim();
      if (!trimmedQuery) return;

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          trimmedQuery
        )}&format=json`
      );
      const data = await response.json();
      if (!data || data.length === 0) return;

      const lat = data[0]?.lat;
      const lng = data[0]?.lon;

      // console.log("here", lat, lng);

      // problem1

      dispatch(
        setFilters({
          location: trimmedQuery,
          coordinates: [parseFloat(lng), parseFloat(lat)],
          // coordinates: [90.3731, 23.7465],
        })
      );

      const params = new URLSearchParams({
        location: trimmedQuery,
        lat: lat.toString(),
        lng: lng.toString(),
      });
      router.push(`/search?${params.toString()}`);
    } catch (error) {
      console.error("error search location:", error);
    }
  };

  return (
    <div className="relative h-[85vh]  ">
      <Image
        src="/landing-hero.jpg"
        alt="Rentmode Rental Platform Hero Section"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-[#0000007d] bg-blend-overlay "></div>
      <div className=" h-full flex justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" text-center w-full "
        >
          <div className="max-w-4xl mx-auto px-16 sm:px-12">
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Take the first step toward your dream apartment.
            </h1>
            <p className="text-xl text-white mb-8">
              Browse our full list of rental homes designed to match your
              lifestyle and personal preferences!
            </p>

            <div className="flex justify-center">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city or address"
                className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
              />
              <Button
                onClick={handleLocationSearch}
                className="bg-secondary-500 text-white rounded-none rounded-r-xl  border-none hover:bg-secondary-600 h-12 "
              >
                Find it
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
