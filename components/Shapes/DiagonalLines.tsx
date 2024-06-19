import React from "react";

interface DiagonalLinesProps {
  className: string;
  bgsize: string;
  rotation: string;
  thicknessType: string;
}

export default function DiagonalLines({
  className,
  bgsize,
  rotation,
  thicknessType,
}: DiagonalLinesProps) {
  bgsize = bgsize + " " + bgsize;

  var rotate = "";

  if (rotation === "left") {
    rotate = "45";
  } else if (rotation === "right") {
    rotate = "135";
  }

  bgout = "";

  if (thicknessType == "thin") {
    var bg =
      "linear-gradient(deg, transparent 25%, transparent 40% ,white 25%, white 50%, transparent 50%, transparent 90%, white 75%)";

    var bgout = bg.slice(0, 16) + rotate + bg.slice(16);
  } else if (thicknessType == "thick") {
    var bg =
      "linear-gradient(deg, transparent 25%, white 25%, white 50%, transparent 50%, transparent 75%, white 75%, white)";

    var bgout = bg.slice(0, 16) + rotate + bg.slice(16);
  }

  return (
    <div
      className={"custom-diagonal-white w-full h-[25px]" + " " + className}
      style={{ backgroundSize: bgsize, backgroundImage: bgout }}
    ></div>
  );
}
