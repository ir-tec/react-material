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
    <div className={classes.MainBody}>
      <Route exact path={`${path}customers/profile`}>
        <Grid container md={12} sm={12}>
          <Profile />
        </Grid>
      </Route>
      <Route exact path={`${path}customers/customerManegment`}>
        <Grid container md={12} sm={12}>
          <CustomerManegment />
        </Grid>
      </Route>
    </div>
  );
};

export default MainBody;
