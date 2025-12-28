import React from "react";

const MyButton = ({
  title,
  theme,
  textColor
}: {
  title?: string;
  theme?: "gray" | "red" | "yellow";
  textColor? : "black" | "white"
}) => {
  return (
    <button className={`px-3 py-1 bg-${theme ?? 'gray'}-800 hover:bg-${theme ?? 'gray'}-700 text-${textColor ?? 'white'} rounded-full`}>
      {title ?? "Click"}
    </button>
  );
};

export default MyButton;
