import React from "react";
import NavBar from "./NavBar";

import SideBar from "./SideBar";
import RTL from "./Rtl";
import { Grid, Toolbar } from "@material-ui/core";
function Layout({ children }) {
  return (
    <RTL>
      <div  style={{ display: "flex" }}>
        <NavBar />
        <SideBar />
        <Grid container md={10} >
          <Toolbar />
          {children}
        </Grid>
      </div>
    </RTL>
  );
}

export default Layout;
