import { makeStyles } from "@material-ui/core";

const profileStyles = makeStyles((theme) => ({
  profileContainer: {
    backgroundColor: "green",
  },
  header: {},
  profile: {
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  form: {
    width: "97%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0 0 5px #333",
    padding: "24px",
  },
  textField: {
  },
}));

export default profileStyles;
