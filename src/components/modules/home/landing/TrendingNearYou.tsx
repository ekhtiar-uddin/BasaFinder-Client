"use client";

import ReusableCarousel from "@/components/reusable/ReusableCarousel";
import CardTwo from "@/components/ui/CardTwo";
import { Flame } from "lucide-react";

const trendingProperties: Record<string, any>[] = [
  {
    id: 1,
    name: "Modern Glass Condo",
    location: { address: "Downtown", city: "Seattle" },
    price: 3200,
    beds: 2,
    baths: 2,
    squareFeet: 1100,
    imageUrls: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    ],
    isPetsAllowed: false,
    isParkingIncluded: true,
  },
  {
    id: 2,
    name: "Historic Brownstone",
    location: { address: "Brooklyn", city: "NY" },
    price: 4500,
    beds: 3,
    baths: 2,
    squareFeet: 1600,
    imageUrls: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    ],
    isPetsAllowed: true,
    isParkingIncluded: false,
  },
  {
    id: 3,
    name: "Sunny River North Loft",
    location: { address: "River North", city: "Chicago" },
    price: 2800,
    beds: 1,
    baths: 1,
    squareFeet: 950,
    imageUrls: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=600&q=80",
    ],
    isPetsAllowed: false,
    isParkingIncluded: false,
  },
  {
    id: 4,
    name: "Ocean View Apartment",
    location: { address: "South Beach", city: "Miami" },
    price: 3800,
    beds: 2,
    baths: 2,
    squareFeet: 1200,
    imageUrls: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80",
    ],
    isPetsAllowed: true,
    isParkingIncluded: true,
  },

  // New 2 properties
  {
    id: 5,
    name: "Luxury Mountain Cabin",
    location: { address: "Aspen Hills", city: "Colorado" },
    price: 5200,
    beds: 4,
    baths: 3,
    squareFeet: 2000,
    imageUrls: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    ],
    isPetsAllowed: true,
    isParkingIncluded: true,
  },
  {
    id: 6,
    name: "Minimalist City Studio",
    location: { address: "Manhattan", city: "New York" },
    price: 2500,
    beds: 1,
    baths: 1,
    squareFeet: 700,
    imageUrls: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    ],
    isPetsAllowed: false,
    isParkingIncluded: false,
  },
];

export function TrendingNearYou() {
  return (
    <section className="customWidth py-[50px]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-orange-100 p-2 rounded-lg">
            <Flame className="w-6 h-6 text-[#f6920a]" />
          </div>
          <div>
            <h2 className="text-3xl  md:text-[40px] font-semibold  ">
              Trending Near You
            </h2>
          </div>
        </div>
      </div>

      <ReusableCarousel
        playSeconds={4000}
        sectionName="TrendingNearYou"
        data={trendingProperties as any}
        flexBasisClassName="md:pl-4 pl-2 2xs:basis-1/2 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
        renderItem={(property) => (
          <CardTwo
            property={property}
            propertyLink={`/search/6802ae6b8e4c38336856e890`}
          />
        )}
      />
    </section>
  );
}
