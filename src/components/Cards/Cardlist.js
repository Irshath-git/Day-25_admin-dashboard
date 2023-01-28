import React from "react";
import {
  faCalendar,
  faClipboardList,
  faComments,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

function Cardlist() {
  const cardItems = [
    {
      title: "EARNINGS(MONTHLY)",
      price: "$40,000",
      color: "primary",
      icon: faCalendar,
    },
    {
      title: "EARNINGS(ANNUAL)",
      price: "$215,000",
      color: "success",
      icon: faDollar,
    },
    {
      title: "TASKS",
      price: "50%",
      color: "info",
      icon: faClipboardList,
      isLoad: true,
    },
    {
      title: "PENDING REQUESTS",
      price: "18",
      color: "warning",
      icon: faComments,
    },
  ];
  return (
    <div className="row">
      {cardItems.map((items) => (
        <Card data={items} />
      ))}
    </div>
  );
}

export default Cardlist;
