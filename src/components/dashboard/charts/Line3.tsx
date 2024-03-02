import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";
import TabSections from "./tab-sections";
import { DatePickerWithRange } from "./date-range";
import { CHART_DATA } from "./data";
import { nFormatter } from "../../../lib/utils";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

const Line3 = () => {
  const options = {
    plugins: {
      legend: false,
    },
  };

  return (
    <div className="w-6/12 mx-auto h-fit  bg-white rounded-lg p-5">
      <TabSections />
      <DatePickerWithRange />
      <Line
        data={CHART_DATA}
        options={{
          plugins: {
            tooltip: {
              enabled: true,
              intersect: false,
              mode: "nearest",
              callbacks: {
                title: () => "title",
                label: (item) => item.parsed + "%",
              },
            },
            legend: {
              display: true,
              labels: {
                color: "rgb(255, 99, 132)",
                boxHeight: 1,
                boxPadding: 0,
                boxWidth: 20,
              },
              position: "bottom",
              align: "end",
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
                stepSize: 10000,
                callback: (value) => nFormatter(Number(value)),
              },
            },
          },
        }}
      ></Line>
    </div>
  );
};

export default Line3;
