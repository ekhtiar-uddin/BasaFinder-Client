// "use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";

import FiltersBarPage from "./FiltersBar";

import { getAllProducts } from "@/services/Product";
import FiltersFullPage from "./FiltersFullPage";
import Listings from "./Listings";
import Map from "./Map";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const query = await searchParams;

  console.log("real query", query);

  // console.log("here", query);

  const { data: properties } = await getAllProducts(
    undefined,
    undefined,
    query
  );

  return (
    <div
      className="w-full mx-auto px-5 flex flex-col"
      style={{
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <FiltersBarPage />
      <div className="flex justify-between flex-1 overflow-hidden gap-3 mb-5">
        <FiltersFullPage />
        <Map properties={properties} />
        <div className="basis-4/12 overflow-y-auto">
          <Listings />
        </div>
      </div>
    </div>
  );
};

export default Page;
