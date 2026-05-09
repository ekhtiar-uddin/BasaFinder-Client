const stats = [
  {
    value: "50,000+",
    label: "Verified Listings",
  },
  {
    value: "4.9★",
    label: "Average Rating",
  },
  {
    value: "200+",
    label: "Cities Covered",
  },
  {
    value: "98%",
    label: "Renter Satisfaction",
  },
];
export function TrustStatsBar() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-gray-800">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[#f6920a] font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
