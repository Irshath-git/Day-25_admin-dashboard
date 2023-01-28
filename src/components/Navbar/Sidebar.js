import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>
        <hr class="sidebar-divider my-0" />
        <li class="nav-item active">
          <Link class="nav-link" to={"/portal/dashboard"}>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <button
            onClick={() => setVisible(!isVisible)}
            className={isVisible ? "nav-link " : "nav-link collapsed"}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-controls="collapseTwo"
            aria-expanded={isVisible}
            style={{ border: "none", background: "none" }}
          >
            <span>components</span>
          </button>

          <div
            id="collapseTwo"
            className={isVisible ? "collapse show" : "collapse"}
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link className="collapse-item" to="/portal/buttons">
                Buttons
              </Link>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">LogOut</div>
        <li class="nav-item active">
          <Link class="nav-link" to={"/"}>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>LogOut</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
