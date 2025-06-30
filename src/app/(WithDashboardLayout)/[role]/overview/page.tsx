"use client";

import Chart from "@/components/overviewDashboard/chart/Chart";
import FeaturedDashboard from "@/components/overviewDashboard/featured/FeaturedDashboard";
import "@/components/overviewDashboard/overviewHome.scss";
import List from "@/components/overviewDashboard/table/Table";

import Widget from "@/components/widget/widget";

const OverviewPage = () => {
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];

  return (
    <div className="pt-5">
      <div className="grid grid-cols-4">
        <Widget type="properties" amount={30} />

        <Widget type="users" amount={20} />

        <Widget type="landlords" amount={10} />
        <Widget type="earning" amount={233444} />
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
