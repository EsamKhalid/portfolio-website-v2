"use client";

import React, { ReactNode } from "react";

import { Children } from "react";

import ProjectTile from "./ProjectTile";

import placeholder from "../../Images/placeholder.avif";

interface SortableGridProps {
  children: React.ReactNode;
}

export default function SortableGrid({ children }: SortableGridProps) {
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

  for (let i = 0; i < dateList.length; i++) {
    React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === ProjectTile) {
        if (dateList[i] === child.props.StartDate.getTime()) {
          outList.push(child);
        }
      }
    });
  }

  return (
    <>
      <div>
        <select className="text-white bg-black w-full border border-cybpnk-brdr rounded outline-cybpnk-brdr h-9 mb-5">
          <option value="DateAscending">Date Ascending</option>
          <option value="DateDescending">Date Descending</option>
        </select>
        <div className="grid grid-cols-4 gap-5">{outList}</div>
      </div>
    </>
  );
}
