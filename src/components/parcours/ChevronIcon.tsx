import React from "react";

type ArrowIconProps = {
  direction?: "right" | "left";
  size?: number;
  color?: string;
  className?: string;
};

export const ChevronIcon: React.FC<ArrowIconProps> = ({
  direction = "right",
  size = 24,
  color = "currentColor",
  className,
}) => {
  const rotation = direction === "left" ? "rotate(180deg)" : undefined;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: rotation }}
      className={className}
    >
      <path
        d="M9 6l6 6-6 6"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
