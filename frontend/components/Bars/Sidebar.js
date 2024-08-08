import React from "react";
import { useState } from "react";
import SideNav from "@trendmicro/react-sidenav";
import { Link } from "react-router-dom";

import "../../componentsCss/Bars/Sidebar.css";

const Sidebar = () => {
  const [user, setUser] = useState(null);

  const handleSignInBtn = async (event) => {
    event.preventDefault();
    if (user === null) {
      setUser("Deepu");
    } else {
      setUser(null);
    }
  };

  return (
    <SideNav
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <div class="primary-nav">
        {/* <button href="#" class="hamburger open-panel nav-toggle">
          <span class="screen-reader-text">Menu</span>
        </button> */}

        <nav role="navigation" class="menu">
          <div class="overflow-container">
            <ul class="">
              <li>
                <a href="#">Dashboard</a>
                <span class="icon">
                  <i class="fa fa-dashboard"></i>
                </span>
              </li>

              <li class="menu-hasdropdown">
                <a href="#">Settings</a>
                <span class="icon">
                  <i class="fa fa-gear"></i>
                </span>

                <label title="toggle menu" for="settings">
                  <span class="downarrow">
                    <i class="fa fa-caret-down"></i>
                  </span>
                </label>
                <input
                  type="checkbox"
                  class="sub-menu-checkbox"
                  id="settings"
                />

                <ul class="sub-menu-dropdown">
                  <li>
                    <a href="">Profile</a>
                  </li>
                  <li>
                    <a href="">Security</a>
                  </li>
                  <li>
                    <a href="">Account</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="">Users</a>

                <span class="icon">
                  <i class=" fa fa-user "></i>
                </span>
              </li>

              <li>
                <a href="#">Internships</a>
                <span class="icon">
                  <i class="fa fa-tasks"></i>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </SideNav>
  );
};

export default Sidebar;
