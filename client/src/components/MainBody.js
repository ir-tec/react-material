import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import CustomerManegment from "./customers/CustomerManegment";
import Profile from "./customers/Profile";
import { useStyles } from "../styles/styles";
import { Grid } from "@material-ui/core";

const MainBody = () => {
  const { path } = useRouteMatch();
  const classes = useStyles();
  return (
    <div>
      <Route exact path={`${path}customers/profile`}>
        <div>
          <Profile />
        </div>
      </Route>
      <Route exact path={`${path}customers/customerManegment`}>
        <div>
          <CustomerManegment />
        </div>
      </Route>
    </div>
  );
};

export default MainBody;
