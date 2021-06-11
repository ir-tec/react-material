import React from "react";

import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { StyledBadge, useStyles } from "../styles/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.AppBar} color="secondary">
      <Toolbar className={classes.Toolbar}>
        <Grid container direction="row" md={12} justify="space-between">
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-between"
            item
            md={2}
            sm={3}
            xs={4}
          >
            <Typography variant="h5">Logo</Typography>
            <Button style={{ color: "white" }}>{<MenuIcon />}</Button>
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justify="space-between"
            md={3}
            sm={4}
            xs={6}
          >
            <Badge badgeContent={3} color="primary">
              <MailIcon />
            </Badge>
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>

            <StyledBadge
              overlap="circle"
              variant="dot"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Avatar className={classes.Avatar}></Avatar>
            </StyledBadge>
            <Typography variant="subtitle2">نام کاربر</Typography>
            <Button
              size="small"
              className={classes.Button}
              onClick={handleClick}
            >
              <ExpandMoreIcon style={{ color: "white" }} />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>پروفایل</MenuItem>
              <MenuItem onClick={handleClose}>خروج</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
