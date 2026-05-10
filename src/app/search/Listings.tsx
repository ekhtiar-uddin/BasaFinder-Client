"use client";

// import {
//     useAddFavoritePropertyMutation,
//     useGetPropertiesQuery,
//     useGetTenantQuery,
//     useRemoveFavoritePropertyMutation,
//   } from "@/state/api";

import CardCompact from "@/components/ui/CardCompact";
import CardTwo from "@/components/ui/CardTwo";
import { useUser } from "@/context/UserContext";
import { useAllProperties, useAppSelector } from "@/redux/hook";
import { useSearchParams } from "next/navigation";
import CardCompactSkeleton from "./CardCompactSkeleton";

const Listings = () => {
  const { user: authUser } = useUser();
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  // console.log("here sdfsdf", query);
  const { data: properties, isLoading } = useAllProperties(
    undefined,
    undefined,
    query,
  );

  const viewMode = useAppSelector((state) => state.global.viewMode);
  const currentLocation = useAppSelector(
    (state) => state.global.filters.location,
  );
  // const handleFavoriteToggle = async (propertyId: number) => {
  //   if (!authUser) return;

  //     const isFavorite = tenant?.favorites?.some(
  //       (fav: Property) => fav.id === propertyId
  //     );

  //     if (isFavorite) {
  //       await removeFavorite({
  //         cognitoId: authUser.cognitoInfo.userId,
  //         propertyId,
  //       });
  //     } else {
  //       await addFavorite({
  //         cognitoId: authUser.cognitoInfo.userId,
  //         propertyId,
  //       });
  //     }
  // };

  if (isLoading)
    return (
      <>
        {" "}
        <CardCompactSkeleton />{" "}
      </>
    );
  // if (isError || !properties) return <div>Failed to fetch properties</div>;

  // console.log("ksdjfsdjffds", properties);
  return (
    <div className="w-full  ">
      <h3 className="text-sm font-bold">
        {properties?.length}{" "}
        <span className="text-gray-700  font-normal">
          Properties {currentLocation && `in ${currentLocation}`}
        </span>
      </h3>
      <div className="flex mt-3">
        <div className=" grid-cols-1 gap-2  2xl:grid w-full hidden">
          {properties?.map((property) =>
            viewMode === "list" ? (
              <CardCompact
                key={property._id}
                property={property}
                // onFavoriteToggle={() => handleFavoriteToggle(property._id)}
                showFavoriteButton={!!authUser}
                propertyLink={`/search/${property._id}`}
              />
            ) : (
              <CardTwo
                key={property._id}
                property={property}
                // onFavoriteToggle={() => handleFavoriteToggle(property._id)}
                showFavoriteButton={!!authUser}
                propertyLink={`/search/${property._id}`}
              />
            ),
          )}
        </div>
        <div className=" 2xl:hidden lg:w-full grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 2xs:w-full xl:gap-0 sm:gap-5 lg:mx-0 sm:mx-auto">
          {properties?.map((property) => (
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
    </div>
  );
};

export default Listings;
