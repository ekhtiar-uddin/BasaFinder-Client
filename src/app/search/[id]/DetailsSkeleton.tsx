"use client";

const DetailsSkeleton = () => {
  return (
    <section className="bg-white">
      {/* Top image preview skeleton (matches <ImagePreviews /> height) */}
      <div className="relative h-[450px] w-full bg-gray-200 animate-pulse">
        {/* faint nav button placeholders */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gray-300" />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gray-300" />
      </div>

      {/* Desktop / tablet layout (matches SingleListing wrapper) */}
      <div className="customWidth flex flex-col md:flex-row justify-center gap-10 mt-16 mb-8">
        {/* Left column */}
        <div className="order-2 md:order-1 lg:w-4/6 w-full animate-pulse">
          {/* PropertyOverview skeleton */}
          <div className="mb-10">
            <div className="h-4 w-2/3 bg-gray-200 rounded mb-4" />
            <div className="h-8 w-1/2 bg-gray-200 rounded mb-6" />

            <div className="flex justify-between items-center mb-6 gap-6">
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
              <div className="h-4 w-40 bg-gray-200 rounded" />
            </div>

            {/* metrics card */}
            <div className="w-[350px] sm:w-[500px] md:w-full border border-primary-200 rounded-xl p-3 sm:p-6">
              <div className="grid grid-cols-2 sm:flex sm:justify-between sm:items-center gap-4 px-2 sm:px-5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-3 w-24 bg-gray-200 rounded" />
                    <div className="h-4 w-28 bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* About section */}
            <div className="my-16">
              <div className="h-6 w-64 bg-gray-200 rounded mb-5" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-11/12 bg-gray-200 rounded" />
                <div className="h-4 w-10/12 bg-gray-200 rounded" />
                <div className="h-4 w-9/12 bg-gray-200 rounded" />
              </div>
            </div>
          </div>

          {/* PropertyDetails skeleton (amenities grid + highlights + tabs) */}
          <div className="mb-6">
            <div className="h-6 w-56 bg-gray-200 rounded my-3" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center border border-primary-200 bg-white rounded-xl py-8 px-4"
                >
                  <div className="h-10 w-10 bg-gray-200 rounded-full mb-3" />
                  <div className="h-4 w-24 bg-gray-200 rounded" />
                </div>
              ))}
            </div>

            <div className="mt-12 mb-16">
              <div className="h-6 w-40 bg-gray-200 rounded mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center border rounded-xl py-8 px-4 bg-white"
                  >
                    <div className="h-10 w-10 bg-gray-200 rounded-full mb-3" />
                    <div className="h-4 w-28 bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="h-6 w-48 bg-gray-200 rounded mb-3" />
              <div className="h-4 w-3/4 bg-gray-200 rounded mb-6" />

              {/* tabs header */}
              <div className="grid w-full grid-cols-3 gap-2 mb-6">
                <div className="h-10 bg-gray-200 rounded" />
                <div className="h-10 bg-gray-200 rounded" />
                <div className="h-10 bg-gray-200 rounded" />
              </div>

              {/* tab content block */}
              <div className="w-full sm:w-1/3 space-y-3">
                <div className="h-4 w-40 bg-gray-200 rounded" />
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-5/6 bg-gray-200 rounded" />
              </div>
            </div>
          </div>

          {/* PropertyLocation skeleton (address row + map box) */}
          <div className="py-16">
            <div className="h-6 w-48 bg-gray-200 rounded mb-3" />
            <div className="flex justify-between items-center gap-4 mb-4">
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
            </div>
            <div className="relative mt-4 h-[300px] rounded-lg overflow-hidden bg-gray-200" />
          </div>
        </div>

        {/* Right column (desktop only in your page) */}
        <div className="order-1 lg:block hidden md:order-2 w-2/6 animate-pulse">
          {/* ContactWidget skeleton */}
          <div className="bg-white border border-primary-200 rounded-2xl p-7 h-fit">
            <div className="border border-primary-200 p-4 rounded-xl flex items-center gap-5 mb-4">
              <div className="h-12 w-12 bg-gray-200 rounded-full" />
              <div className="space-y-2 flex-1">
                <div className="h-4 w-40 bg-gray-200 rounded" />
                <div className="h-5 w-32 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="h-10 w-full bg-gray-200 rounded" />
            <div className="h-px bg-gray-200 my-4" />
            <div className="space-y-2">
              <div className="h-3 w-2/3 bg-gray-200 rounded" />
              <div className="h-3 w-3/4 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Suggested properties skeleton */}
          <div className="mt-24 mb-5">
            <div className="h-7 w-56 bg-gray-200 rounded mb-6" />

            {/* mimic CardCompact list (desktop 2xl grid) */}
            <div className="p-4 w-full 2xl:grid hidden grid-cols-1 gap-5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded overflow-hidden shadow-lg w-full flex h-40"
                >
                  <div className="w-1/3 bg-gray-200" />
                  <div className="w-2/3 p-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="h-4 w-2/3 bg-gray-200 rounded" />
                      <div className="h-3 w-5/6 bg-gray-200 rounded" />
                      <div className="h-3 w-1/2 bg-gray-200 rounded" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-3 w-24 bg-gray-200 rounded" />
                      <div className="h-4 w-20 bg-gray-200 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* mimic CardTwo list (non-2xl) */}
            <div className="p-1 2xl:hidden 2xs:w-full 2xs:grid grid-cols-1 gap-5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white border p-3 rounded overflow-hidden shadow-lg w-full"
                >
                  <div className="h-64 w-full bg-gray-200 rounded mb-4" />
                  <div className="space-y-3 p-1">
                    <div className="flex justify-between items-center gap-4">
                      <div className="h-4 w-1/2 bg-gray-200 rounded" />
                      <div className="h-9 w-24 bg-gray-200 rounded" />
                    </div>
                    <div className="h-3 w-3/4 bg-gray-200 rounded" />
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout (matches your lg:hidden block) */}
      <div className="flex md:flex-row flex-col gap-5 lg:hidden customWidth animate-pulse">
        {/* Contact widget again */}
        <div className="bg-white border border-primary-200 rounded-2xl p-7 h-fit w-full">
          <div className="border border-primary-200 p-4 rounded-xl flex items-center gap-5 mb-4">
            <div className="h-12 w-12 bg-gray-200 rounded-full" />
            <div className="space-y-2 flex-1">
              <div className="h-4 w-40 bg-gray-200 rounded" />
              <div className="h-5 w-32 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="h-10 w-full bg-gray-200 rounded" />
          <div className="h-px bg-gray-200 my-4" />
          <div className="space-y-2">
            <div className="h-3 w-2/3 bg-gray-200 rounded" />
            <div className="h-3 w-3/4 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Suggested list container */}
        <div className="w-full h-[120vh] overflow-auto">
          <div className="h-7 w-56 bg-gray-200 rounded mb-4" />
          <div className="p-1 2xs:w-full 2xs:grid grid-cols-1 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white border p-3 rounded overflow-hidden shadow-lg w-full"
              >
                <div className="h-64 w-full bg-gray-200 rounded mb-4" />
                <div className="space-y-3 p-1">
                  <div className="flex justify-between items-center gap-4">
                    <div className="h-4 w-1/2 bg-gray-200 rounded" />
                    <div className="h-9 w-24 bg-gray-200 rounded" />
                  </div>
                  <div className="h-3 w-3/4 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSkeleton;
