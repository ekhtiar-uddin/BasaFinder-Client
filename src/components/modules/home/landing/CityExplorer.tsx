"use client";
import ReusableCarousel from "@/components/reusable/ReusableCarousel";
import { MapPin } from "lucide-react";

const cities = [
  {
    name: "Boston",
    count: "1,240",
    image:
      "https://images.unsplash.com/photo-1506501139174-099022df5260?w=600&q=80",
  },
  {
    name: "New York",
    count: "3,850",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80",
  },
  {
    name: "Chicago",
    count: "2,100",
    image:
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80",
  },
  {
    name: "Austin",
    count: "1,850",
    image:
      "https://images.unsplash.com/photo-1531218150217-5afc46b556a4?w=600&q=80",
  },
  {
    name: "Miami",
    count: "2,400",
    image:
      "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=600&q=80",
  },
  {
    name: "Seattle",
    count: "1,650",
    image:
      "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=600&q=80",
  },
];

export function CityExplorer() {
  return (
    <section className="customWidth md:py-8 py-5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Explore Neighborhoods
          </h2>
          <p className="text-gray-600 text-lg">
            Find your perfect home in the most sought-after cities.
          </p>
        </div>
        {/* <button className="flex items-center text-[#f6920a] font-semibold hover:text-[#e08309] transition-colors whitespace-nowrap">
          See all cities <ArrowRight className="w-5 h-5 ml-2" />
        </button> */}
      </div>

      <ReusableCarousel
        playSeconds={4000}
        sectionName="CityExplorer"
        data={cities}
        flexBasisClassName="md:pl-4 pl-2 2xs:basis-1/2 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
        renderItem={(city) => (
          <div className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-1 mb-1">
                <MapPin className="w-4 h-4 text-white/70" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {city.name}
              </h3>
              <div className="inline-block bg-white/20 backdrop-blur-md text-white text-sm font-medium px-3 py-1 rounded-full">
                {city.count} listings
              </div>
            </div>
          </div>
        )}
      />
    </section>
  );
}
