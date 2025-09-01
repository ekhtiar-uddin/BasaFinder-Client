import ManageProperties from "@/components/modules/property/ManageProperties";
import { getCurrentUser } from "@/services/AuthService";
import { getAllProperties } from "@/services/Property";

const ManagePropertiesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getAllProperties(page, "6");

  const user = await getCurrentUser();

  const filteredProperties = data?.filter(
    (item) => item?.landlord?._id === user?.userId
  );

  // console.log("here sdf", user);
  // console.log("here data", data);
  // console.log("here data", filteredProperties);
  return (
    <div>
      <ManageProperties properties={filteredProperties} meta={meta} />
    </div>
  );
};

export default ManagePropertiesPage;
