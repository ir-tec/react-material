import { makeStyles, withStyles, Badge } from "@material-ui/core";

const drawerWidth = 200;
export const useStyles = makeStyles((theme) => ({
  Drawer: {
    width: drawerWidth,
    zIndex: theme.zIndex.appBar - 1,
  },
  MainBody: {
    width: "100%",
    margin: "auto",
    background: "blue",
  },
  LayoutRoot: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  LayoutChildren: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "rgba(0,0,1,0.1)",
  },
  AppBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: `linear-gradient(to right, ${theme.palette.secondary.light} ,  ${theme.palette.secondary.main});`,
  },

  Avatar: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  activeList: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "50px",
  },
}));

export const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);
