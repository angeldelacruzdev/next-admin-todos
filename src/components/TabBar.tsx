"use client";
import { setCookie } from "cookies-next";
import { useState } from "react";

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({ currentTab = 1, tabOptions = [1, 2, 3] }: Props) => {
  const [Selected, setSelected] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    console.log(tab);
    setCookie("selectedTab", tab.toString());
  };

  return (
    <div
      className={`grid full grid-cols-${tabOptions.length} space-x-2 rounded-xl bg-gray-200`}
    >
      {tabOptions.map((tab) => (
        <div key={tab} className="col-span-1">
          <input
            type="radio"
            id={tab.toString()}
            checked={Selected === tab}
            className="peer hidden"
            onChange={(e) => {}}
          />
          <label
            onClick={() => onTabSelected(tab)}
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
