import clsx from "clsx";
import { MdArrowDropUp } from "react-icons/md";
import { tabSectionsData } from "./data";

const TabSections = () => {
  return (
    <div className="flex gap-2 mb-5">
      {tabSectionsData?.map((data, index) => (
        <Tab data={data} active={index === 0} />
      ))}
    </div>
  );
};

export default TabSections;

function Tab({
  data,
  active,
}: {
  data: { data: String; title: string; percentage: String };
  active: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col bg-gray-1 w-fit px-5 py-3 rounded-lg gap-4  shadow-lg cursor-pointer",
        active && "bg-slate-200"
      )}
    >
      <div className="flex">
        <span className="border-dotted border-b border-black/30">
          {data.title}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-primary font-bold">{data.data}</span>
        <span className="flex items-center text-slate-500">
          <MdArrowDropUp />
          {data.percentage}
        </span>
      </div>
    </div>
  );
}
