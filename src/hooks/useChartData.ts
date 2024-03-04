import { useState, useEffect } from "react";
import { DateRange } from "react-day-picker";
import { filterSalesDataByMonthRange } from "@/lib/utils";
import { CHART_DATA } from "@/lib/data";
import { ISale } from "@/interfaces";
import { ChartData, Point } from "chart.js";

export const useChartData = (
  date: DateRange | undefined,
  dataSource: ISale[],
  section: string
) => {
  const [data, setData] =
    useState<ChartData<"line", (number | Point | null)[], unknown>>();

  useEffect(() => {
    if (date?.from && date.to) {
      const filteredData: ISale[] = filterSalesDataByMonthRange(
        date,
        dataSource
      );
      if (!filteredData) return;

      let dataSets = [
        {
          ...CHART_DATA?.datasets[0],
          data: filteredData?.map((sale: ISale) => sale?.Clothing),
        },
      ];
      if (section === "LineGraph") {
        dataSets.push({
          ...CHART_DATA.datasets[1],
          data: filteredData.map((sale: ISale) => sale.Accessories),
        });
      }

      setData({
        labels: filteredData?.map((sale: ISale) => `${sale?.month}`),
        datasets: dataSets,
      });
    }
  }, [date, dataSource]);

  return data;
};
