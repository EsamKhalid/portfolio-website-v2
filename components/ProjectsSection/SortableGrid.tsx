import React from "react";

import { Children } from "react";

import ProjectTile from "./ProjectTile";

import placeholder from "../../Images/placeholder.avif";

interface SortableGridProps {
  children: React.ReactNode;
}

export default function SortableGrid({ children }: SortableGridProps) {
  const dateList: Date[] = [];

  React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === ProjectTile) {
      dateList.push(new Date(child.props.StartDate));
    }
  });

  for (let i = 0; i < dateList.length; i++) {
    console.log(dateList[i]);
  }

  return <div className="grid grid-cols-4 gap-5">{children}</div>;
}