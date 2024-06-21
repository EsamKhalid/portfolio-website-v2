"use client";

import React, { ReactNode, useState } from "react";

import Select from "react-select";

import { Children } from "react";
import reactSelect from "react-select";

import ProjectTile from "./ProjectTile";

import placeholder from "../../Images/placeholder.avif";

interface SortableGridProps {
  children: React.ReactNode;
}

export default function SortableGrid({ children }: SortableGridProps) {
  const [selectValue, setSelectValue] = useState("");

  const dateList: number[] = [];

  const outList: ReactNode[] = [];

  const childList: ReactNode[] = [];

  React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === ProjectTile) {
      dateList.push(child.props.StartDate.getTime());
    }
  });

  dateList.sort(function (a, b) {
    return a - b;
  });

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectValue(event.target.value);
    console.log(event.target.value);
  }

  for (let i = 0; i < dateList.length; i++) {
    React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === ProjectTile) {
        if (dateList[i] === child.props.StartDate.getTime()) {
          outList.push(child);
        }
      }
    });
  }

  const options = [
    { value: "Date Ascending", label: "Date Ascending" },
    { value: "Date Descending", label: "Date Descending" },
  ];

  return (
    <>
      <div>
        <select
          onChange={handleSelect}
          className="text-white bg-black w-full border border-cybpnk-brdr rounded outline-cybpnk-brdr h-9 mb-5"
        >
          <option value="DateAscending">Date Ascending</option>
          <option value="DateDescending">Date Descending</option>
        </select>
        <div className="grid grid-cols-4 gap-5">{outList}</div>
      </div>
    </>
  );
}
