"use client";
import CardCompact from "@/components/ui/CardCompact";
import CardTwo from "@/components/ui/CardTwo";
import { useUser } from "@/context/UserContext";
import { useAllProperties } from "@/redux/hook";

import { useSearchParams } from "next/navigation";
const SuggestedForSmallDevice = () => {
  const { user: authUser } = useUser();

  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  // console.log("here sdfsdf", query);
  const { data: properties } = useAllProperties(undefined, undefined, query);
  return (
    <div className="lg:hidden block w-full mt-10 h-[120vh] overflow-auto">
      {" "}
      <h1 className=" font-bold text-2xl ">Some Suggested Properties</h1>
      <div className="p-4 w-full 2xl:grid hidden  grid-cols-2">
        {properties?.slice(2, 8)?.map((property) => (
          <CardCompact
            key={property._id}
            property={property}
            // onFavoriteToggle={() => handleFavoriteToggle(property._id)}
            showFavoriteButton={!!authUser}
            propertyLink={`/search/${property._id}`}
          />
        ))}
      </div>
      <div className="p-1 2xl:hidden 2xs:w-full 2xs:grid grid-cols-2">
        {properties?.slice(2, 8)?.map((property) => (
          <CardTwo
            key={property._id}
            property={property}
            // onFavoriteToggle={() => handleFavoriteToggle(property._id)}
            showFavoriteButton={!!authUser}
            propertyLink={`/search/${property._id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestedForSmallDevice;
