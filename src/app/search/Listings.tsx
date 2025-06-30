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
import { useAllProduct, useAppSelector } from "@/redux/hook";
import { useSearchParams } from "next/navigation";
import CardCompactSkeleton from "./CardCompactSkeleton";

const Listings = () => {
  const { user: authUser } = useUser();
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  // console.log("here sdfsdf", query);
  const { data: properties, isLoading } = useAllProduct(
    undefined,
    undefined,
    query
  );

  const viewMode = useAppSelector((state) => state.global.viewMode);
  const currentLocation = useAppSelector(
    (state) => state.global.filters.location
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
    <div className="w-full">
      <h3 className="text-sm px-4 font-bold">
        {properties?.length}{" "}
        <span className="text-gray-700 font-normal">
          Properties {currentLocation && `in ${currentLocation}`}
        </span>
      </h3>
      <div className="flex">
        <div className="p-4 w-full">
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
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Listings;
