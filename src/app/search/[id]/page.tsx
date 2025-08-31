"use client";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import CardCompact from "@/components/ui/CardCompact";
import CardTwo from "@/components/ui/CardTwo";
import { useUser } from "@/context/UserContext";
import { useAllProperties, useSingleProperty } from "@/redux/hook";
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
  const { data: property, isLoading } = useSingleProperty(propertyId as string);
  const { data: properties } = useAllProperties(
    undefined,
    undefined,
    undefined
  );

  return (
    <section className="bg-white">
      <Navbar />
      {isLoading ? (
        <DetailsSkeleton />
      ) : (
        <div>
          <ImagePreviews images={property?.imageUrls} />

          {/* <ImagePreviews
        images={["/singlelisting-2.jpg", "/singlelisting-3.jpg"]}
      /> */}
          <div className="customWidth flex flex-col md:flex-row justify-center gap-10  mt-16 mb-8 ">
            <div className="order-2 md:order-1 lg:w-4/6 w-full ">
              <PropertyOverview propertyId={propertyId} />
              <PropertyDetails propertyId={propertyId} />
              <PropertyLocation propertyId={propertyId} />
            </div>

            <div className="order-1 lg:block hidden md:order-2 w-2/6">
              <ContactWidget onOpenModal={() => setIsModalOpen(true)} />

              <div className=" w-full mt-10 h-[120vh] overflow-auto">
                {" "}
                <h1 className=" font-bold text-2xl ">
                  Some Suggested Properties
                </h1>
                <div className="p-4 w-full 2xl:grid hidden  grid-cols-1">
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
                <div className="p-1 2xl:hidden 2xs:w-full 2xs:grid grid-cols-1">
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
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-5 lg:hidden customWidth  ">
            <ContactWidget onOpenModal={() => setIsModalOpen(true)} />

            <div className=" w-full  h-[120vh] overflow-auto">
              {" "}
              <h1 className="lg:mb-0 3xs:mb-3 font-bold text-2xl ">
                Some Suggested Properties
              </h1>
              <div className="p-4 w-full 2xl:grid hidden  grid-cols-1">
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
              <div className="p-1 2xl:hidden 2xs:w-full 2xs:grid grid-cols-1">
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

      <Footer />
    </section>
  );
};

export default SingleListing;
