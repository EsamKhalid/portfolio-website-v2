import React, { ReactNode } from "react";

import { Children } from "react";

import ProjectTile from "./ProjectTile";

import placeholder from "../../Images/placeholder.avif";

interface SortableGridProps {
  children: React.ReactNode;
}

/*
export default function SortableGrid({ children }: SortableGridProps) {
  const dateList: number[] = [];

  const test: React.ReactNode[] = [];

  const tempArr: number[] = [];

  React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === ProjectTile) {
      dateList.push(new Date(child.props.StartDate).getTime());

      dateList.sort(function (a, b) {
        return a - b;
      });

      const date = new Date(child.props.StartDate);

      const dindex = dateList.indexOf(date.getTime());

      if (tempArr[dindex] != undefined) {
        tempArr[dindex + 1] = dateList[dateList.indexOf(date.getTime())];
      } else {
        tempArr[dindex] = dateList[dateList.indexOf(date.getTime())];
      }

      test.push(child);
    }
  });

  for (let i = 0; i < test.length; i++) {
    console.log(new Date(tempArr[i]));
  }

  return <div className="grid grid-cols-4 gap-5">{test}</div>;
}
  */

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
          //childList.push(child);
          //console.log(child.props.StartDate);
          outList.push(child);
        }
      }
    });
  }

  return <div className="grid grid-cols-4 gap-5">{outList}</div>;
}
