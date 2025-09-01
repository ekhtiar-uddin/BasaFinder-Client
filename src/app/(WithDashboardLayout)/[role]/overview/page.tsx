"use server";

import Chart from "@/components/overviewDashboard/chart/Chart";
import FeaturedDashboard from "@/components/overviewDashboard/featured/FeaturedDashboard";
import "@/components/overviewDashboard/overviewHome.scss";
import List from "@/components/overviewDashboard/table/Table";

import Widget from "@/components/widget/widget";
import { getAllApplications } from "@/services/Application";
import { getCurrentUser } from "@/services/AuthService";
import { getAllProperties } from "@/services/Property";
import { getAllUsers } from "@/services/User";
import { cookies } from "next/headers";

const OverviewPage = async ({ params }: { params: { role: string } }) => {
  const userRole = params.role;
  const user = await getCurrentUser();
  const token = (await cookies()).get("accessToken")?.value;
  const response = await getAllApplications(token);
  const { data: users } = await getAllUsers();

  const applications = response?.data;

  console.log("users", users);

  const tenants = users?.filter((user) => user?.role === "tenant");
  const landlords = users?.filter((user) => user?.role === "landlord");

  const individualApplications = applications?.filter(
    (item) => item?.email === user?.email
  );

  const individualRequests = applications?.filter(
    (item) => item?.property?.landlord?.email === user?.email
  );

  const { data: properties } = await getAllProperties(
    undefined,
    undefined,
    undefined
  );

  const landlorTotalEarning = individualRequests
    ?.filter((item) => item?.status === "Approved")
    .reduce((sum, item) => sum + (item?.property?.price || 0), 0);

  console.log("individualRequests", individualRequests);
  // console.log("individualApplications", individualApplications);

  const allApprovedApplications = applications?.filter(
    (item) => item?.status === "Approved"
  );
  const totalEarnings = allApprovedApplications?.reduce(
    (sum, item) => sum + (item?.property?.price || 0),
    0
  );

  // const data = [
  //   { name: "January", Total: 1200 },
  //   { name: "February", Total: 2100 },
  //   { name: "March", Total: 800 },
  //   { name: "April", Total: 1600 },
  //   { name: "May", Total: 900 },
  //   { name: "June", Total: 1700 },
  // ];

  return (
    <div className="pt-5">
      <div
        className={`grid ${
          userRole === "landlord" ? "grid-cols-5" : "grid-cols-4"
        }`}
      >
        <Widget type="properties" amount={properties?.length} />

        {userRole === "tenant" && (
          <>
            <Widget
              type="applications"
              amount={individualApplications?.length}
            />
            <Widget type="favorites" amount={individualApplications?.length} />
          </>
        )}

        {userRole !== "tenant" && userRole !== "admin" && (
          <>
            <Widget type="tenants" amount={tenants?.length} />
            <Widget type="landlords" amount={landlords?.length} />
            <Widget type="applications" amount={individualRequests?.length} />
            <Widget type="earning" amount={landlorTotalEarning} />
          </>
        )}
        {userRole !== "tenant" && userRole !== "landlord" && (
          <>
            <Widget type="users" amount={users?.length} />
            <Widget type="balance" amount={13230} />
            <Widget type="earning" amount={totalEarnings} />
          </>
        )}
      </div>
      <div className="charts flex gap-5 mt-5">
        <FeaturedDashboard todaySales={532.75} />
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>

      <div className="listContainer ">
        <div className="listTitle my-5">Latest </div>
        <List />
      </div>
    </div>
  );
};

export default OverviewPage;
