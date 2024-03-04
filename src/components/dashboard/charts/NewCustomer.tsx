import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { SALES_DATA, SCALES } from "../../../lib/data";
import TabSections from "../tabSections";
import { DatePickerWithRange } from "../../ui/date-range";
import { DateRange } from "react-day-picker";
import { useChartData } from "@/hooks/useChartData";

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
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2023, 5, 1),
    to: new Date(2023, 11, 30),
  });
  const data = useChartData(date, SALES_DATA, "NewCustomer");
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
