import React from "react";
import NavBar from "./NavBar";

import SideBar from "./SideBar";
import RTL from "./Rtl";
import { Toolbar } from "@material-ui/core";
function Layout({ children }) {
  return (
    <RTL>
      <div  style={{ display: "flex" }}>
        <NavBar />
        <SideBar />
        <div >
          <Toolbar />
          {children}
        </div>
      </div>
    </RTL>
  );
}

export default Layout;
