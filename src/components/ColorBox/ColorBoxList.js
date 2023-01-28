import React from "react";
import ColorBox from "./ColorBox";

function ColorBoxList() {
  const ColorBoxItems = [
    {
      title: "Primary",
      colorcode: "#4e73df",
      color: "primary",
    },
    {
      title: "Success",
      colorcode: "#1cc88a",
      color: "success",
    },
    {
      title: "Info",
      colorcode: "#36b9cc",
      color: "info",
    },
    {
      title: "Warning",
      colorcode: "#f6c23e",
      color: "warning",
    },
    {
      title: "Danger",
      colorcode: "#e74a3b",
      color: "danger",
    },
    {
      title: "Secondary",
      colorcode: "#858796",
      color: "secondary",
    },
    {
      title: "Light",
      colorcode: "#f8f9fc",
      color: "light",
      ishighlight: true,
      bg: "black",
    },
    {
      title: "Dark",
      colorcode: "#5a5c69",
      color: "dark",
    },
  ];

  return (
    <div className="row" id="color">
      {ColorBoxItems.map((items) => (
        <ColorBox data={items} />
      ))}
    </div>
  );
}

export default ColorBoxList;
