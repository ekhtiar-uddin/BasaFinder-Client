"use client";
import CardCompact from "@/components/ui/CardCompact";
import { useUser } from "@/context/UserContext";
import { useAllProduct, useSingleProduct } from "@/redux/hook";
import { useParams } from "next/navigation";
import { useState } from "react";
import ApplicationModal from "./ApplicationModal";
import ContactWidget from "./ContactWidget";
import DetailsSkeleton from "./DetailsSkeleton";
import ImagePreviews from "./ImagePreviews";
import PropertyDetails from "./PropertyDetails";
import PropertyLocation from "./PropertyLocation";
import PropertyOverview from "./PropertyOverview";

const SingleListing = () => {
  const propertyId = useParams().id as string;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user: authUser } = useUser();
  const { data: property, isLoading } = useSingleProduct(propertyId as string);
  const { data: properties } = useAllProduct();

  return (
    <>
      {isLoading ? (
        <DetailsSkeleton />
      ) : (
        <div>
          <ImagePreviews images={property?.imageUrls} />

          {/* <ImagePreviews
        images={["/singlelisting-2.jpg", "/singlelisting-3.jpg"]}
      /> */}
          <div className="customWidth flex flex-col md:flex-row justify-center gap-10  mt-16 mb-8">
            <div className="order-2 md:order-1 w-4/6">
              <PropertyOverview propertyId={propertyId} />
              <PropertyDetails propertyId={propertyId} />
              <PropertyLocation propertyId={propertyId} />
            </div>

            <div className="order-1 md:order-2 w-2/6">
              <ContactWidget onOpenModal={() => setIsModalOpen(true)} />

              <div className="w-full ">
                {" "}
                <h1 className="mt-10 font-bold text-2xl ">
                  Some Suggested Properties
                </h1>
                <div className="p-4 w-full grid  grid-cols-1">
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
              </div>
            </div>
          </div>
          {authUser && (
            <ApplicationModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              propertyId={propertyId}
            />
          )}
        </div>
      )}
    </>
  );
};

export default SingleListing;
