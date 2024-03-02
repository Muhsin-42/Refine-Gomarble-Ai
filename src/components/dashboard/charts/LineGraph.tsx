import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  Point,
  TooltipItem,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CHART_DATA, SCALES } from "../../../lib/data";
import TabSections from "./tab-sections";
import { DatePickerWithRange } from "../../ui/date-range";
import { DateRange } from "react-day-picker";
import { filterSalesDataByMonthRange } from "@/lib/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const initialDate = {
  from: new Date(2023, 5, 1),
  to: new Date(2023, 11, 30),
};

export function LineGraph() {
  const [data, setData] =
    useState<ChartData<"line", (number | Point | null)[], unknown>>();
  const [date, setDate] = useState<DateRange | undefined>(initialDate);

  useEffect(() => {
    if (date?.from && date.to) {
      const filteredData = filterSalesDataByMonthRange(date);
      if (!filteredData) return;

      setData({
        labels: filteredData.map((sale) => `${sale.month}`),
        datasets: [
          {
            ...CHART_DATA.datasets[0],
            data: filteredData.map((sale) => sale.Clothing),
          },
          {
            ...CHART_DATA.datasets[1],
            data: filteredData.map((sale) => sale.Accessories),
          },
        ],
      });
    }
  }, [date]);

  return (
    <div className=" w-11/12  lg:w-8/12 mx-auto h-fit  bg-white rounded-lg p-5 shadow-xl">
      <TabSections />
      <DatePickerWithRange date={date} setDate={setDate} />
      {data && (
        <Line
          options={{
            responsive: true,
            plugins: {
              tooltip: {
                enabled: true,
                intersect: false,
                mode: "nearest",
                callbacks: {
                  title: (item: TooltipItem<"line">[]) =>
                    `${item[0]?.dataset?.label || ""} -  ${
                      item[0].label || ""
                    }`,
                  label: (item: TooltipItem<"line">) => `${item.raw}`,
                },
              },
              legend: {
                position: "bottom" as const,
                align: "end",
              },
            },
            scales: SCALES,
          }}
          data={data}
        />
      )}
    </div>
  );
}
