import React from "react";

interface StrengthIndicatorProps {
  colors: string[];
}

export const StrengthIndicator: React.FC<StrengthIndicatorProps> = ({
  colors,
}) => {
  return (
    <div className="flex w-full justify-between">
      {colors.map((color, index) => (
        <div key={index} className={`mx-1 h-2 w-1/3 rounded-lg ${color}`} />
      ))}
    </div>
  );
};
