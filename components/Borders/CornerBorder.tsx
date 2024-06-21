import React from "react";

interface CornerBorderProps {
  children: React.ReactNode;
  className: string;
  cornerSize: string;
  borderThickness: string;
  borderGap: string;
}

export default function CornerBorder({
  children,
  className,
  cornerSize,
  borderThickness,
  borderGap,
}: CornerBorderProps) {
  const style = {
    "--s": cornerSize,
    "--t": borderThickness,
    "--g": borderGap,
  } as React.CSSProperties;
  return (
    <div className={"border border-corners " + className} style={style}>
      {children}
    </div>
  );
}
