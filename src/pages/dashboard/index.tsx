// import React, { useMemo } from "react";
// import { CrudFilter, useList } from "@refinedev/core";
// import dayjs from "dayjs";
// import Stats from "../../components/dashboard/Stats";
// import { ResponsiveAreaChart } from "../../components/dashboard/ResponsiveAreaChart";
// import { ResponsiveBarChart } from "../../components/dashboard/ResponsiveBarChart";
// import { TabView } from "../../components/dashboard/TabView";
// import { RecentSales } from "../../components/dashboard/RecentSales";
// import { IChartDatum, TTab } from "../../interfaces";
// import { LineChartHero } from "../../components/dashboard/charts/LineChartHero";
// import { LineChart } from "recharts";
// import MyLineChart from "../../components/dashboard/charts/Line2";
import { Line4 } from "@/components/dashboard/charts/Line4";
import Line3 from "../../components/dashboard/charts/Line3";

// const filters: CrudFilter[] = [
//   {
//     field: "start",
//     operator: "eq",
//     value: dayjs()?.subtract(7, "days")?.startOf("day"),
//   },
//   {
//     field: "end",
//     operator: "eq",
//     value: dayjs().startOf("day"),
//   },
// ];

export const Dashboard: React.FC = () => {
  // const { data: dailyRevenue } = useList<IChartDatum>({
  //   resource: "dailyRevenue",
  //   filters,
  // });

  // const { data: dailyOrders } = useList<IChartDatum>({
  //   resource: "dailyOrders",
  //   filters,
  // });

  // const { data: newCustomers } = useList<IChartDatum>({
  //   resource: "newCustomers",
  //   filters,
  // });

  // const useMemoizedChartData = (d: any) => {
  //   return useMemo(() => {
  //     return d?.data?.data?.map((item: IChartDatum) => ({
  //       date: new Intl.DateTimeFormat("en-US", {
  //         month: "short",
  //         year: "numeric",
  //         day: "numeric",
  //       }).format(new Date(item.date)),
  //       value: item?.value,
  //     }));
  //   }, [d]);
  // };

  // const memoizedRevenueData = useMemoizedChartData(dailyRevenue);
  // const memoizedOrdersData = useMemoizedChartData(dailyOrders);
  // const memoizedNewCustomersData = useMemoizedChartData(newCustomers);

  // const tabs: TTab[] = [
  //   {
  //     id: 1,
  //     label: "Daily Revenue",
  //     content: (
  //       <ResponsiveAreaChart
  //         kpi="Daily revenue"
  //         data={memoizedRevenueData}
  //         colors={{
  //           stroke: "rgb(54, 162, 235)",
  //           fill: "rgba(54, 162, 235, 0.2)",
  //         }}
  //       />
  //     ),
  //   },
  //   {
  //     id: 2,
  //     label: "Daily Orders",
  //     content: (
  //       <ResponsiveBarChart
  //         kpi="Daily orders"
  //         data={memoizedOrdersData}
  //         colors={{
  //           stroke: "rgb(255, 159, 64)",
  //           fill: "rgba(255, 159, 64, 0.7)",
  //         }}
  //       />
  //     ),
  //   },
  //   {
  //     id: 3,
  //     label: "New Customers",
  //     content: (
  //       <ResponsiveAreaChart
  //         kpi="New customers"
  //         data={memoizedNewCustomersData}
  //         colors={{
  //           stroke: "rgb(76, 175, 80)",
  //           fill: "rgba(54, 162, 235, 0.2)",
  //         }}
  //       />
  //     ),
  //   },
  // ];

  return (
    <div className="bg-red-200 w-full">
      {/* <Stats
        dailyRevenue={dailyRevenue}
        dailyOrders={dailyOrders}
        newCustomers={newCustomers}
      /> */}
      {/* <TabView tabs={tabs} /> */}
      {/* <LineChartHero />
      <MyLineChart /> */}
      {/* <Line3 /> */}
      <Line4 />
      {/* <RecentSales /> */}
    </div>
  );
};
