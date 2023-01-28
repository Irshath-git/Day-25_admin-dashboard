import React from "react";
import Cardlist from "./components/Cards/Cardlist";
import ColorBoxList from "./components/ColorBox/ColorBoxList";
import ChartList from "./components/Chart/ChartList";
import ProjectsList from "./components/Projects/ProjectsList";
import Features from "./components/Features/Features";

function Dashboard() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>

      <Cardlist />
      <ChartList />
      <div class="row">
        <div class="col-lg-6 mb-4">
          <ProjectsList />
          <ColorBoxList />
        </div>

        <div class="col-lg-6 mb-4">
          <Features />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
