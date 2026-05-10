// "use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";

import FiltersBarPage from "./FiltersBar";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { getAllProperties } from "@/services/Property";
import FiltersFullPage from "./FiltersFullPage";
import Listings from "./Listings";
import Map from "./Map";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const query = await searchParams;

  console.log("real query", query);

  // console.log("here", query);

  const { data: properties } = await getAllProperties(
    undefined,
    undefined,
    query,
  );

  return (
    <section className="bg-white">
      <Navbar />
      <div
        className="w-full pt-20 mx-auto px-5 flex flex-col  lg:[--vh:107vh] "
        style={{
          height: `calc(var(--vh) - ${NAVBAR_HEIGHT}px)`,
        }}
      >
        <FiltersBarPage />
        {/* flex-1 */}
        <div className="flex flex-row justify-between flex-1 overflow-hidden gap-4 mb-5">
          <div className="hidden lg:flex lg:basis-8/12 xl:basis-8/12 2xl:h-full lg:h-full">
            <FiltersFullPage />
            <Map properties={properties} />
          </div>
          <div className="xl:basis-4/12 lg:basis-4/12 w-full lg:w-auto overflow-y-auto">
            <Listings />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Page;
