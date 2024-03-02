import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 500, pv: 3400, amt: 4400 },
  { name: "Page C", uv: 500, pv: 3400, amt: 4400 },
  // Add more data points...
];

const MyLineChart = () => (
  <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="name" className="!bg-red-500 !text-sky-500" />
    <YAxis />
    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
);

export default MyLineChart;
