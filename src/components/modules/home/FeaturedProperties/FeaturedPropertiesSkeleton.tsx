const FeaturedPropertiesSkeleton = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col w-full animate-pulse">
      {/* Image Container */}
      <div className="relative h-64 bg-gray-200">
        {/* Badges */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <div className="h-6 w-24 bg-gray-300 rounded-full" />
          <div className="h-6 w-28 bg-gray-300 rounded-full" />
        </div>
        {/* Wishlist Button */}
        <div className="absolute top-4 right-4 w-9 h-9 bg-gray-300 rounded-full" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title + Rating */}
        <div className="flex justify-between items-start">
          <div className="flex-1 pr-3">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-gray-200 rounded-full" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
          <div className="h-7 w-16 bg-gray-200 rounded-md flex-shrink-0" />
        </div>

        <div className="mt-3">
          {/* Stats Row */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-4">
            <div className="h-4 bg-gray-200 rounded w-16" />
            <div className="h-4 bg-gray-200 rounded w-16" />
            <div className="h-4 bg-gray-200 rounded w-20" />
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between">
            <div className="h-8 bg-gray-200 rounded w-28" />
            <div className="h-9 w-20 bg-gray-200 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertiesSkeleton;
