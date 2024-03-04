import { nFormatter } from "@/lib/utils";

export const SALES_DATA = [
  {
    month: "Jan 2022",
    Clothing: 8000,
    Accessories: 6000,
  },
  {
    month: "Feb 2022",
    Clothing: 10000,
    Accessories: 8000,
  },
  {
    month: "Mar 2022",
    Clothing: 12000,
    Accessories: 10000,
  },
  {
    month: "Apr 2022",
    Clothing: 11000,
    Accessories: 9000,
  },
  {
    month: "May 2022",
    Clothing: 14000,
    Accessories: 12000,
  },
  {
    month: "Jun 2022",
    Clothing: 16000,
    Accessories: 14000,
  },
  {
    month: "Jul 2022",
    Clothing: 18000,
    Accessories: 16000,
  },
  {
    month: "Aug 2022",
    Clothing: 22000,
    Accessories: 18000,
  },
  {
    month: "Sep 2022",
    Clothing: 18000,
    Accessories: 16000,
  },
  {
    month: "Oct 2022",
    Clothing: 16000,
    Accessories: 14000,
  },
  {
    month: "Nov 2022",
    Clothing: 14000,
    Accessories: 12000,
  },
  {
    month: "Dec 2022",
    Clothing: 12000,
    Accessories: 10000,
  },
  {
    month: "Jan 2023",
    Clothing: 10000,
    Accessories: 8000,
  },
  {
    month: "Feb 2023",
    Clothing: 12000,
    Accessories: 10000,
  },
  {
    month: "Mar 2023",
    Clothing: 14000,
    Accessories: 12000,
  },
  {
    month: "Apr 2023",
    Clothing: 13000,
    Accessories: 11000,
  },
  {
    month: "May 2023",
    Clothing: 16000,
    Accessories: 14000,
  },
  {
    month: "Jun 2023",
    Clothing: 18000,
    Accessories: 16000,
  },
  {
    month: "Jul 2023",
    Clothing: 19000,
    Accessories: 18000,
  },
  {
    month: "Aug 2023",
    Clothing: 15000,
    Accessories: 16000,
  },
  {
    month: "Sep 2023",
    Clothing: 18000,
    Accessories: 16000,
  },
  {
    month: "Oct 2023",
    Clothing: 16000,
    Accessories: 15000,
  },
  {
    month: "Nov 2023",
    Clothing: 15000,
    Accessories: 13000,
  },
  {
    month: "Dec 2023",
    Clothing: 11000,
    Accessories: 13000,
  },
  {
    month: "Jan 2024",
    Clothing: 13000,
    Accessories: 11000,
  },
  {
    month: "Feb 2024",
    Clothing: 14000,
    Accessories: 12000,
  },
  {
    month: "Mar 2024",
    Clothing: 17000,
    Accessories: 15000,
  },
  {
    month: "Apr 2024",
    Clothing: 20000,
    Accessories: 18000,
  },
  {
    month: "May 2024",
    Clothing: 14000,
    Accessories: 12000,
  },
  {
    month: "Jun 2024",
    Clothing: 18000,
    Accessories: 16000,
  },
];

export const CHART_DATA = {
  labels: SALES_DATA.map((sale) => sale.month),
  datasets: [
    {
      data: SALES_DATA.map((sale) => sale.Clothing),
      backgroundColor: "transparent",
      borderColor: "#489AD2",
      pointBorderColor: "transparent",
      pointBorderWidth: 5,
      label: "Accessories",
      tension: 0.3,
    },
    {
      data: SALES_DATA.map((sale) => sale.Accessories),
      backgroundColor: "transparent",
      borderColor: "#6FC2F3",
      pointBorderColor: "transparent",
      pointBorderWidth: 5,
      tension: 0.3,
      borderDash: [5, 5],
      label: "Clothing",
    },
  ],
};

export const BAR_DATA = {
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

export const BAR_OPTIONS = {
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

export const SCALES = {
  x: {
    grid: { display: false },
    border: { display: false, color: "red", width: 50 },
  },
  y: {
    border: { display: false },
    min: 0,
    ticks: {
      stepSize: 10000,
      callback: (value: String | Number) => nFormatter(Number(value)),
    },
  },
};

export const tabSectionsData = [
  {
    title: "Online Store Session",
    data: "225,781",
    percentage: "9%",
  },
  {
    title: "Mobile App Sessions",
    data: "180,000",
    percentage: "5%",
  },
  {
    title: "Social Media Engagement",
    data: "150,000",
    percentage: "3%",
  },
];
