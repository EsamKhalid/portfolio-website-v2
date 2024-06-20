import React from "react";

import { Children } from "react";

import ProjectTile from "./ProjectTile";

import placeholder from "../../Images/placeholder.avif";

interface SortableGridProps {
  children: React.ReactNode;
}

export default function SortableGrid({ children }: SortableGridProps) {
  React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === ProjectTile) {
      console.log(child.props.ProjectTitle);
    }
  });

  return <div className="grid grid-cols-4 gap-5">{children}</div>;
}
