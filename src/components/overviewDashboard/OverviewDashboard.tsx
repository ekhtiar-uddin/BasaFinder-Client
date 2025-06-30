import Chart from "./chart/Chart";

import Table from "../overviewDashboard/table/Table";
import Widget from "../widget/widget";
import FeaturedDashboard from "./featured/FeaturedDashboard";
import "./overviewHome.scss";
const OverviewDashboard = () => {
  // const data = [
  //   { name: "January", Total: 1200 },
  //   { name: "February", Total: 2100 },
  //   { name: "March", Total: 800 },
  //   { name: "April", Total: 1600 },
  //   { name: "May", Total: 900 },
  //   { name: "June", Total: 1700 },
  // ];

  return (
    <div className="">
      <div className="grid grid-cols-4">
        <Widget type="customers" amount={2330} />

        <Widget type="order" amount={2330} />

        <Widget type="products" amount={2330} />
        <Widget type="earning" amount={2330} />
      </div>
      <div className="charts flex gap-5 mt-5">
        <FeaturedDashboard todaySales={532.75} />
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>

      <div className="listContainer ">
        <div className="listTitle my-5">Latest Transactions</div>
        <Table />
      </div>
    </div>
  );
};

export default OverviewDashboard;
