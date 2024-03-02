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
import { NEW_CUSTOMER_CHART_DATA, SCALES } from "../../../lib/data";
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

export function NewCustomer() {
  const [data, setData] =
    useState<ChartData<"line", (number | Point | null)[], unknown>>();
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2023, 5, 1),
    to: new Date(2023, 11, 30),
  });

  useEffect(() => {
    if (date?.from && date.to) {
      const filteredData = filterSalesDataByMonthRange(date);
      if (!filteredData) return;

      setData({
        labels: filteredData.map((sale) => `${sale.month}`),
        datasets: [
          {
            ...NEW_CUSTOMER_CHART_DATA.datasets[0],
            data: filteredData.map((sale) => sale.Clothing),
          },
        ],
      });
    }
  }, [date]);

  return (
    <div className=" w-11/12  lg:w-8/12 mx-auto h-fit  bg-white rounded-lg p-5">
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
            },
            scales: SCALES,
          }}
          data={data}
        />
      )}
    </div>
  );
}
