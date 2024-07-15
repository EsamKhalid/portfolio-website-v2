"use client";

import React, { ReactNode, useEffect, useState } from "react";

import Link from "next/link";

import Select from "react-select";

import { Children } from "react";

import ProjectTile from "./ProjectTile";

import placeholder from "../../Images/placeholder.avif";

interface SortableGridProps {
  children: React.ReactNode;
}

export default function SortableGrid({ children }: SortableGridProps) {
  var selectValue = "DateDescending";

  const [DateList, SetDateList] = useState<number[]>([]);

  const [OutList, setOutList] = useState<ReactNode[]>([]);

  const childList: ReactNode[] = [];

  let keyList: any[] = [];

  function sortElements() {
    sortDates();
    setOutList([]);
    let newOutList: React.ReactNode[] = [];
    for (let i = 0; i < DateList.length; i++) {
      React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === ProjectTile) {
          var childOut = (
            <Link
              key={child.key}
              href={`../ProjectsPage/${child.props.ProjectTitle.replace(
                /\s/g,
                ""
              )}`}
            >
              {child}
            </Link>
          );
          if (
            DateList[i] === child.props.EndDate.getTime() &&
            !keyList.includes(child.key)
          ) {
            console.log(newOutList.includes(childOut));

            newOutList.push(childOut);
            keyList.push(child.key);
          }
        }
      });
    }
    setOutList(newOutList);
  }

  useEffect(() => {
    sortElements();
  }, []);

  function sortDates() {
    //resets the date list
    SetDateList([]);
    //populates the DateList array with the start dates of the projects
    React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === ProjectTile) {
        DateList.push(child.props.EndDate.getTime());
      }
    });

    if (selectValue === "DateAscending") {
      DateList.sort(function (a, b) {
        return a - b;
      });
    } else if (selectValue === "DateDescending") {
      DateList.sort(function (a, b) {
        return b - a;
      });
    }
  }

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    selectValue = event.target.value;
    sortElements();
  }

  return (
    <>
      <div>
        <select
          onChange={handleSelect}
          className="text-white bg-black w-full border border-cybpnk-brdr rounded outline-cybpnk-brdr h-9 mb-5"
        >
          <option value="DateDescending">Date Descending</option>
          <option value="DateAscending">Date Ascending</option>
        </select>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5">
          {OutList}
        </div>
      </div>
    </>
  );
}
