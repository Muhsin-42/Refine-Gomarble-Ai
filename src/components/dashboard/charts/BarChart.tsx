import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import TabSections from "./tab-sections";
import { nFormatter } from "@/lib/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    x: {
      grid: { display: false },
      border: { display: false, color: "red", width: 50 },
    },
    y: {
      border: { display: false },
      min: 0,
      ticks: {
        stepSize: 5,
        callback: (value: String | Number) => nFormatter(Number(value)),
      },
    },
  },
};

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Clothing",
      data: [12, 14, 3, 5, 2],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Accessories",
      data: [10, 3, 16, 5, 1],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function BarChartComp() {
  return (
    <div className=" w-11/12  lg:w-8/12 mx-auto h-fit  bg-white rounded-lg p-5">
      <TabSections />
      {data && <Bar options={options} data={data} />}
    </div>
  );
}
