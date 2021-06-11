import { makeStyles } from "@material-ui/core";

const profileStyles = makeStyles((theme) => ({
  profileContainer: {
    minWidth: "100%",
    backgroundColor: "blue",
  },
  header: {},
  profile: {
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "white",
    backgroundColor: "blue",
  },
  From: {
    boxShadow: "0 0 2px #333",
    width: "98%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default profileStyles;
