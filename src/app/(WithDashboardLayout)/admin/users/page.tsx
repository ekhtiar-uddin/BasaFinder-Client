import UsersPage from "@/components/modules/property/ManageUsers";
import { getAllUsers } from "@/services/User";

const Page = async () => {
  const { data: users } = await getAllUsers();

  return (
    <div>
      <UsersPage users={users} />
    </div>
  );
};

export default Page;
