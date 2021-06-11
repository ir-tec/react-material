import { makeStyles } from "@material-ui/core";

export const customerManegmentStyles = makeStyles((theme) => ({

  customDate: {
    display: "flex",
    justifyContent: "flex-end",
  },
  date: {
    textAlign: "center",
  },
  
  customerCard: {
    minWidth: "15%",
    height: "6em",
    backgroundColor: "white",
    boxShadow: "0 0 5px black",
  },
  customersShow: {
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
