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
import TabSections from "../tabSections";
import { BAR_DATA, BAR_OPTIONS } from "@/lib/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function BarChartComp() {
  return (
    <div className=" w-11/12  lg:w-8/12 mx-auto h-fit  bg-white rounded-lg p-5">
      <TabSections />
      <Bar options={BAR_OPTIONS} data={BAR_DATA} />
    </div>
  );
}
