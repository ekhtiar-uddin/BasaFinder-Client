import UpdatePropertyForm from "@/components/modules/property/UpdatePropertyForm";
import { getSingleProperty } from "@/services/Property";

const UpdatePropertyPage = async ({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) => {
  const { propertyId } = await params;

  const { data: property } = await getSingleProperty(propertyId);
  // console.log("kjsdf", property);

  return (
    // flex justify-center items-center
    <div className="">
      <UpdatePropertyForm property={property} />
    </div>
  );
};

export default UpdatePropertyPage;
