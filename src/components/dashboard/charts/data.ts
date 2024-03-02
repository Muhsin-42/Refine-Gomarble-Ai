import { nFormatter } from "@/lib/utils";
import { TooltipItem } from "chart.js";
import { DateRange } from "react-day-picker";

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
      fill: true,
      borderColor: "#489AD2",
      pointBorderColor: "transparent",
      pointBorderWidth: 5,
      label: "Accessories",
      tension: 0.3,
    },
    {
      data: SALES_DATA.map((sale) => sale.Accessories),
      fill: true,
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

export const CHART_OPTIONS = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
      intersect: false,
      mode: "nearest",
      callbacks: {
        title: (item: TooltipItem<"line">[]) =>
          `${item[0]?.dataset?.label || ""} -  ${item[0].label || ""}`,
        label: (item: TooltipItem<"line">) => `${item.raw}`,
      },
    },
    legend: {
      position: "bottom" as const,
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
        callback: (value: String | Number) => nFormatter(Number(value)),
      },
    },
  },
};

export function filterSalesDataByMonthRange(dateRange: DateRange) {
  if (dateRange?.from && dateRange?.to) {
    const fromDate = new Date(dateRange?.from);
    const toDate = new Date(dateRange?.to);
    fromDate.setDate(0);

    return SALES_DATA.filter((sale) => {
      const saleDate = new Date(sale.month + " 01");
      return saleDate >= fromDate && saleDate <= toDate;
    });
  }
  return null;
}

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
