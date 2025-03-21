import { useTranslations } from "next-intl";
import { useState } from "react";

interface FilterCollapseProps {
  item: {
    label: string;
    name: string;
    options?: boolean[];
  };
  handleFilterChange: (filter: { name: string; value: string }) => void;
  filters: Record<string, string>;
}

const FilterCollapse = ({
  item,
  handleFilterChange,
  filters,
}: FilterCollapseProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  const t = useTranslations("filters");

  return (
    <div className="relative flex flex-col">
      <div
        onClick={toggleCollapse}
        className="cursor-pointer flex justify-between items-center px-5 py-2.5 bg-[#2f2f2f] rounded-[33px] text-white text-sm font-normal font-['Montserrat']"
      >
        <div>{item.label}</div>
        <div className="flex gap-[10px] items-center justify-center">
          {filters[item.name] === "" ? "all" : filters[item.name]}
          <svg
            className={`${
              !isCollapsed ? "rotate-180" : ""
            } transition-all duration-500 ease-in-out`}
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.430571 0.51192C0.700138 0.197426 1.17361 0.161005 1.48811 0.430571L8.00001 6.01221L14.5119 0.430572C14.8264 0.161005 15.2999 0.197426 15.5695 0.511921C15.839 0.826415 15.8026 1.29989 15.4881 1.56946L8.48811 7.56946C8.20724 7.8102 7.79279 7.8102 7.51192 7.56946L0.51192 1.56946C0.197426 1.29989 0.161005 0.826414 0.430571 0.51192Z"
              fill="#239D60"
            />
          </svg>
        </div>
      </div>
      {!isCollapsed && (
        <div className=" max-h-[200px] overflow-auto hide-scroll mt-[5px] rounded-xl w-full p-[8px] flex flex-col items-center justify-start z-[100] bg-[#444444]">
          <div
            className="text-white hover:bg-[#5a5a5a] border-b border-[#71717471] w-full last:border-none text-center py-[8px] cursor-pointer"
            onClick={() =>
              handleFilterChange({
                name: item.name,
                value: "",
              })
            }
          >
            {t("all")}
          </div>
          {item.options?.map((option: string | boolean) => (
            <div
              className="text-white hover:bg-[#5a5a5a] border-b border-[#71717471] w-full last:border-none text-center py-[8px] cursor-pointer"
              onClick={() =>
                handleFilterChange({
                  name: item.name,
                  value: option as string,
                })
              }
              key={option as string}
            >
              {option === true ? t("yes") : option === false ? t("no") : option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterCollapse;
