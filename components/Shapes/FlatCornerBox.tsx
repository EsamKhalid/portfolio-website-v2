import React from "react";

interface CornerProps {
  children: React.ReactNode;
  corner: string;
  className: string;
}

export default function FlatCornerBox({
  corner,
  className,
  children,
}: CornerProps) {
  if (corner === "top-left") {
    return (
      <div
        className={
          "border w-[200px] h-[80px] bg-white mt-28 ml-28 relative after:absolute after:left-0 after:m-[-22px]  after:bg-black after:w-[40px] after:h-[40px] after:rotate-45 " +
          className
        }
      ></div>
    );
  } else if (corner == "top-right") {
    return (
      <div
        className={
          "border w-[200px] h-[80px] bg-white mt-28 ml-28 relative after:absolute after:right-0 after:m-[-22px]  after:bg-cybpnk-ylw2 after:w-[40px] after:h-[40px] after:rotate-45  " +
          className
        }
      ></div>
    );
  } else if (corner == "bottom-left") {
    return (
      <div
        className={
          "border w-[200px] h-[80px] bg-white mt-28 ml-28 relative after:absolute after:left-0 after:bottom-0 after:m-[-22px]  after:bg-black after:w-[40px] after:h-[40px] after:rotate-45 " +
          className
        }
      ></div>
    );
  } else if (corner == "bottom-right") {
    return (
      <div
        className={
          "border w-[200px] h-[80px] bg-white mt-28 ml-28 relative after:absolute after:right-0 after:bottom-0 after:m-[-22px]  after:bg-black after:w-[40px] after:h-[40px] after:rotate-45 " +
          className
        }
      ></div>
    );
  }
}
