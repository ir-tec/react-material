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
    <>
      <Grid container item md={12} className={classes.MainBody}>
        <Route exact path={`${path}customers/profile`}>
          <Profile />
        </Route>

        <Route exact path={`${path}customers/customerManegment`}>
          <CustomerManegment />
        </Route>
      </Grid>
    </>
  );
};

export default MainBody;
