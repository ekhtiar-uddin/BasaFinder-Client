"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropertyTypeIcons } from "@/lib/constants";
import { setFilters } from "@/redux/features/globalSlice";
import { useAppDispatch } from "@/redux/hook";
import { motion } from "framer-motion";
import { DollarSign, Home, MapPin, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeroSection = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("any");
  const [priceRange, setPriceRange] = useState("any");
  const router = useRouter();

  const handleLocationSearch = async () => {
    try {
      const trimmedQuery = searchQuery.trim();
      if (!trimmedQuery) return;

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          trimmedQuery,
        )}&format=json`,
      );
      const data = await response.json();
      if (!data || data.length === 0) return;

      const lat = data[0]?.lat;
      const lng = data[0]?.lon;

      // Build filters to dispatch
      const filterPayload: Record<string, any> = {
        location: trimmedQuery,
        coordinates: [parseFloat(lng), parseFloat(lat)],
      };

      if (propertyType && propertyType !== "any") {
        filterPayload.propertyType = propertyType;
      }

      // Map price range selection to priceRange array [min, max]
      if (priceRange && priceRange !== "any") {
        const priceMap: Record<string, [number | null, number | null]> = {
          "0-1000": [null, 1000],
          "1000-2000": [1000, 2000],
          "2000-3000": [2000, 3000],
          "3000+": [3000, null],
        };
        filterPayload.priceRange = priceMap[priceRange] ?? [null, null];
      }

      dispatch(setFilters(filterPayload));

      const params = new URLSearchParams({
        location: trimmedQuery,
        lat: lat.toString(),
        lng: lng.toString(),
        ...(propertyType !== "any" && { propertyType }),
        ...(priceRange !== "any" && { priceRange }),
      });
      router.push(`/search?${params.toString()}`);
    } catch (error) {
      console.error("error search location:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleLocationSearch();
  };

  return (
    <div className="relative min-h-[88vh] flex items-center justify-center pt-20 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landing-hero.jpg"
          alt="Rentmode Rental Platform Hero Section"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/50 to-gray-900/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <h1 className="text-[32px] 2xs:text-[38px] md:text-5xl lg:text-[56px] font-extrabold text-white leading-tight tracking-tight mb-5">
            Take the first step toward your <br className="hidden md:block" />
            <span className="text-[#f6920a]">dream apartment.</span>
          </h1>
          <p className="text-base 2xs:text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Browse our full list of rental homes designed to match your
            lifestyle and personal preferences.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-5xl mb-12"
        >
          {/* Search card */}
          <div className="bg-white rounded-2xl p-2 shadow-2xl flex flex-col md:flex-row items-stretch gap-2">
            {/* Location input */}
            <div className="flex-[2] flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100 min-w-0">
              <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="City, neighborhood, or address"
                className="w-full bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 font-medium text-sm"
              />
            </div>

            {/* Property Type */}
            <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-100 min-w-0">
              <div className="flex items-center w-full px-2">
                <Home className="w-5 h-5 text-gray-400 mr-1 flex-shrink-0" />
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="border-none shadow-none focus:ring-0 bg-transparent text-sm font-medium text-gray-700 placeholder:text-gray-400 h-auto py-3 px-2 w-full">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="any">Any Property Type</SelectItem>
                    {Object.entries(PropertyTypeIcons).map(([type, Icon]) => (
                      <SelectItem key={type} value={type}>
                        <div className="flex items-center gap-2">
                          <Icon className="hover:text-white w-4 h-4 mr-2" />
                          <span>{type}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price Range */}
            <div className="flex-1 flex items-center min-w-0">
              <div className="flex items-center w-full px-2">
                <DollarSign className="w-5 h-5 text-gray-400 mr-1 flex-shrink-0" />
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="border-none shadow-none focus:ring-0 bg-transparent text-sm font-medium text-gray-700 placeholder:text-gray-400 h-auto py-3 px-2 w-full">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="any">Any Price</SelectItem>
                    <SelectItem value="0-1000">Under $1,000</SelectItem>
                    <SelectItem value="1000-2000">$1,000 – $2,000</SelectItem>
                    <SelectItem value="2000-3000">$2,000 – $3,000</SelectItem>
                    <SelectItem value="3000+">$3,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleLocationSearch}
              className="w-full md:w-auto cursor-pointer bg-[#f6920a] hover:bg-[#e08309] active:bg-[#c97608] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-colors shadow-lg shadow-orange-500/30 flex-shrink-0 gap-2"
            >
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 2xs:gap-6 md:gap-12 text-gray-300 text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <Home className="w-4 h-4 2xs:w-5 2xs:h-5 text-[#f6920a]" />
            <span>10k+ Active Listings</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-gray-600 my-auto" />
          <div className="flex items-center gap-2">
            {/* Shield check inline SVG to avoid extra import */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 2xs:w-5 2xs:h-5 text-[#f6920a]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <span>Verified Landlords</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-gray-600 my-auto" />
          <div className="flex items-center gap-2">
            {/* Zap inline SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 2xs:w-5 2xs:h-5 text-[#f6920a]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span>Zero Hidden Fees</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
