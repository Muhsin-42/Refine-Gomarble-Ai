import { ISale } from "@/interfaces";
import { type ClassValue, clsx } from "clsx";
import { DateRange } from "react-day-picker";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function nFormatter(num: number, digits = 1) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
  ];

  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
  const item = lookup?.findLast(
    (item: { value: number; symbol: String }) => num >= item.value
  );

  return item
    ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol)
    : "0";
}

export function filterSalesDataByMonthRange(
  dateRange: DateRange,
  data: ISale[]
) {
  if (dateRange?.from && dateRange?.to) {
    const fromDate = new Date(dateRange?.from);
    const toDate = new Date(dateRange?.to);
    fromDate.setDate(0);

    return data.filter((sale) => {
      const saleDate = new Date(sale.month + " 01");
      return saleDate >= fromDate && saleDate <= toDate;
    });
  }
  return [];
}
