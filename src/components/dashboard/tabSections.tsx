import clsx from "clsx";
import { MdArrowDropUp } from "react-icons/md";
import { tabSectionsData } from "../../lib/data";
import { Fragment } from "react";

const TabSections = () => {
  return (
    <div className="flex gap-2 mb-5 flex-col sm:flex-row w-full">
      {tabSectionsData?.map((data, index) => (
        <Fragment key={data.title}>
          <TabCard data={data} active={index === 0} />
        </Fragment>
      ))}
    </div>
  );
};

export default TabSections;

export function TabCard({
  data,
  active,
}: {
  data: { data: String; title: string; percentage: String };
  active: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col bg-gray-1 w-full sm:w-fit px-5 py-3 rounded-lg gap-4  shadow-lg cursor-pointer",
        active && "bg-slate-200"
      )}
    >
      <div className="flex">
        <span className="border-dotted sm:border-b sm:border-black/30">
          {data.title}
        </span>
      </div>
      <div className="sm:flex gap-1 items-center hidden">
        <span className="font-primary font-bold">{data.data}</span>
        <span className="flex items-center text-slate-500">
          <MdArrowDropUp />
          {data.percentage}
        </span>
      </div>
    </div>
  );
}
