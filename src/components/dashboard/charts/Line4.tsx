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
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CHART_DATA, CHART_OPTIONS, filterSalesDataByMonthRange } from "./data";
import TabSections from "./tab-sections";
import { DatePickerWithRange } from "./date-range";
import { DateRange } from "react-day-picker";

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

export function Line4() {
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
    <div className=" w-11/12  lg:w-6/12 mx-auto h-fit  bg-white rounded-lg p-5">
      <TabSections />
      <DatePickerWithRange date={date} setDate={setDate} />
      {data && <Line options={CHART_OPTIONS} data={data} />}
    </div>
  );
}
