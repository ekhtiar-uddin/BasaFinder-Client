import ManageProperties from "@/components/modules/property/ManageProperties";
import { getAllProperties } from "@/services/Property";

const ManagePropertiesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getAllProperties(page, "6");

  // console.log("here sdf", meta);
  return (
    <div>
      <ManageProperties properties={data} meta={meta} />
    </div>
  );
};

export default ManagePropertiesPage;
