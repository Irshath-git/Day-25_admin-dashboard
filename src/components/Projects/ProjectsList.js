import React from "react";
import Projects from "./Projects";

function ProjectsList() {
  const projectsData = [
    {
      title: "Server Migration",
      percent: "20%",
      content: "20%",
      color: "danger",
    },
    {
      title: "Sales Tracking",
      percent: "40%",
      content: "40%",
      color: "warning",
    },
    {
      title: "Customer Database",
      percent: "60%",
      content: "60%",
      color: "primary",
    },
    {
      title: "Payout Details",
      percent: "80%",
      content: "80%",
      color: "info",
    },
    {
      title: "Account Setup",
      percent: "100%",
      content: "Complete!",
      color: "success",
    },
  ];
  return (
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
      </div>
      <div class="card-body">
        {projectsData.map((item) => (
          <Projects data={item} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;
