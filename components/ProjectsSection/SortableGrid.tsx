"use client";

import React, { ReactNode, useEffect, useState } from "react";

import Select from "react-select";

import { Children } from "react";
import reactSelect from "react-select";

import ProjectTile from "./ProjectTile";

import placeholder from "../../Images/placeholder.avif";

interface SortableGridProps {
  children: React.ReactNode;
}

export default function SortableGrid({ children }: SortableGridProps) {
  var selectValue = "DateAscending";

  const [dateList, setDateList] = useState<number[]>([]);

  const [outList, setOutList] = useState<ReactNode[]>([]);

  const childList: ReactNode[] = [];

  useEffect(() => {
    sortElements();
  }, []);

  function sortDates() {
    //resets the date list
    setDateList([]);
    //populates the dateList array with the start dates of the projects
    React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === ProjectTile) {
        dateList.push(child.props.StartDate.getTime());
      }
    });

    if (selectValue === "DateAscending") {
      dateList.sort(function (a, b) {
        return a - b;
      });
    } else if (selectValue === "DateDescending") {
      dateList.sort(function (a, b) {
        return b - a;
      });
    }
  }

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    selectValue = event.target.value;
    sortElements();
  }

  function sortElements() {
    sortDates();
    setOutList([]);
    let newOutList: React.ReactNode[] = [];
    for (let i = 0; i < dateList.length; i++) {
      React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === ProjectTile) {
          if (dateList[i] === child.props.StartDate.getTime()) {
            newOutList.push(child);
          }
        }
      });
    }
    setOutList(newOutList);
  }

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
