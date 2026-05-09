import { ArrowRight } from "lucide-react";
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Neighborhoods
            </h2>
            <p className="text-gray-600 text-lg">
              Find your perfect home in the most sought-after cities.
            </p>
          </div>
          <button className="flex items-center text-[#f6920a] font-semibold hover:text-[#e08309] transition-colors whitespace-nowrap">
            See all cities <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 gap-6 hide-scrollbar snap-x">
          {cities.map((city, index) => (
            <div
              key={index}
              className="relative min-w-[280px] md:min-w-[320px] h-96 rounded-2xl overflow-hidden group cursor-pointer snap-start flex-shrink-0"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {city.name}
                </h3>
                <div className="inline-block bg-white/20 backdrop-blur-md text-white text-sm font-medium px-3 py-1 rounded-full">
                  {city.count} listings
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
