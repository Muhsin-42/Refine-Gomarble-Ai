import React from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import Stats from "../../components/dashboard/Stats";
import { TabView } from "../../components/dashboard/TabView";
import { RecentSales } from "../../components/dashboard/RecentSales";
import { IChartDatum, TTab } from "../../interfaces";
import { LineGraph } from "@/components/dashboard/charts/LineGraph";
import { NewCustomer } from "@/components/dashboard/charts/NewCustomer";
import { BarChartComp } from "@/components/dashboard/charts/BarChart";

const filters: CrudFilter[] = [
  {
    field: "start",
    operator: "eq",
    value: dayjs()?.subtract(7, "days")?.startOf("day"),
  },
  {
    field: "end",
    operator: "eq",
    value: dayjs().startOf("day"),
  },
];

export const Dashboard: React.FC = () => {
  const { data: dailyRevenue } = useList<IChartDatum>({
    resource: "dailyRevenue",
    filters,
  });

  const { data: dailyOrders } = useList<IChartDatum>({
    resource: "dailyOrders",
    filters,
  });

  const { data: newCustomers } = useList<IChartDatum>({
    resource: "newCustomers",
    filters,
  });

  const tabs: TTab[] = [
    {
      id: 1,
      label: "Daily Revenue",
      content: <LineGraph />,
      // content: <NewCustomer />,
    },
    {
      id: 2,
      label: "Daily Orders",
      content: <BarChartComp />,
    },
    {
      id: 3,
      label: "New Customers",
      content: <NewCustomer />,
    },
  ];

  return (
    <div>
      {dailyOrders && dailyRevenue && newCustomers && (
        <Stats
          dailyRevenue={dailyRevenue}
          dailyOrders={dailyOrders}
          newCustomers={newCustomers}
        />
      )}
      <TabView tabs={tabs} />
      <RecentSales />
    </div>
  );
};
